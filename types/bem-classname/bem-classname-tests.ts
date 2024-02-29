import bemClassName = require("bem-classname");

bemClassName("block"); // 'block'

bemClassName("block", ["mod1"]); // 'block block--mod1'

bemClassName("block", ["mod1", "mod2", undefined]); // 'block block--mod1 block--mod2'

bemClassName("block", { mod1: true }); // 'block block--mod1'

bemClassName("block", { mod1: true, mod2: true, mod3: false }); // 'block block--mod1 block--mod2'

bemClassName("block", "element"); // 'block__element'

bemClassName("block", "element", "mod1"); // 'block__element block__element--mod1'

bemClassName("block", "element", ["mod1", "mod2", undefined]); // 'block__element block__element--mod1 block__element--mod2'

bemClassName("block", "element", { mod1: true, mod2: true, mod3: false }); // 'block__element block__element--mod1 block__element--mod2'
