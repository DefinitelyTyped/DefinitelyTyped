import title = require("title");

var document = {title: "original"};

title("newtitle"); // document.title === 'newtitle'

title("%s - %o", "new"); // document.title === 'new - original'

title.reset(); // document.title === 'original'
