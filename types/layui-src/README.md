# 1、关于

typescript for layui 2.6.8

github:https://github.com/javabitar

origin project:https://github.com/sentsin/layui/releases/tag/v2.6.8

# 2、版本差异

2.6.8 较之前的 2.5.5 版本用法区别：

| 改变     | v2.5.5 （@types/layui@2.5）   | v2.6.8(@types/layui@2.6)     |
| -------- | ----------------------------- | ---------------------------- |
| 导入类型 | layui.DateParam;              | Layui.DateParam;             |
| 导入模块 | import laytpl = layui.laytpl; | var laytpl = layui.laytpl;   |
|          |                               | let laytpl = layui.laytpl;   |
|          |                               | const laytpl = layui.laytpl; |
| 等等     |                               |                              |
| ......   |                               |                              |

其他变化：

> 因为 layui2.5 和 layui2.6 属于不完全兼容升级，所以变化比较多，命名保持之前版本，但是参数有大量的修复和优化，如下举例说明

1、layui.use

```js
//v2.5正确中可以这样用：
//之前，第一个参数是字符串，第二个参数函数并没有限制参数
layui.use('layer', function (a, b) {}); //v2.5正确，v2.6错误

//v2.6 修改为：
//若第一个参数是字符串，则回调最多只有一个参数
layui.use('layer', function () {}); //v2.6 正确
layui.use('layer', function (a) {}); //v2.6 正确
layui.use('layer', function (a, b) {}); //v2.6报错

/*
 变更原因：use第一个参数是模块名和回调中的参数是对应的.....
*/
```

2、layui.table.exportFile

```js
//v2.5
table.exportFile('id', ''); //v2.5正确，v2.6错误

//v2.6
table.exportFile('id'); //v2.6 正确 v2.5错误，
table.exportFile('id', []); //v2.6 正确
table.exportFile([], []); //v2.6 正确 v2.5错误，

/*
 变更原因：
 	table.exportFile的第一个参数可以是列名，第二个参数是数据可以不传.....
*/
```

以上只是简单举例，建议大家升级到 2.6 的 TS，其声明合理、完整和官方保持最大一致性。

下载并保存到 dev(打包不包含)：npm i -D @types/layui-src@2.6

# 3、持续优化

该项目虽然无人问津，但还是希望正在使用的你，遇到任何疑问、错误、补充、建议等发我邮件865189478@qq.com 基本当天能回应。

# 4、编写总结

## 4.1、js 运算符类型

在 js 的运算符中 有以下几类

1、+运算符 只作用于字符串和数字

```
"123"+1  结果是字符串："1234"
1+"1" 结果是字符串:"11"
```

2、- \* / %只作用于数字

```
// -
"12"-1 或 12-"1" 或 12-"1"    结果是数字:11
// *
10*"12 " 或 "12 "*10 或  "12"*"10"   结果是数字:120
// /
12/"10"  或 "12"/"10"  结果1.2
//  %
"123"%"2" 或 "123"%2  结果1



```

3、! 只作用于布尔型

```
js中布尔值为false的六种情况，其他转化都为true

1、undefined（未定义，找不到值时出现）
2、null（代表空值）
3、false（布尔值的false，字符串"false"布尔值为true）
4、0（数字0，字符串"0"布尔值为true）
5、NaN（无法计算结果时出现，表示"非数值"；但是typeof NaN==="number"）
6、""（双引号）或''（单引号） （空字符串，中间有空格时也是true）
```

## 4.2 类型

1、对于不确定数据类型采用 any

比如：

http 响应的数据，格式不固定，使用 any

2、如果参数是对象则用 Object

使用 Object 则不支持 1，false,""等基本类型，必须是 new 的和[]、{}赋值。

3、......等等

# 5、使用

```typescript
// 点击table中复选框，回调参数对象指定类型
layui.table.on('checkbox(test)', obj => {
    const data: Layui.TableOnCheckbox = obj;
    data.del;
    data.checked;
    data.tr[0];
    data.type;
    data.update({});
});

// 这种需要手动确定返回类型。。。
var elem = document.getElementById('btn01'); //<button id="btn01"></button>
if (elem) {
    // @ts-ignore
    const el: HTMLButtonElement = elem;
```

更多：可参考 test 实例
