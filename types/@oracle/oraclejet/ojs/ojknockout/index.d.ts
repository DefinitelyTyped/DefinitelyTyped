/// <reference types='knockout'/>
declare namespace oj {  
  namespace KnockoutTemplateUtils {
    function getRenderer(template: string, bReplaceNode?: boolean): ((param0: object)=> void);
  }

}
declare namespace oj {  
  class ResponsiveKnockoutUtils {
    static createMediaQueryObservable(queryString: string): KnockoutObservable<boolean>;
    static createScreenRangeObservable(): KnockoutObservable<string>;
  }

}
