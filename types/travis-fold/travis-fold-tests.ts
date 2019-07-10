import { end, isTravis, pushEnd, pushStart, start } from "travis-fold";

const out: string[] = [];
pushStart(out, 'fold');
pushEnd(out, 'fold');

out.join('\n').trim(); // $ExpectType string

if (isTravis()) {
	start("s"); // $ExpectType string
	end("e"); // $ExpectType string
}
