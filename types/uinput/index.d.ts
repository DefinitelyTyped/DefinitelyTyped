// Type definitions for uinput 1.1
// Project: https://github.com/santigimeno/node-uinput#readme
// Definitions by: Florian Richter <https://github.com/Fidge123>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from "fs";

export interface SetupOptions {
  EV_KEY: any[];
}

export interface CreateOptions {
  name: string;
  id: CreateID;
}

export interface CreateID {
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

export function setup(
  options: SetupOptions,
  callback: (err: Error, stream: fs.WriteStream) => void
): void;
export function create(
  stream: fs.WriteStream,
  options: CreateOptions,
  callback: (err: Error) => void
): void;
export function send_event(
  stream: fs.WriteStream,
  typeParam: number,
  code: number,
  value: number,
  callback: (err: Error) => void
): void;
export function key_event(
  stream: fs.WriteStream,
  code: number,
  callback: (err: Error) => void
): void;
export function emit_combo(
  stream: fs.WriteStream,
  codes: number[],
  callback: (err: Error) => void
): void;

export const BUS_PCI: number;
export const BUS_ISAPNP: number;
export const BUS_USB: number;
export const BUS_HIL: number;
export const BUS_BLUETOOTH: number;
export const BUS_VIRTUAL: number;
export const BUS_ISA: number;
export const BUS_I8042: number;
export const BUS_XTKBD: number;
export const BUS_RS232: number;
export const BUS_GAMEPORT: number;
export const BUS_PARPORT: number;
export const BUS_AMIGA: number;
export const BUS_ADB: number;
export const BUS_I2C: number;
export const BUS_HOST: number;
export const BUS_GSC: number;
export const BUS_ATARI: number;
export const BUS_SPI: number;

export const KEY_RESERVED: number;
export const KEY_ESC: number;
export const KEY_1: number;
export const KEY_2: number;
export const KEY_3: number;
export const KEY_4: number;
export const KEY_5: number;
export const KEY_6: number;
export const KEY_7: number;
export const KEY_8: number;
export const KEY_9: number;
export const KEY_0: number;
export const KEY_MINUS: number;
export const KEY_EQUAL: number;
export const KEY_BACKSPACE: number;
export const KEY_TAB: number;
export const KEY_Q: number;
export const KEY_W: number;
export const KEY_E: number;
export const KEY_R: number;
export const KEY_T: number;
export const KEY_Y: number;
export const KEY_U: number;
export const KEY_I: number;
export const KEY_O: number;
export const KEY_P: number;
export const KEY_LEFTBRACE: number;
export const KEY_RIGHTBRACE: number;
export const KEY_ENTER: number;
export const KEY_LEFTCTRL: number;
export const KEY_A: number;
export const KEY_S: number;
export const KEY_D: number;
export const KEY_F: number;
export const KEY_G: number;
export const KEY_H: number;
export const KEY_J: number;
export const KEY_K: number;
export const KEY_L: number;
export const KEY_SEMICOLON: number;
export const KEY_APOSTROPHE: number;
export const KEY_GRAVE: number;
export const KEY_LEFTSHIFT: number;
export const KEY_BACKSLASH: number;
export const KEY_Z: number;
export const KEY_X: number;
export const KEY_C: number;
export const KEY_V: number;
export const KEY_B: number;
export const KEY_N: number;
export const KEY_M: number;
export const KEY_COMMA: number;
export const KEY_DOT: number;
export const KEY_SLASH: number;
export const KEY_RIGHTSHIFT: number;
export const KEY_KPASTERISK: number;
export const KEY_LEFTALT: number;
export const KEY_SPACE: number;
export const KEY_CAPSLOCK: number;
export const KEY_F1: number;
export const KEY_F2: number;
export const KEY_F3: number;
export const KEY_F4: number;
export const KEY_F5: number;
export const KEY_F6: number;
export const KEY_F7: number;
export const KEY_F8: number;
export const KEY_F9: number;
export const KEY_F10: number;
export const KEY_NUMLOCK: number;
export const KEY_SCROLLLOCK: number;
export const KEY_KP7: number;
export const KEY_KP8: number;
export const KEY_KP9: number;
export const KEY_KPMINUS: number;
export const KEY_KP4: number;
export const KEY_KP5: number;
export const KEY_KP6: number;
export const KEY_KPPLUS: number;
export const KEY_KP1: number;
export const KEY_KP2: number;
export const KEY_KP3: number;
export const KEY_KP0: number;
export const KEY_KPDOT: number;
export const KEY_ZENKAKUHANKAKU: number;
export const KEY_102ND: number;
export const KEY_F11: number;
export const KEY_F12: number;
export const KEY_RO: number;
export const KEY_KATAKANA: number;
export const KEY_HIRAGANA: number;
export const KEY_HENKAN: number;
export const KEY_KATAKANAHIRAGANA: number;
export const KEY_MUHENKAN: number;
export const KEY_KPJPCOMMA: number;
export const KEY_KPENTER: number;
export const KEY_RIGHTCTRL: number;
export const KEY_KPSLASH: number;
export const KEY_SYSRQ: number;
export const KEY_RIGHTALT: number;
export const KEY_LINEFEED: number;
export const KEY_HOME: number;
export const KEY_UP: number;
export const KEY_PAGEUP: number;
export const KEY_LEFT: number;
export const KEY_RIGHT: number;
export const KEY_END: number;
export const KEY_DOWN: number;
export const KEY_PAGEDOWN: number;
export const KEY_INSERT: number;
export const KEY_DELETE: number;
export const KEY_MACRO: number;
export const KEY_MUTE: number;
export const KEY_VOLUMEDOWN: number;
export const KEY_VOLUMEUP: number;
export const KEY_POWER: number;
export const KEY_KPEQUAL: number;
export const KEY_KPPLUSMINUS: number;
export const KEY_PAUSE: number;
export const KEY_SCALE: number;
export const KEY_KPCOMMA: number;
export const KEY_HANGEUL: number;
export const KEY_HANJA: number;
export const KEY_YEN: number;
export const KEY_LEFTMETA: number;
export const KEY_RIGHTMETA: number;
export const KEY_COMPOSE: number;
export const KEY_STOP: number;
export const KEY_AGAIN: number;
export const KEY_PROPS: number;
export const KEY_UNDO: number;
export const KEY_FRONT: number;
export const KEY_COPY: number;
export const KEY_OPEN: number;
export const KEY_PASTE: number;
export const KEY_FIND: number;
export const KEY_CUT: number;
export const KEY_HELP: number;
export const KEY_MENU: number;
export const KEY_CALC: number;
export const KEY_SETUP: number;
export const KEY_SLEEP: number;
export const KEY_WAKEUP: number;
export const KEY_FILE: number;
export const KEY_SENDFILE: number;
export const KEY_DELETEFILE: number;
export const KEY_XFER: number;
export const KEY_PROG1: number;
export const KEY_PROG2: number;
export const KEY_WWW: number;
export const KEY_MSDOS: number;
export const KEY_COFFEE: number;
export const KEY_ROTATE_DISPLAY: number;
export const KEY_CYCLEWINDOWS: number;
export const KEY_MAIL: number;
export const KEY_BOOKMARKS: number;
export const KEY_COMPUTER: number;
export const KEY_BACK: number;
export const KEY_FORWARD: number;
export const KEY_CLOSECD: number;
export const KEY_EJECTCD: number;
export const KEY_EJECTCLOSECD: number;
export const KEY_NEXTSONG: number;
export const KEY_PLAYPAUSE: number;
export const KEY_PREVIOUSSONG: number;
export const KEY_STOPCD: number;
export const KEY_RECORD: number;
export const KEY_REWIND: number;
export const KEY_PHONE: number;
export const KEY_ISO: number;
export const KEY_CONFIG: number;
export const KEY_HOMEPAGE: number;
export const KEY_REFRESH: number;
export const KEY_EXIT: number;
export const KEY_MOVE: number;
export const KEY_EDIT: number;
export const KEY_SCROLLUP: number;
export const KEY_SCROLLDOWN: number;
export const KEY_KPLEFTPAREN: number;
export const KEY_KPRIGHTPAREN: number;
export const KEY_NEW: number;
export const KEY_REDO: number;
export const KEY_F13: number;
export const KEY_F14: number;
export const KEY_F15: number;
export const KEY_F16: number;
export const KEY_F17: number;
export const KEY_F18: number;
export const KEY_F19: number;
export const KEY_F20: number;
export const KEY_F21: number;
export const KEY_F22: number;
export const KEY_F23: number;
export const KEY_F24: number;
export const KEY_PLAYCD: number;
export const KEY_PAUSECD: number;
export const KEY_PROG3: number;
export const KEY_PROG4: number;
export const KEY_DASHBOARD: number;
export const KEY_SUSPEND: number;
export const KEY_CLOSE: number;
export const KEY_PLAY: number;
export const KEY_FASTFORWARD: number;
export const KEY_BASSBOOST: number;
export const KEY_PRINT: number;
export const KEY_HP: number;
export const KEY_CAMERA: number;
export const KEY_SOUND: number;
export const KEY_QUESTION: number;
export const KEY_EMAIL: number;
export const KEY_CHAT: number;
export const KEY_SEARCH: number;
export const KEY_CONNECT: number;
export const KEY_FINANCE: number;
export const KEY_SPORT: number;
export const KEY_SHOP: number;
export const KEY_ALTERASE: number;
export const KEY_CANCEL: number;
export const KEY_BRIGHTNESSDOWN: number;
export const KEY_BRIGHTNESSUP: number;
export const KEY_MEDIA: number;
export const KEY_SWITCHVIDEOMODE: number;
export const KEY_KBDILLUMTOGGLE: number;
export const KEY_KBDILLUMDOWN: number;
export const KEY_KBDILLUMUP: number;
export const KEY_SEND: number;
export const KEY_REPLY: number;
export const KEY_FORWARDMAIL: number;
export const KEY_SAVE: number;
export const KEY_DOCUMENTS: number;
export const KEY_BATTERY: number;
export const KEY_BLUETOOTH: number;
export const KEY_WLAN: number;
export const KEY_UWB: number;
export const KEY_UNKNOWN: number;
export const KEY_VIDEO_NEXT: number;
export const KEY_VIDEO_PREV: number;
export const KEY_BRIGHTNESS_CYCLE: number;
export const KEY_BRIGHTNESS_AUTO: number;
export const KEY_DISPLAY_OFF: number;
export const KEY_WWAN: number;
export const KEY_RFKILL: number;
export const KEY_MICMUTE: number;

export const BTN_MISC: number;
export const BTN_0: number;
export const BTN_1: number;
export const BTN_2: number;
export const BTN_3: number;
export const BTN_4: number;
export const BTN_5: number;
export const BTN_6: number;
export const BTN_7: number;
export const BTN_8: number;
export const BTN_9: number;

export const BTN_MOUSE: number;
export const BTN_LEFT: number;
export const BTN_RIGHT: number;
export const BTN_MIDDLE: number;
export const BTN_SIDE: number;
export const BTN_EXTRA: number;
export const BTN_FORWARD: number;
export const BTN_BACK: number;
export const BTN_TASK: number;

export const BTN_JOYSTICK: number;
export const BTN_TRIGGER: number;
export const BTN_THUMB: number;
export const BTN_THUMB2: number;
export const BTN_TOP: number;
export const BTN_TOP2: number;
export const BTN_PINKIE: number;
export const BTN_BASE: number;
export const BTN_BASE2: number;
export const BTN_BASE3: number;
export const BTN_BASE4: number;
export const BTN_BASE5: number;
export const BTN_BASE6: number;
export const BTN_DEAD: number;

export const BTN_GAMEPAD: number;
export const BTN_SOUTH: number;
export const BTN_EAST: number;
export const BTN_C: number;
export const BTN_NORTH: number;
export const BTN_WEST: number;
export const BTN_Z: number;
export const BTN_TL: number;
export const BTN_TR: number;
export const BTN_TL2: number;
export const BTN_TR2: number;
export const BTN_SELECT: number;
export const BTN_START: number;
export const BTN_MODE: number;
export const BTN_THUMBL: number;
export const BTN_THUMBR: number;

export const BTN_DIGI: number;
export const BTN_TOOL_PEN: number;
export const BTN_TOOL_RUBBER: number;
export const BTN_TOOL_BRUSH: number;
export const BTN_TOOL_PENCIL: number;
export const BTN_TOOL_AIRBRUSH: number;
export const BTN_TOOL_FINGER: number;
export const BTN_TOOL_MOUSE: number;
export const BTN_TOOL_LENS: number;
export const BTN_TOOL_QUINTTAP: number;
export const BTN_TOUCH: number;
export const BTN_STYLUS: number;
export const BTN_STYLUS2: number;
export const BTN_TOOL_DOUBLETAP: number;
export const BTN_TOOL_TRIPLETAP: number;
export const BTN_TOOL_QUADTAP: number;

export const BTN_WHEEL: number;
export const BTN_GEAR_DOWN: number;
export const BTN_GEAR_UP: number;

export const BTN_DPAD_UP: number;
export const BTN_DPAD_DOWN: number;
export const BTN_DPAD_LEFT: number;
export const BTN_DPAD_RIGHT: number;

export const BTN_TRIGGER_HAPPY: number;
export const BTN_TRIGGER_HAPPY1: number;
export const BTN_TRIGGER_HAPPY2: number;
export const BTN_TRIGGER_HAPPY3: number;
export const BTN_TRIGGER_HAPPY4: number;
export const BTN_TRIGGER_HAPPY5: number;
export const BTN_TRIGGER_HAPPY6: number;
export const BTN_TRIGGER_HAPPY7: number;
export const BTN_TRIGGER_HAPPY8: number;
export const BTN_TRIGGER_HAPPY9: number;
export const BTN_TRIGGER_HAPPY10: number;
export const BTN_TRIGGER_HAPPY11: number;
export const BTN_TRIGGER_HAPPY12: number;
export const BTN_TRIGGER_HAPPY13: number;
export const BTN_TRIGGER_HAPPY14: number;
export const BTN_TRIGGER_HAPPY15: number;
export const BTN_TRIGGER_HAPPY16: number;
export const BTN_TRIGGER_HAPPY17: number;
export const BTN_TRIGGER_HAPPY18: number;
export const BTN_TRIGGER_HAPPY19: number;
export const BTN_TRIGGER_HAPPY20: number;
export const BTN_TRIGGER_HAPPY21: number;
export const BTN_TRIGGER_HAPPY22: number;
export const BTN_TRIGGER_HAPPY23: number;
export const BTN_TRIGGER_HAPPY24: number;
export const BTN_TRIGGER_HAPPY25: number;
export const BTN_TRIGGER_HAPPY26: number;
export const BTN_TRIGGER_HAPPY27: number;
export const BTN_TRIGGER_HAPPY28: number;
export const BTN_TRIGGER_HAPPY29: number;
export const BTN_TRIGGER_HAPPY30: number;
export const BTN_TRIGGER_HAPPY31: number;
export const BTN_TRIGGER_HAPPY32: number;
export const BTN_TRIGGER_HAPPY33: number;
export const BTN_TRIGGER_HAPPY34: number;
export const BTN_TRIGGER_HAPPY35: number;
export const BTN_TRIGGER_HAPPY36: number;
export const BTN_TRIGGER_HAPPY37: number;
export const BTN_TRIGGER_HAPPY38: number;
export const BTN_TRIGGER_HAPPY39: number;
export const BTN_TRIGGER_HAPPY40: number;

export const KEY_OK: number;
export const KEY_SELECT: number;
export const KEY_GOTO: number;
export const KEY_CLEAR: number;
export const KEY_POWER2: number;
export const KEY_OPTION: number;
export const KEY_INFO: number;
export const KEY_TIME: number;
export const KEY_VENDOR: number;
export const KEY_ARCHIVE: number;
export const KEY_PROGRAM: number;
export const KEY_CHANNEL: number;
export const KEY_FAVORITES: number;
export const KEY_EPG: number;
export const KEY_PVR: number;
export const KEY_MHP: number;
export const KEY_LANGUAGE: number;
export const KEY_TITLE: number;
export const KEY_SUBTITLE: number;
export const KEY_ANGLE: number;
export const KEY_ZOOM: number;
export const KEY_MODE: number;
export const KEY_KEYBOARD: number;
export const KEY_SCREEN: number;
export const KEY_PC: number;
export const KEY_TV: number;
export const KEY_TV2: number;
export const KEY_VCR: number;
export const KEY_VCR2: number;
export const KEY_SAT: number;
export const KEY_SAT2: number;
export const KEY_CD: number;
export const KEY_TAPE: number;
export const KEY_RADIO: number;
export const KEY_TUNER: number;
export const KEY_PLAYER: number;
export const KEY_TEXT: number;
export const KEY_DVD: number;
export const KEY_AUX: number;
export const KEY_MP3: number;
export const KEY_AUDIO: number;
export const KEY_VIDEO: number;
export const KEY_DIRECTORY: number;
export const KEY_LIST: number;
export const KEY_MEMO: number;
export const KEY_CALENDAR: number;
export const KEY_RED: number;
export const KEY_GREEN: number;
export const KEY_YELLOW: number;
export const KEY_BLUE: number;
export const KEY_CHANNELUP: number;
export const KEY_CHANNELDOWN: number;
export const KEY_FIRST: number;
export const KEY_LAST: number;
export const KEY_AB: number;
export const KEY_NEXT: number;
export const KEY_RESTART: number;
export const KEY_SLOW: number;
export const KEY_SHUFFLE: number;
export const KEY_BREAK: number;
export const KEY_PREVIOUS: number;
export const KEY_DIGITS: number;
export const KEY_TEEN: number;
export const KEY_TWEN: number;
export const KEY_VIDEOPHONE: number;
export const KEY_GAMES: number;
export const KEY_ZOOMIN: number;
export const KEY_ZOOMOUT: number;
export const KEY_ZOOMRESET: number;
export const KEY_WORDPROCESSOR: number;
export const KEY_EDITOR: number;
export const KEY_SPREADSHEET: number;
export const KEY_GRAPHICSEDITOR: number;
export const KEY_PRESENTATION: number;
export const KEY_DATABASE: number;
export const KEY_NEWS: number;
export const KEY_VOICEMAIL: number;
export const KEY_ADDRESSBOOK: number;
export const KEY_MESSENGER: number;
export const KEY_DISPLAYTOGGLE: number;
export const KEY_SPELLCHECK: number;
export const KEY_LOGOFF: number;

export const KEY_DOLLAR: number;
export const KEY_EURO: number;

export const KEY_FRAMEBACK: number;
export const KEY_FRAMEFORWARD: number;
export const KEY_CONTEXT_MENU: number;
export const KEY_MEDIA_REPEAT: number;
export const KEY_10CHANNELSUP: number;
export const KEY_10CHANNELSDOWN: number;
export const KEY_IMAGES: number;

export const KEY_DEL_EOL: number;
export const KEY_DEL_EOS: number;
export const KEY_INS_LINE: number;
export const KEY_DEL_LINE: number;

export const KEY_FN: number;
export const KEY_FN_ESC: number;
export const KEY_FN_F1: number;
export const KEY_FN_F2: number;
export const KEY_FN_F3: number;
export const KEY_FN_F4: number;
export const KEY_FN_F5: number;
export const KEY_FN_F6: number;
export const KEY_FN_F7: number;
export const KEY_FN_F8: number;
export const KEY_FN_F9: number;
export const KEY_FN_F10: number;
export const KEY_FN_F11: number;
export const KEY_FN_F12: number;
export const KEY_FN_1: number;
export const KEY_FN_2: number;
export const KEY_FN_D: number;
export const KEY_FN_E: number;
export const KEY_FN_F: number;
export const KEY_FN_S: number;
export const KEY_FN_B: number;

export const KEY_BRL_DOT1: number;
export const KEY_BRL_DOT2: number;
export const KEY_BRL_DOT3: number;
export const KEY_BRL_DOT4: number;
export const KEY_BRL_DOT5: number;
export const KEY_BRL_DOT6: number;
export const KEY_BRL_DOT7: number;
export const KEY_BRL_DOT8: number;
export const KEY_BRL_DOT9: number;
export const KEY_BRL_DOT10: number;

export const KEY_NUMERIC_0: number;
export const KEY_NUMERIC_1: number;
export const KEY_NUMERIC_2: number;
export const KEY_NUMERIC_3: number;
export const KEY_NUMERIC_4: number;
export const KEY_NUMERIC_5: number;
export const KEY_NUMERIC_6: number;
export const KEY_NUMERIC_7: number;
export const KEY_NUMERIC_8: number;
export const KEY_NUMERIC_9: number;
export const KEY_NUMERIC_STAR: number;
export const KEY_NUMERIC_POUND: number;
export const KEY_NUMERIC_A: number;
export const KEY_NUMERIC_B: number;
export const KEY_NUMERIC_C: number;
export const KEY_NUMERIC_D: number;

export const KEY_CAMERA_FOCUS: number;
export const KEY_WPS_BUTTON: number;

export const KEY_TOUCHPAD_TOGGLE: number;
export const KEY_TOUCHPAD_ON: number;
export const KEY_TOUCHPAD_OFF: number;

export const KEY_CAMERA_ZOOMIN: number;
export const KEY_CAMERA_ZOOMOUT: number;
export const KEY_CAMERA_UP: number;
export const KEY_CAMERA_DOWN: number;
export const KEY_CAMERA_LEFT: number;
export const KEY_CAMERA_RIGHT: number;

export const KEY_ATTENDANT_ON: number;
export const KEY_ATTENDANT_OFF: number;
export const KEY_ATTENDANT_TOGGLE: number;
export const KEY_LIGHTS_TOGGLE: number;

export const KEY_ALS_TOGGLE: number;

export const KEY_BUTTONCONFIG: number;
export const KEY_TASKMANAGER: number;
export const KEY_JOURNAL: number;
export const KEY_CONTROLPANEL: number;
export const KEY_APPSELECT: number;
export const KEY_SCREENSAVER: number;
export const KEY_VOICECOMMAND: number;
export const KEY_ASSISTANT: number;

export const KEY_BRIGHTNESS_MIN: number;
export const KEY_BRIGHTNESS_MAX: number;

export const KEY_KBDINPUTASSIST_PREV: number;
export const KEY_KBDINPUTASSIST_NEXT: number;
export const KEY_KBDINPUTASSIST_PREVGROUP: number;
export const KEY_KBDINPUTASSIST_NEXTGROUP: number;
export const KEY_KBDINPUTASSIST_ACCEPT: number;
export const KEY_KBDINPUTASSIST_CANCEL: number;

export const KEY_RIGHT_UP: number;
export const KEY_RIGHT_DOWN: number;
export const KEY_LEFT_UP: number;
export const KEY_LEFT_DOWN: number;

export const KEY_ROOT_MENU: number;

export const KEY_MEDIA_TOP_MENU: number;
export const KEY_NUMERIC_11: number;
export const KEY_NUMERIC_12: number;
export const KEY_AUDIO_DESC: number;
export const KEY_3D_MODE: number;
export const KEY_NEXT_FAVORITE: number;
export const KEY_STOP_RECORD: number;
export const KEY_PAUSE_RECORD: number;
export const KEY_VOD: number;
export const KEY_UNMUTE: number;
export const KEY_FASTREVERSE: number;
export const KEY_SLOWREVERSE: number;
export const KEY_DATA: number;
export const KEY_ONSCREEN_KEYBOARD: number;

export const KEY_MAX: number;
export const KEY_CNT: number;
export const REL_X: number;
export const REL_Y: number;
export const REL_Z: number;
export const REL_RX: number;
export const REL_RY: number;
export const REL_RZ: number;
export const REL_HWHEEL: number;
export const REL_DIAL: number;
export const REL_WHEEL: number;
export const REL_MISC: number;
export const REL_MAX: number;
export const REL_CNT: number;
export const ABS_X: number;
export const ABS_Y: number;
export const ABS_Z: number;
export const ABS_RX: number;
export const ABS_RY: number;
export const ABS_RZ: number;
export const ABS_THROTTLE: number;
export const ABS_RUDDER: number;
export const ABS_WHEEL: number;
export const ABS_GAS: number;
export const ABS_BRAKE: number;
export const ABS_HAT0X: number;
export const ABS_HAT0Y: number;
export const ABS_HAT1X: number;
export const ABS_HAT1Y: number;
export const ABS_HAT2X: number;
export const ABS_HAT2Y: number;
export const ABS_HAT3X: number;
export const ABS_HAT3Y: number;
export const ABS_PRESSURE: number;
export const ABS_DISTANCE: number;
export const ABS_TILT_X: number;
export const ABS_TILT_Y: number;
export const ABS_TOOL_WIDTH: number;

export const ABS_VOLUME: number;

export const ABS_MISC: number;

export const ABS_MT_SLOT: number;
export const ABS_MT_TOUCH_MAJOR: number;
export const ABS_MT_TOUCH_MINOR: number;
export const ABS_MT_WIDTH_MAJOR: number;
export const ABS_MT_WIDTH_MINOR: number;
export const ABS_MT_ORIENTATION: number;
export const ABS_MT_POSITION_X: number;
export const ABS_MT_POSITION_Y: number;
export const ABS_MT_TOOL_TYPE: number;
export const ABS_MT_BLOB_ID: number;
export const ABS_MT_TRACKING_ID: number;
export const ABS_MT_PRESSURE: number;
export const ABS_MT_DISTANCE: number;
export const ABS_MT_TOOL_X: number;
export const ABS_MT_TOOL_Y: number;

export const ABS_MAX: number;
export const ABS_CNT: number;
export const SW_LID: number;
export const SW_TABLET_MODE: number;
export const SW_HEADPHONE_INSERT: number;
export const SW_RFKILL_ALL: number;

export const SW_MICROPHONE_INSERT: number;
export const SW_DOCK: number;
export const SW_LINEOUT_INSERT: number;
export const SW_JACK_PHYSICAL_INSERT: number;
export const SW_VIDEOOUT_INSERT: number;
export const SW_CAMERA_LENS_COVER: number;
export const SW_KEYPAD_SLIDE: number;
export const SW_FRONT_PROXIMITY: number;
export const SW_ROTATE_LOCK: number;
export const SW_LINEIN_INSERT: number;
export const SW_MUTE_DEVICE: number;
export const SW_PEN_INSERTED: number;
export const SW_MAX: number;
export const SW_CNT: number;

export const MSC_SERIAL: number;
export const MSC_PULSELED: number;
export const MSC_GESTURE: number;
export const MSC_RAW: number;
export const MSC_SCAN: number;
export const MSC_TIMESTAMP: number;
export const MSC_MAX: number;
export const MSC_CNT: number;

export const LED_NUML: number;
export const LED_CAPSL: number;
export const LED_SCROLLL: number;
export const LED_COMPOSE: number;
export const LED_KANA: number;
export const LED_SLEEP: number;
export const LED_SUSPEND: number;
export const LED_MUTE: number;
export const LED_MISC: number;
export const LED_MAIL: number;
export const LED_CHARGING: number;
export const LED_MAX: number;
export const LED_CNT: number;

export const REP_DELAY: number;
export const REP_PERIOD: number;
export const REP_MAX: number;
export const REP_CNT: number;

export const SND_CLICK: number;
export const SND_BELL: number;
export const SND_TONE: number;
export const SND_MAX: number;
export const SND_CNT: number;
