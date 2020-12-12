export class AssertCore {
    private v: any;
    constructor(_v: any) { this.v = _v; };

    DEBUG(): void {
        this.v = null;
        this.IsNotNull();
    }

    public IsNotNull(): void {
        if (this.v == null) {
            throw new Error(AkuminaCoreConstants.Errors.AssertFail(this.v));
        }
    }
    IsNotUndefined(): void {
        if (typeof this.v === 'undefined') {
            throw new Error(AkuminaCoreConstants.Errors.AssertFail(this.v));
        }
    }
    IsNotNullOrUndefined(o: any): boolean {
        throw new Error("Method not implemented.");
    }
    IsNull(o: any): boolean {
        throw new Error("Method not implemented.");
    }
    IsUndefined(o: any): boolean {
        throw new Error("Method not implemented.");
    }
    IsNullOrUndefined(o: any): boolean {
        throw new Error("Method not implemented.");
    }
    IsString(o: any): boolean {
        throw new Error("Method not implemented.");
    }
    IsNumber(o: any): boolean {
        throw new Error("Method not implemented.");
    }
    IsBoolean(o: any): boolean {
        throw new Error("Method not implemented.");
    }
    IsFunction(o: any): boolean {
        throw new Error("Method not implemented.");
    }
}

class AkuminaCoreConstants {
    static Errors: CoreConstantsErrors;
}

abstract class CoreConstants {
    protected _testFail = (v: any, t: string) => {
        throw new Error('Value => [' + v.toString() + ']\nTest => [' + t + ']\nStatus => FAILED');
    }
}

class CoreConstantsErrors extends CoreConstants{
    AssertFail(v: any) { 
        return super._testFail(v, this.AssertFail.caller.name);
    }
}