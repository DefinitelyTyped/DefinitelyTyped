import mime = require("mime");
import mimelite = require("mime/lite");
import Mime from "mime/Mime";

let strOrNul: string | undefined;

const obj = {
    mime: ["ext", "ext2"],
};

const obj2 = {
    "text/plain": ["txt"],
};

mime.define(obj);
mime.define(obj2);
strOrNul = mime.lookup("ext");
strOrNul = mime.lookup("foo");
strOrNul = mime.extension("mime");
strOrNul = mime.extension("bar");

const myMime = new Mime(obj);
strOrNul = myMime.lookup("foo");
strOrNul = myMime.extension("text/plan");

mimelite.define(obj2);
strOrNul = mimelite.lookup("ext");
strOrNul = mimelite.lookup("foo");
strOrNul = mimelite.extension("mime");
strOrNul = mimelite.extension("bar");
