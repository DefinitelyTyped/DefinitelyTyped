import multimatch = require("multimatch");

const options: multimatch.MultimatchOptions = {
	debug: true
};

multimatch(["unicorn", "cake", "rainbows"], "!cake");
multimatch(["unicorn", "cake", "rainbows"], ["*", "!cake"]);
multimatch(["unicorn", "cake", "rainbows"], ["*", "!cake"], options);
