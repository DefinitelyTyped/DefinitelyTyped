## Usage
If you are writing JavaScript/TypeScript code for MediaWiki, make sure all [relevant ResourceLoader modules](https://www.mediawiki.org/wiki/OOUI/Using_OOUI_in_MediaWiki#JavaScript) are loaded, then use `OO.ui` globally.

### Suggestions on icon and indicator names
[utils.d.ts](utils.d.ts) contains a list of known icon and indicator names. To use them, you must ensure the corresponding modules have been loaded.
Please refer to the OOUI documentation or the code comments for more details.

## Caveats
1. Methods and classes marked as private and protected are not included in the definition because interfaces can only define public constraints.
2. Some OOUI classes are designed in violation of [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle), which is forbidden in TypeScript. To address this issue we use some hacks, but they also result in additional issues, for instance:
    ```ts
    // Error: Type 'NumberInputWidget' is not assignable to type 'TextInputWidget'...
    let widget: OO.ui.TextInputWidget = new OO.ui.NumberInputWidget();

    // Use type assertion as a fix
    let widget: OO.ui.TextInputWidget = new OO.ui.NumberInputWidget() as unknown as OO.ui.TextInputWidget;
    ```
    Known problematic classes:
    - [`OO.ui.mixin.GroupElement`](mixin/GroupElement.d.ts) (Changes method signatures of `OO.EmitterList`)
    - [`OO.ui.CheckboxInputWidget`](CheckboxInputWidget.d.ts) (Inconsistency in `change` event)
    - [`OO.ui.NumberInputWidget`](NumberInputWidget.d.ts) (Changes method signatures of `OO.ui.TextInputWidget`)
    - [`OO.ui.OutlineControlsWidget`](OutlineControlsWidget.d.ts) (Inconsistency in `move` and `remove` event)
    - [`OO.ui.SelectFileWidget`](SelectFileWidget.d.ts) (Inconsistency in `change` event, changes method signatures of `SelectFileInputWidget`)
    - [`OO.ui.SelectWidget`](SelectWidget.d.ts) (Inconsistency in `move` and `remove` event)


## Credits
This project uses JSDoc documentations from OOUI which is licensed under the MIT License.

```
Copyright 2011-2022 OOUI Team and other contributors.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
