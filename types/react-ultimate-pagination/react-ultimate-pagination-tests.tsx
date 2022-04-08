import * as React from "react";
import {
  PaginationComponentProps,
  createUltimatePagination,
  ItemTypeToComponent,
  ITEM_TYPES
} from "react-ultimate-pagination";

function Page(props: PaginationComponentProps) {
  return (
    <button
      style={props.isActive ? {fontWeight: 'bold'} : undefined}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >{props.value}</button>
  );
}

function PageWithExtraProps(props: PaginationComponentProps & { color: "red" }) {
  return (
    <button style={{ color: props.color }}>5</button>
  );
}

function Ellipsis(props: PaginationComponentProps) {
  return <button onClick={props.onClick} disabled={props.isDisabled}>...</button>;
}

function FirstPageLink(props: PaginationComponentProps) {
  return <button onClick={props.onClick} disabled={props.isDisabled}>First</button>;
}

function PreviousPageLink(props: PaginationComponentProps) {
  return <button onClick={props.onClick} disabled={props.isDisabled}>Previous</button>;
}

function NextPageLink(props: PaginationComponentProps) {
  return <button onClick={props.onClick} disabled={props.isDisabled}>Next</button>;
}

function LastPageLink(props: PaginationComponentProps) {
  return <button onClick={props.onClick} disabled={props.isDisabled}>Last</button>;
}

function Wrapper(props: { children: React.ReactChildren }) {
  return <div>{props.children}</div>;
}

// ItemTypeToComponent using strings
const itemTypeToComponent: ItemTypeToComponent = {
  PAGE: Page,
  ELLIPSIS: Ellipsis,
  FIRST_PAGE_LINK: FirstPageLink,
  PREVIOUS_PAGE_LINK: PreviousPageLink,
  NEXT_PAGE_LINK: NextPageLink,
  LAST_PAGE_LINK: LastPageLink
};

// ItemTypeToComponent using enum
const itemTypeToComponent2: ItemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

// ItemTypeToComponent using Page with extra props
const itemTypeToComponent3: Partial<ItemTypeToComponent> = {
  [ITEM_TYPES.PAGE]: PageWithExtraProps,
};

const UltimatePagination = createUltimatePagination({ itemTypeToComponent, WrapperComponent: Wrapper }); // $ExpectType ComponentType<UltimatePaginationProps>

// With required props
<UltimatePagination currentPage={0} totalPages={5} />;

// With all props
<UltimatePagination
  currentPage={0}
  totalPages={5}
  boundaryPagesRange={1}
  disabled={false}
  hideEllipsis={false}
  hideFirstAndLastPageLinks={false}
  hidePreviousAndNextPageLinks={false}
  onChange={() => {}}
  siblingPagesRange={99}
/>;

// With unspported prop
<UltimatePagination color="red"/>; // $ExpectError
