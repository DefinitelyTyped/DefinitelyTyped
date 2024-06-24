import DS from "ember-data";
import ModelRegistry from "ember-data/types/registries/model";

export import normalizeModelName = DS.normalizeModelName;
export import Snapshot = DS.Snapshot;

export interface RecordIdentifier<K extends keyof ModelRegistry> {
    id: string;
    lid: string;
    type: K;
}

export function recordIdentifierFor<K extends keyof ModelRegistry>(model: ModelRegistry[K]): RecordIdentifier<K>;

export default DS.Store;
