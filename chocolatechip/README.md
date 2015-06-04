# ChocolateChipJS Declaration Usage Notes

## Referencing ChocolateChip definition files in your code

To do that, simply add `/// <reference path="typings/chocolatechip/chocolatechip.d.ts" />` at the top of your JavaScript code.

This will make the TypeScript declarations available to your editor, inabling various feautures such as code completion, IntelliSense, etc. Support for features will depend on the plugin you are using with your editor.


The easiest way to install this declaration file is using `tsd`. You can install `tsd` from NPM. Simply execute this in the terminal:

```
sudo npm install -g tsd
```

Then, after using cd to change to the target root directory for you project, execute the following command:

```
tsd install chocolatechip
```

This will install the typings directory with the latest version of the ChocolateChip declaration file.


