import * as tokenizer from 'sbd';

const text = "On Jan. 20, former Sen. Barack Obama became the 44th President of the U.S. Millions attended the Inauguration.";
tokenizer.sentences(text);
tokenizer.sentences(text, {sanitize: true});
