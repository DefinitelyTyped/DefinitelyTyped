declare namespace AMap {
  /**
   * 加载插件，
   * @param name 插件名称
   * @param callback 插件加载完成后的回调函数
   */
  function plugin(plugin: string | string[], callback: () => void): typeof AMap;
  /**
   * 加载插件，
   * @param name 插件名称
   * @param callback 插件加载完成后的回调函数
   */
  function service(plugin: string | string[], callback: () => void): typeof AMap;
}
