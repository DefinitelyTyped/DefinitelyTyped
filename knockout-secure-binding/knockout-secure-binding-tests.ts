

// knockout-secure-binding
// The MIT License(MIT)
// Copyright(c) 2013 Brian M Hunt
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import ksp = require('knockout-secure-binding');

function testt(): void {
    // https://github.com/brianmhunt/knockout-secure-binding
    var options = {
        attribute: "data-bind",        // default "data-sbind"
        globals: window,               // default {}
        bindings: ko.bindingHandlers,  // default ko.bindingHandlers
        noVirtualElements: false       // default true
    };

    ko.bindingProvider.instance = new ko.secureBindingsProvider(options);
    ko.bindingProvider.instance = new ksp(options);
}