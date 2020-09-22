import sololearn = require('sololearn');

main();
async function main() {
    await sololearn.getCode('hi'); // $ExpectType Code
    sololearn.getUser('1'); // $ExpectError
    const jsLeaderboard = await sololearn.getLeaderboard('JavaScript');
    jsLeaderboard[0].rank; // $ExpectType number
    const question = await sololearn.getQuestion(1);
    question.bestAnswer?.date; // $ExpectType Date | undefined
    sololearn.getLeaderboard(); // $ExpectType Promise<Leader[]>
}
