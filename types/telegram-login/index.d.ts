// Type definitions for non-npm package telegram-login 1.0
// Project: https://core.telegram.org/widgets/login
// Definitions by: Ali Al-Shaikh <https://github.com/Mi3LiX9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Telegram: Telegram;

interface Telegram {
  Login: Login;
}

interface Login {
  widgetsOrigin: "https://oauth.telegram.org";
  /**
   * Headless function to authnticate users from Telegram
   */
  auth(options: LoginOptions, callback?: (dataOrFalse: LoginData | false) => void): void;
}

interface LoginOptions {
  /**
   * Bot Id of the bot to authenticate with, you can get this from BotFather
   * https://t.me/BotFather
   */
  bot_id: string;
	/**
	 * Request if the bot can send messages to the user
	 */
  request_access?: boolean;
  lang?: string;
}

interface LoginData {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name: string;
  username: string;
  photo_url: string;
}

