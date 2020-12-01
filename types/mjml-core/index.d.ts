/**
 * An map of components available to be used in mjml
 */
export const components: {[componentName: string]: Component | undefined};

interface IInitialData {
  attributes: IAttributes;
  children: IInitialData[];
  content: string;
  context: {
    add(attr: any, ...params: any[]): void;
    addMediaQuery(className: any, unit: { parsedWidth: any; unit: any }): void;
    addHeadStyle(identifier: any, headStyle: any): void;
    addComponentHeadSyle(headStyle: any): void;
    setBackgroundColor(color: string): void;
    processing(node: any, context: any): void;
  };
  props: {};
  globalAttributes: IAttributes;
}

export function initComponent({ initialData, name }: { initialData: IInitialData; name: any }): any;

/**
 * Registers a component for use in mjml
 */
export function registerComponent(Component: Component): void;

export function suffixCssClasses(classes: any, suffix: any): any;

export function handleMjmlConfig(
  configPathOrDir?: string,
  registerCompFn?: typeof registerComponent
):
  | {
      success: any[];
      failures: any[];
    }
  | {
      error: any;
    };

export function initializeType(typeConfig: any): any;

export abstract class BodyComponent extends Component {
  constructor(initialData: IInitialData);

  getStyles(): {};

  /** takes a style attribute and tries to parse it's value
   * ie. padding="1 2 3 4"
   * getShorthandAttrValue("padding","left") => 1
   *  */
  getShorthandAttrValue(attribute: any, direction: any): number;

  getShorthandBorderValue(direction: any): number;

  getBoxWidths(): {
    totalWidth: number;
    borders: number;
    paddings: number;
    box: number;
  };

  htmlAttributes(attributes: any): any;

  styles(styles: any): any;

  renderChildren(
    children?: [],
    options?: {
      props?: Component['props'];
      renderer?: (component: Component) => any;
      attributes?: IAttributes;
      rawXML?: boolean;
    }
  ): string;
}

export abstract class HeadComponent extends Component {
  constructor(initialData: IInitialData);

  handlerChildren(): any;
}

export interface IAttributes {
  [attribute: string]: string;
}

abstract class Component {
  static getTagName(): any;

  static isRawElement(): boolean;

  static defaultAttributes: { [prop: string]: string | undefined };

  props: {
    children: any;
    /** is first child */
    first: boolean;
    index: number;
    /** is last child */
    last: boolean;
    /** number of sibling elements */
    sibling: number;
    nonRawSiblings: number;
  };
  attributes: IAttributes;
  context: any;

  constructor(initialData: IInitialData);

  getChildContext(): any;

  getAttribute(name: any): any;

  getContent(): any;

  /**
   * Use if you want the CSS to be registered once
   *
   * @returns string css style string
   */
  headStyle(breakpoint: number): string;

  /**
   * Use if you need custom styles for every instance of a component
   *
   * @returns string css style string
   */
  componentHeadStyle(breakpoint: number): string;

  /**
   * If you want to return mjml from a component, it needs to be processed first
   */
  renderMJML(mjml: string, options?: {}): string;

  /**
   * Expected to return an html string
   */
  abstract render(): string;
}
