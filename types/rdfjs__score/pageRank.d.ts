import { ScoreFn } from '.';

interface PageRank {
    alpha?: number;
    epsilon?: number;
}

declare const pageRank: ScoreFn<[PageRank] | []>;
export default pageRank;
