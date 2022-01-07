export interface FastBoot {
  require: () => unknown;
  config: (key: string) => Record<string, unknown>;
  distPath: () => string;
}
