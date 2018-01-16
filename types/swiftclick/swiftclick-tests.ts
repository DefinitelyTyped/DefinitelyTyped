

var swiftClick = SwiftClick.attach(document.body);

swiftClick.replaceNodeNamesToTrack(["a", "div", "h1"]);
swiftClick.addNodeNamesToTrack(["li"]);
swiftClick.useCssParser(true);