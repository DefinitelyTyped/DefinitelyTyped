import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicARMetadata
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicARMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        anchor_point: "anchor_point";
        container_effect_enum: "container_effect_enum";
        effect_icon_url: "effect_icon_url";
        effect_id: "effect_id";
        id: "id";
        platforms: "platforms";
        scale_factor: "scale_factor";
        shadow_texture_url: "shadow_texture_url";
        source_url: "source_url";
        state: "state";
        tags: "tags";
        variant_picker_url: "variant_picker_url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<DynamicARMetadata>;
}
