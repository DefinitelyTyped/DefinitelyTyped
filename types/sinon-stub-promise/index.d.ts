/// <reference types="sinon"/>

declare module "sinon" {
    interface SinonThenable {
        resolved: boolean;
        rejected: boolean;
        resolveValue: any;
        rejectValue: any;
        then(onFulfill: (resolveValue?: any) => void, onReject?: (rejectValue?: any) => void): SinonThenable;
        catch(onReject: (rejectValue?: any) => void): SinonThenable;
        finally(callback: () => void): SinonThenable;
    }

    interface SinonStub {
        thenable: SinonThenable;
        returnsPromise(): SinonStub;
        resolves(value?: any): SinonStub;
        rejects(value?: any): SinonStub;
    }
}

declare function sinonStubPromise(sinon: sinon.SinonStatic): void;
export = sinonStubPromise;
