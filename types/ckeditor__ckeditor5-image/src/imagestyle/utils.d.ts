import { ImageStyleOptionDefinition } from '../imagestyle';

declare function isValidOption(
    option: ImageStyleOptionDefinition,
    plugins: { isInlinePluginLoaded: boolean; isBlockPluginLoaded: boolean },
): boolean;

declare const DEFAULT_OPTIONS: {
    // This style represents an image placed in the line of text.
    inline: {
        name: 'inline';
        title: 'In line';
        icon: string;
        modelElements: ['imageInline'];
        isDefault: true;
    };

    // This style represents an image aligned to the left and wrapped with text.
    alignLeft: {
        name: 'alignLeft';
        title: 'Left aligned image';
        icon: string;
        modelElements: ['imageBlock', 'imageInline'];
        className: 'image-style-align-left';
    };

    // This style represents an image aligned to the left.
    alignBlockLeft: {
        name: 'alignBlockLeft';
        title: 'Left aligned image';
        icon: string;
        modelElements: ['imageBlock'];
        className: 'image-style-block-align-left';
    };

    // This style represents a centered image.
    alignCenter: {
        name: 'alignCenter';
        title: 'Centered image';
        icon: string;
        modelElements: ['imageBlock'];
        className: 'image-style-align-center';
    };

    // This style represents an image aligned to the right and wrapped with text.
    alignRight: {
        name: 'alignRight';
        title: 'Right aligned image';
        icon: string;
        modelElements: ['imageBlock', 'imageInline'];
        className: 'image-style-align-right';
    };

    // This style represents an image aligned to the right.
    alignBlockRight: {
        name: 'alignBlockRight';
        title: 'Right aligned image';
        icon: string;
        modelElements: ['imageBlock'];
        className: 'image-style-block-align-right';
    };

    // This option is equal to the situation when no style is applied.
    block: {
        name: 'block';
        title: 'Centered image';
        icon: string;
        modelElements: ['imageBlock'];
        isDefault: true;
    };

    // This represents a side image.
    side: {
        name: 'side';
        title: 'Side image';
        icon: string;
        modelElements: ['imageBlock'];
        className: 'image-style-side';
    };
};

declare const DEFAULT_ICONS: {
    full: string;
    left: string;
    right: string;
    center: string;
    inlineLeft: string;
    inlineRight: string;
    inline: string;
};

declare const DEFAULT_DROPDOWN_DEFINITIONS: [
    {
        name: 'imageStyle:wrapText';
        title: 'Wrap text';
        defaultItem: 'imageStyle:alignLeft';
        items: ['imageStyle:alignLeft', 'imageStyle:alignRight'];
    },
    {
        name: 'imageStyle:breakText';
        title: 'Break text';
        defaultItem: 'imageStyle:block';
        items: ['imageStyle:alignBlockLeft', 'imageStyle:block', 'imageStyle:alignBlockRight'];
    },
];

declare const _default: {
    isValidOption: typeof isValidOption;
    DEFAULT_OPTIONS: typeof DEFAULT_OPTIONS;
    DEFAULT_ICONS: typeof DEFAULT_ICONS;
    DEFAULT_DROPDOWN_DEFINITIONS: typeof DEFAULT_DROPDOWN_DEFINITIONS;
};

export default _default;
