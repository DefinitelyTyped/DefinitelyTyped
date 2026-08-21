import Dockerode = require("dockerode");
import DockerodeCompose = require("dockerode-compose");

// Code samples from dockerode-compose 'Getting started'
var docker = new Dockerode();
var compose = new DockerodeCompose(docker, "./test/wordpress.yml", "wordpress");

(async () => {
    await compose.pull();
    var state = await compose.up();
    console.log(state);
})();

// Code examples from dockerode-compose 'examples' folder
// down.js
var docker = new Dockerode();

var yamlFile = "./test/assets/wordpress_original.yml";
var projectName = "wordpress";

if (process.argv.length > 2) {
    if (process.argv[2] !== undefined) {
        yamlFile = process.argv[2];
    }
    if (process.argv[3] !== undefined) {
        projectName = process.argv[3];
    }
}

var compose = new DockerodeCompose(docker, yamlFile, projectName);

(async () => {
    var state = await compose.down({ volumes: true });
    console.log(state);
})();

// up.js
var docker = new Dockerode();

var yamlFile = "./test/assets/wordpress_original.yml";
var projectName = "wordpress";

if (process.argv.length > 2) {
    if (process.argv[2] !== undefined) {
        yamlFile = process.argv[2];
    }
    if (process.argv[3] !== undefined) {
        projectName = process.argv[3];
    }
}

var compose = new DockerodeCompose(docker, yamlFile, projectName);

(async () => {
    var state = await compose.up();
    console.log(state);
})();

// pull.js
var docker = new Dockerode();

var yamlFile = "./test/assets/wordpress_original.yml";
var projectName = "wordpress";

if (process.argv.length > 2) {
    if (process.argv[2] !== undefined) {
        yamlFile = process.argv[2];
    }
    if (process.argv[3] !== undefined) {
        projectName = process.argv[3];
    }
}

var compose = new DockerodeCompose(docker, yamlFile, projectName);

(async () => {
    console.log(await compose.pull());
})();

// Own examples
var docker = new Dockerode();
var compose = new DockerodeCompose(docker, "./test/wordpress.yml", "wordpress");

(async () => {
    const output = await compose.down();
    await compose.down({ volumes: true });
    console.log(output.file);
    console.log(output.services);
    console.log(output.networks);
    console.log(output.volumes);
})();

(async () => {
    const output = await compose.up();
    await compose.up({ verbose: true });
    console.log(output.file);
    console.log(output.secrets);
    console.log(output.volumes);
    console.log(output.configs);
    console.log(output.networks);
    console.log(output.services);
})();

(async () => {
    await compose.pull();
    await compose.pull("wordpress", { verbose: true, streams: true });
})();
