export type ElementDefinition =
    | string
    | {
          attributes?: Record<string, string>;
          classes?: string | string[];
          name: string;
          priority?: number;
          styles?: Record<string, string>;
      };
