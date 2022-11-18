// Type definitions for react-native-video 5.0
// Project: https://github.com/necolas/react-native-web, https://necolas.github.io/react-native-web/
// Definitions by: Josh <https://github.com/joshuayoes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { AccessibilityProps as RnAccessibilityProps } from 'react-native';

declare module 'react-native' {
  export * from 'react-native';

  type idRef = string;
  type idRefList = idRef | Array<idRef>;
  /**
   * Props supported by `react-native-web`
   * https://necolas.github.io/react-native-web/docs/accessibility/
   *
   * Definitions converted from flow types in `react-native-web`
   * https://github.com/necolas/react-native-web/blob/fa47f80d34ee6cde2536b2a2241e326f84b633c4/packages/react-native-web/src/exports/View/types.js#L27-L91
   */
  export interface AccessibilityPropsWeb {
    accessibilityActiveDescendant?: idRef;
    accessibilityAtomic?: boolean;
    accessibilityAutoComplete?: ('none' | 'list' | 'inline' | 'both') | null | undefined;
    accessibilityBusy?: boolean;
    accessibilityChecked?: boolean | 'mixed';
    accessibilityColumnCount?: number;
    accessibilityColumnIndex?: number;
    accessibilityColumnSpan?: number;
    accessibilityControls?: idRefList;
    accessibilityCurrent?:
      | (boolean | 'page' | 'step' | 'location' | 'date' | 'time')
      | null
      | undefined;
    accessibilityDescribedBy?: idRefList;
    accessibilityDetails?: idRef;
    accessibilityDisabled?: boolean;
    accessibilityErrorMessage?: idRef;
    accessibilityExpanded?: boolean;
    accessibilityFlowTo?: idRefList;
    accessibilityHasPopup?:
      | ('dialog' | 'grid' | 'listbox' | 'menu' | 'tree' | false)
      | null
      | undefined;
    accessibilityHidden?: boolean;
    accessibilityInvalid?: boolean;
    accessibilityKeyShortcuts?: Array<string>;
    accessibilityLabel?: string;
    accessibilityLabelledBy?: idRefList;
    accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    accessibilityModal?: boolean;
    accessibilityMultiline?: boolean;
    accessibilityMultiSelectable?: boolean;
    accessibilityOrientation?: 'horizontal' | 'vertical';
    accessibilityOwns?: idRefList;
    accessibilityPlaceholder?: string;
    accessibilityPosInSet?: number;
    accessibilityPressed?: boolean | 'mixed';
    accessibilityReadOnly?: boolean;
    accessibilityRequired?: boolean;
    accessibilityRole?: string;
    accessibilityRoleDescription?: string;
    accessibilityRowCount?: number;
    accessibilityRowIndex?: number;
    accessibilityRowSpan?: number;
    accessibilitySelected?: boolean;
    accessibilitySetSize?: number;
    accessibilitySort?: ('ascending' | 'descending' | 'none' | 'other') | null | undefined;
    accessibilityValueMax?: number;
    accessibilityValueMin?: number;
    accessibilityValueNow?: number;
    accessibilityValueText?: string;
    dataSet?: {};
    nativeID?: string;
  }

  export interface AccessibilityProps extends RnAccessibilityProps, AccessibilityPropsWeb {}
}
