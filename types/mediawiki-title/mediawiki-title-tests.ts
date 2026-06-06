import { Namespace, type SiteInfo, Title, TitleError } from "mediawiki-title";

const siteInfo: SiteInfo = {
    general: {
        lang: "en",
        legaltitlechars: " %!\"$&'()*,\\-.\\/0-9:;=?@A-Z\\\\^_`a-z~\\x80-\\xFF+",
    },
    namespaces: {
        0: {
            case: "first-letter",
            name: "",
            subpages: true,
        },
    },
    namespacealiases: [],
};

const namespace = new Namespace(0, siteInfo);
namespace.getId(); // $ExpectType number
namespace.equals(namespace); // $ExpectType boolean
namespace.isMedia(); // $ExpectType boolean
namespace.isSpecial(); // $ExpectType boolean
namespace.isMain(); // $ExpectType boolean
namespace.isTalk(); // $ExpectType boolean
namespace.isUser(); // $ExpectType boolean
namespace.isUserTalk(); // $ExpectType boolean
namespace.isProject(); // $ExpectType boolean
namespace.isProjectTalk(); // $ExpectType boolean
namespace.isFile(); // $ExpectType boolean
namespace.isFileTalk(); // $ExpectType boolean
namespace.isImage(); // $ExpectType boolean
namespace.isImageTalk(); // $ExpectType boolean
namespace.isMediawiki(); // $ExpectType boolean
namespace.isMediawikiTalk(); // $ExpectType boolean
namespace.isTemplate(); // $ExpectType boolean
namespace.isTemplateTalk(); // $ExpectType boolean
namespace.isHelp(); // $ExpectType boolean
namespace.isHelpTalk(); // $ExpectType boolean
namespace.isCategory(); // $ExpectType boolean
namespace.isCategoryTalk(); // $ExpectType boolean
namespace.isATalkNamespace(); // $ExpectType boolean
namespace.getNormalizedText(); // $ExpectType string
namespace.getCanonicalText(); // $ExpectType string
namespace.subpagesAllowed(); // $ExpectType boolean
Namespace.fromText("", siteInfo); // $ExpectType Namespace | undefined
Namespace.main(siteInfo); // $ExpectType Namespace

const title = new Title("", 0, siteInfo);
title.getKey(); // $ExpectType string
title.getPrefixedDBKey(); // $ExpectType string
title.getPrefixedText(); // $ExpectType string
title.getFragment(); // $ExpectType string | undefined
title.getNamespace(); // $ExpectType Namespace
title.equals(title); // $ExpectType boolean
Title.newFromText("some title", siteInfo); // $ExpectType Title

const titleError = new TitleError({ type: "title-invalid-empty", title: "" });
titleError.message; // $ExpectType string
titleError.title; // $ExpectType unknown
