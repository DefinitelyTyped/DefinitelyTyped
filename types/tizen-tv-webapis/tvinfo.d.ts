/**
 * Defines constants for caption settings keys.
 */
export enum TvInfoMenuKey {
    /**
     * Caption On/Off
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_OFF = 0;
     * unsigned long CAPTION_ON = 1;
     */
    CAPTION_ONOFF_KEY = 0,

    /**
     * Caption mode. Default: Service 6
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_MODE_DEFAULT = 0;
     * unsigned long CAPTION_MODE_SERVICE1 = 1;
     * unsigned long CAPTION_MODE_SERVICE2 = 2;
     * unsigned long CAPTION_MODE_SERVICE3 = 3;
     * unsigned long CAPTION_MODE_SERVICE4 = 4;
     * unsigned long CAPTION_MODE_SERVICE5 = 5;
     * unsigned long CAPTION_MODE_SERVICE6 = 6;
     * unsigned long CAPTION_MODE_CC1 = 7;
     * unsigned long CAPTION_MODE_CC2 = 8;
     * unsigned long CAPTION_MODE_CC3 = 9;
     * unsigned long CAPTION_MODE_CC4 = 10;
     * unsigned long CAPTION_MODE_TEXT1 = 11;
     * unsigned long CAPTION_MODE_TEXT2 = 12;
     * unsigned long CAPTION_MODE_TEXT3 = 13;
     * unsigned long CAPTION_MODE_TEXT4 = 14;
     */
    CAPTION_MODE_KEY = 1,

    /**
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_SIZE_DEFAULT = 0;
     * unsigned long CAPTION_SIZE_SMALL = 1;
     * unsigned long CAPTION_SIZE_STANDARD = 2;
     * unsigned long CAPTION_SIZE_LARGE = 3;
     * unsigned long CAPTION_SIZE_EXTRA_LARGE = 4;
     */
    CAPTION_FONT_SIZE_KEY = 2,

    /**
     * Caption font style. Default: Style 6
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_FONT_DEFAULT = 0;
     * unsigned long CAPTION_FONT_STYLE0 = 1;
     * unsigned long CAPTION_FONT_STYLE1 = 2;
     * unsigned long CAPTION_FONT_STYLE2 = 3;
     * unsigned long CAPTION_FONT_STYLE3 = 4;
     * unsigned long CAPTION_FONT_STYLE4 = 5;
     * unsigned long CAPTION_FONT_STYLE5 = 6;
     * unsigned long CAPTION_FONT_STYLE6 = 7;
     */
    CAPTION_FONT_STYLE_KEY = 3,

    /**
     * Caption text foreground color
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_COLOR_DEFAULT = 0;
     * unsigned long CAPTION_COLOR_WHITE = 1;
     * unsigned long CAPTION_COLOR_BLACK = 2;
     * unsigned long CAPTION_COLOR_RED = 3;
     * unsigned long CAPTION_COLOR_GREEN = 4;
     * unsigned long CAPTION_COLOR_BLUE = 5;
     * unsigned long CAPTION_COLOR_YELLOW = 6;
     * unsigned long CAPTION_COLOR_MAGENTA = 7;
     * unsigned long CAPTION_COLOR_CYAN = 8;
     */
    CAPTION_FG_COLOR_KEY = 4,

    /**
     * Caption text foreground opacity
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_OPACITY_SOLID = 0;
     * unsigned long CAPTION_OPACITY_FLASH = 1;
     * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
     * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
     * unsigned long CAPTION_OPACITY_DEFAULT = 4;
     * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
     * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
     */
    CAPTION_FG_OPACITY_KEY = 5,

    /**
     * Caption text background color
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_COLOR_DEFAULT = 0;
     * unsigned long CAPTION_COLOR_WHITE = 1;
     * unsigned long CAPTION_COLOR_BLACK = 2;
     * unsigned long CAPTION_COLOR_RED = 3;
     * unsigned long CAPTION_COLOR_GREEN = 4;
     * unsigned long CAPTION_COLOR_BLUE = 5;
     * unsigned long CAPTION_COLOR_YELLOW = 6;
     * unsigned long CAPTION_COLOR_MAGENTA = 7;
     * unsigned long CAPTION_COLOR_CYAN = 8;
     */
    CAPTION_BG_COLOR_KEY = 6,

    /**
     * Caption text background opacity
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_OPACITY_SOLID = 0;
     * unsigned long CAPTION_OPACITY_FLASH = 1;
     * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
     * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
     * unsigned long CAPTION_OPACITY_DEFAULT = 4;
     * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
     * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
     */
    CAPTION_BG_OPACITY_KEY = 7,

    /**
     * Caption text edge type
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_EDGE_NONE = 0;
     * unsigned long CAPTION_EDGE_RAISED = 1;
     * unsigned long CAPTION_EDGE_DEPRESSED = 2;
     * unsigned long CAPTION_EDGE_UNIFORM = 3;
     * unsigned long CAPTION_EDGE_DROP_SHADOWED = 4;
     */
    CAPTION_EDGE_TYPE_KEY = 8,

    /**
     * Caption text edge color
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_COLOR_DEFAULT = 0;
     * unsigned long CAPTION_COLOR_WHITE = 1;
     * unsigned long CAPTION_COLOR_BLACK = 2;
     * unsigned long CAPTION_COLOR_RED = 3;
     * unsigned long CAPTION_COLOR_GREEN = 4;
     * unsigned long CAPTION_COLOR_BLUE = 5;
     * unsigned long CAPTION_COLOR_YELLOW = 6;
     * unsigned long CAPTION_COLOR_MAGENTA = 7;
     * unsigned long CAPTION_COLOR_CYAN = 8;
     */
    CAPTION_EDGE_COLOR_KEY = 9,

    /**
     * Caption text window color
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_COLOR_DEFAULT = 0;
     * unsigned long CAPTION_COLOR_WHITE = 1;
     * unsigned long CAPTION_COLOR_BLACK = 2;
     * unsigned long CAPTION_COLOR_RED = 3;
     * unsigned long CAPTION_COLOR_GREEN = 4;
     * unsigned long CAPTION_COLOR_BLUE = 5;
     * unsigned long CAPTION_COLOR_YELLOW = 6;
     * unsigned long CAPTION_COLOR_MAGENTA = 7;
     * unsigned long CAPTION_COLOR_CYAN = 8;
     */
    CAPTION_WINDOW_COLOR_KEY = 10,

    /**
     * Caption text window opacity
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_OPACITY_SOLID = 0;
     * unsigned long CAPTION_OPACITY_FLASH = 1;
     * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
     * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
     * unsigned long CAPTION_OPACITY_DEFAULT = 4;
     * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
     * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
     */
    CAPTION_WINDOW_OPACITY_KEY = 11,

    /**
     * Focus zoom menu value
     * expected value TvInfoMenuValue
     * unsigned long OFF = 0;
     * unsigned long ON = 1;
     */
    ACCESSIBILITY_FOCUS_ZOOM = 12,

    /**
     * High Contrast menu value
     * expected value TvInfoMenuValue
     * unsigned long OFF = 0;
     * unsigned long ON = 1;
     */
    ACCESSIBILITY_HIGH_CONTRAST = 13,

    /**
     * Channel-bound apps ticker menu value
     * expected value DOMString
     * "OFF", "ON"
     * @since 2.3
     * @note `deprecated` 3.0
     */
    SMARTHUB_CHANNEL_BOUND_APPS_TICKER = 14,

    /**
     * Voice guide menu value
     * expected value TvInfoMenuValue
     * unsigned long OFF = 0;
     * unsigned long ON = 1;
     */
    VOICE_GUIDE_KEY = 15,

    /**
     * Subtitles On/Off
     * expected value TvInfoMenuValue
     * unsigned long OFF = 0;
     * unsigned long ON = 1;
     */
    SUBTITLE_ONOFF_KEY = 16,

    /**
     * Subtitle mode
     * expected value TvInfoMenuValue
     * unsigned long SUBTITLE_NORMAL = 0;
     * unsigned long SUBTITLE_HEARING_IMMPEARED = 1;
     */
    SUBTITLE_MODE_KEY = 17,

    /**
     * Primary Audio Language
     * expected value TvInfoMenuValue
     * DOMString AUDIO_LANGUAGE_CODE_AFR = "AFR";
     * DOMString AUDIO_LANGUAGE_CODE_AKA = "AKA";
     * DOMString AUDIO_LANGUAGE_CODE_AMH = "AMH";
     * DOMString AUDIO_LANGUAGE_CODE_ARA = "ARA";
     * DOMString AUDIO_LANGUAGE_CODE_ASM = "ASM";
     * DOMString AUDIO_LANGUAGE_CODE_BEN = "BEN";
     * DOMString AUDIO_LANGUAGE_CODE_BUL = "BUL";
     * DOMString AUDIO_LANGUAGE_CODE_CAT = "CAT";
     * DOMString AUDIO_LANGUAGE_CODE_CHI = "CHI";
     * DOMString AUDIO_LANGUAGE_CODE_CMN = "CMN";
     * DOMString AUDIO_LANGUAGE_CODE_CZE = "CZE";
     * DOMString AUDIO_LANGUAGE_CODE_DAG = "DAG";
     * DOMString AUDIO_LANGUAGE_CODE_DAN = "DAN";
     * DOMString AUDIO_LANGUAGE_CODE_DUT = "DUT";
     * DOMString AUDIO_LANGUAGE_CODE_ENG = "ENG";
     * DOMString AUDIO_LANGUAGE_CODE_EST = "EST";
     * DOMString AUDIO_LANGUAGE_CODE_EUS = "EUS";
     * DOMString AUDIO_LANGUAGE_CODE_EWE = "EWE";
     * DOMString AUDIO_LANGUAGE_CODE_FIN = "FIN";
     * DOMString AUDIO_LANGUAGE_CODE_FRE = "FRE";
     * DOMString AUDIO_LANGUAGE_CODE_GAA = "GAA";
     * DOMString AUDIO_LANGUAGE_CODE_GER = "GER";
     * DOMString AUDIO_LANGUAGE_CODE_GLA = "GLA";
     * DOMString AUDIO_LANGUAGE_CODE_GLG = "GLG";
     * DOMString AUDIO_LANGUAGE_CODE_GOS = "GOS";
     * DOMString AUDIO_LANGUAGE_CODE_GRE = "GRE";
     * DOMString AUDIO_LANGUAGE_CODE_GUJ = "GUJ";
     * DOMString AUDIO_LANGUAGE_CODE_HAU = "HAU";
     * DOMString AUDIO_LANGUAGE_CODE_HEB = "HEB";
     * DOMString AUDIO_LANGUAGE_CODE_HIN = "HIN";
     * DOMString AUDIO_LANGUAGE_CODE_HRV = "HRV";
     * DOMString AUDIO_LANGUAGE_CODE_HUN = "HUN";
     * DOMString AUDIO_LANGUAGE_CODE_IGB = "IGB";
     * DOMString AUDIO_LANGUAGE_CODE_IND = "IND";
     * DOMString AUDIO_LANGUAGE_CODE_IRI = "IRI";
     * DOMString AUDIO_LANGUAGE_CODE_ITA = "ITA";
     * DOMString AUDIO_LANGUAGE_CODE_JPN = "JPN";
     * DOMString AUDIO_LANGUAGE_CODE_KAN = "KAN";
     * DOMString AUDIO_LANGUAGE_CODE_KOK = "KOK";
     * DOMString AUDIO_LANGUAGE_CODE_KOR = "KOR";
     * DOMString AUDIO_LANGUAGE_CODE_LAV = "LAV";
     * DOMString AUDIO_LANGUAGE_CODE_LIT = "LIT";
     * DOMString AUDIO_LANGUAGE_CODE_MAL = "MAL";
     * DOMString AUDIO_LANGUAGE_CODE_MAO = "MAO";
     * DOMString AUDIO_LANGUAGE_CODE_MAR = "MAR";
     * DOMString AUDIO_LANGUAGE_CODE_MSA = "MSA";
     * DOMString AUDIO_LANGUAGE_CODE_NBL = "NBL";
     * DOMString AUDIO_LANGUAGE_CODE_NOR = "NOR";
     * DOMString AUDIO_LANGUAGE_CODE_NSO = "NSO";
     * DOMString AUDIO_LANGUAGE_CODE_NZI = "NZI";
     * DOMString AUDIO_LANGUAGE_CODE_ORI = "ORI";
     * DOMString AUDIO_LANGUAGE_CODE_PAN = "PAN";
     * DOMString AUDIO_LANGUAGE_CODE_PER = "PER";
     * DOMString AUDIO_LANGUAGE_CODE_POL = "POL";
     * DOMString AUDIO_LANGUAGE_CODE_POR = "POR";
     * DOMString AUDIO_LANGUAGE_CODE_QAA = "QAA";
     * DOMString AUDIO_LANGUAGE_CODE_QAB = "QAB";
     * DOMString AUDIO_LANGUAGE_CODE_QAC = "QAC";
     * DOMString AUDIO_LANGUAGE_CODE_ROM = "ROM";
     * DOMString AUDIO_LANGUAGE_CODE_RUS = "RUS";
     * DOMString AUDIO_LANGUAGE_CODE_SLK = "SLK";
     * DOMString AUDIO_LANGUAGE_CODE_SOT = "SOT";
     * DOMString AUDIO_LANGUAGE_CODE_SPA = "SPA";
     * DOMString AUDIO_LANGUAGE_CODE_SRP = "SRP";
     * DOMString AUDIO_LANGUAGE_CODE_SSW = "SSW";
     * DOMString AUDIO_LANGUAGE_CODE_SWA = "SWA";
     * DOMString AUDIO_LANGUAGE_CODE_SWE = "SWE";
     * DOMString AUDIO_LANGUAGE_CODE_TAM = "TAM";
     * DOMString AUDIO_LANGUAGE_CODE_TEL = "TEL";
     * DOMString AUDIO_LANGUAGE_CODE_THA = "THA";
     * DOMString AUDIO_LANGUAGE_CODE_TSN = "TSN";
     * DOMString AUDIO_LANGUAGE_CODE_TSO = "TSO";
     * DOMString AUDIO_LANGUAGE_CODE_TUR = "TUR";
     * DOMString AUDIO_LANGUAGE_CODE_TWI = "TWI";
     * DOMString AUDIO_LANGUAGE_CODE_UKR = "UKR";
     * DOMString AUDIO_LANGUAGE_CODE_VAL = "VAL";
     * DOMString AUDIO_LANGUAGE_CODE_VEN = "VEN";
     * DOMString AUDIO_LANGUAGE_CODE_VIE = "VIE";
     * DOMString AUDIO_LANGUAGE_CODE_WEL = "WEL";
     * DOMString AUDIO_LANGUAGE_CODE_XHO = "XHO";
     * DOMString AUDIO_LANGUAGE_CODE_XSM = "XSM";
     * DOMString AUDIO_LANGUAGE_CODE_YOR = "YOR";
     * DOMString AUDIO_LANGUAGE_CODE_YUE = "YUE";
     * DOMString AUDIO_LANGUAGE_CODE_ZHO = "ZHO";
     * DOMString AUDIO_LANGUAGE_CODE_ZUL = "ZUL";
     * Only the values that can be set in the menu can be set to webapi
     */
    PRIMARY_AUDIO_LANGUAGE_KEY = 18,

    /**
     * Secondary Audio Language
     * expected value TvInfoMenuValue
     * DOMString AUDIO_LANGUAGE_CODE_AFR = "AFR";
     * DOMString AUDIO_LANGUAGE_CODE_AKA = "AKA";
     * DOMString AUDIO_LANGUAGE_CODE_AMH = "AMH";
     * DOMString AUDIO_LANGUAGE_CODE_ARA = "ARA";
     * DOMString AUDIO_LANGUAGE_CODE_ASM = "ASM";
     * DOMString AUDIO_LANGUAGE_CODE_BEN = "BEN";
     * DOMString AUDIO_LANGUAGE_CODE_BUL = "BUL";
     * DOMString AUDIO_LANGUAGE_CODE_CAT = "CAT";
     * DOMString AUDIO_LANGUAGE_CODE_CHI = "CHI";
     * DOMString AUDIO_LANGUAGE_CODE_CMN = "CMN";
     * DOMString AUDIO_LANGUAGE_CODE_CZE = "CZE";
     * DOMString AUDIO_LANGUAGE_CODE_DAG = "DAG";
     * DOMString AUDIO_LANGUAGE_CODE_DAN = "DAN";
     * DOMString AUDIO_LANGUAGE_CODE_DUT = "DUT";
     * DOMString AUDIO_LANGUAGE_CODE_ENG = "ENG";
     * DOMString AUDIO_LANGUAGE_CODE_EST = "EST";
     * DOMString AUDIO_LANGUAGE_CODE_EUS = "EUS";
     * DOMString AUDIO_LANGUAGE_CODE_EWE = "EWE";
     * DOMString AUDIO_LANGUAGE_CODE_FIN = "FIN";
     * DOMString AUDIO_LANGUAGE_CODE_FRE = "FRE";
     * DOMString AUDIO_LANGUAGE_CODE_GAA = "GAA";
     * DOMString AUDIO_LANGUAGE_CODE_GER = "GER";
     * DOMString AUDIO_LANGUAGE_CODE_GLA = "GLA";
     * DOMString AUDIO_LANGUAGE_CODE_GLG = "GLG";
     * DOMString AUDIO_LANGUAGE_CODE_GOS = "GOS";
     * DOMString AUDIO_LANGUAGE_CODE_GRE = "GRE";
     * DOMString AUDIO_LANGUAGE_CODE_GUJ = "GUJ";
     * DOMString AUDIO_LANGUAGE_CODE_HAU = "HAU";
     * DOMString AUDIO_LANGUAGE_CODE_HEB = "HEB";
     * DOMString AUDIO_LANGUAGE_CODE_HIN = "HIN";
     * DOMString AUDIO_LANGUAGE_CODE_HRV = "HRV";
     * DOMString AUDIO_LANGUAGE_CODE_HUN = "HUN";
     * DOMString AUDIO_LANGUAGE_CODE_IGB = "IGB";
     * DOMString AUDIO_LANGUAGE_CODE_IND = "IND";
     * DOMString AUDIO_LANGUAGE_CODE_IRI = "IRI";
     * DOMString AUDIO_LANGUAGE_CODE_ITA = "ITA";
     * DOMString AUDIO_LANGUAGE_CODE_JPN = "JPN";
     * DOMString AUDIO_LANGUAGE_CODE_KAN = "KAN";
     * DOMString AUDIO_LANGUAGE_CODE_KOK = "KOK";
     * DOMString AUDIO_LANGUAGE_CODE_KOR = "KOR";
     * DOMString AUDIO_LANGUAGE_CODE_LAV = "LAV";
     * DOMString AUDIO_LANGUAGE_CODE_LIT = "LIT";
     * DOMString AUDIO_LANGUAGE_CODE_MAL = "MAL";
     * DOMString AUDIO_LANGUAGE_CODE_MAO = "MAO";
     * DOMString AUDIO_LANGUAGE_CODE_MAR = "MAR";
     * DOMString AUDIO_LANGUAGE_CODE_MSA = "MSA";
     * DOMString AUDIO_LANGUAGE_CODE_NBL = "NBL";
     * DOMString AUDIO_LANGUAGE_CODE_NOR = "NOR";
     * DOMString AUDIO_LANGUAGE_CODE_NSO = "NSO";
     * DOMString AUDIO_LANGUAGE_CODE_NZI = "NZI";
     * DOMString AUDIO_LANGUAGE_CODE_ORI = "ORI";
     * DOMString AUDIO_LANGUAGE_CODE_PAN = "PAN";
     * DOMString AUDIO_LANGUAGE_CODE_PER = "PER";
     * DOMString AUDIO_LANGUAGE_CODE_POL = "POL";
     * DOMString AUDIO_LANGUAGE_CODE_POR = "POR";
     * DOMString AUDIO_LANGUAGE_CODE_QAA = "QAA";
     * DOMString AUDIO_LANGUAGE_CODE_QAB = "QAB";
     * DOMString AUDIO_LANGUAGE_CODE_QAC = "QAC";
     * DOMString AUDIO_LANGUAGE_CODE_ROM = "ROM";
     * DOMString AUDIO_LANGUAGE_CODE_RUS = "RUS";
     * DOMString AUDIO_LANGUAGE_CODE_SLK = "SLK";
     * DOMString AUDIO_LANGUAGE_CODE_SOT = "SOT";
     * DOMString AUDIO_LANGUAGE_CODE_SPA = "SPA";
     * DOMString AUDIO_LANGUAGE_CODE_SRP = "SRP";
     * DOMString AUDIO_LANGUAGE_CODE_SSW = "SSW";
     * DOMString AUDIO_LANGUAGE_CODE_SWA = "SWA";
     * DOMString AUDIO_LANGUAGE_CODE_SWE = "SWE";
     * DOMString AUDIO_LANGUAGE_CODE_TAM = "TAM";
     * DOMString AUDIO_LANGUAGE_CODE_TEL = "TEL";
     * DOMString AUDIO_LANGUAGE_CODE_THA = "THA";
     * DOMString AUDIO_LANGUAGE_CODE_TSN = "TSN";
     * DOMString AUDIO_LANGUAGE_CODE_TSO = "TSO";
     * DOMString AUDIO_LANGUAGE_CODE_TUR = "TUR";
     * DOMString AUDIO_LANGUAGE_CODE_TWI = "TWI";
     * DOMString AUDIO_LANGUAGE_CODE_UKR = "UKR";
     * DOMString AUDIO_LANGUAGE_CODE_VAL = "VAL";
     * DOMString AUDIO_LANGUAGE_CODE_VEN = "VEN";
     * DOMString AUDIO_LANGUAGE_CODE_VIE = "VIE";
     * DOMString AUDIO_LANGUAGE_CODE_WEL = "WEL";
     * DOMString AUDIO_LANGUAGE_CODE_XHO = "XHO";
     * DOMString AUDIO_LANGUAGE_CODE_XSM = "XSM";
     * DOMString AUDIO_LANGUAGE_CODE_YOR = "YOR";
     * DOMString AUDIO_LANGUAGE_CODE_YUE = "YUE";
     * DOMString AUDIO_LANGUAGE_CODE_ZHO = "ZHO";
     * DOMString AUDIO_LANGUAGE_CODE_ZUL = "ZUL";
     * Only the values that can be set in the menu can be set to webapi
     */
    SECONDARY_AUDIO_LANGUAGE_KEY = 19,

    /**
     * voice guide speed
     * expected value TvInfoMenuValue
     * DOMString VOICEGUIDE_SPEED_VERY_FAST = "VERY_FAST";
     * DOMString VOICEGUIDE_SPEED_FAST = "FAST";
     * DOMString VOICEGUIDE_SPEED_NORMAL= "NORMAL";
     * DOMString VOICEGUIDE_SPEED_SLOW = "SLOW";
     * DOMString VOICEGUIDE_SPEED_VERY_SLOW  = "VERY_SLOW";
     */
    ACCESSIBILITY_VOICE_GUIDE_SPEED = 20,

    /**
     * caption style
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_STYLE_DEFAULT = 0;
     * unsigned long CAPTION_STYLE_BOLD = 1;
     * unsigned long CAPTION_STYLE_ITALIC = 2;
     */
    CAPTION_STYLE_KEY = 21,
}

/**
 * Defines constants for TV menu settings values.
 */
export enum TvInfoMenuValue {
    /**
     * MenuValue Off
     */
    OFF = 0,

    /**
     * MenuValue On
     */
    ON = 1,

    /**
     * Caption Off
     */
    CAPTION_OFF = 0,

    /**
     * Caption On
     */
    CAPTION_ON = 1,

    /**
     * Default Mode
     */
    CAPTION_MODE_DEFAULT = 0,

    /**
     * Service 1
     */
    CAPTION_MODE_SERVICE1 = 1,

    /**
     * Service 2
     */
    CAPTION_MODE_SERVICE2 = 2,

    /**
     * Service 3
     */
    CAPTION_MODE_SERVICE3 = 3,

    /**
     * Service 4
     */
    CAPTION_MODE_SERVICE4 = 4,

    /**
     * Service 5
     */
    CAPTION_MODE_SERVICE5 = 5,

    /**
     * Service 6
     */
    CAPTION_MODE_SERVICE6 = 6,

    /**
     * English (KOR Localset)
     */
    CAPTION_MODE_CC1 = 7,

    /**
     * Korean (KOR Localset)
     */
    CAPTION_MODE_CC2 = 8,

    /**
     * US Localset only
     */
    CAPTION_MODE_CC3 = 9,

    /**
     * US Localset only
     */
    CAPTION_MODE_CC4 = 10,

    /**
     * Text 1
     */
    CAPTION_MODE_TEXT1 = 11,

    /**
     * Text 2
     */
    CAPTION_MODE_TEXT2 = 12,

    /**
     * Text 3
     */
    CAPTION_MODE_TEXT3 = 13,

    /**
     * Text 4
     */
    CAPTION_MODE_TEXT4 = 14,

    /**
     * Default
     */
    CAPTION_SIZE_DEFAULT = 0,

    /**
     * Small
     */
    CAPTION_SIZE_SMALL = 1,

    /**
     * Standard
     */
    CAPTION_SIZE_STANDARD = 2,

    /**
     * Large
     */
    CAPTION_SIZE_LARGE = 3,

    /**
     * Extra large
     */
    CAPTION_SIZE_EXTRA_LARGE = 4,

    /**
     * Default
     */
    CAPTION_FONT_DEFAULT = 0,

    /**
     * Style 0
     */
    CAPTION_FONT_STYLE0 = 1,

    /**
     * Style 1
     */
    CAPTION_FONT_STYLE1 = 2,

    /**
     * Style 2
     */
    CAPTION_FONT_STYLE2 = 3,

    /**
     * Style 3
     */
    CAPTION_FONT_STYLE3 = 4,

    /**
     * Style 4
     */
    CAPTION_FONT_STYLE4 = 5,

    /**
     * Style 5
     */
    CAPTION_FONT_STYLE5 = 6,

    /**
     * Style 6
     */
    CAPTION_FONT_STYLE6 = 7,

    /**
     * Default
     */
    CAPTION_COLOR_DEFAULT = 0,

    /**
     * White
     */
    CAPTION_COLOR_WHITE = 1,

    /**
     * Black
     */
    CAPTION_COLOR_BLACK = 2,

    /**
     * Red
     */
    CAPTION_COLOR_RED = 3,

    /**
     * Green
     */
    CAPTION_COLOR_GREEN = 4,

    /**
     * Blue
     */
    CAPTION_COLOR_BLUE = 5,

    /**
     * Yellow
     */
    CAPTION_COLOR_YELLOW = 6,

    /**
     * Magenta
     */
    CAPTION_COLOR_MAGENTA = 7,

    /**
     * Cyan
     */
    CAPTION_COLOR_CYAN = 8,

    /**
     * Solid
     */
    CAPTION_OPACITY_SOLID = 0,

    /**
     * Flashing
     */
    CAPTION_OPACITY_FLASH = 1,

    /**
     * Translucent
     */
    CAPTION_OPACITY_TRANSLUCENT = 2,

    /**
     * Transparent
     */
    CAPTION_OPACITY_TRANSPARENT = 3,

    /**
     * Default
     */
    CAPTION_OPACITY_DEFAULT = 4,

    /**
     * Highly translucent
     */
    CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5,

    /**
     * Slightly translucent
     */
    CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6,

    /**
     * No edge
     */
    CAPTION_EDGE_NONE = 0,

    /**
     * Raised
     */
    CAPTION_EDGE_RAISED = 1,

    /**
     * Depressed
     */
    CAPTION_EDGE_DEPRESSED = 2,

    /**
     * Uniform
     */
    CAPTION_EDGE_UNIFORM = 3,

    /**
     * Drop shadow
     */
    CAPTION_EDGE_DROP_SHADOWED = 4,

    /**
     * Normal subtitles
     */
    SUBTITLE_NORMAL = 0,

    /**
     * Subtitles for the hearing-immpeared
     */
    SUBTITLE_HEARING_IMMPEARED = 1,

    /**
     * Afrikaans voice mode
     */
    AUDIO_LANGUAGE_CODE_AFR = 'AFR',

    /**
     * Akan voice mode
     */
    AUDIO_LANGUAGE_CODE_AKA = 'AKA',

    /**
     * Amharic voice mode
     */
    AUDIO_LANGUAGE_CODE_AMH = 'AMH',

    /**
     * Arab voice mode
     */
    AUDIO_LANGUAGE_CODE_ARA = 'ARA',

    /**
     * India-Assamese voice mode
     */
    AUDIO_LANGUAGE_CODE_ASM = 'ASM',

    /**
     * India-Bengali voice mode
     */
    AUDIO_LANGUAGE_CODE_BEN = 'BEN',

    /**
     * Bulgarian voice mode
     */
    AUDIO_LANGUAGE_CODE_BUL = 'BUL',

    /**
     * catala voice mode
     */
    AUDIO_LANGUAGE_CODE_CAT = 'CAT',

    /**
     * Chinese voice mode
     */
    AUDIO_LANGUAGE_CODE_CHI = 'CHI',

    /**
     * Chinese (Mandarin) voice mode
     */
    AUDIO_LANGUAGE_CODE_CMN = 'CMN',

    /**
     * Czech voice mode
     */
    AUDIO_LANGUAGE_CODE_CZE = 'CZE',

    /**
     * Ghana-Dagbani voice mode
     */
    AUDIO_LANGUAGE_CODE_DAG = 'DAG',

    /**
     * Danish voice mode
     */
    AUDIO_LANGUAGE_CODE_DAN = 'DAN',

    /**
     * Dutch voice mode
     */
    AUDIO_LANGUAGE_CODE_DUT = 'DUT',

    /**
     * English voice mode
     */
    AUDIO_LANGUAGE_CODE_ENG = 'ENG',

    /**
     * Estonia voice mode
     */
    AUDIO_LANGUAGE_CODE_EST = 'EST',

    /**
     * basque voice mode
     */
    AUDIO_LANGUAGE_CODE_EUS = 'EUS',

    /**
     * Ewe voice mode
     */
    AUDIO_LANGUAGE_CODE_EWE = 'EWE',

    /**
     * Finnish voice mode
     */
    AUDIO_LANGUAGE_CODE_FIN = 'FIN',

    /**
     * French voice mode
     */
    AUDIO_LANGUAGE_CODE_FRE = 'FRE',

    /**
     * Gaa voice mode
     */
    AUDIO_LANGUAGE_CODE_GAA = 'GAA',

    /**
     * German voice mode
     */
    AUDIO_LANGUAGE_CODE_GER = 'GER',

    /**
     * Gaelic voice mode
     */
    AUDIO_LANGUAGE_CODE_GLA = 'GLA',

    /**
     * Galician voice mode
     */
    AUDIO_LANGUAGE_CODE_GLG = 'GLG',

    /**
     * Netherlands private code
     */
    AUDIO_LANGUAGE_CODE_GOS = 'GOS',

    /**
     * Greek voice mode
     */
    AUDIO_LANGUAGE_CODE_GRE = 'GRE',

    /**
     * India-Gujarati voice mode
     */
    AUDIO_LANGUAGE_CODE_GUJ = 'GUJ',

    /**
     * Hausa voice mode
     */
    AUDIO_LANGUAGE_CODE_HAU = 'HAU',

    /**
     * Hebrew voice mode
     */
    AUDIO_LANGUAGE_CODE_HEB = 'HEB',

    /**
     * Hindi voice mode
     */
    AUDIO_LANGUAGE_CODE_HIN = 'HIN',

    /**
     * Croatian voice mode
     */
    AUDIO_LANGUAGE_CODE_HRV = 'HRV',

    /**
     * Hungarian voice mode
     */
    AUDIO_LANGUAGE_CODE_HUN = 'HUN',

    /**
     * Igbo voice mode
     */
    AUDIO_LANGUAGE_CODE_IGB = 'IGB',

    /**
     * Indonesia voice mode
     */
    AUDIO_LANGUAGE_CODE_IND = 'IND',

    /**
     * Irish voice mode
     */
    AUDIO_LANGUAGE_CODE_IRI = 'IRI',

    /**
     * Italian voice mode
     */
    AUDIO_LANGUAGE_CODE_ITA = 'ITA',

    /**
     * Japanes voice mode
     */
    AUDIO_LANGUAGE_CODE_JPN = 'JPN',

    /**
     * India-Kannada voice mode
     */
    AUDIO_LANGUAGE_CODE_KAN = 'KAN',

    /**
     * India-Kokani voice mode
     */
    AUDIO_LANGUAGE_CODE_KOK = 'KOK',

    /**
     * Korean voice mode
     */
    AUDIO_LANGUAGE_CODE_KOR = 'KOR',

    /**
     * Latvian voice mode
     */
    AUDIO_LANGUAGE_CODE_LAV = 'LAV',

    /**
     * Lithuanian voice mode
     */
    AUDIO_LANGUAGE_CODE_LIT = 'LIT',

    /**
     * India-Malayalam voice mode
     */
    AUDIO_LANGUAGE_CODE_MAL = 'MAL',

    /**
     * Maori voice mode
     */
    AUDIO_LANGUAGE_CODE_MAO = 'MAO',

    /**
     * Marathi voice mode
     */
    AUDIO_LANGUAGE_CODE_MAR = 'MAR',

    /**
     * India-Marathi voice mode
     */
    AUDIO_LANGUAGE_CODE_MSA = 'MSA',

    /**
     * Ndebele voice mode
     */
    AUDIO_LANGUAGE_CODE_NBL = 'NBL',

    /**
     * Norwegian voice mode
     */
    AUDIO_LANGUAGE_CODE_NOR = 'NOR',

    /**
     * Sotho, Northern voice mode
     */
    AUDIO_LANGUAGE_CODE_NSO = 'NSO',

    /**
     * Nzema voice mode
     */
    AUDIO_LANGUAGE_CODE_NZI = 'NZI',

    /**
     * India-Oriya voice mode
     */
    AUDIO_LANGUAGE_CODE_ORI = 'ORI',

    /**
     * India-Punjabi voice mode
     */
    AUDIO_LANGUAGE_CODE_PAN = 'PAN',

    /**
     * Persisian voice mode
     */
    AUDIO_LANGUAGE_CODE_PER = 'PER',

    /**
     * Polish voice mode
     */
    AUDIO_LANGUAGE_CODE_POL = 'POL',

    /**
     * Portuguese voice mode
     */
    AUDIO_LANGUAGE_CODE_POR = 'POR',

    /**
     * Singapore preffered audio.
     */
    AUDIO_LANGUAGE_CODE_QAA = 'QAA',

    /**
     * Singapore secondary audio.
     */
    AUDIO_LANGUAGE_CODE_QAB = 'QAB',

    /**
     * Singapore third audio
     */
    AUDIO_LANGUAGE_CODE_QAC = 'QAC',

    /**
     * Rumanian voice mode
     */
    AUDIO_LANGUAGE_CODE_ROM = 'ROM',

    /**
     * Russian voice mode
     */
    AUDIO_LANGUAGE_CODE_RUS = 'RUS',

    /**
     * Slovakia voice mode
     */
    AUDIO_LANGUAGE_CODE_SLK = 'SLK',

    /**
     * Sotho, Southern voice mode
     */
    AUDIO_LANGUAGE_CODE_SOT = 'SOT',

    /**
     * Spanish voice mode
     */
    AUDIO_LANGUAGE_CODE_SPA = 'SPA',

    /**
     * Serbian voice mode
     */
    AUDIO_LANGUAGE_CODE_SRP = 'SRP',

    /**
     * Swati voice mode
     */
    AUDIO_LANGUAGE_CODE_SSW = 'SSW',

    /**
     * Swahili voice mode
     */
    AUDIO_LANGUAGE_CODE_SWA = 'SWA',

    /**
     * Swedish voice mode
     */
    AUDIO_LANGUAGE_CODE_SWE = 'SWE',

    /**
     * tamil voice mode
     */
    AUDIO_LANGUAGE_CODE_TAM = 'TAM',

    /**
     * India-Telugu voice mode
     */
    AUDIO_LANGUAGE_CODE_TEL = 'TEL',

    /**
     * Thai voice mode
     */
    AUDIO_LANGUAGE_CODE_THA = 'THA',

    /**
     * Thai voice mode
     */
    AUDIO_LANGUAGE_CODE_TSN = 'TSN',

    /**
     * Tsonga voice mode
     */
    AUDIO_LANGUAGE_CODE_TSO = 'TSO',

    /**
     * Turkish voice mode
     */
    AUDIO_LANGUAGE_CODE_TUR = 'TUR',

    /**
     * Twi voice mode
     */
    AUDIO_LANGUAGE_CODE_TWI = 'TWI',

    /**
     * Ukraine voice mode
     */
    AUDIO_LANGUAGE_CODE_UKR = 'UKR',

    /**
     * valencia voice mode
     */
    AUDIO_LANGUAGE_CODE_VAL = 'VAL',

    /**
     * Venda voice mode
     */
    AUDIO_LANGUAGE_CODE_VEN = 'VEN',

    /**
     * Vietnamese voice mode
     */
    AUDIO_LANGUAGE_CODE_VIE = 'VIE',

    /**
     * Welsh voice mode
     */
    AUDIO_LANGUAGE_CODE_WEL = 'WEL',

    /**
     * Xhosa voice mode
     */
    AUDIO_LANGUAGE_CODE_XHO = 'XHO',

    /**
     * Ghana-Kasem voice mode
     */
    AUDIO_LANGUAGE_CODE_XSM = 'XSM',

    /**
     * Yoruba voice mode
     */
    AUDIO_LANGUAGE_CODE_YOR = 'YOR',

    /**
     * Chinese (Cantonese) voice mode
     */
    AUDIO_LANGUAGE_CODE_YUE = 'YUE',

    /**
     * Malaysia-Chinense voice mode
     */
    AUDIO_LANGUAGE_CODE_ZHO = 'ZHO',

    /**
     * Zulu voice mode
     */
    AUDIO_LANGUAGE_CODE_ZUL = 'ZUL',

    /**
     * voice guide speed
     */
    VOICEGUIDE_SPEED_VERY_FAST = 'VERY_FAST',

    /**
     * voice guide speed
     */
    VOICEGUIDE_SPEED_FAST = 'FAST',

    /**
     * voice guide speed
     */
    VOICEGUIDE_SPEED_NORMAL = 'NORMAL',

    /**
     * voice guide speed
     */
    VOICEGUIDE_SPEED_SLOW = 'SLOW',

    /**
     * voice guide speed
     */
    VOICEGUIDE_SPEED_VERY_SLOW = 'VERY_SLOW',

    /**
     * caption style
     */
    CAPTION_STYLE_DEFAULT = 0,

    /**
     * caption style
     */
    CAPTION_STYLE_BOLD = 1,

    /**
     * caption style
     */
    CAPTION_STYLE_ITALIC = 2,
}

/**
 * Defines constants for TV information keys.
 */
export enum TvInfoKey {
    /**
     * Whether the application can be executed in the background
     */
    TV_VIEWER_BG_EXECUTABLE = 0,
}

/**
 * Defines constants for TV information values.
 */
export enum TvInfoValue {
    /**
     * Background execution is not supported
     */
    TV_VIEWER_BG_NOT_EXECUTABLE = 0,

    /**
     * Background execution is supported
     */
    TV_VIEWER_BG_EXECUTABLE = 1,
}

/**
 * This module defines the TV settings value functionalities provided by the Tizen Samsung TV Product API.
 * @since 2.3
 */
export interface TvInfoManager {
    /**
     * Caption settings key
     */
    TvInfoMenuKey: {
        /**
         * Caption On/Off
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_OFF = 0;
         * unsigned long CAPTION_ON = 1;
         */
        CAPTION_ONOFF_KEY: 0;
        /**
         * Caption mode. Default: Service 6
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_MODE_DEFAULT = 0;
         * unsigned long CAPTION_MODE_SERVICE1 = 1;
         * unsigned long CAPTION_MODE_SERVICE2 = 2;
         * unsigned long CAPTION_MODE_SERVICE3 = 3;
         * unsigned long CAPTION_MODE_SERVICE4 = 4;
         * unsigned long CAPTION_MODE_SERVICE5 = 5;
         * unsigned long CAPTION_MODE_SERVICE6 = 6;
         * unsigned long CAPTION_MODE_CC1 = 7;
         * unsigned long CAPTION_MODE_CC2 = 8;
         * unsigned long CAPTION_MODE_CC3 = 9;
         * unsigned long CAPTION_MODE_CC4 = 10;
         * unsigned long CAPTION_MODE_TEXT1 = 11;
         * unsigned long CAPTION_MODE_TEXT2 = 12;
         * unsigned long CAPTION_MODE_TEXT3 = 13;
         * unsigned long CAPTION_MODE_TEXT4 = 14;
         */
        CAPTION_MODE_KEY: 1;
        /**
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_SIZE_DEFAULT = 0;
         * unsigned long CAPTION_SIZE_SMALL = 1;
         * unsigned long CAPTION_SIZE_STANDARD = 2;
         * unsigned long CAPTION_SIZE_LARGE = 3;
         * unsigned long CAPTION_SIZE_EXTRA_LARGE = 4;
         */
        CAPTION_FONT_SIZE_KEY: 2;
        /**
         * Caption font style. Default: Style 6
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_FONT_DEFAULT = 0;
         * unsigned long CAPTION_FONT_STYLE0 = 1;
         * unsigned long CAPTION_FONT_STYLE1 = 2;
         * unsigned long CAPTION_FONT_STYLE2 = 3;
         * unsigned long CAPTION_FONT_STYLE3 = 4;
         * unsigned long CAPTION_FONT_STYLE4 = 5;
         * unsigned long CAPTION_FONT_STYLE5 = 6;
         * unsigned long CAPTION_FONT_STYLE6 = 7;
         */
        CAPTION_FONT_STYLE_KEY: 3;
        /**
         * Caption text foreground color
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_COLOR_DEFAULT = 0;
         * unsigned long CAPTION_COLOR_WHITE = 1;
         * unsigned long CAPTION_COLOR_BLACK = 2;
         * unsigned long CAPTION_COLOR_RED = 3;
         * unsigned long CAPTION_COLOR_GREEN = 4;
         * unsigned long CAPTION_COLOR_BLUE = 5;
         * unsigned long CAPTION_COLOR_YELLOW = 6;
         * unsigned long CAPTION_COLOR_MAGENTA = 7;
         * unsigned long CAPTION_COLOR_CYAN = 8;
         */
        CAPTION_FG_COLOR_KEY: 4;
        /**
         * Caption text foreground opacity
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_OPACITY_SOLID = 0;
         * unsigned long CAPTION_OPACITY_FLASH = 1;
         * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
         * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
         * unsigned long CAPTION_OPACITY_DEFAULT = 4;
         * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
         * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
         */
        CAPTION_FG_OPACITY_KEY: 5;
        /**
         * Caption text background color
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_COLOR_DEFAULT = 0;
         * unsigned long CAPTION_COLOR_WHITE = 1;
         * unsigned long CAPTION_COLOR_BLACK = 2;
         * unsigned long CAPTION_COLOR_RED = 3;
         * unsigned long CAPTION_COLOR_GREEN = 4;
         * unsigned long CAPTION_COLOR_BLUE = 5;
         * unsigned long CAPTION_COLOR_YELLOW = 6;
         * unsigned long CAPTION_COLOR_MAGENTA = 7;
         * unsigned long CAPTION_COLOR_CYAN = 8;
         */
        CAPTION_BG_COLOR_KEY: 6;
        /**
         * Caption text background opacity
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_OPACITY_SOLID = 0;
         * unsigned long CAPTION_OPACITY_FLASH = 1;
         * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
         * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
         * unsigned long CAPTION_OPACITY_DEFAULT = 4;
         * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
         * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
         */
        CAPTION_BG_OPACITY_KEY: 7;
        /**
         * Caption text edge type
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_EDGE_NONE = 0;
         * unsigned long CAPTION_EDGE_RAISED = 1;
         * unsigned long CAPTION_EDGE_DEPRESSED = 2;
         * unsigned long CAPTION_EDGE_UNIFORM = 3;
         * unsigned long CAPTION_EDGE_DROP_SHADOWED = 4;
         */
        CAPTION_EDGE_TYPE_KEY: 8;
        /**
         * Caption text edge color
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_COLOR_DEFAULT = 0;
         * unsigned long CAPTION_COLOR_WHITE = 1;
         * unsigned long CAPTION_COLOR_BLACK = 2;
         * unsigned long CAPTION_COLOR_RED = 3;
         * unsigned long CAPTION_COLOR_GREEN = 4;
         * unsigned long CAPTION_COLOR_BLUE = 5;
         * unsigned long CAPTION_COLOR_YELLOW = 6;
         * unsigned long CAPTION_COLOR_MAGENTA = 7;
         * unsigned long CAPTION_COLOR_CYAN = 8;
         */
        CAPTION_EDGE_COLOR_KEY: 9;
        /**
         * Caption text window color
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_COLOR_DEFAULT = 0;
         * unsigned long CAPTION_COLOR_WHITE = 1;
         * unsigned long CAPTION_COLOR_BLACK = 2;
         * unsigned long CAPTION_COLOR_RED = 3;
         * unsigned long CAPTION_COLOR_GREEN = 4;
         * unsigned long CAPTION_COLOR_BLUE = 5;
         * unsigned long CAPTION_COLOR_YELLOW = 6;
         * unsigned long CAPTION_COLOR_MAGENTA = 7;
         * unsigned long CAPTION_COLOR_CYAN = 8;
         */
        CAPTION_WINDOW_COLOR_KEY: 10;
        /**
         * Caption text window opacity
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_OPACITY_SOLID = 0;
         * unsigned long CAPTION_OPACITY_FLASH = 1;
         * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
         * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
         * unsigned long CAPTION_OPACITY_DEFAULT = 4;
         * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
         * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
         */
        CAPTION_WINDOW_OPACITY_KEY: 11;
        /**
         * Focus zoom menu value
         * expected value TvInfoMenuValue
         * unsigned long OFF = 0;
         * unsigned long ON = 1;
         */
        ACCESSIBILITY_FOCUS_ZOOM: 12;
        /**
         * High Contrast menu value
         * expected value TvInfoMenuValue
         * unsigned long OFF = 0;
         * unsigned long ON = 1;
         */
        ACCESSIBILITY_HIGH_CONTRAST: 13;
        /**
         * Channel-bound apps ticker menu value
         * expected value DOMString
         * "OFF", "ON"
         * @since 2.3
         * @note `deprecated` 3.0
         */
        SMARTHUB_CHANNEL_BOUND_APPS_TICKER: 14;
        /**
         * Voice guide menu value
         * expected value TvInfoMenuValue
         * unsigned long OFF = 0;
         * unsigned long ON = 1;
         */
        VOICE_GUIDE_KEY: 15;
        /**
         * Subtitles On/Off
         * expected value TvInfoMenuValue
         * unsigned long OFF = 0;
         * unsigned long ON = 1;
         */
        SUBTITLE_ONOFF_KEY: 16;
        /**
         * Subtitle mode
         * expected value TvInfoMenuValue
         * unsigned long SUBTITLE_NORMAL = 0;
         * unsigned long SUBTITLE_HEARING_IMMPEARED = 1;
         */
        SUBTITLE_MODE_KEY: 17;
        /**
         * Primary Audio Language
         * expected value TvInfoMenuValue
         * DOMString AUDIO_LANGUAGE_CODE_AFR = "AFR";
         * DOMString AUDIO_LANGUAGE_CODE_AKA = "AKA";
         * DOMString AUDIO_LANGUAGE_CODE_AMH = "AMH";
         * DOMString AUDIO_LANGUAGE_CODE_ARA = "ARA";
         * DOMString AUDIO_LANGUAGE_CODE_ASM = "ASM";
         * DOMString AUDIO_LANGUAGE_CODE_BEN = "BEN";
         * DOMString AUDIO_LANGUAGE_CODE_BUL = "BUL";
         * DOMString AUDIO_LANGUAGE_CODE_CAT = "CAT";
         * DOMString AUDIO_LANGUAGE_CODE_CHI = "CHI";
         * DOMString AUDIO_LANGUAGE_CODE_CMN = "CMN";
         * DOMString AUDIO_LANGUAGE_CODE_CZE = "CZE";
         * DOMString AUDIO_LANGUAGE_CODE_DAG = "DAG";
         * DOMString AUDIO_LANGUAGE_CODE_DAN = "DAN";
         * DOMString AUDIO_LANGUAGE_CODE_DUT = "DUT";
         * DOMString AUDIO_LANGUAGE_CODE_ENG = "ENG";
         * DOMString AUDIO_LANGUAGE_CODE_EST = "EST";
         * DOMString AUDIO_LANGUAGE_CODE_EUS = "EUS";
         * DOMString AUDIO_LANGUAGE_CODE_EWE = "EWE";
         * DOMString AUDIO_LANGUAGE_CODE_FIN = "FIN";
         * DOMString AUDIO_LANGUAGE_CODE_FRE = "FRE";
         * DOMString AUDIO_LANGUAGE_CODE_GAA = "GAA";
         * DOMString AUDIO_LANGUAGE_CODE_GER = "GER";
         * DOMString AUDIO_LANGUAGE_CODE_GLA = "GLA";
         * DOMString AUDIO_LANGUAGE_CODE_GLG = "GLG";
         * DOMString AUDIO_LANGUAGE_CODE_GOS = "GOS";
         * DOMString AUDIO_LANGUAGE_CODE_GRE = "GRE";
         * DOMString AUDIO_LANGUAGE_CODE_GUJ = "GUJ";
         * DOMString AUDIO_LANGUAGE_CODE_HAU = "HAU";
         * DOMString AUDIO_LANGUAGE_CODE_HEB = "HEB";
         * DOMString AUDIO_LANGUAGE_CODE_HIN = "HIN";
         * DOMString AUDIO_LANGUAGE_CODE_HRV = "HRV";
         * DOMString AUDIO_LANGUAGE_CODE_HUN = "HUN";
         * DOMString AUDIO_LANGUAGE_CODE_IGB = "IGB";
         * DOMString AUDIO_LANGUAGE_CODE_IND = "IND";
         * DOMString AUDIO_LANGUAGE_CODE_IRI = "IRI";
         * DOMString AUDIO_LANGUAGE_CODE_ITA = "ITA";
         * DOMString AUDIO_LANGUAGE_CODE_JPN = "JPN";
         * DOMString AUDIO_LANGUAGE_CODE_KAN = "KAN";
         * DOMString AUDIO_LANGUAGE_CODE_KOK = "KOK";
         * DOMString AUDIO_LANGUAGE_CODE_KOR = "KOR";
         * DOMString AUDIO_LANGUAGE_CODE_LAV = "LAV";
         * DOMString AUDIO_LANGUAGE_CODE_LIT = "LIT";
         * DOMString AUDIO_LANGUAGE_CODE_MAL = "MAL";
         * DOMString AUDIO_LANGUAGE_CODE_MAO = "MAO";
         * DOMString AUDIO_LANGUAGE_CODE_MAR = "MAR";
         * DOMString AUDIO_LANGUAGE_CODE_MSA = "MSA";
         * DOMString AUDIO_LANGUAGE_CODE_NBL = "NBL";
         * DOMString AUDIO_LANGUAGE_CODE_NOR = "NOR";
         * DOMString AUDIO_LANGUAGE_CODE_NSO = "NSO";
         * DOMString AUDIO_LANGUAGE_CODE_NZI = "NZI";
         * DOMString AUDIO_LANGUAGE_CODE_ORI = "ORI";
         * DOMString AUDIO_LANGUAGE_CODE_PAN = "PAN";
         * DOMString AUDIO_LANGUAGE_CODE_PER = "PER";
         * DOMString AUDIO_LANGUAGE_CODE_POL = "POL";
         * DOMString AUDIO_LANGUAGE_CODE_POR = "POR";
         * DOMString AUDIO_LANGUAGE_CODE_QAA = "QAA";
         * DOMString AUDIO_LANGUAGE_CODE_QAB = "QAB";
         * DOMString AUDIO_LANGUAGE_CODE_QAC = "QAC";
         * DOMString AUDIO_LANGUAGE_CODE_ROM = "ROM";
         * DOMString AUDIO_LANGUAGE_CODE_RUS = "RUS";
         * DOMString AUDIO_LANGUAGE_CODE_SLK = "SLK";
         * DOMString AUDIO_LANGUAGE_CODE_SOT = "SOT";
         * DOMString AUDIO_LANGUAGE_CODE_SPA = "SPA";
         * DOMString AUDIO_LANGUAGE_CODE_SRP = "SRP";
         * DOMString AUDIO_LANGUAGE_CODE_SSW = "SSW";
         * DOMString AUDIO_LANGUAGE_CODE_SWA = "SWA";
         * DOMString AUDIO_LANGUAGE_CODE_SWE = "SWE";
         * DOMString AUDIO_LANGUAGE_CODE_TAM = "TAM";
         * DOMString AUDIO_LANGUAGE_CODE_TEL = "TEL";
         * DOMString AUDIO_LANGUAGE_CODE_THA = "THA";
         * DOMString AUDIO_LANGUAGE_CODE_TSN = "TSN";
         * DOMString AUDIO_LANGUAGE_CODE_TSO = "TSO";
         * DOMString AUDIO_LANGUAGE_CODE_TUR = "TUR";
         * DOMString AUDIO_LANGUAGE_CODE_TWI = "TWI";
         * DOMString AUDIO_LANGUAGE_CODE_UKR = "UKR";
         * DOMString AUDIO_LANGUAGE_CODE_VAL = "VAL";
         * DOMString AUDIO_LANGUAGE_CODE_VEN = "VEN";
         * DOMString AUDIO_LANGUAGE_CODE_VIE = "VIE";
         * DOMString AUDIO_LANGUAGE_CODE_WEL = "WEL";
         * DOMString AUDIO_LANGUAGE_CODE_XHO = "XHO";
         * DOMString AUDIO_LANGUAGE_CODE_XSM = "XSM";
         * DOMString AUDIO_LANGUAGE_CODE_YOR = "YOR";
         * DOMString AUDIO_LANGUAGE_CODE_YUE = "YUE";
         * DOMString AUDIO_LANGUAGE_CODE_ZHO = "ZHO";
         * DOMString AUDIO_LANGUAGE_CODE_ZUL = "ZUL";
         * Only the values that can be set in the menu can be set to webapi
         */
        PRIMARY_AUDIO_LANGUAGE_KEY: 18;
        /**
         * Secondary Audio Language
         * expected value TvInfoMenuValue
         * DOMString AUDIO_LANGUAGE_CODE_AFR = "AFR";
         * DOMString AUDIO_LANGUAGE_CODE_AKA = "AKA";
         * DOMString AUDIO_LANGUAGE_CODE_AMH = "AMH";
         * DOMString AUDIO_LANGUAGE_CODE_ARA = "ARA";
         * DOMString AUDIO_LANGUAGE_CODE_ASM = "ASM";
         * DOMString AUDIO_LANGUAGE_CODE_BEN = "BEN";
         * DOMString AUDIO_LANGUAGE_CODE_BUL = "BUL";
         * DOMString AUDIO_LANGUAGE_CODE_CAT = "CAT";
         * DOMString AUDIO_LANGUAGE_CODE_CHI = "CHI";
         * DOMString AUDIO_LANGUAGE_CODE_CMN = "CMN";
         * DOMString AUDIO_LANGUAGE_CODE_CZE = "CZE";
         * DOMString AUDIO_LANGUAGE_CODE_DAG = "DAG";
         * DOMString AUDIO_LANGUAGE_CODE_DAN = "DAN";
         * DOMString AUDIO_LANGUAGE_CODE_DUT = "DUT";
         * DOMString AUDIO_LANGUAGE_CODE_ENG = "ENG";
         * DOMString AUDIO_LANGUAGE_CODE_EST = "EST";
         * DOMString AUDIO_LANGUAGE_CODE_EUS = "EUS";
         * DOMString AUDIO_LANGUAGE_CODE_EWE = "EWE";
         * DOMString AUDIO_LANGUAGE_CODE_FIN = "FIN";
         * DOMString AUDIO_LANGUAGE_CODE_FRE = "FRE";
         * DOMString AUDIO_LANGUAGE_CODE_GAA = "GAA";
         * DOMString AUDIO_LANGUAGE_CODE_GER = "GER";
         * DOMString AUDIO_LANGUAGE_CODE_GLA = "GLA";
         * DOMString AUDIO_LANGUAGE_CODE_GLG = "GLG";
         * DOMString AUDIO_LANGUAGE_CODE_GOS = "GOS";
         * DOMString AUDIO_LANGUAGE_CODE_GRE = "GRE";
         * DOMString AUDIO_LANGUAGE_CODE_GUJ = "GUJ";
         * DOMString AUDIO_LANGUAGE_CODE_HAU = "HAU";
         * DOMString AUDIO_LANGUAGE_CODE_HEB = "HEB";
         * DOMString AUDIO_LANGUAGE_CODE_HIN = "HIN";
         * DOMString AUDIO_LANGUAGE_CODE_HRV = "HRV";
         * DOMString AUDIO_LANGUAGE_CODE_HUN = "HUN";
         * DOMString AUDIO_LANGUAGE_CODE_IGB = "IGB";
         * DOMString AUDIO_LANGUAGE_CODE_IND = "IND";
         * DOMString AUDIO_LANGUAGE_CODE_IRI = "IRI";
         * DOMString AUDIO_LANGUAGE_CODE_ITA = "ITA";
         * DOMString AUDIO_LANGUAGE_CODE_JPN = "JPN";
         * DOMString AUDIO_LANGUAGE_CODE_KAN = "KAN";
         * DOMString AUDIO_LANGUAGE_CODE_KOK = "KOK";
         * DOMString AUDIO_LANGUAGE_CODE_KOR = "KOR";
         * DOMString AUDIO_LANGUAGE_CODE_LAV = "LAV";
         * DOMString AUDIO_LANGUAGE_CODE_LIT = "LIT";
         * DOMString AUDIO_LANGUAGE_CODE_MAL = "MAL";
         * DOMString AUDIO_LANGUAGE_CODE_MAO = "MAO";
         * DOMString AUDIO_LANGUAGE_CODE_MAR = "MAR";
         * DOMString AUDIO_LANGUAGE_CODE_MSA = "MSA";
         * DOMString AUDIO_LANGUAGE_CODE_NBL = "NBL";
         * DOMString AUDIO_LANGUAGE_CODE_NOR = "NOR";
         * DOMString AUDIO_LANGUAGE_CODE_NSO = "NSO";
         * DOMString AUDIO_LANGUAGE_CODE_NZI = "NZI";
         * DOMString AUDIO_LANGUAGE_CODE_ORI = "ORI";
         * DOMString AUDIO_LANGUAGE_CODE_PAN = "PAN";
         * DOMString AUDIO_LANGUAGE_CODE_PER = "PER";
         * DOMString AUDIO_LANGUAGE_CODE_POL = "POL";
         * DOMString AUDIO_LANGUAGE_CODE_POR = "POR";
         * DOMString AUDIO_LANGUAGE_CODE_QAA = "QAA";
         * DOMString AUDIO_LANGUAGE_CODE_QAB = "QAB";
         * DOMString AUDIO_LANGUAGE_CODE_QAC = "QAC";
         * DOMString AUDIO_LANGUAGE_CODE_ROM = "ROM";
         * DOMString AUDIO_LANGUAGE_CODE_RUS = "RUS";
         * DOMString AUDIO_LANGUAGE_CODE_SLK = "SLK";
         * DOMString AUDIO_LANGUAGE_CODE_SOT = "SOT";
         * DOMString AUDIO_LANGUAGE_CODE_SPA = "SPA";
         * DOMString AUDIO_LANGUAGE_CODE_SRP = "SRP";
         * DOMString AUDIO_LANGUAGE_CODE_SSW = "SSW";
         * DOMString AUDIO_LANGUAGE_CODE_SWA = "SWA";
         * DOMString AUDIO_LANGUAGE_CODE_SWE = "SWE";
         * DOMString AUDIO_LANGUAGE_CODE_TAM = "TAM";
         * DOMString AUDIO_LANGUAGE_CODE_TEL = "TEL";
         * DOMString AUDIO_LANGUAGE_CODE_THA = "THA";
         * DOMString AUDIO_LANGUAGE_CODE_TSN = "TSN";
         * DOMString AUDIO_LANGUAGE_CODE_TSO = "TSO";
         * DOMString AUDIO_LANGUAGE_CODE_TUR = "TUR";
         * DOMString AUDIO_LANGUAGE_CODE_TWI = "TWI";
         * DOMString AUDIO_LANGUAGE_CODE_UKR = "UKR";
         * DOMString AUDIO_LANGUAGE_CODE_VAL = "VAL";
         * DOMString AUDIO_LANGUAGE_CODE_VEN = "VEN";
         * DOMString AUDIO_LANGUAGE_CODE_VIE = "VIE";
         * DOMString AUDIO_LANGUAGE_CODE_WEL = "WEL";
         * DOMString AUDIO_LANGUAGE_CODE_XHO = "XHO";
         * DOMString AUDIO_LANGUAGE_CODE_XSM = "XSM";
         * DOMString AUDIO_LANGUAGE_CODE_YOR = "YOR";
         * DOMString AUDIO_LANGUAGE_CODE_YUE = "YUE";
         * DOMString AUDIO_LANGUAGE_CODE_ZHO = "ZHO";
         * DOMString AUDIO_LANGUAGE_CODE_ZUL = "ZUL";
         * Only the values that can be set in the menu can be set to webapi
         */
        SECONDARY_AUDIO_LANGUAGE_KEY: 19;
        /**
         * voice guide speed
         * expected value TvInfoMenuValue
         * DOMString VOICEGUIDE_SPEED_VERY_FAST = "VERY_FAST";
         * DOMString VOICEGUIDE_SPEED_FAST = "FAST";
         * DOMString VOICEGUIDE_SPEED_NORMAL= "NORMAL";
         * DOMString VOICEGUIDE_SPEED_SLOW = "SLOW";
         * DOMString VOICEGUIDE_SPEED_VERY_SLOW  = "VERY_SLOW";
         */
        ACCESSIBILITY_VOICE_GUIDE_SPEED: 20;
        /**
         * caption style
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_STYLE_DEFAULT = 0;
         * unsigned long CAPTION_STYLE_BOLD = 1;
         * unsigned long CAPTION_STYLE_ITALIC = 2;
         */
        CAPTION_STYLE_KEY: 21;
    };

    /**
     * Defines constants for TV menu settings values.
     */
    TvInfoMenuValue: {
        /**
         * MenuValue Off
         */
        OFF: 0;
        /**
         * MenuValue On
         */
        ON: 1;
        /**
         * Caption Off
         */
        CAPTION_OFF: 0;
        /**
         * Caption On
         */
        CAPTION_ON: 1;
        /**
         * Default Mode
         */
        CAPTION_MODE_DEFAULT: 0;
        /**
         * Service 1
         */
        CAPTION_MODE_SERVICE1: 1;
        /**
         * Service 2
         */
        CAPTION_MODE_SERVICE2: 2;
        /**
         * Service 3
         */
        CAPTION_MODE_SERVICE3: 3;
        /**
         * Service 4
         */
        CAPTION_MODE_SERVICE4: 4;
        /**
         * Service 5
         */
        CAPTION_MODE_SERVICE5: 5;
        /**
         * Service 6
         */
        CAPTION_MODE_SERVICE6: 6;
        /**
         * English (KOR Localset)
         */
        CAPTION_MODE_CC1: 7;
        /**
         * Korean (KOR Localset)
         */
        CAPTION_MODE_CC2: 8;
        /**
         * US Localset only
         */
        CAPTION_MODE_CC3: 9;
        /**
         * US Localset only
         */
        CAPTION_MODE_CC4: 10;
        /**
         * Text 1
         */
        CAPTION_MODE_TEXT1: 11;
        /**
         * Text 2
         */
        CAPTION_MODE_TEXT2: 12;
        /**
         * Text 3
         */
        CAPTION_MODE_TEXT3: 13;
        /**
         * Text 4
         */
        CAPTION_MODE_TEXT4: 14;
        /**
         * Default
         */
        CAPTION_SIZE_DEFAULT: 0;
        /**
         * Small
         */
        CAPTION_SIZE_SMALL: 1;
        /**
         * Standard
         */
        CAPTION_SIZE_STANDARD: 2;
        /**
         * Large
         */
        CAPTION_SIZE_LARGE: 3;
        /**
         * Extra large
         */
        CAPTION_SIZE_EXTRA_LARGE: 4;
        /**
         * Default
         */
        CAPTION_FONT_DEFAULT: 0;
        /**
         * Style 0
         */
        CAPTION_FONT_STYLE0: 1;
        /**
         * Style 1
         */
        CAPTION_FONT_STYLE1: 2;
        /**
         * Style 2
         */
        CAPTION_FONT_STYLE2: 3;
        /**
         * Style 3
         */
        CAPTION_FONT_STYLE3: 4;
        /**
         * Style 4
         */
        CAPTION_FONT_STYLE4: 5;
        /**
         * Style 5
         */
        CAPTION_FONT_STYLE5: 6;
        /**
         * Style 6
         */
        CAPTION_FONT_STYLE6: 7;
        /**
         * Default
         */
        CAPTION_COLOR_DEFAULT: 0;
        /**
         * White
         */
        CAPTION_COLOR_WHITE: 1;
        /**
         * Black
         */
        CAPTION_COLOR_BLACK: 2;
        /**
         * Red
         */
        CAPTION_COLOR_RED: 3;
        /**
         * Green
         */
        CAPTION_COLOR_GREEN: 4;
        /**
         * Blue
         */
        CAPTION_COLOR_BLUE: 5;
        /**
         * Yellow
         */
        CAPTION_COLOR_YELLOW: 6;
        /**
         * Magenta
         */
        CAPTION_COLOR_MAGENTA: 7;
        /**
         * Cyan
         */
        CAPTION_COLOR_CYAN: 8;
        /**
         * Solid
         */
        CAPTION_OPACITY_SOLID: 0;
        /**
         * Flashing
         */
        CAPTION_OPACITY_FLASH: 1;
        /**
         * Translucent
         */
        CAPTION_OPACITY_TRANSLUCENT: 2;
        /**
         * Transparent
         */
        CAPTION_OPACITY_TRANSPARENT: 3;
        /**
         * Default
         */
        CAPTION_OPACITY_DEFAULT: 4;
        /**
         * Highly translucent
         */
        CAPTION_OPACITY_HIGHLY_TRANSLUCENT: 5;
        /**
         * Slightly translucent
         */
        CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT: 6;
        /**
         * No edge
         */
        CAPTION_EDGE_NONE: 0;
        /**
         * Raised
         */
        CAPTION_EDGE_RAISED: 1;
        /**
         * Depressed
         */
        CAPTION_EDGE_DEPRESSED: 2;
        /**
         * Uniform
         */
        CAPTION_EDGE_UNIFORM: 3;
        /**
         * Drop shadow
         */
        CAPTION_EDGE_DROP_SHADOWED: 4;
        /**
         * Normal subtitles
         */
        SUBTITLE_NORMAL: 0;
        /**
         * Subtitles for the hearing-immpeared
         */
        SUBTITLE_HEARING_IMMPEARED: 1;
        /**
         * Afrikaans voice mode
         */
        AUDIO_LANGUAGE_CODE_AFR: 'AFR';
        /**
         * Akan voice mode
         */
        AUDIO_LANGUAGE_CODE_AKA: 'AKA';
        /**
         * Amharic voice mode
         */
        AUDIO_LANGUAGE_CODE_AMH: 'AMH';
        /**
         * Arab voice mode
         */
        AUDIO_LANGUAGE_CODE_ARA: 'ARA';
        /**
         * India-Assamese voice mode
         */
        AUDIO_LANGUAGE_CODE_ASM: 'ASM';
        /**
         * India-Bengali voice mode
         */
        AUDIO_LANGUAGE_CODE_BEN: 'BEN';
        /**
         * Bulgarian voice mode
         */
        AUDIO_LANGUAGE_CODE_BUL: 'BUL';
        /**
         * catala voice mode
         */
        AUDIO_LANGUAGE_CODE_CAT: 'CAT';
        /**
         * Chinese voice mode
         */
        AUDIO_LANGUAGE_CODE_CHI: 'CHI';
        /**
         * Chinese (Mandarin) voice mode
         */
        AUDIO_LANGUAGE_CODE_CMN: 'CMN';
        /**
         * Czech voice mode
         */
        AUDIO_LANGUAGE_CODE_CZE: 'CZE';
        /**
         * Ghana-Dagbani voice mode
         */
        AUDIO_LANGUAGE_CODE_DAG: 'DAG';
        /**
         * Danish voice mode
         */
        AUDIO_LANGUAGE_CODE_DAN: 'DAN';
        /**
         * Dutch voice mode
         */
        AUDIO_LANGUAGE_CODE_DUT: 'DUT';
        /**
         * English voice mode
         */
        AUDIO_LANGUAGE_CODE_ENG: 'ENG';
        /**
         * Estonia voice mode
         */
        AUDIO_LANGUAGE_CODE_EST: 'EST';
        /**
         * basque voice mode
         */
        AUDIO_LANGUAGE_CODE_EUS: 'EUS';
        /**
         * Ewe voice mode
         */
        AUDIO_LANGUAGE_CODE_EWE: 'EWE';
        /**
         * Finnish voice mode
         */
        AUDIO_LANGUAGE_CODE_FIN: 'FIN';
        /**
         * French voice mode
         */
        AUDIO_LANGUAGE_CODE_FRE: 'FRE';
        /**
         * Gaa voice mode
         */
        AUDIO_LANGUAGE_CODE_GAA: 'GAA';
        /**
         * German voice mode
         */
        AUDIO_LANGUAGE_CODE_GER: 'GER';
        /**
         * Gaelic voice mode
         */
        AUDIO_LANGUAGE_CODE_GLA: 'GLA';
        /**
         * Galician voice mode
         */
        AUDIO_LANGUAGE_CODE_GLG: 'GLG';
        /**
         * Netherlands private code
         */
        AUDIO_LANGUAGE_CODE_GOS: 'GOS';
        /**
         * Greek voice mode
         */
        AUDIO_LANGUAGE_CODE_GRE: 'GRE';
        /**
         * India-Gujarati voice mode
         */
        AUDIO_LANGUAGE_CODE_GUJ: 'GUJ';
        /**
         * Hausa voice mode
         */
        AUDIO_LANGUAGE_CODE_HAU: 'HAU';
        /**
         * Hebrew voice mode
         */
        AUDIO_LANGUAGE_CODE_HEB: 'HEB';
        /**
         * Hindi voice mode
         */
        AUDIO_LANGUAGE_CODE_HIN: 'HIN';
        /**
         * Croatian voice mode
         */
        AUDIO_LANGUAGE_CODE_HRV: 'HRV';
        /**
         * Hungarian voice mode
         */
        AUDIO_LANGUAGE_CODE_HUN: 'HUN';
        /**
         * Igbo voice mode
         */
        AUDIO_LANGUAGE_CODE_IGB: 'IGB';
        /**
         * Indonesia voice mode
         */
        AUDIO_LANGUAGE_CODE_IND: 'IND';
        /**
         * Irish voice mode
         */
        AUDIO_LANGUAGE_CODE_IRI: 'IRI';
        /**
         * Italian voice mode
         */
        AUDIO_LANGUAGE_CODE_ITA: 'ITA';
        /**
         * Japanes voice mode
         */
        AUDIO_LANGUAGE_CODE_JPN: 'JPN';
        /**
         * India-Kannada voice mode
         */
        AUDIO_LANGUAGE_CODE_KAN: 'KAN';
        /**
         * India-Kokani voice mode
         */
        AUDIO_LANGUAGE_CODE_KOK: 'KOK';
        /**
         * Korean voice mode
         */
        AUDIO_LANGUAGE_CODE_KOR: 'KOR';
        /**
         * Latvian voice mode
         */
        AUDIO_LANGUAGE_CODE_LAV: 'LAV';
        /**
         * Lithuanian voice mode
         */
        AUDIO_LANGUAGE_CODE_LIT: 'LIT';
        /**
         * India-Malayalam voice mode
         */
        AUDIO_LANGUAGE_CODE_MAL: 'MAL';
        /**
         * Maori voice mode
         */
        AUDIO_LANGUAGE_CODE_MAO: 'MAO';
        /**
         * Marathi voice mode
         */
        AUDIO_LANGUAGE_CODE_MAR: 'MAR';
        /**
         * India-Marathi voice mode
         */
        AUDIO_LANGUAGE_CODE_MSA: 'MSA';
        /**
         * Ndebele voice mode
         */
        AUDIO_LANGUAGE_CODE_NBL: 'NBL';
        /**
         * Norwegian voice mode
         */
        AUDIO_LANGUAGE_CODE_NOR: 'NOR';
        /**
         * Sotho, Northern voice mode
         */
        AUDIO_LANGUAGE_CODE_NSO: 'NSO';
        /**
         * Nzema voice mode
         */
        AUDIO_LANGUAGE_CODE_NZI: 'NZI';
        /**
         * India-Oriya voice mode
         */
        AUDIO_LANGUAGE_CODE_ORI: 'ORI';
        /**
         * India-Punjabi voice mode
         */
        AUDIO_LANGUAGE_CODE_PAN: 'PAN';
        /**
         * Persisian voice mode
         */
        AUDIO_LANGUAGE_CODE_PER: 'PER';
        /**
         * Polish voice mode
         */
        AUDIO_LANGUAGE_CODE_POL: 'POL';
        /**
         * Portuguese voice mode
         */
        AUDIO_LANGUAGE_CODE_POR: 'POR';
        /**
         * Singapore preffered audio.
         */
        AUDIO_LANGUAGE_CODE_QAA: 'QAA';
        /**
         * Singapore secondary audio.
         */
        AUDIO_LANGUAGE_CODE_QAB: 'QAB';
        /**
         * Singapore third audio
         */
        AUDIO_LANGUAGE_CODE_QAC: 'QAC';
        /**
         * Rumanian voice mode
         */
        AUDIO_LANGUAGE_CODE_ROM: 'ROM';
        /**
         * Russian voice mode
         */
        AUDIO_LANGUAGE_CODE_RUS: 'RUS';
        /**
         * Slovakia voice mode
         */
        AUDIO_LANGUAGE_CODE_SLK: 'SLK';
        /**
         * Sotho, Southern voice mode
         */
        AUDIO_LANGUAGE_CODE_SOT: 'SOT';
        /**
         * Spanish voice mode
         */
        AUDIO_LANGUAGE_CODE_SPA: 'SPA';
        /**
         * Serbian voice mode
         */
        AUDIO_LANGUAGE_CODE_SRP: 'SRP';
        /**
         * Swati voice mode
         */
        AUDIO_LANGUAGE_CODE_SSW: 'SSW';
        /**
         * Swahili voice mode
         */
        AUDIO_LANGUAGE_CODE_SWA: 'SWA';
        /**
         * Swedish voice mode
         */
        AUDIO_LANGUAGE_CODE_SWE: 'SWE';
        /**
         * tamil voice mode
         */
        AUDIO_LANGUAGE_CODE_TAM: 'TAM';
        /**
         * India-Telugu voice mode
         */
        AUDIO_LANGUAGE_CODE_TEL: 'TEL';
        /**
         * Thai voice mode
         */
        AUDIO_LANGUAGE_CODE_THA: 'THA';
        /**
         * Thai voice mode
         */
        AUDIO_LANGUAGE_CODE_TSN: 'TSN';
        /**
         * Tsonga voice mode
         */
        AUDIO_LANGUAGE_CODE_TSO: 'TSO';
        /**
         * Turkish voice mode
         */
        AUDIO_LANGUAGE_CODE_TUR: 'TUR';
        /**
         * Twi voice mode
         */
        AUDIO_LANGUAGE_CODE_TWI: 'TWI';
        /**
         * Ukraine voice mode
         */
        AUDIO_LANGUAGE_CODE_UKR: 'UKR';
        /**
         * valencia voice mode
         */
        AUDIO_LANGUAGE_CODE_VAL: 'VAL';
        /**
         * Venda voice mode
         */
        AUDIO_LANGUAGE_CODE_VEN: 'VEN';
        /**
         * Vietnamese voice mode
         */
        AUDIO_LANGUAGE_CODE_VIE: 'VIE';
        /**
         * Welsh voice mode
         */
        AUDIO_LANGUAGE_CODE_WEL: 'WEL';
        /**
         * Xhosa voice mode
         */
        AUDIO_LANGUAGE_CODE_XHO: 'XHO';
        /**
         * Ghana-Kasem voice mode
         */
        AUDIO_LANGUAGE_CODE_XSM: 'XSM';
        /**
         * Yoruba voice mode
         */
        AUDIO_LANGUAGE_CODE_YOR: 'YOR';
        /**
         * Chinese (Cantonese) voice mode
         */
        AUDIO_LANGUAGE_CODE_YUE: 'YUE';
        /**
         * Malaysia-Chinense voice mode
         */
        AUDIO_LANGUAGE_CODE_ZHO: 'ZHO';
        /**
         * Zulu voice mode
         */
        AUDIO_LANGUAGE_CODE_ZUL: 'ZUL';
        /**
         * voice guide speed
         */
        VOICEGUIDE_SPEED_VERY_FAST: 'VERY_FAST';
        /**
         * voice guide speed
         */
        VOICEGUIDE_SPEED_FAST: 'FAST';
        /**
         * voice guide speed
         */
        VOICEGUIDE_SPEED_NORMAL: 'NORMAL';
        /**
         * voice guide speed
         */
        VOICEGUIDE_SPEED_SLOW: 'SLOW';
        /**
         * voice guide speed
         */
        VOICEGUIDE_SPEED_VERY_SLOW: 'VERY_SLOW';
        /**
         * caption style
         */
        CAPTION_STYLE_DEFAULT: 0;
        /**
         * caption style
         */
        CAPTION_STYLE_BOLD: 1;
        /**
         * caption style
         */
        CAPTION_STYLE_ITALIC: 2;
    };

    /**
     * Defines constants for TV information keys.
     */
    TvInfoKey: {
        /**
         * Whether the application can be executed in the background
         */
        TV_VIEWER_BG_EXECUTABLE: 0;
    };

    /**
     * Defines constants for TV information values.
     */
    TvInfoValue: {
        /**
         * Background execution is not supported
         */
        TV_VIEWER_BG_NOT_EXECUTABLE: 0;
        /**
         * Background execution is supported
         */
        TV_VIEWER_BG_EXECUTABLE: 1;
    };

    /**
     * Retrieves the plugin version number.
     * @returns Plugin version
     * @since 2.3
     */
    getVersion: () => string;

    /**
     * Retrieves the specified caption or subtitle menu key value.
     * @param key Caption or subtitle menu key
     * @returns Key value
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    getMenuValue: (key: TvInfoMenuKey) => TvInfoMenuValue;

    /**
     * Registers a caption menu change listener callback.
     * @param listener TvInfoCaptionChangeCallback listener
     * @param key Caption menu key
     * @returns Listener ID
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    addCaptionChangeListener: (key: TvInfoMenuKey, listener: TvInfoCaptionChangeCallback) => number;

    /**
     * Unregisters a caption menu change listener callback.
     * @param listenerId TvInfoCaptionChangeCallback ID
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    removeCaptionChangeListener: (listenerId: number) => void;

    /**
     * Checks whether the picture size has been resized.
     * @param listenerId TvInfoCaptionChangeCallback ID
     * @returns Boolean value:
     *         true: Yes
     *         false: No
     * @throw WebAPIException NotSupportedError
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    isTvsPicSizeResized: () => boolean;

    /**
     * Retrieves the specified TV information key value.
     * @param key TV information key
     * @returns Key value
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    getTvInfoValue: (key: TvInfoKey) => TvInfoValue;

    /**
     * If captions are switched on in the TV menu, controls the caption visibility state.
     * If captions are switched off in the TV menu, captions are not shown even if the application calls showCaption(true).
     * @param show Boolean value
     * @throw WebAPIException TypeMismatchError
     * @since 2.3
     */
    showCaption: (show: boolean) => void;

    /**
     * Enables controlling caption display dynamically from within the application.
     * The application gains full permission to show and hide the captions.
     * When the application launches or resumes, call registerInAppCaptionControl(true).
     * When the application is sent to the background or deactivated states, you must call registerInAppCaptionControl(false).
     * @param status Enable or disable dynamic caption display control.
     * @throw WebAPIException TypeMismatchError
     * @since 2.3
     */
    registerInAppCaptionControl: (status: boolean) => void;
}

export interface TvInfoCaptionChangeCallback {
    /**
     * Defines a listener for caption setting change notifications.
     * @since 2.3
     */
    (key: TvInfoMenuKey): void;
}
