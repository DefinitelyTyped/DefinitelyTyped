import PluginCollection from '@ckeditor/ckeditor5-core/src/plugincollection';
import { ImageStyleConfig, ImageStyleOptionDefinition } from '../imagestyle';
import { ImageStyleDropdownDefinition } from './imagestyleui';

/**
 * Returns a list of the normalized and validated image style options.
 */
declare function normalizeStyles(config: {
    isInlinePluginLoaded: boolean;
    isBlockPluginLoaded: boolean;
    configuredStyles: ImageStyleConfig;
}): ImageStyleConfig;

declare const DEFAULT_OPTIONS: {
    // This style represents an image placed in the line of text.
    readonly inline: {
        name: 'inline';
        title: 'In line';
        icon: string;
        modelElements: ['imageInline'];
        isDefault: true;
    };

    // This style represents an image aligned to the left and wrapped with text.
    readonly alignLeft: {
        name: 'alignLeft';
        title: 'Left aligned image';
        icon: string;
        modelElements: ['imageBlock', 'imageInline'];
        className: 'image-style-align-left';
    };

    // This style represents an image aligned to the left.
    readonly alignBlockLeft: {
        name: 'alignBlockLeft';
        title: 'Left aligned image';
        icon: string;
        modelElements: ['imageBlock'];
        className: 'image-style-block-align-left';
    };

    // This style represents a centered image.
    readonly alignCenter: {
        name: 'alignCenter';
        title: 'Centered image';
        icon: string;
        modelElements: ['imageBlock'];
        className: 'image-style-align-center';
    };

    // This style represents an image aligned to the right and wrapped with text.
    readonly alignRight: {
        name: 'alignRight';
        title: 'Right aligned image';
        icon: string;
        modelElements: ['imageBlock', 'imageInline'];
        className: 'image-style-align-right';
    };

    // This style represents an image aligned to the right.
    readonly alignBlockRight: {
        name: 'alignBlockRight';
        title: 'Right aligned image';
        icon: string;
        modelElements: ['imageBlock'];
        className: 'image-style-block-align-right';
    };

    // This option is equal to the situation when no style is applied.
    readonly block: {
        name: 'block';
        title: 'Centered image';
        icon: string;
        modelElements: ['imageBlock'];
        isDefault: true;
    };

    // This represents a side image.
    readonly side: {
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

/*
 * Returns the default image styles configuration depending on the loaded image editing plugins.
 */
declare function getDefaultStylesConfiguration(
    isBlockPluginLoaded: boolean,
    isInlinePluginLoaded: boolean,
):
    | {
          options: [
              'inline',
              'alignLeft',
              'alignRight',
              'alignCenter',
              'alignBlockLeft',
              'alignBlockRight',
              'block',
              'side',
          ];
      }
    | {
          options: ['block', 'side'];
      }
    | {
          options: ['inline', 'alignLeft', 'alignRight'];
      }
    | {};

// Displays a console warning with the 'image-style-configuration-definition-invalid' error.
declare function warnInvalidStyle(info: ImageStyleOptionDefinition | ImageStyleDropdownDefinition): void;

/**
 * Returns a list of the available predefined drop-downs' definitions depending on the loaded image editing plugins.
 */
declare function getDefaultDropdownDefinitions(
    pluginCollection: PluginCollection,
): typeof DEFAULT_DROPDOWN_DEFINITIONS | [];

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
    normalizeStyles: typeof normalizeStyles;
    getDefaultStylesConfiguration: typeof getDefaultStylesConfiguration;
    getDefaultDropdownDefinitions: typeof getDefaultDropdownDefinitions;
    warnInvalidStyle: typeof warnInvalidStyle;
    DEFAULT_OPTIONS: typeof DEFAULT_OPTIONS;
    DEFAULT_ICONS: typeof DEFAULT_ICONS;
    DEFAULT_DROPDOWN_DEFINITIONS: typeof DEFAULT_DROPDOWN_DEFINITIONS;
};

export default _default;
