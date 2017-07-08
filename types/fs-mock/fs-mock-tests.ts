
import FS = require("fs-mock");

var fs: FS = new FS({
    'Users': {
        'David': {
            'password.txt': 'my super password'
        }
    }
}, {
    windows: true
});

var fsopts: FS.Opts = {
	windows: true,
	drives: ["A", "B"],
	root: "/"
};

fs.rename("/a/b.txt", "/a/c/txt", (err?: Error): void => {
	// nothing
});
