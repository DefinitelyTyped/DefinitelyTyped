import * as prompts from "prompts";

ask();

async function ask(): Promise<number> {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message: 'Input value to double:',
        validate: (value: any) => value < 0 ? `Cant be less than zero` : true
    });

    return Number.parseInt(response.value) * 2;
}

