/// <reference path="messenger.d.ts"/>

var message = Messenger().post({
    message: "message",
    hideAfter: 5,
    showCloseButton: true,
    type: "error"
});
message.update({
    type: "error",
    message: "Error calculating position"
});

Messenger().hideAll();
