import type { ClientOptions, PickerFileMetadata, PickerOptions } from "filestack-js";
import { client, PickerDropPane, PickerInline, PickerOverlay } from "filestack-react";
import * as React from "react";

const mockClientOptions: ClientOptions = {};
const mockPickerOptions: PickerOptions = {};
const mockApiKey = "API_KEY";

const mockAction = (result: PickerFileMetadata) => {
    /* do nothing */
};

export const MockInline = () => (
    <PickerInline
        apikey={mockApiKey}
        pickerOptions={mockPickerOptions}
        clientOptions={mockClientOptions}
        onSuccess={mockAction}
        onUploadDone={mockAction}
        onError={mockAction}
    />
);

export const MockOverlay = () => (
    <PickerOverlay
        apikey={mockApiKey}
        pickerOptions={mockPickerOptions}
        clientOptions={mockClientOptions}
        onSuccess={mockAction}
        onUploadDone={mockAction}
        onError={mockAction}
    />
);

export const MockDropPane = () => (
    <PickerDropPane
        apikey={mockApiKey}
        pickerOptions={mockPickerOptions}
        clientOptions={mockClientOptions}
        onSuccess={mockAction}
        onUploadDone={mockAction}
        onError={mockAction}
    />
);

client.init(mockApiKey); // $ExpectType Client
