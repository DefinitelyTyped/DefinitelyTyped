// Type definitions for Knockout 2.1.0
// https://github.com/borisyankov/DefinitelyTyped

interface KnockoutStatic {

    applyBindings(viewModel, rootNode);
    computed();
}

interface KnockoutUtilsStatic {
    arrayForEach(array, action);
    arrayIndexOf(array, item);
    arrayFirst(array, predicate, predicateOwner);
    arrayRemoveItem(array, itemToRemove);
    arrayGetDistinctValues(array);
    arrayMap(array, mapping);
    arrayFilter(array, predicate);
    arrayPushAll(array, valuesToPush);
    extend(target, source);
    emptyDomNode(domNode);
    moveCleanedNodesToContainerElement(nodes);
    setDomNodeChildren(domNode, childNodes);
    replaceDomNodes(nodeToReplaceOrNodeArray, newNodesArray);
    setOptionNodeSelectionState(optionNode, isSelected);
    stringTrim(str: string);
    stringTokenize(str: string, delimiter);
    stringStartsWith(str: string, startsWith);
    buildEvalWithinScopeFunction(expression, scopeLevels);
    domNodeIsContainedBy(node, containedByNode);
    domNodeIsAttachedToDocument(node);
    tagNameLower(element);
    registerEventHandler(element, eventType, handler);
    triggerEvent(element, eventType);
    unwrapObservable(value);
    toggleDomNodeCssClass(node, className, shouldHaveClass);
    setTextContent(element, textContent);
    ensureSelectElementIsRenderedCorrectly(selectElement);
    range(min, max);
    makeArray(arrayLikeObject);
    getFormFields(form, fieldName);
    parseJson(jsonString);
    stringifyJson(data, replacer, space);
    postJson(urlOrForm, data, options);
}

declare var ko: KnockoutStatic;