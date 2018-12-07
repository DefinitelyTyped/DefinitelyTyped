import { BrowserName, BrowserInfo, detect } from 'detect-browser';
const browser = detect();

if (browser) {
    const name: string | undefined = browser.name;
    const version: string | undefined = browser.version;
    const os: string | undefined | null = browser.os;
    const bot: true | undefined = browser.bot;
}

const browserInfos: BrowserInfo[] = [];

// Those that can happen when 'detect' hits on a browser

browserInfos.push(
  {
    name: "chrome",
    version: "1.2.3",
    os: null
  }
);

browserInfos.push(
  {
    name: "edge",
    version: "24.5.3",
    os: "Sun OS"
  }
);

browserInfos.push(
  {
    name: "edge",
    version: "13.0",
    os: "Windows 10",
    bot: true
  }
);

// Those that could be returned when it's a bot

browserInfos.push(
    {
        name: "facebook",
        version: "1.0.2",
        os: "Linux",
        bot: true
    }
);

browserInfos.push(
    {
        name: "crios",
        version: "2.9.4",
        os: undefined,
        bot: true
    }
);

browserInfos.push(
    {
        bot: true
    }
);
