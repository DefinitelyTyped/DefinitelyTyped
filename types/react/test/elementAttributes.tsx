import * as React from 'react';

const testCases = [
    <span />,
    <span accessKey="s" />,
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
    <details open={true} onToggle={() => {}} />,
    <input value={['one', 'two'] as ReadonlyArray<string>} />,
    <input value={['one', 'two'] as string[]} />,
    <input value={['one', 'two']} />,
    <input enterKeyHint="done" />,
    <input accept="image/*" capture="user" />,
    <input accept="image/*" capture="environment" />,
    <input accept="image/*" capture />,
    <input accept="video/*" capture="user" />,
    <input accept="video/*" capture="environment" />,
    // @ts-expect-error
    <input accept="video/*" capture="haha" />,
    <input accept="video/*" capture />,
    <input accept="audio/*" capture />,

    <div role="dialog" />,
    <div role="none presentation" />,
    <svg role="treeitem" />,
    <a target="_blank"></a>,
    <a target="some-frame"></a>,
    <input type="button" />,
    <input type="some-type" />,
    // @ts-expect-error
    <input enterKeyHint="don" />,
    <video disableRemotePlayback />,
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
    ></dialog>,
];

// Needed to check these HTML elements in event callbacks.
// "Imported" from typescript's lib.dom.d.ts.
declare global {
    interface HTMLDetailsElement {
        open: boolean;
    }

    interface HTMLMeterElement {
        optimum: number;
    }

    interface HTMLModElement {
        cite: string;
    }

    interface HTMLOutputElement {
        value: string;
    }

    interface HTMLQuoteElement {
        cite: string;
    }

    interface HTMLTimeElement {
        dateTime: string;
    }
}

const eventCallbacksTestCases = [
    <blockquote onClick={e => e.currentTarget.cite} />,
    <del onClick={e => e.currentTarget.cite} />,
    <details onClick={e => e.currentTarget.open} />,
    <meter onClick={e => e.currentTarget.optimum} />,
    <output onClick={e => e.currentTarget.value} />,
    <time onClick={e => e.currentTarget.dateTime} />,
];
