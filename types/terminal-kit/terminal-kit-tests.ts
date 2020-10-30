// Require the lib, get a working terminal
import t, {
  terminal as term,
  autoComplete as ac,
  getDetectedTerminal,
  ScreenBufferHD,
  ScreenBuffer,
  Terminal
} from "terminal-kit";
import "node";
import * as fs from "fs";
import assert from "assert";

new t.Rect({width: 4, height: 4});
// The term() function simply output a string to stdout, using current style
// output "Hello world!" in default terminal's colors
t.terminal("Hello world!\n");

// This output 'red' in red
term.red("red");

// This output 'bold' in bold
term.bold("bold");

// output 'mixed' using bold, underlined & red, exposing the style-mixing syntax
term.bold.underline.red("mixed");

// printf() style formatting everywhere:
// this will output 'My name is Jack, I'm 32.' in green
term.green("My name is %s, I'm %d.\n", "Jack", 32);

// Since v0.16.x, style markup are supported as a shorthand.
// Those two lines produce the same result.
term("My name is ")
  .red("Jack")(" and I'm ")
  .green("32\n");
term("My name is ^rJack^ and I'm ^g32\n");

// Width and height of the terminal
term("The terminal size is %dx%d", term.width, term.height);

// Move the cursor at the upper-left corner
term.moveTo(1, 1);

// We can always pass additional arguments that will be displayed...
term.moveTo(1, 1, "Upper-left corner");

// ... and formated
term.moveTo(1, 1, "My name is %s, I'm %d.\n", "Jack", 32);

// ... or even combined with other styles
term.moveTo.cyan(1, 1, "My name is %s, I'm %d.\n", "Jack", 32);

// Get some user input
term.magenta("Enter your name: ");
assert(term.inputField((error, input) => {
  term.green("\nYour name is '%s'\n", input);
}).abort);

function terminate() {
  term.grabInput(false);
  setTimeout(() => {}, 100);
}

term.bold.cyan("Type anything on the keyboard...\n");
term.green("Hit CTRL-C to quit.\n\n");

term.grabInput({ mouse: "button" });

term.on("key", (name: string, matches: any[], data: any) => {
  console.log("'key' event:", name);
  if (name === "CTRL_C") {
    terminate();
  }
});

term.on("terminal", (name: string, data: any) => {
  console.log("'terminal' event:", name, data);
});

term.on("mouse", (name: string, data: any) => {
  console.log("'mouse' event:", name, data);
});

// Word-wrap this along the full terminal width
term.wrap.yellow(
  `'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
     files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish'`
);

// Word-wrap this inside a column starting at x=10 with a width of 25 terminal cells
term.wrapColumn({ x: 10, width: 25 });
term.wrap.green(
  `'Permission is hereby granted, free of charge, to any person obtaining a copy of this software an
    d associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish'`
);

// This reset the offset
term("\n");
// term.wrapColumn() could be used as well, but the next text would overwrite the last line

// Text continuation: the second text start at the end of line of the first text
term.wrap.blue("^GP^re^Yr^um^Mi^bs^bs^ci^ro^mn^ is ");
term.wrap.red("hereby granted");

function question() {
  term("Do you like javascript? [Y|n]\n");

  // Exit on y and ENTER key
  // Ask again on n
  term.yesOrNo(
    { yes: ["y", "ENTER"], no: ["n"] },
    (error: any, result: any) => {
      if (result) {
        term.green("'Yes' detected! Good bye!\n");
      } else {
        term.red("'No' detected, are you sure?\n");
        question();
      }
    }
  );
}

question();

const history = ["John", "Jack", "Joey", "Billy", "Bob"];

const autoComplete = [
  "Barack Obama",
  "George W. Bush",
  "Bill Clinton",
  "George Bush",
  "Ronald W. Reagan",
  "Jimmy Carter",
  "Gerald Ford",
  "Richard Nixon",
  "Lyndon Johnson",
  "John F. Kennedy",
  "Dwight Eisenhower",
  "Harry Truman",
  "Franklin Roosevelt"
];

term("Please enter your name: ");

term.inputField(
  { history, autoComplete, autoCompleteMenu: true },
  (error: any, input: string | undefined) => {
    term.green("\nYour name is '%s'\n", input);
  }
);

const history1 = ["John", "Jack", "Joey", "Billy", "Bob"];

const autoComplete1 = [
  "Barack Obama",
  "George W. Bush",
  "Bill Clinton",
  "George Bush",
  "Ronald W. Reagan",
  "Jimmy Carter",
  "Gerald Ford",
  "Richard Nixon",
  "Lyndon Johnson",
  "John F. Kennedy",
  "Dwight Eisenhower",
  "Harry Truman",
  "Franklin Roosevelt"
];

term("Please enter your name: ");
() => {
  const input = term.inputField({
    history: history1,
    autoComplete: autoComplete1,
    autoCompleteMenu: true
  }).promise;

  term.green("\nYour name is '%s'\n", input);
};

const autoCompleter = function autoCompleter(
  inputString: string,
  callback: (err: any, input: string) => void
) {
  fs.readdir(__dirname, (error, files) => {
    callback(undefined, ac(files, inputString, true));
  });
};

term("Choose a file: ");

term.inputField(
  { autoComplete: autoCompleter, autoCompleteMenu: true },
  (error: any, input: any) => {
    if (error) {
      term.red.bold(`'\nAn error occurs: ' + ${error} + '\n'`);
    } else {
      term.green("\nYour file is '%s'\n", input);
    }
  }
);

const autoComplete2 = [
  "dnf install",
  "dnf install nodejs",
  "dnf search",
  "sudo",
  "sudo dnf install",
  "sudo dnf install nodejs",
  "sudo dnf search"
];

term.inputField(
  {
    autoComplete: autoComplete2,
    autoCompleteHint: true,
    autoCompleteMenu: true,
    tokenHook: (
      token: any,
      isEndOfInput: any,
      previousTokens: any,
      term: any,
      config: any
    ) => {
      const previousText = previousTokens.join(" ");

      switch (token) {
        case "sudo":
          config.style = term.red;
          return previousTokens.length ? null : term.bold.red;
        case "dnf":
          return previousText === "" || previousText === "sudo"
            ? term.brightMagenta
            : null;
        case "install":
          config.style = term.brightBlue;
          config.hintStyle = term.brightBlack.italic;
          return previousText === "dnf" || previousText === "sudo dnf"
            ? term.brightYellow
            : null;
        case "search":
          config.style = term.brightBlue;
          return previousText === "dnf" || previousText === "sudo dnf"
            ? term.brightCyan
            : null;
        default:
          return;
      }
    }
  },
  (error: any, input: any) => {
    term.green("\nYour command is: '%s'\n", input);
  }
);

term("Choose a file: ");

term.fileInput({ baseDir: "../" }, (error: any, input: any) => {
  if (error) {
    term.red.bold(`'\nAn error occurs: ' + ${error} + '\n'`);
  } else {
    term.green("\nYour file is '%s'\n", input);
  }
});

const items1 = [
  "File",
  "Edit",
  "View",
  "History",
  "Bookmarks",
  "Tools",
  "Help"
];

const options = {
  y: 1, // the menu will be on the top of the terminal
  style: term.inverse,
  selectedStyle: term.dim.blue.bgGreen
};

term.clear();

term.singleLineMenu(items1, options, (error: any, response: any) => {
  term("\n").eraseLineAfter.green(
    "#%s selected: %s (%s,%s)\n",
    response.selectedIndex,
    response.selectedText,
    response.x,
    response.y
  );
});

term.cyan("The hall is spacious. Someone lighted few chandeliers.\n");
term.cyan("There are doorways south and west.\n");

const items2 = ["a. Go south", "b. Go west", "c. Go back to the street"];

term.singleColumnMenu(items2, (error: any, response: any) => {
  term("\n").eraseLineAfter.green(
    "#%s selected: %s (%s,%s)\n",
    response.selectedIndex,
    response.selectedText,
    response.x,
    response.y
  );
});

term.cyan("Choose a file:\n");

const items = fs.readdirSync(process.cwd());

term.gridMenu(items, (error: any, response: any) => {
  term("\n").eraseLineAfter.green(
    "#%s selected: %s (%s,%s)\n",
    response.selectedIndex,
    response.selectedText,
    response.x,
    response.y
  );
});

let progressBar: Terminal.ProgressBarController;
let progress = 0;

function doProgress() {
  // Add random progress
  progress += Math.random() / 10;
  progressBar.update(progress);

  if (progress >= 1) {
    // Cleanup and exit
    setTimeout(() => {
      term("\n");
    }, 200);
  } else {
    setTimeout(doProgress, 100 + Math.random() * 400);
  }
}

progressBar = term.progressBar({
  width: 80,
  title: "Serious stuff in progress:",
  eta: true,
  percent: true
});

doProgress();

const thingsToDo = [
  "update my lib",
  "data analyzing",
  "serious business",
  "decrunching data",
  "do my laundry",
  "optimizing"
];

let countDown = thingsToDo.length;

function start() {
  const task = thingsToDo.shift();

  if (!task) {
    return;
  }

  progressBar.startItem(task);

  // Finish the task in...
  setTimeout(done.bind(null, task), 500 + Math.random() * 1200);

  // Start another parallel task in...
  setTimeout(start, 400 + Math.random() * 400);
}

function done(task: string) {
  progressBar.itemDone(task);
  countDown--;

  // Cleanup and exit
  if (!countDown) {
    setTimeout(() => {
      term("\n");
    }, 200);
  }
}

progressBar = term.progressBar({
  width: 80,
  title: "Daily tasks:",
  eta: true,
  percent: true,
  items: thingsToDo.length
});

start();

term.slowTyping(
  "What a wonderful world!\n",
  { flashStyle: term.brightWhite },
  () => {}
);

// low level

term("My name is ")
  .red("Jack")(" and I'm ")
  .green("32\n");
term("My name is ^rJack^ and I'm ^g32\n");

term.noFormat.red("hello");

term.noFormat("hello");

// color methods with a second argument
term.color(1, "test");
term.darkColor(1, "test");
term.brightColor(1, "test");
term.color256(1, "test");
term.colorRgb(255, 0, 0, "test");
term.colorRgbHex("#ff0000", "test");
term.colorGrayscale(192, "test");

// bgColor methods with a second argument
term.bgColor(1, "test");
term.bgDarkColor(1, "test");
term.bgBrightColor(1, "test");
term.bgColor256(1, "test");
term.bgColorRgb(255, 0, 0, "test");
term.bgColorRgbHex("#ff0000", "test");
term.bgColorGrayscale(192, "test");

// new color & bgColor with color name
term.color("red");
term.color("red", "test");
term.bgColor("red");
term.bgColor("red", "test");

getDetectedTerminal((error: any, term: any) => {
  term.cyan("Terminal name: %s\n", term.appName);
  term.cyan("Terminal app: %s\n", term.app);
  term.cyan("Terminal generic: %s\n", term.generic);
  term.cyan("Config file: %s\n", term.termconfigFile);
});

const screen = new ScreenBufferHD({ dst: term, noFill: true });

screen.fill({
  attr: {
    // Both foreground and background must have the same color
    r: 40,
    g: 20,
    b: 0,
    bgR: 40,
    bgG: 20,
    bgB: 0
  }
});

const path_to_image = "/home/imoti/Downloads/photo_2019-01-24_13-15-50.jpg";

ScreenBufferHD.loadImage(
  path_to_image,
  { shrink: { width: term.width, height: term.height * 2 } },
  (error: any, image: any) => {
    if (error) {
      throw error;
    } // Doh!

    image.draw({ dst: screen, blending: true });
    screen.draw();
  }
);

const screen1 = new ScreenBuffer({ dst: term, noFill: true });

screen1.fill({
  attr: {
    // Both foreground and background must have the same color
    color: 0,
    bgColor: 0
  }
});

ScreenBuffer.loadImage(
  path_to_image,
  { terminal: term, shrink: { width: term.width, height: term.height * 2 } },
  (error: any, image: any) => {
    if (error) {
      throw error;
    } // Doh!

    image.draw({ dst: screen, blending: true });
    screen.draw();
  }
);
