import mime = require("mime");
import mimelite = require("mime/lite");
import Mime from "mime/Mime";

let strOrNul: string | null;

const obj = {
    mime: ["ext", "ext2"]
};

const obj2 = {
    "text/plain": ["txt"]
};

mime.define(obj);
mime.define(obj2, true);
strOrNul = mime.getType("ext");
strOrNul = mime.getType("foo");
strOrNul = mime.getExtension("mime");
strOrNul = mime.getExtension("bar");

const myMime = new Mime(obj);
strOrNul = myMime.getType("foo");
strOrNul = myMime.getExtension("text/plan");

mimelite.define(obj2, true);
strOrNul = mimelite.getType("ext");
strOrNul = mimelite.getType("foo");
strOrNul = mimelite.getExtension("mime");
strOrNul = mimelite.getExtension("bar");
