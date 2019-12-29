import parseInfo = require("infobox-parser");

interface Hero {
    name: string;
    hero: boolean;
}

const { name, hero }: Hero = parseInfo(`
{{Infobox Batman
|name      = Bruce Wayne
|hero      = y
}}`).general;
/* Outputs {
	general: {
		hero: true,
		name: 'Bruce Wayne'
	}
}
*/
