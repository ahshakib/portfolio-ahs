import crypto from 'crypto';
import { NextResponse } from 'next/server';

const API_KEY = '51541dfda6120b45c23b4cacbbb5d7e7fb779213';
const API_SECRET = '3350d46d640c27c088f836d2f1377e4faf7b4b32';

export async function GET() {
  try {
    const time = Math.floor(Date.now() / 1000);
    const rand = Math.random().toString(36).substring(2, 8);
    const methodName = 'user.info';
    const handles = 'AHS'; // Replace with actual handle
    
    // Create API signature
    const toHash = `${rand}/${methodName}?apiKey=${API_KEY}&handles=${handles}&time=${time}#${API_SECRET}`;
    const apiSig = crypto.createHash('sha512').update(toHash).digest('hex');
    
    // Fetch user info
    const userInfoUrl = `https://codeforces.com/api/${methodName}?handles=${handles}&apiKey=${API_KEY}&time=${time}&apiSig=${rand}${apiSig}`;
    const userResponse = await fetch(userInfoUrl);
    const userData = await userResponse.json();
    
    if (userData.status !== 'OK') {
      throw new Error('Failed to fetch user data');
    }

    const user = userData.result[0];
    
    // Fetch user submissions to count solved problems
    const submissionsUrl = `https://codeforces.com/api/user.status?handle=${handles}`;
    const submissionsResponse = await fetch(submissionsUrl);
    const submissionsData = await submissionsResponse.json();
    
    let solvedCount = 0;
    if (submissionsData.status === 'OK') {
      const solvedProblems = new Set();
      submissionsData.result.forEach((submission: any) => {
        if (submission.verdict === 'OK') {
          solvedProblems.add(`${submission.problem.contestId}-${submission.problem.index}`);
        }
      });
      solvedCount = solvedProblems.size;
    }

    return NextResponse.json({
      rating: user.rating || 0,
      rank: user.rank || 'Unrated',
      maxRating: user.maxRating || 0,
      maxRank: user.maxRank ? user.maxRank.charAt(0).toUpperCase() + user.maxRank.slice(1) : 'Unrated',
      solved: solvedCount,
    });
  } catch (error) {
    console.error('Error fetching Codeforces data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Codeforces data' },
      { status: 500 }
    );
  }
}
