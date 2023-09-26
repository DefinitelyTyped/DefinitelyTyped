import * as L from "leaflet";
import "../leafletExtentions";
import * as jQuery from "jquery";

export type PortalGUID = string;
export type LinkGUID = string;
export type FieldGUID = string;

export namespace IITC {
    /** Portal-Marker */
    class Portal extends L.CircleMarker {
        options: PortalOptions;
    }

    interface PortalOptions extends L.PathOptions {
        guid: PortalGUID;
        ent: any;
        level: number;
        team: number;
        timestamp: number;
        data: PortalData;
    }

    interface PortalDataCore {
        team: string;
        latE6: number;
        lngE6: number;
    }

    interface PortalData extends PortalDataCore {
        artifactBrief: { fragment: any; target: any } | null;
        health: number;
        image: string; // url
        level: number;
        mission: boolean;
        mission50plus: boolean;
        ornaments: string[];
        resCount: number;
        timestamp: number;
        title: string;
    }

    interface PortalDataDetail extends PortalData {
        artifactDetail: ArtifactDetail;
        mods: [Mod | null, Mod | null, Mod | null, Mod | null];
        owner: string;
        resonators: Resonator[];
    }

    interface Mod {
        owner: string;
        name: string;
        rarity: ModRarity;
        stats: { [k: string /*ModStats*/]: string };
    }
    type ModStats =
        | "REMOVAL_STICKNESS"
        | /* all */ /* Shield */ "MIGRATION"
        | /* Turret */ "ATTACK_FREQUENCY"
        | "HIT_BONUS"
        | /* Forceamp */ "FORCE_AMPLIFIER"
        | /* ito- */ "XM_SPIN"
        | /* Multihack */ "BURNOUT_INSULATION"
        | /* Heat sink */ "HACK_SPEED"
        | /* Linkamp */ "LINK_RANGE_MULTIPLIER"
        | /* sbul */ "LINK_DEFENSE_BOOST"
        | string; /* dummy for future stuff */
    type ModRarity = "COMMON" | "RARE" | "VERY_RARE";

    type ModType = "RES_SHIELD" | "MULTIHACK" | "FORCE_AMP" | "HEATSINK" | "TURRET" | "LINK_AMPLIFIER";

    interface Resonator {
        energy: number;
        level: number;
        owner: string;
    }

    interface ArtifactDetail {
        type: string;
        displayName: string;
        fragments: any[];
    }

    /** Link-Marker */
    class Link extends L.GeodesicPolyline {
        options: LinkOptions;
    }

    interface LinkOptions extends L.PathOptions {
        team: number;
        guid: string;
        timestamp: number;
        data: LinkData;
    }

    interface LinkData {
        dGuid: string;
        dLatE6: number;
        dLngE6: number;
        oGuid: string;
        oLatE6: number;
        oLngE6: number;
        team: string;
    }

    /** Field-Polygon */
    class Field extends L.GeodesicPolygon {
        options: FieldOptions;
    }

    interface FieldOptions extends L.PathOptions {
        team: number;
        guid: string;
        timestamp: number;
        data: FieldData;
    }

    interface FieldData {
        team: string;
        points: Array<{
            guid: string;
            latE6: number;
            lngE6: number;
        }>;
    }
}
