import * as React from "react";
import DialogInput from "react-native-dialog-input";

(() => {
    <DialogInput
        isDialogVisible={true}
        title={"Title"}
        message={"Message"}
        hintInput={"Hint"}
        submitInput={() => {}}
        textInputProps={{ autoCapitalize: "characters" }}
        closeDialog={() => {}}
    />;
});
