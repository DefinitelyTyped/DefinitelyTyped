// Set to 320px x 100%
viewport.set(320);

// Set to 320px x 480px
viewport.set(320, 480);

// Set to 320px x 480px by breakpoints
viewport.set("mobile");

// Reset to 100% x 100%
viewport.reset();

// Load entire webpages for testing:
viewport.load("/path/to/fixture.html", () => console.log('done'));

// Run tests for mobile, tablet and screen
viewport.each(name => {
    // ...
});

// Run tests for tablet and screen
viewport.from("tablet", name => {
    // ...
});

// Run tests for mobile and tablet
viewport.to("tablet", name => {
    // ...
});

// Run tests for tablet and screen
viewport.between("tablet", "screen", name => {
    // ...
});

// get config
viewport.config.breakpoints.forEach(breakpoint => {
    const name: string = breakpoint.name;
    const width: number = breakpoint.size.width;
    const height: number = breakpoint.size.height;
});

const contextSelector: string = viewport.config.context;

// get element
const iframe: HTMLIFrameElement = viewport.element;
