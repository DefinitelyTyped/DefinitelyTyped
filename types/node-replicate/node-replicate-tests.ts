import replicate from "node-replicate";

interface InputsType {
    prompt: string;
}

type OutputType = string[] | null;

const testRun = async () => {
    const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
    const input = { prompt: "an astronaut riding on a horse" };

    await replicate.run(model, input);
};

testRun();
