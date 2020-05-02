const htmlAttributesTest = (
    <html>
        <head>
            <link crossorigin="test" href="#" hreflang="en" charset="utf-8" />

            <meta charset="utf-8" http-equiv="test" />

            <script charset="utf-8" crossorigin="test" nomodule />
            <script async="" defer="" nomodule="" />

            <style scoped="" />
        </head>

        <div
            aria-colcount="2"
            aria-colindex="2"
            aria-colspan="2"
            aria-level="2"
            aria-posinset="2"
            aria-rowcount="2"
            aria-rowindex="2"
            aria-rowspan="2"
            aria-setsize="2"
            aria-valuemax="2"
            aria-valuemin="2"
            aria-valuenow="2"
        />

        <a hreflang="test" referrerpolicy="test" />

        <map name="infographic">
            <area href="" hreflang="en" />
        </map>

        <details open="" />

        <del datetime="test" />

        <dialog open="" />

        <fieldset disabled="" />

        <form accept-charset="utf-8" autocomplete="false" enctype="utf-8" novalidate>
            <button
                autofocus
                disabled
                formaction="test"
                formenctype="test"
                formmethod="test"
                formnovalidate
                formtarget="test"
            />
            <button autofocus="" disabled="" formnovalidate="" />

            <input
                autocomplete="false"
                autofocus
                crossorigin="test"
                formaction="test"
                formenctype="test"
                formmethod="test"
                formnovalidate
                formtarget=""
                id="input"
                type="text"
                inputmode="tel"
                max="42"
                maxlength="42"
                min="1"
                minlength="1"
                readonly
                required
                size="2"
                step="2"
            />
            <input autofocus="" checked="" disabled="" formnovalidate="" multiple="" readonly="" required="" />

            <label for="input"></label>

            <select autocomplete="false" autofocus size="2">
                <optgroup disabled="" />
                <option disabled="" selected="" />
            </select>
            <select autocomplete="false" autofocus="" disabled="" multiple="" required="" />

            <textarea autocomplete="false" autofocus cols="4" maxlength="42" minlength="1" readonly rows="42" />
            <textarea autofocus="" disabled="" readonly="" required="" />
        </form>
        <form novalidate="" />

        <iframe
            allowfullscreen
            allowtransparency
            frameborder="0"
            marginheight="2"
            marginwidth="2"
            referrerpolicy="test"
            seamless
            srcdoc="test"
        />
        <iframe allowfullscreen="" allowtransparency="" seamless="" />

        <img crossorigin="anonymous" referrerpolicy="origin" srcset="test" usemap="test" tabindex="-1" />

        <ins datetime="test" />

        <keygen autofocus name="name" challenge="challenge string" keytype="type" keyparams="pqg-params" />
        <keygen autofocus="" disabled="" />

        <video autoplay controlslist="test" crossorigin="test" mediagroup="test" playsinline disablepictureinpicture>
            <track default="" srclang="en" />
        </video>
        <video autoplay="" controls="" disablepictureinpicture="" loop="" muted="" playsinline="" />

        <meter high="42" low="1" min="200" max="500" optimum="123" />

        <object classid="test" usemap="test" />

        <ol reversed="" start="2" />

        <output for="test" />

        <progress max="42" />

        <table cellpadding="2" cellspacing="2">
            <colgroup span="2">
                <col span="2" />
            </colgroup>
            <tbody>
                <tr>
                    <th colspan="2" rowspan="2" />
                    <td colspan="2" rowspan="2" />
                </tr>
            </tbody>
        </table>

        <time datetime="test" />

        <menu>
            <menuitem radiogroup="group1" />
        </menu>

        <div
            accesskey="test"
            autocapitalize="test"
            autocorrect="test"
            autosave="test"
            class="test"
            contenteditable
            contextmenu="test"
            hidden=""
            http-equiv="test"
            itemid="test"
            itemprop="test"
            itemref="test"
            itemscope
            itemtype="test"
            spellcheck
            tabindex="0"
        />
        <div itemscope="itemscope" />
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
