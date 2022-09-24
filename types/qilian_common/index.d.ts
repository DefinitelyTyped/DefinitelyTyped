// Type definitions for qilian_common 1.0
// Definitions by: jazzg62 <https://github.com/jazzg62>

/**
 * 生成页面查询参数
 * @usage location.href='./index.html?'+buildQuery(data);
 * @param data 参数对象
 */
 declare function buildQuery(data: Object): string;

 /**
  * 获取页面所有查询参数
  */
 declare function getQuery(): Object;
 
 /**
  * 获取页面查询参数
  * @param name 键
  */
 declare function getQueryString(name: string): string;
 
 /**
  * 添加一个cookie
  * @param name 键
  * @param value 值
  * @param expireHours cookie存储时间，单位为小时
  */
 declare function addCookie(name: string, value: string, expireHours: number): void;
 
 /**
  * 获取一个cookie
  * @param name 键
  */
 declare function getCookie(name: string): string;
 
 /**
  * 删除指定cookie
  * @param name 键
  */
 declare function delCookie(name: string): void;
 
 /**
  * 检查用户是否登录
  * @param state 登录状态
  */
 declare function checkLogin(state: number | undefined): void | boolean;
 
 /**
  * 检查商家是否登录
  * @param state 登录状态
  */
 declare function checkSellerLogin(state: number | undefined): boolean;
 
 /**
  * 时间格式化
  * "M+": date.getMonth() + 1, //月份
  * "d+": date.getDate(), //日
  * "h+": date.getHours(), //小时
  * "m+": date.getMinutes(), //分
  * "s+": date.getSeconds(), //秒
  * "q+": Math.floor((date.getMonth() + 3) / 3), //季度
  * "S": date.getMilliseconds() //毫秒
  * @param date 时间
  * @param fmt 格式化正则
  */
declare function formatDate(date:Date, fmt:string): string;
 
 /**
  * 是否在微信环境内
  */
 declare function isWechat(): boolean;
 
 /**
  * 打开定位，使用前需引入jweixin并配置权限
  * @param location_wd 纬度
  * @param location_jd 经度
  * @param encoded_store_name 商家名
  * @param encoded_store_address 商家地址
  */
 declare function open_location(
     location_wd: string,
     location_jd: string,
     encoded_store_name: string,
     encoded_store_address: string
 ): void;
 
 /**
  * 生成一个唯一id， 18位
  */
 declare function generateUnionID(): string;
 
 /**
  * 检查是否在小程序环境中
  */
 declare function checkHuiHuaSheng(): boolean;
 
 /**
  * 检查是否是会员
  * @returns boolean
  */
 declare function check_gyl(): boolean;
 