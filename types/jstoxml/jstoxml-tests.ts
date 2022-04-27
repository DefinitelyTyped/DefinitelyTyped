import { toXML } from "jstoxml";

// examples copied from https://github.com/davidcalhoun/jstoxml

// Example 1: Simple object
// $ExpectType string
toXML({
    foo: "bar",
    foo2: "bar2",
});

// Example 2: Simple array (needed for duplicate keys)
toXML([
    {
        foo: "bar",
    },
    {
        foo: "bar2",
    },
]);

// Example 3: Simple functions
toXML({ currentTime: () => new Date() });

// Example 4: XML tag attributes
toXML({
    _name: "foo",
    _content: "bar",
    _attrs: {
        a: "b",
        c: "d",
    },
});

// Example 5: Tags mixed with text content
toXML({
    text1: null,
    foo: "bar",
    text2: null,
});

// Example 6: Nested tags (with indenting)
toXML(
    {
        a: {
            foo: "bar",
            foo2: "bar2",
        },
    },
    {
        header: false,
        indent: "  ",
    },
);

// Example 7: Nested tags with attributes (with indenting)
toXML(
    {
        ooo: {
            _name: "foo",
            _attrs: {
                a: "b",
            },
            _content: {
                _name: "bar",
                _attrs: {
                    c: "d",
                },
            },
        },
    },
    {
        header: false,
        indent: "  ",
    },
);

// Example 8: Complex functions
toXML({
    someNestedXML: () => {
        return {
            foo: "bar",
        };
    },
});

// Example 9: RSS Feed
toXML(
    {
        _name: "rss",
        _attrs: {
            version: "2.0",
        },
        _content: {
            channel: [
                {
                    title: "RSS Example",
                },
                {
                    description: "Description",
                },
                {
                    link: "google.com",
                },
                {
                    lastBuildDate: () => new Date(),
                },
                {
                    pubDate: () => new Date(),
                },
                {
                    language: "en",
                },
                {
                    item: {
                        title: "Item title",
                        link: "Item link",
                        description: "Item Description",
                        pubDate: () => new Date(),
                    },
                },
                {
                    item: {
                        title: "Item2 title",
                        link: "Item2 link",
                        description: "Item2 Description",
                        pubDate: () => new Date(),
                    },
                },
            ],
        },
    },
    {
        header: true,
        indent: "  ",
    },
);

// Example 10: Podcast RSS Feed
toXML(
    {
        _name: "rss",
        _attrs: {
            "xmlns:itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
            version: "2.0",
        },
        _content: {
            channel: [
                {
                    title: "Title",
                },
                {
                    link: "google.com",
                },
                {
                    language: "en-us",
                },
                {
                    copyright: "Copyright 2011",
                },
                {
                    "itunes:subtitle": "Subtitle",
                },
                {
                    "itunes:author": "Author",
                },
                {
                    "itunes:summary": "Summary",
                },
                {
                    description: "Description",
                },
                {
                    "itunes:owner": {
                        "itunes:name": "Name",
                        "itunes:email": "Email",
                    },
                },
                {
                    _name: "itunes:image",
                    _attrs: {
                        href: "image.jpg",
                    },
                },
                {
                    _name: "itunes:category",
                    _attrs: {
                        text: "Technology",
                    },
                    _content: {
                        _name: "itunes:category",
                        _attrs: {
                            text: "Gadgets",
                        },
                    },
                },
                {
                    _name: "itunes:category",
                    _attrs: {
                        text: "TV &amp; Film",
                    },
                },
                {
                    item: [
                        {
                            title: "Podcast Title",
                        },
                        {
                            "itunes:author": "Author",
                        },
                        {
                            "itunes:subtitle": "Subtitle",
                        },
                        {
                            "itunes:summary": "Summary",
                        },
                        {
                            "itunes:image": "image.jpg",
                        },
                        {
                            _name: "enclosure",
                            _attrs: {
                                url: "http://example.com/podcast.m4a",
                                length: "8727310",
                                type: "audio/x-m4a",
                            },
                        },
                        {
                            guid: "http://example.com/archive/aae20050615.m4a",
                        },
                        {
                            pubDate: "Wed, 15 Jun 2011 19:00:00 GMT",
                        },
                        {
                            "itunes:duration": "7:04",
                        },
                        {
                            "itunes:keywords": "salt, pepper, shaker, exciting",
                        },
                    ],
                },
                {
                    item: [
                        {
                            title: "Podcast2 Title",
                        },
                        {
                            "itunes:author": "Author2",
                        },
                        {
                            "itunes:subtitle": "Subtitle2",
                        },
                        {
                            "itunes:summary": "Summary2",
                        },
                        {
                            "itunes:image": "image2.jpg",
                        },
                        {
                            _name: "enclosure",
                            _attrs: {
                                url: "http://example.com/podcast2.m4a",
                                length: "655555",
                                type: "audio/x-m4a",
                            },
                        },
                        {
                            guid: "http://example.com/archive/aae2.m4a",
                        },
                        {
                            pubDate: "Wed, 15 Jul 2011 19:00:00 GMT",
                        },
                        {
                            "itunes:duration": "11:20",
                        },
                        {
                            "itunes:keywords": "foo, bar",
                        },
                    ],
                },
            ],
        },
    },
    {
        header: true,
        indent: "  ",
    },
);

// Example 11: Custom filter for XML entities, or whatever
toXML(
    {
        foo: "<a>",
        bar: '"b"',
        baz: "'&whee'",
    },
    {
        filter: {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;",
            "&": "&amp;",
        },
    },
);

// Example 11b: Custom filter for XML attributes
toXML(
    {
        _name: "foo",
        _attrs: { a: '<"\'&"foo>' },
    },
    {
        attributesFilter: {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;",
            "&": "&amp;",
        },
    },
);

// Example 12: Avoiding self-closing tags
toXML(
    {
        foo: "",
        bar: undefined,
    },
    {
        _selfCloseTag: false,
    },
);

// Example 13: Custom XML header
toXML(
    {
        foo: "bar",
    },
    {
        header: '<?xml version="1.0" encoding="UTF-16" standalone="yes"?>',
    },
);

// Example 14: Emoji attribute support (needed for AMP)
toXML({
    html: {
        _attrs: {
            "⚡": true,
        },
    },
});

// Example 15: Duplicate attribute key support
toXML({
    html: {
        _attrs: [
            {
                lang: "en",
            },
            {
                lang: "klingon",
            },
        ],
    },
});
