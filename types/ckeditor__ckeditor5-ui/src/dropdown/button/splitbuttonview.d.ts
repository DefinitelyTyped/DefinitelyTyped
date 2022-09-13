import { IconView, TooltipView } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler } from '@ckeditor/ckeditor5-utils';
import ButtonView from '../../button/buttonview';
import View from '../../view';
import ViewCollection from '../../viewcollection';
import { DropdownButton } from './dropdownbutton';

export default class SplitButtonView extends View implements DropdownButton {
    class?: string | undefined;
    icon?: string | undefined;
    isEnabled: boolean;
    isOn: boolean;
    isToggleable: boolean;
    isVisible: boolean;
    keystroke?: string | undefined;
    label: string;
    labelStyle?: string | undefined;
    tabindex?: string | undefined;
    tooltip?: string | boolean | ((label: string, keystroke: string) => string) | undefined;
    tooltipPosition?: 's' | 'n' | 'e' | 'w' | 'sw' | 'se' | undefined;
    type?: 'button' | 'submit' | 'reset' | 'menu' | undefined;
    withKeystroke?: boolean | undefined;
    withText?: boolean | undefined;
    iconView: IconView;
    keystrokeView: View;
    labelView: View;
    tooltipView: TooltipView;

    readonly actionView: ButtonView;
    readonly arrowView: ButtonView;
    readonly children: ViewCollection;
    readonly focusTracker: FocusTracker;
    readonly keystrokes: KeystrokeHandler;

    focus(): void;
    destroy(): void;
}
