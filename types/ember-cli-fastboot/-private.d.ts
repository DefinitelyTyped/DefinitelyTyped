export interface FastBoot {
  require: () => unknown;
  config: (key: string) => unknown;
  distPath: () => string;
}
