import didYouMean from 'didyoumean';

interface ListType {
	id: string;
}

let input = 'insargrm';
let result;
const list: string[] = ['facebook', 'twitter', 'instagram', 'linkedin'];

// The method matches 'insargrm' to 'instagram'.
result = didYouMean(input, list);

input = 'google plus';

// The method was unable to find 'google plus' in the list of options.
result = didYouMean(input, list);

// Matching to a list of key, value pairs.

input = 'insargrm';
const listOfObjects: ListType[] = [ { id: 'facebook' }, { id: 'twitter' }, { id: 'instagram' }, { id: 'linkedin' } ];
const key = 'id';
result = didYouMean(input, list, key);

didYouMean.returnWinningObject = true;
result = didYouMean(input, list, key);
