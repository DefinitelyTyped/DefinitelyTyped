

var createPicker = () => {
    var picker = new google.picker.PickerBuilder()
        .addView(new google.picker.DocsUploadView())
        .setOAuthToken("accessToken")
        .setDeveloperKey("developerKey")
        .setCallback((data:any) => {
            var url = "nothing";
            if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                var doc = data[google.picker.Response.DOCUMENTS][0];
                url = doc[google.picker.Document.URL];
            }
        })
        .setOrigin("origin")
        .build();
    picker.setVisible(true);
};
