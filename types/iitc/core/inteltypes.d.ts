export namespace Intel {
    // PLAYER
    interface PlayerInfo {
        nickname: string;
        team: string;
        ap: string;
        available_invites: number;
        energy: number;
        level: number;
        min_ap_for_current_level: string;
        min_ap_for_next_level: string;
        nickMatcher: RegExp;
        verified_level: number;
        xm_capacity: string;
    }

    // ENTITY
    type PortalDetails = [];
    type FieldDetails = [];
    type LinkDetails = [];

    // CHAT
    interface ChatCallback {
        result: ChatLine[];
    }

    type ChatLine = [/*guid*/ string, /*time*/ number, PlextContainer];

    interface PlextContainer {
        plext: {
            plextType: "SYSTEM_BROADCAST" | "SYSTEM_NARROWCAST" | "PLAYER_GENERATED";
            markup: Array<MarkUpPortal | MarkUpPlayer | MarkUpText>;
            team: "RESISTANCE" | "ENLIGHTENED";
            text: string;
        };
    }

    type MarkUpPlayer = ["PLAYER", MarkUpPlayerType];
    interface MarkUpPlayerType {
        team: string;
        plain: string;
    }

    type MarkUpText = ["TEXT", MarkUpTextType];
    interface MarkUpTextType {
        plain: string;
    }

    type MarkUpPortal = ["PORTAL", MarkUpPortalType];
    interface MarkUpPortalType {
        latE6: number;
        lngE6: number;
        team: string;
        plain: string;
        name: string;
        address: string;
    }
}
