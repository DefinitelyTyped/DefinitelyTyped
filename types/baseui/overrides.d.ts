type StyleOverride<T> = object | ((props: { $theme: Theme } & React.PropsWithChildren<T>) => object);

interface OverrideObject<T> {
  component?: React.ComponentType<T>;
  props?: object;
  style?: StyleOverride<T>;
}

type Override<T> = OverrideObject<T> | React.ComponentType<T>;

interface Overrides<T> {
  [key: string]: Override<T>;
}
