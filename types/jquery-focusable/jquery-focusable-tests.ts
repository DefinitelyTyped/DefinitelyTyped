import { Options } from "jquery-focusable";

// Basic usage
$('body').focusable();

// With options
const options: Options = {
    findNegativeTabindex: true,
    findPositiveTabindex: true
  };

$('body').focusable(options);
