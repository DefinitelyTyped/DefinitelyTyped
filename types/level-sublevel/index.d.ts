import * as levelup from "levelup";

export = sublevel;

declare var sublevel: sublevel.Constructor;

declare namespace sublevel {
    interface Hook {
        (ch: any, add: (op: Batch | boolean) => void): void;
    }

    interface Batch extends levelup.Batch {
        prefix?: Sublevel | undefined;
    }

    interface Sublevel extends levelup.LevelUpBase<Batch> {
        sublevel(key: string): Sublevel;
        pre(hook: Hook): Function;
    }

    type Constructor = (levelup: levelup.LevelUp) => Sublevel;
}
