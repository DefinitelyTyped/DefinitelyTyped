
// Type definitions for chakra-ui-vue 1.3
// Project: https://github.com/chakra-ui/chakra-ui-vue
// Definitions by: Daniel Alonge <https://github.com/DanielAlongE>
//                 Jonathan Bakebwa <https://github.com/codebender828>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "@chakra-ui/vue" {
    import Vue, { PluginObject }  from "vue/types";
  
    export default class Chakra {
      static install(v: typeof Vue, o?: PluginObject<unknown>): void
    }
    export class CAccordion extends Vue {}
    export class CAlert extends Vue {}
    export class CAlertDialog extends Vue {}
    export class CAspectRatioBox extends Vue {}
    export class CAvatar extends Vue {}
    export class CAvatarGroup extends Vue {}
    export class CBadge extends Vue {}
    export class CBox extends Vue {}
    export class CBreadcrumb extends Vue {}
    export class CButton extends Vue {}
    export class CButtonGroup extends Vue {}
    export class CCheckbox extends Vue {}
    export class CCheckboxGroup extends Vue {}
    export class CCircularProgress extends Vue {}
    export class CCloseButton extends Vue {}
    export class CCode extends Vue {}
    export class CCollapse extends Vue {}
    export class CColorModeProvider extends Vue {}
    export class CDarkMode extends Vue {}
    export class CLightMode extends Vue {}
    export class CControlBox extends Vue {}
    export class CDivider extends Vue {}
    export class CEditable extends Vue {}
    export class CFlex extends Vue {}
    export class CFormControl extends Vue {}
    export class CFormLabel extends Vue {}
    export class CFormErrorMessage extends Vue {}
    export class CFormHelperText extends Vue {}
    export class CFragment extends Vue {}
    export class CGrid extends Vue {}
    export class CHeading extends Vue {}
    export class CIcon extends Vue {}
    export class CIconButton extends Vue {}
    export class CImage extends Vue {}
    export class CInput extends Vue {}
    export class CInputAddon extends Vue {}
    export class CInputElement extends Vue {}
    export class CInputGroup extends Vue {}
    export class CLink extends Vue {}
    export class CList extends Vue {}
    export class CMenu extends Vue {}
    export class CModal extends Vue {}
    export class CNumberInput extends Vue {}
    export class CPopover extends Vue {}
    export class CPopper extends Vue {}
    export class CPortal extends Vue {}
    export class CProgress extends Vue {}
    export class CPseudoBox extends Vue {}
    export class CRadio extends Vue {}
    export class CRadioGroup extends Vue {}
    export class CRadioButtonGroup extends Vue {}
    export class CSimpleGrid extends Vue {}
    export class CSelect extends Vue {}
    export class CSlider extends Vue {}
    export class CSpinner extends Vue {}
    export class CStack extends Vue {}
    export class CSwitch extends Vue {}
    export class CTabs extends Vue {}
    export class CTag extends Vue {}
    export class CText extends Vue {}
    export class CTextarea extends Vue {}
    export class CThemeProvider extends Vue {}
    export class CTooltip extends Vue {}
  }