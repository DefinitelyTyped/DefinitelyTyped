import DockerEvents from "docker-events";
import Dockerode from "dockerode";

const emitter = new DockerEvents({
    docker: new Dockerode(),
});

emitter.on("destroy", (message: object) => {
    console.log("Container destroyed: %j", message);
    emitter.stop();
});

emitter.start();
