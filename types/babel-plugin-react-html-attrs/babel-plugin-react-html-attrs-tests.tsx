import * as React from 'react';

const htmlAttributesTest = (
    <html>
        <head>
            <meta charset="utf-8" http-equiv="test" />
            <script nomodule />
        </head>

        <iframe allowfullscreen frameborder="0" marginheight="2" marginwidth="2" srcdoc="test" />

        <form enctype="utf-8" accept-charset="utf-8" autocomplete="false" novalidate>
            <label for="input"></label>
            <input id="input" type="text" autofocus maxlength="42" minlength="1" readonly />
            <button formaction="test" formenctype="test" formmethod="test" formnovalidate formtarget="test" />
        </form>

        <video autoplay controlslist="test" crossorigin="test" disablepictureinpicture mediagroup="test" playsinline>
            <track srclang="en" />
        </video>

        <table cellpadding="2" cellspacing="2">
            <tbody>
                <tr>
                    <td colspan="2" rowspan="2" />
                </tr>
            </tbody>
        </table>

        <object classid="test" />

        <ins datetime="test" />

        <img srcset="test" usemap="test" tabindex="-1" />

        <a hreflang="test" referrerpolicy="test" />

        <menu>
            <menuitem radiogroup="group1" />
        </menu>

        <keygen name="name" challenge="challenge string" keytype="type" keyparams="pqg-params" />

        <div
            accesskey="test"
            autocapitalize="test"
            autocorrect="test"
            autosave="test"
            class="test"
            contenteditable
            contextmenu="test"
            http-equiv="test"
            inputmode="text"
            itemid="test"
            itemprop="test"
            itemref="test"
            itemScope
            itemtype="test"
            spellcheck
            tabindex="0"
        />
    </html>
);

const svgAttributesTest = (
    <svg
        accent-height="test"
        alignment-baseline="auto"
        arabic-form="initial"
        baseline-shift="test"
        cap-height="test"
        clip-path="test"
        clip-rule="test"
        color-interpolation="test"
        color-interpolation-filters="auto"
        color-profile="test"
        color-rendering="test"
        dominant-baseline="test"
        enable-background="test"
        fill-opacity="test"
        fill-rule="inherit"
        flood-color="test"
        flood-opacity="test"
        font-family="test"
        font-size="test"
        font-size-adjust="test"
        font-stretch="test"
        font-style="test"
        font-variant="test"
        font-weight="test"
        glyph-name="test"
        glyph-orientation-horizontal="test"
        glyph-orientation-vertical="test"
        horiz-adv-x="test"
        horiz-origin-x="test"
        image-rendering="test"
        letter-spacing="test"
        lighting-color="test"
        marker-end="test"
        marker-mid="test"
        marker-start="test"
        overline-position="test"
        overline-thickness="test"
        paint-order="test"
        panose-1="test"
        pointer-events="test"
        rendering-intent="test"
        shape-rendering="test"
        stop-color="test"
        stop-opacity="test"
        strikethrough-position="test"
        strikethrough-thickness="test"
        stroke-dasharray="test"
        stroke-dashoffset="test"
        stroke-linecap="inherit"
        stroke-linejoin="inherit"
        stroke-miterlimit="test"
        stroke-opacity="test"
        stroke-width="test"
        text-anchor="test"
        text-decoration="test"
        text-rendering="test"
        underline-position="test"
        underline-thickness="test"
        unicode-bidi="test"
        unicode-range="test"
        units-per-em="test"
        v-alphabetic="test"
        v-hanging="test"
        v-ideographic="test"
        v-mathematical="test"
        vector-effect="test"
        vert-adv-y="test"
        vert-origin-x="test"
        vert-origin-y="test"
        word-spacing="test"
        writing-mode="test"
        x-height="test"
    />
);

/*
// TypeScript doesn't support XML namespaces in JSX yet
// https://github.com/microsoft/TypeScript/issues/11833
const svgNamespacesTest = (
    <svg
        xlink:actuate="test"
        xlink:arcrole="test"
        xlink:href="test"
        xlink:role="test"
        xlink:show="test"
        xlink:title="test"
        xlink:type="test"
        xml:base="test"
        xml:lang="test"
        xml:space="test"
        xmlns:xlink="test"
    />
);
*/
