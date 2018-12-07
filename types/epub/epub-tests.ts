import EPub = require("epub");

var epub = new EPub("./file.epub");
epub.on("end", function(){
	epub.getChapter("chapter_id", function(err: Error, text: string) {});
});

epub.parse();
