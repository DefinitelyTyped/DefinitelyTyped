declare namespace UUIDGenerator {
    function getRandomUUID(): Promise<string>;
    function getRandomUUID(callback: (uuid: string) => void): void;
}

export default UUIDGenerator;
