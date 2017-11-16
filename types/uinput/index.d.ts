// Type definitions for uinput 1.1
// Project: https://github.com/santigimeno/node-uinput#readme
// Definitions by: Florian Richter <https://github.com/Fidge123>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { WriteStream } from "fs";

declare module "uinput" {
  interface ISetupOptions {
    EV_KEY: any[];
  }

  interface ICreateOptions {
    name: string;
    id: ICreateID;
  }

  interface ICreateID {
    bustype: number;
    vendor: number;
    product: number;
    version: number;
    ff_effects_max?: number;
    absmax?: number[];
    absmin?: number[];
    absfuzz?: number[];
    absflat?: number[];
  }

  function setup(
    options: ISetupOptions,
    callback: (err: Error, stream: WriteStream) => void
  ): void;
  function create(
    stream: WriteStream,
    options: ICreateOptions,
    callback: (err: Error) => void
  ): void;
  function send_event(
    stream: WriteStream,
    typeParam: number,
    code: number,
    value: number,
    callback: (err: Error) => void
  ): void;
  function key_event(
    stream: WriteStream,
    code: number,
    callback: (err: Error) => void
  ): void;
  function emit_combo(
    stream: WriteStream,
    codes: number[],
    callback: (err: Error) => void
  ): void;

  const BUS_PCI: number;
  const BUS_ISAPNP: number;
  const BUS_USB: number;
  const BUS_HIL: number;
  const BUS_BLUETOOTH: number;
  const BUS_VIRTUAL: number;
  const BUS_ISA: number;
  const BUS_I8042: number;
  const BUS_XTKBD: number;
  const BUS_RS232: number;
  const BUS_GAMEPORT: number;
  const BUS_PARPORT: number;
  const BUS_AMIGA: number;
  const BUS_ADB: number;
  const BUS_I2C: number;
  const BUS_HOST: number;
  const BUS_GSC: number;
  const BUS_ATARI: number;
  const BUS_SPI: number;

  const KEY_RESERVED: number;
  const KEY_ESC: number;
  const KEY_1: number;
  const KEY_2: number;
  const KEY_3: number;
  const KEY_4: number;
  const KEY_5: number;
  const KEY_6: number;
  const KEY_7: number;
  const KEY_8: number;
  const KEY_9: number;
  const KEY_0: number;
  const KEY_MINUS: number;
  const KEY_EQUAL: number;
  const KEY_BACKSPACE: number;
  const KEY_TAB: number;
  const KEY_Q: number;
  const KEY_W: number;
  const KEY_E: number;
  const KEY_R: number;
  const KEY_T: number;
  const KEY_Y: number;
  const KEY_U: number;
  const KEY_I: number;
  const KEY_O: number;
  const KEY_P: number;
  const KEY_LEFTBRACE: number;
  const KEY_RIGHTBRACE: number;
  const KEY_ENTER: number;
  const KEY_LEFTCTRL: number;
  const KEY_A: number;
  const KEY_S: number;
  const KEY_D: number;
  const KEY_F: number;
  const KEY_G: number;
  const KEY_H: number;
  const KEY_J: number;
  const KEY_K: number;
  const KEY_L: number;
  const KEY_SEMICOLON: number;
  const KEY_APOSTROPHE: number;
  const KEY_GRAVE: number;
  const KEY_LEFTSHIFT: number;
  const KEY_BACKSLASH: number;
  const KEY_Z: number;
  const KEY_X: number;
  const KEY_C: number;
  const KEY_V: number;
  const KEY_B: number;
  const KEY_N: number;
  const KEY_M: number;
  const KEY_COMMA: number;
  const KEY_DOT: number;
  const KEY_SLASH: number;
  const KEY_RIGHTSHIFT: number;
  const KEY_KPASTERISK: number;
  const KEY_LEFTALT: number;
  const KEY_SPACE: number;
  const KEY_CAPSLOCK: number;
  const KEY_F1: number;
  const KEY_F2: number;
  const KEY_F3: number;
  const KEY_F4: number;
  const KEY_F5: number;
  const KEY_F6: number;
  const KEY_F7: number;
  const KEY_F8: number;
  const KEY_F9: number;
  const KEY_F10: number;
  const KEY_NUMLOCK: number;
  const KEY_SCROLLLOCK: number;
  const KEY_KP7: number;
  const KEY_KP8: number;
  const KEY_KP9: number;
  const KEY_KPMINUS: number;
  const KEY_KP4: number;
  const KEY_KP5: number;
  const KEY_KP6: number;
  const KEY_KPPLUS: number;
  const KEY_KP1: number;
  const KEY_KP2: number;
  const KEY_KP3: number;
  const KEY_KP0: number;
  const KEY_KPDOT: number;
  const KEY_ZENKAKUHANKAKU: number;
  const KEY_102ND: number;
  const KEY_F11: number;
  const KEY_F12: number;
  const KEY_RO: number;
  const KEY_KATAKANA: number;
  const KEY_HIRAGANA: number;
  const KEY_HENKAN: number;
  const KEY_KATAKANAHIRAGANA: number;
  const KEY_MUHENKAN: number;
  const KEY_KPJPCOMMA: number;
  const KEY_KPENTER: number;
  const KEY_RIGHTCTRL: number;
  const KEY_KPSLASH: number;
  const KEY_SYSRQ: number;
  const KEY_RIGHTALT: number;
  const KEY_LINEFEED: number;
  const KEY_HOME: number;
  const KEY_UP: number;
  const KEY_PAGEUP: number;
  const KEY_LEFT: number;
  const KEY_RIGHT: number;
  const KEY_END: number;
  const KEY_DOWN: number;
  const KEY_PAGEDOWN: number;
  const KEY_INSERT: number;
  const KEY_DELETE: number;
  const KEY_MACRO: number;
  const KEY_MUTE: number;
  const KEY_VOLUMEDOWN: number;
  const KEY_VOLUMEUP: number;
  const KEY_POWER: number;
  const KEY_KPEQUAL: number;
  const KEY_KPPLUSMINUS: number;
  const KEY_PAUSE: number;
  const KEY_SCALE: number;
  const KEY_KPCOMMA: number;
  const KEY_HANGEUL: number;
  const KEY_HANJA: number;
  const KEY_YEN: number;
  const KEY_LEFTMETA: number;
  const KEY_RIGHTMETA: number;
  const KEY_COMPOSE: number;
  const KEY_STOP: number;
  const KEY_AGAIN: number;
  const KEY_PROPS: number;
  const KEY_UNDO: number;
  const KEY_FRONT: number;
  const KEY_COPY: number;
  const KEY_OPEN: number;
  const KEY_PASTE: number;
  const KEY_FIND: number;
  const KEY_CUT: number;
  const KEY_HELP: number;
  const KEY_MENU: number;
  const KEY_CALC: number;
  const KEY_SETUP: number;
  const KEY_SLEEP: number;
  const KEY_WAKEUP: number;
  const KEY_FILE: number;
  const KEY_SENDFILE: number;
  const KEY_DELETEFILE: number;
  const KEY_XFER: number;
  const KEY_PROG1: number;
  const KEY_PROG2: number;
  const KEY_WWW: number;
  const KEY_MSDOS: number;
  const KEY_COFFEE: number;
  const KEY_ROTATE_DISPLAY: number;
  const KEY_CYCLEWINDOWS: number;
  const KEY_MAIL: number;
  const KEY_BOOKMARKS: number;
  const KEY_COMPUTER: number;
  const KEY_BACK: number;
  const KEY_FORWARD: number;
  const KEY_CLOSECD: number;
  const KEY_EJECTCD: number;
  const KEY_EJECTCLOSECD: number;
  const KEY_NEXTSONG: number;
  const KEY_PLAYPAUSE: number;
  const KEY_PREVIOUSSONG: number;
  const KEY_STOPCD: number;
  const KEY_RECORD: number;
  const KEY_REWIND: number;
  const KEY_PHONE: number;
  const KEY_ISO: number;
  const KEY_CONFIG: number;
  const KEY_HOMEPAGE: number;
  const KEY_REFRESH: number;
  const KEY_EXIT: number;
  const KEY_MOVE: number;
  const KEY_EDIT: number;
  const KEY_SCROLLUP: number;
  const KEY_SCROLLDOWN: number;
  const KEY_KPLEFTPAREN: number;
  const KEY_KPRIGHTPAREN: number;
  const KEY_NEW: number;
  const KEY_REDO: number;
  const KEY_F13: number;
  const KEY_F14: number;
  const KEY_F15: number;
  const KEY_F16: number;
  const KEY_F17: number;
  const KEY_F18: number;
  const KEY_F19: number;
  const KEY_F20: number;
  const KEY_F21: number;
  const KEY_F22: number;
  const KEY_F23: number;
  const KEY_F24: number;
  const KEY_PLAYCD: number;
  const KEY_PAUSECD: number;
  const KEY_PROG3: number;
  const KEY_PROG4: number;
  const KEY_DASHBOARD: number;
  const KEY_SUSPEND: number;
  const KEY_CLOSE: number;
  const KEY_PLAY: number;
  const KEY_FASTFORWARD: number;
  const KEY_BASSBOOST: number;
  const KEY_PRINT: number;
  const KEY_HP: number;
  const KEY_CAMERA: number;
  const KEY_SOUND: number;
  const KEY_QUESTION: number;
  const KEY_EMAIL: number;
  const KEY_CHAT: number;
  const KEY_SEARCH: number;
  const KEY_CONNECT: number;
  const KEY_FINANCE: number;
  const KEY_SPORT: number;
  const KEY_SHOP: number;
  const KEY_ALTERASE: number;
  const KEY_CANCEL: number;
  const KEY_BRIGHTNESSDOWN: number;
  const KEY_BRIGHTNESSUP: number;
  const KEY_MEDIA: number;
  const KEY_SWITCHVIDEOMODE: number;
  const KEY_KBDILLUMTOGGLE: number;
  const KEY_KBDILLUMDOWN: number;
  const KEY_KBDILLUMUP: number;
  const KEY_SEND: number;
  const KEY_REPLY: number;
  const KEY_FORWARDMAIL: number;
  const KEY_SAVE: number;
  const KEY_DOCUMENTS: number;
  const KEY_BATTERY: number;
  const KEY_BLUETOOTH: number;
  const KEY_WLAN: number;
  const KEY_UWB: number;
  const KEY_UNKNOWN: number;
  const KEY_VIDEO_NEXT: number;
  const KEY_VIDEO_PREV: number;
  const KEY_BRIGHTNESS_CYCLE: number;
  const KEY_BRIGHTNESS_AUTO: number;
  const KEY_DISPLAY_OFF: number;
  const KEY_WWAN: number;
  const KEY_RFKILL: number;
  const KEY_MICMUTE: number;

  const BTN_MISC: number;
  const BTN_0: number;
  const BTN_1: number;
  const BTN_2: number;
  const BTN_3: number;
  const BTN_4: number;
  const BTN_5: number;
  const BTN_6: number;
  const BTN_7: number;
  const BTN_8: number;
  const BTN_9: number;

  const BTN_MOUSE: number;
  const BTN_LEFT: number;
  const BTN_RIGHT: number;
  const BTN_MIDDLE: number;
  const BTN_SIDE: number;
  const BTN_EXTRA: number;
  const BTN_FORWARD: number;
  const BTN_BACK: number;
  const BTN_TASK: number;

  const BTN_JOYSTICK: number;
  const BTN_TRIGGER: number;
  const BTN_THUMB: number;
  const BTN_THUMB2: number;
  const BTN_TOP: number;
  const BTN_TOP2: number;
  const BTN_PINKIE: number;
  const BTN_BASE: number;
  const BTN_BASE2: number;
  const BTN_BASE3: number;
  const BTN_BASE4: number;
  const BTN_BASE5: number;
  const BTN_BASE6: number;
  const BTN_DEAD: number;

  const BTN_GAMEPAD: number;
  const BTN_SOUTH: number;
  const BTN_EAST: number;
  const BTN_C: number;
  const BTN_NORTH: number;
  const BTN_WEST: number;
  const BTN_Z: number;
  const BTN_TL: number;
  const BTN_TR: number;
  const BTN_TL2: number;
  const BTN_TR2: number;
  const BTN_SELECT: number;
  const BTN_START: number;
  const BTN_MODE: number;
  const BTN_THUMBL: number;
  const BTN_THUMBR: number;

  const BTN_DIGI: number;
  const BTN_TOOL_PEN: number;
  const BTN_TOOL_RUBBER: number;
  const BTN_TOOL_BRUSH: number;
  const BTN_TOOL_PENCIL: number;
  const BTN_TOOL_AIRBRUSH: number;
  const BTN_TOOL_FINGER: number;
  const BTN_TOOL_MOUSE: number;
  const BTN_TOOL_LENS: number;
  const BTN_TOOL_QUINTTAP: number;
  const BTN_TOUCH: number;
  const BTN_STYLUS: number;
  const BTN_STYLUS2: number;
  const BTN_TOOL_DOUBLETAP: number;
  const BTN_TOOL_TRIPLETAP: number;
  const BTN_TOOL_QUADTAP: number;

  const BTN_WHEEL: number;
  const BTN_GEAR_DOWN: number;
  const BTN_GEAR_UP: number;

  const BTN_DPAD_UP: number;
  const BTN_DPAD_DOWN: number;
  const BTN_DPAD_LEFT: number;
  const BTN_DPAD_RIGHT: number;

  const BTN_TRIGGER_HAPPY: number;
  const BTN_TRIGGER_HAPPY1: number;
  const BTN_TRIGGER_HAPPY2: number;
  const BTN_TRIGGER_HAPPY3: number;
  const BTN_TRIGGER_HAPPY4: number;
  const BTN_TRIGGER_HAPPY5: number;
  const BTN_TRIGGER_HAPPY6: number;
  const BTN_TRIGGER_HAPPY7: number;
  const BTN_TRIGGER_HAPPY8: number;
  const BTN_TRIGGER_HAPPY9: number;
  const BTN_TRIGGER_HAPPY10: number;
  const BTN_TRIGGER_HAPPY11: number;
  const BTN_TRIGGER_HAPPY12: number;
  const BTN_TRIGGER_HAPPY13: number;
  const BTN_TRIGGER_HAPPY14: number;
  const BTN_TRIGGER_HAPPY15: number;
  const BTN_TRIGGER_HAPPY16: number;
  const BTN_TRIGGER_HAPPY17: number;
  const BTN_TRIGGER_HAPPY18: number;
  const BTN_TRIGGER_HAPPY19: number;
  const BTN_TRIGGER_HAPPY20: number;
  const BTN_TRIGGER_HAPPY21: number;
  const BTN_TRIGGER_HAPPY22: number;
  const BTN_TRIGGER_HAPPY23: number;
  const BTN_TRIGGER_HAPPY24: number;
  const BTN_TRIGGER_HAPPY25: number;
  const BTN_TRIGGER_HAPPY26: number;
  const BTN_TRIGGER_HAPPY27: number;
  const BTN_TRIGGER_HAPPY28: number;
  const BTN_TRIGGER_HAPPY29: number;
  const BTN_TRIGGER_HAPPY30: number;
  const BTN_TRIGGER_HAPPY31: number;
  const BTN_TRIGGER_HAPPY32: number;
  const BTN_TRIGGER_HAPPY33: number;
  const BTN_TRIGGER_HAPPY34: number;
  const BTN_TRIGGER_HAPPY35: number;
  const BTN_TRIGGER_HAPPY36: number;
  const BTN_TRIGGER_HAPPY37: number;
  const BTN_TRIGGER_HAPPY38: number;
  const BTN_TRIGGER_HAPPY39: number;
  const BTN_TRIGGER_HAPPY40: number;

  const KEY_OK: number;
  const KEY_SELECT: number;
  const KEY_GOTO: number;
  const KEY_CLEAR: number;
  const KEY_POWER2: number;
  const KEY_OPTION: number;
  const KEY_INFO: number;
  const KEY_TIME: number;
  const KEY_VENDOR: number;
  const KEY_ARCHIVE: number;
  const KEY_PROGRAM: number;
  const KEY_CHANNEL: number;
  const KEY_FAVORITES: number;
  const KEY_EPG: number;
  const KEY_PVR: number;
  const KEY_MHP: number;
  const KEY_LANGUAGE: number;
  const KEY_TITLE: number;
  const KEY_SUBTITLE: number;
  const KEY_ANGLE: number;
  const KEY_ZOOM: number;
  const KEY_MODE: number;
  const KEY_KEYBOARD: number;
  const KEY_SCREEN: number;
  const KEY_PC: number;
  const KEY_TV: number;
  const KEY_TV2: number;
  const KEY_VCR: number;
  const KEY_VCR2: number;
  const KEY_SAT: number;
  const KEY_SAT2: number;
  const KEY_CD: number;
  const KEY_TAPE: number;
  const KEY_RADIO: number;
  const KEY_TUNER: number;
  const KEY_PLAYER: number;
  const KEY_TEXT: number;
  const KEY_DVD: number;
  const KEY_AUX: number;
  const KEY_MP3: number;
  const KEY_AUDIO: number;
  const KEY_VIDEO: number;
  const KEY_DIRECTORY: number;
  const KEY_LIST: number;
  const KEY_MEMO: number;
  const KEY_CALENDAR: number;
  const KEY_RED: number;
  const KEY_GREEN: number;
  const KEY_YELLOW: number;
  const KEY_BLUE: number;
  const KEY_CHANNELUP: number;
  const KEY_CHANNELDOWN: number;
  const KEY_FIRST: number;
  const KEY_LAST: number;
  const KEY_AB: number;
  const KEY_NEXT: number;
  const KEY_RESTART: number;
  const KEY_SLOW: number;
  const KEY_SHUFFLE: number;
  const KEY_BREAK: number;
  const KEY_PREVIOUS: number;
  const KEY_DIGITS: number;
  const KEY_TEEN: number;
  const KEY_TWEN: number;
  const KEY_VIDEOPHONE: number;
  const KEY_GAMES: number;
  const KEY_ZOOMIN: number;
  const KEY_ZOOMOUT: number;
  const KEY_ZOOMRESET: number;
  const KEY_WORDPROCESSOR: number;
  const KEY_EDITOR: number;
  const KEY_SPREADSHEET: number;
  const KEY_GRAPHICSEDITOR: number;
  const KEY_PRESENTATION: number;
  const KEY_DATABASE: number;
  const KEY_NEWS: number;
  const KEY_VOICEMAIL: number;
  const KEY_ADDRESSBOOK: number;
  const KEY_MESSENGER: number;
  const KEY_DISPLAYTOGGLE: number;
  const KEY_SPELLCHECK: number;
  const KEY_LOGOFF: number;

  const KEY_DOLLAR: number;
  const KEY_EURO: number;

  const KEY_FRAMEBACK: number;
  const KEY_FRAMEFORWARD: number;
  const KEY_CONTEXT_MENU: number;
  const KEY_MEDIA_REPEAT: number;
  const KEY_10CHANNELSUP: number;
  const KEY_10CHANNELSDOWN: number;
  const KEY_IMAGES: number;

  const KEY_DEL_EOL: number;
  const KEY_DEL_EOS: number;
  const KEY_INS_LINE: number;
  const KEY_DEL_LINE: number;

  const KEY_FN: number;
  const KEY_FN_ESC: number;
  const KEY_FN_F1: number;
  const KEY_FN_F2: number;
  const KEY_FN_F3: number;
  const KEY_FN_F4: number;
  const KEY_FN_F5: number;
  const KEY_FN_F6: number;
  const KEY_FN_F7: number;
  const KEY_FN_F8: number;
  const KEY_FN_F9: number;
  const KEY_FN_F10: number;
  const KEY_FN_F11: number;
  const KEY_FN_F12: number;
  const KEY_FN_1: number;
  const KEY_FN_2: number;
  const KEY_FN_D: number;
  const KEY_FN_E: number;
  const KEY_FN_F: number;
  const KEY_FN_S: number;
  const KEY_FN_B: number;

  const KEY_BRL_DOT1: number;
  const KEY_BRL_DOT2: number;
  const KEY_BRL_DOT3: number;
  const KEY_BRL_DOT4: number;
  const KEY_BRL_DOT5: number;
  const KEY_BRL_DOT6: number;
  const KEY_BRL_DOT7: number;
  const KEY_BRL_DOT8: number;
  const KEY_BRL_DOT9: number;
  const KEY_BRL_DOT10: number;

  const KEY_NUMERIC_0: number;
  const KEY_NUMERIC_1: number;
  const KEY_NUMERIC_2: number;
  const KEY_NUMERIC_3: number;
  const KEY_NUMERIC_4: number;
  const KEY_NUMERIC_5: number;
  const KEY_NUMERIC_6: number;
  const KEY_NUMERIC_7: number;
  const KEY_NUMERIC_8: number;
  const KEY_NUMERIC_9: number;
  const KEY_NUMERIC_STAR: number;
  const KEY_NUMERIC_POUND: number;
  const KEY_NUMERIC_A: number;
  const KEY_NUMERIC_B: number;
  const KEY_NUMERIC_C: number;
  const KEY_NUMERIC_D: number;

  const KEY_CAMERA_FOCUS: number;
  const KEY_WPS_BUTTON: number;

  const KEY_TOUCHPAD_TOGGLE: number;
  const KEY_TOUCHPAD_ON: number;
  const KEY_TOUCHPAD_OFF: number;

  const KEY_CAMERA_ZOOMIN: number;
  const KEY_CAMERA_ZOOMOUT: number;
  const KEY_CAMERA_UP: number;
  const KEY_CAMERA_DOWN: number;
  const KEY_CAMERA_LEFT: number;
  const KEY_CAMERA_RIGHT: number;

  const KEY_ATTENDANT_ON: number;
  const KEY_ATTENDANT_OFF: number;
  const KEY_ATTENDANT_TOGGLE: number;
  const KEY_LIGHTS_TOGGLE: number;

  const KEY_ALS_TOGGLE: number;

  const KEY_BUTTONCONFIG: number;
  const KEY_TASKMANAGER: number;
  const KEY_JOURNAL: number;
  const KEY_CONTROLPANEL: number;
  const KEY_APPSELECT: number;
  const KEY_SCREENSAVER: number;
  const KEY_VOICECOMMAND: number;
  const KEY_ASSISTANT: number;

  const KEY_BRIGHTNESS_MIN: number;
  const KEY_BRIGHTNESS_MAX: number;

  const KEY_KBDINPUTASSIST_PREV: number;
  const KEY_KBDINPUTASSIST_NEXT: number;
  const KEY_KBDINPUTASSIST_PREVGROUP: number;
  const KEY_KBDINPUTASSIST_NEXTGROUP: number;
  const KEY_KBDINPUTASSIST_ACCEPT: number;
  const KEY_KBDINPUTASSIST_CANCEL: number;

  const KEY_RIGHT_UP: number;
  const KEY_RIGHT_DOWN: number;
  const KEY_LEFT_UP: number;
  const KEY_LEFT_DOWN: number;

  const KEY_ROOT_MENU: number;

  const KEY_MEDIA_TOP_MENU: number;
  const KEY_NUMERIC_11: number;
  const KEY_NUMERIC_12: number;
  const KEY_AUDIO_DESC: number;
  const KEY_3D_MODE: number;
  const KEY_NEXT_FAVORITE: number;
  const KEY_STOP_RECORD: number;
  const KEY_PAUSE_RECORD: number;
  const KEY_VOD: number;
  const KEY_UNMUTE: number;
  const KEY_FASTREVERSE: number;
  const KEY_SLOWREVERSE: number;
  const KEY_DATA: number;
  const KEY_ONSCREEN_KEYBOARD: number;

  const KEY_MAX: number;
  const KEY_CNT: number;
  const REL_X: number;
  const REL_Y: number;
  const REL_Z: number;
  const REL_RX: number;
  const REL_RY: number;
  const REL_RZ: number;
  const REL_HWHEEL: number;
  const REL_DIAL: number;
  const REL_WHEEL: number;
  const REL_MISC: number;
  const REL_MAX: number;
  const REL_CNT: number;
  const ABS_X: number;
  const ABS_Y: number;
  const ABS_Z: number;
  const ABS_RX: number;
  const ABS_RY: number;
  const ABS_RZ: number;
  const ABS_THROTTLE: number;
  const ABS_RUDDER: number;
  const ABS_WHEEL: number;
  const ABS_GAS: number;
  const ABS_BRAKE: number;
  const ABS_HAT0X: number;
  const ABS_HAT0Y: number;
  const ABS_HAT1X: number;
  const ABS_HAT1Y: number;
  const ABS_HAT2X: number;
  const ABS_HAT2Y: number;
  const ABS_HAT3X: number;
  const ABS_HAT3Y: number;
  const ABS_PRESSURE: number;
  const ABS_DISTANCE: number;
  const ABS_TILT_X: number;
  const ABS_TILT_Y: number;
  const ABS_TOOL_WIDTH: number;

  const ABS_VOLUME: number;

  const ABS_MISC: number;

  const ABS_MT_SLOT: number;
  const ABS_MT_TOUCH_MAJOR: number;
  const ABS_MT_TOUCH_MINOR: number;
  const ABS_MT_WIDTH_MAJOR: number;
  const ABS_MT_WIDTH_MINOR: number;
  const ABS_MT_ORIENTATION: number;
  const ABS_MT_POSITION_X: number;
  const ABS_MT_POSITION_Y: number;
  const ABS_MT_TOOL_TYPE: number;
  const ABS_MT_BLOB_ID: number;
  const ABS_MT_TRACKING_ID: number;
  const ABS_MT_PRESSURE: number;
  const ABS_MT_DISTANCE: number;
  const ABS_MT_TOOL_X: number;
  const ABS_MT_TOOL_Y: number;

  const ABS_MAX: number;
  const ABS_CNT: number;
  const SW_LID: number;
  const SW_TABLET_MODE: number;
  const SW_HEADPHONE_INSERT: number;
  const SW_RFKILL_ALL: number;

  const SW_MICROPHONE_INSERT: number;
  const SW_DOCK: number;
  const SW_LINEOUT_INSERT: number;
  const SW_JACK_PHYSICAL_INSERT: number;
  const SW_VIDEOOUT_INSERT: number;
  const SW_CAMERA_LENS_COVER: number;
  const SW_KEYPAD_SLIDE: number;
  const SW_FRONT_PROXIMITY: number;
  const SW_ROTATE_LOCK: number;
  const SW_LINEIN_INSERT: number;
  const SW_MUTE_DEVICE: number;
  const SW_PEN_INSERTED: number;
  const SW_MAX: number;
  const SW_CNT: number;

  const MSC_SERIAL: number;
  const MSC_PULSELED: number;
  const MSC_GESTURE: number;
  const MSC_RAW: number;
  const MSC_SCAN: number;
  const MSC_TIMESTAMP: number;
  const MSC_MAX: number;
  const MSC_CNT: number;

  const LED_NUML: number;
  const LED_CAPSL: number;
  const LED_SCROLLL: number;
  const LED_COMPOSE: number;
  const LED_KANA: number;
  const LED_SLEEP: number;
  const LED_SUSPEND: number;
  const LED_MUTE: number;
  const LED_MISC: number;
  const LED_MAIL: number;
  const LED_CHARGING: number;
  const LED_MAX: number;
  const LED_CNT: number;

  const REP_DELAY: number;
  const REP_PERIOD: number;
  const REP_MAX: number;
  const REP_CNT: number;

  const SND_CLICK: number;
  const SND_BELL: number;
  const SND_TONE: number;
  const SND_MAX: number;
  const SND_CNT: number;
}
