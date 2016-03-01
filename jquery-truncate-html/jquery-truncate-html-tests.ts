/// <reference path="./jquery-truncate-html.d.ts" />

jQuery('<p>Stuff and <i>Nonsense</i></p>').truncate({
  length: 13
}).html();
