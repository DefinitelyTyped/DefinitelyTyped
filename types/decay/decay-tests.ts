import {redditHot, hackerHot, wilsonScore} from 'decay';

const upvotes = 42;
const downvotes = 12;
const posted = new Date(2017, 1, 1);

let score: number;

let redditCalculator = redditHot();
score = redditCalculator(upvotes, downvotes, posted);
redditCalculator = redditHot(10000);
score = redditCalculator(upvotes, downvotes, posted);

let hackerCalculator = hackerHot();
score = hackerCalculator(upvotes, posted);
hackerCalculator = hackerHot(1.6);
score = hackerCalculator(upvotes, posted);

let wilsonCalculator = wilsonScore();
score = wilsonCalculator(upvotes, downvotes);
wilsonCalculator = wilsonScore(1.0);
score = wilsonCalculator(upvotes, downvotes);
