import { Attr, Attrs } from "@bbob/core";
import { attrValue, attrsToString, escapeHTML, getUniqAttr, isStringNode, isTagNode, keysReduce } from "bbob__plugin-helper/helpers"
import { Node, TagNode } from "@bbob/plugin-helper";

const obj: {[key: string]: string} = {"a": "b"};
keysReduce(obj, (e) => "b", "a" as string)

function getUniqAttrTest(attrs: Attrs): Attr | null {
    return keysReduce<Attr | null>(
        attrs,
        (res, key) => (attrs[key] === key ? attrs[key] : null),
        null,
    );
}

function getNodeLengthTest(node: Node): number {
    if (isTagNode(node)) {
        return node.content.reduce((count, contentNode) => count + getNodeLengthTest(contentNode), 0);
    } if (isStringNode(node)) {
        return node.length;
    }

    return 0;
};

const appendToNodeTest = (node: TagNode, value: string) => {
    node.content.push(value);
};

const attrsToStringTest = (values: Attrs | null): string => {
    // To avoid some malformed attributes
    if (values == null) {
      return '';
    }
  
    return keysReduce(
      values,
      (arr, key) => [...arr, attrValue(key, values[key])],
      [''],
    ).join(' ');
  };

function getTagAttrsTest(tag: string, params: Attrs): string {
    const uniqAattr = getUniqAttr(params);

    if (uniqAattr) {
        const tagAttr = attrValue(tag, uniqAattr);
        const attrs = { ...params };

        // delete attrs[uniqAattr];

        const attrsStr = attrsToString(attrs);

        return `${tagAttr}${attrsStr}`;
    }

    return `${tag}${attrsToString(params)}`;
}

function attrTest(tagNode: TagNode, name: string, value: Attr): Attr {
    if (typeof value !== 'undefined') {
      tagNode.attrs[name] = value;
    }

    return tagNode.attrs[name];
}
