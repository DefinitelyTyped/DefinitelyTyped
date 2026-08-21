import Sendsay = require("sendsay-api");

const sendsay = new Sendsay({ apiUrl: "https://api.sendsay.ru", apiKey: "api-key" });

sendsay.login();

sendsay.request({ action: "sys.settings.get" });
