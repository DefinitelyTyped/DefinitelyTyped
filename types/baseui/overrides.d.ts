type StyleOverride = object | ((props: any) => object);

interface OverrideObject<T> {
  component?: React.ComponentType<T>;
  props?: object;
  style?: StyleOverride;
}

type Override<T> = OverrideObject<T> | React.ComponentType<T>;

interface Overrides<T> {
  [key: string]: Override<T>;
}
