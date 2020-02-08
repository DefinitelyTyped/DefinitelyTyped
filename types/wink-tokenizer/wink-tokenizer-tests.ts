import * as Tokenizer from "wink-tokenizer";

const tokenizer = new Tokenizer();

tokenizer.defineConfig({
	currency: false
});

tokenizer.tokenize("asd asd asd ads");

tokenizer.getTokensFP();
