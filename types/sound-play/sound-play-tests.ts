import { play } from "sound-play";

// $ExpectType Promise<{ stdout: string | Buffer; stdin: string | Buffer; }>
play("file.mp3");

// $ExpectType Promise<{ stdout: string | Buffer; stdin: string | Buffer; }>
play("file.mp3", 0.5);

// $ExpectError
play(0.5, "file.mp3");

// $ExpectError
play("file.mp3", "another string");
