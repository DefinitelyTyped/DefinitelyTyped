import * as React from "react";
import {
  PaginationComponentProps,
  createUltimatePagination,
  ItemTypeToComponent
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

const itemTypeToComponent: ItemTypeToComponent = {
  PAGE: Page,
  ELLIPSIS: Ellipsis,
  FIRST_PAGE_LINK: FirstPageLink,
  PREVIOUS_PAGE_LINK: PreviousPageLink,
  NEXT_PAGE_LINK: NextPageLink,
  LAST_PAGE_LINK: LastPageLink
};

const UltimatePagination = createUltimatePagination({ itemTypeToComponent, WrapperComponent: Wrapper }); // $ExpectType React.ComponentType<UltimatePaginationProps>

<UltimatePagination currentPage={0} totalPages={5} />;
