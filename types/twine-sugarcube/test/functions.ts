interface TestType {
    a: number;
    b: string;
}

const testVar: TestType = {
    a: 1,
    b: "s"
};

const t: TestType = clone(testVar);
const e: number = either(1, 2, 3);

forget("any key"); // $ExpectType void

let b: boolean = hasVisited("a");
b = hasVisited("a", "b");

let n: number = lastVisited("a");
n = lastVisited("a", "b");

importScripts("scriptFile").then(() => {});
importScripts("scriptFile1", "scriptFile2").then(() => {});

importStyles("styleFile").then(() => {});
importStyles("styleFile1", "styleFile2").then(() => {});

memorize("key", 1); // $ExpectType void
memorize("key", true); // $ExpectType void
memorize("key", "sd"); // $ExpectType void
memorize("key", {}); // $ExpectType void

let s: string = passage();
s = previous();

n = random(1);
n = random(1, 2);

n = randomFloat(1);
n = randomFloat(1, 2);

recall("key");
recall("key", 1);

let elem: HTMLElement | null = setPageElement("#elem", "passage");
elem = setPageElement("#elem", ["passage1", "passage2"]);
elem = setPageElement("#elem", "passage", "defaultText");
elem = setPageElement(document.getElementById("#elem") as HTMLElement, "passage", "defaultText");

let strArray: string[] = tags("passage");
strArray = tags("passage1", "pasage2");

let tmpVar = temporary().varName;

n = time();
n = turns();

// @ts-expect-error
tmpVar = variables().varName;
// @ts-expect-error
tmpVar = variables()['varName'];

n = visited("passage");
n = visited("passage1", "passage2");

n = visitedTags("tag");
n = visitedTags("tag1", "tag2");

export {};
