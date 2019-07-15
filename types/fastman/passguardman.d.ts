export default passGuard;

/**
 * 创建一个密码控件组件
 * @param options 具体请查看passGuard参数配置:http://itest.dfzq.com.cn/document/fastman-v2/component/passguard.html
 */
declare function passGuard(options: {
  id?: string,
  keyboardType?: number,
  inputMaxLength?: number,
  mixPromise?: (_) => Promise<any>,
  onShow?: (_) => void,
  onHide?: (_) => void,
  onPressing?: (_) => void,
  onPressed?: (_) => void,
  onFocus?: (_) => void,
  onSubmit?: (input) => void
}): passGuard.passGuardReturnType;

/**
 * 定义passGuard实例函数
 */
declare namespace passGuard {
  interface passGuardReturnType {
    /**
     * 输出密码输入项内容
     */
    getOutput();

    /**
     * 获取密码长度
     */
    getLength();

    /**
     * 清除密码
     */
    clearPass();
  }
}
