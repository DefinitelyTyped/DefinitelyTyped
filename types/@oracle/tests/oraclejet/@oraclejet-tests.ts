/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
import "ojs/ojcore";
import "ojs/ojinputtext";
import "ojs/ojinputnumber";

/**
 * @public
 * @export
 */
class Test {
    value: string;

    constructor() {
        let self = this;
        self.value = "Good Morning";

        let textInput = document.getElementById('text-input') as oj.ojInputText;
        //test a custom API of the component
        let rawVal: string = textInput.rawValue;
    }
}

export = Test;