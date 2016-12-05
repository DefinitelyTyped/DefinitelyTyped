// Type definitions for epub
// Project: https://github.com/julien-c/epub
// Definitions by: Julien Chaumond <https://github.com/julien-c>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 *  new EPub(fname[, imageroot][, linkroot])
 *  - fname (String): filename for the ebook
 *  - imageroot (String): URL prefix for images
 *  - linkroot (String): URL prefix for links
 *
 *  Creates an Event Emitter type object for parsing epub files
 *
 *      var epub = new EPub("book.epub");
 *      epub.on("end", function () {
 *           console.log(epub.spine);
 *      });
 *      epub.on("error", function (error) { ... });
 *      epub.parse();
 *
 *  Image and link URL format is:
 *
 *      imageroot + img_id + img_zip_path
 *
 *  So an image "logo.jpg" which resides in "OPT/" in the zip archive
 *  and is listed in the manifest with id "logo_img" will have the
 *  following url (providing that imageroot is "/images/"):
 *
 *      /images/logo_img/OPT/logo.jpg
 **/
declare module "epub" {

	import {EventEmitter} from "events";

	interface TocElement {
		level: number;
		order: number;
		title: string;
		id: string;
		href?: string;
	}

	class EPub extends EventEmitter {
		constructor(epubfile: string, imagewebroot?: string, chapterwebroot?: string);

		metadata: Object;
		manifest: Object;
		spine: Object;
		flow: Array<Object>;
		toc: Array<TocElement>;

		parse(): void;

		getChapter(chapterId: string, callback: (error: Error, text: string) => void): void;

		getChapterRaw(chapterId: string, callback: (error: Error, text: string) => void): void;

		getImage(id: string, callback: (error: Error, data: Buffer, mimeType: string) => void): void;

		getFile(id: string, callback: (error: Error, data: Buffer, mimeType: string) => void): void;
	}

	export = EPub;
}
