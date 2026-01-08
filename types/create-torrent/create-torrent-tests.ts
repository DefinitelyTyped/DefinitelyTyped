/// <reference types="node" />
import createTorrent, { announceList, isJunkPath } from "create-torrent";

const cb = (err: Error | null, torrent?: Buffer) => {};

createTorrent("test", (err: Error | null, torrent?: Buffer) => {
    if (err) return;
    if (torrent) torrent.equals(Buffer.alloc(0));
});

createTorrent(["a.txt", "b.txt"], cb);

createTorrent(
    [Buffer.from("a")],
    {
        name: "test",
        comment: "comment",
        createdBy: "tester",
        creationDate: new Date(),
        private: true,
        pieceLength: 1024,
        maxPieceLength: 2 * 1024 * 1024,
        announceList: [["udp://tracker.example"]],
        urlList: ["https://example.com/file"],
        info: { custom: "value" },
        onProgress: (written: number, total: number) => {
            const percent: number = Math.round((written / total) * 100);
            console.log(percent);
        },
    },
    cb,
);

createTorrent(
    [Buffer.from("a")],
    {
        name: "test",
        comment: "comment",
        createdBy: "tester",
        creationDate: new Date(),
        private: false,
        pieceLength: 1024,
        maxPieceLength: 2 * 1024 * 1024,
        announceList: [["udp://tracker.example"]],
        urlList: ["https://example.com/file"],
        info: { custom: "value" },
        onProgress: (written: number, total: number) => {
            const percent: number = Math.round((written / total) * 100);
            console.log(percent);
        },
    },
    cb,
);

const junk: boolean = isJunkPath("dir");
const firstTracker: string | undefined = announceList[0]?.[0];
console.log(junk, firstTracker);
