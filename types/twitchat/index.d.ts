declare function Twitchat(anyVar: any): string;
declare namespace Twitchat {
    const environment: "production";
    // List of the events fired by Twitchat you can listen.
    type EventType =
        | "MESSAGE_READ"
        | "MESSAGE_NON_FOLLOWER"
        | "MESSAGE_DELETED"
        | "MESSAGE_FIRST"
        | "MESSAGE_FIRST_ALL_TIME"
        | "MESSAGE_WHISPER"
        | "FOLLOW"
        | "MENTION"
        | "POLL_PROGRESS"
        | "PREDICTION_PROGRESS"
        | "MENTION"
        | "CURRENT_TRACK"
        | "TRACK_ADDED_TO_QUEUE"
        | "RAFFLE_RESULT"
        | "COUNTDOWN_START"
        | "COUNTDOWN_COMPLETE"
        | "TIMER_START"
        | "TIMER_STOP"
        | "TIMER_OVERLAY_PRESENCE"
        | "WHEEL_OVERLAY_PRESENCE"
        | "EMERGENCY_MODE"
        | "CHAT_HIGHLIGHT_OVERLAY_PRESENCE"
        | "VOICEMOD_CHANGE"
        | "RAFFLE_CREATE"
        | "RAFFLE_STOP"
        | "VOICEMOD_CHANGE";
    // List of actions you can request Twitchat to perform.
    type ActionType =
        | "GREET_FEED_READ"
        | "GREET_FEED_READ_ALL"
        | "CHAT_FEED_READ"
        | "CHAT_FEED_READ_ALL"
        | "CHAT_FEED_PAUSE"
        | "CHAT_FEED_UNPAUSE"
        | "CHAT_FEED_SCROLL_UP"
        | "CHAT_FEED_SCROLL_DOWN"
        | "POLL_TOGGLE"
        | "PREDICTION_TOGGLE"
        | "BINGO_TOGGLE"
        | "RAFFLE_TOGGLE"
        | "VIEWERS_COUNT_TOGGLE"
        | "MOD_TOOLS_TOGGLE"
        | "CENSOR_DELETED_MESSAGES_TOGGLE"
        | "GET_CURRENT_TRACK"
        | "WHEEL_OVERLAY_START"
        | "GET_WHEEL_OVERLAY_PRESENCE"
        | "GET_CURRENT_TIMERS"
        | "GET_TIMER_OVERLAY_PRESENCE"
        | "SET_EMERGENCY_MODE"
        | "GET_CHAT_HIGHLIGHT_OVERLAY_PRESENCE"
        | "SET_CHAT_HIGHLIGHT_OVERLAY_MESSAGE"
        | "SHOW_CLIP"
        | "START_EMERGENCY"
        | "STOP_EMERGENCY"
        | "SHOUTOUT"
        | "STOP_TTS"
        | "ENABLE_STT"
        | "DISABLE_STT"
        | "CUSTOM_CHAT_MESSAGE";
    enum Icon {
        AD = "ad",
        ADD = "add",
        ALERT = "alert",
        ANIMATE = "animate",
        ANNOUNCEMENT = "announcement",
        ANON = "anon",
        API = "api",
        AUTOMOD = "automod",
        BADGE = "badge",
        BAN = "ban",
        BINGO = "bingo",
        BITS = "bits",
        BLOCK = "block",
        BOOST = "boost",
        BOT = "bot",
        BROADCAST = "broadcast",
        BROADCASTER = "broadcaster",
        CHANGE = "change",
        CHANNEL_POINTS = "channelPoints",
        CHAT_COMMAND = "chatCommand",
        CHAT_POLL = "chatPoll",
        CHECKMARK = "checkmark",
        CLEAR_CHAT = "clearChat",
        CLICK = "click",
        CLIP = "clip",
        COFFEE = "coffee",
        COIN = "coin",
        COLOR = "color",
        COMMANDS = "commands",
        CONVERSATION = "conversation",
        COPY = "copy",
        COUNT = "count",
        COUNTDOWN = "countdown",
        CREDITS = "credits",
        CROSS = "cross",
        DATE = "date",
        DEBUG = "debug",
        DELETE = "delete",
        DICE = "dice",
        DISCORD = "discord",
        DONOR = "donor",
        DOWNLOAD = "download",
        DRAG_ZONE = "dragZone",
        EASING = "easing",
        EDIT = "edit",
        ELEVATED = "elevated",
        ELGATO = "elgato",
        EMERGENCY = "emergency",
        EMOTE = "emote",
        ENTER = "enter",
        FILTERS = "filters",
        FIRST_TIME = "firstTime",
        FIX = "fix",
        FOLLOW = "follow",
        FOLLOW_OUTLINE = "follow_outline",
        FONT = "font",
        FONT_SIZE = "fontSize",
        FULLSCREEN = "fullscreen",
        GIFT = "gift",
        GITHUB = "github",
        GOXLR = "goxlr",
        GOXLR_BLEEP = "goxlr_bleep",
        GOXLR_FX = "goxlr_fx",
        HAND = "hand",
        HEAT = "heat",
        HELP = "help",
        HIDE = "hide",
        HIGHLIGHT = "highlight",
        HISTORY = "history",
        HYPE_CHAT = "hypeChat",
        IDEA = "idea",
        INFO = "info",
        INTERNET = "internet",
        KOFI = "kofi",
        LEAVE = "leave",
        LIST = "list",
        LIVE = "live",
        LOADER = "loader",
        LOCK = "lock",
        LOOP = "loop",
        MAGNET = "magnet",
        MARK_READ = "markRead",
        MAX = "max",
        MERGE = "merge",
        MICROPHONE = "microphone",
        MICROPHONE_MUTE = "microphone_mute",
        MICROPHONE_RECORDING = "microphone_recording",
        MIN = "min",
        MINUS = "minus",
        MOD = "mod",
        MOVE = "move",
        MUSIC = "music",
        MUTE = "mute",
        NEWTAB = "newtab",
        NEXT = "next",
        NO_MUSIC = "noMusic",
        NOTIFICATION = "notification",
        NUMBER = "number",
        OBS = "obs",
        OFFLINE = "offline",
        ONLINE = "online",
        ORDERABLE = "orderable",
        OVERLAY = "overlay",
        PARAMS = "params",
        PARTNER = "partner",
        PATREON = "patreon",
        PAUSE = "pause",
        PAYPAL = "paypal",
        PIN = "pin",
        PIPETTE = "pipette",
        PLACEHOLDER = "placeholder",
        PLAY = "play",
        POLL = "poll",
        POLYGON = "polygon",
        PREDICTION = "prediction",
        PREMIUM = "premium",
        PRESENTATION = "presentation",
        PRESS = "press",
        PREV = "prev",
        PRIME = "prime",
        PROS = "pros",
        QNA = "qna",
        RAID = "raid",
        READ = "read",
        REFRESH = "refresh",
        REPLY = "reply",
        RETURNING = "returning",
        REWARD_HIGHLIGHT = "reward_highlight",
        RIGHT_CLICK = "rightClick",
        ROTATE = "rotate",
        SAVE = "save",
        SCALE = "scale",
        SCROLL = "scroll",
        SCROLL_DOWN = "scrollDown",
        SCROLL_UP = "scrollUp",
        SEARCH = "search",
        SHADOW = "shadow",
        SHIELD = "shield",
        SHIELD_MODE = "shieldMode",
        SHOUTOUT = "shoutout",
        SHOW = "show",
        SKIP = "skip",
        SLOW = "slow",
        SPOTIFY = "spotify",
        STARS = "stars",
        STOP = "stop",
        SUB = "sub",
        TEST = "test",
        THICKNESS = "thickness",
        TICKET = "ticket",
        TIKTOK = "tiktok",
        TIMEOUT = "timeout",
        TIMER = "timer",
        TRAIN = "train",
        TRAIN_BOOST = "train_boost",
        TRANSLATE = "translate",
        TRASH = "trash",
        TTS = "tts",
        TWITCH = "twitch",
        TWITCHAT = "twitchat",
        TWITTER = "twitter",
        ULULE = "ulule",
        UNBAN = "unban",
        UNBLOCK = "unblock",
        UNFOLLOW = "unfollow",
        UNLOCK = "unlock",
        UNMOD = "unmod",
        UNMUTE = "unmute",
        UNPIN = "unpin",
        UNVIP = "unvip",
        UPDATE = "update",
        UPLOAD = "upload",
        URL = "url",
        USER = "user",
        VIBRATE = "vibrate",
        VIP = "vip",
        VOICE = "voice",
        VOICEMOD = "voicemod",
        VOLUME = "volume",
        WATCH_STREAK = "watchStreak",
        WHISPERS = "whispers",
        YOUTUBE = "youtube",
    }
}
export = Twitchat;
export as namespace Twitchat;
