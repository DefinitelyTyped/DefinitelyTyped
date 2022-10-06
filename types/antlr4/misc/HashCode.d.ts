export default class HashCode {
    static hashStuff(...hashes: number[]): number;

    count: number;
    hash: number;

    update(...hashes: number[]): void;

    finish(): number;
}
