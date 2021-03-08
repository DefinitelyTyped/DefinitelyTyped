export type ElementDefinition =
    | string
    | {
          name: string;
          classes?: string | string[];
          styles?: Record<string, string>;
          attributes?: Record<string, string>;
      };
