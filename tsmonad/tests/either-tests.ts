/// <reference path="../tsmonad.d.ts" />

class User {

    private age: number;

    constructor(age?: number) {
        this.age = age ? age : 0;
    }

    public getAge(): TsMonad.Either<string, number> {
        if (this.age > 0) {
            return TsMonad.Either.right<string, number>(this.age);
        } else {
            return TsMonad.Either.left<string, number>('Information withheld');
        }
    }
}

module Station {

    export class BusPass {

        public isValidForRoute(route: string): boolean {
            return true;
        }
    }

    export function getBusPass(age: number): TsMonad.Either<string, BusPass> {
        if (age > 18) {
            return TsMonad.Either.right<string, BusPass>(new BusPass());
        } else {
            return TsMonad.Either.left<string, BusPass>('Too young for a bus pass');
        }
    }
}

var user = new User(42)

var canRideForFree = user.getAge()
    .bind(age => Station.getBusPass(age))
    .caseOf({
        right: busPass => busPass.isValidForRoute('Weston'),
        left: errorMessage => { console.log(errorMessage); return false; }
    });
