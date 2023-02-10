import { i3dh } from 'i3dh-ios-bridge';

// Build example implementation
class Bridge implements Partial<i3dh.IOSBridge> {
    startARKit(arkitConfig?: i3dh.ARKitConfig): Promise<void> {
        return Promise.resolve();
    }
}

const bridge = new Bridge();
bridge.startARKit(); // $ExpectType Promise<void>
