import { ReactWrapper } from 'enzyme';
import { StyledComponent } from 'styled-components';

export function find(element: Element, styledComponent: StyledComponent<any, any>): Element | null;

export function findAll(element: Element, styledComponent: StyledComponent<any, any>): NodeListOf<Element>;

export function enzymeFind(wrapper: ReactWrapper, styledComponent: StyledComponent<any, any>): ReactWrapper;
