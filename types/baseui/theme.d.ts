interface Breakpoints {
  small?: number;
  medium?: number;
  large?: number;
}

interface Colors {
  // Primary Palette
  primary50?: string;
  primary100?: string;
  primary200?: string;
  primary300?: string;
  primary400?: string;
  primary?: string;
  primary500?: string;
  primary600?: string;
  primary700?: string;

  // Alert Palette
  negative50?: string;
  negative100?: string;
  negative200?: string;
  negative300?: string;
  negative400?: string;
  negative?: string;
  negative500?: string;
  negative600?: string;
  negative700?: string;

  // Warning Palette
  warning50?: string;
  warning100?: string;
  warning200?: string;
  warning300?: string;
  warning400?: string;
  warning?: string;
  warning500?: string;
  warning600?: string;
  warning700?: string;

  // Success Palette
  positive50?: string;
  positive100?: string;
  positive200?: string;
  positive300?: string;
  positive400?: string;
  positive?: string;
  positive500?: string;
  positive600?: string;
  positive700?: string;

  // Monochrome Palette
  white?: string;
  mono100?: string;
  mono200?: string;
  mono300?: string;
  mono400?: string;
  mono500?: string;
  mono600?: string;
  mono700?: string;
  mono800?: string;
  mono900?: string;
  mono1000?: string;
  black?: string;

  // Rating Palette
  rating200?: string;
  rating400?: string;

  // Semantic Colors

  // Font Color
  colorPrimary?: string;
  colorSecondary?: string;

  // Background
  background?: string;
  backgroundAlt?: string;
  backgroundInv?: string;

  // Foreground
  foreground?: string;
  foregroundAlt?: string;
  foregroundInv?: string;

  // Borders
  border?: string;
  borderAlt?: string;
  borderFocus?: string;
  borderError?: string;

  // Buttons
  buttonPrimaryFill?: string;
  buttonPrimaryText?: string;
  buttonPrimaryHover?: string;
  buttonPrimaryActive?: string;
  buttonSecondaryFill?: string;
  buttonSecondaryText?: string;
  buttonSecondaryHover?: string;
  buttonSecondaryActive?: string;
  buttonTertiaryFill?: string;
  buttonTertiaryText?: string;
  buttonTertiaryHover?: string;
  buttonTertiaryActive?: string;
  buttonTertiarySelectedText?: string;
  buttonTertiarySelectedFill?: string;
  buttonMinimalFill?: string;
  buttonMinimalText?: string;
  buttonMinimalHover?: string;
  buttonMinimalActive?: string;
  buttonDisabledFill?: string;
  buttonDisabledText?: string;

  // Breadcrumbs
  breadcrumbsText?: string;
  breadcrumbsSeparatorFill?: string;

  // Datepicker
  datepickerBackground?: string;
  datepickerDayFont?: string;
  datepickerDayFontDisabled?: string;
  datepickerDayPseudoSelected?: string;
  datepickerDayPseudoHighlighted?: string;

  // FileUploader
  fileUploaderBackgroundColor?: string;
  fileUploaderBackgroundColorActive?: string;
  fileUploaderBorderColorActive?: string;
  fileUploaderBorderColorDefault?: string;
  fileUploaderMessageColor?: string;

  // Links
  linkText?: string;
  linkVisited?: string;
  linkHover?: string;
  linkActive?: string;

  // Lists
  listHeaderFill?: string;
  listBodyFill?: string;
  listIconFill?: string;
  listBorder?: string;

  // ProgressSteps
  progressStepsIconActiveFill?: string;

  // Ticks
  tickFill?: string;
  tickFillHover?: string;
  tickFillActive?: string;
  tickFillSelected?: string;
  tickFillSelectedHover?: string;
  tickFillSelectedHoverActive?: string;
  tickFillError?: string;
  tickFillErrorHover?: string;
  tickFillErrorHoverActive?: string;
  tickFillErrorSelected?: string;
  tickFillErrorSelectedHover?: string;
  tickFillErrorSelectedHoverActive?: string;
  tickFillDisabled?: string;
  tickBorder?: string;
  tickBorderError?: string;
  tickMarkFill?: string;

  // Slider/Toggle
  sliderTrackFill?: string;
  sliderTrackFillHover?: string;
  sliderTrackFillActive?: string;
  sliderTrackFillSelected?: string;
  sliderTrackFillSelectedHover?: string;
  sliderTrackFillSelectedActive?: string;
  sliderTrackFillDisabled?: string;
  sliderHandleFill?: string;
  sliderHandleFillHover?: string;
  sliderHandleFillActive?: string;
  sliderHandleFillSelected?: string;
  sliderHandleFillSelectedHover?: string;
  sliderHandleFillSelectedActive?: string;
  sliderHandleFillDisabled?: string;
  sliderHandleInnerFill?: string;
  sliderHandleInnerFillDisabled?: string;
  sliderHandleInnerFillSelectedHover?: string;
  sliderHandleInnerFillSelectedActive?: string;
  sliderBorder?: string;
  sliderBorderHover?: string;
  sliderBorderDisabled?: string;

  // Input
  inputFill?: string;
  inputFillError?: string;
  inputFillDisabled?: string;
  inputTextDisabled?: string;

  // Notification
  notificationPrimaryBackground?: string;
  notificationPrimaryText?: string;
  notificationPositiveBackground?: string;
  notificationPositiveText?: string;
  notificationWarningBackground?: string;
  notificationWarningText?: string;
  notificationNegativeBackground?: string;
  notificationNegativeText?: string;

  // Menu
  menuFill?: string;
  menuFillHover?: string;
  menuFontDefault?: string;
  menuFontDisabled?: string;
  menuFontHighlighted?: string;
  menuFontSelected?: string;

  // Pagination
  paginationTriangleDown?: string;

  // Header navigation
  headerNavigationFill?: string;

  // Tab
  tabBarFill?: string;
  tabColor?: string;

  // Shadow
  shadowFocus?: string;
  shadowError?: string;

  // Tag

  // Remove this section of theme values in next major version
  tagBackground?: string;
  tagNeutralBackground?: string;
  tagPrimaryBackground?: string;
  tagPositiveBackground?: string;
  tagWarningBackground?: string;
  tagNegativeBackground?: string;
  tagRGBGradient?: string;
  tagRGBGradientSecondary?: string;
  // ^^^^^^^

  tagSolidRampUnit?: string;
  tagSolidHoverRampUnit?: string;
  tagSolidActiveRampUnit?: string;
  tagSolidDisabledRampUnit?: string;
  tagSolidFontRampUnit?: string;
  tagSolidFontHoverRampUnit?: string;
  tagLightRampUnit?: string;
  tagLightHoverRampUnit?: string;
  tagLightActiveRampUnit?: string;
  tagLightDisabledRampUnit?: string;
  tagLightFontRampUnit?: string;
  tagLightFontHoverRampUnit?: string;
  tagOutlinedRampUnit?: string;
  tagOutlinedHoverRampUnit?: string;
  tagOutlinedActiveRampUnit?: string;
  tagOutlinedDisabledRampUnit?: string;
  tagOutlinedFontRampUnit?: string;
  tagOutlinedFontHoverRampUnit?: string;
  tagFontDisabledRampUnit?: string;

  tagNeutralSolidBackground?: string;
  tagNeutralSolidHover?: string;
  tagNeutralSolidActive?: string;
  tagNeutralSolidDisabled?: string;
  tagNeutralSolidFont?: string;
  tagNeutralSolidFontHover?: string;
  tagNeutralLightBackground?: string;
  tagNeutralLightHover?: string;
  tagNeutralLightActive?: string;
  tagNeutralLightDisabled?: string;
  tagNeutralLightFont?: string;
  tagNeutralLightFontHover?: string;
  tagNeutralOutlinedBackground?: string;
  tagNeutralOutlinedHover?: string;
  tagNeutralOutlinedActive?: string;
  tagNeutralOutlinedDisabled?: string;
  tagNeutralOutlinedFont?: string;
  tagNeutralOutlinedFontHover?: string;
  tagNeutralFontDisabled?: string;

  tagPrimarySolidBackground?: string;
  tagPrimarySolidHover?: string;
  tagPrimarySolidActive?: string;
  tagPrimarySolidDisabled?: string;
  tagPrimarySolidFont?: string;
  tagPrimarySolidFontHover?: string;
  tagPrimaryLightBackground?: string;
  tagPrimaryLightHover?: string;
  tagPrimaryLightActive?: string;
  tagPrimaryLightDisabled?: string;
  tagPrimaryLightFont?: string;
  tagPrimaryLightFontHover?: string;
  tagPrimaryOutlinedBackground?: string;
  tagPrimaryOutlinedHover?: string;
  tagPrimaryOutlinedActive?: string;
  tagPrimaryOutlinedDisabled?: string;
  tagPrimaryOutlinedFont?: string;
  tagPrimaryOutlinedFontHover?: string;
  tagPrimaryFontDisabled?: string;

  tagPositiveSolidBackground?: string;
  tagPositiveSolidHover?: string;
  tagPositiveSolidActive?: string;
  tagPositiveSolidDisabled?: string;
  tagPositiveSolidFont?: string;
  tagPositiveSolidFontHover?: string;
  tagPositiveLightBackground?: string;
  tagPositiveLightHover?: string;
  tagPositiveLightActive?: string;
  tagPositiveLightDisabled?: string;
  tagPositiveLightFont?: string;
  tagPositiveLightFontHover?: string;
  tagPositiveOutlinedBackground?: string;
  tagPositiveOutlinedHover?: string;
  tagPositiveOutlinedActive?: string;
  tagPositiveOutlinedDisabled?: string;
  tagPositiveOutlinedFont?: string;
  tagPositiveOutlinedFontHover?: string;
  tagPositiveFontDisabled?: string;

  tagWarningSolidBackground?: string;
  tagWarningSolidHover?: string;
  tagWarningSolidActive?: string;
  tagWarningSolidDisabled?: string;
  tagWarningSolidFont?: string;
  tagWarningSolidFontHover?: string;
  tagWarningLightBackground?: string;
  tagWarningLightHover?: string;
  tagWarningLightActive?: string;
  tagWarningLightDisabled?: string;
  tagWarningLightFont?: string;
  tagWarningLightFontHover?: string;
  tagWarningOutlinedBackground?: string;
  tagWarningOutlinedHover?: string;
  tagWarningOutlinedActive?: string;
  tagWarningOutlinedDisabled?: string;
  tagWarningOutlinedFont?: string;
  tagWarningOutlinedFontHover?: string;
  tagWarningFontDisabled?: string;

  tagNegativeSolidBackground?: string;
  tagNegativeSolidHover?: string;
  tagNegativeSolidActive?: string;
  tagNegativeSolidDisabled?: string;
  tagNegativeSolidFont?: string;
  tagNegativeSolidFontHover?: string;
  tagNegativeLightBackground?: string;
  tagNegativeLightHover?: string;
  tagNegativeLightActive?: string;
  tagNegativeLightDisabled?: string;
  tagNegativeLightFont?: string;
  tagNegativeLightFontHover?: string;
  tagNegativeOutlinedBackground?: string;
  tagNegativeOutlinedHover?: string;
  tagNegativeOutlinedActive?: string;
  tagNegativeOutlinedDisabled?: string;
  tagNegativeOutlinedFont?: string;
  tagNegativeOutlinedFontHover?: string;
  tagNegativeFontDisabled?: string;

  // Table
  tableHeadBackgroundColor?: string;
  tableBackground?: string;
  tableFilter?: string;
  tableFilterHeading?: string;
  tableFilterBackground?: string;
  tableFilterFooterBackground?: string;

  // Toast
  toastText?: string;
  toastPrimaryBackground?: string;
  toastPositiveBackground?: string;
  toastWarningBackground?: string;
  toastNegativeBackground?: string;

  // Spinner
  spinnerTrackFill?: string;

  // Progress bar
  progressbarTrackFill?: string;

  // Tooltip
  tooltipBackground?: string;
  tooltipText?: string;
}

interface Font {
  fontFamily?: string;
  fontWeight?: string | number;
  fontSize?: string;
  lineHeight?: string | number;
}

interface Typography {
  font100?: Font;
  font200?: Font;
  font250?: Font;
  font300?: Font;
  font350?: Font;
  font400?: Font;
  font450?: Font;
  font500?: Font;
  font600?: Font;
  font700?: Font;
  font800?: Font;
  font900?: Font;
  font1000?: Font;
}

interface Sizing {
  scale0?: string;
  scale100?: string;
  scale200?: string;
  scale300?: string;
  scale400?: string;
  scale500?: string;
  scale550?: string;
  scale600?: string;
  scale700?: string;
  scale800?: string;
  scale900?: string;
  scale1000?: string;
  scale1200?: string;
  scale1400?: string;
  scale1600?: string;
  scale2400?: string;
  scale3200?: string;
  scale4800?: string;
}

interface Lighting {
  shadow400?: string;
  shadow500?: string;
  shadow600?: string;
  shadow700?: string;
  overlay0?: string;
  overlay100?: string;
  overlay200?: string;
  overlay300?: string;
  overlay400?: string;
  overlay500?: string;
  overlay600?: string;
}

interface Animation {
  timing100?: string;
  timing400?: string;
  timing700?: string;
  easeOutCurve?: string;
  easeInCurve?: string;
  easeInOutCurve?: string;
}

interface Border {
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: string;
}

interface Borders {
  border100?: Border;
  border200?: Border;
  border300?: Border;
  border400?: Border;
  border500?: Border;
  border600?: Border;
  useRoundedCorners?: boolean;
  radius100?: string;
  radius200?: string;
  radius300?: string;
}

interface ZIndex {
  modal?: number;
}

interface Theme {
  name?: string;
  breakpoints?: Breakpoints;
  colors?: Colors;
  typography?: Typography;
  sizing?: Sizing;
  lighting?: Lighting;
  animation?: Animation;
  borders?: Borders;
  zIndex?: ZIndex;
  // Remove in next major version
  tooltip?: {
    backgroundColor: string;
  };
}

interface ThemePrimitives {
  // Primary Palette
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;

  // Alert Palette
  negative50: string;
  negative100: string;
  negative200: string;
  negative300: string;
  negative400: string;
  negative500: string;
  negative600: string;
  negative700: string;

  // Warning Palette
  warning50: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  warning600: string;
  warning700: string;

  // Success Palette
  positive50: string;
  positive100: string;
  positive200: string;
  positive300: string;
  positive400: string;
  positive500: string;
  positive600: string;
  positive700: string;

  // Monochrome Palette
  mono100: string;
  mono200: string;
  mono300: string;
  mono400: string;
  mono500: string;
  mono600: string;
  mono700: string;
  mono800: string;
  mono900: string;
  mono1000: string;

  // Rating Palette
  rating200: string;
  rating400: string;

  primaryFontFamily: string;
}
