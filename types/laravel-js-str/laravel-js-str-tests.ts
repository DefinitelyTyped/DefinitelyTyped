import { Str } from "laravel-js-str";

Str.after("This is my name", "is"); // $ExpectType string
Str.afterLast("This is my name", "is"); // $ExpectType string
Str.ascii("This is my name"); // $ExpectType string
Str.before("This is my name", "is"); // $ExpectType string
Str.beforeLast("This is my name", "is"); // $ExpectType string
Str.between("This is my name", "is", "my"); // $ExpectType string
Str.camel("this is my name"); // $ExpectType string
Str.contains("This is my name", "is"); // $ExpectType boolean
Str.containsAll("This is my name", ["is", "my"]); // $ExpectType boolean
Str.endsWith("This is my name", "name"); // $ExpectType boolean
Str.finish("This is my name", "."); // $ExpectType string
Str.explode(" ", "This is my name"); // $ExpectType string[]
Str.isUuid("550e8400-e29b-41d4-a716-446655440000"); // $ExpectType boolean
Str.kebab("This is my name"); // $ExpectType string
Str.length("This is my name"); // $ExpectType number
Str.limit("This is my name", 7); // $ExpectType string
Str.lower("This is my name"); // $ExpectType string
Str.match(/is/, "This is my name"); // $ExpectType RegExpMatchArray | null
Str.matchAll(/is/g, "This is my name"); // $ExpectType RegExpMatchArray[]
Str.padBoth("This is my name", 20); // $ExpectType string
Str.padLeft("This is my name", 20); // $ExpectType string
Str.padRight("This is my name", 20); // $ExpectType string
Str.plural("cat", 2); // $ExpectType string
Str.pluralStudly("cat", 2, true); // $ExpectType string
Str.random(16); // $ExpectType string
Str.replace("is", "was", "This is my name"); // $ExpectType string
Str.replaceArray("is", ["was"], "This is my name"); // $ExpectType string
Str.replaceFirst("is", "was", "This is my name"); // $ExpectType string
Str.replaceFirst(new RegExp("is"), "was", "This is my name"); // $ExpectType string
Str.replaceLast("is", "was", "This is my name"); // $ExpectType string
Str.replaceLast(new RegExp("is"), "was", "This is my name"); // $ExpectType string
Str.remove("is", "This is my name"); // $ExpectType string
Str.reverse("This is my name"); // $ExpectType string
Str.singular("cats"); // $ExpectType string
Str.slug("This is my name"); // $ExpectType string
Str.snake("This is my name"); // $ExpectType string
Str.squish("This   is   my   name"); // $ExpectType string
Str.start("This is my name", "Hello "); // $ExpectType string
Str.startsWith("This is my name", "This"); // $ExpectType boolean
Str.studly("this is my name"); // $ExpectType string
Str.substr("This is my name", 5, 2); // $ExpectType string
Str.substrCount("This is my name", "is"); // $ExpectType number
Str.ucfirst("this is my name"); // $ExpectType string
Str.uuid(); // $ExpectType string
Str.createUuidsUsing(); // $ExpectType void
Str.createUuidsUsing(() => "custom-uuid"); // $ExpectType void

Str.of("Str Of"); // $ExpectType Stringable
Str.of("Str Of").toString(); // $ExpectType string
Str.of("Str Of").after("Str"); // $ExpectType Stringable
Str.of("Str Of").afterLast("Of"); // $ExpectType Stringable
Str.of("Str Of").append("Test"); // $ExpectType Stringable
Str.of("Str Of").ascii("en"); // $ExpectType Stringable
Str.of("Str Of").before("Of"); // $ExpectType Stringable
Str.of("Str Of").beforeLast("Str"); // $ExpectType Stringable
Str.of("Str Of").between("Str", "Of"); // $ExpectType Stringable
Str.of("Str Of").camel(); // $ExpectType Stringable
Str.of("Str Of").contains("Of"); // $ExpectType boolean
Str.of("Str Of").containsAll(["Str", "Of"]); // $ExpectType boolean
Str.of("Str Of").endsWith("Of"); // $ExpectType boolean
Str.of("Str Of").finish("You See"); // $ExpectType Stringable
Str.of("Str Of").exactly("Str Of"); // $ExpectType boolean
Str.of("Str Of").explode(" "); // $ExpectType string[]
Str.of("Str Of").isUuid(); // $ExpectType boolean
Str.of("Str Of").kebab(); // $ExpectType Stringable
Str.of("Str Of").length(); // $ExpectType number
Str.of("Str Of").lower(); // $ExpectType Stringable
Str.of("Str Of").match(/Of/); // $ExpectType RegExpMatchArray | null
Str.of("Str Of").matchAll(/Of/g); // $ExpectType RegExpMatchArray[]
Str.of("Str Of").padBoth(2, "!!"); // $ExpectType Stringable
Str.of("Str Of").padLeft(2, "Cool"); // $ExpectType Stringable
Str.of("Str Of").padRight(2, "Cool"); // $ExpectType Stringable
Str.of("Str Of").plural(); // $ExpectType Stringable
Str.of("Str Of").replace("Of", "In"); // $ExpectType Stringable
Str.of("Str Of").replace(new RegExp("Of"), "In"); // $ExpectType Stringable
Str.of("Str Of").remove("Of"); // $ExpectType Stringable
Str.of("Str Of").remove(new RegExp("Of")); // $ExpectType Stringable
Str.of("Str Of").reverse(); // $ExpectType Stringable
Str.of("Str Of").singular(); // $ExpectType Stringable
Str.of("Str Of").slug(",", "en"); // $ExpectType Stringable
Str.of("Str Of").snake(); // $ExpectType Stringable
Str.of("Str Of").squish(); // $ExpectType Stringable
Str.of("Str Of").start("Hello "); // $ExpectType Stringable
Str.of("Str Of").startsWith("Str"); // $ExpectType boolean
Str.of("Str Of").studly(); // $ExpectType Stringable
Str.of("Str Of").substr(0, 3); // $ExpectType Stringable
Str.of("Str Of").substrCount("Of"); // $ExpectType number
Str.of("Str Of").substrCount("Of", 0); // $ExpectType number
Str.of("Str Of").substrCount("Of", 0, 3); // $ExpectType number
Str.of("Str Of").ucfirst(); // $ExpectType Stringable
