# 1、关于

TypeScript for layui 2.9.26

github: https://github.com/javabitar

Origin Project: https://github.com/layui/layui

# 2、使用

```shell
npm i -D @types/layui-src@2.9
```

```typescript
// 扩展模块
declare global {
  namespace Layui{
    interface GlobalModules{
      myModule: any;
    }
  }
}
```

# 3、持续优化

如果你在使用中遇到任何疑问、错误、补充、建议等发我邮件 `865189478@qq.com` 基本当天能回应。

# 5、示例

```typescript
// 点击table中复选框，回调参数对象指定类型
layui.table.on('checkbox(test)', function(obj){
    const data = obj;
    data.del;
    data.checked;
    data.tr[0];
    data.type;
    data.update({});
});
```

更多：可参考 test 示例
