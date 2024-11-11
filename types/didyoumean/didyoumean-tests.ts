import didYouMean from "didyoumean";

let input = "insargrm";
let result;
const list: string[] = ["facebook", "twitter", "instagram", "linkedin"];

result = didYouMean(input, list); // instagram

input = "google plus";

result = didYouMean(input, list); // null

input = "insargrm";
const listOfObjects = [{ id: "facebook" }, { id: "twitter" }, { id: "instagram" }, { id: "linkedin" }];
const key = "id";
result = didYouMean(input, listOfObjects, key); // instagram

didYouMean.returnWinningObject = true;
result = didYouMean(input, listOfObjects, key); // { id: 'instagram' }
