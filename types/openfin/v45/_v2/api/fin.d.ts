/// <reference types="node" />
import Transport from '../transport/transport';
import { EventEmitter } from 'events';
import System from './system/system';
import _WindowModule from './window/window';
import Application from './application/application';
import InterApplicationBus from './interappbus/interappbus';
import _NotificationModule from './notification/notification';
import Clipbpard from './clipboard/clipboard';
import ExternalApplication from './external-application/external-application';
import ExternalWindow from './external-window/external-window';
import _FrameModule from './frame/frame';
import GlobalHotkey from './global-hotkey';
import { Identity } from '../identity';
import { BrowserViewModule } from './browserview/browserview';
export default class Fin extends EventEmitter {
    private wire;
    System: System;
    Window: _WindowModule;
    Application: Application;
    InterApplicationBus: InterApplicationBus;
    Notification: _NotificationModule;
    Clipboard: Clipbpard;
    ExternalApplication: ExternalApplication;
    ExternalWindow: ExternalWindow;
    Frame: _FrameModule;
    GlobalHotkey: GlobalHotkey;
    BrowserView: BrowserViewModule;
    readonly me: Identity;
    constructor(wire: Transport);
}
