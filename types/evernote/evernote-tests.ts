import * as Evernote from "evernote";

const client = new Evernote.Client({ token: "abcdef", sandbox: true });
const filter = new Evernote.NoteStore.NoteFilter({
    words: "one, two, three",
    ascending: true,
});
const userStore = client.getUserStore();
userStore.getUser();

const noteStore = client.getNoteStore();
noteStore.findNoteCounts(filter, false).then(n => Object.keys(n.notebookCounts || {}));
