/*! *****************************************************************************
Copyright (c) 2018 Tencent, Inc. All rights reserved. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

declare namespace Page {

  interface ICustomShareContent {
    /** 转发标题。默认值：当前小程序名称 */
    title?: string
    /** 转发路径，必须是以 / 开头的完整路径。默认值：当前页面 path */
    path?: string
    /** 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4，最低基础库： `1.5.0`。默认值：使用默认截图 */
    imageUrl?: string
  }

  interface IPageScrollOption {
    /** 页面在垂直方向已滚动的距离（单位px） */
    scrollTop: number
  }

  interface IShareAppMessageOption {
    /** 转发事件来源。
     *
     * 可选值：
     * - `button`：页面内转发按钮；
     * - `menu`：右上角转发菜单。
     *
     * 最低基础库： `1.2.4`
     */
    from: 'button' | 'menu' | string
    /** 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined`
     *
     * 最低基础库： `1.2.4` */
    target: any
    /** 页面中包含`<web-view>`组件时，返回当前`<web-view>`的url
     *
     * 最低基础库： `1.6.4`
     */
    webViewUrl?: string
  }

  interface ITabItemTapOption {
    /** 被点击tabItem的序号，从0开始，最低基础库： `1.9.0` */
    index: string
    /** 被点击tabItem的页面路径，最低基础库： `1.9.0` */
    pagePath: string
    /** 被点击tabItem的按钮文字，最低基础库： `1.9.0` */
    text: string
  }

  interface PageInstanceBaseProps<D extends IAnyObject = any> {
    /** 页面的初始数据
     * 
     * `data` 是页面第一次渲染使用的**初始数据**。
     * 
     * 页面加载时，`data` 将会以`JSON`字符串的形式由逻辑层传至渲染层，因此`data`中的数据必须是可以转成`JSON`的类型：字符串，数字，布尔值，对象，数组。
     * 
     * 渲染层可以通过 `WXML` 对数据进行绑定。
    */
    data?: D

    /** `setData` 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 `this.data` 的值（同步）。
     *
     * **注意：**
     *
     * 1. **直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致**。
     * 1. 仅支持设置可 JSON 化的数据。
     * 1. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
     * 1. 请不要把 data 中任何一项的 value 设为 `undefined` ，否则这一项将不被设置并可能遗留一些潜在问题。
     */

    setData?<K extends keyof D>(
      /** 这次要改变的数据
       *
       * 以 `key: value` 的形式表示，将 `this.data` 中的 `key` 对应的值改变成 `value`。
       *
       * 其中 `key` 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如 `array[2].message`，`a.b.c.d`，并且不需要在 this.data 中预先定义。
       */
      data: D | Pick<D, K> | IAnyObject,
      /** setData引起的界面更新渲染完毕后的回调函数，最低基础库： `1.5.0` */
      callback?: () => void
    ): void

    /** 到当前页面的路径，类型为`String`。最低基础库： `1.2.0` */
    route?: string
  }

  interface PageInstance<D extends IAnyObject = any, T extends IAnyObject = any> extends PageInstanceBaseProps<D> {
    /** 生命周期回调—监听页面加载
     *
     * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
     */
    onLoad?(
      /** 打开当前页面路径中的参数 */
      query?: { [queryKey: string]: string }
    ): void
    /** 生命周期回调—监听页面显示
     *
     * 页面显示/切入前台时触发。
     */
    onShow?(): void
    /** 生命周期回调—监听页面初次渲染完成
     * 
     * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
     * 
   
     * 注意：对界面内容进行设置的 API 如`wx.setNavigationBarTitle`，请在`onReady`之后进行。
    */
    onReady?(): void
    /** 生命周期回调—监听页面隐藏
     *
     * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，小程序切入后台等。
     */
    onHide?(): void
    /** 生命周期回调—监听页面卸载
     *
     * 页面卸载时触发。如`redirectTo`或`navigateBack`到其他页面时。
     */
    onUnload?(): void
    /** 监听用户下拉动作
     *
     * 监听用户下拉刷新事件。
     * - 需要在`app.json`的`window`选项中或页面配置中开启`enablePullDownRefresh`。
     * - 可以通过`wx.startPullDownRefresh`触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
     * - 当处理完数据刷新后，`wx.stopPullDownRefresh`可以停止当前页面的下拉刷新。
     */
    onPullDownRefresh?(): void
    /** 页面上拉触底事件的处理函数
     *
     * 监听用户上拉触底事件。
     * - 可以在`app.json`的`window`选项中或页面配置中设置触发距离`onReachBottomDistance`。
     * - 在触发距离内滑动期间，本事件只会被触发一次。
     */
    onReachBottom?(): void
    /** 用户点击右上角转发
     *
     * 监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。
     *
     * **注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮**
     *
     * 此事件需要 return 一个 Object，用于自定义转发内容
     */
    onShareAppMessage?(
      /** 分享发起来源参数 */
      options?: IShareAppMessageOption
    ): ICustomShareContent
    /** 页面滚动触发事件的处理函数
     *
     * 监听用户滑动页面事件。
     */
    onPageScroll?(
      /** 页面滚动参数 */
      options?: IPageScrollOption
    ): void

    /** 当前是 tab 页时，点击 tab 时触发，最低基础库： `1.9.0` */
    onTabItemTap?(
      /** tab 点击参数 */
      options?: ITabItemTapOption
    ): void
  }

  interface PageConstructor {
    <D extends IAnyObject, T extends IAnyObject & PageInstance>(
      options: PageInstance<D, T> & T
    ): void
  }

  interface GetCurrentPages {
    <D extends IAnyObject = {}, T extends IAnyObject = {}>(): (PageInstance<D, T> & T)[]
  }
}

declare const Page: Page.PageConstructor
declare const getCurrentPages: Page.GetCurrentPages
