import parser = require("cwise-parser");
import tape = require("tape");

tape("basic tests", (t) => {
	const parsed = parser((a: number, b: number, c: number) => {
		a += b;
		c = Math.cos(b);
	});

	t.equals(parsed.args.length, 3);

	t.equals(parsed.args[0].lvalue, true);
	t.equals(parsed.args[0].rvalue, true);
	t.equals(parsed.args[0].count, 1);

	t.equals(parsed.args[1].lvalue, false);
	t.equals(parsed.args[1].rvalue, true);
	t.equals(parsed.args[1].count, 2);

	t.equals(parsed.args[2].lvalue, true);
	t.equals(parsed.args[2].rvalue, false);
	t.equals(parsed.args[2].count, 1);

	t.end();
});
