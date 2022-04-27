import { Command } from '@ckeditor/ckeditor5-core';
import { Collection } from '@ckeditor/ckeditor5-utils';
import AutomaticDecorators from './utils/automaticdecorators';
import ManualDecorator from './utils/manualdecorator';

/**
 * The link command. It is used by the {@link module:link/link~Link link feature}.
 */
export default class LinkCommand extends Command {
    /**
     * An instance of the helper that ties together all {@link module:link/link~LinkDecoratorAutomaticDefinition}
     * that are used by the {@glink features/link link} and the {@glink features/images/images-linking linking images} features.
     */
    readonly automaticDecorators: AutomaticDecorators;

    /**
     * A collection of {@link module:link/utils~ManualDecorator manual decorators}
     * corresponding to the {@link module:link/link~LinkConfig#decorators decorator configuration}.
     *
     * You can consider it a model with states of manual decorators added to the currently selected link.
     */
    readonly manualDecorators: Collection<ManualDecorator>;

    get value(): string | undefined;
    protected set value(href: string | undefined);

  /**
   * Synchronizes the state of {@link #manualDecorators} with the currently present elements in the model.
   */
    restoreManualDecoratorStates(): void;
    refresh(): void;

  /**
   * Executes the command.
   *
   * When the selection is non-collapsed, the `linkHref` attribute will be applied to nodes inside the selection, but only to
   * those nodes where the `linkHref` attribute is allowed (disallowed nodes will be omitted).
   *
   * When the selection is collapsed and is not inside the text with the `linkHref` attribute, a
   * new {@link module:engine/model/text~Text text node} with the `linkHref` attribute will be inserted in place of the caret, but
   * only if such element is allowed in this place. The `_data` of the inserted text will equal the `href` parameter.
   * The selection will be updated to wrap the just inserted text node.
   *
   * When the selection is collapsed and inside the text with the `linkHref` attribute, the attribute value will be updated.
   *
   * # Decorators and model attribute management
   *
   * There is an optional argument to this command that applies or removes model
   * {@glink framework/guides/architecture/editing-engine#text-attributes text attributes} brought by
   * {@link module:link/utils~ManualDecorator manual link decorators}.
   *
   * Text attribute names in the model correspond to the entries in the {@link module:link/link~LinkConfig#decorators configuration}.
   * For every decorator configured, a model text attribute exists with the "link" prefix. For example, a `'linkMyDecorator'` attribute
   * corresponds to `'myDecorator'` in the configuration.
   *
   * To learn more about link decorators, check out the {@link module:link/link~LinkConfig#decorators `config.link.decorators`}
   * documentation.
   *
   * Here is how to manage decorator attributes with the link command:
   *
   *    const linkCommand = editor.commands.get( 'link' );
   *
   *    // Adding a new decorator attribute.
   *    linkCommand.execute( 'http://example.com', {
   *      linkIsExternal: true
   *    } );
   *
   *    // Removing a decorator attribute from the selection.
   *    linkCommand.execute( 'http://example.com', {
   *      linkIsExternal: false
   *    } );
   *
   *    // Adding multiple decorator attributes at the same time.
   *    linkCommand.execute( 'http://example.com', {
   *      linkIsExternal: true,
   *      linkIsDownloadable: true,
   *    } );
   *
   *    // Removing and adding decorator attributes at the same time.
   *    linkCommand.execute( 'http://example.com', {
   *      linkIsExternal: false,
   *      linkFoo: true,
   *      linkIsDownloadable: false,
   *    } );
   *
   * **Note**: If the decorator attribute name is not specified, its state remains untouched.
   *
   * **Note**: {@link module:link/unlinkcommand~UnlinkCommand#execute `UnlinkCommand#execute()`} removes all
   * decorator attributes.
   */
    execute(href: string, manualDecoratorIds?: Record<string, unknown>): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        LinkCommand: LinkCommand;
    }
}
