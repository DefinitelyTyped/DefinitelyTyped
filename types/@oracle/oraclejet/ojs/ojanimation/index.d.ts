declare namespace oj {  
  namespace AnimationUtils {
    function collapse(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, direction?: string, startMaxHeight?: string, endMaxHeight?: string, startMaxWidth?: string, endMaxWidth?: string}): Promise<boolean>;
    function expand(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, direction?: string, startMaxHeight?: string, endMaxHeight?: string, startMaxWidth?: string, endMaxWidth?: string}): Promise<boolean>;
    function fadeIn(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, startOpacity?: number, endOpacity?: number}): Promise<boolean>;
    function fadeOut(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, startOpacity?: number, endOpacity?: number}): Promise<boolean>;
    function flipIn(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, axis?: string, startAngle?: string, endAngle?: string, backfaceVisibility?: string, perspective?: string, transformOrigin?: string, flipTarget?: string}): Promise<boolean>;
    function flipOut(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, axis?: string, startAngle?: string, endAngle?: string, backfaceVisibility?: string, perspective?: string, transformOrigin?: string, flipTarget?: string}): Promise<boolean>;
    function ripple(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, offsetX?: string, offsetY?: string, color?: string, diameter?: string, startOpacity?: number, endOpacity?: number}): Promise<boolean>;
    function slideIn(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, direction?: string, offsetX?: string, offsetY?: string}): Promise<boolean>;
    function slideOut(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, direction?: string, offsetX?: string, offsetY?: string}): Promise<boolean>;
    function zoomIn(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, axis?: string, transformOrigin?: string}): Promise<boolean>;
    function zoomOut(element: Element, options?: {delay?: string, duration?: string, timingFunction?: string, persist?: string, axis?: string, transformOrigin?: string}): Promise<boolean>;
  }
  namespace AnimationUtils {
    type AnimationMethods = 'collapse'|'expand'|'fadeIn'|'fadeOut'|'flipIn'|'flipOut'|'ripple'|'slideIn'|'slideOut'|'zoomIn'|'zoomOut'; 
  }

}
