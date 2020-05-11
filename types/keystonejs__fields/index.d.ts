// Type definitions for @keystonejs/fields 5.1
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/fields' {
    class AutoIncrement {}
    class CalendarDay {}
    class Checkbox {}
    class CloudinaryImage {}
    class Color {}
    class Content {}
    class DateTime {}
    class DateTimeUtc {}
    class Decimal {}
    class File {}
    class Float {}
    class Integer {}
    class Location {}
    class Markdown {}
    class MongoId {}
    class OEmbed {}
    class Password {}
    class Relationship {}
    class Select {}
    class Slug {}
    class Text {}
    class Unsplash {}
    class Url {}
    class Uuid {}
    class Wysiwyg {}

    type FieldType =
        | AutoIncrement
        | CalendarDay
        | Checkbox
        | CloudinaryImage
        | Color
        | Content
        | DateTime
        | DateTimeUtc
        | Decimal
        | File
        | Float
        | Integer
        | Location
        | Markdown
        | MongoId
        | OEmbed
        | Password
        | Relationship
        | Select
        | Slug
        | Text
        | Unsplash
        | Url
        | Uuid
        | Wysiwyg;
}
