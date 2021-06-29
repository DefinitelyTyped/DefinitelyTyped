// https://developers.google.com/picker/docs#display-the-google-picker
function createPicker(): void {
    const picker = new google.picker.PickerBuilder()
        .addView(google.picker.ViewId.DOCS)
        .setOAuthToken("accessToken")
        .setDeveloperKey("developerKey")
        .setCallback(callback)
        .build();
    picker.setVisible(true);
}

// https://developers.google.com/picker/docs#implement-the-picker-callback
function callback(data: google.picker.ResponseObject): void {
    let url = "nothing";
    if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        const doc = data[google.picker.Response.DOCUMENTS][0];
        url = doc[google.picker.Document.URL];
    }
}

function testSetDocument(): void {
    new google.picker.PickerBuilder().setDocument(document).build();
}

// https://developers.google.com/picker/docs#filter-specific-file-types
function testFilterSpecificTypes(): void {
    const picker = new google.picker.PickerBuilder()
        .addViewGroup(
            new google.picker.ViewGroup(google.picker.ViewId.DOCS)
                .addView(google.picker.ViewId.DOCUMENTS)
                .addView(google.picker.ViewId.PRESENTATIONS),
        )
        .setOAuthToken("accessToken")
        .setDeveloperKey("developerKey")
        .setCallback(callback)
        .build();
}

// https://developers.google.com/picker/docs#tune-the-google-pickers-appearance
function testTuneAppearance(): void {
    const picker = new google.picker.PickerBuilder()
        .addView(google.picker.ViewId.SPREADSHEETS)
        .enableFeature(google.picker.Feature.NAV_HIDDEN)
        .setDeveloperKey("developerKey")
        .setCallback(callback)
        .build();
}

// https://developers.google.com/picker/docs#i18n
function testOtherLanguages(): void {
    const picker = new google.picker.PickerBuilder()
        .addView(google.picker.ViewId.IMAGE_SEARCH)
        .setLocale("fr")
        .setDeveloperKey("developerKey")
        .setCallback(callback)
        .build();
}

// https://developers.google.com/picker/docs#example
function fullExample(): void {
    const callback = (data: google.picker.ResponseObject) => {
        if (data.action === google.picker.Action.PICKED) {
            const fileId: string = data.docs[0].id;
        }
    };

    const view = new google.picker.DocsView(google.picker.ViewId.DOCS);
    view.setMimeTypes("image/png,image/jpeg,image/jpg");
    const picker = new google.picker.PickerBuilder()
        .enableFeature(google.picker.Feature.NAV_HIDDEN)
        .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
        .setAppId("appId")
        .setOAuthToken("accessToken")
        .addView(view)
        .addView(new google.picker.DocsUploadView())
        .setDeveloperKey("developerKey")
        .setCallback(callback)
        .build();
    picker.setVisible(true);
}
