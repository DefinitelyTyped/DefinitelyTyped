import ShareMenu, { ShareMenuReactView } from "react-native-share-menu";

ShareMenu.getSharedText(() => {});

ShareMenu.getSharedText(share => {
    const mimeType = share?.mimeType;
    const data = share?.data;
    const extraData = share?.extraData;
});

ShareMenu.getInitialShare(() => {});

ShareMenu.getInitialShare(share => {
    const mimeType = share?.mimeType;
    const data = share?.data;
    const extraData = share?.extraData;
});

const shareListener1 = ShareMenu.addNewShareListener(() => {});
shareListener1.remove();

const shareListener2 = ShareMenu.addNewShareListener(share => {
    const mimeType = share?.mimeType;
    const data = share?.data;
    const extraData = share?.extraData;
});
shareListener2.remove();

ShareMenu.clearSharedText();

ShareMenuReactView.dismissExtension();
ShareMenuReactView.dismissExtension("message");
ShareMenuReactView.openApp();
ShareMenuReactView.continueInApp();
ShareMenuReactView.continueInApp({});
ShareMenuReactView.continueInApp({ extraData: "extra" });
const data = ShareMenuReactView.data();
data.then(() => {});
data.then(share => {
    const mimeType = share.mimeType;
    const data = share.data;
});
