import * as L from "leaflet";

export {};

declare global {
    class Artifact {
        // private _layer: L.LayerGroup;
        REFRESH_JITTER: number; // 2 minute random period so not all users refresh at once
        REFRESH_SUCCESS: number; // 60 minutes on success
        REFRESH_FAILURE: number; // 2 minute retry on failure
        portalInfo: {};
        artifactTypes: { [type: string]: any };
        entities: [];

        setup(): void;
        requestData(): void;
        idleResume(): void;
        // private handleSuccess(data): void;
        // private handleFailure(data): void;
        // private processData(data): void;
        // private processResult(portals): void;
        clearData(): void;

        getArtifactTypes(): string[];
        isArtifact(type: string): boolean;

        /** used to render portals that would otherwise be below the visible level */
        getArtifactEntities(): [];
        getInterestingPortals(): string[];

        /** quick test for portal being relevant to artifacts - of any type */
        isInterestingPortal(guid: string): boolean;

        /** get the artifact data for a specified artifact id (e.g. 'jarvis'), if it exists - otherwise returns something 'false' */
        getPortalData(guid: string, artifactId: any): any;

        updateLayer(): void;

        /** show artifact dialog */
        showArtifactList(): void;
    }

    var artifact: Artifact;
}
