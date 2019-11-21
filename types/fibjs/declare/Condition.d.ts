/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.25.0                                                   *
 *   	- date	: Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
	* @brief 条件变量对象
	* @detail 条件变量是利用纤程间共享的全局变量来进行同步的一种机制，主要包括两个动作：,1）一个线程等待某个条件成立，而将自己挂起；,2）另一个线程使条件成立，并通知等待的纤程向下执行。,,为了防止竞争，每个条件变量都需要一个Lock的配合（Lock可自行显式创建并传递进来，也可交由fibjs为您创建）,,通过使用条件变量，可以利用一个条件变量控制一批纤程的开关；,,以下是两个纤程调度的实例：,```JavaScript,var coroutine = require("coroutine");,var cond = new coroutine.Condition();,var ready = false;,var state = "ready";,,function funcwait() {,   cond.acquire();,   while (!ready),       cond.wait();,   state = "go",   cond.release();,},,coroutine.start(funcwait);,,cond.acquire();,console.log(state),ready = true;,cond.notify();,coroutine.sleep();,console.log(state);,```,will output:,```sh,ready,go,```
	*/
/// <reference path="Lock.d.ts" />
declare class Class_Condition extends Class_Lock {
	
	
	
	/**
	 * 
	 * @brief 条件变量构造函数（条件变量所需的锁由fibjs内部构造）
	 * 
	 * 
	 */
	constructor();

	/**
	 * 
	 * @brief 条件变量构造函数
	 * @param lock 使用自行构造的锁
	 * 
	 * 
	 * 
	 */
	constructor(lock: Class_Lock);

	/**
	 * 
	 * @brief 使纤程进入阻塞状态
	 * 
	 * 
	 */
	wait(): void;

	/**
	 * 
	 * @brief 通知一个被阻塞的纤程（最后加入纤程池的）向下继续执行
	 * 
	 * 
	 */
	notify(): void;

	/**
	 * 
	 * @brief 通知所有被阻塞的纤程向下继续执行
	 * 
	 * 
	 */
	notifyAll(): void;

} /** endof class */

/** endof `module Or Internal Object` */


