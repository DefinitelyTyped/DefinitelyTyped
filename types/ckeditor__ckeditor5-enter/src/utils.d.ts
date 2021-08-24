import Schema from "@ckeditor/ckeditor5-engine/src/model/schema";

export function getCopyOnEnterAttributes<T>(schema: Schema, allAttributes: Iterable<T>): Generator<T>;
