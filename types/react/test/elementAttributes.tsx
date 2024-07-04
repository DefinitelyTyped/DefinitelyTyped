import * as React from "react";

const testCases = [
    <span />,
    <span accessKey="s" />,
    <span autoFocus />,
    <span className="klass" />,
    <span contentEditable />,
    <span
        contentEditable
        // @ts-expect-error -- Use data-placeholder instead.
        placeholder="foo"
    />,
    <span contentEditable="plaintext-only" />,
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
    <video disableRemotePlayback onResize={() => {}} />,
    <picture>
        <source media="test" srcSet="test" width={50} height={50} />
        <img src="test" width={100} height={100} />
    </picture>,
    <picture>
        <source media="test" srcSet="test" width={50} height={50} />
        <img alt="test" src="test" width={100} height={100} fetchPriority="high" />
    </picture>,
    <picture>
        <source media="test" srcSet="test" width={50} height={50} />
        <img alt="test" src="test" width={100} height={100} fetchPriority="low" />
    </picture>,
    <picture>
        <source media="test" srcSet="test" width={50} height={50} />
        <img alt="test" src="test" width={100} height={100} fetchPriority="auto" />
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
    <center></center>,
    // MathML test cases
    <math display="block"></math>,
    <math display="inline"></math>,
    // @ts-expect-error
    <math display="whoops"></math>,
    <mfrac></mfrac>,
    <mfrac linethickness="2px"></mfrac>,
    <mi></mi>,
    <mi mathvariant="normal"></mi>,
    // @ts-expect-error
    <mi mathvariant="whoops"></mi>,
    <mmultiscripts></mmultiscripts>,
    <mprescripts />,
    <mn>1</mn>,
    <mo>+</mo>,
    <mo
      accent
      fence
      largeop
      lspace="2px"
      maxsize="14px"
      minsize="12px"
      movablelimits
      rspace="2px"
      separator
      stretchy
      symmetric
      >+</mo>,
    <mover></mover>,
    <mover accent></mover>,
    <mpadded></mpadded>,
    <mpadded
      depth="1px"
      height="1px"
      lspace="1px"
      voffset="1px"
      width="1px"
      ></mpadded>,
    <mphantom></mphantom>,
    <mroot></mroot>,
    <mrow></mrow>,
    <ms></ms>,
    <ms lquote="&quot;" rquote="&quot;"></ms>,
    <mspace></mspace>,
    <mspace
      depth="1px"
      height="1px"
      width="1px"
      ></mspace>,
    <msqrt></msqrt>,
    <mstyle displaystyle={false} mathcolor="teal"></mstyle>,
    <msub></msub>,
    <msubsup></msubsup>,
    <msup></msup>,
    <mtable></mtable>,
    <mtable
      align="top"
      columnalign="left"
      columnlines="solid"
      columnspacing="2em"
      frame="solid"
      framespacing="2px"
      rowalign="top"
      rowspacing="1em"
      width="100%"
      ></mtable>,
    // @ts-expect-error
    <mtable frame="whoops"></mtable>,
    <mtext></mtext>,
    <mtd></mtd>,
    <mtd
      columnalign="left"
      columnspan={1}
      rowalign="top"
      rowspan={2}
      ></mtd>,
    <mtd
      // @ts-expect-error
      columnalign="whoops"
      columnspan="1"
      // @ts-expect-error
      rowalign="whoops"
      rowspan="2"
      ></mtd>,
    <mtr></mtr>,
    <mtr
      columnalign="left"
      rowalign="top"
      ></mtr>,
    <mtr
      // @ts-expect-error
      columnalign="whoops"
      // @ts-expect-error
      rowalign="whoops"
      ></mtr>,
    <munder></munder>,
    <munder accentunder></munder>,
    <munderover></munderover>,
    <munderover accent accentunder></munderover>,
    <semantics></semantics>,
    <annotation></annotation>,
    <annotation-xml></annotation-xml>,
    // Example from MDN:
    //
    // https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math#examples
    //
    <p>
        The infinite sum
        <math display="block">
            <mrow>
            <munderover>
                <mo>∑</mo>
                <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>1</mn>
                </mrow>
                <mrow>
                <mo>+</mo>
                <mn>∞</mn>
                </mrow>
            </munderover>
            <mfrac>
                <mn>1</mn>
                <msup>
                <mi>n</mi>
                <mn>2</mn>
                </msup>
            </mfrac>
            </mrow>
        </math>
        is equal to the real number
        <math display="inline">
            <mfrac>
            <msup>
                <mi>π</mi>
                <mn>2</mn>
            </msup>
            <mn>6</mn>
            </mfrac>
        </math>.
    </p>
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

function formActionsTest() {
    <form
        // Will not type-check in a real project but accepted in DT tests since experimental.d.ts is part of compilation.
        action={formData => {
            // $ExpectType FormData
            formData;
        }}
    >
        <input type="text" name="title" defaultValue="Hello" />
        <input
            type="submit"
            // Will not type-check in a real project but accepted in DT tests since experimental.d.ts is part of compilation.
            formAction={formData => {
                // $ExpectType FormData
                formData;
            }}
            value="Save"
        />
        <button
            // Will not type-check in a real project but accepted in DT tests since experimental.d.ts is part of compilation.
            formAction={formData => {
                // $ExpectType FormData
                formData;
            }}
        >
            Delete
        </button>
    </form>;
}
