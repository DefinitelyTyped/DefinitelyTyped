/** @jsx h */
import { render, RenderResponse, cleanup } from "ink-testing-library";
import { Component, h } from "ink";

const renderResponse = render(<Component<{}, {}, {}> />); // $ExpectType RenderResponse

renderResponse.frames; // $ExpectType ReadonlyArray<string>

const rerender = renderResponse.rerender; // $ExpectType (tree: InkElement) => void
rerender(<Component<{}, {}, {}> />); // $ExpectType void

const unmount = renderResponse.unmount; // $ExpectType () => void
unmount(); // $ExpectType void

const stdin = renderResponse.stdin; // $ExpectType { write: (data: any) => boolean; }
stdin.write(""); // $ExpectType boolean
stdin.write([]); // $ExpectType boolean
stdin.write({}); // $ExpectType boolean

const lastFrame = renderResponse.lastFrame; // $ExpectType () => string
lastFrame(); // $ExpectType string

cleanup; // $ExpectType () => void
cleanup(); // $ExpectType void
