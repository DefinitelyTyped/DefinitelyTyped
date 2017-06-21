// Type definitions for testingbot-api 1.0
// Project: https://github.com/testingbot/testingbot-api
// Definitions by: Tim Brust <https://github.com/timbru31>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TestingBot {
	type BrowserType = 'webdriver' | 'rc';
	type TestSuccess = true | false | 0 | 1;

	interface TestingBotOptions {
		api_key?: string;
		api_secret?: string;
	}

	interface UserInfo {
		first_name?: string;
		last_name?: string;
		email?: string;
	}

	interface TestData {
		'test[success]'?: TestSuccess;
		'test[status_message]'?: string;
		'test[name]'?: string;
		'test[extra]'?: string;
		build?: string;
		groups?: string;
	}

	interface TestLabData {
		'test[url]'?: string;
		'test[name]'?: string;
		'test[cron]'?: string;
		'test[enabled]'?: boolean;
	}

	interface TestingBot {
		getTestDetails(testID: string, callback?: () => any): void;

		getBrowsers(callback?: () => any, type?: BrowserType): void;

		getLabTestDetails(testID: string, callback?: () => any): void;

		getTunnel(callback?: () => any): void;

		getUserInfo(callback?: () => any): void;

		getTests(callback?: () => any, offset?: number, limit?: number): void;

		getLabTests(callback?: () => any, offset?: number, limit?: number): void;

		updateUserInfo(data: UserInfo, callback?: () => any): void;

		updateTest(data: TestData, testID: string, callback?: () => any): void;

		updateLabTest(data: TestLabData, testID: string, callback?: () => any): void;

		deleteTest(testID: string, callback?: () => any): void;

		deleteLabTest(testID: string, callback?: () => any): void;
	}
}

declare const TestingBot: {
	new (options?: TestingBot.TestingBotOptions): TestingBot.TestingBot;
};

export = TestingBot;
