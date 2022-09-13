export type ElementDefinition =
    | string
    | {
          attributes?: Record<string, string> | undefined;
          classes?: string | string[] | undefined;
          name: string;
          priority?: number | undefined;
          styles?: Record<string, string> | undefined;
      };
