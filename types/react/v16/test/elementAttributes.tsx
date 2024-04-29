import * as React from "react";

const testCases = [
    <span />,
    <span accessKey="s" />,
    <span autoFocus />,
    <span className="klass" />,
    <span contentEditable />,
    <span contextMenu="menuId" />,
    <span dir="rtl" />,
    <span draggable />,
    <span hidden />,
    <span id="s" />,
    <span lang="art-x-tokipona" />,
    <input placeholder="placeholder" />,
    <span slot="my-text" />,
    <span spellCheck />,
    <span tabIndex={0} />,
    <span title="title" />,
    <span role="button" />,
    <span autoCapitalize="off" />,
    <span autoCapitalize="none" />,
    <span autoCapitalize="on" />,
    <span autoCapitalize="words" />,
    <span autoCapitalize="sentences" />,
    <span autoCorrect="off" />,
    <span autoCorrect="on" />,
    <span translate="no" />,
    <span translate="yes" />,
    <svg>
        <image crossOrigin="anonymous" />
    </svg>,
    <details open={true} onToggle={() => {}} name="foo" />,
    <input value={["one", "two"] as readonly string[]} />,
    <input value={["one", "two"] as string[]} />,
    <input value={["one", "two"]} />,
    <div role="alertdialog" />,
    <div role="none presentation" />,
    <svg role="treeitem" />,
    <a target="_blank"></a>,
    <a target="some-frame"></a>,
    <input type="button" />,
    <input type="some-type" />,
    <picture>
        <source media="test" srcSet="test" width={50} height={50} />
        <img src="test" width={100} height={100} />
    </picture>,
    <dialog
        onCancel={event => {
            // $ExpectType SyntheticEvent<HTMLDialogElement, Event>
            event;
        }}
        onClose={event => {
            // $ExpectType SyntheticEvent<HTMLDialogElement, Event>
            event;
        }}
    >
    </dialog>,
    <link nonce="8IBTHwOdqNKAWeKl7plt8g==" />,
];
