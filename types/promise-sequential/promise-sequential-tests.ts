import promiseSequential = require('promise-sequential');

const promiseFunctions = [
    async (): Promise<string> => await 'a',
    async (): Promise<string> => await 'b',
    async (): Promise<string> => await 'c',
];

async function main(): Promise<void> {
    const result: any[] = await promiseSequential(promiseFunctions);
}

main();
