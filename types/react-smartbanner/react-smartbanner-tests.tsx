import React from "react";
import SmartBanner from "react-smartbanner";
import "react-smartbanner/dist/main.css";

const EmptySmartBanner: React.FC = () => {
    // @ts-expect-error required parameter 'position' is missing
    return <SmartBanner />;
};

const CorrectStoreObject: React.FC = () => {
    return <SmartBanner position="bottom" storeText={{ ios: "hello" }} />;
};

const WrongStoreObject: React.FC = () => {
    // @ts-expect-error invalid field 'blabla'
    return <SmartBanner position="bottom" storeText={{ blabla: "hello", ios: "hello" }} />;
};

const ValidSmartBanner: React.FC = () => {
    return <SmartBanner position="top" />;
};

const FullSmartBanner: React.FC = () => {
    return (
        <SmartBanner
            position="bottom"
            author="Myself"
            force="ios"
            appStoreLanguage="us"
            title="My Banner"
            daysHidden={15}
            daysReminder={90}
            ignoreIosVersion
            appMeta={{
                ios: "apple-itunes-app",
                android: "google-play-app",
                windows: "msApplication-ID",
                kindle: "kindle-fire-app",
            }}
            url={{
                ios: "",
                android: "",
                windows: "",
                kindle: "",
            }}
            storeText={{
                ios: "On the App Store",
                android: "In Google Play",
                windows: "In Windows Store",
                kindle: "In the Amazon Appstore",
            }}
            price={{
                ios: "Free",
                android: "Free",
                windows: "Free",
                kindle: "Free",
            }}
            button={<button>Click Me!</button>}
            onClose={() => {}}
            onInstall={() => {}}
        />
    );
};
