interface Navigator {
  install(): Promise<string>;
  install(installUrl: string): Promise<string>;
  install(installUrl: string, manifestId: string): Promise<string>;
}