import { Editor } from "@ckeditor/ckeditor5-core";
import Heading from "@ckeditor/ckeditor5-heading";

class MyEditor extends Editor {}
const myEditor = new MyEditor();

let str = "";

new Heading.Heading(myEditor);
Heading.Heading.requires.length === 2;

const headingEditing = new Heading.HeadingEditing(myEditor);
headingEditing.init();
headingEditing.afterInit();

const headingUI = new Heading.HeadingUI(myEditor);
headingUI.init();

const headingButtonsUI = new Heading.HeadingButtonsUI(myEditor);
headingButtonsUI.init();

const title = new Heading.Title(myEditor);
title.init();
str = title.getTitle();
str = title.getBody();
str = title.getBody({ rootName: str });
str = title.getBody({ trim: "none" });
str = title.getBody({ rootName: str, trim: "none" });
