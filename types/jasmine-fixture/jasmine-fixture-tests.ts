/// <reference types="jquery" />
/// <reference types="jasmine-jquery" />

describe("Jasmine fixture extension", () => {
    describe("Affixes dom elements to body", () => {
        it("Inserts a new element on affix", () => {
            expect('#test1').not.toExist();
            affix('#test1');
            expect('#test1').toExist();
        });

        it("Inserts subelements when given", () => {
            affix('#test2 .something-special');
            expect('.something-special').toExist();
            const parent = $('#test2 .something-special').parent();
            const id = parent.attr('id');
            expect(id).toBe('test2');
        });

        it("Can add elements with multiple classes", () => {
            affix('#test3 div.this.that');
            expect('#test3 div').toHaveClass('this');
            expect('#test3 div').toHaveClass('that');
        });

        it("Creates new elements as divs by default", () => {
            affix('#test4 .subelement');
            expect('#test4 .subelement').toBeMatchedBy('div');
        });

        it("Can add different types of elements", () => {
            affix('#test5 p.part1');
            expect('#test5 .part1').toBeMatchedBy('p');
            affix('#test5 span.part2');
            expect('#test5 .part2').toBeMatchedBy('span');
        });
    });

    describe("Cleans up after each test", () => {
        it("Formerly affixed parts are removed when out of scope", () => {
            expect('#test1').not.toExist();
            expect('#test2').not.toExist();
            expect('#test3').not.toExist();
        });
    });
});
