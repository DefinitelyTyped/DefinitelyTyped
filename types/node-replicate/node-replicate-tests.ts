import replicate from "node-replicate";

export const test = async () => {
    const prediction = await replicate
        .model("stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf")
        .predict(
            {
                prompt: "Hello",
            },
            {
                onUpdate(res) {},
            },
        );
};
