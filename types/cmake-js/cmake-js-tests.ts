import { BuildSystem } from "cmake-js";

const buildSystem = new BuildSystem();

(async () => {
    await buildSystem.install();
    await buildSystem.configure();
    await buildSystem.build();
    await buildSystem.clean();
})();
