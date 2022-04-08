import { addConsoleHandler, Entry, getLevel, getLogger, installConsoleHandler, Level, Logger, Preferences, removeConsoleHandler, Type } from 'selenium-webdriver/lib/logging';

function TestLogging() {
  let preferences: Preferences = new Preferences();
  preferences.setLevel(Type.BROWSER, Level.ALL);
  let prefs: any = preferences.toJSON();

  let level: Level = getLevel('OFF');
  level = getLevel(1);

  level = Level.ALL;
  level = Level.DEBUG;
  level = Level.INFO;
  level = Level.OFF;
  level = Level.SEVERE;
  level = Level.WARNING;

  let name: string = level.name;
  let value: number = level.value;

  let type: string;
  type = Type.BROWSER;
  type = Type.CLIENT;
  type = Type.DRIVER;
  type = Type.PERFORMANCE;
  type = Type.SERVER;

  let logger: Logger = getLogger();
  addConsoleHandler();
  addConsoleHandler(logger);
  removeConsoleHandler();
  removeConsoleHandler(logger);
  installConsoleHandler();
}

function TestLoggingEntry() {
  let entry: Entry;

  entry = new Entry(Level.ALL, 'ABC');
  entry = new Entry('ALL', 'ABC');
  entry = new Entry(Level.ALL, 'ABC', 123);
  entry = new Entry('ALL', 'ABC', 123);
  entry = new Entry(Level.ALL, 'ABC', 123, Type.BROWSER);
  entry = new Entry('ALL', 'ABC', 123, Type.BROWSER);

  let entryObj: any = entry.toJSON();

  let message: string = entry.message;
  let timestamp: number = entry.timestamp;
  let type: string = entry.type;
}
