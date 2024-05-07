declare namespace TestingBot {
    type BrowserType = "webdriver" | "rc";
    type TestSuccess = true | false | 0 | 1;

    interface TestingBotOptions {
        api_key?: string | undefined;
        api_secret?: string | undefined;
    }

    interface UserInfo {
        first_name?: string | undefined;
        last_name?: string | undefined;
        email?: string | undefined;
    }

    interface TestData {
        "test[success]"?: TestSuccess | undefined;
        "test[status_message]"?: string | undefined;
        "test[name]"?: string | undefined;
        "test[extra]"?: string | undefined;
        build?: string | undefined;
        groups?: string | undefined;
    }

    interface TestLabData {
        "test[url]"?: string | undefined;
        "test[name]"?: string | undefined;
        "test[cron]"?: string | undefined;
        "test[enabled]"?: boolean | undefined;
    }

    interface TestingBot {
        getTestDetails(testID: string, callback?: (error: any, responseBody: any) => any): void;

        getBrowsers(callback?: (error: any, responseBody: any) => any, type?: BrowserType): void;

        getLabTestDetails(testID: string, callback?: (error: any, responseBody: any) => any): void;

        getTunnel(callback?: (error: any, responseBody: any) => any): void;

        getUserInfo(callback?: (error: any, responseBody: any) => any): void;

        getTests(callback?: (error: any, responseBody: any) => any, offset?: number, limit?: number): void;

        getLabTests(callback?: (error: any, responseBody: any) => any, offset?: number, limit?: number): void;

        updateUserInfo(data: UserInfo, callback?: (error: any, responseBody: any) => any): void;

        updateTest(data: TestData, testID: string, callback?: (error: any, responseBody: any) => any): void;

        updateLabTest(data: TestLabData, testID: string, callback?: (error: any, responseBody: any) => any): void;

        deleteTest(testID: string, callback?: (error: any, responseBody: any) => any): void;

        deleteLabTest(testID: string, callback?: (error: any, responseBody: any) => any): void;
    }
}

declare const TestingBot: {
    new(options?: TestingBot.TestingBotOptions): TestingBot.TestingBot;
};

export = TestingBot;
