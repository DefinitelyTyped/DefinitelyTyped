

var element = document.createElement("code");
var callback = (element: Element) => console.log(element);

Prism.highlightElement(element, false, callback);
Prism.highlightElement(element, false);
Prism.highlightAll(true, callback);
Prism.highlightAll(true);

