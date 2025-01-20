import Glide = require("@glidejs/glide");

// $ExpectType Glide
new Glide(".glide", { direction: "rtl" });
// $ExpectType Glide
new Glide(new HTMLElement(), { direction: "rtl" });

// $ExpectType Glide
const glide = new Glide(".glide");

declare const events: Glide.EventsBus;
declare const options: Glide.Options;

glide.mount();
glide.mutate();
glide.update();
glide.go(">");
glide.move(">");
glide.destroy();
glide.play();
glide.pause();
glide.disable();
glide.enable();
glide.on("", () => {});
glide.on("mount.after", () => {});
glide.isType("carousel");
glide.settings;
// $ExpectType number | false
glide.settings.autoplay;
glide.index;
glide.type;
glide.disabled;

const Transformer: Glide.TransformerFunction = (_Glide, _Components) => {
    return { modify: (translate: number) => translate + 100 };
};

glide.mutate([Transformer]);

interface CustomComponent {
    mount(): void;
    method(): void;
}

const Component: Glide.ComponentFunction<CustomComponent> = (_Glide, _Components, Events) => {
    const Example: CustomComponent = {
        mount() {
            const {
                // $ExpectType Anchors
                Anchors,
                // $ExpectType Autoplay
                Autoplay,
                // $ExpectType Breakpoints
                Breakpoints,
                // $ExpectType Build
                Build,
                // $ExpectType Clones
                Clones,
                // $ExpectType Controls
                Controls,
                // $ExpectType Move
                Move,
                // $ExpectType Run
                Run,
                // $ExpectType Html
                Html,
            } = _Components;

            // $ExpectType HTMLElement
            Html.root;
            // $ExpectType HTMLElement
            Html.track;
            // $ExpectType HTMLElement
            Html.wrapper;

            Build.activeClass();
            Autoplay.start();

            Events.emit("example.mount");
            Events.emit("example.mount", { test: 1 });
        },
        method() {},
    };

    // Defaults events
    Events.on("mount.after", Example.method);
    Events.on("mount.before", Example.method);
    Events.on("update", Example.method);
    Events.on("destroy", Example.method);
    Events.on("play", Example.method);
    Events.on("pause", Example.method);

    // Run events
    Events.on("run.after", move => {
        // $ExpectType string
        move;
    });

    // Autoplay events
    Events.on("autoplay", () => {});

    // Build events
    Events.on("build.before", () => {});
    Events.on("build.after", () => {});

    // Move events
    Events.on("move", ({ movement }) => {
        // $ExpectType number
        movement;
    });
    Events.on("move.after", ({ movement }) => {
        // $ExpectType number
        movement;
    });

    // Resize events
    Events.on("resize", () => {});

    // Custom events
    Events.on("example.mount", ({ test }: { test: number }) => {
        test;
    });

    return Example;
};

glide.mount({ Component });
glide.mount({ Autoplay: Component });
