/**
 * 运行时类型断言脚本
 * 
 * 此文件使用 TypeScript 的结构化类型系统来验证运行时对象
 * 不检查精确类型，而是验证结构兼容性
 * 
 * 优势：
 * - 利用 TS 的 "鸭子类型" 自动推断
 * - 检查对象是否具有所需的属性和方法
 * - 允许实际类型比声明类型更具体
 * - 支持检查构造函数类型的静态属性和实例属性
 * - 使用 InstanceType<typeof T> 推断实例类型，无需实际创建实例
 * 
 * 使用方法：
 * 1. 在 JS 运行时环境中运行 generate-type-checks-v2.js
 * 2. 将输出复制到此文件
 * 3. 运行 tsc --noEmit 检查类型错误
 */

// @ts-check

// ==================== 类型定义 ====================

/**
 * ClearScript HostObject 类型
 * 表示从 C# 传递到 JavaScript 的宿主对象
 */
type HostObject = any;

/**
 * ClearScript HostInvocable 类型
 * 表示可以从 JavaScript 调用的宿主对象
 */
type HostInvocable = any;

/**
 * 未知类型
 * 用于表示无法确定的类型
 */
type Unknown = any;

// ==================== 类型断言辅助函数 ====================

/**
 * 类型守卫：验证对象具有指定的结构
 * TypeScript 会自动检查 actual 是否可以赋值给 expected 的类型
 */
function assertStructure<T>(actual: T, expected: T): T {
  return actual;
}

/**
 * 验证属性存在性
 */
function assertHasProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

/**
 * 验证方法可调用性（支持函数和构造函数）
 */
/* eslint-disable-next-line  @typescript-eslint/no-unsafe-function-type */
function assertCallable<T extends Function>(fn: T): T {
  return fn;
}

// ==================== 全局变量类型断言 ====================

// keyMouseScript - instance
if (typeof keyMouseScript !== 'undefined') {
  // keyMouseScript.run: Function
  if ('run' in keyMouseScript && typeof keyMouseScript.run === 'function') {
    assertCallable(keyMouseScript.run);
  }
  // keyMouseScript.runFile: Function
  if ('runFile' in keyMouseScript && typeof keyMouseScript.runFile === 'function') {
    assertCallable(keyMouseScript.runFile);
  }
}

// pathingScript - instance
if (typeof pathingScript !== 'undefined') {
  // pathingScript.run: Function
  if ('run' in pathingScript && typeof pathingScript.run === 'function') {
    assertCallable(pathingScript.run);
  }
  // pathingScript.runFile: Function
  if ('runFile' in pathingScript && typeof pathingScript.runFile === 'function') {
    assertCallable(pathingScript.runFile);
  }
  // pathingScript.runFileFromUser: Function
  if ('runFileFromUser' in pathingScript && typeof pathingScript.runFileFromUser === 'function') {
    assertCallable(pathingScript.runFileFromUser);
  }
}

// genshin - instance
if (typeof genshin !== 'undefined') {
  // genshin.width: number
  if ('width' in genshin) {
    const _prop_genshin_width: number = genshin.width;
  }
  // genshin.height: number
  if ('height' in genshin) {
    const _prop_genshin_height: number = genshin.height;
  }
  // genshin.scaleTo1080PRatio: number
  if ('scaleTo1080PRatio' in genshin) {
    const _prop_genshin_scaleTo1080PRatio: number = genshin.scaleTo1080PRatio;
  }
  // genshin.screenDpiScale: number
  if ('screenDpiScale' in genshin) {
    const _prop_genshin_screenDpiScale: number = genshin.screenDpiScale;
  }
  // genshin.lazyNavigationInstance: HostObject
  if ('lazyNavigationInstance' in genshin) {
    const _nested_genshin_lazyNavigationInstance = genshin.lazyNavigationInstance;
    // genshin.lazyNavigationInstance.isValueCreated: boolean
    if ('isValueCreated' in genshin.lazyNavigationInstance) {
      const _prop_genshin_lazyNavigationInstance_isValueCreated: boolean = genshin.lazyNavigationInstance.isValueCreated;
    }
    // genshin.lazyNavigationInstance.value: HostObject
    if ('value' in genshin.lazyNavigationInstance) {
      const _nested_genshin_lazyNavigationInstance_value = genshin.lazyNavigationInstance.value;
      // genshin.lazyNavigationInstance.value.reset: Function
      if ('reset' in genshin.lazyNavigationInstance.value && typeof genshin.lazyNavigationInstance.value.reset === 'function') {
        assertCallable(genshin.lazyNavigationInstance.value.reset);
      }
      // genshin.lazyNavigationInstance.value.setPrevPosition: Function
      if ('setPrevPosition' in genshin.lazyNavigationInstance.value && typeof genshin.lazyNavigationInstance.value.setPrevPosition === 'function') {
        assertCallable(genshin.lazyNavigationInstance.value.setPrevPosition);
      }
      // genshin.lazyNavigationInstance.value.getPosition: Function
      if ('getPosition' in genshin.lazyNavigationInstance.value && typeof genshin.lazyNavigationInstance.value.getPosition === 'function') {
        assertCallable(genshin.lazyNavigationInstance.value.getPosition);
      }
      // genshin.lazyNavigationInstance.value.getPositionStable: Function
      if ('getPositionStable' in genshin.lazyNavigationInstance.value && typeof genshin.lazyNavigationInstance.value.getPositionStable === 'function') {
        assertCallable(genshin.lazyNavigationInstance.value.getPositionStable);
      }
      // genshin.lazyNavigationInstance.value.getPositionStableByCache: Function
      if ('getPositionStableByCache' in genshin.lazyNavigationInstance.value && typeof genshin.lazyNavigationInstance.value.getPositionStableByCache === 'function') {
        assertCallable(genshin.lazyNavigationInstance.value.getPositionStableByCache);
      }
    }
  }
  // genshin.tp: Function
  if ('tp' in genshin && typeof genshin.tp === 'function') {
    assertCallable(genshin.tp);
  }
  // genshin.moveMapTo: Function
  if ('moveMapTo' in genshin && typeof genshin.moveMapTo === 'function') {
    assertCallable(genshin.moveMapTo);
  }
  // genshin.moveIndependentMapTo: Function
  if ('moveIndependentMapTo' in genshin && typeof genshin.moveIndependentMapTo === 'function') {
    assertCallable(genshin.moveIndependentMapTo);
  }
  // genshin.getBigMapZoomLevel: Function
  if ('getBigMapZoomLevel' in genshin && typeof genshin.getBigMapZoomLevel === 'function') {
    assertCallable(genshin.getBigMapZoomLevel);
  }
  // genshin.setBigMapZoomLevel: Function
  if ('setBigMapZoomLevel' in genshin && typeof genshin.setBigMapZoomLevel === 'function') {
    assertCallable(genshin.setBigMapZoomLevel);
  }
  // genshin.tpToStatueOfTheSeven: Function
  if ('tpToStatueOfTheSeven' in genshin && typeof genshin.tpToStatueOfTheSeven === 'function') {
    assertCallable(genshin.tpToStatueOfTheSeven);
  }
  // genshin.getPositionFromBigMap: Function
  if ('getPositionFromBigMap' in genshin && typeof genshin.getPositionFromBigMap === 'function') {
    assertCallable(genshin.getPositionFromBigMap);
  }
  // genshin.getPositionFromMap: Function
  if ('getPositionFromMap' in genshin && typeof genshin.getPositionFromMap === 'function') {
    assertCallable(genshin.getPositionFromMap);
  }
  // genshin.getCameraOrientation: Function
  if ('getCameraOrientation' in genshin && typeof genshin.getCameraOrientation === 'function') {
    assertCallable(genshin.getCameraOrientation);
  }
  // genshin.switchParty: Function
  if ('switchParty' in genshin && typeof genshin.switchParty === 'function') {
    assertCallable(genshin.switchParty);
  }
  // genshin.clearPartyCache: Function
  if ('clearPartyCache' in genshin && typeof genshin.clearPartyCache === 'function') {
    assertCallable(genshin.clearPartyCache);
  }
  // genshin.blessingOfTheWelkinMoon: Function
  if ('blessingOfTheWelkinMoon' in genshin && typeof genshin.blessingOfTheWelkinMoon === 'function') {
    assertCallable(genshin.blessingOfTheWelkinMoon);
  }
  // genshin.chooseTalkOption: Function
  if ('chooseTalkOption' in genshin && typeof genshin.chooseTalkOption === 'function') {
    assertCallable(genshin.chooseTalkOption);
  }
  // genshin.claimBattlePassRewards: Function
  if ('claimBattlePassRewards' in genshin && typeof genshin.claimBattlePassRewards === 'function') {
    assertCallable(genshin.claimBattlePassRewards);
  }
  // genshin.claimEncounterPointsRewards: Function
  if ('claimEncounterPointsRewards' in genshin && typeof genshin.claimEncounterPointsRewards === 'function') {
    assertCallable(genshin.claimEncounterPointsRewards);
  }
  // genshin.goToAdventurersGuild: Function
  if ('goToAdventurersGuild' in genshin && typeof genshin.goToAdventurersGuild === 'function') {
    assertCallable(genshin.goToAdventurersGuild);
  }
  // genshin.goToCraftingBench: Function
  if ('goToCraftingBench' in genshin && typeof genshin.goToCraftingBench === 'function') {
    assertCallable(genshin.goToCraftingBench);
  }
  // genshin.returnMainUi: Function
  if ('returnMainUi' in genshin && typeof genshin.returnMainUi === 'function') {
    assertCallable(genshin.returnMainUi);
  }
  // genshin.autoFishing: Function
  if ('autoFishing' in genshin && typeof genshin.autoFishing === 'function') {
    assertCallable(genshin.autoFishing);
  }
  // genshin.relogin: Function
  if ('relogin' in genshin && typeof genshin.relogin === 'function') {
    assertCallable(genshin.relogin);
  }
}

// log - instance
if (typeof log !== 'undefined') {
  // log.debug: Function
  if ('debug' in log && typeof log.debug === 'function') {
    assertCallable(log.debug);
  }
  // log.info: Function
  if ('info' in log && typeof log.info === 'function') {
    assertCallable(log.info);
  }
  // log.warn: Function
  if ('warn' in log && typeof log.warn === 'function') {
    assertCallable(log.warn);
  }
  // log.error: Function
  if ('error' in log && typeof log.error === 'function') {
    assertCallable(log.error);
  }
}

// file - instance
if (typeof file !== 'undefined') {
  // file.readPathSync: Function
  if ('readPathSync' in file && typeof file.readPathSync === 'function') {
    assertCallable(file.readPathSync);
  }
  // file.isFolder: Function
  if ('isFolder' in file && typeof file.isFolder === 'function') {
    assertCallable(file.isFolder);
  }
  // file.readTextSync: Function
  if ('readTextSync' in file && typeof file.readTextSync === 'function') {
    assertCallable(file.readTextSync);
  }
  // file.readText: Function
  if ('readText' in file && typeof file.readText === 'function') {
    assertCallable(file.readText);
  }
  // file.readImageMatSync: Function
  if ('readImageMatSync' in file && typeof file.readImageMatSync === 'function') {
    assertCallable(file.readImageMatSync);
  }
  // file.writeTextSync: Function
  if ('writeTextSync' in file && typeof file.writeTextSync === 'function') {
    assertCallable(file.writeTextSync);
  }
  // file.writeText: Function
  if ('writeText' in file && typeof file.writeText === 'function') {
    assertCallable(file.writeText);
  }
  // file.writeImageSync: Function
  if ('writeImageSync' in file && typeof file.writeImageSync === 'function') {
    assertCallable(file.writeImageSync);
  }
}

// http - instance
if (typeof http !== 'undefined') {
  // http.request: Function
  if ('request' in http && typeof http.request === 'function') {
    assertCallable(http.request);
  }
}

// notification - instance
if (typeof notification !== 'undefined') {
  // notification.send: Function
  if ('send' in notification && typeof notification.send === 'function') {
    assertCallable(notification.send);
  }
  // notification.error: Function
  if ('error' in notification && typeof notification.error === 'function') {
    assertCallable(notification.error);
  }
}

// dispatcher - instance
if (typeof dispatcher !== 'undefined') {
  // dispatcher.runTask: Function
  if ('runTask' in dispatcher && typeof dispatcher.runTask === 'function') {
    assertCallable(dispatcher.runTask);
  }
  // dispatcher.addTimer: Function
  if ('addTimer' in dispatcher && typeof dispatcher.addTimer === 'function') {
    assertCallable(dispatcher.addTimer);
  }
  // dispatcher.clearAllTriggers: Function
  if ('clearAllTriggers' in dispatcher && typeof dispatcher.clearAllTriggers === 'function') {
    assertCallable(dispatcher.clearAllTriggers);
  }
  // dispatcher.addTrigger: Function
  if ('addTrigger' in dispatcher && typeof dispatcher.addTrigger === 'function') {
    assertCallable(dispatcher.addTrigger);
  }
  // dispatcher.getLinkedCancellationTokenSource: Function
  if ('getLinkedCancellationTokenSource' in dispatcher && typeof dispatcher.getLinkedCancellationTokenSource === 'function') {
    assertCallable(dispatcher.getLinkedCancellationTokenSource);
  }
  // dispatcher.getLinkedCancellationToken: Function
  if ('getLinkedCancellationToken' in dispatcher && typeof dispatcher.getLinkedCancellationToken === 'function') {
    assertCallable(dispatcher.getLinkedCancellationToken);
  }
  // dispatcher.runAutoDomainTask: Function
  if ('runAutoDomainTask' in dispatcher && typeof dispatcher.runAutoDomainTask === 'function') {
    assertCallable(dispatcher.runAutoDomainTask);
  }
  // dispatcher.runAutoFightTask: Function
  if ('runAutoFightTask' in dispatcher && typeof dispatcher.runAutoFightTask === 'function') {
    assertCallable(dispatcher.runAutoFightTask);
  }
}

// RealtimeTimer - function (Constructor)
if (typeof RealtimeTimer !== 'undefined') {
  // 验证 RealtimeTimer 是一个可调用的函数
  assertCallable(RealtimeTimer);
  // RealtimeTimer 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_RealtimeTimer = InstanceType<typeof RealtimeTimer>;
    const _checkInstance_RealtimeTimer: Partial<_Instance_RealtimeTimer> = {} as any;

    // 检查实例属性 config: Unknown
    if ('config' in _checkInstance_RealtimeTimer) {
      const _instProp_RealtimeTimer_config: Unknown = _checkInstance_RealtimeTimer.config!;
    }
    // 检查实例属性 name: Unknown
    if ('name' in _checkInstance_RealtimeTimer) {
      const _instProp_RealtimeTimer_name: Unknown = _checkInstance_RealtimeTimer.name!;
    }
    // 检查实例属性 interval: Unknown
    if ('interval' in _checkInstance_RealtimeTimer) {
      const _instProp_RealtimeTimer_interval: Unknown = _checkInstance_RealtimeTimer.interval!;
    }
  }
}

// SoloTask - function (Constructor)
if (typeof SoloTask !== 'undefined') {
  // 验证 SoloTask 是一个可调用的函数
  assertCallable(SoloTask);
  // SoloTask 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_SoloTask = InstanceType<typeof SoloTask>;
    const _checkInstance_SoloTask: Partial<_Instance_SoloTask> = {} as any;

    // 检查实例属性 name: Unknown
    if ('name' in _checkInstance_SoloTask) {
      const _instProp_SoloTask_name: Unknown = _checkInstance_SoloTask.name!;
    }
    // 检查实例属性 config: Unknown
    if ('config' in _checkInstance_SoloTask) {
      const _instProp_SoloTask_config: Unknown = _checkInstance_SoloTask.config!;
    }
  }
}

// CancellationTokenSource - function (Constructor)
if (typeof CancellationTokenSource !== 'undefined') {
  // 验证 CancellationTokenSource 是一个可调用的函数
  assertCallable(CancellationTokenSource);
  // CancellationTokenSource 的静态方法
  if ('createLinkedTokenSource' in CancellationTokenSource && typeof CancellationTokenSource.createLinkedTokenSource === 'function') {
    assertCallable(CancellationTokenSource.createLinkedTokenSource);
  }
  // CancellationTokenSource 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_CancellationTokenSource = InstanceType<typeof CancellationTokenSource>;
    const _checkInstance_CancellationTokenSource: Partial<_Instance_CancellationTokenSource> = {} as any;

    // 检查实例属性 isCancellationRequested: Unknown
    if ('isCancellationRequested' in _checkInstance_CancellationTokenSource) {
      const _instProp_CancellationTokenSource_isCancellationRequested: Unknown = _checkInstance_CancellationTokenSource.isCancellationRequested!;
    }
    // 检查实例属性 token: Unknown
    if ('token' in _checkInstance_CancellationTokenSource) {
      const _instProp_CancellationTokenSource_token: Unknown = _checkInstance_CancellationTokenSource.token!;
    }
    // 检查实例方法 cancel
    if ('cancel' in _checkInstance_CancellationTokenSource && typeof _checkInstance_CancellationTokenSource.cancel === 'function') {
      assertCallable(_checkInstance_CancellationTokenSource.cancel!);
    }
    // 检查实例方法 cancelAsync
    if ('cancelAsync' in _checkInstance_CancellationTokenSource && typeof _checkInstance_CancellationTokenSource.cancelAsync === 'function') {
      assertCallable(_checkInstance_CancellationTokenSource.cancelAsync!);
    }
    // 检查实例方法 cancelAfter
    if ('cancelAfter' in _checkInstance_CancellationTokenSource && typeof _checkInstance_CancellationTokenSource.cancelAfter === 'function') {
      assertCallable(_checkInstance_CancellationTokenSource.cancelAfter!);
    }
    // 检查实例方法 tryReset
    if ('tryReset' in _checkInstance_CancellationTokenSource && typeof _checkInstance_CancellationTokenSource.tryReset === 'function') {
      assertCallable(_checkInstance_CancellationTokenSource.tryReset!);
    }
    // 检查实例方法 dispose
    if ('dispose' in _checkInstance_CancellationTokenSource && typeof _checkInstance_CancellationTokenSource.dispose === 'function') {
      assertCallable(_checkInstance_CancellationTokenSource.dispose!);
    }
  }
}

// CancellationToken - function (Constructor)
if (typeof CancellationToken !== 'undefined') {
  // 验证 CancellationToken 是一个可调用的函数
  assertCallable(CancellationToken);
  // CancellationToken 的静态属性
  if ('none' in CancellationToken) {
    const _prop_CancellationToken_none: HostObject = CancellationToken.none;
  }
  // CancellationToken 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_CancellationToken = InstanceType<typeof CancellationToken>;
    const _checkInstance_CancellationToken: Partial<_Instance_CancellationToken> = {} as any;

    // 检查实例属性 isCancellationRequested: Unknown
    if ('isCancellationRequested' in _checkInstance_CancellationToken) {
      const _instProp_CancellationToken_isCancellationRequested: Unknown = _checkInstance_CancellationToken.isCancellationRequested!;
    }
    // 检查实例属性 canBeCanceled: Unknown
    if ('canBeCanceled' in _checkInstance_CancellationToken) {
      const _instProp_CancellationToken_canBeCanceled: Unknown = _checkInstance_CancellationToken.canBeCanceled!;
    }
    // 检查实例属性 waitHandle: Unknown
    if ('waitHandle' in _checkInstance_CancellationToken) {
      const _instProp_CancellationToken_waitHandle: Unknown = _checkInstance_CancellationToken.waitHandle!;
    }
    // 检查实例方法 register
    if ('register' in _checkInstance_CancellationToken && typeof _checkInstance_CancellationToken.register === 'function') {
      assertCallable(_checkInstance_CancellationToken.register!);
    }
    // 检查实例方法 unsafeRegister
    if ('unsafeRegister' in _checkInstance_CancellationToken && typeof _checkInstance_CancellationToken.unsafeRegister === 'function') {
      assertCallable(_checkInstance_CancellationToken.unsafeRegister!);
    }
    // 检查实例方法 throwIfCancellationRequested
    if ('throwIfCancellationRequested' in _checkInstance_CancellationToken && typeof _checkInstance_CancellationToken.throwIfCancellationRequested === 'function') {
      assertCallable(_checkInstance_CancellationToken.throwIfCancellationRequested!);
    }
  }
}

// PostMessage - function (Constructor)
if (typeof PostMessage !== 'undefined') {
  // 验证 PostMessage 是一个可调用的函数
  assertCallable(PostMessage);
  // PostMessage 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_PostMessage = InstanceType<typeof PostMessage>;
    const _checkInstance_PostMessage: Partial<_Instance_PostMessage> = {} as any;

    // 检查实例方法 keyDown
    if ('keyDown' in _checkInstance_PostMessage && typeof _checkInstance_PostMessage.keyDown === 'function') {
      assertCallable(_checkInstance_PostMessage.keyDown!);
    }
    // 检查实例方法 keyUp
    if ('keyUp' in _checkInstance_PostMessage && typeof _checkInstance_PostMessage.keyUp === 'function') {
      assertCallable(_checkInstance_PostMessage.keyUp!);
    }
    // 检查实例方法 keyPress
    if ('keyPress' in _checkInstance_PostMessage && typeof _checkInstance_PostMessage.keyPress === 'function') {
      assertCallable(_checkInstance_PostMessage.keyPress!);
    }
    // 检查实例方法 click
    if ('click' in _checkInstance_PostMessage && typeof _checkInstance_PostMessage.click === 'function') {
      assertCallable(_checkInstance_PostMessage.click!);
    }
  }
}

// sleep - function
if (typeof sleep !== 'undefined') {
  // 验证 sleep 是一个可调用的函数
  assertCallable(sleep);
}

// keyDown - function
if (typeof keyDown !== 'undefined') {
  // 验证 keyDown 是一个可调用的函数
  assertCallable(keyDown);
}

// keyUp - function
if (typeof keyUp !== 'undefined') {
  // 验证 keyUp 是一个可调用的函数
  assertCallable(keyUp);
}

// keyPress - function
if (typeof keyPress !== 'undefined') {
  // 验证 keyPress 是一个可调用的函数
  assertCallable(keyPress);
}

// setGameMetrics - function
if (typeof setGameMetrics !== 'undefined') {
  // 验证 setGameMetrics 是一个可调用的函数
  assertCallable(setGameMetrics);
}

// moveMouseBy - function
if (typeof moveMouseBy !== 'undefined') {
  // 验证 moveMouseBy 是一个可调用的函数
  assertCallable(moveMouseBy);
}

// moveMouseTo - function
if (typeof moveMouseTo !== 'undefined') {
  // 验证 moveMouseTo 是一个可调用的函数
  assertCallable(moveMouseTo);
}

// click - function
if (typeof click !== 'undefined') {
  // 验证 click 是一个可调用的函数
  assertCallable(click);
}

// leftButtonClick - function
if (typeof leftButtonClick !== 'undefined') {
  // 验证 leftButtonClick 是一个可调用的函数
  assertCallable(leftButtonClick);
}

// leftButtonDown - function
if (typeof leftButtonDown !== 'undefined') {
  // 验证 leftButtonDown 是一个可调用的函数
  assertCallable(leftButtonDown);
}

// leftButtonUp - function
if (typeof leftButtonUp !== 'undefined') {
  // 验证 leftButtonUp 是一个可调用的函数
  assertCallable(leftButtonUp);
}

// rightButtonClick - function
if (typeof rightButtonClick !== 'undefined') {
  // 验证 rightButtonClick 是一个可调用的函数
  assertCallable(rightButtonClick);
}

// rightButtonDown - function
if (typeof rightButtonDown !== 'undefined') {
  // 验证 rightButtonDown 是一个可调用的函数
  assertCallable(rightButtonDown);
}

// rightButtonUp - function
if (typeof rightButtonUp !== 'undefined') {
  // 验证 rightButtonUp 是一个可调用的函数
  assertCallable(rightButtonUp);
}

// middleButtonClick - function
if (typeof middleButtonClick !== 'undefined') {
  // 验证 middleButtonClick 是一个可调用的函数
  assertCallable(middleButtonClick);
}

// middleButtonDown - function
if (typeof middleButtonDown !== 'undefined') {
  // 验证 middleButtonDown 是一个可调用的函数
  assertCallable(middleButtonDown);
}

// middleButtonUp - function
if (typeof middleButtonUp !== 'undefined') {
  // 验证 middleButtonUp 是一个可调用的函数
  assertCallable(middleButtonUp);
}

// verticalScroll - function
if (typeof verticalScroll !== 'undefined') {
  // 验证 verticalScroll 是一个可调用的函数
  assertCallable(verticalScroll);
}

// captureGameRegion - function
if (typeof captureGameRegion !== 'undefined') {
  // 验证 captureGameRegion 是一个可调用的函数
  assertCallable(captureGameRegion);
}

// getAvatars - function
if (typeof getAvatars !== 'undefined') {
  // 验证 getAvatars 是一个可调用的函数
  assertCallable(getAvatars);
}

// inputText - function
if (typeof inputText !== 'undefined') {
  // 验证 inputText 是一个可调用的函数
  assertCallable(inputText);
}

// Mat - function (Constructor)
if (typeof Mat !== 'undefined') {
  // 验证 Mat 是一个可调用的函数
  assertCallable(Mat);
  // Mat 的静态属性
  if ('indexer' in Mat) {
    const _prop_Mat_indexer: Unknown = Mat.indexer;
  }
  if ('unsafeIndexer' in Mat) {
    const _prop_Mat_unsafeIndexer: Unknown = Mat.unsafeIndexer;
  }
  // Mat 的静态方法
  if ('fromNativePointer' in Mat && typeof Mat.fromNativePointer === 'function') {
    assertCallable(Mat.fromNativePointer);
  }
  if ('fromPixelData' in Mat && typeof Mat.fromPixelData === 'function') {
    assertCallable(Mat.fromPixelData);
  }
  if ('fromStream' in Mat && typeof Mat.fromStream === 'function') {
    assertCallable(Mat.fromStream);
  }
  if ('imDecode' in Mat && typeof Mat.imDecode === 'function') {
    assertCallable(Mat.imDecode);
  }
  if ('fromImageData' in Mat && typeof Mat.fromImageData === 'function') {
    assertCallable(Mat.fromImageData);
  }
  if ('diag' in Mat && typeof Mat.diag === 'function') {
    assertCallable(Mat.diag);
  }
  if ('zeros' in Mat && typeof Mat.zeros === 'function') {
    assertCallable(Mat.zeros);
  }
  if ('ones' in Mat && typeof Mat.ones === 'function') {
    assertCallable(Mat.ones);
  }
  if ('eye' in Mat && typeof Mat.eye === 'function') {
    assertCallable(Mat.eye);
  }
  if ('fromArray' in Mat && typeof Mat.fromArray === 'function') {
    assertCallable(Mat.fromArray);
  }
  // Mat 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_Mat = InstanceType<typeof Mat>;
    const _checkInstance_Mat: Partial<_Instance_Mat> = {} as any;

    // 检查实例属性 flags: Unknown
    if ('flags' in _checkInstance_Mat) {
      const _instProp_Mat_flags: Unknown = _checkInstance_Mat.flags!;
    }
    // 检查实例属性 dims: Unknown
    if ('dims' in _checkInstance_Mat) {
      const _instProp_Mat_dims: Unknown = _checkInstance_Mat.dims!;
    }
    // 检查实例属性 rows: Unknown
    if ('rows' in _checkInstance_Mat) {
      const _instProp_Mat_rows: Unknown = _checkInstance_Mat.rows!;
    }
    // 检查实例属性 height: Unknown
    if ('height' in _checkInstance_Mat) {
      const _instProp_Mat_height: Unknown = _checkInstance_Mat.height!;
    }
    // 检查实例属性 cols: Unknown
    if ('cols' in _checkInstance_Mat) {
      const _instProp_Mat_cols: Unknown = _checkInstance_Mat.cols!;
    }
    // 检查实例属性 width: Unknown
    if ('width' in _checkInstance_Mat) {
      const _instProp_Mat_width: Unknown = _checkInstance_Mat.width!;
    }
    // 检查实例属性 data: Unknown
    if ('data' in _checkInstance_Mat) {
      const _instProp_Mat_data: Unknown = _checkInstance_Mat.data!;
    }
    // 检查实例属性 dataPointer: Unknown
    if ('dataPointer' in _checkInstance_Mat) {
      const _instProp_Mat_dataPointer: Unknown = _checkInstance_Mat.dataPointer!;
    }
    // 检查实例属性 dataStart: Unknown
    if ('dataStart' in _checkInstance_Mat) {
      const _instProp_Mat_dataStart: Unknown = _checkInstance_Mat.dataStart!;
    }
    // 检查实例属性 dataEnd: Unknown
    if ('dataEnd' in _checkInstance_Mat) {
      const _instProp_Mat_dataEnd: Unknown = _checkInstance_Mat.dataEnd!;
    }
    // 检查实例属性 dataLimit: Unknown
    if ('dataLimit' in _checkInstance_Mat) {
      const _instProp_Mat_dataLimit: Unknown = _checkInstance_Mat.dataLimit!;
    }
    // 检查实例属性 cvPtr: Unknown
    if ('cvPtr' in _checkInstance_Mat) {
      const _instProp_Mat_cvPtr: Unknown = _checkInstance_Mat.cvPtr!;
    }
    // 检查实例属性 isDisposed: Unknown
    if ('isDisposed' in _checkInstance_Mat) {
      const _instProp_Mat_isDisposed: Unknown = _checkInstance_Mat.isDisposed!;
    }
    // 检查实例属性 isEnabledDispose: Unknown
    if ('isEnabledDispose' in _checkInstance_Mat) {
      const _instProp_Mat_isEnabledDispose: Unknown = _checkInstance_Mat.isEnabledDispose!;
    }
    // 检查实例方法 release
    if ('release' in _checkInstance_Mat && typeof _checkInstance_Mat.release === 'function') {
      assertCallable(_checkInstance_Mat.release!);
    }
    // 检查实例方法 plus
    if ('plus' in _checkInstance_Mat && typeof _checkInstance_Mat.plus === 'function') {
      assertCallable(_checkInstance_Mat.plus!);
    }
    // 检查实例方法 negate
    if ('negate' in _checkInstance_Mat && typeof _checkInstance_Mat.negate === 'function') {
      assertCallable(_checkInstance_Mat.negate!);
    }
    // 检查实例方法 add
    if ('add' in _checkInstance_Mat && typeof _checkInstance_Mat.add === 'function') {
      assertCallable(_checkInstance_Mat.add!);
    }
    // 检查实例方法 subtract
    if ('subtract' in _checkInstance_Mat && typeof _checkInstance_Mat.subtract === 'function') {
      assertCallable(_checkInstance_Mat.subtract!);
    }
    // 检查实例方法 multiply
    if ('multiply' in _checkInstance_Mat && typeof _checkInstance_Mat.multiply === 'function') {
      assertCallable(_checkInstance_Mat.multiply!);
    }
    // 检查实例方法 divide
    if ('divide' in _checkInstance_Mat && typeof _checkInstance_Mat.divide === 'function') {
      assertCallable(_checkInstance_Mat.divide!);
    }
    // 检查实例方法 bitwiseAnd
    if ('bitwiseAnd' in _checkInstance_Mat && typeof _checkInstance_Mat.bitwiseAnd === 'function') {
      assertCallable(_checkInstance_Mat.bitwiseAnd!);
    }
    // 检查实例方法 bitwiseOr
    if ('bitwiseOr' in _checkInstance_Mat && typeof _checkInstance_Mat.bitwiseOr === 'function') {
      assertCallable(_checkInstance_Mat.bitwiseOr!);
    }
    // 检查实例方法 xor
    if ('xor' in _checkInstance_Mat && typeof _checkInstance_Mat.xor === 'function') {
      assertCallable(_checkInstance_Mat.xor!);
    }
    // 检查实例方法 onesComplement
    if ('onesComplement' in _checkInstance_Mat && typeof _checkInstance_Mat.onesComplement === 'function') {
      assertCallable(_checkInstance_Mat.onesComplement!);
    }
    // 检查实例方法 lessThan
    if ('lessThan' in _checkInstance_Mat && typeof _checkInstance_Mat.lessThan === 'function') {
      assertCallable(_checkInstance_Mat.lessThan!);
    }
    // 检查实例方法 lessThanOrEqual
    if ('lessThanOrEqual' in _checkInstance_Mat && typeof _checkInstance_Mat.lessThanOrEqual === 'function') {
      assertCallable(_checkInstance_Mat.lessThanOrEqual!);
    }
    // 检查实例方法 notEquals
    if ('notEquals' in _checkInstance_Mat && typeof _checkInstance_Mat.notEquals === 'function') {
      assertCallable(_checkInstance_Mat.notEquals!);
    }
    // 检查实例方法 greaterThan
    if ('greaterThan' in _checkInstance_Mat && typeof _checkInstance_Mat.greaterThan === 'function') {
      assertCallable(_checkInstance_Mat.greaterThan!);
    }
    // 检查实例方法 greaterThanOrEqual
    if ('greaterThanOrEqual' in _checkInstance_Mat && typeof _checkInstance_Mat.greaterThanOrEqual === 'function') {
      assertCallable(_checkInstance_Mat.greaterThanOrEqual!);
    }
    // 检查实例方法 getUMat
    if ('getUMat' in _checkInstance_Mat && typeof _checkInstance_Mat.getUMat === 'function') {
      assertCallable(_checkInstance_Mat.getUMat!);
    }
    // 检查实例方法 col
    if ('col' in _checkInstance_Mat && typeof _checkInstance_Mat.col === 'function') {
      assertCallable(_checkInstance_Mat.col!);
    }
    // 检查实例方法 colRange
    if ('colRange' in _checkInstance_Mat && typeof _checkInstance_Mat.colRange === 'function') {
      assertCallable(_checkInstance_Mat.colRange!);
    }
    // 检查实例方法 row
    if ('row' in _checkInstance_Mat && typeof _checkInstance_Mat.row === 'function') {
      assertCallable(_checkInstance_Mat.row!);
    }
    // 检查实例方法 rowRange
    if ('rowRange' in _checkInstance_Mat && typeof _checkInstance_Mat.rowRange === 'function') {
      assertCallable(_checkInstance_Mat.rowRange!);
    }
    // 检查实例方法 diag
    if ('diag' in _checkInstance_Mat && typeof _checkInstance_Mat.diag === 'function') {
      assertCallable(_checkInstance_Mat.diag!);
    }
    // 检查实例方法 clone
    if ('clone' in _checkInstance_Mat && typeof _checkInstance_Mat.clone === 'function') {
      assertCallable(_checkInstance_Mat.clone!);
    }
    // 检查实例方法 copyTo
    if ('copyTo' in _checkInstance_Mat && typeof _checkInstance_Mat.copyTo === 'function') {
      assertCallable(_checkInstance_Mat.copyTo!);
    }
    // 检查实例方法 convertTo
    if ('convertTo' in _checkInstance_Mat && typeof _checkInstance_Mat.convertTo === 'function') {
      assertCallable(_checkInstance_Mat.convertTo!);
    }
    // 检查实例方法 assignTo
    if ('assignTo' in _checkInstance_Mat && typeof _checkInstance_Mat.assignTo === 'function') {
      assertCallable(_checkInstance_Mat.assignTo!);
    }
    // 检查实例方法 setTo
    if ('setTo' in _checkInstance_Mat && typeof _checkInstance_Mat.setTo === 'function') {
      assertCallable(_checkInstance_Mat.setTo!);
    }
    // 检查实例方法 reshape
    if ('reshape' in _checkInstance_Mat && typeof _checkInstance_Mat.reshape === 'function') {
      assertCallable(_checkInstance_Mat.reshape!);
    }
    // 检查实例方法 t
    if ('t' in _checkInstance_Mat && typeof _checkInstance_Mat.t === 'function') {
      assertCallable(_checkInstance_Mat.t!);
    }
    // 检查实例方法 inv
    if ('inv' in _checkInstance_Mat && typeof _checkInstance_Mat.inv === 'function') {
      assertCallable(_checkInstance_Mat.inv!);
    }
    // 检查实例方法 mul
    if ('mul' in _checkInstance_Mat && typeof _checkInstance_Mat.mul === 'function') {
      assertCallable(_checkInstance_Mat.mul!);
    }
    // 检查实例方法 cross
    if ('cross' in _checkInstance_Mat && typeof _checkInstance_Mat.cross === 'function') {
      assertCallable(_checkInstance_Mat.cross!);
    }
    // 检查实例方法 dot
    if ('dot' in _checkInstance_Mat && typeof _checkInstance_Mat.dot === 'function') {
      assertCallable(_checkInstance_Mat.dot!);
    }
    // 检查实例方法 create
    if ('create' in _checkInstance_Mat && typeof _checkInstance_Mat.create === 'function') {
      assertCallable(_checkInstance_Mat.create!);
    }
    // 检查实例方法 reserve
    if ('reserve' in _checkInstance_Mat && typeof _checkInstance_Mat.reserve === 'function') {
      assertCallable(_checkInstance_Mat.reserve!);
    }
    // 检查实例方法 reserveBuffer
    if ('reserveBuffer' in _checkInstance_Mat && typeof _checkInstance_Mat.reserveBuffer === 'function') {
      assertCallable(_checkInstance_Mat.reserveBuffer!);
    }
    // 检查实例方法 resize
    if ('resize' in _checkInstance_Mat && typeof _checkInstance_Mat.resize === 'function') {
      assertCallable(_checkInstance_Mat.resize!);
    }
    // 检查实例方法 popBack
    if ('popBack' in _checkInstance_Mat && typeof _checkInstance_Mat.popBack === 'function') {
      assertCallable(_checkInstance_Mat.popBack!);
    }
    // 检查实例方法 pushBack
    if ('pushBack' in _checkInstance_Mat && typeof _checkInstance_Mat.pushBack === 'function') {
      assertCallable(_checkInstance_Mat.pushBack!);
    }
    // 检查实例方法 locateROI
    if ('locateROI' in _checkInstance_Mat && typeof _checkInstance_Mat.locateROI === 'function') {
      assertCallable(_checkInstance_Mat.locateROI!);
    }
    // 检查实例方法 adjustROI
    if ('adjustROI' in _checkInstance_Mat && typeof _checkInstance_Mat.adjustROI === 'function') {
      assertCallable(_checkInstance_Mat.adjustROI!);
    }
    // 检查实例方法 subMat
    if ('subMat' in _checkInstance_Mat && typeof _checkInstance_Mat.subMat === 'function') {
      assertCallable(_checkInstance_Mat.subMat!);
    }
    // 检查实例方法 isContinuous
    if ('isContinuous' in _checkInstance_Mat && typeof _checkInstance_Mat.isContinuous === 'function') {
      assertCallable(_checkInstance_Mat.isContinuous!);
    }
    // 检查实例方法 isSubmatrix
    if ('isSubmatrix' in _checkInstance_Mat && typeof _checkInstance_Mat.isSubmatrix === 'function') {
      assertCallable(_checkInstance_Mat.isSubmatrix!);
    }
    // 检查实例方法 elemSize
    if ('elemSize' in _checkInstance_Mat && typeof _checkInstance_Mat.elemSize === 'function') {
      assertCallable(_checkInstance_Mat.elemSize!);
    }
    // 检查实例方法 elemSize1
    if ('elemSize1' in _checkInstance_Mat && typeof _checkInstance_Mat.elemSize1 === 'function') {
      assertCallable(_checkInstance_Mat.elemSize1!);
    }
    // 检查实例方法 type
    if ('type' in _checkInstance_Mat && typeof _checkInstance_Mat.type === 'function') {
      assertCallable(_checkInstance_Mat.type!);
    }
    // 检查实例方法 depth
    if ('depth' in _checkInstance_Mat && typeof _checkInstance_Mat.depth === 'function') {
      assertCallable(_checkInstance_Mat.depth!);
    }
    // 检查实例方法 channels
    if ('channels' in _checkInstance_Mat && typeof _checkInstance_Mat.channels === 'function') {
      assertCallable(_checkInstance_Mat.channels!);
    }
    // 检查实例方法 step1
    if ('step1' in _checkInstance_Mat && typeof _checkInstance_Mat.step1 === 'function') {
      assertCallable(_checkInstance_Mat.step1!);
    }
    // 检查实例方法 empty
    if ('empty' in _checkInstance_Mat && typeof _checkInstance_Mat.empty === 'function') {
      assertCallable(_checkInstance_Mat.empty!);
    }
    // 检查实例方法 total
    if ('total' in _checkInstance_Mat && typeof _checkInstance_Mat.total === 'function') {
      assertCallable(_checkInstance_Mat.total!);
    }
    // 检查实例方法 checkVector
    if ('checkVector' in _checkInstance_Mat && typeof _checkInstance_Mat.checkVector === 'function') {
      assertCallable(_checkInstance_Mat.checkVector!);
    }
    // 检查实例方法 ptr
    if ('ptr' in _checkInstance_Mat && typeof _checkInstance_Mat.ptr === 'function') {
      assertCallable(_checkInstance_Mat.ptr!);
    }
    // 检查实例方法 size
    if ('size' in _checkInstance_Mat && typeof _checkInstance_Mat.size === 'function') {
      assertCallable(_checkInstance_Mat.size!);
    }
    // 检查实例方法 step
    if ('step' in _checkInstance_Mat && typeof _checkInstance_Mat.step === 'function') {
      assertCallable(_checkInstance_Mat.step!);
    }
    // 检查实例方法 dump
    if ('dump' in _checkInstance_Mat && typeof _checkInstance_Mat.dump === 'function') {
      assertCallable(_checkInstance_Mat.dump!);
    }
    // 检查实例方法 emptyClone
    if ('emptyClone' in _checkInstance_Mat && typeof _checkInstance_Mat.emptyClone === 'function') {
      assertCallable(_checkInstance_Mat.emptyClone!);
    }
    // 检查实例方法 getGenericIndexer
    if ('getGenericIndexer' in _checkInstance_Mat && typeof _checkInstance_Mat.getGenericIndexer === 'function') {
      assertCallable(_checkInstance_Mat.getGenericIndexer!);
    }
    // 检查实例方法 getUnsafeGenericIndexer
    if ('getUnsafeGenericIndexer' in _checkInstance_Mat && typeof _checkInstance_Mat.getUnsafeGenericIndexer === 'function') {
      assertCallable(_checkInstance_Mat.getUnsafeGenericIndexer!);
    }
    // 检查实例方法 get
    if ('get' in _checkInstance_Mat && typeof _checkInstance_Mat.get === 'function') {
      assertCallable(_checkInstance_Mat.get!);
    }
    // 检查实例方法 at
    if ('at' in _checkInstance_Mat && typeof _checkInstance_Mat.at === 'function') {
      assertCallable(_checkInstance_Mat.at!);
    }
    // 检查实例方法 set
    if ('set' in _checkInstance_Mat && typeof _checkInstance_Mat.set === 'function') {
      assertCallable(_checkInstance_Mat.set!);
    }
    // 检查实例方法 getArray
    if ('getArray' in _checkInstance_Mat && typeof _checkInstance_Mat.getArray === 'function') {
      assertCallable(_checkInstance_Mat.getArray!);
    }
    // 检查实例方法 getRectangularArray
    if ('getRectangularArray' in _checkInstance_Mat && typeof _checkInstance_Mat.getRectangularArray === 'function') {
      assertCallable(_checkInstance_Mat.getRectangularArray!);
    }
    // 检查实例方法 setArray
    if ('setArray' in _checkInstance_Mat && typeof _checkInstance_Mat.setArray === 'function') {
      assertCallable(_checkInstance_Mat.setArray!);
    }
    // 检查实例方法 setRectangularArray
    if ('setRectangularArray' in _checkInstance_Mat && typeof _checkInstance_Mat.setRectangularArray === 'function') {
      assertCallable(_checkInstance_Mat.setRectangularArray!);
    }
    // 检查实例方法 toBytes
    if ('toBytes' in _checkInstance_Mat && typeof _checkInstance_Mat.toBytes === 'function') {
      assertCallable(_checkInstance_Mat.toBytes!);
    }
    // 检查实例方法 toMemoryStream
    if ('toMemoryStream' in _checkInstance_Mat && typeof _checkInstance_Mat.toMemoryStream === 'function') {
      assertCallable(_checkInstance_Mat.toMemoryStream!);
    }
    // 检查实例方法 writeToStream
    if ('writeToStream' in _checkInstance_Mat && typeof _checkInstance_Mat.writeToStream === 'function') {
      assertCallable(_checkInstance_Mat.writeToStream!);
    }
    // 检查实例方法 alignment
    if ('alignment' in _checkInstance_Mat && typeof _checkInstance_Mat.alignment === 'function') {
      assertCallable(_checkInstance_Mat.alignment!);
    }
    // 检查实例方法 cast
    if ('cast' in _checkInstance_Mat && typeof _checkInstance_Mat.cast === 'function') {
      assertCallable(_checkInstance_Mat.cast!);
    }
    // 检查实例方法 forEachAsByte
    if ('forEachAsByte' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsByte === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsByte!);
    }
    // 检查实例方法 forEachAsVec2b
    if ('forEachAsVec2b' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec2b === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec2b!);
    }
    // 检查实例方法 forEachAsVec3b
    if ('forEachAsVec3b' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec3b === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec3b!);
    }
    // 检查实例方法 forEachAsVec4b
    if ('forEachAsVec4b' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec4b === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec4b!);
    }
    // 检查实例方法 forEachAsVec6b
    if ('forEachAsVec6b' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec6b === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec6b!);
    }
    // 检查实例方法 forEachAsInt16
    if ('forEachAsInt16' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsInt16 === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsInt16!);
    }
    // 检查实例方法 forEachAsVec2s
    if ('forEachAsVec2s' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec2s === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec2s!);
    }
    // 检查实例方法 forEachAsVec3s
    if ('forEachAsVec3s' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec3s === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec3s!);
    }
    // 检查实例方法 forEachAsVec4s
    if ('forEachAsVec4s' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec4s === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec4s!);
    }
    // 检查实例方法 forEachAsVec6s
    if ('forEachAsVec6s' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec6s === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec6s!);
    }
    // 检查实例方法 forEachAsInt32
    if ('forEachAsInt32' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsInt32 === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsInt32!);
    }
    // 检查实例方法 forEachAsVec2i
    if ('forEachAsVec2i' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec2i === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec2i!);
    }
    // 检查实例方法 forEachAsVec3i
    if ('forEachAsVec3i' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec3i === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec3i!);
    }
    // 检查实例方法 forEachAsVec4i
    if ('forEachAsVec4i' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec4i === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec4i!);
    }
    // 检查实例方法 forEachAsVec6i
    if ('forEachAsVec6i' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec6i === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec6i!);
    }
    // 检查实例方法 forEachAsFloat
    if ('forEachAsFloat' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsFloat === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsFloat!);
    }
    // 检查实例方法 forEachAsVec2f
    if ('forEachAsVec2f' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec2f === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec2f!);
    }
    // 检查实例方法 forEachAsVec3f
    if ('forEachAsVec3f' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec3f === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec3f!);
    }
    // 检查实例方法 forEachAsVec4f
    if ('forEachAsVec4f' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec4f === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec4f!);
    }
    // 检查实例方法 forEachAsVec6f
    if ('forEachAsVec6f' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec6f === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec6f!);
    }
    // 检查实例方法 forEachAsDouble
    if ('forEachAsDouble' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsDouble === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsDouble!);
    }
    // 检查实例方法 forEachAsVec2d
    if ('forEachAsVec2d' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec2d === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec2d!);
    }
    // 检查实例方法 forEachAsVec3d
    if ('forEachAsVec3d' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec3d === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec3d!);
    }
    // 检查实例方法 forEachAsVec4d
    if ('forEachAsVec4d' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec4d === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec4d!);
    }
    // 检查实例方法 forEachAsVec6d
    if ('forEachAsVec6d' in _checkInstance_Mat && typeof _checkInstance_Mat.forEachAsVec6d === 'function') {
      assertCallable(_checkInstance_Mat.forEachAsVec6d!);
    }
    // 检查实例方法 asSpan
    if ('asSpan' in _checkInstance_Mat && typeof _checkInstance_Mat.asSpan === 'function') {
      assertCallable(_checkInstance_Mat.asSpan!);
    }
    // 检查实例方法 abs
    if ('abs' in _checkInstance_Mat && typeof _checkInstance_Mat.abs === 'function') {
      assertCallable(_checkInstance_Mat.abs!);
    }
    // 检查实例方法 convertScaleAbs
    if ('convertScaleAbs' in _checkInstance_Mat && typeof _checkInstance_Mat.convertScaleAbs === 'function') {
      assertCallable(_checkInstance_Mat.convertScaleAbs!);
    }
    // 检查实例方法 lUT
    if ('lUT' in _checkInstance_Mat && typeof _checkInstance_Mat.lUT === 'function') {
      assertCallable(_checkInstance_Mat.lUT!);
    }
    // 检查实例方法 sum
    if ('sum' in _checkInstance_Mat && typeof _checkInstance_Mat.sum === 'function') {
      assertCallable(_checkInstance_Mat.sum!);
    }
    // 检查实例方法 countNonZero
    if ('countNonZero' in _checkInstance_Mat && typeof _checkInstance_Mat.countNonZero === 'function') {
      assertCallable(_checkInstance_Mat.countNonZero!);
    }
    // 检查实例方法 findNonZero
    if ('findNonZero' in _checkInstance_Mat && typeof _checkInstance_Mat.findNonZero === 'function') {
      assertCallable(_checkInstance_Mat.findNonZero!);
    }
    // 检查实例方法 mean
    if ('mean' in _checkInstance_Mat && typeof _checkInstance_Mat.mean === 'function') {
      assertCallable(_checkInstance_Mat.mean!);
    }
    // 检查实例方法 meanStdDev
    if ('meanStdDev' in _checkInstance_Mat && typeof _checkInstance_Mat.meanStdDev === 'function') {
      assertCallable(_checkInstance_Mat.meanStdDev!);
    }
    // 检查实例方法 norm
    if ('norm' in _checkInstance_Mat && typeof _checkInstance_Mat.norm === 'function') {
      assertCallable(_checkInstance_Mat.norm!);
    }
    // 检查实例方法 normalize
    if ('normalize' in _checkInstance_Mat && typeof _checkInstance_Mat.normalize === 'function') {
      assertCallable(_checkInstance_Mat.normalize!);
    }
    // 检查实例方法 minMaxLoc
    if ('minMaxLoc' in _checkInstance_Mat && typeof _checkInstance_Mat.minMaxLoc === 'function') {
      assertCallable(_checkInstance_Mat.minMaxLoc!);
    }
    // 检查实例方法 minMaxIdx
    if ('minMaxIdx' in _checkInstance_Mat && typeof _checkInstance_Mat.minMaxIdx === 'function') {
      assertCallable(_checkInstance_Mat.minMaxIdx!);
    }
    // 检查实例方法 reduce
    if ('reduce' in _checkInstance_Mat && typeof _checkInstance_Mat.reduce === 'function') {
      assertCallable(_checkInstance_Mat.reduce!);
    }
    // 检查实例方法 split
    if ('split' in _checkInstance_Mat && typeof _checkInstance_Mat.split === 'function') {
      assertCallable(_checkInstance_Mat.split!);
    }
    // 检查实例方法 extractChannel
    if ('extractChannel' in _checkInstance_Mat && typeof _checkInstance_Mat.extractChannel === 'function') {
      assertCallable(_checkInstance_Mat.extractChannel!);
    }
    // 检查实例方法 insertChannel
    if ('insertChannel' in _checkInstance_Mat && typeof _checkInstance_Mat.insertChannel === 'function') {
      assertCallable(_checkInstance_Mat.insertChannel!);
    }
    // 检查实例方法 flip
    if ('flip' in _checkInstance_Mat && typeof _checkInstance_Mat.flip === 'function') {
      assertCallable(_checkInstance_Mat.flip!);
    }
    // 检查实例方法 repeat
    if ('repeat' in _checkInstance_Mat && typeof _checkInstance_Mat.repeat === 'function') {
      assertCallable(_checkInstance_Mat.repeat!);
    }
    // 检查实例方法 inRange
    if ('inRange' in _checkInstance_Mat && typeof _checkInstance_Mat.inRange === 'function') {
      assertCallable(_checkInstance_Mat.inRange!);
    }
    // 检查实例方法 sqrt
    if ('sqrt' in _checkInstance_Mat && typeof _checkInstance_Mat.sqrt === 'function') {
      assertCallable(_checkInstance_Mat.sqrt!);
    }
    // 检查实例方法 pow
    if ('pow' in _checkInstance_Mat && typeof _checkInstance_Mat.pow === 'function') {
      assertCallable(_checkInstance_Mat.pow!);
    }
    // 检查实例方法 exp
    if ('exp' in _checkInstance_Mat && typeof _checkInstance_Mat.exp === 'function') {
      assertCallable(_checkInstance_Mat.exp!);
    }
    // 检查实例方法 log
    if ('log' in _checkInstance_Mat && typeof _checkInstance_Mat.log === 'function') {
      assertCallable(_checkInstance_Mat.log!);
    }
    // 检查实例方法 checkRange
    if ('checkRange' in _checkInstance_Mat && typeof _checkInstance_Mat.checkRange === 'function') {
      assertCallable(_checkInstance_Mat.checkRange!);
    }
    // 检查实例方法 patchNaNs
    if ('patchNaNs' in _checkInstance_Mat && typeof _checkInstance_Mat.patchNaNs === 'function') {
      assertCallable(_checkInstance_Mat.patchNaNs!);
    }
    // 检查实例方法 mulTransposed
    if ('mulTransposed' in _checkInstance_Mat && typeof _checkInstance_Mat.mulTransposed === 'function') {
      assertCallable(_checkInstance_Mat.mulTransposed!);
    }
    // 检查实例方法 transpose
    if ('transpose' in _checkInstance_Mat && typeof _checkInstance_Mat.transpose === 'function') {
      assertCallable(_checkInstance_Mat.transpose!);
    }
    // 检查实例方法 transform
    if ('transform' in _checkInstance_Mat && typeof _checkInstance_Mat.transform === 'function') {
      assertCallable(_checkInstance_Mat.transform!);
    }
    // 检查实例方法 perspectiveTransform
    if ('perspectiveTransform' in _checkInstance_Mat && typeof _checkInstance_Mat.perspectiveTransform === 'function') {
      assertCallable(_checkInstance_Mat.perspectiveTransform!);
    }
    // 检查实例方法 completeSymm
    if ('completeSymm' in _checkInstance_Mat && typeof _checkInstance_Mat.completeSymm === 'function') {
      assertCallable(_checkInstance_Mat.completeSymm!);
    }
    // 检查实例方法 setIdentity
    if ('setIdentity' in _checkInstance_Mat && typeof _checkInstance_Mat.setIdentity === 'function') {
      assertCallable(_checkInstance_Mat.setIdentity!);
    }
    // 检查实例方法 determinant
    if ('determinant' in _checkInstance_Mat && typeof _checkInstance_Mat.determinant === 'function') {
      assertCallable(_checkInstance_Mat.determinant!);
    }
    // 检查实例方法 trace
    if ('trace' in _checkInstance_Mat && typeof _checkInstance_Mat.trace === 'function') {
      assertCallable(_checkInstance_Mat.trace!);
    }
    // 检查实例方法 sort
    if ('sort' in _checkInstance_Mat && typeof _checkInstance_Mat.sort === 'function') {
      assertCallable(_checkInstance_Mat.sort!);
    }
    // 检查实例方法 sortIdx
    if ('sortIdx' in _checkInstance_Mat && typeof _checkInstance_Mat.sortIdx === 'function') {
      assertCallable(_checkInstance_Mat.sortIdx!);
    }
    // 检查实例方法 dft
    if ('dft' in _checkInstance_Mat && typeof _checkInstance_Mat.dft === 'function') {
      assertCallable(_checkInstance_Mat.dft!);
    }
    // 检查实例方法 idft
    if ('idft' in _checkInstance_Mat && typeof _checkInstance_Mat.idft === 'function') {
      assertCallable(_checkInstance_Mat.idft!);
    }
    // 检查实例方法 dct
    if ('dct' in _checkInstance_Mat && typeof _checkInstance_Mat.dct === 'function') {
      assertCallable(_checkInstance_Mat.dct!);
    }
    // 检查实例方法 idct
    if ('idct' in _checkInstance_Mat && typeof _checkInstance_Mat.idct === 'function') {
      assertCallable(_checkInstance_Mat.idct!);
    }
    // 检查实例方法 randu
    if ('randu' in _checkInstance_Mat && typeof _checkInstance_Mat.randu === 'function') {
      assertCallable(_checkInstance_Mat.randu!);
    }
    // 检查实例方法 randn
    if ('randn' in _checkInstance_Mat && typeof _checkInstance_Mat.randn === 'function') {
      assertCallable(_checkInstance_Mat.randn!);
    }
    // 检查实例方法 randShuffle
    if ('randShuffle' in _checkInstance_Mat && typeof _checkInstance_Mat.randShuffle === 'function') {
      assertCallable(_checkInstance_Mat.randShuffle!);
    }
    // 检查实例方法 line
    if ('line' in _checkInstance_Mat && typeof _checkInstance_Mat.line === 'function') {
      assertCallable(_checkInstance_Mat.line!);
    }
    // 检查实例方法 rectangle
    if ('rectangle' in _checkInstance_Mat && typeof _checkInstance_Mat.rectangle === 'function') {
      assertCallable(_checkInstance_Mat.rectangle!);
    }
    // 检查实例方法 circle
    if ('circle' in _checkInstance_Mat && typeof _checkInstance_Mat.circle === 'function') {
      assertCallable(_checkInstance_Mat.circle!);
    }
    // 检查实例方法 ellipse
    if ('ellipse' in _checkInstance_Mat && typeof _checkInstance_Mat.ellipse === 'function') {
      assertCallable(_checkInstance_Mat.ellipse!);
    }
    // 检查实例方法 drawMarker
    if ('drawMarker' in _checkInstance_Mat && typeof _checkInstance_Mat.drawMarker === 'function') {
      assertCallable(_checkInstance_Mat.drawMarker!);
    }
    // 检查实例方法 fillConvexPoly
    if ('fillConvexPoly' in _checkInstance_Mat && typeof _checkInstance_Mat.fillConvexPoly === 'function') {
      assertCallable(_checkInstance_Mat.fillConvexPoly!);
    }
    // 检查实例方法 fillPoly
    if ('fillPoly' in _checkInstance_Mat && typeof _checkInstance_Mat.fillPoly === 'function') {
      assertCallable(_checkInstance_Mat.fillPoly!);
    }
    // 检查实例方法 polylines
    if ('polylines' in _checkInstance_Mat && typeof _checkInstance_Mat.polylines === 'function') {
      assertCallable(_checkInstance_Mat.polylines!);
    }
    // 检查实例方法 putText
    if ('putText' in _checkInstance_Mat && typeof _checkInstance_Mat.putText === 'function') {
      assertCallable(_checkInstance_Mat.putText!);
    }
    // 检查实例方法 imEncode
    if ('imEncode' in _checkInstance_Mat && typeof _checkInstance_Mat.imEncode === 'function') {
      assertCallable(_checkInstance_Mat.imEncode!);
    }
    // 检查实例方法 imWrite
    if ('imWrite' in _checkInstance_Mat && typeof _checkInstance_Mat.imWrite === 'function') {
      assertCallable(_checkInstance_Mat.imWrite!);
    }
    // 检查实例方法 saveImage
    if ('saveImage' in _checkInstance_Mat && typeof _checkInstance_Mat.saveImage === 'function') {
      assertCallable(_checkInstance_Mat.saveImage!);
    }
    // 检查实例方法 copyMakeBorder
    if ('copyMakeBorder' in _checkInstance_Mat && typeof _checkInstance_Mat.copyMakeBorder === 'function') {
      assertCallable(_checkInstance_Mat.copyMakeBorder!);
    }
    // 检查实例方法 medianBlur
    if ('medianBlur' in _checkInstance_Mat && typeof _checkInstance_Mat.medianBlur === 'function') {
      assertCallable(_checkInstance_Mat.medianBlur!);
    }
    // 检查实例方法 gaussianBlur
    if ('gaussianBlur' in _checkInstance_Mat && typeof _checkInstance_Mat.gaussianBlur === 'function') {
      assertCallable(_checkInstance_Mat.gaussianBlur!);
    }
    // 检查实例方法 bilateralFilter
    if ('bilateralFilter' in _checkInstance_Mat && typeof _checkInstance_Mat.bilateralFilter === 'function') {
      assertCallable(_checkInstance_Mat.bilateralFilter!);
    }
    // 检查实例方法 boxFilter
    if ('boxFilter' in _checkInstance_Mat && typeof _checkInstance_Mat.boxFilter === 'function') {
      assertCallable(_checkInstance_Mat.boxFilter!);
    }
    // 检查实例方法 blur
    if ('blur' in _checkInstance_Mat && typeof _checkInstance_Mat.blur === 'function') {
      assertCallable(_checkInstance_Mat.blur!);
    }
    // 检查实例方法 filter2D
    if ('filter2D' in _checkInstance_Mat && typeof _checkInstance_Mat.filter2D === 'function') {
      assertCallable(_checkInstance_Mat.filter2D!);
    }
    // 检查实例方法 sepFilter2D
    if ('sepFilter2D' in _checkInstance_Mat && typeof _checkInstance_Mat.sepFilter2D === 'function') {
      assertCallable(_checkInstance_Mat.sepFilter2D!);
    }
    // 检查实例方法 sobel
    if ('sobel' in _checkInstance_Mat && typeof _checkInstance_Mat.sobel === 'function') {
      assertCallable(_checkInstance_Mat.sobel!);
    }
    // 检查实例方法 scharr
    if ('scharr' in _checkInstance_Mat && typeof _checkInstance_Mat.scharr === 'function') {
      assertCallable(_checkInstance_Mat.scharr!);
    }
    // 检查实例方法 laplacian
    if ('laplacian' in _checkInstance_Mat && typeof _checkInstance_Mat.laplacian === 'function') {
      assertCallable(_checkInstance_Mat.laplacian!);
    }
    // 检查实例方法 canny
    if ('canny' in _checkInstance_Mat && typeof _checkInstance_Mat.canny === 'function') {
      assertCallable(_checkInstance_Mat.canny!);
    }
    // 检查实例方法 cornerEigenValsAndVecs
    if ('cornerEigenValsAndVecs' in _checkInstance_Mat && typeof _checkInstance_Mat.cornerEigenValsAndVecs === 'function') {
      assertCallable(_checkInstance_Mat.cornerEigenValsAndVecs!);
    }
    // 检查实例方法 preCornerDetect
    if ('preCornerDetect' in _checkInstance_Mat && typeof _checkInstance_Mat.preCornerDetect === 'function') {
      assertCallable(_checkInstance_Mat.preCornerDetect!);
    }
    // 检查实例方法 cornerSubPix
    if ('cornerSubPix' in _checkInstance_Mat && typeof _checkInstance_Mat.cornerSubPix === 'function') {
      assertCallable(_checkInstance_Mat.cornerSubPix!);
    }
    // 检查实例方法 goodFeaturesToTrack
    if ('goodFeaturesToTrack' in _checkInstance_Mat && typeof _checkInstance_Mat.goodFeaturesToTrack === 'function') {
      assertCallable(_checkInstance_Mat.goodFeaturesToTrack!);
    }
    // 检查实例方法 houghLines
    if ('houghLines' in _checkInstance_Mat && typeof _checkInstance_Mat.houghLines === 'function') {
      assertCallable(_checkInstance_Mat.houghLines!);
    }
    // 检查实例方法 houghLinesP
    if ('houghLinesP' in _checkInstance_Mat && typeof _checkInstance_Mat.houghLinesP === 'function') {
      assertCallable(_checkInstance_Mat.houghLinesP!);
    }
    // 检查实例方法 houghCircles
    if ('houghCircles' in _checkInstance_Mat && typeof _checkInstance_Mat.houghCircles === 'function') {
      assertCallable(_checkInstance_Mat.houghCircles!);
    }
    // 检查实例方法 dilate
    if ('dilate' in _checkInstance_Mat && typeof _checkInstance_Mat.dilate === 'function') {
      assertCallable(_checkInstance_Mat.dilate!);
    }
    // 检查实例方法 erode
    if ('erode' in _checkInstance_Mat && typeof _checkInstance_Mat.erode === 'function') {
      assertCallable(_checkInstance_Mat.erode!);
    }
    // 检查实例方法 morphologyEx
    if ('morphologyEx' in _checkInstance_Mat && typeof _checkInstance_Mat.morphologyEx === 'function') {
      assertCallable(_checkInstance_Mat.morphologyEx!);
    }
    // 检查实例方法 warpAffine
    if ('warpAffine' in _checkInstance_Mat && typeof _checkInstance_Mat.warpAffine === 'function') {
      assertCallable(_checkInstance_Mat.warpAffine!);
    }
    // 检查实例方法 warpPerspective
    if ('warpPerspective' in _checkInstance_Mat && typeof _checkInstance_Mat.warpPerspective === 'function') {
      assertCallable(_checkInstance_Mat.warpPerspective!);
    }
    // 检查实例方法 remap
    if ('remap' in _checkInstance_Mat && typeof _checkInstance_Mat.remap === 'function') {
      assertCallable(_checkInstance_Mat.remap!);
    }
    // 检查实例方法 invertAffineTransform
    if ('invertAffineTransform' in _checkInstance_Mat && typeof _checkInstance_Mat.invertAffineTransform === 'function') {
      assertCallable(_checkInstance_Mat.invertAffineTransform!);
    }
    // 检查实例方法 getRectSubPix
    if ('getRectSubPix' in _checkInstance_Mat && typeof _checkInstance_Mat.getRectSubPix === 'function') {
      assertCallable(_checkInstance_Mat.getRectSubPix!);
    }
    // 检查实例方法 accumulate
    if ('accumulate' in _checkInstance_Mat && typeof _checkInstance_Mat.accumulate === 'function') {
      assertCallable(_checkInstance_Mat.accumulate!);
    }
    // 检查实例方法 accumulateSquare
    if ('accumulateSquare' in _checkInstance_Mat && typeof _checkInstance_Mat.accumulateSquare === 'function') {
      assertCallable(_checkInstance_Mat.accumulateSquare!);
    }
    // 检查实例方法 createHanningWindow
    if ('createHanningWindow' in _checkInstance_Mat && typeof _checkInstance_Mat.createHanningWindow === 'function') {
      assertCallable(_checkInstance_Mat.createHanningWindow!);
    }
    // 检查实例方法 threshold
    if ('threshold' in _checkInstance_Mat && typeof _checkInstance_Mat.threshold === 'function') {
      assertCallable(_checkInstance_Mat.threshold!);
    }
    // 检查实例方法 adaptiveThreshold
    if ('adaptiveThreshold' in _checkInstance_Mat && typeof _checkInstance_Mat.adaptiveThreshold === 'function') {
      assertCallable(_checkInstance_Mat.adaptiveThreshold!);
    }
    // 检查实例方法 pyrDown
    if ('pyrDown' in _checkInstance_Mat && typeof _checkInstance_Mat.pyrDown === 'function') {
      assertCallable(_checkInstance_Mat.pyrDown!);
    }
    // 检查实例方法 pyrUp
    if ('pyrUp' in _checkInstance_Mat && typeof _checkInstance_Mat.pyrUp === 'function') {
      assertCallable(_checkInstance_Mat.pyrUp!);
    }
    // 检查实例方法 buildPyramid
    if ('buildPyramid' in _checkInstance_Mat && typeof _checkInstance_Mat.buildPyramid === 'function') {
      assertCallable(_checkInstance_Mat.buildPyramid!);
    }
    // 检查实例方法 undistort
    if ('undistort' in _checkInstance_Mat && typeof _checkInstance_Mat.undistort === 'function') {
      assertCallable(_checkInstance_Mat.undistort!);
    }
    // 检查实例方法 getDefaultNewCameraMatrix
    if ('getDefaultNewCameraMatrix' in _checkInstance_Mat && typeof _checkInstance_Mat.getDefaultNewCameraMatrix === 'function') {
      assertCallable(_checkInstance_Mat.getDefaultNewCameraMatrix!);
    }
    // 检查实例方法 undistortPoints
    if ('undistortPoints' in _checkInstance_Mat && typeof _checkInstance_Mat.undistortPoints === 'function') {
      assertCallable(_checkInstance_Mat.undistortPoints!);
    }
    // 检查实例方法 equalizeHist
    if ('equalizeHist' in _checkInstance_Mat && typeof _checkInstance_Mat.equalizeHist === 'function') {
      assertCallable(_checkInstance_Mat.equalizeHist!);
    }
    // 检查实例方法 watershed
    if ('watershed' in _checkInstance_Mat && typeof _checkInstance_Mat.watershed === 'function') {
      assertCallable(_checkInstance_Mat.watershed!);
    }
    // 检查实例方法 pyrMeanShiftFiltering
    if ('pyrMeanShiftFiltering' in _checkInstance_Mat && typeof _checkInstance_Mat.pyrMeanShiftFiltering === 'function') {
      assertCallable(_checkInstance_Mat.pyrMeanShiftFiltering!);
    }
    // 检查实例方法 grabCut
    if ('grabCut' in _checkInstance_Mat && typeof _checkInstance_Mat.grabCut === 'function') {
      assertCallable(_checkInstance_Mat.grabCut!);
    }
    // 检查实例方法 floodFill
    if ('floodFill' in _checkInstance_Mat && typeof _checkInstance_Mat.floodFill === 'function') {
      assertCallable(_checkInstance_Mat.floodFill!);
    }
    // 检查实例方法 cvtColor
    if ('cvtColor' in _checkInstance_Mat && typeof _checkInstance_Mat.cvtColor === 'function') {
      assertCallable(_checkInstance_Mat.cvtColor!);
    }
    // 检查实例方法 moments
    if ('moments' in _checkInstance_Mat && typeof _checkInstance_Mat.moments === 'function') {
      assertCallable(_checkInstance_Mat.moments!);
    }
    // 检查实例方法 matchTemplate
    if ('matchTemplate' in _checkInstance_Mat && typeof _checkInstance_Mat.matchTemplate === 'function') {
      assertCallable(_checkInstance_Mat.matchTemplate!);
    }
    // 检查实例方法 connectedComponents
    if ('connectedComponents' in _checkInstance_Mat && typeof _checkInstance_Mat.connectedComponents === 'function') {
      assertCallable(_checkInstance_Mat.connectedComponents!);
    }
    // 检查实例方法 connectedComponentsWithStats
    if ('connectedComponentsWithStats' in _checkInstance_Mat && typeof _checkInstance_Mat.connectedComponentsWithStats === 'function') {
      assertCallable(_checkInstance_Mat.connectedComponentsWithStats!);
    }
    // 检查实例方法 connectedComponentsEx
    if ('connectedComponentsEx' in _checkInstance_Mat && typeof _checkInstance_Mat.connectedComponentsEx === 'function') {
      assertCallable(_checkInstance_Mat.connectedComponentsEx!);
    }
    // 检查实例方法 findContours
    if ('findContours' in _checkInstance_Mat && typeof _checkInstance_Mat.findContours === 'function') {
      assertCallable(_checkInstance_Mat.findContours!);
    }
    // 检查实例方法 findContoursAsArray
    if ('findContoursAsArray' in _checkInstance_Mat && typeof _checkInstance_Mat.findContoursAsArray === 'function') {
      assertCallable(_checkInstance_Mat.findContoursAsArray!);
    }
    // 检查实例方法 findContoursAsMat
    if ('findContoursAsMat' in _checkInstance_Mat && typeof _checkInstance_Mat.findContoursAsMat === 'function') {
      assertCallable(_checkInstance_Mat.findContoursAsMat!);
    }
    // 检查实例方法 drawContours
    if ('drawContours' in _checkInstance_Mat && typeof _checkInstance_Mat.drawContours === 'function') {
      assertCallable(_checkInstance_Mat.drawContours!);
    }
    // 检查实例方法 approxPolyDP
    if ('approxPolyDP' in _checkInstance_Mat && typeof _checkInstance_Mat.approxPolyDP === 'function') {
      assertCallable(_checkInstance_Mat.approxPolyDP!);
    }
    // 检查实例方法 arcLength
    if ('arcLength' in _checkInstance_Mat && typeof _checkInstance_Mat.arcLength === 'function') {
      assertCallable(_checkInstance_Mat.arcLength!);
    }
    // 检查实例方法 boundingRect
    if ('boundingRect' in _checkInstance_Mat && typeof _checkInstance_Mat.boundingRect === 'function') {
      assertCallable(_checkInstance_Mat.boundingRect!);
    }
    // 检查实例方法 contourArea
    if ('contourArea' in _checkInstance_Mat && typeof _checkInstance_Mat.contourArea === 'function') {
      assertCallable(_checkInstance_Mat.contourArea!);
    }
    // 检查实例方法 minAreaRect
    if ('minAreaRect' in _checkInstance_Mat && typeof _checkInstance_Mat.minAreaRect === 'function') {
      assertCallable(_checkInstance_Mat.minAreaRect!);
    }
    // 检查实例方法 minEnclosingCircle
    if ('minEnclosingCircle' in _checkInstance_Mat && typeof _checkInstance_Mat.minEnclosingCircle === 'function') {
      assertCallable(_checkInstance_Mat.minEnclosingCircle!);
    }
    // 检查实例方法 convexHull
    if ('convexHull' in _checkInstance_Mat && typeof _checkInstance_Mat.convexHull === 'function') {
      assertCallable(_checkInstance_Mat.convexHull!);
    }
    // 检查实例方法 convexHullPoints
    if ('convexHullPoints' in _checkInstance_Mat && typeof _checkInstance_Mat.convexHullPoints === 'function') {
      assertCallable(_checkInstance_Mat.convexHullPoints!);
    }
    // 检查实例方法 convexHullFloatPoints
    if ('convexHullFloatPoints' in _checkInstance_Mat && typeof _checkInstance_Mat.convexHullFloatPoints === 'function') {
      assertCallable(_checkInstance_Mat.convexHullFloatPoints!);
    }
    // 检查实例方法 convexHullIndices
    if ('convexHullIndices' in _checkInstance_Mat && typeof _checkInstance_Mat.convexHullIndices === 'function') {
      assertCallable(_checkInstance_Mat.convexHullIndices!);
    }
    // 检查实例方法 convexityDefects
    if ('convexityDefects' in _checkInstance_Mat && typeof _checkInstance_Mat.convexityDefects === 'function') {
      assertCallable(_checkInstance_Mat.convexityDefects!);
    }
    // 检查实例方法 convexityDefectsAsVec
    if ('convexityDefectsAsVec' in _checkInstance_Mat && typeof _checkInstance_Mat.convexityDefectsAsVec === 'function') {
      assertCallable(_checkInstance_Mat.convexityDefectsAsVec!);
    }
    // 检查实例方法 isContourConvex
    if ('isContourConvex' in _checkInstance_Mat && typeof _checkInstance_Mat.isContourConvex === 'function') {
      assertCallable(_checkInstance_Mat.isContourConvex!);
    }
    // 检查实例方法 fitEllipse
    if ('fitEllipse' in _checkInstance_Mat && typeof _checkInstance_Mat.fitEllipse === 'function') {
      assertCallable(_checkInstance_Mat.fitEllipse!);
    }
    // 检查实例方法 fitLine2D
    if ('fitLine2D' in _checkInstance_Mat && typeof _checkInstance_Mat.fitLine2D === 'function') {
      assertCallable(_checkInstance_Mat.fitLine2D!);
    }
    // 检查实例方法 fitLine3D
    if ('fitLine3D' in _checkInstance_Mat && typeof _checkInstance_Mat.fitLine3D === 'function') {
      assertCallable(_checkInstance_Mat.fitLine3D!);
    }
    // 检查实例方法 pointPolygonTest
    if ('pointPolygonTest' in _checkInstance_Mat && typeof _checkInstance_Mat.pointPolygonTest === 'function') {
      assertCallable(_checkInstance_Mat.pointPolygonTest!);
    }
    // 检查实例方法 distanceTransform
    if ('distanceTransform' in _checkInstance_Mat && typeof _checkInstance_Mat.distanceTransform === 'function') {
      assertCallable(_checkInstance_Mat.distanceTransform!);
    }
    // 检查实例方法 dispose
    if ('dispose' in _checkInstance_Mat && typeof _checkInstance_Mat.dispose === 'function') {
      assertCallable(_checkInstance_Mat.dispose!);
    }
    // 检查实例方法 throwIfDisposed
    if ('throwIfDisposed' in _checkInstance_Mat && typeof _checkInstance_Mat.throwIfDisposed === 'function') {
      assertCallable(_checkInstance_Mat.throwIfDisposed!);
    }
    // 检查实例方法 item
    if ('item' in _checkInstance_Mat && typeof _checkInstance_Mat.item === 'function') {
      assertCallable(_checkInstance_Mat.item!);
    }
  }
}

// Point2f - function (Constructor)
if (typeof Point2f !== 'undefined') {
  // 验证 Point2f 是一个可调用的函数
  assertCallable(Point2f);
  // Point2f 的静态方法
  if ('fromPoint' in Point2f && typeof Point2f.fromPoint === 'function') {
    assertCallable(Point2f.fromPoint);
  }
  if ('fromVec2f' in Point2f && typeof Point2f.fromVec2f === 'function') {
    assertCallable(Point2f.fromVec2f);
  }
  if ('distance' in Point2f && typeof Point2f.distance === 'function') {
    assertCallable(Point2f.distance);
  }
  if ('dotProduct' in Point2f && typeof Point2f.dotProduct === 'function') {
    assertCallable(Point2f.dotProduct);
  }
  if ('crossProduct' in Point2f && typeof Point2f.crossProduct === 'function') {
    assertCallable(Point2f.crossProduct);
  }
  // Point2f 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_Point2f = InstanceType<typeof Point2f>;
    const _checkInstance_Point2f: Partial<_Instance_Point2f> = {} as any;

    // 检查实例属性 x: Unknown
    if ('x' in _checkInstance_Point2f) {
      const _instProp_Point2f_x: Unknown = _checkInstance_Point2f.x!;
    }
    // 检查实例属性 y: Unknown
    if ('y' in _checkInstance_Point2f) {
      const _instProp_Point2f_y: Unknown = _checkInstance_Point2f.y!;
    }
    // 检查实例方法 toPoint
    if ('toPoint' in _checkInstance_Point2f && typeof _checkInstance_Point2f.toPoint === 'function') {
      assertCallable(_checkInstance_Point2f.toPoint!);
    }
    // 检查实例方法 toVec2f
    if ('toVec2f' in _checkInstance_Point2f && typeof _checkInstance_Point2f.toVec2f === 'function') {
      assertCallable(_checkInstance_Point2f.toVec2f!);
    }
    // 检查实例方法 plus
    if ('plus' in _checkInstance_Point2f && typeof _checkInstance_Point2f.plus === 'function') {
      assertCallable(_checkInstance_Point2f.plus!);
    }
    // 检查实例方法 negate
    if ('negate' in _checkInstance_Point2f && typeof _checkInstance_Point2f.negate === 'function') {
      assertCallable(_checkInstance_Point2f.negate!);
    }
    // 检查实例方法 add
    if ('add' in _checkInstance_Point2f && typeof _checkInstance_Point2f.add === 'function') {
      assertCallable(_checkInstance_Point2f.add!);
    }
    // 检查实例方法 subtract
    if ('subtract' in _checkInstance_Point2f && typeof _checkInstance_Point2f.subtract === 'function') {
      assertCallable(_checkInstance_Point2f.subtract!);
    }
    // 检查实例方法 multiply
    if ('multiply' in _checkInstance_Point2f && typeof _checkInstance_Point2f.multiply === 'function') {
      assertCallable(_checkInstance_Point2f.multiply!);
    }
    // 检查实例方法 distanceTo
    if ('distanceTo' in _checkInstance_Point2f && typeof _checkInstance_Point2f.distanceTo === 'function') {
      assertCallable(_checkInstance_Point2f.distanceTo!);
    }
    // 检查实例方法 dotProduct
    if ('dotProduct' in _checkInstance_Point2f && typeof _checkInstance_Point2f.dotProduct === 'function') {
      assertCallable(_checkInstance_Point2f.dotProduct!);
    }
    // 检查实例方法 crossProduct
    if ('crossProduct' in _checkInstance_Point2f && typeof _checkInstance_Point2f.crossProduct === 'function') {
      assertCallable(_checkInstance_Point2f.crossProduct!);
    }
    // 检查实例方法 deconstruct
    if ('deconstruct' in _checkInstance_Point2f && typeof _checkInstance_Point2f.deconstruct === 'function') {
      assertCallable(_checkInstance_Point2f.deconstruct!);
    }
  }
}

// RecognitionObject - function (Constructor)
if (typeof RecognitionObject !== 'undefined') {
  // 验证 RecognitionObject 是一个可调用的函数
  assertCallable(RecognitionObject);
  // RecognitionObject 的静态属性
  if ('ocrThis' in RecognitionObject) {
    const _prop_RecognitionObject_ocrThis: HostObject = RecognitionObject.ocrThis;
  }
  // RecognitionObject 的静态方法
  if ('templateMatch' in RecognitionObject && typeof RecognitionObject.templateMatch === 'function') {
    assertCallable(RecognitionObject.templateMatch);
  }
  if ('ocr' in RecognitionObject && typeof RecognitionObject.ocr === 'function') {
    assertCallable(RecognitionObject.ocr);
  }
  if ('ocrMatch' in RecognitionObject && typeof RecognitionObject.ocrMatch === 'function') {
    assertCallable(RecognitionObject.ocrMatch);
  }
  // RecognitionObject 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_RecognitionObject = InstanceType<typeof RecognitionObject>;
    const _checkInstance_RecognitionObject: Partial<_Instance_RecognitionObject> = {} as any;

    // 检查实例属性 drawOnWindowPen: Unknown
    if ('drawOnWindowPen' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_drawOnWindowPen: Unknown = _checkInstance_RecognitionObject.drawOnWindowPen!;
    }
    // 检查实例属性 recognitionType: Unknown
    if ('recognitionType' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_recognitionType: Unknown = _checkInstance_RecognitionObject.recognitionType!;
    }
    // 检查实例属性 regionOfInterest: Unknown
    if ('regionOfInterest' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_regionOfInterest: Unknown = _checkInstance_RecognitionObject.regionOfInterest!;
    }
    // 检查实例属性 name: Unknown
    if ('name' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_name: Unknown = _checkInstance_RecognitionObject.name!;
    }
    // 检查实例属性 templateImageMat: Unknown
    if ('templateImageMat' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_templateImageMat: Unknown = _checkInstance_RecognitionObject.templateImageMat!;
    }
    // 检查实例属性 templateImageGreyMat: Unknown
    if ('templateImageGreyMat' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_templateImageGreyMat: Unknown = _checkInstance_RecognitionObject.templateImageGreyMat!;
    }
    // 检查实例属性 threshold: Unknown
    if ('threshold' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_threshold: Unknown = _checkInstance_RecognitionObject.threshold!;
    }
    // 检查实例属性 use3Channels: Unknown
    if ('use3Channels' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_use3Channels: Unknown = _checkInstance_RecognitionObject.use3Channels!;
    }
    // 检查实例属性 templateMatchMode: Unknown
    if ('templateMatchMode' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_templateMatchMode: Unknown = _checkInstance_RecognitionObject.templateMatchMode!;
    }
    // 检查实例属性 useMask: Unknown
    if ('useMask' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_useMask: Unknown = _checkInstance_RecognitionObject.useMask!;
    }
    // 检查实例属性 maskColor: Unknown
    if ('maskColor' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_maskColor: Unknown = _checkInstance_RecognitionObject.maskColor!;
    }
    // 检查实例属性 maskMat: Unknown
    if ('maskMat' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_maskMat: Unknown = _checkInstance_RecognitionObject.maskMat!;
    }
    // 检查实例属性 drawOnWindow: Unknown
    if ('drawOnWindow' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_drawOnWindow: Unknown = _checkInstance_RecognitionObject.drawOnWindow!;
    }
    // 检查实例属性 maxMatchCount: Unknown
    if ('maxMatchCount' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_maxMatchCount: Unknown = _checkInstance_RecognitionObject.maxMatchCount!;
    }
    // 检查实例属性 useBinaryMatch: Unknown
    if ('useBinaryMatch' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_useBinaryMatch: Unknown = _checkInstance_RecognitionObject.useBinaryMatch!;
    }
    // 检查实例属性 binaryThreshold: Unknown
    if ('binaryThreshold' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_binaryThreshold: Unknown = _checkInstance_RecognitionObject.binaryThreshold!;
    }
    // 检查实例属性 colorConversionCode: Unknown
    if ('colorConversionCode' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_colorConversionCode: Unknown = _checkInstance_RecognitionObject.colorConversionCode!;
    }
    // 检查实例属性 lowerColor: Unknown
    if ('lowerColor' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_lowerColor: Unknown = _checkInstance_RecognitionObject.lowerColor!;
    }
    // 检查实例属性 upperColor: Unknown
    if ('upperColor' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_upperColor: Unknown = _checkInstance_RecognitionObject.upperColor!;
    }
    // 检查实例属性 matchCount: Unknown
    if ('matchCount' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_matchCount: Unknown = _checkInstance_RecognitionObject.matchCount!;
    }
    // 检查实例属性 ocrEngine: Unknown
    if ('ocrEngine' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_ocrEngine: Unknown = _checkInstance_RecognitionObject.ocrEngine!;
    }
    // 检查实例属性 replaceDictionary: Unknown
    if ('replaceDictionary' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_replaceDictionary: Unknown = _checkInstance_RecognitionObject.replaceDictionary!;
    }
    // 检查实例属性 allContainMatchText: Unknown
    if ('allContainMatchText' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_allContainMatchText: Unknown = _checkInstance_RecognitionObject.allContainMatchText!;
    }
    // 检查实例属性 oneContainMatchText: Unknown
    if ('oneContainMatchText' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_oneContainMatchText: Unknown = _checkInstance_RecognitionObject.oneContainMatchText!;
    }
    // 检查实例属性 regexMatchText: Unknown
    if ('regexMatchText' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_regexMatchText: Unknown = _checkInstance_RecognitionObject.regexMatchText!;
    }
    // 检查实例属性 text: Unknown
    if ('text' in _checkInstance_RecognitionObject) {
      const _instProp_RecognitionObject_text: Unknown = _checkInstance_RecognitionObject.text!;
    }
    // 检查实例方法 initTemplate
    if ('initTemplate' in _checkInstance_RecognitionObject && typeof _checkInstance_RecognitionObject.initTemplate === 'function') {
      assertCallable(_checkInstance_RecognitionObject.initTemplate!);
    }
    // 检查实例方法 clone
    if ('clone' in _checkInstance_RecognitionObject && typeof _checkInstance_RecognitionObject.clone === 'function') {
      assertCallable(_checkInstance_RecognitionObject.clone!);
    }
  }
}

// DesktopRegion - function (Constructor)
if (typeof DesktopRegion !== 'undefined') {
  // 验证 DesktopRegion 是一个可调用的函数
  assertCallable(DesktopRegion);
  // DesktopRegion 的静态方法
  if ('desktopRegionClick' in DesktopRegion && typeof DesktopRegion.desktopRegionClick === 'function') {
    assertCallable(DesktopRegion.desktopRegionClick);
  }
  if ('desktopRegionMove' in DesktopRegion && typeof DesktopRegion.desktopRegionMove === 'function') {
    assertCallable(DesktopRegion.desktopRegionMove);
  }
  if ('desktopRegionMoveBy' in DesktopRegion && typeof DesktopRegion.desktopRegionMoveBy === 'function') {
    assertCallable(DesktopRegion.desktopRegionMoveBy);
  }
  // DesktopRegion 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_DesktopRegion = InstanceType<typeof DesktopRegion>;
    const _checkInstance_DesktopRegion: Partial<_Instance_DesktopRegion> = {} as any;

    // 检查实例属性 x: Unknown
    if ('x' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_x: Unknown = _checkInstance_DesktopRegion.x!;
    }
    // 检查实例属性 y: Unknown
    if ('y' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_y: Unknown = _checkInstance_DesktopRegion.y!;
    }
    // 检查实例属性 width: Unknown
    if ('width' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_width: Unknown = _checkInstance_DesktopRegion.width!;
    }
    // 检查实例属性 height: Unknown
    if ('height' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_height: Unknown = _checkInstance_DesktopRegion.height!;
    }
    // 检查实例属性 top: Unknown
    if ('top' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_top: Unknown = _checkInstance_DesktopRegion.top!;
    }
    // 检查实例属性 bottom: Unknown
    if ('bottom' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_bottom: Unknown = _checkInstance_DesktopRegion.bottom!;
    }
    // 检查实例属性 left: Unknown
    if ('left' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_left: Unknown = _checkInstance_DesktopRegion.left!;
    }
    // 检查实例属性 right: Unknown
    if ('right' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_right: Unknown = _checkInstance_DesktopRegion.right!;
    }
    // 检查实例属性 text: Unknown
    if ('text' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_text: Unknown = _checkInstance_DesktopRegion.text!;
    }
    // 检查实例属性 prev: Unknown
    if ('prev' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_prev: Unknown = _checkInstance_DesktopRegion.prev!;
    }
    // 检查实例属性 prevConverter: Unknown
    if ('prevConverter' in _checkInstance_DesktopRegion) {
      const _instProp_DesktopRegion_prevConverter: Unknown = _checkInstance_DesktopRegion.prevConverter!;
    }
    // 检查实例方法 desktopRegionClick
    if ('desktopRegionClick' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.desktopRegionClick === 'function') {
      assertCallable(_checkInstance_DesktopRegion.desktopRegionClick!);
    }
    // 检查实例方法 desktopRegionMove
    if ('desktopRegionMove' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.desktopRegionMove === 'function') {
      assertCallable(_checkInstance_DesktopRegion.desktopRegionMove!);
    }
    // 检查实例方法 derive
    if ('derive' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.derive === 'function') {
      assertCallable(_checkInstance_DesktopRegion.derive!);
    }
    // 检查实例方法 backgroundClick
    if ('backgroundClick' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.backgroundClick === 'function') {
      assertCallable(_checkInstance_DesktopRegion.backgroundClick!);
    }
    // 检查实例方法 click
    if ('click' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.click === 'function') {
      assertCallable(_checkInstance_DesktopRegion.click!);
    }
    // 检查实例方法 doubleClick
    if ('doubleClick' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.doubleClick === 'function') {
      assertCallable(_checkInstance_DesktopRegion.doubleClick!);
    }
    // 检查实例方法 clickTo
    if ('clickTo' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.clickTo === 'function') {
      assertCallable(_checkInstance_DesktopRegion.clickTo!);
    }
    // 检查实例方法 move
    if ('move' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.move === 'function') {
      assertCallable(_checkInstance_DesktopRegion.move!);
    }
    // 检查实例方法 moveTo
    if ('moveTo' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.moveTo === 'function') {
      assertCallable(_checkInstance_DesktopRegion.moveTo!);
    }
    // 检查实例方法 drawSelf
    if ('drawSelf' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.drawSelf === 'function') {
      assertCallable(_checkInstance_DesktopRegion.drawSelf!);
    }
    // 检查实例方法 drawRect
    if ('drawRect' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.drawRect === 'function') {
      assertCallable(_checkInstance_DesktopRegion.drawRect!);
    }
    // 检查实例方法 selfToRectDrawable
    if ('selfToRectDrawable' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.selfToRectDrawable === 'function') {
      assertCallable(_checkInstance_DesktopRegion.selfToRectDrawable!);
    }
    // 检查实例方法 toRectDrawable
    if ('toRectDrawable' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.toRectDrawable === 'function') {
      assertCallable(_checkInstance_DesktopRegion.toRectDrawable!);
    }
    // 检查实例方法 toLineDrawable
    if ('toLineDrawable' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.toLineDrawable === 'function') {
      assertCallable(_checkInstance_DesktopRegion.toLineDrawable!);
    }
    // 检查实例方法 drawLine
    if ('drawLine' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.drawLine === 'function') {
      assertCallable(_checkInstance_DesktopRegion.drawLine!);
    }
    // 检查实例方法 convertSelfPositionToGameCaptureRegion
    if ('convertSelfPositionToGameCaptureRegion' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.convertSelfPositionToGameCaptureRegion === 'function') {
      assertCallable(_checkInstance_DesktopRegion.convertSelfPositionToGameCaptureRegion!);
    }
    // 检查实例方法 convertPositionToGameCaptureRegion
    if ('convertPositionToGameCaptureRegion' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.convertPositionToGameCaptureRegion === 'function') {
      assertCallable(_checkInstance_DesktopRegion.convertPositionToGameCaptureRegion!);
    }
    // 检查实例方法 convertPositionToDesktopRegion
    if ('convertPositionToDesktopRegion' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.convertPositionToDesktopRegion === 'function') {
      assertCallable(_checkInstance_DesktopRegion.convertPositionToDesktopRegion!);
    }
    // 检查实例方法 toRect
    if ('toRect' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.toRect === 'function') {
      assertCallable(_checkInstance_DesktopRegion.toRect!);
    }
    // 检查实例方法 toImageRegion
    if ('toImageRegion' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.toImageRegion === 'function') {
      assertCallable(_checkInstance_DesktopRegion.toImageRegion!);
    }
    // 检查实例方法 isEmpty
    if ('isEmpty' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.isEmpty === 'function') {
      assertCallable(_checkInstance_DesktopRegion.isEmpty!);
    }
    // 检查实例方法 isExist
    if ('isExist' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.isExist === 'function') {
      assertCallable(_checkInstance_DesktopRegion.isExist!);
    }
    // 检查实例方法 dispose
    if ('dispose' in _checkInstance_DesktopRegion && typeof _checkInstance_DesktopRegion.dispose === 'function') {
      assertCallable(_checkInstance_DesktopRegion.dispose!);
    }
  }
}

// GameCaptureRegion - function (Constructor)
if (typeof GameCaptureRegion !== 'undefined') {
  // 验证 GameCaptureRegion 是一个可调用的函数
  assertCallable(GameCaptureRegion);
  // GameCaptureRegion 的静态方法
  if ('gameRegionClick' in GameCaptureRegion && typeof GameCaptureRegion.gameRegionClick === 'function') {
    assertCallable(GameCaptureRegion.gameRegionClick);
  }
  if ('gameRegionMove' in GameCaptureRegion && typeof GameCaptureRegion.gameRegionMove === 'function') {
    assertCallable(GameCaptureRegion.gameRegionMove);
  }
  if ('gameRegionMoveBy' in GameCaptureRegion && typeof GameCaptureRegion.gameRegionMoveBy === 'function') {
    assertCallable(GameCaptureRegion.gameRegionMoveBy);
  }
  if ('gameRegion1080PPosClick' in GameCaptureRegion && typeof GameCaptureRegion.gameRegion1080PPosClick === 'function') {
    assertCallable(GameCaptureRegion.gameRegion1080PPosClick);
  }
  if ('gameRegion1080PPosMove' in GameCaptureRegion && typeof GameCaptureRegion.gameRegion1080PPosMove === 'function') {
    assertCallable(GameCaptureRegion.gameRegion1080PPosMove);
  }
  // GameCaptureRegion 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_GameCaptureRegion = InstanceType<typeof GameCaptureRegion>;
    const _checkInstance_GameCaptureRegion: Partial<_Instance_GameCaptureRegion> = {} as any;

    // 检查实例属性 srcMat: Unknown
    if ('srcMat' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_srcMat: Unknown = _checkInstance_GameCaptureRegion.srcMat!;
    }
    // 检查实例属性 cacheGreyMat: Unknown
    if ('cacheGreyMat' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_cacheGreyMat: Unknown = _checkInstance_GameCaptureRegion.cacheGreyMat!;
    }
    // 检查实例属性 cacheImage: Unknown
    if ('cacheImage' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_cacheImage: Unknown = _checkInstance_GameCaptureRegion.cacheImage!;
    }
    // 检查实例属性 x: Unknown
    if ('x' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_x: Unknown = _checkInstance_GameCaptureRegion.x!;
    }
    // 检查实例属性 y: Unknown
    if ('y' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_y: Unknown = _checkInstance_GameCaptureRegion.y!;
    }
    // 检查实例属性 width: Unknown
    if ('width' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_width: Unknown = _checkInstance_GameCaptureRegion.width!;
    }
    // 检查实例属性 height: Unknown
    if ('height' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_height: Unknown = _checkInstance_GameCaptureRegion.height!;
    }
    // 检查实例属性 top: Unknown
    if ('top' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_top: Unknown = _checkInstance_GameCaptureRegion.top!;
    }
    // 检查实例属性 bottom: Unknown
    if ('bottom' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_bottom: Unknown = _checkInstance_GameCaptureRegion.bottom!;
    }
    // 检查实例属性 left: Unknown
    if ('left' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_left: Unknown = _checkInstance_GameCaptureRegion.left!;
    }
    // 检查实例属性 right: Unknown
    if ('right' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_right: Unknown = _checkInstance_GameCaptureRegion.right!;
    }
    // 检查实例属性 text: Unknown
    if ('text' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_text: Unknown = _checkInstance_GameCaptureRegion.text!;
    }
    // 检查实例属性 prev: Unknown
    if ('prev' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_prev: Unknown = _checkInstance_GameCaptureRegion.prev!;
    }
    // 检查实例属性 prevConverter: Unknown
    if ('prevConverter' in _checkInstance_GameCaptureRegion) {
      const _instProp_GameCaptureRegion_prevConverter: Unknown = _checkInstance_GameCaptureRegion.prevConverter!;
    }
    // 检查实例方法 convertToRectDrawable
    if ('convertToRectDrawable' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.convertToRectDrawable === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.convertToRectDrawable!);
    }
    // 检查实例方法 convertToLineDrawable
    if ('convertToLineDrawable' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.convertToLineDrawable === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.convertToLineDrawable!);
    }
    // 检查实例方法 deriveTo1080P
    if ('deriveTo1080P' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.deriveTo1080P === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.deriveTo1080P!);
    }
    // 检查实例方法 deriveCrop
    if ('deriveCrop' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.deriveCrop === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.deriveCrop!);
    }
    // 检查实例方法 find
    if ('find' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.find === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.find!);
    }
    // 检查实例方法 findMulti
    if ('findMulti' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.findMulti === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.findMulti!);
    }
    // 检查实例方法 dispose
    if ('dispose' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.dispose === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.dispose!);
    }
    // 检查实例方法 backgroundClick
    if ('backgroundClick' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.backgroundClick === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.backgroundClick!);
    }
    // 检查实例方法 click
    if ('click' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.click === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.click!);
    }
    // 检查实例方法 doubleClick
    if ('doubleClick' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.doubleClick === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.doubleClick!);
    }
    // 检查实例方法 clickTo
    if ('clickTo' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.clickTo === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.clickTo!);
    }
    // 检查实例方法 move
    if ('move' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.move === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.move!);
    }
    // 检查实例方法 moveTo
    if ('moveTo' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.moveTo === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.moveTo!);
    }
    // 检查实例方法 drawSelf
    if ('drawSelf' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.drawSelf === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.drawSelf!);
    }
    // 检查实例方法 drawRect
    if ('drawRect' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.drawRect === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.drawRect!);
    }
    // 检查实例方法 selfToRectDrawable
    if ('selfToRectDrawable' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.selfToRectDrawable === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.selfToRectDrawable!);
    }
    // 检查实例方法 toRectDrawable
    if ('toRectDrawable' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.toRectDrawable === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.toRectDrawable!);
    }
    // 检查实例方法 toLineDrawable
    if ('toLineDrawable' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.toLineDrawable === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.toLineDrawable!);
    }
    // 检查实例方法 drawLine
    if ('drawLine' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.drawLine === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.drawLine!);
    }
    // 检查实例方法 convertSelfPositionToGameCaptureRegion
    if ('convertSelfPositionToGameCaptureRegion' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.convertSelfPositionToGameCaptureRegion === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.convertSelfPositionToGameCaptureRegion!);
    }
    // 检查实例方法 convertPositionToGameCaptureRegion
    if ('convertPositionToGameCaptureRegion' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.convertPositionToGameCaptureRegion === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.convertPositionToGameCaptureRegion!);
    }
    // 检查实例方法 convertPositionToDesktopRegion
    if ('convertPositionToDesktopRegion' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.convertPositionToDesktopRegion === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.convertPositionToDesktopRegion!);
    }
    // 检查实例方法 toRect
    if ('toRect' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.toRect === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.toRect!);
    }
    // 检查实例方法 toImageRegion
    if ('toImageRegion' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.toImageRegion === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.toImageRegion!);
    }
    // 检查实例方法 isEmpty
    if ('isEmpty' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.isEmpty === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.isEmpty!);
    }
    // 检查实例方法 isExist
    if ('isExist' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.isExist === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.isExist!);
    }
    // 检查实例方法 derive
    if ('derive' in _checkInstance_GameCaptureRegion && typeof _checkInstance_GameCaptureRegion.derive === 'function') {
      assertCallable(_checkInstance_GameCaptureRegion.derive!);
    }
  }
}

// ImageRegion - function (Constructor)
if (typeof ImageRegion !== 'undefined') {
  // 验证 ImageRegion 是一个可调用的函数
  assertCallable(ImageRegion);
  // ImageRegion 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_ImageRegion = InstanceType<typeof ImageRegion>;
    const _checkInstance_ImageRegion: Partial<_Instance_ImageRegion> = {} as any;

    // 检查实例属性 srcMat: Unknown
    if ('srcMat' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_srcMat: Unknown = _checkInstance_ImageRegion.srcMat!;
    }
    // 检查实例属性 cacheGreyMat: Unknown
    if ('cacheGreyMat' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_cacheGreyMat: Unknown = _checkInstance_ImageRegion.cacheGreyMat!;
    }
    // 检查实例属性 cacheImage: Unknown
    if ('cacheImage' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_cacheImage: Unknown = _checkInstance_ImageRegion.cacheImage!;
    }
    // 检查实例属性 x: Unknown
    if ('x' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_x: Unknown = _checkInstance_ImageRegion.x!;
    }
    // 检查实例属性 y: Unknown
    if ('y' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_y: Unknown = _checkInstance_ImageRegion.y!;
    }
    // 检查实例属性 width: Unknown
    if ('width' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_width: Unknown = _checkInstance_ImageRegion.width!;
    }
    // 检查实例属性 height: Unknown
    if ('height' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_height: Unknown = _checkInstance_ImageRegion.height!;
    }
    // 检查实例属性 top: Unknown
    if ('top' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_top: Unknown = _checkInstance_ImageRegion.top!;
    }
    // 检查实例属性 bottom: Unknown
    if ('bottom' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_bottom: Unknown = _checkInstance_ImageRegion.bottom!;
    }
    // 检查实例属性 left: Unknown
    if ('left' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_left: Unknown = _checkInstance_ImageRegion.left!;
    }
    // 检查实例属性 right: Unknown
    if ('right' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_right: Unknown = _checkInstance_ImageRegion.right!;
    }
    // 检查实例属性 text: Unknown
    if ('text' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_text: Unknown = _checkInstance_ImageRegion.text!;
    }
    // 检查实例属性 prev: Unknown
    if ('prev' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_prev: Unknown = _checkInstance_ImageRegion.prev!;
    }
    // 检查实例属性 prevConverter: Unknown
    if ('prevConverter' in _checkInstance_ImageRegion) {
      const _instProp_ImageRegion_prevConverter: Unknown = _checkInstance_ImageRegion.prevConverter!;
    }
    // 检查实例方法 deriveCrop
    if ('deriveCrop' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.deriveCrop === 'function') {
      assertCallable(_checkInstance_ImageRegion.deriveCrop!);
    }
    // 检查实例方法 find
    if ('find' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.find === 'function') {
      assertCallable(_checkInstance_ImageRegion.find!);
    }
    // 检查实例方法 findMulti
    if ('findMulti' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.findMulti === 'function') {
      assertCallable(_checkInstance_ImageRegion.findMulti!);
    }
    // 检查实例方法 dispose
    if ('dispose' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.dispose === 'function') {
      assertCallable(_checkInstance_ImageRegion.dispose!);
    }
    // 检查实例方法 backgroundClick
    if ('backgroundClick' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.backgroundClick === 'function') {
      assertCallable(_checkInstance_ImageRegion.backgroundClick!);
    }
    // 检查实例方法 click
    if ('click' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.click === 'function') {
      assertCallable(_checkInstance_ImageRegion.click!);
    }
    // 检查实例方法 doubleClick
    if ('doubleClick' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.doubleClick === 'function') {
      assertCallable(_checkInstance_ImageRegion.doubleClick!);
    }
    // 检查实例方法 clickTo
    if ('clickTo' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.clickTo === 'function') {
      assertCallable(_checkInstance_ImageRegion.clickTo!);
    }
    // 检查实例方法 move
    if ('move' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.move === 'function') {
      assertCallable(_checkInstance_ImageRegion.move!);
    }
    // 检查实例方法 moveTo
    if ('moveTo' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.moveTo === 'function') {
      assertCallable(_checkInstance_ImageRegion.moveTo!);
    }
    // 检查实例方法 drawSelf
    if ('drawSelf' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.drawSelf === 'function') {
      assertCallable(_checkInstance_ImageRegion.drawSelf!);
    }
    // 检查实例方法 drawRect
    if ('drawRect' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.drawRect === 'function') {
      assertCallable(_checkInstance_ImageRegion.drawRect!);
    }
    // 检查实例方法 selfToRectDrawable
    if ('selfToRectDrawable' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.selfToRectDrawable === 'function') {
      assertCallable(_checkInstance_ImageRegion.selfToRectDrawable!);
    }
    // 检查实例方法 toRectDrawable
    if ('toRectDrawable' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.toRectDrawable === 'function') {
      assertCallable(_checkInstance_ImageRegion.toRectDrawable!);
    }
    // 检查实例方法 toLineDrawable
    if ('toLineDrawable' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.toLineDrawable === 'function') {
      assertCallable(_checkInstance_ImageRegion.toLineDrawable!);
    }
    // 检查实例方法 drawLine
    if ('drawLine' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.drawLine === 'function') {
      assertCallable(_checkInstance_ImageRegion.drawLine!);
    }
    // 检查实例方法 convertSelfPositionToGameCaptureRegion
    if ('convertSelfPositionToGameCaptureRegion' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.convertSelfPositionToGameCaptureRegion === 'function') {
      assertCallable(_checkInstance_ImageRegion.convertSelfPositionToGameCaptureRegion!);
    }
    // 检查实例方法 convertPositionToGameCaptureRegion
    if ('convertPositionToGameCaptureRegion' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.convertPositionToGameCaptureRegion === 'function') {
      assertCallable(_checkInstance_ImageRegion.convertPositionToGameCaptureRegion!);
    }
    // 检查实例方法 convertPositionToDesktopRegion
    if ('convertPositionToDesktopRegion' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.convertPositionToDesktopRegion === 'function') {
      assertCallable(_checkInstance_ImageRegion.convertPositionToDesktopRegion!);
    }
    // 检查实例方法 toRect
    if ('toRect' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.toRect === 'function') {
      assertCallable(_checkInstance_ImageRegion.toRect!);
    }
    // 检查实例方法 toImageRegion
    if ('toImageRegion' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.toImageRegion === 'function') {
      assertCallable(_checkInstance_ImageRegion.toImageRegion!);
    }
    // 检查实例方法 isEmpty
    if ('isEmpty' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.isEmpty === 'function') {
      assertCallable(_checkInstance_ImageRegion.isEmpty!);
    }
    // 检查实例方法 isExist
    if ('isExist' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.isExist === 'function') {
      assertCallable(_checkInstance_ImageRegion.isExist!);
    }
    // 检查实例方法 derive
    if ('derive' in _checkInstance_ImageRegion && typeof _checkInstance_ImageRegion.derive === 'function') {
      assertCallable(_checkInstance_ImageRegion.derive!);
    }
  }
}

// Region - function (Constructor)
if (typeof Region !== 'undefined') {
  // 验证 Region 是一个可调用的函数
  assertCallable(Region);
  // Region 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_Region = InstanceType<typeof Region>;
    const _checkInstance_Region: Partial<_Instance_Region> = {} as any;

    // 检查实例属性 x: Unknown
    if ('x' in _checkInstance_Region) {
      const _instProp_Region_x: Unknown = _checkInstance_Region.x!;
    }
    // 检查实例属性 y: Unknown
    if ('y' in _checkInstance_Region) {
      const _instProp_Region_y: Unknown = _checkInstance_Region.y!;
    }
    // 检查实例属性 width: Unknown
    if ('width' in _checkInstance_Region) {
      const _instProp_Region_width: Unknown = _checkInstance_Region.width!;
    }
    // 检查实例属性 height: Unknown
    if ('height' in _checkInstance_Region) {
      const _instProp_Region_height: Unknown = _checkInstance_Region.height!;
    }
    // 检查实例属性 top: Unknown
    if ('top' in _checkInstance_Region) {
      const _instProp_Region_top: Unknown = _checkInstance_Region.top!;
    }
    // 检查实例属性 bottom: Unknown
    if ('bottom' in _checkInstance_Region) {
      const _instProp_Region_bottom: Unknown = _checkInstance_Region.bottom!;
    }
    // 检查实例属性 left: Unknown
    if ('left' in _checkInstance_Region) {
      const _instProp_Region_left: Unknown = _checkInstance_Region.left!;
    }
    // 检查实例属性 right: Unknown
    if ('right' in _checkInstance_Region) {
      const _instProp_Region_right: Unknown = _checkInstance_Region.right!;
    }
    // 检查实例属性 text: Unknown
    if ('text' in _checkInstance_Region) {
      const _instProp_Region_text: Unknown = _checkInstance_Region.text!;
    }
    // 检查实例属性 prev: Unknown
    if ('prev' in _checkInstance_Region) {
      const _instProp_Region_prev: Unknown = _checkInstance_Region.prev!;
    }
    // 检查实例属性 prevConverter: Unknown
    if ('prevConverter' in _checkInstance_Region) {
      const _instProp_Region_prevConverter: Unknown = _checkInstance_Region.prevConverter!;
    }
    // 检查实例方法 backgroundClick
    if ('backgroundClick' in _checkInstance_Region && typeof _checkInstance_Region.backgroundClick === 'function') {
      assertCallable(_checkInstance_Region.backgroundClick!);
    }
    // 检查实例方法 click
    if ('click' in _checkInstance_Region && typeof _checkInstance_Region.click === 'function') {
      assertCallable(_checkInstance_Region.click!);
    }
    // 检查实例方法 doubleClick
    if ('doubleClick' in _checkInstance_Region && typeof _checkInstance_Region.doubleClick === 'function') {
      assertCallable(_checkInstance_Region.doubleClick!);
    }
    // 检查实例方法 clickTo
    if ('clickTo' in _checkInstance_Region && typeof _checkInstance_Region.clickTo === 'function') {
      assertCallable(_checkInstance_Region.clickTo!);
    }
    // 检查实例方法 move
    if ('move' in _checkInstance_Region && typeof _checkInstance_Region.move === 'function') {
      assertCallable(_checkInstance_Region.move!);
    }
    // 检查实例方法 moveTo
    if ('moveTo' in _checkInstance_Region && typeof _checkInstance_Region.moveTo === 'function') {
      assertCallable(_checkInstance_Region.moveTo!);
    }
    // 检查实例方法 drawSelf
    if ('drawSelf' in _checkInstance_Region && typeof _checkInstance_Region.drawSelf === 'function') {
      assertCallable(_checkInstance_Region.drawSelf!);
    }
    // 检查实例方法 drawRect
    if ('drawRect' in _checkInstance_Region && typeof _checkInstance_Region.drawRect === 'function') {
      assertCallable(_checkInstance_Region.drawRect!);
    }
    // 检查实例方法 selfToRectDrawable
    if ('selfToRectDrawable' in _checkInstance_Region && typeof _checkInstance_Region.selfToRectDrawable === 'function') {
      assertCallable(_checkInstance_Region.selfToRectDrawable!);
    }
    // 检查实例方法 toRectDrawable
    if ('toRectDrawable' in _checkInstance_Region && typeof _checkInstance_Region.toRectDrawable === 'function') {
      assertCallable(_checkInstance_Region.toRectDrawable!);
    }
    // 检查实例方法 toLineDrawable
    if ('toLineDrawable' in _checkInstance_Region && typeof _checkInstance_Region.toLineDrawable === 'function') {
      assertCallable(_checkInstance_Region.toLineDrawable!);
    }
    // 检查实例方法 drawLine
    if ('drawLine' in _checkInstance_Region && typeof _checkInstance_Region.drawLine === 'function') {
      assertCallable(_checkInstance_Region.drawLine!);
    }
    // 检查实例方法 convertSelfPositionToGameCaptureRegion
    if ('convertSelfPositionToGameCaptureRegion' in _checkInstance_Region && typeof _checkInstance_Region.convertSelfPositionToGameCaptureRegion === 'function') {
      assertCallable(_checkInstance_Region.convertSelfPositionToGameCaptureRegion!);
    }
    // 检查实例方法 convertPositionToGameCaptureRegion
    if ('convertPositionToGameCaptureRegion' in _checkInstance_Region && typeof _checkInstance_Region.convertPositionToGameCaptureRegion === 'function') {
      assertCallable(_checkInstance_Region.convertPositionToGameCaptureRegion!);
    }
    // 检查实例方法 convertPositionToDesktopRegion
    if ('convertPositionToDesktopRegion' in _checkInstance_Region && typeof _checkInstance_Region.convertPositionToDesktopRegion === 'function') {
      assertCallable(_checkInstance_Region.convertPositionToDesktopRegion!);
    }
    // 检查实例方法 toRect
    if ('toRect' in _checkInstance_Region && typeof _checkInstance_Region.toRect === 'function') {
      assertCallable(_checkInstance_Region.toRect!);
    }
    // 检查实例方法 toImageRegion
    if ('toImageRegion' in _checkInstance_Region && typeof _checkInstance_Region.toImageRegion === 'function') {
      assertCallable(_checkInstance_Region.toImageRegion!);
    }
    // 检查实例方法 isEmpty
    if ('isEmpty' in _checkInstance_Region && typeof _checkInstance_Region.isEmpty === 'function') {
      assertCallable(_checkInstance_Region.isEmpty!);
    }
    // 检查实例方法 isExist
    if ('isExist' in _checkInstance_Region && typeof _checkInstance_Region.isExist === 'function') {
      assertCallable(_checkInstance_Region.isExist!);
    }
    // 检查实例方法 dispose
    if ('dispose' in _checkInstance_Region && typeof _checkInstance_Region.dispose === 'function') {
      assertCallable(_checkInstance_Region.dispose!);
    }
    // 检查实例方法 derive
    if ('derive' in _checkInstance_Region && typeof _checkInstance_Region.derive === 'function') {
      assertCallable(_checkInstance_Region.derive!);
    }
  }
}

// CombatScenes - function (Constructor)
if (typeof CombatScenes !== 'undefined') {
  // 验证 CombatScenes 是一个可调用的函数
  assertCallable(CombatScenes);
  // CombatScenes 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_CombatScenes = InstanceType<typeof CombatScenes>;
    const _checkInstance_CombatScenes: Partial<_Instance_CombatScenes> = {} as any;

    // 检查实例属性 avatarCount: Unknown
    if ('avatarCount' in _checkInstance_CombatScenes) {
      const _instProp_CombatScenes_avatarCount: Unknown = _checkInstance_CombatScenes.avatarCount!;
    }
    // 检查实例属性 lastActiveAvatarIndex: Unknown
    if ('lastActiveAvatarIndex' in _checkInstance_CombatScenes) {
      const _instProp_CombatScenes_lastActiveAvatarIndex: Unknown = _checkInstance_CombatScenes.lastActiveAvatarIndex!;
    }
    // 检查实例属性 currentMultiGameStatus: Unknown
    if ('currentMultiGameStatus' in _checkInstance_CombatScenes) {
      const _instProp_CombatScenes_currentMultiGameStatus: Unknown = _checkInstance_CombatScenes.currentMultiGameStatus!;
    }
    // 检查实例属性 expectedTeamAvatarNum: Unknown
    if ('expectedTeamAvatarNum' in _checkInstance_CombatScenes) {
      const _instProp_CombatScenes_expectedTeamAvatarNum: Unknown = _checkInstance_CombatScenes.expectedTeamAvatarNum!;
    }
    // 检查实例方法 getAvatars
    if ('getAvatars' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.getAvatars === 'function') {
      assertCallable(_checkInstance_CombatScenes.getAvatars!);
    }
    // 检查实例方法 initializeTeam
    if ('initializeTeam' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.initializeTeam === 'function') {
      assertCallable(_checkInstance_CombatScenes.initializeTeam!);
    }
    // 检查实例方法 refreshTeamAvatarIndexRectList
    if ('refreshTeamAvatarIndexRectList' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.refreshTeamAvatarIndexRectList === 'function') {
      assertCallable(_checkInstance_CombatScenes.refreshTeamAvatarIndexRectList!);
    }
    // 检查实例方法 classifyAvatarCnName
    if ('classifyAvatarCnName' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.classifyAvatarCnName === 'function') {
      assertCallable(_checkInstance_CombatScenes.classifyAvatarCnName!);
    }
    // 检查实例方法 classifyAvatarName
    if ('classifyAvatarName' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.classifyAvatarName === 'function') {
      assertCallable(_checkInstance_CombatScenes.classifyAvatarName!);
    }
    // 检查实例方法 checkTeamInitialized
    if ('checkTeamInitialized' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.checkTeamInitialized === 'function') {
      assertCallable(_checkInstance_CombatScenes.checkTeamInitialized!);
    }
    // 检查实例方法 updateActionSchedulerByCd
    if ('updateActionSchedulerByCd' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.updateActionSchedulerByCd === 'function') {
      assertCallable(_checkInstance_CombatScenes.updateActionSchedulerByCd!);
    }
    // 检查实例方法 beforeTask
    if ('beforeTask' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.beforeTask === 'function') {
      assertCallable(_checkInstance_CombatScenes.beforeTask!);
    }
    // 检查实例方法 afterTask
    if ('afterTask' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.afterTask === 'function') {
      assertCallable(_checkInstance_CombatScenes.afterTask!);
    }
    // 检查实例方法 selectAvatar
    if ('selectAvatar' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.selectAvatar === 'function') {
      assertCallable(_checkInstance_CombatScenes.selectAvatar!);
    }
    // 检查实例方法 currentAvatar
    if ('currentAvatar' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.currentAvatar === 'function') {
      assertCallable(_checkInstance_CombatScenes.currentAvatar!);
    }
    // 检查实例方法 getActiveAvatarIndex
    if ('getActiveAvatarIndex' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.getActiveAvatarIndex === 'function') {
      assertCallable(_checkInstance_CombatScenes.getActiveAvatarIndex!);
    }
    // 检查实例方法 initializeTeamOldOcr
    if ('initializeTeamOldOcr' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.initializeTeamOldOcr === 'function') {
      assertCallable(_checkInstance_CombatScenes.initializeTeamOldOcr!);
    }
    // 检查实例方法 errorOcrCorrection
    if ('errorOcrCorrection' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.errorOcrCorrection === 'function') {
      assertCallable(_checkInstance_CombatScenes.errorOcrCorrection!);
    }
    // 检查实例方法 dispose
    if ('dispose' in _checkInstance_CombatScenes && typeof _checkInstance_CombatScenes.dispose === 'function') {
      assertCallable(_checkInstance_CombatScenes.dispose!);
    }
  }
}

// Avatar - function (Constructor)
if (typeof Avatar !== 'undefined') {
  // 验证 Avatar 是一个可调用的函数
  assertCallable(Avatar);
  // Avatar 的静态方法
  if ('throwWhenDefeated' in Avatar && typeof Avatar.throwWhenDefeated === 'function') {
    assertCallable(Avatar.throwWhenDefeated);
  }
  if ('tpForRecover' in Avatar && typeof Avatar.tpForRecover === 'function') {
    assertCallable(Avatar.tpForRecover);
  }
  if ('parseActionSchedulerByCd' in Avatar && typeof Avatar.parseActionSchedulerByCd === 'function') {
    assertCallable(Avatar.parseActionSchedulerByCd);
  }
  // Avatar 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_Avatar = InstanceType<typeof Avatar>;
    const _checkInstance_Avatar: Partial<_Instance_Avatar> = {} as any;

    // 检查实例属性 combatAvatar: Unknown
    if ('combatAvatar' in _checkInstance_Avatar) {
      const _instProp_Avatar_combatAvatar: Unknown = _checkInstance_Avatar.combatAvatar!;
    }
    // 检查实例属性 name: Unknown
    if ('name' in _checkInstance_Avatar) {
      const _instProp_Avatar_name: Unknown = _checkInstance_Avatar.name!;
    }
    // 检查实例属性 index: Unknown
    if ('index' in _checkInstance_Avatar) {
      const _instProp_Avatar_index: Unknown = _checkInstance_Avatar.index!;
    }
    // 检查实例属性 manualSkillCd: Unknown
    if ('manualSkillCd' in _checkInstance_Avatar) {
      const _instProp_Avatar_manualSkillCd: Unknown = _checkInstance_Avatar.manualSkillCd!;
    }
    // 检查实例属性 lastSkillTime: Unknown
    if ('lastSkillTime' in _checkInstance_Avatar) {
      const _instProp_Avatar_lastSkillTime: Unknown = _checkInstance_Avatar.lastSkillTime!;
    }
    // 检查实例属性 isBurstReady: Unknown
    if ('isBurstReady' in _checkInstance_Avatar) {
      const _instProp_Avatar_isBurstReady: Unknown = _checkInstance_Avatar.isBurstReady!;
    }
    // 检查实例属性 nameRect: Unknown
    if ('nameRect' in _checkInstance_Avatar) {
      const _instProp_Avatar_nameRect: Unknown = _checkInstance_Avatar.nameRect!;
    }
    // 检查实例属性 indexRect: Unknown
    if ('indexRect' in _checkInstance_Avatar) {
      const _instProp_Avatar_indexRect: Unknown = _checkInstance_Avatar.indexRect!;
    }
    // 检查实例属性 ct: Unknown
    if ('ct' in _checkInstance_Avatar) {
      const _instProp_Avatar_ct: Unknown = _checkInstance_Avatar.ct!;
    }
    // 检查实例属性 combatScenes: Unknown
    if ('combatScenes' in _checkInstance_Avatar) {
      const _instProp_Avatar_combatScenes: Unknown = _checkInstance_Avatar.combatScenes!;
    }
    // 检查实例方法 switch
    if ('switch' in _checkInstance_Avatar && typeof _checkInstance_Avatar.switch === 'function') {
      assertCallable(_checkInstance_Avatar.switch!);
    }
    // 检查实例方法 trySwitch
    if ('trySwitch' in _checkInstance_Avatar && typeof _checkInstance_Avatar.trySwitch === 'function') {
      assertCallable(_checkInstance_Avatar.trySwitch!);
    }
    // 检查实例方法 switchWithoutCts
    if ('switchWithoutCts' in _checkInstance_Avatar && typeof _checkInstance_Avatar.switchWithoutCts === 'function') {
      assertCallable(_checkInstance_Avatar.switchWithoutCts!);
    }
    // 检查实例方法 isActive
    if ('isActive' in _checkInstance_Avatar && typeof _checkInstance_Avatar.isActive === 'function') {
      assertCallable(_checkInstance_Avatar.isActive!);
    }
    // 检查实例方法 isActiveNoIndexRect
    if ('isActiveNoIndexRect' in _checkInstance_Avatar && typeof _checkInstance_Avatar.isActiveNoIndexRect === 'function') {
      assertCallable(_checkInstance_Avatar.isActiveNoIndexRect!);
    }
    // 检查实例方法 attack
    if ('attack' in _checkInstance_Avatar && typeof _checkInstance_Avatar.attack === 'function') {
      assertCallable(_checkInstance_Avatar.attack!);
    }
    // 检查实例方法 useSkill
    if ('useSkill' in _checkInstance_Avatar && typeof _checkInstance_Avatar.useSkill === 'function') {
      assertCallable(_checkInstance_Avatar.useSkill!);
    }
    // 检查实例方法 afterUseSkill
    if ('afterUseSkill' in _checkInstance_Avatar && typeof _checkInstance_Avatar.afterUseSkill === 'function') {
      assertCallable(_checkInstance_Avatar.afterUseSkill!);
    }
    // 检查实例方法 useBurst
    if ('useBurst' in _checkInstance_Avatar && typeof _checkInstance_Avatar.useBurst === 'function') {
      assertCallable(_checkInstance_Avatar.useBurst!);
    }
    // 检查实例方法 dash
    if ('dash' in _checkInstance_Avatar && typeof _checkInstance_Avatar.dash === 'function') {
      assertCallable(_checkInstance_Avatar.dash!);
    }
    // 检查实例方法 walk
    if ('walk' in _checkInstance_Avatar && typeof _checkInstance_Avatar.walk === 'function') {
      assertCallable(_checkInstance_Avatar.walk!);
    }
    // 检查实例方法 moveCamera
    if ('moveCamera' in _checkInstance_Avatar && typeof _checkInstance_Avatar.moveCamera === 'function') {
      assertCallable(_checkInstance_Avatar.moveCamera!);
    }
    // 检查实例方法 wait
    if ('wait' in _checkInstance_Avatar && typeof _checkInstance_Avatar.wait === 'function') {
      assertCallable(_checkInstance_Avatar.wait!);
    }
    // 检查实例方法 isSkillReady
    if ('isSkillReady' in _checkInstance_Avatar && typeof _checkInstance_Avatar.isSkillReady === 'function') {
      assertCallable(_checkInstance_Avatar.isSkillReady!);
    }
    // 检查实例方法 getSkillCdSeconds
    if ('getSkillCdSeconds' in _checkInstance_Avatar && typeof _checkInstance_Avatar.getSkillCdSeconds === 'function') {
      assertCallable(_checkInstance_Avatar.getSkillCdSeconds!);
    }
    // 检查实例方法 waitSkillCd
    if ('waitSkillCd' in _checkInstance_Avatar && typeof _checkInstance_Avatar.waitSkillCd === 'function') {
      assertCallable(_checkInstance_Avatar.waitSkillCd!);
    }
    // 检查实例方法 jump
    if ('jump' in _checkInstance_Avatar && typeof _checkInstance_Avatar.jump === 'function') {
      assertCallable(_checkInstance_Avatar.jump!);
    }
    // 检查实例方法 charge
    if ('charge' in _checkInstance_Avatar && typeof _checkInstance_Avatar.charge === 'function') {
      assertCallable(_checkInstance_Avatar.charge!);
    }
    // 检查实例方法 mouseDown
    if ('mouseDown' in _checkInstance_Avatar && typeof _checkInstance_Avatar.mouseDown === 'function') {
      assertCallable(_checkInstance_Avatar.mouseDown!);
    }
    // 检查实例方法 mouseUp
    if ('mouseUp' in _checkInstance_Avatar && typeof _checkInstance_Avatar.mouseUp === 'function') {
      assertCallable(_checkInstance_Avatar.mouseUp!);
    }
    // 检查实例方法 click
    if ('click' in _checkInstance_Avatar && typeof _checkInstance_Avatar.click === 'function') {
      assertCallable(_checkInstance_Avatar.click!);
    }
    // 检查实例方法 moveBy
    if ('moveBy' in _checkInstance_Avatar && typeof _checkInstance_Avatar.moveBy === 'function') {
      assertCallable(_checkInstance_Avatar.moveBy!);
    }
    // 检查实例方法 keyDown
    if ('keyDown' in _checkInstance_Avatar && typeof _checkInstance_Avatar.keyDown === 'function') {
      assertCallable(_checkInstance_Avatar.keyDown!);
    }
    // 检查实例方法 keyUp
    if ('keyUp' in _checkInstance_Avatar && typeof _checkInstance_Avatar.keyUp === 'function') {
      assertCallable(_checkInstance_Avatar.keyUp!);
    }
    // 检查实例方法 keyPress
    if ('keyPress' in _checkInstance_Avatar && typeof _checkInstance_Avatar.keyPress === 'function') {
      assertCallable(_checkInstance_Avatar.keyPress!);
    }
  }
}

// ServerTime - function (Constructor)
if (typeof ServerTime !== 'undefined') {
  // 验证 ServerTime 是一个可调用的函数
  assertCallable(ServerTime);
  // ServerTime 的静态方法
  if ('getServerTimeZoneOffset' in ServerTime && typeof ServerTime.getServerTimeZoneOffset === 'function') {
    assertCallable(ServerTime.getServerTimeZoneOffset);
  }
}

// AutoDomainParam - function (Constructor)
if (typeof AutoDomainParam !== 'undefined') {
  // 验证 AutoDomainParam 是一个可调用的函数
  assertCallable(AutoDomainParam);
  // AutoDomainParam 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_AutoDomainParam = InstanceType<typeof AutoDomainParam>;
    const _checkInstance_AutoDomainParam: Partial<_Instance_AutoDomainParam> = {} as any;

    // 检查实例属性 domainRoundNum: Unknown
    if ('domainRoundNum' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_domainRoundNum: Unknown = _checkInstance_AutoDomainParam.domainRoundNum!;
    }
    // 检查实例属性 combatStrategyPath: Unknown
    if ('combatStrategyPath' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_combatStrategyPath: Unknown = _checkInstance_AutoDomainParam.combatStrategyPath!;
    }
    // 检查实例属性 partyName: Unknown
    if ('partyName' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_partyName: Unknown = _checkInstance_AutoDomainParam.partyName!;
    }
    // 检查实例属性 domainName: Unknown
    if ('domainName' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_domainName: Unknown = _checkInstance_AutoDomainParam.domainName!;
    }
    // 检查实例属性 sundaySelectedValue: Unknown
    if ('sundaySelectedValue' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_sundaySelectedValue: Unknown = _checkInstance_AutoDomainParam.sundaySelectedValue!;
    }
    // 检查实例属性 autoArtifactSalvage: Unknown
    if ('autoArtifactSalvage' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_autoArtifactSalvage: Unknown = _checkInstance_AutoDomainParam.autoArtifactSalvage!;
    }
    // 检查实例属性 maxArtifactStar: Unknown
    if ('maxArtifactStar' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_maxArtifactStar: Unknown = _checkInstance_AutoDomainParam.maxArtifactStar!;
    }
    // 检查实例属性 specifyResinUse: Unknown
    if ('specifyResinUse' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_specifyResinUse: Unknown = _checkInstance_AutoDomainParam.specifyResinUse!;
    }
    // 检查实例属性 resinPriorityList: Unknown
    if ('resinPriorityList' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_resinPriorityList: Unknown = _checkInstance_AutoDomainParam.resinPriorityList!;
    }
    // 检查实例属性 originalResinUseCount: Unknown
    if ('originalResinUseCount' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_originalResinUseCount: Unknown = _checkInstance_AutoDomainParam.originalResinUseCount!;
    }
    // 检查实例属性 condensedResinUseCount: Unknown
    if ('condensedResinUseCount' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_condensedResinUseCount: Unknown = _checkInstance_AutoDomainParam.condensedResinUseCount!;
    }
    // 检查实例属性 transientResinUseCount: Unknown
    if ('transientResinUseCount' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_transientResinUseCount: Unknown = _checkInstance_AutoDomainParam.transientResinUseCount!;
    }
    // 检查实例属性 fragileResinUseCount: Unknown
    if ('fragileResinUseCount' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_fragileResinUseCount: Unknown = _checkInstance_AutoDomainParam.fragileResinUseCount!;
    }
    // 检查实例属性 gameCultureInfo: Unknown
    if ('gameCultureInfo' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_gameCultureInfo: Unknown = _checkInstance_AutoDomainParam.gameCultureInfo!;
    }
    // 检查实例属性 stringLocalizer: Unknown
    if ('stringLocalizer' in _checkInstance_AutoDomainParam) {
      const _instProp_AutoDomainParam_stringLocalizer: Unknown = _checkInstance_AutoDomainParam.stringLocalizer!;
    }
    // 检查实例方法 setDefault
    if ('setDefault' in _checkInstance_AutoDomainParam && typeof _checkInstance_AutoDomainParam.setDefault === 'function') {
      assertCallable(_checkInstance_AutoDomainParam.setDefault!);
    }
    // 检查实例方法 setCombatStrategyPath
    if ('setCombatStrategyPath' in _checkInstance_AutoDomainParam && typeof _checkInstance_AutoDomainParam.setCombatStrategyPath === 'function') {
      assertCallable(_checkInstance_AutoDomainParam.setCombatStrategyPath!);
    }
    // 检查实例方法 setResinPriorityList
    if ('setResinPriorityList' in _checkInstance_AutoDomainParam && typeof _checkInstance_AutoDomainParam.setResinPriorityList === 'function') {
      assertCallable(_checkInstance_AutoDomainParam.setResinPriorityList!);
    }
  }
}

// AutoFightParam - function (Constructor)
if (typeof AutoFightParam !== 'undefined') {
  // 验证 AutoFightParam 是一个可调用的函数
  assertCallable(AutoFightParam);
  // AutoFightParam 的静态属性
  if ('swimmingEnabled' in AutoFightParam) {
    const _prop_AutoFightParam_swimmingEnabled: boolean = AutoFightParam.swimmingEnabled;
  }
//   // AutoFightParam 的静态方法
//   if ('fightFinishDetectConfig' in AutoFightParam && typeof AutoFightParam.fightFinishDetectConfig === 'function') {
//     assertCallable(AutoFightParam.fightFinishDetectConfig);
//   }
  // AutoFightParam 的实例属性和方法（使用 InstanceType 推断）
  {
    // 声明实例类型，但不实际创建实例
    type _Instance_AutoFightParam = InstanceType<typeof AutoFightParam>;
    const _checkInstance_AutoFightParam: Partial<_Instance_AutoFightParam> = {} as any;

    // 检查实例属性 kazuhaPickupEnabled: Unknown
    if ('kazuhaPickupEnabled' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_kazuhaPickupEnabled: Unknown = _checkInstance_AutoFightParam.kazuhaPickupEnabled!;
    }
    // 检查实例属性 actionSchedulerByCd: Unknown
    if ('actionSchedulerByCd' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_actionSchedulerByCd: Unknown = _checkInstance_AutoFightParam.actionSchedulerByCd!;
    }
    // 检查实例属性 kazuhaPartyName: Unknown
    if ('kazuhaPartyName' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_kazuhaPartyName: Unknown = _checkInstance_AutoFightParam.kazuhaPartyName!;
    }
    // 检查实例属性 onlyPickEliteDropsMode: Unknown
    if ('onlyPickEliteDropsMode' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_onlyPickEliteDropsMode: Unknown = _checkInstance_AutoFightParam.onlyPickEliteDropsMode!;
    }
    // 检查实例属性 guardianAvatarHold: Unknown
    if ('guardianAvatarHold' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_guardianAvatarHold: Unknown = _checkInstance_AutoFightParam.guardianAvatarHold!;
    }
    // 检查实例属性 finishDetectConfig: Unknown
    if ('finishDetectConfig' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_finishDetectConfig: Unknown = _checkInstance_AutoFightParam.finishDetectConfig!;
    }
    // 检查实例属性 combatStrategyPath: Unknown
    if ('combatStrategyPath' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_combatStrategyPath: Unknown = _checkInstance_AutoFightParam.combatStrategyPath!;
    }
    // 检查实例属性 fightFinishDetectEnabled: Unknown
    if ('fightFinishDetectEnabled' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_fightFinishDetectEnabled: Unknown = _checkInstance_AutoFightParam.fightFinishDetectEnabled!;
    }
    // 检查实例属性 pickDropsAfterFightEnabled: Unknown
    if ('pickDropsAfterFightEnabled' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_pickDropsAfterFightEnabled: Unknown = _checkInstance_AutoFightParam.pickDropsAfterFightEnabled!;
    }
    // 检查实例属性 pickDropsAfterFightSeconds: Unknown
    if ('pickDropsAfterFightSeconds' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_pickDropsAfterFightSeconds: Unknown = _checkInstance_AutoFightParam.pickDropsAfterFightSeconds!;
    }
    // 检查实例属性 battleThresholdForLoot: Unknown
    if ('battleThresholdForLoot' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_battleThresholdForLoot: Unknown = _checkInstance_AutoFightParam.battleThresholdForLoot!;
    }
    // 检查实例属性 timeout: Unknown
    if ('timeout' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_timeout: Unknown = _checkInstance_AutoFightParam.timeout!;
    }
    // 检查实例属性 guardianAvatar: Unknown
    if ('guardianAvatar' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_guardianAvatar: Unknown = _checkInstance_AutoFightParam.guardianAvatar!;
    }
    // 检查实例属性 guardianCombatSkip: Unknown
    if ('guardianCombatSkip' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_guardianCombatSkip: Unknown = _checkInstance_AutoFightParam.guardianCombatSkip!;
    }
    // 检查实例属性 checkBeforeBurst: Unknown
    if ('checkBeforeBurst' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_checkBeforeBurst: Unknown = _checkInstance_AutoFightParam.checkBeforeBurst!;
    }
    // 检查实例属性 isFirstCheck: Unknown
    if ('isFirstCheck' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_isFirstCheck: Unknown = _checkInstance_AutoFightParam.isFirstCheck!;
    }
    // 检查实例属性 rotaryFactor: Unknown
    if ('rotaryFactor' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_rotaryFactor: Unknown = _checkInstance_AutoFightParam.rotaryFactor!;
    }
    // 检查实例属性 burstEnabled: Unknown
    if ('burstEnabled' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_burstEnabled: Unknown = _checkInstance_AutoFightParam.burstEnabled!;
    }
    // 检查实例属性 qinDoublePickUp: Unknown
    if ('qinDoublePickUp' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_qinDoublePickUp: Unknown = _checkInstance_AutoFightParam.qinDoublePickUp!;
    }
    // 检查实例属性 gameCultureInfo: Unknown
    if ('gameCultureInfo' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_gameCultureInfo: Unknown = _checkInstance_AutoFightParam.gameCultureInfo!;
    }
    // 检查实例属性 stringLocalizer: Unknown
    if ('stringLocalizer' in _checkInstance_AutoFightParam) {
      const _instProp_AutoFightParam_stringLocalizer: Unknown = _checkInstance_AutoFightParam.stringLocalizer!;
    }
    // 检查实例方法 setCombatStrategyPath
    if ('setCombatStrategyPath' in _checkInstance_AutoFightParam && typeof _checkInstance_AutoFightParam.setCombatStrategyPath === 'function') {
      assertCallable(_checkInstance_AutoFightParam.setCombatStrategyPath!);
    }
    // 检查实例方法 setDefault
    if ('setDefault' in _checkInstance_AutoFightParam && typeof _checkInstance_AutoFightParam.setDefault === 'function') {
      assertCallable(_checkInstance_AutoFightParam.setDefault!);
    }
  }
}

// settings - instance
if (typeof settings !== 'undefined') {
}

// ==================== 导出 ====================

export {};

/**
 * 类型检查完成！
 * 
 * 如果看到类型错误，说明：
 * 1. 运行时对象缺少类型定义中声明的属性
 * 2. 运行时对象的属性类型与类型定义不兼容
 * 3. 类型定义文件(bgi.d.ts)需要更新
 */
