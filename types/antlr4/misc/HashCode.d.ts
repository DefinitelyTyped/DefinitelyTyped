export default class HashCode {
    static hashStuff(...hashes: number[]): number;

    update(...hashes: number[]): void;

    finish(): number;
}
