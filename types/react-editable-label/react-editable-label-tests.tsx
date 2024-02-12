import * as React from "react";

import { EditableLabel } from "react-editable-label";

export function TestEditableLabel() {
    const handleSave = (value: string) => {};

    return (
        <>
            <EditableLabel initialValue="test" save={handleSave} />
            <EditableLabel initialValue="test" save={handleSave} disableKeys={true} />
            <EditableLabel initialValue="test" save={handleSave} disableKeys={true} inputClass="test-class" />
            <EditableLabel
                initialValue="test"
                save={handleSave}
                disableKeys={true}
                inputClass="test-class"
                labelClass="test-label-class"
            />
            <EditableLabel
                initialValue="test"
                save={handleSave}
                disableKeys={true}
                inputClass="test-class"
                labelClass="test-label-class"
                inputName="test-input"
            />
            <EditableLabel
                initialValue="test"
                save={handleSave}
                disableKeys={true}
                inputClass="test-class"
                labelClass="test-label-class"
                inputName="test-input"
                inputId="test-id"
            />
        </>
    );
}
