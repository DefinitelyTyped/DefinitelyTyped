
import { defaults, limits, hash, verify, generateSalt } from 'argon2';

main();

async function main() {

    const defaultTimeCost: number = defaults.timeCost;
    const defaultMemoryCost: number = defaults.memoryCost;
    const defaultParallelism: number = defaults.parallelism;
    const defaultArgon2d: boolean = defaults.argon2d;

    const minMemoryCost: number = limits.memoryCost.min;
    const maxMemoryCost: number = limits.memoryCost.max;
    const minTimeCost: number = limits.timeCost.min;
    const maxTimeCost: number = limits.timeCost.max;
    const minParallelism: number = limits.parallelism.min;
    const maxParallelism: number = limits.parallelism.max;

    const options = {
        timeCost: 4,
        memoryCost: 13,
        parallelism: 2,
        argon2d: true,
    };

    const hash1: string = await hash('secret', new Buffer(''), options);
    const hash2: string = await hash('secret', new Buffer(''), {});
    const hash3: string = await hash('secret', new Buffer(''));

    const verified: boolean = await verify('long-hash', 'secret');

    const salt1: Buffer = await generateSalt();
    const salt2: Buffer = await generateSalt(32);
}
