"use strict";

import {
    Alarm,
    AlarmFill,
    AlignBottom,
    AlignCenter,
    AlignEnd,
    AlignMiddle,
    AlignStart,
    AlignTop,
    Alt,
    App,
    AppIndicator,
    Archive,
    ArchiveFill,
    Arrow90DegDown,
    Arrow90DegLeft,
    Arrow90DegRight,
    Arrow90DegUp,
    ArrowBarDown,
    ArrowBarLeft,
    ArrowBarRight,
    ArrowBarUp,
    ArrowClockwise,
    ArrowCounterclockwise,
    ArrowDown,
    ArrowDownCircle,
    ArrowDownCircleFill,
    ArrowDownLeft,
    ArrowDownLeftCircle,
    ArrowDownLeftCircleFill,
    ArrowDownLeftSquare,
    ArrowDownLeftSquareFill,
    ArrowDownRight,
    ArrowDownRightCircle,
    ArrowDownRightCircleFill,
    ArrowDownRightSquare,
    ArrowDownRightSquareFill,
    ArrowDownShort,
    ArrowDownSquare,
    ArrowDownSquareFill,
    ArrowDownUp,
    ArrowLeft,
    ArrowLeftCircle,
    ArrowLeftCircleFill,
    ArrowLeftRight,
    ArrowLeftShort,
    ArrowLeftSquare,
    ArrowLeftSquareFill,
    ArrowRepeat,
    ArrowReturnLeft,
    ArrowReturnRight,
    ArrowRight,
    ArrowRightCircle,
    ArrowRightCircleFill,
    ArrowRightShort,
    ArrowRightSquare,
    ArrowRightSquareFill,
    ArrowsAngleContract,
    ArrowsAngleExpand,
    ArrowsCollapse,
    ArrowsExpand,
    ArrowsFullscreen,
    ArrowsMove,
    ArrowUp,
    ArrowUpCircle,
    ArrowUpCircleFill,
    ArrowUpLeft,
    ArrowUpLeftCircle,
    ArrowUpLeftCircleFill,
    ArrowUpLeftSquare,
    ArrowUpLeftSquareFill,
    ArrowUpRight,
    ArrowUpRightCircle,
    ArrowUpRightCircleFill,
    ArrowUpRightSquare,
    ArrowUpRightSquareFill,
    ArrowUpShort,
    ArrowUpSquare,
    ArrowUpSquareFill,
    AspectRatio,
    AspectRatioFill,
    Asterisk,
    At,
    Award,
    AwardFill,
    Back,
    Backspace,
    BackspaceFill,
    BackspaceReverse,
    BackspaceReverseFill,
    Badge4K,
    Badge4KFill,
    Badge8K,
    Badge8KFill,
    BadgeAd,
    BadgeAdFill,
    BadgeCc,
    BadgeCcFill,
    BadgeHd,
    BadgeHdFill,
    BadgeTm,
    BadgeTmFill,
    BadgeVo,
    BadgeVoFill,
    Bag,
    BagCheck,
    BagCheckFill,
    BagDash,
    BagDashFill,
    BagFill,
    BagPlus,
    BagPlusFill,
    BagX,
    BagXFill,
    BarChart,
    BarChartFill,
    BarChartLine,
    BarChartLineFill,
    BarChartSteps,
    Basket,
    Basket2,
    Basket2Fill,
    Basket3,
    Basket3Fill,
    BasketFill,
    Battery,
    BatteryCharging,
    BatteryFull,
    BatteryHalf,
    Bell,
    BellFill,
    Bezier,
    Bezier2,
    Bicycle,
    Binoculars,
    BinocularsFill,
    BlockquoteLeft,
    BlockquoteRight,
    Book,
    BookFill,
    BookHalf,
    Bookmark,
    BookmarkCheck,
    BookmarkCheckFill,
    BookmarkDash,
    BookmarkDashFill,
    BookmarkFill,
    BookmarkHeart,
    BookmarkHeartFill,
    BookmarkPlus,
    BookmarkPlusFill,
    Bookmarks,
    BookmarksFill,
    BookmarkStar,
    BookmarkStarFill,
    BookmarkX,
    BookmarkXFill,
    Bookshelf,
    Bootstrap,
    BootstrapFill,
    BootstrapReboot,
    BorderStyle,
    BorderWidth,
    BoundingBox,
    BoundingBoxCircles,
    Box,
    BoxArrowDown,
    BoxArrowDownLeft,
    BoxArrowDownRight,
    BoxArrowInDown,
    BoxArrowInDownLeft,
    BoxArrowInDownRight,
    BoxArrowInLeft,
    BoxArrowInRight,
    BoxArrowInUp,
    BoxArrowInUpLeft,
    BoxArrowInUpRight,
    BoxArrowLeft,
    BoxArrowRight,
    BoxArrowUp,
    BoxArrowUpLeft,
    BoxArrowUpRight,
    BoxSeam,
    Braces,
    Bricks,
    Briefcase,
    BriefcaseFill,
    BrightnessAltHigh,
    BrightnessAltHighFill,
    BrightnessAltLow,
    BrightnessAltLowFill,
    BrightnessHigh,
    BrightnessHighFill,
    BrightnessLow,
    BrightnessLowFill,
    Broadcast,
    BroadcastPin,
    Brush,
    BrushFill,
    Bucket,
    BucketFill,
    Bug,
    BugFill,
    Building,
    Bullseye,
    Calculator,
    CalculatorFill,
    Calendar,
    Calendar2,
    Calendar2Check,
    Calendar2CheckFill,
    Calendar2Date,
    Calendar2DateFill,
    Calendar2Day,
    Calendar2DayFill,
    Calendar2Event,
    Calendar2EventFill,
    Calendar2Fill,
    Calendar2Minus,
    Calendar2MinusFill,
    Calendar2Month,
    Calendar2MonthFill,
    Calendar2Plus,
    Calendar2PlusFill,
    Calendar2Range,
    Calendar2RangeFill,
    Calendar2Week,
    Calendar2WeekFill,
    Calendar2X,
    Calendar2XFill,
    Calendar3,
    Calendar3Event,
    Calendar3EventFill,
    Calendar3Fill,
    Calendar3Range,
    Calendar3RangeFill,
    Calendar3Week,
    Calendar3WeekFill,
    Calendar4,
    Calendar4Event,
    Calendar4Range,
    Calendar4Week,
    CalendarCheck,
    CalendarCheckFill,
    CalendarDate,
    CalendarDateFill,
    CalendarDay,
    CalendarDayFill,
    CalendarEvent,
    CalendarEventFill,
    CalendarFill,
    CalendarMinus,
    CalendarMinusFill,
    CalendarMonth,
    CalendarMonthFill,
    CalendarPlus,
    CalendarPlusFill,
    CalendarRange,
    CalendarRangeFill,
    CalendarWeek,
    CalendarWeekFill,
    CalendarX,
    CalendarXFill,
    Camera,
    Camera2,
    CameraFill,
    CameraReels,
    CameraReelsFill,
    CameraVideo,
    CameraVideoFill,
    CameraVideoOff,
    CameraVideoOffFill,
    Capslock,
    CapslockFill,
    CardChecklist,
    CardHeading,
    CardImage,
    CardList,
    CardText,
    CaretDown,
    CaretDownFill,
    CaretDownSquare,
    CaretDownSquareFill,
    CaretLeft,
    CaretLeftFill,
    CaretLeftSquare,
    CaretLeftSquareFill,
    CaretRight,
    CaretRightFill,
    CaretRightSquare,
    CaretRightSquareFill,
    CaretUp,
    CaretUpFill,
    CaretUpSquare,
    CaretUpSquareFill,
    Cart,
    Cart2,
    Cart3,
    Cart4,
    CartCheck,
    CartCheckFill,
    CartDash,
    CartDashFill,
    CartFill,
    CartPlus,
    CartPlusFill,
    CartX,
    CartXFill,
    Cash,
    CashStack,
    Cast,
    Chat,
    ChatDots,
    ChatDotsFill,
    ChatFill,
    ChatLeft,
    ChatLeftDots,
    ChatLeftDotsFill,
    ChatLeftFill,
    ChatLeftQuote,
    ChatLeftQuoteFill,
    ChatLeftText,
    ChatLeftTextFill,
    ChatQuote,
    ChatQuoteFill,
    ChatRight,
    ChatRightDots,
    ChatRightDotsFill,
    ChatRightFill,
    ChatRightQuote,
    ChatRightQuoteFill,
    ChatRightText,
    ChatRightTextFill,
    ChatSquare,
    ChatSquareDots,
    ChatSquareDotsFill,
    ChatSquareFill,
    ChatSquareQuote,
    ChatSquareQuoteFill,
    ChatSquareText,
    ChatSquareTextFill,
    ChatText,
    ChatTextFill,
    Check,
    Check2,
    Check2All,
    Check2Circle,
    Check2Square,
    CheckAll,
    CheckCircle,
    CheckCircleFill,
    CheckSquare,
    CheckSquareFill,
    ChevronBarContract,
    ChevronBarDown,
    ChevronBarExpand,
    ChevronBarLeft,
    ChevronBarRight,
    ChevronBarUp,
    ChevronCompactDown,
    ChevronCompactLeft,
    ChevronCompactRight,
    ChevronCompactUp,
    ChevronContract,
    ChevronDoubleDown,
    ChevronDoubleLeft,
    ChevronDoubleRight,
    ChevronDoubleUp,
    ChevronDown,
    ChevronExpand,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Circle,
    CircleFill,
    CircleHalf,
    CircleSquare,
    Clipboard,
    ClipboardCheck,
    ClipboardData,
    ClipboardMinus,
    ClipboardPlus,
    ClipboardX,
    Clock,
    ClockFill,
    ClockHistory,
    Cloud,
    CloudArrowDown,
    CloudArrowDownFill,
    CloudArrowUp,
    CloudArrowUpFill,
    CloudCheck,
    CloudCheckFill,
    CloudDownload,
    CloudDownloadFill,
    CloudFill,
    CloudMinus,
    CloudMinusFill,
    CloudPlus,
    CloudPlusFill,
    CloudSlash,
    CloudSlashFill,
    CloudUpload,
    CloudUploadFill,
    Code,
    CodeSlash,
    CodeSquare,
    Collection,
    CollectionFill,
    CollectionPlay,
    CollectionPlayFill,
    Columns,
    ColumnsGap,
    Command,
    Compass,
    CompassFill,
    Cone,
    ConeStriped,
    Controller,
    Cpu,
    CpuFill,
    CreditCard,
    CreditCard2Back,
    CreditCard2BackFill,
    CreditCard2Front,
    CreditCard2FrontFill,
    CreditCardFill,
    Crop,
    Cup,
    CupFill,
    CupStraw,
    Cursor,
    CursorFill,
    CursorText,
    Dash,
    DashCircle,
    DashCircleFill,
    DashSquare,
    DashSquareFill,
    Diagram2,
    Diagram2Fill,
    Diagram3,
    Diagram3Fill,
    Diamond,
    DiamondFill,
    DiamondHalf,
    Dice1,
    Dice1Fill,
    Dice2,
    Dice2Fill,
    Dice3,
    Dice3Fill,
    Dice4,
    Dice4Fill,
    Dice5,
    Dice5Fill,
    Dice6,
    Dice6Fill,
    Display,
    DisplayFill,
    DistributeHorizontal,
    DistributeVertical,
    DoorClosed,
    DoorClosedFill,
    DoorOpen,
    DoorOpenFill,
    Dot,
    Download,
    Droplet,
    DropletFill,
    DropletHalf,
    Earbuds,
    Easel,
    EaselFill,
    Egg,
    EggFill,
    EggFried,
    Eject,
    EjectFill,
    EmojiAngry,
    EmojiDizzy,
    EmojiExpressionless,
    EmojiFrown,
    EmojiLaughing,
    EmojiNeutral,
    EmojiSmile,
    EmojiSmileUpsideDown,
    EmojiSunglasses,
    Envelope,
    EnvelopeFill,
    EnvelopeOpen,
    EnvelopeOpenFill,
    Exclamation,
    ExclamationCircle,
    ExclamationCircleFill,
    ExclamationDiamond,
    ExclamationDiamondFill,
    ExclamationOctagon,
    ExclamationOctagonFill,
    ExclamationSquare,
    ExclamationSquareFill,
    ExclamationTriangle,
    ExclamationTriangleFill,
    Exclude,
    Eye,
    EyeFill,
    Eyeglasses,
    EyeSlash,
    EyeSlashFill,
    File,
    FileArrowDown,
    FileArrowDownFill,
    FileArrowUp,
    FileArrowUpFill,
    FileBinary,
    FileBinaryFill,
    FileBreak,
    FileBreakFill,
    FileCheck,
    FileCheckFill,
    FileCode,
    FileCodeFill,
    FileDiff,
    FileDiffFill,
    FileEarmark,
    FileEarmarkArrowDown,
    FileEarmarkArrowDownFill,
    FileEarmarkArrowUp,
    FileEarmarkArrowUpFill,
    FileEarmarkBinary,
    FileEarmarkBinaryFill,
    FileEarmarkBreak,
    FileEarmarkBreakFill,
    FileEarmarkCheck,
    FileEarmarkCheckFill,
    FileEarmarkCode,
    FileEarmarkCodeFill,
    FileEarmarkDiff,
    FileEarmarkDiffFill,
    FileEarmarkEasel,
    FileEarmarkEaselFill,
    FileEarmarkFill,
    FileEarmarkFont,
    FileEarmarkFontFill,
    FileEarmarkImage,
    FileEarmarkImageFill,
    FileEarmarkLock,
    FileEarmarkLock2,
    FileEarmarkLock2Fill,
    FileEarmarkLockFill,
    FileEarmarkMedical,
    FileEarmarkMedicalFill,
    FileEarmarkMinus,
    FileEarmarkMinusFill,
    FileEarmarkMusic,
    FileEarmarkMusicFill,
    FileEarmarkPerson,
    FileEarmarkPersonFill,
    FileEarmarkPlay,
    FileEarmarkPlayFill,
    FileEarmarkPlus,
    FileEarmarkPlusFill,
    FileEarmarkPost,
    FileEarmarkPostFill,
    FileEarmarkRichtext,
    FileEarmarkRichtextFill,
    FileEarmarkRuled,
    FileEarmarkRuledFill,
    FileEarmarkSlides,
    FileEarmarkSlidesFill,
    FileEarmarkSpreadsheet,
    FileEarmarkSpreadsheetFill,
    FileEarmarkText,
    FileEarmarkTextFill,
    FileEarmarkX,
    FileEarmarkXFill,
    FileEarmarkZip,
    FileEarmarkZipFill,
    FileEasel,
    FileEaselFill,
    FileFill,
    FileFont,
    FileFontFill,
    FileImage,
    FileImageFill,
    FileLock,
    FileLock2,
    FileLock2Fill,
    FileLockFill,
    FileMedical,
    FileMedicalFill,
    FileMinus,
    FileMinusFill,
    FileMusic,
    FileMusicFill,
    FilePerson,
    FilePersonFill,
    FilePlay,
    FilePlayFill,
    FilePlus,
    FilePlusFill,
    FilePost,
    FilePostFill,
    FileRichtext,
    FileRichtextFill,
    FileRuled,
    FileRuledFill,
    Files,
    FilesAlt,
    FileSlides,
    FileSlidesFill,
    FileSpreadsheet,
    FileSpreadsheetFill,
    FileText,
    FileTextFill,
    FileX,
    FileXFill,
    FileZip,
    FileZipFill,
    Film,
    Filter,
    FilterCircle,
    FilterCircleFill,
    FilterLeft,
    FilterRight,
    FilterSquare,
    FilterSquareFill,
    Flag,
    FlagFill,
    Flower1,
    Flower2,
    Flower3,
    Folder,
    Folder2,
    Folder2Open,
    FolderCheck,
    FolderFill,
    FolderMinus,
    FolderPlus,
    FolderSymlink,
    FolderSymlinkFill,
    FolderX,
    Fonts,
    Forward,
    ForwardFill,
    Front,
    Fullscreen,
    FullscreenExit,
    Funnel,
    FunnelFill,
    Gear,
    GearFill,
    GearWide,
    GearWideConnected,
    Gem,
    Geo,
    GeoAlt,
    GeoAltFill,
    GeoFill,
    Gift,
    GiftFill,
    Globe,
    Globe2,
    GraphDown,
    GraphUp,
    Grid,
    Grid1X2,
    Grid1X2Fill,
    Grid3X2,
    Grid3X2Gap,
    Grid3X2GapFill,
    Grid3X3,
    Grid3X3Gap,
    Grid3X3GapFill,
    GridFill,
    GripHorizontal,
    GripVertical,
    Hammer,
    Handbag,
    HandbagFill,
    HandIndex,
    HandIndexThumb,
    HandThumbsDown,
    HandThumbsUp,
    Hash,
    Hdd,
    HddFill,
    HddNetwork,
    HddNetworkFill,
    HddRack,
    HddRackFill,
    HddStack,
    HddStackFill,
    Headphones,
    Headset,
    Heart,
    HeartFill,
    HeartHalf,
    Heptagon,
    HeptagonFill,
    HeptagonHalf,
    Hexagon,
    HexagonFill,
    HexagonHalf,
    Hourglass,
    HourglassBottom,
    HourglassSplit,
    HourglassTop,
    House,
    HouseDoor,
    HouseDoorFill,
    HouseFill,
    Hr,
    Image,
    ImageAlt,
    ImageFill,
    Images,
    Inbox,
    Inboxes,
    InboxesFill,
    InboxFill,
    Info,
    InfoCircle,
    InfoCircleFill,
    InfoSquare,
    InfoSquareFill,
    InputCursor,
    InputCursorText,
    Intersect,
    Journal,
    JournalAlbum,
    JournalArrowDown,
    JournalArrowUp,
    JournalCheck,
    JournalCode,
    JournalMedical,
    JournalMinus,
    JournalPlus,
    JournalRichtext,
    Journals,
    JournalText,
    JournalX,
    Joystick,
    Justify,
    JustifyLeft,
    JustifyRight,
    Kanban,
    KanbanFill,
    Key,
    Keyboard,
    KeyboardFill,
    KeyFill,
    Ladder,
    Lamp,
    LampFill,
    Laptop,
    LaptopFill,
    Layers,
    LayersFill,
    LayersHalf,
    LayoutSidebar,
    LayoutSidebarInset,
    LayoutSidebarInsetReverse,
    LayoutSidebarReverse,
    LayoutSplit,
    LayoutTextSidebar,
    LayoutTextSidebarReverse,
    LayoutTextWindow,
    LayoutTextWindowReverse,
    LayoutThreeColumns,
    LayoutWtf,
    LifePreserver,
    Lightning,
    LightningFill,
    Link,
    Link45Deg,
    List,
    ListCheck,
    ListNested,
    ListOl,
    ListStars,
    ListTask,
    ListUl,
    Lock,
    LockFill,
    Mailbox,
    Mailbox2,
    Map,
    MapFill,
    Markdown,
    MarkdownFill,
    MenuApp,
    MenuAppFill,
    MenuButton,
    MenuButtonFill,
    MenuButtonWide,
    MenuButtonWideFill,
    MenuDown,
    MenuUp,
    Mic,
    MicFill,
    MicMute,
    MicMuteFill,
    Minecart,
    MinecartLoaded,
    Moon,
    Mouse,
    Mouse2,
    Mouse3,
    MusicNote,
    MusicNoteBeamed,
    MusicNoteList,
    MusicPlayer,
    MusicPlayerFill,
    Newspaper,
    NodeMinus,
    NodeMinusFill,
    NodePlus,
    NodePlusFill,
    Nut,
    NutFill,
    Octagon,
    OctagonFill,
    OctagonHalf,
    Option,
    Outlet,
    Paperclip,
    Paragraph,
    PatchCheck,
    PatchCheckFll,
    PatchExclamation,
    PatchExclamationFll,
    PatchMinus,
    PatchMinusFll,
    PatchPlus,
    PatchPlusFll,
    PatchQuestion,
    PatchQuestionFll,
    Pause,
    PauseFill,
    Peace,
    PeaceFill,
    Pen,
    Pencil,
    PencilFill,
    PencilSquare,
    PenFill,
    Pentagon,
    PentagonFill,
    PentagonHalf,
    People,
    PeopleFill,
    Percent,
    Person,
    PersonBadge,
    PersonBadgeFill,
    PersonBoundingBox,
    PersonCheck,
    PersonCheckFill,
    PersonCircle,
    PersonDash,
    PersonDashFill,
    PersonFill,
    PersonLinesFill,
    PersonPlus,
    PersonPlusFill,
    PersonSquare,
    PersonX,
    PersonXFill,
    Phone,
    PhoneFill,
    PhoneLandscape,
    PhoneLandscapeFill,
    PhoneVibrate,
    PieChart,
    PieChartFill,
    Pip,
    PipFill,
    Play,
    PlayFill,
    Plug,
    PlugFill,
    Plus,
    PlusCircle,
    PlusCircleFill,
    PlusSquare,
    PlusSquareFill,
    Power,
    Printer,
    PrinterFill,
    Puzzle,
    PuzzleFill,
    Question,
    QuestionCircle,
    QuestionCircleFill,
    QuestionDiamond,
    QuestionDiamondFill,
    QuestionOctagon,
    QuestionOctagonFill,
    QuestionSquare,
    QuestionSquareFill,
    Receipt,
    ReceiptCutoff,
    Reception0,
    Reception1,
    Reception2,
    Reception3,
    Reception4,
    Reply,
    ReplyAll,
    ReplyAllFill,
    ReplyFill,
    Rss,
    RssFill,
    Scissors,
    Screwdriver,
    Search,
    SegmentedNav,
    Server,
    Share,
    ShareFill,
    Shield,
    ShieldCheck,
    ShieldExclamation,
    ShieldFill,
    ShieldFillCheck,
    ShieldFillExclamation,
    ShieldFillMinus,
    ShieldFillPlus,
    ShieldFillX,
    ShieldLock,
    ShieldLockFill,
    ShieldMinus,
    ShieldPlus,
    ShieldShaded,
    ShieldSlash,
    ShieldSlashFill,
    ShieldX,
    Shift,
    ShiftFill,
    Shop,
    ShopWindow,
    Shuffle,
    Signpost,
    Signpost2,
    Signpost2Fill,
    SignpostFill,
    SignpostSplit,
    SignpostSplitFill,
    Sim,
    SimFill,
    SkipBackward,
    SkipBackwardFill,
    SkipEnd,
    SkipEndFill,
    SkipForward,
    SkipForwardFill,
    SkipStart,
    SkipStartFill,
    Slash,
    SlashCircle,
    SlashCircleFill,
    SlashSquare,
    SlashSquareFill,
    Sliders,
    Smartwatch,
    SortAlphaDown,
    SortAlphaDownAlt,
    SortAlphaUp,
    SortAlphaUpAlt,
    SortDown,
    SortDownAlt,
    SortNumericDown,
    SortNumericDownAlt,
    SortNumericUp,
    SortNumericUpAlt,
    SortUp,
    SortUpAlt,
    Soundwave,
    Speaker,
    SpeakerFill,
    Spellcheck,
    Square,
    SquareFill,
    SquareHalf,
    Star,
    StarFill,
    StarHalf,
    Stickies,
    StickiesFill,
    Sticky,
    StickyFill,
    Stop,
    StopFill,
    Stoplights,
    StoplightsFill,
    Stopwatch,
    StopwatchFill,
    Subtract,
    SuitClub,
    SuitClubFill,
    SuitDiamond,
    SuitDiamondFill,
    SuitHeart,
    SuitHeartFill,
    SuitSpade,
    SuitSpadeFill,
    Sun,
    Sunglasses,
    Table,
    Tablet,
    TabletFill,
    TabletLandscape,
    TabletLandscapeFill,
    Tag,
    TagFill,
    Tags,
    TagsFill,
    Telephone,
    TelephoneFill,
    TelephoneForward,
    TelephoneForwardFill,
    TelephoneInbound,
    TelephoneInboundFill,
    TelephoneMinus,
    TelephoneMinusFill,
    TelephoneOutbound,
    TelephoneOutboundFill,
    TelephonePlus,
    TelephonePlusFill,
    TelephoneX,
    TelephoneXFill,
    Terminal,
    TerminalFill,
    Textarea,
    TextareaResize,
    TextareaT,
    TextCenter,
    TextIndentLeft,
    TextIndentRight,
    TextLeft,
    TextParagraph,
    TextRight,
    Thermometer,
    ThermometerHalf,
    ThreeDots,
    ThreeDotsVertical,
    Toggle2Off,
    Toggle2On,
    ToggleOff,
    ToggleOn,
    Toggles,
    Toggles2,
    Tools,
    Trash,
    Trash2,
    Trash2Fill,
    TrashFill,
    Tree,
    TreeFill,
    Triangle,
    TriangleFill,
    TriangleHalf,
    Trophy,
    TrophyFill,
    Truck,
    TruckFlatbed,
    Tv,
    TvFill,
    Type,
    TypeBold,
    TypeH1,
    TypeH2,
    TypeH3,
    TypeItalic,
    TypeStrikethrough,
    TypeUnderline,
    UiChecks,
    UiChecksGrid,
    UiRadios,
    UiRadiosGrid,
    Union,
    Unlock,
    UnlockFill,
    Upc,
    UpcScan,
    Upload,
    VectorPen,
    ViewList,
    ViewStacked,
    Voicemail,
    VolumeDown,
    VolumeDownFill,
    VolumeMute,
    VolumeMuteFill,
    VolumeOff,
    VolumeOffFill,
    VolumeUp,
    VolumeUpFill,
    Vr,
    Wallet,
    Wallet2,
    WalletFill,
    Watch,
    Wifi,
    Wifi1,
    Wifi2,
    WifiOff,
    Window,
    Wrench,
    X,
    XCircle,
    XCircleFill,
    XDiamond,
    XDiamondFill,
    XOctagon,
    XOctagonFill,
    XSquare,
    XSquareFill,
    ZoomIn,
    ZoomOut,
} from "bootstrap-icons-react";

export default function BootstrapIconsReactTest() {
    return (
        <>
            <Alarm />
            <AlarmFill />
            <AlignBottom />
            <AlignCenter />
            <AlignEnd />
            <AlignMiddle />
            <AlignStart />
            <AlignTop />
            <Alt />
            <App />
            <AppIndicator />
            <Archive />
            <ArchiveFill />
            <Arrow90DegDown />
            <Arrow90DegLeft />
            <Arrow90DegRight />
            <Arrow90DegUp />
            <ArrowBarDown />
            <ArrowBarLeft />
            <ArrowBarRight />
            <ArrowBarUp />
            <ArrowClockwise />
            <ArrowCounterclockwise />
            <ArrowDown />
            <ArrowDownCircle />
            <ArrowDownCircleFill />
            <ArrowDownLeft />
            <ArrowDownLeftCircle />
            <ArrowDownLeftCircleFill />
            <ArrowDownLeftSquare />
            <ArrowDownLeftSquareFill />
            <ArrowDownRight />
            <ArrowDownRightCircle />
            <ArrowDownRightCircleFill />
            <ArrowDownRightSquare />
            <ArrowDownRightSquareFill />
            <ArrowDownShort />
            <ArrowDownSquare />
            <ArrowDownSquareFill />
            <ArrowDownUp />
            <ArrowLeft />
            <ArrowLeftCircle />
            <ArrowLeftCircleFill />
            <ArrowLeftRight />
            <ArrowLeftShort />
            <ArrowLeftSquare />
            <ArrowLeftSquareFill />
            <ArrowRepeat />
            <ArrowReturnLeft />
            <ArrowReturnRight />
            <ArrowRight />
            <ArrowRightCircle />
            <ArrowRightCircleFill />
            <ArrowRightShort />
            <ArrowRightSquare />
            <ArrowRightSquareFill />
            <ArrowUp />
            <ArrowUpCircle />
            <ArrowUpCircleFill />
            <ArrowUpLeft />
            <ArrowUpLeftCircle />
            <ArrowUpLeftCircleFill />
            <ArrowUpLeftSquare />
            <ArrowUpLeftSquareFill />
            <ArrowUpRight />
            <ArrowUpRightCircle />
            <ArrowUpRightCircleFill />
            <ArrowUpRightSquare />
            <ArrowUpRightSquareFill />
            <ArrowUpShort />
            <ArrowUpSquare />
            <ArrowUpSquareFill />
            <ArrowsAngleContract />
            <ArrowsAngleExpand />
            <ArrowsCollapse />
            <ArrowsExpand />
            <ArrowsFullscreen />
            <ArrowsMove />
            <AspectRatio />
            <AspectRatioFill />
            <Asterisk />
            <At />
            <Award />
            <AwardFill />
            <Back />
            <Backspace />
            <BackspaceFill />
            <BackspaceReverse />
            <BackspaceReverseFill />
            <Badge4K />
            <Badge4KFill />
            <Badge8K />
            <Badge8KFill />
            <BadgeAd />
            <BadgeAdFill />
            <BadgeCc />
            <BadgeCcFill />
            <BadgeHd />
            <BadgeHdFill />
            <BadgeTm />
            <BadgeTmFill />
            <BadgeVo />
            <BadgeVoFill />
            <Bag />
            <BagCheck />
            <BagCheckFill />
            <BagDash />
            <BagDashFill />
            <BagFill />
            <BagPlus />
            <BagPlusFill />
            <BagX />
            <BagXFill />
            <BarChart />
            <BarChartFill />
            <BarChartLine />
            <BarChartLineFill />
            <BarChartSteps />
            <Basket />
            <Basket2 />
            <Basket2Fill />
            <Basket3 />
            <Basket3Fill />
            <BasketFill />
            <Battery />
            <BatteryCharging />
            <BatteryFull />
            <BatteryHalf />
            <Bell />
            <BellFill />
            <Bezier />
            <Bezier2 />
            <Bicycle />
            <Binoculars />
            <BinocularsFill />
            <BlockquoteLeft />
            <BlockquoteRight />
            <Book />
            <BookFill />
            <BookHalf />
            <Bookmark />
            <BookmarkCheck />
            <BookmarkCheckFill />
            <BookmarkDash />
            <BookmarkDashFill />
            <BookmarkFill />
            <BookmarkHeart />
            <BookmarkHeartFill />
            <BookmarkPlus />
            <BookmarkPlusFill />
            <BookmarkStar />
            <BookmarkStarFill />
            <BookmarkX />
            <BookmarkXFill />
            <Bookmarks />
            <BookmarksFill />
            <Bookshelf />
            <Bootstrap />
            <BootstrapFill />
            <BootstrapReboot />
            <BorderStyle />
            <BorderWidth />
            <BoundingBox />
            <BoundingBoxCircles />
            <Box />
            <BoxArrowDown />
            <BoxArrowDownLeft />
            <BoxArrowDownRight />
            <BoxArrowInDown />
            <BoxArrowInDownLeft />
            <BoxArrowInDownRight />
            <BoxArrowInLeft />
            <BoxArrowInRight />
            <BoxArrowInUp />
            <BoxArrowInUpLeft />
            <BoxArrowInUpRight />
            <BoxArrowLeft />
            <BoxArrowRight />
            <BoxArrowUp />
            <BoxArrowUpLeft />
            <BoxArrowUpRight />
            <BoxSeam />
            <Braces />
            <Bricks />
            <Briefcase />
            <BriefcaseFill />
            <BrightnessAltHigh />
            <BrightnessAltHighFill />
            <BrightnessAltLow />
            <BrightnessAltLowFill />
            <BrightnessHigh />
            <BrightnessHighFill />
            <BrightnessLow />
            <BrightnessLowFill />
            <Broadcast />
            <BroadcastPin />
            <Brush />
            <BrushFill />
            <Bucket />
            <BucketFill />
            <Bug />
            <BugFill />
            <Building />
            <Bullseye />
            <Calculator />
            <CalculatorFill />
            <Calendar />
            <Calendar2 />
            <Calendar2Check />
            <Calendar2CheckFill />
            <Calendar2Date />
            <Calendar2DateFill />
            <Calendar2Day />
            <Calendar2DayFill />
            <Calendar2Event />
            <Calendar2EventFill />
            <Calendar2Fill />
            <Calendar2Minus />
            <Calendar2MinusFill />
            <Calendar2Month />
            <Calendar2MonthFill />
            <Calendar2Plus />
            <Calendar2PlusFill />
            <Calendar2Range />
            <Calendar2RangeFill />
            <Calendar2Week />
            <Calendar2WeekFill />
            <Calendar2X />
            <Calendar2XFill />
            <Calendar3 />
            <Calendar3Event />
            <Calendar3EventFill />
            <Calendar3Fill />
            <Calendar3Range />
            <Calendar3RangeFill />
            <Calendar3Week />
            <Calendar3WeekFill />
            <Calendar4 />
            <Calendar4Event />
            <Calendar4Range />
            <Calendar4Week />
            <CalendarCheck />
            <CalendarCheckFill />
            <CalendarDate />
            <CalendarDateFill />
            <CalendarDay />
            <CalendarDayFill />
            <CalendarEvent />
            <CalendarEventFill />
            <CalendarFill />
            <CalendarMinus />
            <CalendarMinusFill />
            <CalendarMonth />
            <CalendarMonthFill />
            <CalendarPlus />
            <CalendarPlusFill />
            <CalendarRange />
            <CalendarRangeFill />
            <CalendarWeek />
            <CalendarWeekFill />
            <CalendarX />
            <CalendarXFill />
            <Camera />
            <Camera2 />
            <CameraFill />
            <CameraReels />
            <CameraReelsFill />
            <CameraVideo />
            <CameraVideoFill />
            <CameraVideoOff />
            <CameraVideoOffFill />
            <Capslock />
            <CapslockFill />
            <CardChecklist />
            <CardHeading />
            <CardImage />
            <CardList />
            <CardText />
            <CaretDown />
            <CaretDownFill />
            <CaretDownSquare />
            <CaretDownSquareFill />
            <CaretLeft />
            <CaretLeftFill />
            <CaretLeftSquare />
            <CaretLeftSquareFill />
            <CaretRight />
            <CaretRightFill />
            <CaretRightSquare />
            <CaretRightSquareFill />
            <CaretUp />
            <CaretUpFill />
            <CaretUpSquare />
            <CaretUpSquareFill />
            <Cart />
            <Cart2 />
            <Cart3 />
            <Cart4 />
            <CartCheck />
            <CartCheckFill />
            <CartDash />
            <CartDashFill />
            <CartFill />
            <CartPlus />
            <CartPlusFill />
            <CartX />
            <CartXFill />
            <Cash />
            <CashStack />
            <Cast />
            <Chat />
            <ChatDots />
            <ChatDotsFill />
            <ChatFill />
            <ChatLeft />
            <ChatLeftDots />
            <ChatLeftDotsFill />
            <ChatLeftFill />
            <ChatLeftQuote />
            <ChatLeftQuoteFill />
            <ChatLeftText />
            <ChatLeftTextFill />
            <ChatQuote />
            <ChatQuoteFill />
            <ChatRight />
            <ChatRightDots />
            <ChatRightDotsFill />
            <ChatRightFill />
            <ChatRightQuote />
            <ChatRightQuoteFill />
            <ChatRightText />
            <ChatRightTextFill />
            <ChatSquare />
            <ChatSquareDots />
            <ChatSquareDotsFill />
            <ChatSquareFill />
            <ChatSquareQuote />
            <ChatSquareQuoteFill />
            <ChatSquareText />
            <ChatSquareTextFill />
            <ChatText />
            <ChatTextFill />
            <Check />
            <Check2 />
            <Check2All />
            <Check2Circle />
            <Check2Square />
            <CheckAll />
            <CheckCircle />
            <CheckCircleFill />
            <CheckSquare />
            <CheckSquareFill />
            <ChevronBarContract />
            <ChevronBarDown />
            <ChevronBarExpand />
            <ChevronBarLeft />
            <ChevronBarRight />
            <ChevronBarUp />
            <ChevronCompactDown />
            <ChevronCompactLeft />
            <ChevronCompactRight />
            <ChevronCompactUp />
            <ChevronContract />
            <ChevronDoubleDown />
            <ChevronDoubleLeft />
            <ChevronDoubleRight />
            <ChevronDoubleUp />
            <ChevronDown />
            <ChevronExpand />
            <ChevronLeft />
            <ChevronRight />
            <ChevronUp />
            <Circle />
            <CircleFill />
            <CircleHalf />
            <CircleSquare />
            <Clipboard />
            <ClipboardCheck />
            <ClipboardData />
            <ClipboardMinus />
            <ClipboardPlus />
            <ClipboardX />
            <Clock />
            <ClockFill />
            <ClockHistory />
            <Cloud />
            <CloudArrowDown />
            <CloudArrowDownFill />
            <CloudArrowUp />
            <CloudArrowUpFill />
            <CloudCheck />
            <CloudCheckFill />
            <CloudDownload />
            <CloudDownloadFill />
            <CloudFill />
            <CloudMinus />
            <CloudMinusFill />
            <CloudPlus />
            <CloudPlusFill />
            <CloudSlash />
            <CloudSlashFill />
            <CloudUpload />
            <CloudUploadFill />
            <Code />
            <CodeSlash />
            <CodeSquare />
            <Collection />
            <CollectionFill />
            <CollectionPlay />
            <CollectionPlayFill />
            <Columns />
            <ColumnsGap />
            <Command />
            <Compass />
            <CompassFill />
            <Cone />
            <ConeStriped />
            <Controller />
            <Cpu />
            <CpuFill />
            <CreditCard />
            <CreditCard2Back />
            <CreditCard2BackFill />
            <CreditCard2Front />
            <CreditCard2FrontFill />
            <CreditCardFill />
            <Crop />
            <Cup />
            <CupFill />
            <CupStraw />
            <Cursor />
            <CursorFill />
            <CursorText />
            <Dash />
            <DashCircle />
            <DashCircleFill />
            <DashSquare />
            <DashSquareFill />
            <Diagram2 />
            <Diagram2Fill />
            <Diagram3 />
            <Diagram3Fill />
            <Diamond />
            <DiamondFill />
            <DiamondHalf />
            <Dice1 />
            <Dice1Fill />
            <Dice2 />
            <Dice2Fill />
            <Dice3 />
            <Dice3Fill />
            <Dice4 />
            <Dice4Fill />
            <Dice5 />
            <Dice5Fill />
            <Dice6 />
            <Dice6Fill />
            <Display />
            <DisplayFill />
            <DistributeHorizontal />
            <DistributeVertical />
            <DoorClosed />
            <DoorClosedFill />
            <DoorOpen />
            <DoorOpenFill />
            <Dot />
            <Download />
            <Droplet />
            <DropletFill />
            <DropletHalf />
            <Earbuds />
            <Easel />
            <EaselFill />
            <Egg />
            <EggFill />
            <EggFried />
            <Eject />
            <EjectFill />
            <EmojiAngry />
            <EmojiDizzy />
            <EmojiExpressionless />
            <EmojiFrown />
            <EmojiLaughing />
            <EmojiNeutral />
            <EmojiSmile />
            <EmojiSmileUpsideDown />
            <EmojiSunglasses />
            <Envelope />
            <EnvelopeFill />
            <EnvelopeOpen />
            <EnvelopeOpenFill />
            <Exclamation />
            <ExclamationCircle />
            <ExclamationCircleFill />
            <ExclamationDiamond />
            <ExclamationDiamondFill />
            <ExclamationOctagon />
            <ExclamationOctagonFill />
            <ExclamationSquare />
            <ExclamationSquareFill />
            <ExclamationTriangle />
            <ExclamationTriangleFill />
            <Exclude />
            <Eye />
            <EyeFill />
            <EyeSlash />
            <EyeSlashFill />
            <Eyeglasses />
            <File />
            <FileArrowDown />
            <FileArrowDownFill />
            <FileArrowUp />
            <FileArrowUpFill />
            <FileBinary />
            <FileBinaryFill />
            <FileBreak />
            <FileBreakFill />
            <FileCheck />
            <FileCheckFill />
            <FileCode />
            <FileCodeFill />
            <FileDiff />
            <FileDiffFill />
            <FileEarmark />
            <FileEarmarkArrowDown />
            <FileEarmarkArrowDownFill />
            <FileEarmarkArrowUp />
            <FileEarmarkArrowUpFill />
            <FileEarmarkBinary />
            <FileEarmarkBinaryFill />
            <FileEarmarkBreak />
            <FileEarmarkBreakFill />
            <FileEarmarkCheck />
            <FileEarmarkCheckFill />
            <FileEarmarkCode />
            <FileEarmarkCodeFill />
            <FileEarmarkDiff />
            <FileEarmarkDiffFill />
            <FileEarmarkEasel />
            <FileEarmarkEaselFill />
            <FileEarmarkFill />
            <FileEarmarkFont />
            <FileEarmarkFontFill />
            <FileEarmarkImage />
            <FileEarmarkImageFill />
            <FileEarmarkLock />
            <FileEarmarkLock2 />
            <FileEarmarkLock2Fill />
            <FileEarmarkLockFill />
            <FileEarmarkMedical />
            <FileEarmarkMedicalFill />
            <FileEarmarkMinus />
            <FileEarmarkMinusFill />
            <FileEarmarkMusic />
            <FileEarmarkMusicFill />
            <FileEarmarkPerson />
            <FileEarmarkPersonFill />
            <FileEarmarkPlay />
            <FileEarmarkPlayFill />
            <FileEarmarkPlus />
            <FileEarmarkPlusFill />
            <FileEarmarkPost />
            <FileEarmarkPostFill />
            <FileEarmarkRichtext />
            <FileEarmarkRichtextFill />
            <FileEarmarkRuled />
            <FileEarmarkRuledFill />
            <FileEarmarkSlides />
            <FileEarmarkSlidesFill />
            <FileEarmarkSpreadsheet />
            <FileEarmarkSpreadsheetFill />
            <FileEarmarkText />
            <FileEarmarkTextFill />
            <FileEarmarkX />
            <FileEarmarkXFill />
            <FileEarmarkZip />
            <FileEarmarkZipFill />
            <FileEasel />
            <FileEaselFill />
            <FileFill />
            <FileFont />
            <FileFontFill />
            <FileImage />
            <FileImageFill />
            <FileLock />
            <FileLock2 />
            <FileLock2Fill />
            <FileLockFill />
            <FileMedical />
            <FileMedicalFill />
            <FileMinus />
            <FileMinusFill />
            <FileMusic />
            <FileMusicFill />
            <FilePerson />
            <FilePersonFill />
            <FilePlay />
            <FilePlayFill />
            <FilePlus />
            <FilePlusFill />
            <FilePost />
            <FilePostFill />
            <FileRichtext />
            <FileRichtextFill />
            <FileRuled />
            <FileRuledFill />
            <FileSlides />
            <FileSlidesFill />
            <FileSpreadsheet />
            <FileSpreadsheetFill />
            <FileText />
            <FileTextFill />
            <FileX />
            <FileXFill />
            <FileZip />
            <FileZipFill />
            <Files />
            <FilesAlt />
            <Film />
            <Filter />
            <FilterCircle />
            <FilterCircleFill />
            <FilterLeft />
            <FilterRight />
            <FilterSquare />
            <FilterSquareFill />
            <Flag />
            <FlagFill />
            <Flower1 />
            <Flower2 />
            <Flower3 />
            <Folder />
            <Folder2 />
            <Folder2Open />
            <FolderCheck />
            <FolderFill />
            <FolderMinus />
            <FolderPlus />
            <FolderSymlink />
            <FolderSymlinkFill />
            <FolderX />
            <Fonts />
            <Forward />
            <ForwardFill />
            <Front />
            <Fullscreen />
            <FullscreenExit />
            <Funnel />
            <FunnelFill />
            <Gear />
            <GearFill />
            <GearWide />
            <GearWideConnected />
            <Gem />
            <Geo />
            <GeoAlt />
            <GeoAltFill />
            <GeoFill />
            <Gift />
            <GiftFill />
            <Globe />
            <Globe2 />
            <GraphDown />
            <GraphUp />
            <Grid />
            <Grid1X2 />
            <Grid1X2Fill />
            <Grid3X2 />
            <Grid3X2Gap />
            <Grid3X2GapFill />
            <Grid3X3 />
            <Grid3X3Gap />
            <Grid3X3GapFill />
            <GridFill />
            <GripHorizontal />
            <GripVertical />
            <Hammer />
            <HandIndex />
            <HandIndexThumb />
            <HandThumbsDown />
            <HandThumbsUp />
            <Handbag />
            <HandbagFill />
            <Hash />
            <Hdd />
            <HddFill />
            <HddNetwork />
            <HddNetworkFill />
            <HddRack />
            <HddRackFill />
            <HddStack />
            <HddStackFill />
            <Headphones />
            <Headset />
            <Heart />
            <HeartFill />
            <HeartHalf />
            <Heptagon />
            <HeptagonFill />
            <HeptagonHalf />
            <Hexagon />
            <HexagonFill />
            <HexagonHalf />
            <Hourglass />
            <HourglassBottom />
            <HourglassSplit />
            <HourglassTop />
            <House />
            <HouseDoor />
            <HouseDoorFill />
            <HouseFill />
            <Hr />
            <Image />
            <ImageAlt />
            <ImageFill />
            <Images />
            <Inbox />
            <InboxFill />
            <Inboxes />
            <InboxesFill />
            <Info />
            <InfoCircle />
            <InfoCircleFill />
            <InfoSquare />
            <InfoSquareFill />
            <InputCursor />
            <InputCursorText />
            <Intersect />
            <Journal />
            <JournalAlbum />
            <JournalArrowDown />
            <JournalArrowUp />
            <JournalCheck />
            <JournalCode />
            <JournalMedical />
            <JournalMinus />
            <JournalPlus />
            <JournalRichtext />
            <JournalText />
            <JournalX />
            <Journals />
            <Joystick />
            <Justify />
            <JustifyLeft />
            <JustifyRight />
            <Kanban />
            <KanbanFill />
            <Key />
            <KeyFill />
            <Keyboard />
            <KeyboardFill />
            <Ladder />
            <Lamp />
            <LampFill />
            <Laptop />
            <LaptopFill />
            <Layers />
            <LayersFill />
            <LayersHalf />
            <LayoutSidebar />
            <LayoutSidebarInset />
            <LayoutSidebarInsetReverse />
            <LayoutSidebarReverse />
            <LayoutSplit />
            <LayoutTextSidebar />
            <LayoutTextSidebarReverse />
            <LayoutTextWindow />
            <LayoutTextWindowReverse />
            <LayoutThreeColumns />
            <LayoutWtf />
            <LifePreserver />
            <Lightning />
            <LightningFill />
            <Link />
            <Link45Deg />
            <List />
            <ListCheck />
            <ListNested />
            <ListOl />
            <ListStars />
            <ListTask />
            <ListUl />
            <Lock />
            <LockFill />
            <Mailbox />
            <Mailbox2 />
            <Map />
            <MapFill />
            <Markdown />
            <MarkdownFill />
            <MenuApp />
            <MenuAppFill />
            <MenuButton />
            <MenuButtonFill />
            <MenuButtonWide />
            <MenuButtonWideFill />
            <MenuDown />
            <MenuUp />
            <Mic />
            <MicFill />
            <MicMute />
            <MicMuteFill />
            <Minecart />
            <MinecartLoaded />
            <Moon />
            <Mouse />
            <Mouse2 />
            <Mouse3 />
            <MusicNote />
            <MusicNoteBeamed />
            <MusicNoteList />
            <MusicPlayer />
            <MusicPlayerFill />
            <Newspaper />
            <NodeMinus />
            <NodeMinusFill />
            <NodePlus />
            <NodePlusFill />
            <Nut />
            <NutFill />
            <Octagon />
            <OctagonFill />
            <OctagonHalf />
            <Option />
            <Outlet />
            <Paperclip />
            <Paragraph />
            <PatchCheck />
            <PatchCheckFll />
            <PatchExclamation />
            <PatchExclamationFll />
            <PatchMinus />
            <PatchMinusFll />
            <PatchPlus />
            <PatchPlusFll />
            <PatchQuestion />
            <PatchQuestionFll />
            <Pause />
            <PauseFill />
            <Peace />
            <PeaceFill />
            <Pen />
            <PenFill />
            <Pencil />
            <PencilFill />
            <PencilSquare />
            <Pentagon />
            <PentagonFill />
            <PentagonHalf />
            <People />
            <PeopleFill />
            <Percent />
            <Person />
            <PersonBadge />
            <PersonBadgeFill />
            <PersonBoundingBox />
            <PersonCheck />
            <PersonCheckFill />
            <PersonCircle />
            <PersonDash />
            <PersonDashFill />
            <PersonFill />
            <PersonLinesFill />
            <PersonPlus />
            <PersonPlusFill />
            <PersonSquare />
            <PersonX />
            <PersonXFill />
            <Phone />
            <PhoneFill />
            <PhoneLandscape />
            <PhoneLandscapeFill />
            <PhoneVibrate />
            <PieChart />
            <PieChartFill />
            <Pip />
            <PipFill />
            <Play />
            <PlayFill />
            <Plug />
            <PlugFill />
            <Plus />
            <PlusCircle />
            <PlusCircleFill />
            <PlusSquare />
            <PlusSquareFill />
            <Power />
            <Printer />
            <PrinterFill />
            <Puzzle />
            <PuzzleFill />
            <Question />
            <QuestionCircle />
            <QuestionCircleFill />
            <QuestionDiamond />
            <QuestionDiamondFill />
            <QuestionOctagon />
            <QuestionOctagonFill />
            <QuestionSquare />
            <QuestionSquareFill />
            <Receipt />
            <ReceiptCutoff />
            <Reception0 />
            <Reception1 />
            <Reception2 />
            <Reception3 />
            <Reception4 />
            <Reply />
            <ReplyAll />
            <ReplyAllFill />
            <ReplyFill />
            <Rss />
            <RssFill />
            <Scissors />
            <Screwdriver />
            <Search />
            <SegmentedNav />
            <Server />
            <Share />
            <ShareFill />
            <Shield />
            <ShieldCheck />
            <ShieldExclamation />
            <ShieldFill />
            <ShieldFillCheck />
            <ShieldFillExclamation />
            <ShieldFillMinus />
            <ShieldFillPlus />
            <ShieldFillX />
            <ShieldLock />
            <ShieldLockFill />
            <ShieldMinus />
            <ShieldPlus />
            <ShieldShaded />
            <ShieldSlash />
            <ShieldSlashFill />
            <ShieldX />
            <Shift />
            <ShiftFill />
            <Shop />
            <ShopWindow />
            <Shuffle />
            <Signpost />
            <Signpost2 />
            <Signpost2Fill />
            <SignpostFill />
            <SignpostSplit />
            <SignpostSplitFill />
            <Sim />
            <SimFill />
            <SkipBackward />
            <SkipBackwardFill />
            <SkipEnd />
            <SkipEndFill />
            <SkipForward />
            <SkipForwardFill />
            <SkipStart />
            <SkipStartFill />
            <Slash />
            <SlashCircle />
            <SlashCircleFill />
            <SlashSquare />
            <SlashSquareFill />
            <Sliders />
            <Smartwatch />
            <SortAlphaDown />
            <SortAlphaDownAlt />
            <SortAlphaUp />
            <SortAlphaUpAlt />
            <SortDown />
            <SortDownAlt />
            <SortNumericDown />
            <SortNumericDownAlt />
            <SortNumericUp />
            <SortNumericUpAlt />
            <SortUp />
            <SortUpAlt />
            <Soundwave />
            <Speaker />
            <SpeakerFill />
            <Spellcheck />
            <Square />
            <SquareFill />
            <SquareHalf />
            <Star />
            <StarFill />
            <StarHalf />
            <Stickies />
            <StickiesFill />
            <Sticky />
            <StickyFill />
            <Stop />
            <StopFill />
            <Stoplights />
            <StoplightsFill />
            <Stopwatch />
            <StopwatchFill />
            <Subtract />
            <SuitClub />
            <SuitClubFill />
            <SuitDiamond />
            <SuitDiamondFill />
            <SuitHeart />
            <SuitHeartFill />
            <SuitSpade />
            <SuitSpadeFill />
            <Sun />
            <Sunglasses />
            <Table />
            <Tablet />
            <TabletFill />
            <TabletLandscape />
            <TabletLandscapeFill />
            <Tag />
            <TagFill />
            <Tags />
            <TagsFill />
            <Telephone />
            <TelephoneFill />
            <TelephoneForward />
            <TelephoneForwardFill />
            <TelephoneInbound />
            <TelephoneInboundFill />
            <TelephoneMinus />
            <TelephoneMinusFill />
            <TelephoneOutbound />
            <TelephoneOutboundFill />
            <TelephonePlus />
            <TelephonePlusFill />
            <TelephoneX />
            <TelephoneXFill />
            <Terminal />
            <TerminalFill />
            <TextCenter />
            <TextIndentLeft />
            <TextIndentRight />
            <TextLeft />
            <TextParagraph />
            <TextRight />
            <Textarea />
            <TextareaResize />
            <TextareaT />
            <Thermometer />
            <ThermometerHalf />
            <ThreeDots />
            <ThreeDotsVertical />
            <Toggle2Off />
            <Toggle2On />
            <ToggleOff />
            <ToggleOn />
            <Toggles />
            <Toggles2 />
            <Tools />
            <Trash />
            <Trash2 />
            <Trash2Fill />
            <TrashFill />
            <Tree />
            <TreeFill />
            <Triangle />
            <TriangleFill />
            <TriangleHalf />
            <Trophy />
            <TrophyFill />
            <Truck />
            <TruckFlatbed />
            <Tv />
            <TvFill />
            <Type />
            <TypeBold />
            <TypeH1 />
            <TypeH2 />
            <TypeH3 />
            <TypeItalic />
            <TypeStrikethrough />
            <TypeUnderline />
            <UiChecks />
            <UiChecksGrid />
            <UiRadios />
            <UiRadiosGrid />
            <Union />
            <Unlock />
            <UnlockFill />
            <Upc />
            <UpcScan />
            <Upload />
            <VectorPen />
            <ViewList />
            <ViewStacked />
            <Voicemail />
            <VolumeDown />
            <VolumeDownFill />
            <VolumeMute />
            <VolumeMuteFill />
            <VolumeOff />
            <VolumeOffFill />
            <VolumeUp />
            <VolumeUpFill />
            <Vr />
            <Wallet />
            <Wallet2 />
            <WalletFill />
            <Watch />
            <Wifi />
            <Wifi1 />
            <Wifi2 />
            <WifiOff />
            <Window />
            <Wrench />
            <X />
            <XCircle />
            <XCircleFill />
            <XDiamond />
            <XDiamondFill />
            <XOctagon />
            <XOctagonFill />
            <XSquare />
            <XSquareFill />
            <ZoomIn />
            <ZoomOut />
        </>
    );
}
