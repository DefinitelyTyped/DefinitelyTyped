import getName = require("node-random-name");

getName();
getName({ first: true, gender: "male" });
getName({ last: true });
getName({ seed: "Based on this" });
getName({ random: Math.random, female: true });
