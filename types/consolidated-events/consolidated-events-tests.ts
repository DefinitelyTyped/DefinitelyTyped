import { addEventListener } from "consolidated-events";

declare const element: HTMLElement;
declare const textarea: HTMLTextAreaElement;

declare function handleEvent(event: Event): void;
declare function onClick(event: MouseEvent): void;
declare function onCopy(event: ClipboardEvent): void; // Specific for copy event

// Standard events
addEventListener(window, "click", onClick);
addEventListener(element, "keydown", handleEvent);
addEventListener(document, "DOMContentLoaded", handleEvent);
addEventListener(textarea, "copy", onCopy);
addEventListener(textarea, "copy", function(event) {
    // `event` type is correctly innferred to be ClipboardEvent
    console.log(event.clipboardData);
});

// Options
addEventListener(window, "click", onClick, { capture: true });
addEventListener(window, "scroll", handleEvent, true);
addEventListener(window, "scroll", handleEvent, {
    capture: true,
    passive: true,
    once: true,
    signal: new AbortController().signal,
});

// Non-HTMLElement `EventTarget`
declare const xhr: XMLHttpRequest;
addEventListener(xhr, "load", handleEvent);

// Custom Events
addEventListener(window, "custom-event", handleEvent);

// @ts-expect-error too few arguments
addEventListener(window);
// @ts-expect-error too few arguments
addEventListener(window, "keydown");
addEventListener(
    window,
    "click", // @ts-expect-error incorrect event handler type
    (event: KeyboardEvent) => {
        console.log(event.key);
    },
);

// Returns an "unlisten" function
const removeClick = addEventListener(window, "click", onClick);
removeClick();
