// https://developers.google.com/picker/docs#display-the-google-picker
function createPicker(): void {
    const picker = new google.picker.PickerBuilder()
        .addView(google.picker.ViewId.DOCS)
        .setOAuthToken("accessToken")
        .setDeveloperKey("developerKey")
        .setCallback(callback)
        .setOrigin("origin")
        .build();
    picker.setVisible(true);
}

// https://developers.google.com/picker/docs#implement-the-picker-callback
function callback(data: google.picker.Result): void {
    let url = "nothing";
    if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        const doc = data[google.picker.Response.DOCUMENTS][0];
        url = doc[google.picker.Document.URL];
    }
}
