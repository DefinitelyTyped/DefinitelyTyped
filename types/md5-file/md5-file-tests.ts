import * as md5 from "md5-file";
import * as md5Promise from "md5-file/promise";

// $ExpectType void
md5("test.txt", (err, hash) => {
	return;
});

// $ExpectType string
md5.sync("text.txt");

// $ExpectType Promise<string>
md5Promise("test.txt");

// $ExpectType string
md5Promise.sync("text.txt");
