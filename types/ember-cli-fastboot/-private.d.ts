export interface FastBoot {
  require: (id: string) => unknown;
  config: (key: string) => unknown;
  distPath: () => string;
}
