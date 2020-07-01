/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *     build info:                                                               *
 *       - fibjs    : 0.25.0                                                   *
 *       - date    : Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
    * @brief 数据库连接对象，用于建立和维护一个数据库连接会话。
    * @detail 
    */

declare class Class_DbConnection extends Class__object {
    
    /**
     * class prop 
     *
     * 
     * @brief 查询当前连接数据库类型
     * 
     * @readonly
     * @type String
     */
    
    type: string
    
    
    
    /**
     * 
     * @brief 关闭当前数据库连接
     * 
     * @async
     */
    close(): void;

    /**
     * 
     * @brief 在当前数据库连接上启动一个事务
     * 
     * @async
     */
    begin(): void;

    /**
     * 
     * @brief 提交当前数据库连接上的事务
     * 
     * @async
     */
    commit(): void;

    /**
     * 
     * @brief 回滚当前数据库连接上的事务
     * 
     * @async
     */
    rollback(): void;

    /**
     * 
     * @brief 进入事务执行一个函数，并根据函数执行情况提交或者回滚
     * func 执行有三种结果：
     * * 函数正常返回，包括运行结束和主动 return，此时事务将自动提交
     * * 函数返回 false，此时事务将回滚
     * * 函数运行错误，事务自动回滚
     * 
     * @param func 以事务方式执行的函数
     * @return 返回事务是否提交，正常 commit 时返回 true, rollback 时返回 false，如果事务出错则抛出错误
     * 
     * 
     * 
     */
    trans(func: Function): boolean;

    /**
     * 
     * @brief 执行一个 sql 命令，并返回执行结果，可根据参数格式化字符串
     * 
     * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
     * @param args 可选参数列表
     * @return 返回包含结果记录的数组，如果请求是 UPDATE 或者 INSERT，返回结果还会包含 affected 和 insertId，mssql 不支持 insertId。
     * 
     * 
     * @async
     */
    execute(sql: string, ...args: any[]): any[];

    /**
     * 
     * @brief 格式化一个 sql 命令，并返回格式化结果
     * 
     * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
     * @param args 可选参数列表
     * @return 返回格式化之后的 sql 命令
     * 
     * 
     * 
     */
    format(sql: string, ...args: any[]): string;

} /** endof class */

/** endof `module Or Internal Object` */


