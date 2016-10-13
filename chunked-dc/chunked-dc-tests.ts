/// <reference path="chunked-dc.d.ts" />

// Chunker

let chunker = new Chunker(1337, Uint8Array.of(1,2,3), 2);
for (let chunk of chunker) {
    // Do smoething with chunk
}
while (chunker.hasNext) {
    let chunk = chunker.next().value;
}

// Unchunker

let unchunker = new Unchunker();
unchunker.onMessage = (message: Uint8Array, context: any[]) => {
    // Do something with the received message
};
let chunk = Uint8Array.of(1,2).buffer;
unchunker.add(chunk);
unchunker.gc(1024);
