import * as mongoose from "mongoose";

import { MyModel } from "./definitions";

// dummy variables
var cb = function () {};

/*
 * section document.js
 * https://mongoosejs.com/docs/api/document.html
 */
var doc = new mongoose.Document();
doc.$isDefault("path").valueOf();
doc.$locals.field = "value";
const docDotDepopulate: mongoose.Document = doc.depopulate("path");
doc.equals(doc).valueOf();
doc.execPopulate()
    .then(function (arg) {
        arg.execPopulate();
    })
    .catch(function (err) {});
doc.get("path", Number);
doc.get("path", Number, { virtuals: true, getters: false });
doc.init(doc).init(doc, {});
doc.inspect();
doc.invalidate("path", new Error("hi")).toString();
doc.invalidate("path", new Error("hi"), 999).toString();
doc.isDirectModified("path").valueOf();
doc.isInit("path").valueOf();
doc.isModified("path").valueOf();
doc.isSelected("path").valueOf();
doc.markModified("path");
doc.modifiedPaths()[0].toLowerCase();
doc.parent();
doc.populate(function (err, doc) {
    doc.populate("path", function (err, doc) {
        doc.populate({
            path: "path",
            select: "path",
            match: {},
        });
    });
});
doc.populated("path");
doc.set("path", 999, {}).set({ path: 999 });
doc.overwrite({ path: 999 });
doc.toJSON({
    getters: true,
    virtuals: false,
});
doc.toObject({
    transform: function (doc, ret, options) {
        doc.toObject();
    },
});
doc.toString().toLowerCase();
doc.unmarkModified("path");
doc.update(doc, cb).cursor();
doc.update(
    doc,
    {
        safe: true,
        upsert: true,
        strict: "throw",
    },
    cb,
).cursor();
doc.validate({}, function (err) {});
doc.validate().then(null).catch(null);
(() => {
    // Scope to avoid type mixing
    var validationError = doc.validateSync(["path1", "path2"]);
    if (validationError) {
        validationError.stack;
    }
})();

/* practical examples */

doc = new MyModel();
doc.$isDefault("name");
MyModel.findOne()
    .populate("author")
    .exec(function (err, doc) {
        if (doc) {
            doc.depopulate("author");
        }
    });
MyModel.replaceOne({ foo: "bar" }, { qux: "baz" }).where();
MyModel.replaceOne({ foo: "bar" }, { qux: "baz" }, (err, raw) => {});
MyModel.bulkWrite([{ foo: "bar" }]).then(r => {
    console.log(r.deletedCount);
});
MyModel.bulkWrite([], (err, res) => {
    console.log(res.modifiedCount);
});
MyModel.bulkWrite([], { ordered: false }, (err, res) => {
    console.log(res.modifiedCount);
});
doc.populate("path");
doc.populate({ path: "hello" });
doc.populate("path", cb);
doc.populate({ path: "hello" }, cb);
doc.populate(cb);
doc.populate({ path: "hello" }).execPopulate().catch(cb);
doc.update(
    {
        $inc: { wheels: 1 },
    },
    { w: 1 },
    cb,
);

const ImageSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        id: { type: Number, unique: true, required: true, index: true },
    },
    { id: false },
);

const clonedSchema: mongoose.Schema = new mongoose.Schema().clone();

interface ImageDoc extends mongoose.Document {
    name: string;
    id: number;
}

const ImageModel = mongoose.model<ImageDoc>("image", ImageSchema);

ImageModel.findOne({}, function (err, doc) {
    if (doc) {
        doc.name;
        doc.id;
    }
});

/* Using flatten maps example */
interface Submission extends mongoose.Document {
    name: string;
    fields: Record<string, string>;
}
var SubmissionSchema = new mongoose.Schema({
    name: String,
    fields: {
        type: Map,
        of: String,
    },
});
const SubmissionModel = mongoose.model<Submission>("Submission", SubmissionSchema);
const submission = new SubmissionModel({
    name: "Submission Name",
    fields: {
        extra: "Value",
        other: "Thing",
    },
});
submission
    .save()
    .then(result => {
        console.log(
            result.toObject({
                flattenMaps: true,
            }),
        );
    })
    .catch(() => {
        console.log("Flatten maps error");
    });

/** Delete one with post hook example. */
interface User extends mongoose.Document {
    username: string;
}

const UserSchema = new mongoose.Schema({
    username: String,
});

const UserModel = mongoose.model<User>("User", UserSchema);

UserSchema.post<User>("deleteOne", { document: true, query: false }, function cleanup(doc) {
    // Perform cleanup action here.
    // This can be used to cascade your db and remove any references to the given user.
    console.log("User deleteOne hook called for:", doc._id);
});

UserSchema.post<User>("remove", { document: true, query: false }, function cleanup(doc) {
    // Perform cleanup action here.
    // This can be used to cascade your db and remove any references to the given user.
    console.log("User remove hook called for:", doc._id);
});

async function createAndDeleteUser(): Promise<void> {
    try {
        const doc = await UserModel.create({ username: "Test" });
        await doc.deleteOne();
        console.log("Deleted user document!");
    } catch (e) {
        console.log("Error creating or deleting user:", e.message);
    }
}

async function createAndRemoveUser(): Promise<void> {
    try {
        const doc = await UserModel.create({ username: "Test" });
        await doc.remove();
        console.log("Removed user document!");
    } catch (e) {
        console.log("Error creating or removing user:", e.message);
    }
}

createAndDeleteUser();
createAndRemoveUser();
