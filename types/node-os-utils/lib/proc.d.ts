export default class Proc {
    totalProcesses(): Promise<number | string>;

    zombieProcesses(): Promise<number | string>;
}
