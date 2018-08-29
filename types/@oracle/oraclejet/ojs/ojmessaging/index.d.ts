declare namespace oj {  
  class Message {
    detail: string;
    severity: string|number;
    summary: string;
    constructor(summary: string, detail: string, severity?: number|string);
    static getMaxSeverity(messages?: Array<oj.Message>): number;
    static getSeverityLevel(severity?: string|number|undefined): number;
    static getSeverityType(level?: string|number|undefined): string;
    static isValid(messages: Array<oj.Message>): boolean;
  }
  namespace Message {
    enum SEVERITY_LEVEL {
      FATAL = "5",
      ERROR = "4",
      WARNING = "3",
      INFO = "2",
      CONFIRMATION = "1",
    }
    enum SEVERITY_TYPE {
      CONFIRMATION = "confirmation",
      INFO = "info",
      WARNING = "warning",
      ERROR = "error",
      FATAL = "fatal",
    }
  }


}
