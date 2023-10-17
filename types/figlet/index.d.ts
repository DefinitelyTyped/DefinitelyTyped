declare namespace figlet {
    type Fonts =
        | "1Row"
        | "3-D"
        | "3D Diagonal"
        | "3D-ASCII"
        | "3x5"
        | "4Max"
        | "5 Line Oblique"
        | "AMC 3 Line"
        | "AMC 3 Liv1"
        | "AMC AAA01"
        | "AMC Neko"
        | "AMC Razor"
        | "AMC Razor2"
        | "AMC Slash"
        | "AMC Slider"
        | "AMC Thin"
        | "AMC Tubes"
        | "AMC Untitled"
        | "ANSI Regular"
        | "ANSI Shadow"
        | "ASCII New Roman"
        | "Acrobatic"
        | "Alligator"
        | "Alligator2"
        | "Alpha"
        | "Alphabet"
        | "Arrows"
        | "Avatar"
        | "B1FF"
        | "B1FF"
        | "Banner"
        | "Banner3-D"
        | "Banner3"
        | "Banner4"
        | "Barbwire"
        | "Basic"
        | "Bear"
        | "Bell"
        | "Benjamin"
        | "Big Chief"
        | "Big Money-ne"
        | "Big Money-nw"
        | "Big Money-se"
        | "Big Money-sw"
        | "Big"
        | "Bigfig"
        | "Binary"
        | "Block"
        | "Blocks"
        | "Bloody"
        | "Bolger"
        | "Braced"
        | "Bright"
        | "Broadway KB"
        | "Broadway"
        | "Bubble"
        | "Bulbhead"
        | "Caligraphy"
        | "Caligraphy2"
        | "Calvin S"
        | "Cards"
        | "Catwalk"
        | "Chiseled"
        | "Chunky"
        | "Coinstak"
        | "Cola"
        | "Colossal"
        | "Computer"
        | "Contessa"
        | "Contrast"
        | "Cosmike"
        | "Crawford"
        | "Crawford2"
        | "Crazy"
        | "Cricket"
        | "Cursive"
        | "Cyberlarge"
        | "Cybermedium"
        | "Cybersmall"
        | "Cygnet"
        | "DANC4"
        | "DOS Rebel"
        | "DWhistled"
        | "Dancing Font"
        | "Decimal"
        | "Def Leppard"
        | "Delta Corps Priest 1"
        | "Diamond"
        | "Diet Cola"
        | "Digital"
        | "Doh"
        | "Doom"
        | "Dot Matrix"
        | "Double Shorts"
        | "Double"
        | "Dr Pepper"
        | "Efti Chess"
        | "Efti Font"
        | "Efti Italic"
        | "Efti Piti"
        | "Efti Robot"
        | "Efti Wall"
        | "Efti Water"
        | "Electronic"
        | "Elite"
        | "Epic"
        | "Fender"
        | "Filter"
        | "Fire Font-k"
        | "Fire Font-s"
        | "Flipped"
        | "Flower Power"
        | "Four Tops"
        | "Fraktur"
        | "Fun Face"
        | "Fun Faces"
        | "Fuzzy"
        | "Georgi16"
        | "Georgia11"
        | "Ghost"
        | "Ghoulish"
        | "Glenyn"
        | "Goofy"
        | "Gothic"
        | "Graceful"
        | "Gradient"
        | "Graffiti"
        | "Greek"
        | "Heart Left"
        | "Heart Right"
        | "Henry 3D"
        | "Hex"
        | "Hieroglyphs"
        | "Hollywood"
        | "Horizontal Left"
        | "Horizontal Right"
        | "ICL-1900"
        | "Impossible"
        | "Invita"
        | "Isometric1"
        | "Isometric2"
        | "Isometric3"
        | "Isometric4"
        | "Italic"
        | "Ivrit"
        | "JS Block Letters"
        | "JS Bracket Letters"
        | "JS Capital Curves"
        | "JS Cursive"
        | "JS Stick Letters"
        | "Jacky"
        | "Jazmine"
        | "Jerusalem"
        | "Katakana"
        | "Kban"
        | "Keyboard"
        | "Knob"
        | "Konto Slant"
        | "Konto"
        | "LCD"
        | "Larry 3D 2"
        | "Larry 3D"
        | "Lean"
        | "Letters"
        | "Lil Devil"
        | "Line Blocks"
        | "Linux"
        | "Lockergnome"
        | "Madrid"
        | "Marquee"
        | "Maxfour"
        | "Merlin1"
        | "Merlin2"
        | "Mike"
        | "Mini"
        | "Mirror"
        | "Mnemonic"
        | "Modular"
        | "Morse"
        | "Morse2"
        | "Moscow"
        | "Mshebrew210"
        | "Muzzle"
        | "NScript"
        | "NT Greek"
        | "NV Script"
        | "Nancyj-Fancy"
        | "Nancyj-Improved"
        | "Nancyj-Underlined"
        | "Nancyj"
        | "Nipples"
        | "O8"
        | "OS2"
        | "Octal"
        | "Ogre"
        | "Old Banner"
        | "Pagga"
        | "Patorjk's Cheese"
        | "Patorjk-HeX"
        | "Pawp"
        | "Peaks Slant"
        | "Peaks"
        | "Pebbles"
        | "Pepper"
        | "Poison"
        | "Puffy"
        | "Puzzle"
        | "Pyramid"
        | "Rammstein"
        | "Rectangles"
        | "Red Phoenix"
        | "Relief"
        | "Relief2"
        | "Reverse"
        | "Roman"
        | "Rot13"
        | "Rot13"
        | "Rotated"
        | "Rounded"
        | "Rowan Cap"
        | "Rozzo"
        | "Runic"
        | "Runyc"
        | "S Blood"
        | "SL Script"
        | "Santa Clara"
        | "Script"
        | "Serifcap"
        | "Shadow"
        | "Shimrod"
        | "Short"
        | "Slant Relief"
        | "Slant"
        | "Slide"
        | "Small Caps"
        | "Small Isometric1"
        | "Small Keyboard"
        | "Small Poison"
        | "Small Script"
        | "Small Shadow"
        | "Small Slant"
        | "Small Tengwar"
        | "Small"
        | "Soft"
        | "Speed"
        | "Spliff"
        | "Stacey"
        | "Stampate"
        | "Stampatello"
        | "Standard"
        | "Star Strips"
        | "Star Wars"
        | "Stellar"
        | "Stforek"
        | "Stick Letters"
        | "Stop"
        | "Straight"
        | "Stronger Than All"
        | "Sub-Zero"
        | "Swamp Land"
        | "Swan"
        | "Sweet"
        | "THIS"
        | "Tanja"
        | "Tengwar"
        | "Term"
        | "Test1"
        | "The Edge"
        | "Thick"
        | "Thin"
        | "Thorned"
        | "Three Point"
        | "Ticks Slant"
        | "Ticks"
        | "Tiles"
        | "Tinker-Toy"
        | "Tombstone"
        | "Train"
        | "Trek"
        | "Tsalagi"
        | "Tubular"
        | "Twisted"
        | "Two Point"
        | "USA Flag"
        | "Univers"
        | "Varsity"
        | "Wavy"
        | "Weird"
        | "Wet Letter"
        | "Whimsy"
        | "Wow";

    type KerningMethods = "default" | "full" | "fitted" | "controlled smushing" | "universal smushing";
    type PrintDirection = number;

    interface FittingRules {
        vLayout: number;
        vRule5: boolean;
        vRule4: boolean;
        vRule3: boolean;
        vRule2: boolean;
        vRule1: boolean;
        hLayout: number;
        hRule6: boolean;
        hRule5: boolean;
        hRule4: boolean;
        hRule3: boolean;
        hRule2: boolean;
        hRule1: boolean;
    }

    interface Options {
        font?: Fonts | undefined;
        horizontalLayout?: KerningMethods | undefined;
        verticalLayout?: KerningMethods | undefined;
        printDirection?: PrintDirection | undefined;
        showHardBlanks?: boolean | undefined;
        /**
         * This option allows you to limit the width of the output.
         * For example, if you want your output to be a max of 80 characters wide, you would set this option to 80.
         * @default undefined
         */
        width?: number | undefined;
        /**
         * This option works in conjunction with "width".
         * If this option is set to true, then the library will attempt to break text up on whitespace when limiting the width.
         * @default false
         */
        whitespaceBreak?: boolean | undefined;
    }
    interface FontOptions {
        hardBlank: string;
        height: number;
        baseline: number;
        maxLength: number;
        oldLayout: number;
        numCommentLines: number;
        printDirection: PrintDirection;
        fullLayout: number | null;
        codeTagCount: number | null;
        fittingRules: FittingRules;
    }
    interface Defaults {
        font: Fonts;
        fontPath: string;
    }

    function text(txt: string, cb: (error: Error | null, result?: string) => void): void;
    function text(txt: string, font: Fonts, cb: (error: Error | null, result?: string) => void): void;
    /**
     * @description
     * This `unified-signatures` is disabled because `Fonts` type is too long
     */
    // tslint:disable-next-line: unified-signatures
    function text(txt: string, options: Options | undefined, cb: (error: Error | null, result?: string) => void): void;

    function textSync(txt: string, font?: Fonts): string;
    /**
     * @description
     * This `unified-signatures` is disabled because `Fonts` type is too long
     */
    function textSync(txt: string, options: Options): string;

    function metadata(
        font: Fonts,
        cb: (error: Error | null, fontOptions?: FontOptions, headerComment?: string) => void,
    ): void;

    function defaults(opt?: Partial<Defaults>): Defaults;

    function loadFont(font: Fonts, cb: (error: Error | null, fontOptions?: FontOptions) => void): void;
    /**
     * @todo
     * Use 'node' namespace to add following methods only in node environment.
     */
    /**
     * @warn
     * This method works in node environment only.
     * In browser environment, this method does not work.
     */
    function loadFontSync(font: Fonts): FontOptions;
    /**
     * @warn
     * This method exists in node environment only.
     * In browser environment, this method does not exist.
     */
    function fonts(cb: (error: Error | null, fontList?: Fonts[]) => void): void;
    /**
     * @warn
     * This method exists in node environment only.
     * In browser environment, this method does not exist.
     */
    function fontsSync(): Fonts[];

    /**
     * @description
     * Load a custom font from a file.
     *
     * @param fontName
     * The name you want to give the new font.
     * @param fontFile
     * The data from the font file.
     */
    function parseFont(fontName: string, fontFile: string): void;
}

declare function figlet(txt: string, cb: (error: Error | null, result?: string) => void): void;
declare function figlet(txt: string, font: figlet.Fonts, cb: (error: Error | null, result?: string) => void): void;

declare function figlet(
    txt: string,
    // This `unified-signatures` is disabled because `Fonts` type is too long
    // tslint:disable-next-line: unified-signatures
    options: figlet.Options | undefined,
    cb: (error: Error | null, result?: string) => void,
): void;

export as namespace figlet;
export = figlet;
