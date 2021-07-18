import { ScrollPosition } from "scroll-behavior";

export default class StateStorage {
    read(location: Location, key: string | null): ScrollPosition | null | undefined;
    save(location: Location, key: string | null, value: ScrollPosition): void;
    getStateKey(location: Location, key: string | null): string;
}
