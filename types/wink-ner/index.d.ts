declare class NER {
  /**
   * create a NER (Named Entity Recognition) instance
   */
  constructor();

  /**
   * Defines configuration for the NER instance
   * @param config configuration object
   * @returns object with active configuration
   */
  defineConfig(config: NER.Config): {
      tagsToIgnore: string[]
      valuesToIgnore: string[]
      ignoreDiacritics: boolean
  };

  /**
   * Learns entities for future recognition
   * @param entities Array of entities to learn
   * @returns Number of entities learned
   */
  learn(entities: NER.Entity[]): number;

  /**
   * Recognizes entities in the input tokens
   * @param tokens Array of tokens to process
   * @returns Array of processed tokens with entity information
   */
  recognize(tokens: NER.Token[]): NER.Token[];

  /**
   * Alias for recognize()
   * @param tokens Array of tokens to process
   * @returns Array of processed tokens with entity information
   */
  predict(tokens: NER.Token[]): NER.Token[];

  /**
   * Exports the learnings as JSON string
   * @returns JSON string containing learned patterns
   */
  exportJSON(): string;

  /**
   * Imports previously exported learnings
   * @param json JSON string containing previously exported learnings
   * @returns Success status of the import operation
   */
  importJSON(json: string): boolean;

  /**
   * Resets the NER instance
   * @returns Success status of the reset operation
   */
  reset(): boolean;
}

declare namespace NER {
  /** Entity to be learned by the NER system */
  interface Entity {
      /** The text content of the entity */
      text: string;
      /** The type/category of the entity */
      entityType: string;
      /** Optional unique identifier */
      uid?: string;
      /** Optional normalized form */
      value?: string;
  }

  /** Token in the input text with NER-related properties */
  interface Token {
      /** The text value of the token */
      value: string;
      /** Part-of-speech or other relevant tag */
      tag: string;
      /** The recognized entity type, if any */
      entityType?: string;
      /** Optional unique identifier */
      uid?: string;
      /** Optional array containing original sequence of tokens */
      originalSeq?: string[];
  }

  /** Configuration options for the NER system */
  interface Config {
      /** Array of token values to ignore during entity recognition */
      valuesToIgnore?: string[];
      /** Array of POS tags to ignore during entity recognition */
      tagsToIgnore?: string[];
      /** Whether to ignore diacritical marks in text comparison */
      ignoreDiacritics?: boolean;
  }
}

export = NER;