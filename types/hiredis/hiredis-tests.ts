import { Reader, Config, createConnection } from "hiredis";

const socket = createConnection(6379, "localhost");

socket.write("INFO");

const reader = new Reader({ return_buffers: false });

// Data comes in
reader.feed("$5\r\nhello\r\n");

// Reply comes out
reader.get(); // => "hello"
