async function test() {
    const cloudClient = CloudClient.create("c24b08d7-cfe7-45a0-90a3-83c785b6baa6", "https://cloud.anylogic.com");
    const model = await cloudClient.getModelById("b7e63e72-2d1b-454b-a5fd-0b2e0b7c20dd");
    const latestVersion = await cloudClient.getModelVersionByNumber(model, model.modelVersions.length);
    const inputs = cloudClient.createDefaultInputs(latestVersion);
    inputs.setInput("do it", false);
    const animation = await cloudClient.startAnimation(inputs, "my-div");
    animation.setSpeed(1);
    animation.callFunction("experiment.root.setValue", [6]);

    const modelRun = await cloudClient.createSimulation(inputs);
    await modelRun.run();
    await modelRun.waitForCompletion();

    const outputs = await modelRun.getOutputs() as SingleRunOutputs;
}
