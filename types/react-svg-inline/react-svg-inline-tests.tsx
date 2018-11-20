import SVGInline = require("react-svg-inline");
import * as React from "react";

const TestSFC = (props: SVGInline.SVGInlineProps) => <div />;

class TestPure extends React.PureComponent {
    constructor(props: SVGInline.SVGInlineProps) {
        super(props);
    }
    render() {
        return (<div />);
    }
}

const svgInlines = [
    <SVGInline svg={"<svg><g></g></svg>"} />,
    <SVGInline svg={"<svg><g></g></svg>"} className={"test-class-name"} />,
    <SVGInline svg={"<svg><g></g></svg>"} classSuffix={"my-"} />,
    <SVGInline svg={"<svg><g></g></svg>"} component={"div"} />,
    <SVGInline svg={"<svg><g></g></svg>"} component={TestSFC} />,
    <SVGInline svg={"<svg><g></g></svg>"} component={TestPure} />,
    <SVGInline svg={"<svg><g></g></svg>"} fill={"#663399"} />,
    <SVGInline svg={"<svg><g></g></svg>"} cleanup />,
    <SVGInline svg={"<svg><g></g></svg>"} cleanup={["desc", "sketchMSPage", "sketchMSShapeGroup", "sketchMSLayerGroup"]} />,
    <SVGInline svg={"<svg><g></g></svg>"} cleanupExceptions={["title"]} />,
    <SVGInline svg={"<svg><g></g></svg>"} width={"16"} />,
    <SVGInline svg={"<svg><g></g></svg>"} height={"32px"} />,
    <SVGInline svg={"<svg><g></g></svg>"} accessibilityLabel={"User-friendly Label"} />,
    <SVGInline svg={"<svg><g></g></svg>"} accessibilityDesc={"This description is easy to understand."} />,
];
