# 使用

#### 构建工具场景

```shell
npm i -D @types/layui@2.9
```

#### 不使用构建工具时

1. Jetbrains 系 IDE:  [配置自定义第三方 JavaScript 库](https://www.jetbrains.com.cn/en-us/help/idea/configuring-javascript-libraries.html#ws_js_custom_third_party_library)
    - 将 layui.d.ts 放置在本地任意目录
    - 打开 IDE `设置 > 语言和框架 > JavaScript > 库`
    - 点击 `添加` 按钮
    - `附加文件` 选择本地目录的 layui.d.ts
    
       ![image](https://github.com/user-attachments/assets/ac00c7c1-6c90-462a-885d-d02ed4384041)

    - 点击 `确定` 按钮

3. Visual Studio Code: [使用 JavaScript](https://code.visualstudio.com/docs/nodejs/working-with-javascript)
    - 在项目中创建 types 文件夹
    - 将 layui.d.ts 文件添加到 types 文件夹
    - 配置 jsconfig.json
      - 在项目根目录创建 `jsconfig.json`
```js
     "compilerOptions": {
        "checkJs": true
      },
      "include": ["**/*.js"],
      "exclude": ["node_modules"]
```

# 项目结构
- index.d.ts
  - 类型定义入口文件
- layui.d.ts
  - layui 类型定义文件
- modules/*.d.ts
  - 模块的类型定义文件
- dist/layui.d.ts
  - 合并后的类型定义文件，Monaco Editor 或非构建工具场景使用
- layui-tests.ts
  - layui.js 测试文件
- test/*.test.ts
  - 模块测试文件

# 为 layui 自定义模块编写类型定义

声明一个接口，用于描述插件的设置项。

```typescript
interface MyPlugin {
    render(options: MyPluginOptions): MyPluginReturn;
    reload(options?: MyPluginOptions): void;
}

interface MyPluginOptions {
    elem: string | HTMLElement | JQuery;
}

interface MyPluginReturn {
    reload(options: MyPluginOptions): void;
}
```

然后在 `Layui.GlobalModules` 上声明一个你的模块的类型属性

```typescript
declare global {
  namespace Layui{
    interface GlobalModules{
      MyPlugin: MyPlugin;
    }
  }
}
```
# 贡献

欢迎提交 PR 完善类型定义

此项目基于 [@types/layui-src](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/layui-src) 制作