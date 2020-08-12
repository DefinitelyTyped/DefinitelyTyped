"use strict";
import * as hidefile from 'hidefile';
import { isWindows, newFile, newFolder, removeFile, removeFolder, TEMP_HIDDEN, TEMP_VISIBLE } from './helpers';

const describe_unixOnly = !isWindows ? describe : describe.skip;
const describe_windowsOnly = isWindows ? describe : describe.skip;

describe("isDotPrefixed()", () => {
    it("should be true for prefixed dot", () => {
        expect(hidefile.isDotPrefixed("path/to/.file.ext")).toBe(true);
        expect(hidefile.isDotPrefixed("path/to/.file")).toBe(true);
        expect(hidefile.isDotPrefixed(".file.ext")).toBe(true);
        expect(hidefile.isDotPrefixed(".file")).toBe(true);

        expect(hidefile.isDotPrefixed(".path/to/.file.ext")).toBe(true);
        expect(hidefile.isDotPrefixed("path/.to/.file.ext")).toBe(true);
        expect(hidefile.isDotPrefixed("path/to/.file.file.ext")).toBe(true);
        expect(hidefile.isDotPrefixed("./.file")).toBe(true);
    });

    it("should be false for missing prefixed dot", () => {
        expect(hidefile.isDotPrefixed("path/to/file.ext")).toBe(false);
        expect(hidefile.isDotPrefixed("path/to/file")).toBe(false);
        expect(hidefile.isDotPrefixed("file.ext")).toBe(false);
        expect(hidefile.isDotPrefixed("file")).toBe(false);

        expect(hidefile.isDotPrefixed(".path/to/file.ext")).toBe(false);
        expect(hidefile.isDotPrefixed("path/.to/file.ext")).toBe(false);
        expect(hidefile.isDotPrefixed("path/to/file.file.ext")).toBe(false);
        expect(hidefile.isDotPrefixed("./file")).toBe(false);
    });
});

describe("isHidden()", () => {
    describe_unixOnly("on Unix", () => {
        it("should be true for prefix-only files", done => {
            // No need to create file on Unix as it's all string-based
            hidefile.isHidden(TEMP_HIDDEN, (error, result) => {
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should be true for prefix-only folders", done => {
            // No need to create file on Unix as it's all string-based
            hidefile.isHidden(TEMP_HIDDEN, (error, result) => {
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });
    });

    describe_windowsOnly("on Windows", () => {
        it("should be false for unprefixed-unattributed files", done => {
            newFile(TEMP_VISIBLE);

            hidefile.isHidden(TEMP_VISIBLE, (error, result) => {
                removeFile(TEMP_VISIBLE);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should be false for unprefixed-unattributed folders", done => {
            newFolder(TEMP_VISIBLE);

            hidefile.isHidden(TEMP_VISIBLE, (error, result) => {
                removeFolder(TEMP_VISIBLE);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should be false for prefix-only files", done => {
            newFile(TEMP_HIDDEN);

            hidefile.isHidden(TEMP_HIDDEN, (error, result) => {
                removeFile(TEMP_HIDDEN);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should be false for prefix-only folders", done => {
            newFolder(TEMP_HIDDEN);

            hidefile.isHidden(TEMP_HIDDEN, (error, result) => {
                removeFolder(TEMP_HIDDEN);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should be false for attribute-only files", done => {
            newFile(TEMP_VISIBLE, { hidden: true });

            hidefile.isHidden(TEMP_VISIBLE, (error, result) => {
                removeFile(TEMP_VISIBLE);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should be false for attribute-only folders", done => {
            newFolder(TEMP_VISIBLE, { hidden: true });

            hidefile.isHidden(TEMP_VISIBLE, (error, result) => {
                removeFolder(TEMP_VISIBLE);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should be true for prefixed-attributed files", done => {
            newFile(TEMP_HIDDEN, { hidden: true });

            hidefile.isHidden(TEMP_HIDDEN, (error, result) => {
                removeFile(TEMP_HIDDEN);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should be true for prefixed-attributed folders", done => {
            newFolder(TEMP_HIDDEN, { hidden: true });

            hidefile.isHidden(TEMP_HIDDEN, (error, result) => {
                removeFolder(TEMP_HIDDEN);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should error for non-existent unprefixed paths", done => {
            hidefile.isHidden("fake", (error, result) => {
                expect(error).toBeInstanceOf(Error);
                expect(result).toBeUndefined;
                done();
            });
        });

        it("should error for non-existent prefixed paths", done => {
            hidefile.isHidden(".fake", (error, result) => {
                expect(error).toBeInstanceOf(Error);
                expect(result).toBeUndefined;
                done();
            });
        });
    });
});



describe("isHiddenSync()", () => {
    describe_unixOnly("on Unix", () => {
        it("should be true for prefix-only files", () => {
            // No need to create file on Unix as it's all string-based
            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            expect(result).toBe(true);
        });

        it("should be true for prefix-only folders", () => {
            // No need to create file on Unix as it's all string-based
            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            expect(result).toBe(true);
        });
    });

    describe_windowsOnly("on Windows", () => {
        it("should be false for unprefixed-unattributed files", () => {
            newFile(TEMP_VISIBLE);

            const result = hidefile.isHiddenSync(TEMP_VISIBLE);

            removeFile(TEMP_VISIBLE);
            expect(result).toBe(false);
        });

        it("should be false for unprefixed-unattributed folders", () => {
            newFolder(TEMP_VISIBLE);

            const result = hidefile.isHiddenSync(TEMP_VISIBLE);

            removeFolder(TEMP_VISIBLE);
            expect(result).toBe(false);
        });

        it("should be false for prefix-only files", () => {
            newFile(TEMP_HIDDEN);

            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            removeFile(TEMP_HIDDEN);
            expect(result).toBe(false);
        });

        it("should be false for prefix-only folders", () => {
            newFolder(TEMP_HIDDEN);

            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            removeFolder(TEMP_HIDDEN);
            expect(result).toBe(false);
        });

        it("should be false for attribute-only files", () => {
            newFile(TEMP_VISIBLE, { hidden: true });

            const result = hidefile.isHiddenSync(TEMP_VISIBLE);

            removeFile(TEMP_VISIBLE);
            expect(result).toBe(false);
        });

        it("should be false for attribute-only folders", () => {
            newFolder(TEMP_VISIBLE, { hidden: true });

            const result = hidefile.isHiddenSync(TEMP_VISIBLE);

            removeFolder(TEMP_VISIBLE);
            expect(result).toBe(false);
        });

        it("should be true for prefixed-attributed files", () => {
            newFile(TEMP_HIDDEN, { hidden: true });

            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            removeFile(TEMP_HIDDEN);
            expect(result).toBe(true);
        });

        it("should be true for prefixed-attributed folders", () => {
            newFolder(TEMP_HIDDEN, { hidden: true });

            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            removeFolder(TEMP_HIDDEN);
            expect(result).toBe(true);
        });

        it("should error for non-existent unprefixed paths", () => {
            let error: any, result: boolean;

            try {
                result = hidefile.isHiddenSync("fake");
            }
            catch (e) {
                error = e;
            }

            expect(error).toBeInstanceOf(Error);
            expect(result).toBeUndefined;
        });

        it("should error for non-existent prefixed paths", () => {
            let error: any, result: any;

            try {
                result = hidefile.isHiddenSync(".fake");
            }
            catch (e) {
                error = e;
            }

            expect(error).toBeInstanceOf(Error);
            expect(result).toBeUndefined;
        });
    });
});



describe("shouldBeHidden()", () => {
    it("should be false for unprefixed-unattributed files", done => {
        newFile(TEMP_VISIBLE);

        hidefile.shouldBeHidden(TEMP_VISIBLE, (error, result) => {
            removeFile(TEMP_VISIBLE);
            expect(error).toBeNull;
            expect(result).toBe(false);
            done();
        });
    });

    it("should be false for unprefixed-unattributed folders", done => {
        newFolder(TEMP_VISIBLE);

        hidefile.shouldBeHidden(TEMP_VISIBLE, (error, result) => {
            removeFolder(TEMP_VISIBLE);
            expect(error).toBeNull;
            expect(result).toBe(false);
            done();
        });
    });

    it("should be true for prefix-only files", done => {
        newFile(TEMP_HIDDEN);

        hidefile.shouldBeHidden(TEMP_HIDDEN, (error, result) => {
            removeFile(TEMP_HIDDEN);
            expect(error).toBeNull;
            expect(result).toBe(true);
            done();
        });
    });

    it("should be true for prefix-only folders", done => {
        newFolder(TEMP_HIDDEN);

        hidefile.shouldBeHidden(TEMP_HIDDEN, (error, result) => {
            removeFolder(TEMP_HIDDEN);
            expect(error).toBeNull;
            expect(result).toBe(true);
            done();
        });
    });

    describe_windowsOnly("on Windows", () => {
        it("should be true for attribute-only files", done => {
            newFile(TEMP_VISIBLE, { hidden: true });

            hidefile.shouldBeHidden(TEMP_VISIBLE, (error, result) => {
                removeFile(TEMP_VISIBLE);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should be true for attribute-only folders", done => {
            newFolder(TEMP_VISIBLE, { hidden: true });

            hidefile.shouldBeHidden(TEMP_VISIBLE, (error, result) => {
                removeFolder(TEMP_VISIBLE);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should be true for prefixed-attributed files", done => {
            newFile(TEMP_HIDDEN, { hidden: true });

            hidefile.shouldBeHidden(TEMP_HIDDEN, (error, result) => {
                removeFile(TEMP_HIDDEN);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should be true for prefixed-attributed folders", done => {
            newFolder(TEMP_HIDDEN, { hidden: true });

            hidefile.shouldBeHidden(TEMP_HIDDEN, (error, result) => {
                removeFolder(TEMP_HIDDEN);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should error for non-existent unprefixed paths", done => {
            hidefile.shouldBeHidden("fake", (error, result) => {
                expect(error).toBeInstanceOf(Error);
                expect(result).toBeUndefined;
                done();
            });
        });

        it("should error for non-existent prefixed paths", done => {
            hidefile.shouldBeHidden(".fake", (error, result) => {
                expect(error).toBeInstanceOf(Error);
                expect(result).toBeUndefined;
                done();
            });
        });
    });
});



describe("shouldBeHiddenSync()", () => {
    it("should be false for unprefixed-unattributed files", () => {
        newFile(TEMP_VISIBLE);

        const result = hidefile.shouldBeHiddenSync(TEMP_VISIBLE);

        removeFile(TEMP_VISIBLE);
        expect(result).toBe(false);
    });

    it("should be false for unprefixed-unattributed folders", () => {
        newFolder(TEMP_VISIBLE);

        const result = hidefile.shouldBeHiddenSync(TEMP_VISIBLE);

        removeFolder(TEMP_VISIBLE);
        expect(result).toBe(false);
    });

    it("should be true for prefix-only files", () => {
        newFile(TEMP_HIDDEN);

        const result = hidefile.shouldBeHiddenSync(TEMP_HIDDEN);

        removeFile(TEMP_HIDDEN);
        expect(result).toBe(true);
    });

    it("should be true for prefix-only folders", () => {
        newFolder(TEMP_HIDDEN);

        const result = hidefile.shouldBeHiddenSync(TEMP_HIDDEN);

        removeFolder(TEMP_HIDDEN);
        expect(result).toBe(true);
    });

    describe_windowsOnly("on Windows", () => {
        it("should be true for attribute-only files", () => {
            newFile(TEMP_VISIBLE, { hidden: true });

            const result = hidefile.shouldBeHiddenSync(TEMP_VISIBLE);

            removeFile(TEMP_VISIBLE);
            expect(result).toBe(true);
        });

        it("should be true for attribute-only folders", () => {
            newFolder(TEMP_VISIBLE, { hidden: true });

            const result = hidefile.shouldBeHiddenSync(TEMP_VISIBLE);

            removeFolder(TEMP_VISIBLE);
            expect(result).toBe(true);
        });

        it("should be true for prefixed-attributed files", () => {
            newFile(TEMP_HIDDEN, { hidden: true });

            const result = hidefile.shouldBeHiddenSync(TEMP_HIDDEN);

            removeFile(TEMP_HIDDEN);
            expect(result).toBe(true);
        });

        it("should be true for prefixed-attributed folders", () => {
            newFolder(TEMP_HIDDEN, { hidden: true });

            const result = hidefile.shouldBeHiddenSync(TEMP_HIDDEN);

            removeFolder(TEMP_HIDDEN);
            expect(result).toBe(true);
        });

        it("should error for non-existent unprefixed paths", () => {
            let error: any, result: any;

            try {
                result = hidefile.shouldBeHiddenSync("fake");
            }
            catch (e) {
                error = e;
            }

            expect(error).toBeInstanceOf(Error);
            expect(result).toBeUndefined;
        });

        it("should error for non-existent prefixed paths", () => {
            let error, result;

            try {
                result = hidefile.shouldBeHiddenSync(".fake");
            }
            catch (e) {
                error = e;
            }

            expect(error).toBeInstanceOf(Error);
            expect(result).toBeUndefined;
        });
    });
});



describe("hide()", () => {
    it("should work on unprefixed-unattributed files", done => {
        newFile(TEMP_VISIBLE);

        hidefile.hide(TEMP_VISIBLE, (error, newpath) => {
            const result = hidefile.isHiddenSync(newpath);

            removeFile(newpath);
            expect(error).toBeNull;
            expect(result).toBe(true);
            done();
        });
    });

    it("should work on unprefixed-unattributed folders", done => {
        newFolder(TEMP_VISIBLE);

        hidefile.hide(TEMP_VISIBLE, (error, newpath) => {
            const result = hidefile.isHiddenSync(newpath);

            removeFolder(newpath);
            expect(error).toBeNull;
            expect(result).toBe(true);
            done();
        });
    });

    it("should work on prefix-only files", done => {
        newFile(TEMP_HIDDEN);

        hidefile.hide(TEMP_HIDDEN, (error, newpath) => {
            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            removeFile(TEMP_HIDDEN);
            expect(error).toBeNull;
            expect(result).toBe(true);
            done();
        });
    });

    it("should work on prefix-only folders", done => {
        newFolder(TEMP_HIDDEN);

        hidefile.hide(TEMP_HIDDEN, (error, newpath) => {
            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            removeFolder(TEMP_HIDDEN);
            expect(error).toBeNull;
            expect(result).toBe(true);
            done();
        });
    });

    it("should error for non-existent unprefixed paths", done => {
        hidefile.hide("fake", (error, newpath) => {
            expect(error).toBeInstanceOf(Error);
            expect(newpath).toBeUndefined;
            done();
        });
    });

    it("should error for non-existent prefixed paths", done => {
        hidefile.hide(".fake", (error, newpath) => {
            expect(error).toBeInstanceOf(Error);
            expect(newpath).toBeUndefined;
            done();
        });
    });

    describe_windowsOnly("on Windows", () => {
        it("should work on attribute-only files", done => {
            newFile(TEMP_VISIBLE, { hidden: true });

            hidefile.hide(TEMP_VISIBLE, (error, newpath) => {
                const result = hidefile.isHiddenSync(newpath);

                removeFile(newpath);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should work on attribute-only folders", done => {
            newFolder(TEMP_VISIBLE, { hidden: true });

            hidefile.hide(TEMP_VISIBLE, (error, newpath) => {
                const result = hidefile.isHiddenSync(newpath);

                removeFolder(newpath);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should work on prefixed-attributed files", done => {
            newFile(TEMP_HIDDEN, { hidden: true });

            hidefile.hide(TEMP_HIDDEN, (error, newpath) => {
                const result = hidefile.isHiddenSync(TEMP_HIDDEN);

                removeFile(TEMP_HIDDEN);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });

        it("should work on prefixed-attributed folders", done => {
            newFolder(TEMP_HIDDEN, { hidden: true });

            hidefile.hide(TEMP_HIDDEN, (error, newpath) => {
                const result = hidefile.isHiddenSync(TEMP_HIDDEN);

                removeFolder(TEMP_HIDDEN);
                expect(error).toBeNull;
                expect(result).toBe(true);
                done();
            });
        });
    });
});



describe("hideSync()", () => {
    it("should work on unprefixed-unattributed files", () => {
        newFile(TEMP_VISIBLE);

        const newpath = hidefile.hideSync(TEMP_VISIBLE);
        const result = hidefile.isHiddenSync(newpath);

        removeFile(newpath);
        expect(result).toBe(true);
    });

    it("should work on unprefixed-unattributed folders", () => {
        newFolder(TEMP_VISIBLE);

        const newpath = hidefile.hideSync(TEMP_VISIBLE);
        const result = hidefile.isHiddenSync(newpath);

        removeFolder(newpath);
        expect(result).toBe(true);
    });

    it("should work on prefix-only files", () => {
        newFile(TEMP_HIDDEN);

        const newpath = hidefile.hideSync(TEMP_HIDDEN);
        const result = hidefile.isHiddenSync(TEMP_HIDDEN);

        removeFile(TEMP_HIDDEN);
        expect(result).toBe(true);
    });

    it("should work on prefix-only folders", () => {
        newFolder(TEMP_HIDDEN);

        const newpath = hidefile.hideSync(TEMP_HIDDEN);
        const result = hidefile.isHiddenSync(TEMP_HIDDEN);

        removeFolder(TEMP_HIDDEN);
        expect(result).toBe(true);
    });

    it("should error for non-existent unprefixed paths", () => {
        let error, newpath;

        try {
            newpath = hidefile.hideSync("fake");
        }
        catch (e) {
            error = e;
        }

        expect(error).toBeInstanceOf(Error);
        expect(newpath).toBeUndefined;
    });

    it("should error for non-existent prefixed paths", () => {
        let error, newpath;

        try {
            newpath = hidefile.hideSync(".fake");
        }
        catch (e) {
            error = e;
        }

        expect(error).toBeInstanceOf(Error);
        expect(newpath).toBeUndefined;
    });

    describe_windowsOnly("on Windows", () => {
        it("should work on attribute-only files", () => {
            newFile(TEMP_VISIBLE, { hidden: true });

            const newpath = hidefile.hideSync(TEMP_VISIBLE);
            const result = hidefile.isHiddenSync(newpath);

            removeFile(newpath);
            expect(result).toBe(true);
        });

        it("should work on attribute-only folders", () => {
            newFolder(TEMP_VISIBLE, { hidden: true });

            const newpath = hidefile.hideSync(TEMP_VISIBLE);
            const result = hidefile.isHiddenSync(newpath);

            removeFolder(newpath);
            expect(result).toBe(true);
        });

        it("should work on prefixed-attributed files", () => {
            newFile(TEMP_HIDDEN, { hidden: true });

            const newpath = hidefile.hideSync(TEMP_HIDDEN);
            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            removeFile(TEMP_HIDDEN);
            expect(result).toBe(true);
        });

        it("should work on prefixed-attributed folders", () => {
            newFolder(TEMP_HIDDEN, { hidden: true });

            const newpath = hidefile.hideSync(TEMP_HIDDEN);
            const result = hidefile.isHiddenSync(TEMP_HIDDEN);

            removeFolder(TEMP_HIDDEN);
            expect(result).toBe(true);
        });
    });
});



describe("reveal()", () => {
    it("should work on unprefixed-unattributed files", done => {
        newFile(TEMP_VISIBLE);

        hidefile.reveal(TEMP_VISIBLE, (error, newpath) => {
            const result = hidefile.isHiddenSync(TEMP_VISIBLE);

            removeFile(TEMP_VISIBLE);
            expect(error).toBeNull;
            expect(result).toBe(false);
            done();
        });
    });

    it("should work on unprefixed-unattributed folders", done => {
        newFolder(TEMP_VISIBLE);

        hidefile.reveal(TEMP_VISIBLE, (error, newpath) => {
            const result = hidefile.isHiddenSync(TEMP_VISIBLE);

            removeFolder(TEMP_VISIBLE);
            expect(error).toBeNull;
            expect(result).toBe(false);
            done();
        });
    });

    it("should work on prefix-only files", done => {
        newFile(TEMP_HIDDEN);

        hidefile.reveal(TEMP_HIDDEN, (error, newpath) => {
            const result = hidefile.isHiddenSync(newpath);

            removeFile(newpath);
            expect(error).toBeNull;
            expect(result).toBe(false);
            done();
        });
    });

    it("should work on prefix-only folders", done => {
        newFolder(TEMP_HIDDEN);

        hidefile.reveal(TEMP_HIDDEN, (error, newpath) => {
            const result = hidefile.isHiddenSync(newpath);

            removeFolder(newpath);
            expect(error).toBeNull;
            expect(result).toBe(false);
            done();
        });
    });

    it("should error for non-existent unprefixed paths", done => {
        hidefile.reveal("fake", (error, newpath) => {
            expect(error).toBeInstanceOf(Error);
            expect(newpath).toBeUndefined;
            done();
        });
    });

    it("should error for non-existent prefixed paths", done => {
        hidefile.reveal(".fake", (error, newpath) => {
            expect(error).toBeInstanceOf(Error);
            expect(newpath).toBeUndefined;
            done();
        });
    });

    describe_windowsOnly("on Windows", () => {
        it("should work on attribute-only files", done => {
            newFile(TEMP_VISIBLE, { hidden: true });

            hidefile.reveal(TEMP_VISIBLE, (error, newpath) => {
                const result = hidefile.isHiddenSync(TEMP_VISIBLE);

                removeFile(TEMP_VISIBLE);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should work on attribute-only folders", done => {
            newFolder(TEMP_VISIBLE, { hidden: true });

            hidefile.reveal(TEMP_VISIBLE, (error, newpath) => {
                const result = hidefile.isHiddenSync(TEMP_VISIBLE);

                removeFolder(TEMP_VISIBLE);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should work on prefixed-attributed files", done => {
            newFile(TEMP_HIDDEN, { hidden: true });

            hidefile.reveal(TEMP_HIDDEN, (error, newpath) => {
                const result = hidefile.isHiddenSync(newpath);

                removeFile(newpath);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });

        it("should work on prefixed-attributed folders", done => {
            newFolder(TEMP_HIDDEN, { hidden: true });

            hidefile.reveal(TEMP_HIDDEN, (error, newpath) => {
                const result = hidefile.isHiddenSync(newpath);

                removeFolder(newpath);
                expect(error).toBeNull;
                expect(result).toBe(false);
                done();
            });
        });
    });
});



describe("revealSync()", () => {
    it("should work on unprefixed-unattributed files", () => {
        newFile(TEMP_VISIBLE);

        const newpath = hidefile.revealSync(TEMP_VISIBLE);
        const result = hidefile.isHiddenSync(TEMP_VISIBLE);

        removeFile(TEMP_VISIBLE);
        expect(result).toBe(false);
    });

    it("should work on unprefixed-unattributed folders", () => {
        newFolder(TEMP_VISIBLE);

        const newpath = hidefile.revealSync(TEMP_VISIBLE);
        const result = hidefile.isHiddenSync(TEMP_VISIBLE);

        removeFolder(TEMP_VISIBLE);
        expect(result).toBe(false);
    });

    it("should work on prefix-only files", () => {
        newFile(TEMP_HIDDEN);

        const newpath = hidefile.revealSync(TEMP_HIDDEN);
        const result = hidefile.isHiddenSync(newpath);

        removeFile(newpath);
        expect(result).toBe(false);
    });

    it("should work on prefix-only folders", () => {
        newFolder(TEMP_HIDDEN);

        const newpath = hidefile.revealSync(TEMP_HIDDEN);
        const result = hidefile.isHiddenSync(newpath);

        removeFolder(newpath);
        expect(result).toBe(false);
    });

    it("should error for non-existent unprefixed paths", () => {
        let error: any, newpath: any;

        try {
            newpath = hidefile.revealSync("fake");
        }
        catch (e) {
            error = e;
        }

        expect(error).toBeInstanceOf(Error);
        expect(newpath).toBeUndefined;
    });

    it("should error for non-existent prefixed paths", () => {
        let error, newpath;

        try {
            newpath = hidefile.revealSync(".fake");
        }
        catch (e) {
            error = e;
        }

        expect(error).toBeInstanceOf(Error);
        expect(newpath).toBeUndefined;
    });

    describe_windowsOnly("on Windows", () => {
        it("should work on attribute-only files", () => {
            newFile(TEMP_VISIBLE, { hidden: true });

            const newpath = hidefile.revealSync(TEMP_VISIBLE);
            const result = hidefile.isHiddenSync(TEMP_VISIBLE);

            removeFile(TEMP_VISIBLE);
            expect(result).toBe(false);
        });

        it("should work on attribute-only folders", () => {
            newFolder(TEMP_VISIBLE, { hidden: true });

            const newpath = hidefile.revealSync(TEMP_VISIBLE);
            const result = hidefile.isHiddenSync(TEMP_VISIBLE);

            removeFolder(TEMP_VISIBLE);
            expect(result).toBe(false);
        });

        it("should work on prefixed-attributed files", () => {
            newFile(TEMP_HIDDEN, { hidden: true });

            const newpath = hidefile.revealSync(TEMP_HIDDEN);
            const result = hidefile.isHiddenSync(newpath);

            removeFile(newpath);
            expect(result).toBe(false);
        });

        it("should work on prefixed-attributed folders", () => {
            newFolder(TEMP_HIDDEN, { hidden: true });

            const newpath = hidefile.revealSync(TEMP_HIDDEN);
            const result = hidefile.isHiddenSync(newpath);

            removeFolder(newpath);
            expect(result).toBe(false);
        });
    });
});
