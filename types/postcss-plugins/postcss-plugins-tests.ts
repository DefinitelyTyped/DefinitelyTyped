import plugins = require("postcss-plugins");

plugins; // $ExpectType Plugin[]
plugins.map(plugin => plugin.name);
plugins.reduce((a, p) => (a.stars && p.stars > a.stars ? p : a), { stars: 0 });
plugins.reduce((a, p) => (p.author === "himynameisdave" ? ++a : a), 0);
