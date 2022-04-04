import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * The content minimap feature.
 */
export default class Minimap extends Plugin {
    static readonly pluginName: 'Minimap';
    init(): void;
    destroy(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Minimap: Minimap;
    }
}

/**
 * The configuration of the minimap feature. Introduced by the {@link module:minimap/minimap~Minimap} feature.
 *
 * Read more in {@link module:minimap/minimap~MinimapConfig}.
 */

/**
 * The configuration of the {@link module:minimap/minimap~Minimap} feature.
 *
 *    ClassicEditor
 *      .create( {
 *        minimap: ... // Minimap feature config.
 *      } )
 *      .then( ... )
 *      .catch( ... );
 *
 * @see {@link module:core/editor/editorconfig~EditorConfig all editor options}.
 */
export interface MinimapConfig {
    /**
     * The DOM element container for the minimap.
     *
     * **Note**: The container must have a fixed `width` and `overflow: hidden` for the minimap to work correctly.
     */
    container: HTMLElement;
    /**
     * When set to `true`, the minimap will render content as simple boxes instead of replicating the look of the content (default).
     */
    useSimplePreview?: boolean;
    /**
     * Extra CSS class (or classes) that will be set internally on the `<body>` element of the `<iframe>` enclosing the minimap.
     *
     * By default, the minimap feature will attempt to clone all website styles and re-apply them in the `<iframe>` for the best accuracy.
     * However, this may not work if the content of your editor inherits the styles from parent containers, resulting in inconsistent
     * look and imprecise scrolling of the minimap.
     *
     * This optional configuration can address these issues by ensuring the same CSS rules apply to the content of the minimap
     * and the original content of the editor.
     *
     * For instance, consider the following DOM structure:
     *
     *    <div class="website">
     *      <!-- ... -->
     *      <div class="styled-container">
     *         <!-- ... -->
     *        <div id="editor">
     *          <!-- content of the editor -->
     *        </div>
     *      </div>
     *      <!-- ... -->
     *    </div>
     *
     * and the following CSS styles:
     *
     *    .website p {
     *      font-size: 13px;
     *    }
     *
     *    .styled-container p {
     *      color: #ccc;
     *    }
     *
     * To maintain the consistency of styling (`font-size` and `color` of paragraphs), you will need to pass the CSS class names
     * of these containers:
     *
     *    ClassicEditor
     *      .create( document.getElementById( 'editor' ), {
     *        minimap: {
     *          extraClasses: 'website styled-container'
     *        }
     *      } )
     *      .then( ... )
     *      .catch( ... );
     */
    extraClasses?: string;
}
