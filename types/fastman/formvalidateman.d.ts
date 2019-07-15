/**
 * 开启表单验证
 * @param selector Form 表单元素对应的选择器，支持类和ID选择器
 * @param options 具体请查看validate参数配置:http://itest.dfzq.com.cn/document/fastman-v2/component/formvalidate.html
 */
export function validate(selector: string, options: {
  onKeyup?: boolean,
  firstInvalidFocus?: boolean,
  conditional?: {
    [key: string]: (_) => void
  },
  descriptions?: {
    [key: string]: {
      required?: string,
      conditional?: string,
      pattern?: string
    }
  },
  valid?: (e, options) => void
});

/**
 * 该方法用来拓展一些输入域的验证,可实现一些复合关系非常复杂的验证规则
 * @param validateRule 具体请查看validateExtend参数配置:http://itest.dfzq.com.cn/document/fastman-v2/component/formvalidate.html
 */
export function validateExtend(validateRule: {
  [key: string]: {
    required?: boolean,
    pattern?: RegExp,
    descriptions?: {
      required?: string,
      conditional?: string,
      pattern?: string
    },
    conditional?: {
      [key: string]: (_) => void
    }
  }
});
