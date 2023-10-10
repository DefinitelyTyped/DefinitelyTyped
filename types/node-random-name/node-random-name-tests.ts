import random_name = require("node-random-name");

random_name();
random_name({ first: true, gender: "male" });
random_name({ last: true });
random_name({ seed: "Based on this" });
random_name({ random: Math.random, female: true });
