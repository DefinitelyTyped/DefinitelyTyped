declare var describe: (test: string, callback: () => void) => void;
declare var beforeAll: (callback: () => void) => void;
declare var afterAll: (callback: () => void) => void;
declare var test: (test: string, callback: () => void) => void;

import { by, device, element, expect, waitFor, DetoxConstants } from "detox";

describe("Test", () => {
    beforeAll(async () => {
        await device.reloadReactNative();
    });

    afterAll(async () => {
        await element(by.id("element")).clearText();
    });

    test("Test", async () => {
        await element(by.id("element")).replaceText("text");
        await element(by.id("element")).tap();
        await element(by.id("element")).scroll(50, "down");
        await element(by.id("scrollView")).scrollTo("bottom");
        await expect(element(by.id("element")).atIndex(0)).toNotExist();
        await element(by.id("scrollView")).swipe("down", "fast");
        await element(by.type("UIPickerView")).setColumnToValue(1, "6");

        await expect(
            element(by.id("element").withAncestor(by.id("parent_element")))
        ).toNotExist();
        await expect(
            element(by.id("element").withDescendant(by.id("child_element")))
        ).toNotExist();

        await waitFor(element(by.id("element")))
            .toBeVisible()
            .withTimeout(2000);
        await device.pressBack();
        await waitFor(element(by.text("Text5")))
            .toBeVisible()
            .whileElement(by.id("ScrollView630"))
            .scroll(50, "down");
    });

    test("user activity", () => {
        const activity: Detox.UserActivity = {
            activityType: DetoxConstants.userActivityTypes.browsingWeb,
            webpageURL: "some://deep/link",
            referrerURL: "https://typescriptlang.org",
        };
        device.launchApp({ userActivity: activity });

        device.sendUserActivity(activity);
    });

    test("push notification", () => {
        const pushNotification: Detox.PushNotification = {
            trigger: {
                type: "push",
            },
            title: "Test",
            subtitle: "This is a test",
            body: "Test Body",
            badge: 1,
            category: "category",
            "user-text": "text",
            "content-available": 0,
            "action-identifier": "d",
        };
        device.sendUserNotification(pushNotification);
    });

    test("timeInterval notification", () => {
        const notification: Detox.TimeIntervalNotification = {
            trigger: {
                type: "timeInterval",
                timeInterval: 5,
            },
        };
        device.sendUserNotification(notification);
    });

    test("calendar notification", () => {
        const calendarNotification: Detox.CalendarNotification = {
            trigger: {
                type: "calendar",
                "date-components": {},
            },
        };
        device.sendUserNotification(calendarNotification);
    });

    test("location notification", () => {
        const locationNotification: Detox.LocationNotification = {
            trigger: {
                type: "location",
                center: {
                    latitude: 0,
                    longitude: 0,
                },
                radius: 0,
            },
        };
        device.sendUserNotification(locationNotification);
    });
});
