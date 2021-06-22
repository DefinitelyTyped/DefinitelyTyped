import { Options } from "jquery-animate-scroll";

// basic usage
$('a').animateScroll();

$('#article-1').scrollHere();

$.scrollTo($('#article-1'));

// with options
const options: Options = {
  $container: $('body'),
  speed: 1000,
  offset: -100
};

$('a').animateScroll(options);

$('#article-1').scrollHere(options);

$.scrollTo($('#article-1'), options);
