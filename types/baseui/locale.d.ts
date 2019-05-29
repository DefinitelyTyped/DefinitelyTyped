interface AccordionLocale {
  collapse: string;
  expand: string;
}

interface BreadcrumbLocale {
  ariaLabel: string;
}
interface DatepickerLocale {
  ariaLabel: string;
  nextMonth: string;
  previousMonth: string;
  screenReaderMessageInput: string;
  timePickerAriaLabel: string;
  timezonePickerAriaLabel: string;
}
interface ButtonGroupLocale {
  ariaLabel: string;
}
interface FileUploaderLocale {
  dropFilesToUpload: string;
  or: string;
  browseFiles: string;
  retry: string;
  cancel: string;
}
interface MenuLocale {
  noResultsMsg: string;
}
interface ModalLocale {
  close: string;
}
interface PaginationLocale {
  prev: string;
  next: string;
  preposition: string;
}
interface SelectLocale {
  // Remove noResultsMsg prop in the next major version
  noResultsMsg: string;
  placeholder: string;
  create: string;
}
interface ToastLocale {
  close: string;
}

interface Locale {
  accordion: AccordionLocale;
  breadcrumbs: BreadcrumbLocale;
  datepicker: DatepickerLocale;
  buttongroup: ButtonGroupLocale;
  fileuploader: FileUploaderLocale;
  menu: MenuLocale;
  modal: ModalLocale;
  pagination: PaginationLocale;
  select: SelectLocale;
  toast: ToastLocale;
}
