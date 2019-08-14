import * as md5 from "md5-file";

// $ExpectType void
md5("test.txt", (err, hash) => {
	return;
});

// $ExpectType string
md5.sync("text.txt");
