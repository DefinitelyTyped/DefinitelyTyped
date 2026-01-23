// ------------------- Correct usage -------------------
const validLanguages: LanguageCode[] = [
    "ar",
    "de",
    "es",
    "hu",
    "jp",
    "ms",
    "no",
    "pt",
    "ru",
    "tr",
    "zh-tw",
    "cy",
    "en",
    "fr",
    "it",
    "ko",
    "nl",
    "pl",
    "ro",
    "sw",
    "zh-cn",
    "zh",
];

const validDirections: Directions[] = ["ltr", "rtl"];

// Test all valid languages
validLanguages.forEach(lang => Kotobee.setLanguage(lang));

// Test all valid directions
validDirections.forEach(dir => Kotobee.setDirection(dir));

// ------------------- Incorrect usage -------------------

// Invalid language
// @ts-expect-error
Kotobee.setLanguage("invalid");

// Invalid direction
// @ts-expect-error
Kotobee.setDirection("up");

// Calling clearCache with parameters should error
// @ts-expect-error
Kotobee.clearCache(123);

// Calling clearListeners with parameters should error
// @ts-expect-error
Kotobee.clearListeners("test");

// ------------------- Type assignments -------------------

// Assign valid types
validLanguages.forEach(lang => {
    const l: LanguageCode = lang; // $ExpectType LanguageCode
});

validDirections.forEach(dir => {
    const d: Directions = dir; // $ExpectType Directions
});

// Invalid assignments
// @ts-expect-error
const fakeLang: LanguageCode = "madeup";
// @ts-expect-error
const dirCenter: Directions = "center";

// ------------------- Book Interface Tests -------------------

const book: Book = {
    chapter: {
        notLastChapter: true,
        notFirstChapter: false,
        url: "chapter1.xhtml",
        absoluteURL: "https://example.com/chapter1.xhtml",
        title: "Introduction",
        viewport: null,
        layout: "reflowable",
        view: "single",
        paged: true,
    },
    meta: {
        dc: {
            title: "Sample Book",
            identifier: "abc-123",
            "pub-id": "pub-456",
            creator: "Jane Doe",
            publisher: "Book Publisher",
            rights: "© 2024 Jane Doe",
            language: "en",
            description: "A fascinating sample book.",
        },
        cover: "cover.jpg",
        dcterms: {
            modified: "2023-07-01T12:00:00Z",
        },
        rendition: {
            layout: "reflowable",
            orientation: "portrait",
        },
        ibooks: {
            interactive: "true",
            "specified-fonts": "false",
        },
        kotobee: {
            version: "2.1.4",
            build: "12384",
        },
        schema: {
            accessmode: "textual",
            accessmodesufficient: "textual",
            accessibilityfeature: "structuralNavigation",
            accessibilityhazard: "none",
            accessibilitysummary: "Accessible for screen readers.",
        },
    },
    version: 2,
    chapters:
        `<li class="item parent"><i class="icon parent"> </i> <a href="#/reader/chapter/0" data-url="xhtml/raw/ch1.xhtml">Page 1</a></li>
<li class="item"><i class="icon"> </i> <a href="#/reader/chapter/1" data-url="xhtml/raw/ch2.xhtml">Page 2</a></li>`,
};

// Book with missing required properties - should error
// @ts-expect-error
const incompleteBook: Book = {};

// Invalid type in Book.meta.dc.language - should error
const bookWithInvalidLang: Book = {
    ...book,
    meta: {
        ...book.meta,
        dc: {
            ...book.meta.dc,
            // @ts-expect-error
            language: "not-a-language",
        },
    },
};

// Invalid interactive field in ibooks - should error
const bookWithInvalidIbooks: Book = {
    ...book,
    meta: {
        ...book.meta,
        ibooks: {
            // @ts-expect-error
            interactive: "sometimes",
            "specified-fonts": "true",
        },
    },
};
