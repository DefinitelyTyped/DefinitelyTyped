import { Editor } from "@ckeditor/ckeditor5-core";
import { Heading, HeadingEditing, HeadingUI, Title, HeadingButtonsUI } from "@ckeditor/ckeditor5-heading";

class MyEditor extends Editor {}
const myEditor = new MyEditor();

let str = "";

new Heading(myEditor);
Heading.requires.length === 2;

const headingEditing = new HeadingEditing(myEditor);
headingEditing.init();
headingEditing.afterInit();

const headingUI = new HeadingUI(myEditor);
headingUI.init();

const headingButtonsUI = new HeadingButtonsUI(myEditor);
headingButtonsUI.init();

const title = new Title(myEditor);
title.init();
str = title.getTitle();
str = title.getBody();
str = title.getBody({ rootName: str });
str = title.getBody({ trim: "none" });
str = title.getBody({ rootName: str, trim: "none" });
