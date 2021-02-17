// Type definitions for react-calendar 3.1
// Project: https://github.com/wojtekmaj/react-calendar
// Definitions by: Stéphane Saquet <https://github.com/Guymestef>, Katie Soldau <https://github.com/ksoldau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export type CalendarType = "ISO 8601" | "US" | "Arabic" | "Hebrew";
export type Detail = "month" | "year" | "decade" | "century";
export type DateCallback = (date: Date) => void;
export type ClickWeekNumberCallback = (weekNumber: number, date: Date) => void;
export type OnChangeDateCallback = (date: Date | Date[]) => void;
export type FormatterCallback = (locale: string, date: Date) => string;
export type ViewCallback = (props: ViewCallbackProperties) => void;

export default function Calendar(props: CalendarProps): JSX.Element;

export interface CalendarProps {
  activeStartDate?: Date;
  allowPartialRange?: boolean;
  calendarType?: CalendarType;
  className?: string | string[];
  defaultActiveStartDate?: Date;
  defaultValue?: Date | Date[];
  defaultView?: Detail;
  formatLongDate?: FormatterCallback;
  formatMonth?: FormatterCallback;
  formatMonthYear?: FormatterCallback;
  formatShortWeekday?: FormatterCallback;
  formatYear?: FormatterCallback;
  locale?: string;
  maxDate?: Date;
  maxDetail?: Detail;
  minDate?: Date;
  minDetail?: Detail;
  navigationAriaLabel?: string;
  navigationLabel?: (props: { date: Date, view: Detail, label: string }) => string | JSX.Element | null;
  next2AriaLabel?: string;
  next2Label?: string | JSX.Element | null;
  nextAriaLabel?: string;
  nextLabel?: string | JSX.Element;
  onActiveStartDateChange?: ViewCallback;
  onChange?: OnChangeDateCallback;
  onViewChange?: ViewCallback;
  onClickDay?: DateCallback;
  onClickDecade?: DateCallback;
  onClickMonth?: DateCallback;
  onClickWeekNumber?: ClickWeekNumberCallback;
  onClickYear?: DateCallback;
  onDrillDown?: ViewCallback;
  onDrillUp?: ViewCallback;
  prev2AriaLabel?: string;
  prev2Label?: string | JSX.Element | null;
  prevAriaLabel?: string;
  prevLabel?: string | JSX.Element;
  renderChildren?: (props: CalendarTileProperties) => JSX.Element | null; // For backwards compatibility
  returnValue?: "start" | "end" | "range";
  selectRange?: boolean;
  showDoubleView?: boolean;
  showFixedNumberOfWeeks?: boolean;
  showNavigation?: boolean;
  showNeighboringMonth?: boolean;
  showWeekNumbers?: boolean;
  tileClassName?: string | string[] | ((props: CalendarTileProperties) => string | string[] | null);
  tileContent?: JSX.Element | ((props: CalendarTileProperties) => JSX.Element | null);
  tileDisabled?: (props: CalendarTileProperties & { activeStartDate: Date }) => boolean;
  value?: Date | Date[] | null;
  view?: Detail;
}

export interface CalendarTileProperties {
  activeStartDate: Date;
  date: Date;
  view: Detail;
}

export interface ViewCallbackProperties {
  activeStartDate: Date;
  value: Date;
  view: Detail;
}

export function MonthView(props: DetailViewProps): JSX.Element;
export function YearView(props: DetailViewProps): JSX.Element;
export function DecadeView(props: DetailViewProps): JSX.Element;
export function CenturyView(props: DetailViewProps): JSX.Element;

export interface DetailViewProps {
  activeStartDate: Date;
  calendarType?: CalendarType;
  locale?: string;
  hover?: Date;
  maxDate?: Date;
  minDate?: Date;
  onClick?: DateCallback;
  onMouseOver?: DateCallback;
  renderChildren?: (props: CalendarTileProperties) => JSX.Element | null; // For backwards compatibility
  tileClassName?: string | string[] | ((props: CalendarTileProperties) => string | string[] | null);
  tileContent?: JSX.Element | ((props: CalendarTileProperties) => JSX.Element | null);
  tileDisabled?: (props: CalendarTileProperties) => boolean;
  value?: Date | Date[];
}
