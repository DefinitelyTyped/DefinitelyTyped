import ejs = require("ejs");
var people = ['geddy', 'neil', 'alex'];
var    html = ejs.render('<%= people.join(", "); %>', { people: people });
