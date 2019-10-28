import promiseSequential = require('promise-sequential');

const promiseFunctions = [
    async (): Promise<string> => new Promise((resolve, reject) => 'a'),
    async (): Promise<string> => new Promise((resolve, reject) => 'b'),
    async (): Promise<string> => new Promise((resolve, reject) => 'c'),
];

async function main(): Promise<void> {
    const result: any[] = await promiseSequential(promiseFunctions);
}

main();
