import { contentCensor as AipContentCensorClient } from "baidu-aip-sdk";

const APP_ID = "your app_id";
const API_KEY = "your api_key";
const SECRET = "your secret";

const client = new AipContentCensorClient(APP_ID, API_KEY, SECRET);
