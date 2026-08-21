import TerminalRenderer from "marked-terminal";

async function test() {
    const marked = await import("marked");

    marked.setOptions({
        // Define custom renderer
        renderer: new TerminalRenderer(),
    });

    marked.setOptions({
        // Define custom renderer
        renderer: new TerminalRenderer({
            // Can also override color/styling by own functions.
            firstHeading: (text: string) => `*** ${text}`,
        }),
    });

    marked.setOptions({
        // Define custom renderer
        renderer: new TerminalRenderer({
            reflowText: true,
            width: 60,
        }),
    });
}
