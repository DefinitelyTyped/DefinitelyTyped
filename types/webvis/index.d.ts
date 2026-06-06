declare namespace webvis {
    interface VersionInfo {
        build: string;
        date: string;
        platform: string;
        revisionHare: string;
        revisionWebVis: string;
        version: string;
        pkg: string;
    }
    interface JoinSessionRequestContent {
        scenarioUri?: string;
        name?: string;
        roleHints?: string | Array<string>;
        confidence?: number;
        deviceTags?: Array<string>;
        spaceDomain?: string;
        settings?: object;
        token?: string;
        forwardURL?: string;
        role?: MemberRole;
        offeredMemberActions?: MemberAction[];
        profile?: MemberProfile;
        spaceAccessToken?: string;
    }
    interface JoinSessionResponseContent extends SessionMemberData {
        memberToken: string;
        authorization?: string;
        restrictedJoin: boolean;
        restrictedAccess: boolean;
        protocolMajor: number;
        protocolMinor: number;
        protocolPatch: number;
    }
    interface LoadScenarioRequestContent {
        scenario: string;
    }
    interface LoadSessionRequestContent {
        sessionID?: string;
        sessionStore: SessionStore;
    }
    type PublishStreamRequestContent = SessionStreamData;
    interface RemoveStreamRequestContent {
        streamID: number;
    }
    interface ChangeSessionParameterRequestContent {
        sessionParameter: string;
        value?: any;
        memberID?: number;
        declare?: boolean;
        interest?: boolean;
    }
    interface ReadSessionParameterRequestContent {
        sessionParameter?: string;
        memberID?: number;
    }
    interface PublishStreamResponseContent {
        streamId: number;
        location?: string;
    }
    type SendStreamSignalRequestContent = StreamStateData;
    interface AnswerMemberRequestRequestContent {
        transactionCode: string;
        data: any;
    }
    interface AnswerCredentialsRequestRequestContent {
        requesterID: number;
        providerID: number;
        accept: boolean;
    }
    interface AddRequestContent {
        parentId?: number;
        parentPath?: [number[], number];
        dataUri: string;
        label?: string;
        initialProperties?: {
            [key: string]: any;
        };
        mimeType?: string;
        usage?: string;
    }
    interface AddResponseContent {
        nodeId: number;
        transactionId: number;
    }
    interface AddCustomNodeRequestContent {
        customType: string;
        attachmentId: number;
    }
    interface AddCustomNodeResponseContent {
        nodeId: number;
        transactionId: number;
    }
    interface RemoveRequestContent {
        nodeId?: number[];
        nodePaths?: [number[], number][];
    }
    interface RemoveResponseContent {
        transactionId: number;
    }
    interface SetPropertyRequestContent {
        nodeId?: number[];
        nodePaths?: [number[], number][];
        property: string;
        value: any;
    }
    interface SetPropertyResponseContent {
        transactionId: number;
    }
    interface SetParentRequestContent {
        nodePath: [number[], number];
        parentPath: [number[], number];
    }
    interface SetParentResponseContent {
        transactionId: number;
    }
    interface ResetPropertiesRequestContent {
        nodeId?: number;
        nodePath?: [number[], number];
        properties: Array<string>;
        recursive: boolean;
    }
    interface ResetPropertiesResponseContent {
        transactionId: number;
    }
    interface SetEnabledLayersRequestContent {
        name: string;
        enabled: boolean;
    }
    interface SetEnabledLayersResponseContent {
        transactionId: number;
    }
    interface CreateClipPlaneRequestContent {
        properties: ClipPlaneProperties & {
            clippedNodePathes?: [number[], number][];
            excludedNodePathes?: [number[], number][];
        };
    }
    interface CreateClipPlaneResponseContent {
        clipPlaneId: number;
        transactionId: number;
    }
    interface ChangeClipPlaneRequestContent {
        clipPlaneId: number;
        changelist: ClipPlaneProperties & {
            clippedNodePathes?: [number[], number][];
            excludedNodePathes?: [number[], number][];
        };
    }
    interface ChangeClipPlaneResponseContent {
        transactionId: number;
    }
    interface RemoveClipPlaneRequestContent {
        clipPlaneId: number;
    }
    interface RemoveClipPlaneResponseContent {
        transactionId: number;
    }
    interface CreateClippingRoomRequestContent {
        properties: ClipRoomProperties;
    }
    interface CreateClippingRoomResponseContent {
        transactionId: number;
    }
    interface ChangeClippingRoomRequestContent {
        changelist: ClipRoomProperties;
    }
    interface ChangeClippingRoomResponseContent {
        transactionId: number;
    }
    interface RemoveClippingRoomResponseContent {
        transactionId: number;
    }
    interface CreateDrawingResponseContent {
        drawingId: number;
        transactionId: number;
    }
    interface CreateDrawingRequestContent {
        attachment: number;
        properties: DrawingProperties;
    }
    interface ChangeDrawingResponseContent {
        transactionId: number;
    }
    interface ChangeDrawingRequestContent {
        drawingId: number;
        properties: DrawingProperties;
    }
    interface RemoveDrawingResponseContent {
        transactionId: number;
    }
    interface RemoveDrawingRequestContent {
        drawingId: number;
    }
    interface CreateDrawingPlaneResponseContent {
        drawingPlaneId: number;
        transactionId: number;
    }
    interface CreateDrawingPlaneRequestContent {
        properties: DrawingPlaneProperties;
    }
    interface ChangeDrawingPlaneResponseContent {
        transactionId: number;
    }
    interface ChangeDrawingPlaneRequestContent {
        drawingPlaneId: number;
        properties: DrawingPlaneProperties;
    }
    interface RemoveDrawingPlaneResponseContent {
        transactionId: number;
    }
    interface RemoveDrawingPlaneRequestContent {
        drawingPlaneId: number;
    }
    interface CreateAnnotationRequestContent {
        properties: AnnotationProperties & {
            connectedNodePath?: [number[], number];
        };
    }
    interface CreateAnnotationResponseContent {
        annotationId: number;
        transactionId: number;
    }
    interface ChangeAnnotationRequestContent {
        annotationId: number;
        properties: AnnotationProperties & {
            connectedNodePath?: [number[], number];
        };
    }
    interface ChangeAnnotationResponseContent {
        transactionId: number;
    }
    interface RemoveAnnotationRequestContent {
        annotationId: number;
    }
    interface RemoveAnnotationResponseContent {
        transactionId: number;
    }
    interface CreateMeasurementRequestContent {
        properties: MeasurementProperties;
    }
    interface CreateMeasurementResponseContent {
        measurementId: number;
        transactionId: number;
    }
    interface RemoveMeasurementRequestContent {
        measurementId: number;
    }
    interface RemoveMeasurementResponseContent {
        measurementId: number;
        transactionId: number;
    }
    interface CreateMaterialRequestContent {
        properties: MaterialProperties;
    }
    interface CreateMaterialResponseContent {
        materialId: number;
        transactionId: number;
    }
    interface ChangeMaterialRequestContent {
        materialId: number;
        properties: MaterialProperties;
    }
    interface ChangeMaterialResponseContent {
        transactionId: number;
    }
    interface RemoveMaterialRequestContent {
        materialId: number;
    }
    interface RemoveMaterialResponseContent {
        transactionId: number;
    }
    interface CreateSnapshotRequestContent {
        name: string;
        attachmentID: number;
        cameraStore: {
            viewMatrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ];
            centerOfRotation: [number, number, number];
            viewPointDiameter: number;
            viewPlaneDistance: number;
            cameraType: number;
        };
    }
    interface CreateSnapshotResponseContent {
        snapshotId: number;
        transactionId: number;
    }
    interface ChangeSnapshotRequestContent {
        snapshotId: number;
        properties: SnapshotProperties;
    }
    interface ChangeSnapshotResponseContent {
        transactionId: number;
    }
    interface RestoreSnapshotRequestContent {
        snapshotId: number;
        settings: SnapshotRestoreOptions;
    }
    interface RestoreSnapshotResponseContent {
        transactionId: number;
    }
    interface RemoveSnapshotRequestContent {
        snapshotId: number;
    }
    interface RemoveSnapshotResponseContent {
        snapshotId: number;
        transactionId: number;
    }
    interface RemoveMemberRequestContent {
        memberID: number;
    }
    interface KickMemberRequestContent {
        memberId: number;
    }
    interface PromoteMemberRequestContent {
        memberID: number;
        role?: MemberRole;
        spaceAccessToken?: string;
    }
    interface DemoteMemberRequestContent {
        memberID: number;
        role?: MemberRole;
        spaceAccessToken?: string;
    }
    interface SetMemberNameRequestContent {
        memberId: number;
        name: string;
    }
    interface SetMemberProfileEntryRequestContent {
        memberId: number;
        key: string;
        value: Serializable;
    }
    interface DeleteMemberProfileEntryRequestContent {
        memberId: number;
        key: string;
    }
    interface AddOfferedMemberActionRequestContent {
        memberId: number;
        offeredMemberAction: MemberAction;
    }
    interface RemoveOfferedMemberActionRequestContent {
        memberId: number;
        offeredMemberAction: MemberAction;
    }
    interface AddToSelectionRequestContent {
        nodeID?: number[];
        nodePaths?: [number[], number][];
    }
    interface AddToSelectionResponseContent {
        transactionId: number;
    }
    interface RemoveFromSelectionRequestContent {
        nodeID?: number[];
        nodePaths?: [number[], number][];
    }
    interface RemoveFromSelectionResponseContent {
        transactionId: number;
    }
    interface SetSelectionRequestContent {
        nodeID?: number[];
        nodePaths?: [number[], number][];
    }
    interface SetSelectionResponseContent {
        transactionId: number;
    }
    interface ClearSelectionResponseContent {
        transactionId: number;
    }
    interface InvertSelectionResponseContent {
        transactionId: number;
    }
    interface GetL3DInfoRequestContent {
        nodeId?: number;
        objectId?: number;
        instanceId?: number;
        nodeIds?: Array<number>;
        objectIds?: Array<number>;
        instanceIds?: Array<number>;
        recursive?: boolean;
    }
    interface SimpleL3DInfo {
        path: number[];
        remoteID: number;
        remoteIDOffset: number;
        remoteShapeIDOffset: number;
        remoteNodeCount: number;
        remoteShapeCount: number;
    }
    interface GetSimpleL3DInfoRequestContent {
        nodeIDs?: number[];
        pathes?: number[][];
        shapeIDs?: number[];
    }
    type GetSimpleL3DInfoResponseContent = SimpleL3DInfo[] | [];
    interface RegisterCustomPropertyRequestContent {
        name: string;
        recursive: boolean;
        defaultValue: any;
    }
    interface RegisterCustomPropertyResponseContent {
        transactionId: number;
    }
    interface CreateAnimationFramesRequestContent {
        name: string;
        frames: Array<AnimationFrame>;
    }
    interface CreateAnimationFramesResponseContent {
        transactionId: number;
    }
    interface RemoveAnimationFramesRequestContent {
        name: string;
    }
    interface RemoveAnimationFramesResponseContent {
        transactionId: number;
    }
    interface CreateAttachmentRequestContent {
        type: string;
    }
    interface CreateAttachmentResponseContent {
        attachmentId: number;
        transactionId: number;
    }
    interface SetAttachmentDataRequestContent {
        attachmentId: number;
        attachmentData: any;
    }
    interface SetAttachmentDataResponseContent {
        transactionId: number;
    }
    interface RemoveAttachmentRequestContent {
        attachmentId: number;
    }
    interface RemoveAttachmentResponseContent {
        transactionId: number;
    }
    interface TransferSessionRequestContent {
        sessionID: string;
    }
    interface SetVariantEnabledRequestContent {
        variantPath: [number[], number];
        variant: number;
        enabled: boolean;
    }
    interface SetVariantEnabledResponseContent {
        transactionId: number;
    }
    /**
     * The XR Edge compare properties
     *
     * @see {@link ViewerXREdgeCompareAPI}
     * @see {@link ViewerXREdgeCompareAPI.changeXREdgeCompare}
     * @see {@link XREdgeCompareMode}
     */
    interface XREdgeCompareProperties {
        /**
         * Specifies the way edge pixels are matched.
         * @default XREdgeCompareMode.SCENE_WITH_CAMERA
         */
        mode?: XREdgeCompareMode;
        /**
         * The color for matching edge pixels.
         * @default [0, 1, 0, 1]
         */
        matchColor?: [number, number, number, number];
        /**
         * The color for non-matching edge pixels.
         * @default [1, 0, 0, 1]
         */
        noMatchColor?: [number, number, number, number];
        /**
         * Specifies if edges in the rendered scene should be generated between two connected parts even when the angle between their surfaces is not above the edge generation threshold.
         * @default false
         */
        forceEdgesBetweenParts?: boolean;
        /**
         * The threshold for detecting camera edges. Must be a value between 0 and 1. The greater the value the more likely a pixel in the camera image is considered an edge pixel.
         * @default 0.5
         */
        edgeDetectionThreshold?: number;
        /**
         * The search radius for matching edges in pixel. The greater the value the more surrounding pixels will be checked for matches.
         * @default 5
         */
        searchRadius?: number;
    }
    /**
     * The result type for XR Edge Auto Detect requests.
     *
     * @see {@link ViewerXREdgeCompareAPI}
     * @see {@link ViewerXREdgeCompareAPI.requestXRAutoDetectScores}
     * @see {@link XRAutoDetectViewportEnclosure}
     */
    interface XRAutoDetectScore {
        /**
         * The node for which the result was created.
         */
        nodeID: number;
        /**
         * The score value. A value between 0 and 1 where 1 states that all edge pixels match. The score value is calculated as `matchCount / (matchCount + noMatchCount)`
         */
        score: number;
        details: {
            /**
             * Indicates if the requested node was in {@link ComparisonGroup.XR_EDGE | XR Edge Compare mode}.
             */
            edgeCompareEnabled: boolean;
            /**
             * Indicates if the requested node's screen rectangle was visible in the current viewport when the score was calculated.
             */
            viewportEnclosure: XRAutoDetectViewportEnclosure;
            /**
             * The requested node's screen rectangle. `null` if the node was not in {@link ComparisonGroup.XR_EDGE | XR Edge Compare mode}.
             */
            rect: DOMRect | null;
            /**
             * The number of matching edge pixels.
             */
            matchCount: number;
            /**
             * The number of non-matching edge pixels.
             */
            noMatchCount: number;
        };
    }
    /**
     * ## InstanceGraphAPI
     *
     * ### Overview
     *
     * The XR Edge Compare API allows to compare scene edges against edges generated from a camera image on a per-pixel basis.
     * The feature is running in realtime and only available with the local rendering setup.
     *
     * ### Quick Start
     *
     * **Example**
     * ```javascript
     * // Get an instance of the ContextAPI
     * const context = webvis.getContext()
     *
     * // Activate XR Edge Compare mode for one or more nodes
     * const nodeIDs = [1, 2, 3];
     * context.setProperty(nodeIDs, webvis.Property.COMPARISON_GROUP, webvis.ComparisonGroup.XR_EDGE);
     *
     * // Get default viewer
     * const viewer = context.getViewer();
     *
     * // Adjust all or a subset of the XR Edge compare properties
     * viewer.changeXREdgeCompare({
     *   mode: webvis.XREdgeCompareMode.SCENE_WITH_CAMERA,
     *   edgeDetectionThreshold: 0.8,
     *   searchRadius: 7
     * });
     * ```
     *
     * ### Events
     * The ViewerXREdgeCompareAPI emits the following events:
     * - {@link ViewerXREdgeCompareChangedEvent}
     */
    interface ViewerXREdgeCompareAPI {
        /**
         * Returns the currently set XR Edge Compare properties.
         *
         * @returns {XREdgeCompareProperties} The currently set properties.
         */
        getXREdgeCompareProperties(): XREdgeCompareProperties;
        /**
         * Sets the specified properties.
         *
         * @param {XREdgeCompareProperties} properties An object with all or a subset of properties to update.
         * @returns {XREdgeCompareProperties} An object with the changed properties.
         */
        changeXREdgeCompare(properties: XREdgeCompareProperties): XREdgeCompareProperties;
        /**
         * Request scores caluclated based on the ratio of matching/non-matching pixels of the XR Edge Compare feature. Passed nodes must be in {@link ComparisonGroup.XR_EDGE | XR Edge Compare mode} mode to produce a valid score. Multiple concurrent requests of this method are not allowed.
         *
         * **Example**
         * ```typescript
         * // Get an instance of the ContextAPI
         * const myContext : ContextAPI = webvis.getContext( "example" )
         *
         * // The node to request a result for
         * const nodeID = 1;
         *
         * // Enable XR Edge Compare mode for node
         * myContext.setProperty(nodeID, webvis.Property.COMPARISON_GROUP, webvis.ComparisonGroup.XR_EDGE);
         *
         * async function update() {
         *     // Request score
         *     const result = await myContext.getViewer().requestXRAutoDetectScores([nodeID]);
         *
         *     // Check score value
         *     console.log(result[0].score > 0.5 ? "Positive" : "Negative");
         *
         *     // Re-request score twice per second as long as node is in XR Edge Compare mode
         *     if (result[0].details.edgeCompareEnabled) {
         *         setTimeout(update, 500);
         *     }
         * }
         *
         * // Start loop
         * update();
         * ```
         *
         * @param {number[]} nodeIDs - The nodeIDs to process.
         * @returns {Promise<XRAutoDetectScore[]>} - A promise containing a list of auto detect score results.
         */
        requestXRAutoDetectScores(nodeIDs: number[]): Promise<XRAutoDetectScore[]>;
    }
    /**
     * This event occurs if one or more properties of the viewers XR edge compare change
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerXREdgeCompareAPI}
     * @see {@link EventType.VIEWER_XR_EDGE_COMPARE_CHANGED}
     */
    class ViewerXREdgeCompareChangedEvent extends WebVisEvent {
        properties: XREdgeCompareProperties;
        viewer: ViewerAPI;
        /**
         * @param properties An object with the changed properties.
         * @param viewer Reference to the related Viewer.
         */
        constructor(properties: XREdgeCompareProperties, viewer: ViewerAPI);
    }
    /**
     * Available XR Edge Compare modes.
     *
     * @see {@link ViewerXREdgeCompareAPI.changeXREdgeCompare}
     * @see {@link XREdgeCompareProperties}
     */
    enum XREdgeCompareMode {
        /**
         * Use edge pixels from scene as reference and compare with edge pixels from camera image. The color of each pixel is determined by whether a matching pixel was found or not using `matchColor` and `noMatchColor` from {@link XREdgeCompareProperties}.
         */
        SCENE_WITH_CAMERA = 0,
        /**
         * Use edge pixels from camera image as reference and compare with edge pixels from scene. The color of each pixel is determined by whether a matching pixel was found or not using `matchColor` and `noMatchColor` from {@link XREdgeCompareProperties}.
         */
        CAMERA_WITH_SCENE = 1,
        /**
         * Render only edge differences (unmatched pixels) but in both compare directions, "scene with camera" and "camera with scene". The color of each edge pixel is determined by the compare direction using `matchColor` for "camera with scene" and `noMatchColor` for "scene with camera" from {@link XREdgeCompareProperties}.
         */
        MUTUAL_UNMATCHED = 2,
    }
    /**
     * Indicates if the requested node's screen rectangle was visible in the current viewport when the score was calculated.
     *
     * @see {@link ViewerXREdgeCompareAPI}
     * @see {@link ViewerXREdgeCompareAPI.requestXRAutoDetectScores}
     * @see {@link XRAutoDetectScore}
     */
    enum XRAutoDetectViewportEnclosure {
        /**
         * Fully inside viewport.
         */
        INSIDE = 0,
        /**
         * Not inside viewport. The node did not produce any pixel on screen.
         */
        OUTSIDE = 1,
        /**
         * Parts of the node have been inside the viewport.
         */
        PARTIAL = 2,
    }
    interface UserGeoResourceData {
        resourceType: any;
        data: number[];
    }
    interface UserGeometryData {
        identifier?: string;
        matrix?: Array<number>;
        volume?: Array<number>;
        appearance?: {
            diffuse?: Array<number>;
            emissive?: Array<number>;
            specular?: Array<number>;
        };
        selector?: string;
        enabled?: boolean;
        occluder?: boolean;
        geometry: {
            buffers: {
                [key: string]: UserGeoBufferData;
            };
            primitiveType?: any;
            numElements: number;
        };
        resources?: {
            [key: string]: any;
        };
        shader?: any;
        pointSize?: number;
    }
    interface UserGeoBufferData {
        buffer: UserGeoResourceData;
        attributes: {
            [key: string]: UserGeoAttributeData;
        };
    }
    interface UserGeoAttributeData {
        resourceType: any;
        componentCount: number;
        normalize?: boolean;
        stride?: number;
        offset?: number;
    }
    interface ViewerUserGeometryAPI {
        createGeometry(userGeoData: UserGeometryData): number;
        updateGeometry(id: number, data: UserGeometryData): void;
        removeGeometry(id: number): void;
    }
    interface ViewerStateAPI {
        getState(): ViewerState;
    }
    /**
     * This event occurs if the State of a Viewer change.
     *
     * @event
     * @hideconstructor
     */
    class ViewerStateChangedEvent extends WebVisEvent {
        state: ViewerState;
        viewer: ViewerAPI;
        /**
         * @param viewer The related Viewer.
         * @param state The new state of the Viewer.
         */
        constructor(state: ViewerState, viewer: ViewerAPI);
    }
    /**
     * This event occurs if a Viewer goes into an Error State.
     *
     * @event
     * @hideconstructor
     */
    class ViewerErrorEvent extends WebVisEvent {
        state: ViewerState;
        viewer: ViewerAPI;
        /**
         * @param viewer The related Viewer.
         * @param state The new state of the Viewer.
         */
        constructor(state: ViewerState, viewer: ViewerAPI);
    }
    /**
     * The ViewerStateCategory is used to categorize a {@link ViewerState} into a specific class.
     */
    enum ViewerStateCategory {
        /**
         * Contains all initialization related States.
         */
        CREATED = 1,
        /**
         * Contains all setup related States.
         */
        SETUP = 2,
        /**
         * Contains all ready to use related States.
         */
        READY = 3,
        /**
         * Contains all warning related States.
         */
        WARNING = 4,
        /**
         * Contains all error related States.
         */
        ERROR = 5,
    }
    /**
     * The {@link ViewerState} describes the current state of a Viewer.
     * The ViewerState is grouped by the {@link ViewerStateCategory} which can be discovered by dividing the State by 1000.
     *
     * ```typescript
     *  const category : ViewerStateCategory = Math.floor(viewerState / 1000);
     * ```
     */
    enum ViewerState {
        /**
         * Indicates that the Viewer is created
         */
        CREATED = 1000,
        /**
         * Indicates that the Viewer is currently setting up the render pipeline.
         */
        SETUP = 2000,
        /**
         * Indicates that the Viewer is ready to use.
         */
        READY = 3000,
        /**
         * Indicates a general Warning that doesn't match any of the specific ones.
         */
        WARNING = 4000,
        /**
         * Indicates that the Viewer is running without hardware acceleration.
         * This may result in a degraded performance. Please check the browser settings to enable hardware acceleration.
         */
        WARNING_LOW_PERFORMANCE = 4001,
        /**
         * Indicates a general Error that doesn't match any of the specific ones.
         */
        ERROR = 5000,
        /**
         * Indicates that the Viewer lost the webGL Context.
         * This can happen when your browser decides that your applications uses too many resources.
         */
        ERROR_WEBGL_CONTEXT_LOST = 5001,
    }
    interface PolylineProperties {
        /**
         * Specifies the color of the Polyline.
         * @default [0,0,0,1]
         */
        color?: [number, number, number, number];
        /**
         * Specifies the enabled state of the Polyline.
         * @default false
         */
        enabled?: boolean;
        /**
         * Specifies a dash-gap sequence of the Polyline as [dash, gap, dash, gap], to allow line styles (dotted, dashed, etc.).
         * If {@link useWorldUnits} is set to true, the values are interpreted in world space (meters), otherwise in screen space (pixels).
         * @default [0,0,0,0]
         */
        sequence?: [number, number, number, number];
        /**
         * Specifies the transform matrix of the Polyline.
         * @default identity
         */
        transform?: [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ];
        /**
         * Specifies the width of the Polyline.
         * If {@link useWorldUnits} is set to true, the value is interpreted in world space (meters), otherwise in screen space (pixels).
         * @default 1
         */
        width?: number;
        /**
         * Specifies how the width and sequence values are interpreted.
         * If set to true, the values are interpreted in world space (meters), otherwise in screen space (pixels).
         * @default false
         */
        useWorldUnits?: boolean;
    }
    /**
     * The **ViewerPolylineAPI** provides basic functionalities to create and visualize Polylines.
     *
     * **Example**
     * ```typescript
     *
     * // Get an instance of the ContextAPI & ViewerAPI
     * const theContext : ContextAPI = webvis.getContext(),
     *       theViewer  : ViewerAPI  = theContext.getViewer();
     *
     * // Create a list of 3D positions which defines the Polyline
     * const linePositions : number[] = [
     *  0, 0, 0,
     *  1, 0, 0,
     *  2, 0, 0
     * ];
     *
     * // Create a red Polyline with the given linePositions and a width of 6 pixels
     * const polylineId : number = theViewer.createPolyline( linePositions , {
     *     color: [1, 0, 0, 1],
     *     width: 6
     * });
     *
     * // Change the color of the Polyline to green
     * theViewer.changePolyline( polylineId, {
     *     color: [0, 1, 0, 1]
     * };
     *
     * // Removes the Polyline
     * theViewer.removePolyline(polylineId)
     * ```
     */
    interface ViewerPolylineAPI {
        /**
         * Creates a new Polyline with the specified positions and properties.
         * @param positions - List of 3D positions which defines the Polyline.
         * @param properties - The properties of the Polyline.
         */
        createPolyline(positions: number[], properties?: PolylineProperties): number;
        /**
         * Changes the properties of the Polyline with the specified Id.
         * @param polylineId - The Id of the Polyline which should be removed.
         * @param properties - The properties which should be changed.
         */
        changePolyline(polylineId: number, properties: PolylineProperties): void;
        /**
         * Removes the Polyline with the specified Id.
         * @param polylineId - The Id of the Polyline which should be removed.
         */
        removePolyline(polylineId: number): void;
    }
    /**
     * Defines the visual appearance of a set of {@link PointOfInterest}s.
     */
    interface POIStyleProperties {
        /**
         * The color of the POIs as RGBA values in the range [0, 1].
         * @default [0, 0, 0, 1]
         */
        color?: [number, number, number, number];
        /**
         * The size of the POIs.
         * By default, this is interpreted as screen space pixels.
         * See sizeMode in {@link POISetProperties} for details.
         * @default 15
         */
        size?: number;
        /**
         * The sprite image to use for the POIs.
         * If not set, the POIs will be rendered as circles.
         * To delete a sprite from an existing style, set the sprite to null.
         * @default undefined
         */
        sprite?: HTMLImageElement | null;
        /**
         * Optional. Name of the POI style.
         * @default undefined
         */
        name?: string;
    }
    interface POISetProperties {
        /**
         * Whether the POI set is enabled or not.
         * @default true
         */
        enabled?: boolean;
        /**
         * The style of the POIs in the set that are visible.
         */
        styleVisible?: number;
        /**
         * The style of the POIs in the set that are occluded.
         */
        styleOccluded?: number;
        /**
         * The style of the POIs in the set that are hovered.
         */
        styleHovered?: number;
        /**
         * Specifies how the size specified in the POI set's style is interpreted (see {@link POIStyleProperties}).
         * If set to true, the values are interpreted in world space (meters), otherwise in screen space (pixels).
         *
         * For pixel size on screen typical size values are in the range 15-30.
         * For world unit size typical size values depend on the model.
         * @default false
         */
        useWorldUnits?: boolean;
        /**
         * The list of {@link PointOfInterest}s to visualize.
         */
        points?: PointOfInterest[];
        /**
         * The color of the POI labels in the set as [R, G, B], each value in the range 0-1.
         */
        labelColor?: [number, number, number];
        /**
         * The outline color of the labels in the set as [R, G, B], each value in the range 0-1.
         */
        labelOutlineColor?: [number, number, number];
        /**
         * Optional. Name of the POS set.
         * @default undefined
         */
        name?: string;
    }
    /**
     * Defines an individual Point of Interest (POI).
     */
    interface PointOfInterest {
        /**
         * The unique identifier for the POI.
         * Automatically assigned if not specified.
         * @default undefined
         */
        id?: number;
        /**
         * The 3D position of a POI.
         */
        position: [number, number, number];
        /**
         * Text to display next to the POI.
         * @default undefined
         */
        label?: string;
    }
    /**
     * This interface serves as control point for the creation, management and visualization state of
     * an individual set of {@link PointOfInterest}s for a viewer.
     *
     * Currently supported features:
     * - POI placement in world space
     * - rendering as colored points
     * - rendering as sprites
     * - occlusion checking
     * - POI set events, e.g. hover/click
     * - custom style for visible/occluded/hovered POIs
     * - POI size definition in screen or world space
     */
    interface ViewerPointsOfInterestAPI {
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Creates a new POI set.
         *
         * Triggers a {@link ViewerPOISetCreatedEvent} event if the set was created successfully.
         *
         * @param properties Initial properties of the created POI set.
         *
         * @returns The ID the newly created set.
         */
        createPOISet(properties?: POISetProperties): number;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Sets the properties for the POI set.
         *
         * Triggers a {@link ViewerPOISetChangedEvent} event if the properties were changed.
         *
         * @param id The ID of the POI set to change.
         * @param properties The new properties of the POI set.
         */
        changePOISet(id: number, properties: POISetProperties): POISetProperties;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Removes the POI set with the given identifier.
         *
         * Triggers a {@link ViewerPOISetRemovedEvent} event if the set was removed successfully.
         *
         * @param id The ID of the POI set to be removed.
         */
        removePOISet(id: number): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Queries the properties of a POI set.
         *
         * @param id The ID of the POI set to query.
         * @returns The properties of the queried POI set.
         */
        getPOISetData(id: number): POISetProperties | undefined;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns the IDs of all existing POI sets.
         *
         * @returns A number array representing the IDs of all POI sets.
         */
        getPOISets(): number[];
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Adds points to an existing POI set.
         *
         * Triggers a {@link ViewerPOISetPointsAddedEvent} event if the points were added successfully.
         *
         * @param id The ID of the POI set
         * @param pois The list of {@link PointOfInterest}s to add.
         * @returns The IDs of the newly added POIs.
         */
        addPointsToSet(id: number, pois: PointOfInterest[]): number[];
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Removes points from an existing POI set.
         *
         * Triggers a {@link ViewerPOISetPointsRemovedEvent} event if the points were removed successfully.
         *
         * @param id The ID of the POI set
         * @param poiIds The IDs of the POIs to remove.
         */
        removePointsFromSet(id: number, poiIds: number[]): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Changes points in an existing POI set.
         *
         * Triggers a {@link ViewerPOISetPointsChangedEvent} event if the points were changed successfully.
         * @param poiSetId The ID of the POI set
         * @param poiIds The IDs of the POIs to change.
         * @param pois The new {@link PointOfInterest} data. The length of this array must match the length of the poiIds array.
         */
        changePointsInSet(poiSetId: number, poiIds: number[], pois: PointOfInterest[]): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Creates a new POI style.
         *
         * Triggers a {@link ViewerPOIStyleCreatedEvent} event if the style was created successfully.
         *
         * @param properties Initial properties of the created POI style.
         *
         * @returns The ID the newly created style.
         */
        createPOIStyle(properties?: POIStyleProperties): number;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Sets the properties for the POI style.
         *
         * Triggers a {@link ViewerPOIStyleChangedEvent} event if the properties were changed.
         *
         * @param poiStyleId The ID of the POI style to change.
         * @param properties The new properties of the POI style.
         */
        changePOIStyle(poiStyleId: number, properties: POIStyleProperties): POIStyleProperties;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Removes the POI style with the given identifier.
         *
         * Triggers a {@link ViewerPOIStyleRemovedEvent} event if the style was removed successfully.
         *
         * @param poiStyleId The ID of the POI style to be removed.
         */
        removePOIStyle(poiStyleId: number): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Queries the properties of a POI style.
         *
         * @param poiStyleId The ID of the POI style to query.
         * @returns The properties of the queried POI style.
         */
        getPOIStyleData(poiStyleId: number): POIStyleProperties | undefined;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns the IDs of all existing POI styles.
         *
         * @returns A number array representing the IDs of all POI styles.
         */
        getPOIStyles(): number[];
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a {@link POIStyleProperties | POIStyle} is removed from a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_STYLE_REMOVED}
     */
    class ViewerPOIStyleRemovedEvent extends WebVisEvent {
        poiStyleId: number;
        viewerId: string;
        /**
         * @param poiStyleId The ID of the {@link POIStyleProperties | POIStyle} that was removed.
         * @param viewerId The ID of the viewer that removed the {@link POIStyleProperties | POIStyle}.
         */
        constructor(poiStyleId: number, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a {@link POIStyleProperties | POIStyle} is created in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_STYLE_CREATED}
     */
    class ViewerPOIStyleCreatedEvent extends WebVisEvent {
        poiStyleId: number;
        poiStyleProperties: POIStyleProperties;
        viewerId: string;
        /**
         * @param poiStyleId The ID of the {@link POIStyleProperties | POIStyle} that was created.
         * @param poiStyleProperties The properties of the {@link POIStyleProperties | POIStyle} that was created.
         * @param viewerId The ID of the viewer that created the {@link POIStyleProperties | POIStyle}.
         */
        constructor(poiStyleId: number, poiStyleProperties: POIStyleProperties, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a {@link POIStyleProperties | POIStyle} is changed in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_STYLE_CHANGED}
     */
    class ViewerPOIStyleChangedEvent extends WebVisEvent {
        poiStyleId: number;
        poiStyleProperties: POIStyleProperties;
        viewerId: string;
        /**
         * @param poiStyleId The ID of the {@link POIStyleProperties | POIStyle} that was changed.
         * @param poiStyleProperties The properties of the {@link POIStyleProperties | POIStyle} that was changed.
         * @param viewerId The ID of the viewer that changed the {@link POIStyleProperties | POIStyle}.
         */
        constructor(poiStyleId: number, poiStyleProperties: POIStyleProperties, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a set of {@link PointOfInterest}s gets removed in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_SET_REMOVED}
     */
    class ViewerPOISetRemovedEvent extends WebVisEvent {
        poiSetId: number;
        viewerId: string;
        /**
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that was removed.
         * @param viewerId The ID of the viewer that removed the set of {@link PointOfInterest}s.
         */
        constructor(poiSetId: number, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when {@link PointOfInterest}s are removed from a set.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_SET_POINTS_REMOVED}
     */
    class ViewerPOISetPointsRemovedEvent extends WebVisEvent {
        poiSetId: number;
        poiIds: number[];
        viewerId: string;
        /**
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that was changed.
         * @param poiIds The IDs of the removed {@link PointOfInterest}s.
         * @param viewerId The ID of the viewer in which the set of {@link PointOfInterest}s was changed.
         */
        constructor(poiSetId: number, poiIds: number[], viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when individual {@link PointOfInterest}s are changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_SET_POINTS_CHANGED}
     */
    class ViewerPOISetPointsChangedEvent extends WebVisEvent {
        poiSetId: number;
        poiIds: number[];
        properties: PointOfInterest[];
        viewerId: string;
        /**
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that was changed.
         * @param poiIds The IDs of the changed {@link PointOfInterest}s.
         * @param properties The new properies of the changed {@link PointOfInterest}s.
         * @param viewerId The ID of the viewer in which the set of {@link PointOfInterest}s was changed.
         */
        constructor(poiSetId: number, poiIds: number[], properties: PointOfInterest[], viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when new {@link PointOfInterest}s are added to an existing set.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_SET_POINTS_ADDED}
     */
    class ViewerPOISetPointsAddedEvent extends WebVisEvent {
        poiSetId: number;
        poiIds: number[];
        properties: PointOfInterest[];
        viewerId: string;
        /**
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that was changed.
         * @param poiIds The IDs of the added {@link PointOfInterest}s.
         * @param properties The properties of the added {@link PointOfInterest}s.
         * @param viewerId The ID of the viewer in which the set of {@link PointOfInterest}s was changed.
         */
        constructor(poiSetId: number, poiIds: number[], properties: PointOfInterest[], viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a set of {@link PointOfInterest}s is created in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_SET_CREATED}
     */
    class ViewerPOISetCreatedEvent extends WebVisEvent {
        poiSetId: number;
        properties: POISetProperties;
        viewerId: string;
        /**
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that was created.
         * @param properties The properties of the set of {@link PointOfInterest}s that was created.
         * @param viewerId The ID of the viewer that created the set of {@link PointOfInterest}s.
         */
        constructor(poiSetId: number, properties: POISetProperties, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a set of {@link PointOfInterest}s gets changed in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_SET_CHANGED}
     */
    class ViewerPOISetChangedEvent extends WebVisEvent {
        poiSetId: number;
        properties: POISetProperties;
        viewerId: string;
        /**
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that was changed.
         * @param properties The new properties of the set of {@link PointOfInterest}s that was changed.
         * @param viewerId The ID of the viewer in which the set of {@link PointOfInterest}s was changed.
         */
        constructor(poiSetId: number, properties: POISetProperties, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when the mouse pointer leaves a {@link PointOfInterest}.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_POINTER_OUT}
     */
    class ViewerPOIPointerOutEvent extends WebVisEvent {
        viewerId: string;
        poiSetId: number;
        poiId: number;
        originalEvent: Event;
        /**
         * @param viewerId The ID of the viewer that contains the set of {@link PointOfInterest}s.
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that the POI belongs to.
         * @param poiId The ID of the target POI.
         * @param originalEvent The original mouse event.
         */
        constructor(viewerId: string, poiSetId: number, poiId: number, originalEvent: Event);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when the mouse pointer enters a {@link PointOfInterest}.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_POINTER_ENTER}
     */
    class ViewerPOIPointerEnterEvent extends WebVisEvent {
        viewerId: string;
        poiSetId: number;
        poiId: number;
        originalEvent: Event;
        /**
         * @param viewerId The ID of the viewer that contains the set of {@link PointOfInterest}s.
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that the POI belongs to.
         * @param poiId The ID of the target POI.
         * @param originalEvent The original mouse event.
         */
        constructor(viewerId: string, poiSetId: number, poiId: number, originalEvent: Event);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a {@link PointOfInterest} is clicked.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointsOfInterestAPI}
     * @see {@link EventType.VIEWER_POI_CLICKED}
     */
    class ViewerPOIClickedEvent extends WebVisEvent {
        viewerId: string;
        poiSetId: number;
        poiId: number;
        originalEvent: Event;
        /**
         * @param viewerId The ID of the viewer that contains the set of {@link PointOfInterest}s.
         * @param poiSetId The ID of the set of {@link PointOfInterest}s that the POI belongs to.
         * @param poiId  The ID of the target POI.
         * @param originalEvent The original mouse event.
         */
        constructor(viewerId: string, poiSetId: number, poiId: number, originalEvent: Event);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Represents the properties of a point cloud.
     */
    interface PointCloudProperties {
        /**
         * Whether the point cloud is currently enabled or not.
         * @default true
         */
        enabled?: boolean;
        /**
         * Represents the current scale of the points in the point cloud.
         * @default 1.0
         */
        scale?: number;
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Represents a single point of a point cloud.
     */
    interface CloudPoint {
        /**
         * The 3D position of the point specified by an XYZ array.
         */
        position: [number, number, number];
        /**
         * The color of the point specified by an RGBA array, where each channel's value ranges from 0 to 1.
         */
        color: [number, number, number, number];
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * ## ViewerPointCloudAPI
     *
     * ### Overview
     *
     * The **ViewerPointCloudAPI** provides functionality to visualize point clouds based on a given set of points.
     *
     * ### Remarks
     *
     * This API visualizes a set of {@link CloudPoint}s in the 3D space. At the moment,
     * this happens without any further optimization. Thus, it may come to limitations in
     * terms of performance and memory consumption when visualizing a large number of points.
     *
     * ## Quick Start
     *
     * Example: Create, change and remove a point cloud.
     *
     * ```javascript
     * // get an instance of the ContextAPI and the matching ViewerAPI
     * const context = webvis.getContext();
     * const viewer = context.getViewer();
     *
     * // define a list of cloud points to visualize
     * const points = [
     *   { position: [0, 1, 0], color: [1, 0, 0, 1] }, // first point
     *   { position: [0, 1, 1], color: [1, 0, 0, 1] }, // second point
     *   { position: [0, 0, 2], color: [1, 0, 0, 1] }, // third point
     * ];
     *
     * // create a point cloud
     * const pointCloudId = viewer.createPointCloud(points, { enabled: true });
     *
     * // change the scale of the point cloud
     * viewer.changePointCloud(pointCloudId, { scale: 2.0 });
     *
     * // remove the point cloud
     * viewer.removePointCloud(pointCloudId);
     * ```
     * ### Events
     *
     * The following events are associated with the ViewerPointCloudAPI:
     *  - {@link ViewerPointCloudCreatedEvent}
     *  - {@link ViewerPointCloudChangedEvent}
     *  - {@link ViewerPointCloudRemovedEvent}
     */
    interface ViewerPointCloudAPI {
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Creates a new point cloud and triggers a {@link ViewerPointCloudCreatedEvent}.
         *
         * @param points The list of points.
         * @param properties Initial properties of the created point cloud.
         * @returns The ID of the newly created point cloud.
         */
        createPointCloud(points: CloudPoint[], properties?: PointCloudProperties): number;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Changes one or more properties of the point cloud with the specified ID and triggers a {@link ViewerPointCloudChangedEvent}.
         *
         * @param pointCloudId The ID of the point cloud to update. Obtained using {@link createPointCloud}.
         * @param properties The properties of the point cloud you want change.
         */
        changePointCloud(pointCloudId: number, properties: PointCloudProperties): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Removes the point cloud with the specified ID and triggers a {@link ViewerPointCloudRemovedEvent}.
         *
         * @param pointCloudId The ID of point cloud to remove. Obtained using {@link createPointCloud}.
         */
        removePointCloud(pointCloudId: number): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns the properties of a point cloud dataset.
         * @param pointCloudId The ID of point cloud to query. Obtained using {@link createPointCloud}.
         * @returns Properties of the point cloud.
         */
        getPointCloudData(pointCloudId: number): PointCloudProperties;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns a list of all point clouds.
         * @returns Array of point cloud IDs.
         */
        getPointClouds(): number[];
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a point cloud is removed from a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointCloudAPI}
     * @see {@link EventType.VIEWER_POINT_CLOUD_REMOVED}
     */
    class ViewerPointCloudRemovedEvent extends WebVisEvent {
        pointCloudId: number;
        viewerId: string;
        /**
         * @param pointCloudId The ID of the point cloud that was removed.
         * @param viewerId The ID of the viewer that the point cloud was removed from.
         */
        constructor(pointCloudId: number, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a point cloud is created in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointCloudAPI}
     * @see {@link EventType.VIEWER_POINT_CLOUD_CREATED}
     */
    class ViewerPointCloudCreatedEvent extends WebVisEvent {
        pointCloudId: number;
        properties: PointCloudProperties;
        viewerId: string;
        /**
         * @param pointCloudId The ID of the point cloud data that was created.
         * @param properties The properties of the point cloud that was created.
         * @param viewerId The ID of the viewer that the point cloud was created in.
         */
        constructor(pointCloudId: number, properties: PointCloudProperties, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a point cloud is changed in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerPointCloudAPI}
     * @see {@link EventType.VIEWER_POINT_CLOUD_CHANGED}
     */
    class ViewerPointCloudChangedEvent extends WebVisEvent {
        pointCloudId: number;
        properties: PointCloudProperties;
        viewerId: string;
        /**
         * @param pointCloudId The ID of the point cloud that was changed.
         * @param properties The properties of the point cloud that was changed.
         * @param viewerId The ID of the viewer that the point cloud was changed in.
         */
        constructor(pointCloudId: number, properties: PointCloudProperties, viewerId: string);
    }
    enum NavigationMode {
        NONE = "NONE",
        WEBVIS = "WEBVIS",
        DESKVIEW = "DESKVIEW",
        TURNTABLE = "TURNTABLE",
        FLY = "FLY",
        D_CAD = "D_CAD",
        XR_TURNTABLE = "XR_TURNTABLE",
    }
    /**
     * The properties associated with the magnifier of a {@link ViewerAPI | viewer}.
     *
     * @see {@link ViewerMagnifierAPI}
     */
    interface ViewerMagnifierProperties {
        /**
         * Specifies the roundness of the magnifier between 0 and 100.
         * 0 means a square magnifier, 100 means a circle.
         * @default 100
         */
        roundness?: number;
        /**
         * Specifies the enabled state of the magnifier.
         * @default true
         */
        enabled?: boolean;
        /**
         * Specifies the center x- and y-position of the magnifier in pixels.
         * @default [0,0]
         */
        position?: [number, number];
        /**
         * Specifies size of the magnifier in pixels.
         * @default [50,50]
         */
        size?: [number, number];
        /**
         * Specifies zoom level of the magnifier.
         * @default 3
         */
        zoomLevel?: number;
    }
    /**
     * ## ViewerMagnifierAPI
     *
     * ### Overview
     *
     * The `ViewerMagnifierAPI` allows to magnify a specified region of the current view in a {@link ViewerAPI | viewer}.
     *
     * ### Quick Start
     *
     * ```javascript
     * // Get an instance of the webvis context
     * const myContext = webvis.getContext();
     *
     * // Get default viewer
     * const viewer = myContext.getViewer();
     *
     * // Enable magnifier for viewer
     * viewer.changeMagnifier({enabled: true});
     *
     * // Change magnifier properties
     * viewer.changeMagnifier({roundness: 50, position: [1000,720], size: [500,300], zoomLevel: 2}) ;
     *
     * // Alternatively, enable magnifier and set all properties in one call
     * viewer.changeMagnifier({roundness: 50, enabled: true, position: [1000,720], size: [500,300], zoomLevel: 2});
     * ```
     *
     * ### Events
     *
     * The following events are associated with the ViewerMagnifierAPI:
     *  - {@link ViewerMagnifierChangedEvent}
     */
    interface ViewerMagnifierAPI {
        /**
         * Changes the properties of the {@link ViewerAPI | viewer} magnifier.
         *
         * @param properties - Properties which should be changed.
         * @returns The changed properties.
         */
        changeMagnifier(properties: ViewerMagnifierProperties): ViewerMagnifierProperties;
        /**
         * Returns the current properties of the magnifier.
         *
         * @returns The current properties of the magnifier.
         */
        getMagnifierProperties(): ViewerMagnifierProperties;
    }
    /**
     * Event that is fired when the magnifier properties of a {@link ViewerAPI | viewer} are changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerMagnifierAPI}
     * @see {@link EventType.VIEWER_MAGNIFIER_CHANGED}
     */
    class ViewerMagnifierChangedEvent extends WebVisEvent {
        properties: ViewerMagnifierProperties;
        viewer: ViewerAPI;
        /**
         * @param properties An object with the changed properties.
         * @param viewer Reference to the related {@link ViewerAPI | viewer}.
         */
        constructor(properties: ViewerMagnifierProperties, viewer: ViewerAPI);
    }
    /**
     * Holds the information about a pointer action in the viewer.
     *
     * An object of this type is propagated by all the events of the
     * {@link ViewerInteractionAPI} interface.
     */
    interface PointerInfo {
        /**
         * The normalized pointer coordinates between [0, 1].
         */
        normalizedPointerCoords: [number, number];
        /**
         * The canvas pointer coordinates in pixels.
         */
        canvasCoords: [number, number];
        /**
         * The 3D position at the current pointer coordinates.
         */
        position: [number, number, number];
        /**
         * The 3D normal vector at the current pointer coordinates.
         */
        normal: [number, number, number];
        /**
         * The current node ID of the pointer action depending on the expanded state of the node structure.
         *
         * Note: The `nodeID` can be different from the `targetNodeID` depending on the expanded state of
         * the instance graph. The `nodeID` property stores the deepest clicked node ID webvis can find that
         * is not yet expanded whereas the `targetNodeID` property stores the leaf node ID at the current pointer
         * position.
         */
        nodeID: number;
        /**
         * The target node ID of the pointer action.
         *
         * Note: The `targetNodeID` can be different from the `nodeID` depending on the expanded state of
         * the instance graph. The `targetNodeID` property stores the leaf node ID at the current pointer
         * position whereas the `nodeID` property stores the deepest clicked node ID webvis can find that
         * is not yet expanded.
         */
        targetNodeID: number;
        /**
         * A reference to the related viewer.
         */
        viewer: ViewerAPI;
        /**
         * The type of the pointer action.
         */
        actionType: PointerActionType;
        /**
         * The trigger of the pointer action.
         */
        actionTrigger: PointerActionTrigger;
        /**
         * Returns the handle to the topological entity at the current pointer coordinates
         */
        requestTopologyHandle(): Promise<TopologyHandle | undefined>;
    }
    /**
     * ## ViewerInteractionAPI
     *
     * ### Overview
     *
     * The `ViewerInteractionAPI` provides methods to control the user's interaction with a viewer.
     *
     * ### Quick Start
     *
     * The following example enables snapping to topological entities and then reacts to
     * {@link NodeClickedEvent}s:
     * ```javascript
     * const context = webvis.getContext();
     * const viewer = context.getViewer();
     *
     * // Render topological entities
     * // This is required to enable interaction with and snapping
     * // to topological entities
     * viewer.forceRenderMode(webvis.RenderMode.FacesTopology);
     *
     * viewer.setInteractionLevel(webvis.ViewerInteractionLevel.TOPOLOGY);
     * viewer.enableSnapping(true);
     *
     * // Disable the default node selection on click.
     * // This is not required, but recommended to improve the user experience
     * context.setInteractionMode(webvis.InteractionMode.NONE);
     *
     * const listenerId = context.registerListener([webvis.EventType.NODE_CLICKED], async (event) => {
     *     const pointerInfo = event.pointerInfo;
     *     console.log("Click position in 3D: ", pointerInfo.position);
     *
     *     const topologyHandle = await pointerInfo.requestTopologyHandle();
     *     console.log("Topological entity: ", topologyHandle);
     * }, 0, true); // Set option 'observeSubTree' to true to observe all entities
     *
     * //...
     *
     * // Don't forget to unregister the listener when you are done
     * context.unregisterListener(listenerId);
     * ```
     *
     * ### Interaction Levels
     *
     * Get the current {@link ViewerInteractionLevel | interaction level} of a viewer:
     * ```javascript
     * const viewer = webvis.getContext().getViewer("my-viewer");
     * const interactionLevel = viewer.getInteractionLevel();
     * ```
     * By default, the interaction level is set to `NODE`, which means that the user will interact with viewer at the
     * node level. In other words, on a desktop device using a mouse, the viewer will respond to clicks with the respective
     * node under the mouse cursor.
     *
     * Changing the interaction level to `TOPOLOGY` will make the viewer respond to clicks with the respective topology
     * under the mouse cursor:
     * ```javascript
     * viewer.setInteractionLevel(webvis.ViewerInteractionLevel.TOPOLOGY);
     * ```
     *
     * ### Snapping
     *
     * The `ViewerInteractionAPI` also provides the option to enable or disable snapping.
     * Snapping is a feature that allows the user to snap to the nearest edge or point.
     *
     * ```javascript
     * viewer.enableSnapping(true); // Enable snapping
     * ```
     *
     * ### Remarks
     *
     * Interaction and snapping only work on entities that are being rendered in the viewer.
     * For example, if the {@link ViewerInteractionLevel} is set to {@link ViewerInteractionLevel.TOPOLOGY},
     * but the viewer's {@link ViewerSettingStrings.RENDER_MODE} is set to
     * {@link RenderMode.Faces} only, then snapping to edges will not work. To enable
     * snapping to all topological entities, the render mode should be set to
     * {@link RenderMode.FacesTopology} instead.
     *
     * ### Events
     *
     * The `ViewerInteractionAPI` emits the following events:
     * - {@link BackgroundClickedEvent}
     * - {@link NodeClickedEvent}
     * - {@link NodePointerEnterEvent}
     * - {@link NodePointerOutEvent}
     * - {@link NodePointerOverEvent}
     * - {@link TopologyPointerEnterEvent}
     * - {@link TopologyPointerOutEvent}
     */
    interface ViewerInteractionAPI {
        /**
         * Enables or disables snapping in the viewer.
         *
         * @param useSnapping Whether to enable or disable snapping.
         */
        enableSnapping(useSnapping: boolean): void;
        /**
         * Returns whether snapping is enabled in the viewer.
         *
         * @returns `true` if snapping is enabled, `false` otherwise.
         */
        isSnappingEnabled(): boolean;
        /**
         * Sets the viewer's interaction level.
         *
         * @param level Specifies the viewer's interaction level.
         */
        setInteractionLevel(level: ViewerInteractionLevel): void;
        /**
         * Returns the current interaction level of the viewer.
         *
         * @returns The current interaction level of the viewer.
         */
        getInteractionLevel(): ViewerInteractionLevel;
    }
    /**
     * Event that is fired when the mouse pointer leaves a topological entity.
     *
     * Note: This event only gets fired when the
     * {@link ViewerInteractionAPI.setInteractionLevel | viewer interaction level}
     * is set to {@link ViewerInteractionLevel.TOPOLOGY}.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerInteractionAPI}
     * @see {@link EventType.TOPOLOGY_POINTER_OUT}
     * @see {@link TopologyAPI}
     */
    class TopologyPointerOutEvent extends WebVisEvent {
        topologyHandle: TopologyHandle;
        pointerInfo: PointerInfo;
        /**
         * @param topologyHandle - The handle of the target topological entity.
         * @param pointerInfo - Additional pointer information.
         */
        constructor(topologyHandle: TopologyHandle, pointerInfo: PointerInfo);
    }
    /**
     * Event that is fired when the mouse pointer enters a topological entity.
     *
     * Note: This event only gets fired when the
     * {@link ViewerInteractionAPI.setInteractionLevel | viewer interaction level}
     * is set to {@link ViewerInteractionLevel.TOPOLOGY}.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerInteractionAPI}
     * @see {@link EventType.TOPOLOGY_POINTER_ENTER}
     * @see {@link TopologyAPI}
     */
    class TopologyPointerEnterEvent extends WebVisEvent {
        topologyHandle: TopologyHandle;
        pointerInfo: PointerInfo;
        /**
         * @param topologyHandle - The handle of the target topological entity.
         * @param pointerInfo - Additional pointer information.
         */
        constructor(topologyHandle: TopologyHandle, pointerInfo: PointerInfo);
    }
    /**
     * Event that is fired when the mouse pointer moves over a node.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerInteractionAPI}
     * @see {@link EventType.NODE_POINTER_OVER}
     */
    class NodePointerOverEvent extends WebVisEvent {
        targetNodeID: number;
        pointerInfo: PointerInfo;
        originalEvent: Event;
        /**
         * @param targetNodeID - The ID of the target node.
         * @param pointerInfo - Additional pointer information.
         * @param originalEvent - The original DOM event.
         */
        constructor(targetNodeID: number, pointerInfo: PointerInfo, originalEvent: Event);
    }
    /**
     * Event that is fired when the mouse pointer leaves a node.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerInteractionAPI}
     * @see {@link EventType.NODE_POINTER_OUT}
     */
    class NodePointerOutEvent extends WebVisEvent {
        targetNodeID: number;
        pointerInfo: PointerInfo;
        originalEvent: Event;
        /**
         * @param targetNodeID - The ID of the target node.
         * @param pointerInfo - Additional pointer information.
         * @param originalEvent - The original DOM event.
         */
        constructor(targetNodeID: number, pointerInfo: PointerInfo, originalEvent: Event);
    }
    /**
     * Event that is fired when the mouse pointer enters a node.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerInteractionAPI}
     * @see {@link EventType.NODE_POINTER_ENTER}
     */
    class NodePointerEnterEvent extends WebVisEvent {
        targetNodeID: number;
        pointerInfo: PointerInfo;
        originalEvent: Event;
        /**
         * @param targetNodeID - The ID of the target node.
         * @param pointerInfo - Additional pointer information.
         * @param originalEvent - The original DOM event.
         */
        constructor(targetNodeID: number, pointerInfo: PointerInfo, originalEvent: Event);
    }
    /**
     * Event that is fired when a node is clicked.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerInteractionAPI}
     * @see {@link EventType.NODE_CLICKED}
     */
    class NodeClickedEvent extends WebVisEvent {
        targetNodeID: number;
        pointerInfo: PointerInfo;
        originalEvent: Event;
        /**
         * @param targetNodeID - The ID of the target node.
         * @param pointerInfo - Additional pointer information.
         * @param originalEvent - The original DOM event.
         */
        constructor(targetNodeID: number, pointerInfo: PointerInfo, originalEvent: Event);
    }
    /**
     * Event that is fired when the viewer background is clicked,
     * i.e. when the viewer is clicked without any node being targeted.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ViewerInteractionAPI}
     * @see {@link EventType.BACKGROUND_CLICKED}
     */
    class BackgroundClickedEvent extends WebVisEvent {
        originalEvent: Event;
        pointerInfo: PointerInfo;
        /**
         * @param originalEvent - The original DOM event.
         * @param pointerInfo - Additional pointer information.
         */
        constructor(originalEvent: Event, pointerInfo: PointerInfo);
    }
    /**
     * Specifies the interaction level of a viewer.
     * The interaction level determines which entities can be interacted with and
     * which interaction events are emitted.
     *
     * @see {@link ViewerInteractionAPI}
     */
    enum ViewerInteractionLevel {
        /**
         * Specifies an interaction level based on nodes.
         *
         * Note, that if set, the {@link TopologyPointerEnterEvent}
         * and the {@link TopologyPointerOutEvent} will **not** be emitted.
         *
         * @see {@link InstanceGraphAPI}
         */
        NODE = 0,
        /**
         * Specifies an interaction level based on topological entities.
         *
         * Note that you can only interact with topological entities which
         * are rendered in the viewer. To enable interaction with all
         * topological entities, the {@link ViewerSettingStrings.RENDER_MODE}
         * must be set to {@link RenderMode.FacesTopology}.
         *
         * If set, the {@link TopologyPointerEnterEvent} and the
         * {@link TopologyPointerOutEvent} will be emitted for all rendered topological entities.
         *
         * @see {@link TopologyAPI}
         */
        TOPOLOGY = 1,
    }
    /**
     * Specifies the type of pointer action.
     *
     * @see {@link PointerInfo}
     */
    enum PointerActionType {
        /**
         * No pointer action.
         */
        NONE = 0,
        /**
         * Represents a click action.
         */
        CLICKED = 1,
        /**
         * Represents a press action.
         */
        PRESSED = 2,
        /**
         * Represents a release action.
         */
        RELEASED = 3,
        /**
         * Represents a double click action.
         */
        DOUBLECLICKED = 4,
        /**
         * Represents a touch pick action.
         */
        TOUCH_PICKED = 5,
        /**
         * Represents a touch press action.
         */
        TOUCH_PRESSED = 6,
        /**
         * Represents a touch double pick action.
         */
        TOUCH_DOUBLE_PICKED = 7,
        /**
         * Placeholder for any pointer action type.
         */
        ANY = 8,
    }
    /**
     * Specifies the trigger for a pointer action.
     *
     * @see {@link PointerInfo}
     */
    enum PointerActionTrigger {
        /**
         * No trigger.
         */
        NONE = 0,
        /**
         * Triggered by the primary mouse button.
         * This typically refers to the left mouse button on a standard mouse.
         */
        FIRST = 1,
        /**
         * Triggered by the secondary button.
         * This typically refers to the right mouse button on a standard mouse.
         */
        SECOND = 2,
        /**
         * Triggered by the tertiary button.
         * This typically refers to the middle mouse button on a standard mouse.
         */
        THIRD = 3,
        /**
         * Triggered by the wheel scroll.
         * This typically refers to the mouse wheel or touchpad scroll gesture.
         */
        WHEEL = 4,
        /**
         * Triggered by touch.
         * This typically refers to touch events on touch-enabled devices.
         */
        TOUCH = 5,
    }
    interface ViewerHighlightParameters {
        color?: [number, number, number, number] | Float32Array;
        clipHighlight?: boolean;
        facesHighlightOnTop?: boolean;
        exclusiveClipplanes?: Array<number>;
    }
    interface ViewerHighlightAPI {
        /**
         * Enable highlighting of the entity , which matches the attributes informed in the viewerDataSelector
         *
         * @param handle : IViewerHighlightSelector
         *
         * @param highlightParameters
         * @return the highlightHandle, which it reqed to remove the highlighting
         */
        highlightEntity(handle: TopologyHandle, highlightParameters?: ViewerHighlightParameters): Promise<number>;
        highlightArc(
            pickedPt1: [number, number, number] | Float32Array,
            pickedPt3: [number, number, number] | Float32Array,
            center: [number, number, number] | Float32Array,
            axis: [number, number, number] | Float32Array,
            angle: number,
            measurementID: number,
        ): number;
        highlightCircularArc(circularArcDescriptor: TopologyCircularArcDescriptor): number;
        highlightBBox(
            center: [number, number, number] | Float32Array,
            size: [number, number, number] | Float32Array,
        ): number;
        highlightPoint(position: [number, number, number] | Float32Array, markerIndex: number): void;
        highlightLine(values: number[], scale: number, markerIndex: number): void;
        /**
         * Disable highlighting for the handle
         *
         * @param highlightHandle : number
         */
        dehighlightEntity(highlightHandle?: number): void;
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Example curve for visualization of terms below:
     *
     * ```
     *          #####       ↑
     *        #########
     *       ###########    strength
     *      #############
     *    ################# ↓
     *             ← size →
     *            ↑
     *         position
     * ```
     */
    interface HeatmapProperties {
        /**
         * Model matrix, can be used to match geometry transformations.
         * @default [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
         */
        transform?: Float32Array | [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ];
        /**
         * Whether this dataset should be included in the density calculation.
         * @default true
         */
        enabled?: boolean;
        /**
         * Position of data points.
         * Each set of three consecutive values is interpreted as x, y and z coordinates of a data point.
         */
        position?: number[];
        /**
         * Optional. Per-point range modifier.
         * Can be used to manipulate the reach of a data point, e.g. scaled by significance.
         * @default undefined
         */
        size?: number[];
        /**
         * Optional. Per-point maximum density modifier.
         * Can be used to manipulate the density at the center of a data point, e.g. scaled by significance.
         * @default undefined
         */
        strength?: number[];
        /**
         * Optional. Name of the heatmap.
         * @default undefined
         */
        name?: string;
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Global Heatmap configuration. When partially filled, only set values are override.
     *
     * @see {link ViewerHeatmapAPI}
     */
    interface HeatmapConfig {
        /**
         * Global factor to adjust range of all points.
         * Each heatmap point's size is scaled based on this value.
         * @default 1
         */
        sizeFactor?: number;
        /**
         * Global factor to adjust maximum density of all points.
         * This factor is applied to all heatmap points, adjusting the overall density.
         * @default 1
         */
        strengthFactor?: number;
        /**
         * Color scheme to map calculated densities to.
         * @default HeatmapColorScheme.TURBO
         */
        colorScheme?: HeatmapColorScheme | CustomHeatmapColorScheme;
        /**
         * Resolution of color scheme lookup texture.
         * Can be used in combination with {@link colorBands} to generate isobands.
         * @default 32
         */
        colorResolution?: number;
        /**
         * Whether the color mapping produces a continuous gradient of colors or separated bands of colors.
         * Can be used in combination with {@link colorResolution} to generate isobands.
         * @default false
         */
        colorBands?: boolean;
        /**
         * Upper end of the color scheme.
         * The calculated density is divided by this value before sampling the color scheme lookup texture.
         * @default 1000
         */
        maxValue?: number;
        /**
         * Density falloff function from the center of a data point towards it's maximum impact range.
         * @default HeatmapKernel.GAUSSIAN
         */
        kernel?: HeatmapKernel;
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Custom color scheme definition. May be one of:
     * - list of colors which will be placed equidistant along range [0, 1]
     * - mapping of values in range [0, 1] to colors
     *
     * @see {link ViewerHeatmapAPI}
     * @see {link HeatmapConfig}
     */
    type CustomHeatmapColorScheme = string[] | [
        number,
        number,
        number,
    ][] | [
        number,
        number,
        number,
        number,
    ][] | [
        number,
        string,
    ][] | [
        number,
        [number, number, number],
    ][] | [
        number,
        [number, number, number, number],
    ][];
    /**
     * ## ViewerHeatmapAPI
     *
     * ### Overview
     *
     * The **ViewerHeatmapAPI** provides functionality to visualize a heatmap based on a given set of points.
     *
     * ### Quick Start
     *
     * Example: Adding heatmap data and configuring the heatmap:
     *
     * ```javascript
     * // get an instance of the ContextAPI and the matching ViewerAPI
     * const context = webvis.getContext();
     * const viewer = context.getViewer();
     *
     * // add the model
     * const model = context.add({ dataURI: MODEL, initialProperties: { enabled: true } });
     *
     * // add matching heatmap data
     * const heatmapPositions = [
     *   0, 1, 0, // first point
     *   0, 1, 1, // second point
     *   0, 0, 2, // third point
     * ];
     * const heatmapDataId = viewer.createHeatmap({ position: heatmapPositions });
     *
     * // configure the heatmap
     * viewer.changeGlobalHeatmapConfig({
     *   // set a color scheme
     *   colorScheme: "Blackbody",
     *   // calculated density is normalized, upper end of color scheme is mapped to maxValue
     *   maxValue: 100,
     * }
     * ```
     *
     * ### Events
     *
     * The following events are associated with the ViewerHeatmapAPI:
     *  - {@link ViewerHeatmapCreatedEvent}
     *  - {@link ViewerHeatmapChangedEvent}
     *  - {@link ViewerHeatmapRemovedEvent}
     *  - {@link ViewerHeatmapConfigChangedEvent}
     */
    interface ViewerHeatmapAPI {
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Creates a new heatmap and triggers a {@link ViewerHeatmapCreatedEvent}.
         *
         * @param properties Initial properties of the created Heatmap.
         *
         * @returns ID of dataset or -1 if an error occurred.
         *
         * @example Adding heatmap data:
         *
         * ```javascript
         * // positions are stored in a flat array
         * const heatmapPositions = [
         *   0, 1, 0, // first point
         *   0, 1, 1, // second point
         *   0, 0, 2, // third point
         * ];
         * const heatmapDataId = viewer.createHeatmap({ position: heatmapPositions });
         * ```
         *
         * @example Adding heatmap data with varying size/strength:
         *
         * By specifying per-point size and/or strength, you can tweak ther influence on the heatmap. This example defines two points:
         * - Small radius and high strength. Represents a precisely located but highly important issue.
         * - High radius and low strength. Represents a low-priority issue affecting a larger area.
         *
         * Note: The number of points defined by position, size and strength must match. Since position contains the coordinates, its length must be three times that of size and strength.
         *
         * ```javascript
         * const position = [
         *   0, 0, 0, // first point
         *   1, 0, 0, // second point
         * ];
         * const size = [
         *   0.2, // first point has small radius
         *   3, // second point has large radius
         * ];
         * const strength = [
         *   2, // first point has a high impact
         *   0.5, // second point has a low impact
         * ];
         * const heatmapDataId = viewer.createHeatmap({ position, size, strength });
         * ```
         */
        createHeatmap(properties: HeatmapProperties): number;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Changes one or more properties of the heatmap with the specified ID and triggers a {@link ViewerHeatmapCreatedEvent}.
         *
         * @param id ID of dataset to update. Obtained using {@link createHeatmap}.
         * @param properties The properties of the Heatmap you want change.
         *
         * @example Adding points to an existing heatmap dataset:
         *
         * ```javascript
         * // [continued createHeatmapData example]
         *
         * // add points
         * heatmapPositions.push(
         *   1, 3, 0, // fourth point
         *   3, 0, 1, // fifth point
         * )
         *
         * // update data by passing id and data to override
         * viewer.changeHeatmap(heatmapDataId, { position: heatmapPositions });
         * ```
         */
        changeHeatmap(id: number, properties: HeatmapProperties): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Removes the heatmap with the specified ID and triggers a {@link ViewerHeatmapRemovedEvent}.
         *
         * @param id The ID of heatmap to remove. Obtained using {@link createHeatmap}.
         */
        removeHeatmap(id: number): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns the properties of a heatmap dataset.
         *
         * @param id ID of dataset to query. Obtained using {@link createHeatmap}.
         *
         * @returns Properties of the heatmap dataset.
         */
        getHeatmapData(id: number): HeatmapProperties;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns a list of all heatmap datasets.
         * @returns Array of heatmap dataset IDs.
         */
        getHeatmaps(): number[];
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Configures global heatmap settings and triggers a {@link ViewerHeatmapConfigChangedEvent}.
         *
         * @param config Settings to configure.
         *
         * @example Configuring the heatmap:
         *
         * ```javascript
         * viewer.changeGlobalHeatmapConfig({
         *   // set a color scheme
         *   colorScheme: webvis.HeatmapColorScheme.BLACKBODY,
         *   // calculated density is normalized, upper end of color scheme is mapped to maxValue
         *   maxValue: 100,
         *   // configure heatmap to be had 5 separated bands of colors (smooth gradient by default)
         *   colorBands: true,
         *   colorResolution: 5,
         *   // kernel defines the falloff from a point's center to its edge
         *   // this defaults to a gaussian curve, but other options are available
         *   kernel: webvis.HeatmapKernal.LINEAR,
         *   // scale all points' size uniformly for more/less overlap
         *   sizeFactor: 2,
         *   // scale all point's strength uniformly
         *   // this has the same effect as adjusting maxValue by the inverse factor
         *   strengthFactor: 1.5,
         * });
         * ```
         */
        changeGlobalHeatmapConfig(config: HeatmapConfig): void;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Return the current global heatmap configuration.
         * @returns Current global heatmap configuration.
         */
        getGlobalHeatmapConfig(): HeatmapConfig;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns data which can be used to create a legend.
         * The data has 4 color channels (RGBA) each in a range between 0 and 255 packed into an Array.
         *
         * @returns Color scheme legend data.
         *
         * @example Creating a legend:
         *
         * Note: Canvas can be resized using CSS width/height settings to achieve desired display size.
         *
         * ```javascript
         * const legend = document.createElement("canvas");
         * // fetch data
         * const legendData = viewer.getHeatmapColorSchemeLegend();
         * // width matches colorResolution set using changeGlobalHeatmapConfig
         * const width = legendData.length / 4;
         * // canvas requires ImageData as source
         * const img = new ImageData(new Uint8ClampedArray(legendData), width, 1);
         * // resize canvas render resolution
         * legend.width = width;
         * legend.height = 1;
         * // get canvas 2d context and fill canvas with data
         * const ctx = legend.getContext("2d");
         * ctx.putImageData(img, 0, 0);
         * ```
         */
        getHeatmapColorSchemeLegend(): number[];
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a heatmap is removed from a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {link ViewerHeatmapAPI}
     * @see {link EventType.VIEWER_HEATMAP_REMOVED}
     */
    class ViewerHeatmapRemovedEvent extends WebVisEvent {
        heatmapId: number;
        viewerId: string;
        /**
         * @param heatmapId The ID of the heatmap that was removed.
         * @param viewerId The ID of the viewer that the heatmap was removed from.
         */
        constructor(heatmapId: number, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a heatmap is created in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {link ViewerHeatmapAPI}
     * @see {link EventType.VIEWER_HEATMAP_CREATED}
     */
    class ViewerHeatmapCreatedEvent extends WebVisEvent {
        heatmapId: number;
        properties: HeatmapProperties;
        viewerId: string;
        /**
         * @param heatmapId The ID of the heatmap data that was created.
         * @param properties The properties of the heatmap that were created.
         * @param viewerId The ID of the viewer that the heatmap was created in.
         */
        constructor(heatmapId: number, properties: HeatmapProperties, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when the heatmap configuration is changed in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {link ViewerHeatmapAPI}
     * @see {link EventType.HEATMAP_CONFIG_CHANGED}
     */
    class ViewerHeatmapConfigChangedEvent extends WebVisEvent {
        configuration: HeatmapConfig;
        viewerId: string;
        /**
         * @param configuration The new configuration of the heatmap.
         * @param viewerId The ID of the viewer that the heatmap configuration was changed in.
         */
        constructor(configuration: HeatmapConfig, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a heatmap is changed in a viewer.
     *
     * @event
     * @hideconstructor
     *
     * @see {link ViewerHeatmapAPI}
     * @see {link EventType.VIEWER_HEATMAP_CHANGED}
     */
    class ViewerHeatmapChangedEvent extends WebVisEvent {
        heatmapId: number;
        properties: HeatmapProperties;
        viewerId: string;
        /**
         * @param heatmapId The ID of the heatmap that was changed.
         * @param properties The properties of the heatmap that were changed.
         * @param viewerId The ID of the viewer that the heatmap was changed in.
         */
        constructor(heatmapId: number, properties: HeatmapProperties, viewerId: string);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Available kernels for heatmap calculation.
     * The kernel defines the falloff function from the center of a data point towards it's maximum impact range.
     *
     * @see {link ViewerHeatmapAPI}
     * @see {link HeatmapConfig}
     */
    enum HeatmapKernel {
        /**
         * Density falls of consistently over the whole range.
         */
        LINEAR = 0,
        /**
         * Implements a {@link https://en.wikipedia.org/wiki/Gaussian_function | gaussian function}
         * (bell curve, normal distribution) with a=1, b=0, c=1/3
         */
        GAUSSIAN = 1,
        /**
         * Full density everywhere in range, with a sharp cut to 0 at range.
         */
        TOPHAT = 2,
        /**
         * Uses a {@link https://en.wikipedia.org/wiki/Cubic_Hermite_spline | cubic hermite spline}
         * (smoothstep) to ease from maximum density to 0.
         */
        CUBIC_HERMITE = 3,
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Available Color Schemes for the heatmap visualization.
     * A color scheme defines the mapping of data values to colors.
     *
     * @see {@link ViewerHeatmapAPI}
     * @see {@link HeatmapConfig}
     */
    enum HeatmapColorScheme {
        BLACKBODY = "Blackbody",
        BLUERED = "Bluered",
        CIVIDIS = "Cividis",
        HOT = "Hot",
        INFERNO = "Inferno",
        JET = "Jet",
        PORTLAND = "Portland",
        RAINBOW = "Rainbow",
        RD_BU = "RdBu",
        RD_YL_BU = "RdYlBu",
        SPECTRAL = "Spectral",
        TEMPS = "Temps",
        TURBO = "Turbo",
        VIRIDIS = "Viridis",
    }
    interface BoxGizmoProperties {
        /**
         * The border color of the BoxGizmo
         * @default [0.1, 0.5, 0.7, 0.75]
         */
        borderColor?: [number, number, number, number];
        /**
         * The color of the BoxGizmo
         * @default [0.14, 0.52, 0.78, 0.25]
         */
        color?: [number, number, number, number];
        /**
         * The size of the BoxGizmo
         * @default [1, 1, 1]
         */
        size?: [number, number, number];
        /**
         * The transform of the BoxGizmo
         * @default [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
         */
        transform?: [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ];
        /**
         * The volume of the BoxGizmo
         * @default [-0.5, -0.5, -0.5, 0.5, 0.5, 0.5]
         */
        volume?: BoxVolume;
    }
    interface ViewerGizmoAPI {
        getCurrentGizmoType(): GizmoType;
        getAvailableGizmoTransformationModes(): number;
        setGizmoTransformationMode(mode: GizmoTransformationMode): void;
        getGizmoTransformationMode(): GizmoTransformationMode;
        showSelectionBoxGizmo(
            size?: [number, number, number] | Float32Array,
            transform?: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array,
        ): void;
        showSelectionBoxGizmoFromVolume(volume?: BoxVolume): void;
        showSelectionTransformationGizmo(nodeIds: number[]): void;
        showClippingBoxGizmo(clipRoomID: number): void;
        /**
         * Hides the currently visible Gizmo
         */
        hideGizmo(): void;
        createCollectionFromGizmo(includeOverlappingNodes: boolean): Promise<number>;
        getGizmoSize(): [number, number, number] | Float32Array;
        getGizmoTransform(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
        setCORGizmoVisible(flag: boolean): void;
        showPointMarker(position: [number, number, number] | Float32Array, index?: number): void;
        showAxisMarker(
            values: [number, number, number, number, number, number] | Float32Array,
            scale?: number,
            index?: number,
        ): void;
        hidePointMarker(index?: number): void;
        hideAllPointMarkers(): void;
        hideAllLineMarkers(): void;
        hideAllMarkers(): void;
        getActiveItem(): ActiveItemInfo;
        setActiveItem(id: number, type: ActiveItemType): void;
        /**
         * Shows the BoxGizmo based on the specified properties.
         * If the BoxGizmo is already visible the specified properties will be updated.
         *
         * @param {BoxGizmoProperties} properties - The properties of the BoxGizmo.
         */
        showBoxGizmo(properties?: BoxGizmoProperties): void;
        /**
         * Returns the properties of the BoxGizmo
         *
         * @returns {BoxGizmoProperties} The properties of the BoxGizmo
         */
        getBoxGizmoProperties(): BoxGizmoProperties;
    }
    /**
     * The VIEWER_GIZMO_CHANGED event occurs if the transformation mode of the current Gizmo changed.
     *
     * @event
     * @hideconstructor
     */
    class ViewerGizmoModeChangedEvent extends WebVisEvent {
        gizmoMode: GizmoTransformationMode;
        /**
         * @param gizmoMode The transformation mode of the current Gizmo.
         */
        constructor(gizmoMode: GizmoTransformationMode);
    }
    /**
     * The VIEWER_GIZMO_CHANGED event indicates a change to current gizmo.
     *
     * @event
     * @hideconstructor
     */
    class ViewerGizmoChangedEvent extends WebVisEvent {
        gizmoType: GizmoType;
        viewer: ViewerAPI;
        /**
         * @param gizmoType The type of the currently visible Gizmo.
         * @param viewer The viewer where the gizmo change has happened.
         */
        constructor(gizmoType: GizmoType, viewer: ViewerAPI);
    }
    /**
     * The ACTIVE_ITEM event indicates a change to the current active item.
     *
     * @event
     * @hideconstructor
     */
    class ActiveItemEvent extends WebVisEvent {
        itemID: number;
        itemType: ActiveItemType;
        viewer: ViewerAPI;
        /**
         * @param itemID The ID of the item
         * @param itemType The type of the active item
         * @param viewer The viewer to which the active item relates.
         */
        constructor(itemID: number, itemType: ActiveItemType, viewer: ViewerAPI);
    }
    enum GizmoType {
        NONE = 0,
        TRANSFORMATION = 1,
        CLIP_PLANE = 2,
        SELECTION_BOX = 3,
        TRANSFORMATION_BOX = 4,
        CLIP_ROOM_BOX = 5,
        COR = 6,
        ROTATION_SPHERE = 7,
        LINE_MARKER = 8,
        POINT_MARKER = 9,
        BOX = 10,
        DRAWING_PLANE = 11,
    }
    enum GizmoTransformationMode {
        TRANSLATION = 1,
        ROTATION = 2,
        TRANSLATION_ROTATION = 3,
        SCALING = 4,
        SCALING_ROTATION = 6,
        TRANSLATION_SCALING_ROTATION = 7,
    }
    enum ActiveItemType {
        NONE = 0,
        CLIP_PLANE = 34,
        CLIP_ROOM = 66,
        DRAWING_PLANE = 67,
    }
    /**
     * Specifies the result of a viewer drawing operation.
     * The result contains the geometries of the drawing, a thumbnail of the drawing, and the version of data contained within the drawing.
     *
     * @see {@link ViewerDrawingGeometry}
     */
    interface ViewerDrawingResult {
        /**
         * Contains the geometries of the drawing.
         */
        geometries: ViewerDrawingGeometry[];
        /**
         * Thumbnail of the drawing, which is encoded as a base64 string.
         */
        thumbnail: string;
        /**
         * Version of the data contained within the drawing. Current version: 1.0.2
         */
        version: {
            major: number;
            minor: number;
            patch: number;
        };
    }
    /**
     * Contains options for the {@link ViewerDrawingAPI.leaveDrawingMode} method.
     * The options are used to configure the result of the processing.
     */
    interface ViewerDrawingProcessOptions {
        /**
         * Specifies if the result contains a thumbnail of the drawing.
         * @default true
         */
        thumbnail?: boolean;
        /**
         * Specifies the width of the thumbnail.
         * If the thumbnail height or width is not set, the current viewer size is used.
         * @default undefined
         */
        thumbnailWidth?: number;
        /**
         * Specifies the height of the thumbnail.
         * If the thumbnail height or width is not set, the current viewer size is used.
         * @default undefined
         */
        thumbnailHeight?: number;
        /**
         * Specifies the output primitive type of the brush-drawings.
         * @default "triangleStrip"
         */
        brushPrimitiveType?: "triangleStrip";
        /**
         * Specifies the output primitive type of the pen-drawings.
         * @default "triangleStrip"
         */
        penPrimitiveType?: "triangleStrip" | "lineStrip";
        /**
         * Specifies the output primitive type of the shape-drawings.
         * @default "triangleStrip"
         */
        shapePrimitiveType?: "triangleStrip" | "lineStrip";
        /**
         * Specifies the number of points to render shapes with when using the "lineStrip" primitive type.
         * @default 50
         */
        subDivisions?: number;
    }
    /**
     * Contains the underlying geometry of drawing primitives.
     */
    interface ViewerDrawingGeometry {
        /**
         * Specifies the color of the geometry.
         */
        color: [number, number, number, number];
        /**
         * Specifies the vertex positions of the geometry.
         */
        positions: number[];
        /**
         * Specifies a partition of the vertex list into contiguous sub-ranges (slices).
         */
        slices?: number[];
        /**
         * Specifies primitive type of the geometry.
         */
        primitiveType: number;
        /**
         * Specifies the volume of the geometry.
         */
        volume: [number, number, number, number, number, number];
        /**
         * Specifies the width of the geometry.
         * @default 1
         */
        width?: number;
        /**
         * Specifies how the width value is interpreted.
         * If set to true, the width is interpreted in world space (meters) otherwise in screen space (pixels).
         * @default false
         */
        useWorldUnits?: boolean;
    }
    /**
     * The **ViewerDrawingAPI** provides basic functionalities to control the 2D drawing mode and the
     * processed output.
     *
     * See the {@link ViewerDrawingProcessOptions} for the various configuration options for creating a drawing.
     * ```javascript
     * const ctx = webvis.getContext();
     * const viewer = ctx.getViewer();
     * // Create a new 2D drawing by entering the drawing mode, interacting with the viewer and finally leaving the drawing mode:
     * viewer.enterDrawingMode(); // after that you can draw on top of your 3D model
     * viewer.leaveDrawingMode(); // leaves the 2D drawing mode by committing the drawings and returns the processed 2D drawing data
     *
     * // You can also cancel any started drawing:
     * viewer.enterDrawingMode();
     * viewer.cancelDrawingMode(); // leaves the 2D drawing mode and discards all uncomitted drawings
     * ```
     */
    interface ViewerDrawingAPI {
        /**
         * Leaves the 2D drawing mode and discards all uncomitted drawings.
         */
        cancelDrawingMode(): void;
        /**
         * Enters the 2D drawing mode where you can draw on top of your 3D model.
         */
        enterDrawingMode(): void;
        /**
         * Leaves the 2D drawing mode and returns the processed 2D drawing data which can be used to create
         * a drawing with the help of the {@link DrawingAPI}.
         * @param options - Options to configure the result of the processing.
         * @returns The processed 2D drawing data.
         */
        leaveDrawingMode(options?: ViewerDrawingProcessOptions): Promise<ViewerDrawingResult | undefined>;
    }
    /**
     * List of different drawing modes. Can be configured via the {@link ViewerSettingStrings.DRAWING_MODE}.
     */
    enum DrawingMode {
        /**
         * Using a brush to draw.
         */
        BRUSH = 0,
        /**
         * Using a pen to draw.
         */
        PEN = 1,
        /**
         * Selection mode, which is used to select the drawing.
         * The selected drawing can be moved, resized, rotated or deleted.
         */
        SELECT = 2,
        /**
         * Using an eraser to erase the drawing.
         */
        ERASE = 3,
        /**
         * Draw the geometry as rectangle.
         */
        RECTANGLE = 4,
        /**
         * Draw the geometry as ellipse.
         */
        ELLIPSE = 5,
    }
    /**
     * The kind of arrowhead that should be used in the {@link DrawingMode}s `PEN` and `BRUSH`.
     */
    enum DrawingArrowhead {
        /**
         * No arrowhead.
         */
        NONE = 0,
        /**
         * A line with an arrowhead.
         */
        LINE_ARROW = 1,
    }
    /**
     * ## ViewerBackgroundAPI
     *
     * ### Overview
     *
     * The **ViewerBackgroundAPI** provides a method to clear the background of a viewer.
     * This can be useful when restoring a snapshot that had a background image set (e.g. from an XR environment)
     * and you want to remove it to have a transparent background again.
     *
     * ### Quick Start
     *
     * **Example**
     * ```javascript
     * // Get the current viewer
     * const viewer = webvis.getViewer();
     *
     * // Clear the background and make it fully transparent
     * viewer.clearBackground();
     * ```
     */
    interface ViewerBackgroundAPI {
        /**
         * Clears the viewer's background.
         */
        clearBackground(): void;
    }
    /**
     * Keeps track of the progress of the viewer.
     * Contains information about the amount of open service requests, draw jobs and uploads to the GPU.
     *
     * @see {@link ProgressChangedEvent}
     */
    interface ProgressState {
        /**
         * The amount of open GPU uploads.
         */
        numberOfUploads: number;
        /**
         * The amount of open and queued requests.
         */
        numberOfDownloads: number;
        /**
         * The number of resources that are known to the viewer but are not yet downloaded.
         */
        numberOfUpdateStates: number;
        /**
         * The percentage of requests that are finished.
         */
        downloadProgress: number;
        /**
         * The percentage of draw jobs that are finished.
         */
        renderingProgress: number;
        /**
         * True when there are open requests, unfinished draw jobs or uploads to the GPU.
         */
        isProcessing: boolean;
    }
    /**
     * Holds informations about the currently active item.
     *
     * @see {@link ViewerGizmoAPI.getActiveItem}
     */
    interface ActiveItemInfo {
        /**
         * The type of the active item.
         */
        type: ActiveItemType;
        /**
         * The ID of the active item.
         */
        id: number;
    }
    /**
     * ## Visualizing 3D data with webvis: The ViewerAPI
     *
     * ### Overview
     *
     * The **ViewerAPI** provides methods to interact with the viewer.
     *
     * ### Quick Start
     *
     * A viewer is always part of a webvis context. Please note, that a context can contain one or more viewers.
     * To create a viewer, you can use {@link ContextAPI.createViewer}.
     *
     * ```javascript
     * const canvas1 = document.getElementById("canvas-element-1");
     * const canvas2 = document.getElementById("canvas-element-2");
     * const viewer1 = webvis.getContext().createViewer("viewer-id-1", canvas1);
     * const viewer2 = webvis.getContext().createViewer("viewer-id-2", canvas2);
     *
     * console.log(viewer1.getID()); // "viewer-id-1"
     * console.log(viewer2.getID()); // "viewer-id-2"
     * ```
     *
     * ### The viewer's settings
     *
     * Each viewer of a context has its own settings. You can configure the viewer by passing the initial
     * settings to the {@link ContextAPI.createViewer} method. A full list of available viewer settings
     * can be found in the {@link ViewerSettingStrings}.
     *
     * ```javascript
     * const viewerSettings = {
     *   [ViewerSettingStrings.RENDER_MODE]: RenderMode.Topology,
     *   [ViewerSettingStrings.CAMERA_FIELD_OF_VIEW]: 60,
     *   // and other initial settings you would like to set ...
     * };
     * const viewer = webvis.getContext().createViewer("viewer-id", undefined, viewerSettings);
     * ```
     *
     * You can also change the settings of a viewer at runtime using {@link ViewerAPI.changeSetting} and read
     * the current settings with {@link ViewerAPI.readSetting}. Use {@link ViewerAPI.resetSetting} to reset a
     * setting to its default value.
     *
     * ```javascript
     * viewer.changeSetting(ViewerSettingStrings.RENDER_MODE, RenderMode.Faces);
     * console.log(viewer.readSetting(ViewerSettingStrings.RENDER_MODE));
     * viewer.resetSetting(ViewerSettingStrings.RENDER_MODE);
     * ```
     *
     * #### Viewer settings vs. context settings
     *
     * You can also change settings on the context level via {@link ContextAPI.changeSetting}.
     * The difference between viewer settings and context settings is that viewer settings are only applied to the specific
     * viewer while context settings are applied to all viewers of the context. The same applies to resetting a setting
     * via {@link ContextAPI.resetSetting}.
     *
     * This also means that if you read a setting via {@link ContextAPI.readSetting}, you will get the value of the context
     * setting which might differ from the value of settings of a specific viewer.
     *
     * ### Manipulating the camera view
     *
     * The viewer provides methods to manipulate the camera's view. The most important one is
     * {@link ViewerAPI.setViewMatrix} which allows you to set the view matrix directly.
     * The view matrix transforms the geometry from world space into camera space.
     *
     * ```javascript
     * const viewMatrix = [
     *  0.1, 0.2, 0.3, 0,
     *  0.4, 0.5, 0.6, 0,
     *  0.7, 0.8, 0.9, 0,
     *  0.5, 0.4, 0.6, 1
     * ];
     * await viewer.setViewMatrix(viewMatrix);
     * ```
     *
     * If you prefer to animate the camera movement, you can use {@link ViewerAPI.animateViewToViewmatrix}:
     *
     * ```javascript
     * const viewMatrix = [
     *  // your view matrix
     * ];
     * const transitionTime = 2000; // 2 seconds
     * await viewer.animateViewToViewmatrix(viewMatrix, transitionTime);
     * ```
     *
     * If you want to read out the current view matrix at a specific frame, you can use {@link ViewerAPI.getViewMatrix}
     *
     * ```javascript
     * const viewMatrix = viewer.getViewMatrix();
     * ```
     *
     * However, if you are interested in subscribing to view changes, you can listen to the {@link ViewChangedEvent}:
     *
     * ```javascript
     * webvis.getContext().registerListener(
     *  [EventType.VIEW_CHANGED],
     *  (event) => {
     *   console.log("The view has changed. Current view matrix:", event.matrix);
     *  }
     * );
     * ```
     * ### Receiving information about the 3D scene via the ViewerAPI
     *
     * The ViewerAPI provides methods to retrieve information about the 3D scene based on the current view.
     * For instance, you can get the node IDs which are included or overlapped by a specific 2D screen space rectangle
     * using {@link ViewerAPI.requestNodeIdsByRect}:
     *
     * ```javascript
     * const x = 100;
     * const y = 100;
     * const width = 200;
     * const height = 200;
     * includeOverlappingNodes = true;
     * const nodeIDs = await viewer.requestNodeIdsByRect(x, y, width, height, includeOverlappingNodes);
     * ```
     *
     * Another example is to get all {@link TopologyHandle}s which are included and overlapped by a specific 2D screen
     * space rectangle using {@link ViewerAPI.requestTopologyHandlesByRect}:
     *
     * ```javascript
     * const x = 100;
     * const y = 100;
     * const width = 200;
     * const height = 200;
     * const topologyHandles = await viewer.requestTopologyHandlesByRect(x, y, width, height);
     * ```
     *
     * ### Taking screenshots
     *
     * The ViewerAPI provides a method to take screenshots of the current view. You can use {@link ViewerAPI.requestScreenshot}
     * to request a screenshot of the current viewer at the current view:
     *
     * ```javascript
     * const width = 800;
     * const height = 600;
     * const mimeType = "image/png";
     * const resetCanvasSize = true;
     * const screenshot = await viewer.requestScreenshot(width, height, mimeType, resetCanvasSize);
     * ```
     */
    interface ViewerAPI
        extends
            ViewerDrawingAPI,
            ViewerInteractionAPI,
            ViewerGizmoAPI,
            ViewerHighlightAPI,
            ViewerPolylineAPI,
            ViewerUserGeometryAPI,
            ViewerStateAPI,
            ViewerMagnifierAPI,
            ViewerXREdgeCompareAPI,
            ViewerHeatmapAPI,
            ViewerPointCloudAPI,
            ViewerBackgroundAPI,
            ViewerPointsOfInterestAPI
    {
        /**
         * Returns the webvis context to which the viewer belongs.
         *
         * @returns The context of the viewer
         */
        getContext(): ContextAPI;
        /**
         * Returns the ID of the viewer.
         *
         * @returns The ID of the viewer
         */
        getID(): string;
        /**
         * Changes the viewer setting with the given name to the given value.
         *
         * Triggers a {@link ViewerSettingChangedEvent} if the new value is different from the old value.
         *
         * @template T The type of the setting to change.
         * @param viewerSetting Specifies the particular viewer setting which should be changed.
         * @param value The new value for the setting.
         * @returns True if the setting was changed successfully, false otherwise.
         *
         * @see {@link ViewerSettingStrings} for a list of available viewer settings.
         */
        changeSetting<T extends ViewerSettingStrings | string>(viewerSetting: T, value: ViewerSettingType<T>): boolean;
        /**
         * Returns the current value of a viewer setting.
         *
         * @template T The type of the setting to read.
         * @param viewerSetting The name of the setting to read.
         * @returns The current value of the setting.
         *
         * @see {@link ViewerSettingStrings} for a list of available viewer settings.
         */
        readSetting<T extends ViewerSettingStrings | string>(viewerSetting: T): ViewerSettingType<T>;
        /**
         * Resets the value of a viewer setting to its default value.
         *
         * Triggers a {@link ViewerSettingChangedEvent}.
         *
         * @param viewerSetting The name of the viewer setting that should be reset.
         *
         * @see {@link ViewerSettingStrings} for a list of available viewer settings.
         */
        resetSetting(viewerSetting: ViewerSettingStrings): void;
        /**
         * Positions the camera such that the whole geometry is fitting into the view. The optional `view` and `up`
         * parameters allow to define a viewing direction and roll for the resulting camera pose, while the optional
         * `transitionTime` parameter allows for controlling animation speed.
         *
         * Triggers a {@link ViewChangedEvent}.
         *
         * @param view Defines the desired viewing direction
         * @param up Defines the desired camera orientation in conjunction with the viewing direction
         * @param transitionTime Defines the transition time for the camera movement in milliseconds. Default: 100.
         * @returns A promise that resolves when the camera movement is finished.
         */
        fitView(
            view?: [number, number, number] | Float32Array,
            up?: [number, number, number] | Float32Array,
            transitionTime?: number,
        ): Promise<void>;
        /**
         * Positions the camera such that the bounding box of the node with the `nodeID` is fitting into the view.
         * The optional `view` and `up` parameter allow to define a viewing direction and roll for the resulting camera
         * pose, while the optional `transitionTime` parameter allows for controlling animation speed.
         *
         * @param nodeID The ID of the node on which the view will be fitted on
         * @param view The direction in which the camera will look on the node
         * @param up The orientation in which the camera will look on the node
         * @param transitionTime Defines the transition time for the cameramovement in milliseconds. Default: 100.
         * @returns A promise that resolves when the camera movement is finished.
         */
        fitViewToNode(
            nodeID: number,
            view?: [number, number, number] | Float32Array,
            up?: [number, number, number] | Float32Array,
            transitionTime?: number,
        ): Promise<void>;
        /**
         * Positions the camera such that the aux node with the specified `nodeID` is fitting into the view.
         * The optional `transitionTime` parameter allows for controlling animation speed.
         *
         * Triggers a {@link ViewChangedEvent}.
         *
         * @param nodeID The ID of the node on which the view will be fitted on
         * @param transitionTime Defines the transition time for the camera movement in milliseconds. Default: 100.
         * @returns A promise that resolves when the camera movement is finished.
         *
         * @see {@link NodeType.AUX}
         */
        fitViewToAuxNode(nodeID: number, transitionTime?: number): Promise<void>;
        /**
         * Positions the camera such that the view is focused onto the given {@link BoxVolume}. The optional `view` and `up`
         * parameters allow to define a viewing direction and roll for the resulting camera pose, while the optional
         * `transitionTime` parameter allows for controlling animation speed.
         *
         * Triggers a {@link ViewChangedEvent}.
         *
         * @param volume A particular volume on which the view will be fitted
         * @param view Specifies the direction in which the camera will look on the volume
         * @param up Specifies the orientation in which the camera will look on the volume
         * @param transitionTime Defines the transition time for the camera movement in milliseconds. Default: 100.
         * @returns {Promise<void>} A promise that resolves when the camera movement is finished.
         *
         * @see {@link BoxVolume}
         */
        fitViewToVolume(
            volume: BoxVolume,
            view?: [number, number, number] | Float32Array,
            up?: [number, number, number] | Float32Array,
            transitionTime?: number,
        ): Promise<void>;
        /**
         * Positions the camera such that the view is focused onto the given rectangle.
         * The optional `transitionTime` parameter allows for controlling animation speed.
         *
         * Triggers a {@link ViewChangedEvent}.
         *
         * @param x - Specifies the X-coordinate of the 2D screen space rectangle in pixels.
         * @param y - Specifies the Y-coordinate of the 2D screen space rectangle in pixels.
         * @param width - Specifies the width of the 2D screen space rectangle in pixels.
         * @param height - Specifies the height of the 2D screen space rectangle in pixels.
         * @param transitionTime - Defines the transition time for the camera movement in milliseconds. Default: 1000.
         * @returns {Promise<void>} A promise that resolves when the camera movement is finished.
         */
        fitViewToRectangle(x: number, y: number, width: number, height: number, transitionTime?: number): Promise<void>;
        /**
         * Positions the camera such that it looks from a specific {@link ViewDirection}.
         * The optional `transitionTime` parameter allows for controlling animation speed.
         *
         * Triggers a {@link ViewChangedEvent}.
         *
         * @param direction The direction to fit. Default: {@link ViewDirection.CURRENT}.
         * @param transitionTime Defines the transition time for the camera movement in milliseconds. Default: 100.
         * @returns A promise that resolves when the camera movement is finished.
         *
         * @see {@link ViewDirection}
         */
        fitViewToDirection(direction?: ViewDirection, transitionTime?: number): Promise<void>;
        /**
         * Positions the camera such that it looks from the specified {@link ViewDirection} onto the specified {@link BoxVolume}.
         * The optional `transitionTime` parameter allows for controlling animation speed.
         *
         * Triggers a {@link ViewChangedEvent}.
         *
         * @param volume The volume on which the camera will be fitted
         * @param direction The direction to fit. Default: {@link ViewDirection.CURRENT}.
         * @param transitionTime Defines the transition time for the camera movement in milliseconds. Default: 100.
         * @returns A promise that resolves when the camera movement is finished.
         *
         * @see {@link BoxVolume}
         * @see {@link ViewDirection}
         */
        fitViewToVolumeFromDirection(
            volume: BoxVolume,
            direction?: ViewDirection,
            transitionTime?: number,
        ): Promise<void>;
        /**
         * Returns the center of rotation being the point around which the camera rotates around.
         *
         * @returns A 3D vector representing the center of rotation
         */
        getCenterOfRotation(): [number, number, number] | Float32Array;
        /**
         * Sets the center of rotation being the point around which the inspection camera rotates. If no
         * center parameter is supplied the center of rotation is set to the center of all currently loaded
         * models.
         *
         * @param center The new center of rotation represented by a 3D vector
         * @returns A promise that resolves when the center of rotation is set
         */
        setCenterOfRotation(center?: [number, number, number] | Float32Array): Promise<void>;
        /**
         * Sets the camera to the initial position specified in the {@link ViewerSettingStrings.INIT_VIEW} setting.
         * If the setting is not defined or empty, there will be no effect.
         *
         * Triggers a {@link ViewChangedEvent} if the {@link ViewerSettingStrings.INIT_VIEW} setting is set.
         */
        restoreInitView(): void;
        /**
         * Sets the camera position, its target and the up-vector. If the up-vector is not defined, the
         * previous up-vector is kept. The optional `transitionTime` parameter allows for controlling animation speed.
         *
         * @param position Specifies the new position or center of the camera
         * @param target Specifies the point on which the camera will look
         * @param upVector Specifies the new orientation of the camera
         * @param transitionTime Defines the transition time for the camera movement in milliseconds. Default: 0.
         * @returns A promise that resolves when the camera movement is finished.
         */
        setView(
            position: [number, number, number] | Float32Array,
            target: [number, number, number] | Float32Array,
            upVector?: [number, number, number] | Float32Array,
            transitionTime?: number,
        ): Promise<void>;
        /**
         * Sets the view matrix. The optional `transitionTime` parameter allows for controlling animation speed.
         *
         * @param matrix The new view matrix for the camera
         * @param transitionTime Defines the transition time for the camera movement in milliseconds. Default: 0.
         * @returns A promise that resolves when the camera movement is finished.
         */
        setViewMatrix(
            matrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array,
            transitionTime?: number,
        ): Promise<void>;
        /**
         * Animates to the specified view matrix.
         * The optional `transitionTime` parameter allows for controlling animation speed.
         *
         * @param matrix The new view matrix for the camera
         * @param transitionTime Defines the transition time for the camera movement in milliseconds. Default: 600.
         * @returns A promise that resolves when the camera movement is finished.
         */
        animateViewToViewmatrix(
            matrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array,
            transitionTime?: number,
        ): Promise<void>;
        /**
         * Returns the current camera position as a 3D vector.
         *
         * @returns The current camera position.
         */
        getCameraPosition(): [number, number, number] | Float32Array;
        /**
         * Returns the current {@link CameraProjectionType} of the camera.
         *
         * @returns The current camera projection type.
         *
         * @see {@link ViewerSettingStrings.PROJECTION_TYPE}
         */
        getCameraProjectionType(): CameraProjectionType;
        /**
         * @deprecated use {@link CoordinateSystemAPI.getCoordinateSystemMatrix} instead
         *
         * Returns a 4x4 rotation matrix which is used to transform the internal default right-handed coordinate system
         * with X and Y as front plane axis to the configured one.
         *
         * @returns The toCoordinateSystem matrix
         */
        getToCoordinateSystemMatrix(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
        /**
         * Returns the current view matrix. The 4x4 transformation matrix is represented as a flat 16-element array in
         * column-major order.
         *
         * @returns The current view matrix of the camera
         *
         * @see {@link ViewerAPI.setViewMatrix}
         */
        getViewMatrix(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ];
        /**
         * Sets the current projection matrix. The 4x4 transformation matrix must be represented as a flat 16-element array
         * in column-major order.
         *
         * @param matrix The new projection matrix
         *
         * @see {@link ViewerAPI.getProjectionMatrix}
         */
        setProjectionMatrix(
            matrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array,
        ): void;
        /**
         * Returns the current projection matrix. The 4x4 transformation matrix is represented as a flat 16-element array
         * in column-major order.
         *
         * @returns The current projection matrix
         *
         * @see {@link ViewerAPI.setProjectionMatrix}
         */
        getProjectionMatrix(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
        /**
         * Flips specific elements in the auxiliary geometry (like text or specific polygons)
         * with respect to the current view.
         */
        flipAuxToView(): void;
        /**
         * Sets the enabled state of the 3D navigation to on or off.
         * If called without any flag, the state will be toggled.
         *
         * @deprecated use {@link ViewerSettingStrings.NAVIGATION_MODE} instead
         *
         * @param flag Specifies if the navigation should be enabled or disabled. Default: true.
         */
        enableNavigation(flag?: boolean): void;
        /**
         * Returns a list of all {@link TopologyHandle}s which are included and overlapped by the specified 2D screen
         * space rectangle.
         *
         * @param x - Specifies the X-coordinate of the 2D screen space rectangle in pixels.
         * @param y - Specifies the Y-xoordinate of the 2D screen space rectangle in pixels.
         * @param width - Specifies the width of the 2D screen space rectangle in pixels.
         * @param height - Specifies the height of the 2D screen space rectangle in pixels.
         * @returns A list of all TopologyHandles which are included and overlapped by the
         * specified 2D screen space rectangle.
         */
        requestTopologyHandlesByRect(x: number, y: number, width: number, height: number): Promise<TopologyHandle[]>;
        /**
         * Returns a list of all node IDs which are included or overlapped by the specified 2D screen space rectangle.
         *
         * @param x - Specifies the X-Coordinate of the 2D screen space rectangle.
         * @param y - Specifies the Y-Coordinate of the 2D screen space rectangle.
         * @param width - Specifies the width of the 2D screen space rectangle.
         * @param height - Specifies the height of the 2D screen space rectangle.
         * @param includeOverlappingNodes - Specifies that the result should include nodes which overlap the
         * specified 2D screen space rectangle as well. Default: false.
         * @returns List of all node IDs which are included or overlapped by the specified 2D screen
         * space rectangle.
         */
        requestNodeIdsByRect(
            x: number,
            y: number,
            width: number,
            height: number,
            includeOverlappingNodes?: boolean,
        ): Promise<number[]>;
        /**
         * Takes a screenshot from the current view.
         *
         * @deprecated takeScreenshot is deprecated, please use {@link requestScreenshot} instead
         * @param callback - A callback containing the result which is executed after all Rendering operations are finished.
         * @param mimeType A string indicating the image format. The default type is image/png.
         * @param width - The width of the requested screenshot. If not specified it uses the width of the current view.
         * @param height - The height of the requested screenshot. If not specified it uses the height of the current view.
         */
        takeScreenshot(callback: (dataUrl: string) => void, mimeType?: string, width?: number, height?: number): void;
        /**
         * Requests a screenshot of the current viewer at the current view.
         *
         * @param width - The width of the requested screenshot. If not specified it uses the width of the current view.
         * @param height - The height of the requested screenshot. If not specified it uses the height of the current view.
         * @param mimeType - A string indicating the image format. Default: `image/png`.
         * @param resetCanvasSize - If 'true', it ensures that the “normal” screen-dependent resolution is used again after
         * taking the screenshot. Default: `true`.
         * @returns - A string containing the requested screenshot as dataUrl.
         */
        requestScreenshot(
            width?: number,
            height?: number,
            mimeType?: "image/png" | "image/jpeg",
            resetCanvasSize?: boolean,
        ): Promise<string>;
        /**
         * Enters the color compare mode which renders nodes depending on their {@link Property.COMPARISON_GROUP}.
         *
         * In the color compare mode, the viewer will render the pixels of nodes with the {@link Property.COMPARISON_GROUP}
         * set to the value {@link ComparisonGroup.A} in the color specified by the
         * {@link ViewerSettingStrings.COLOR_COMPARISON_FIRST_COLOR} setting. The pixels of nodes with the
         * {@link Property.COMPARISON_GROUP} set to the value {@link ComparisonGroup.B} will be rendered in the color
         * specified by the {@link ViewerSettingStrings.COLOR_COMPARISON_SECOND_COLOR} setting.
         * However, in this mode, the depth value at each pixel is compared between the two groups. If the depth values
         * overlap within a certain threshold, the pixel is rendered in the color specified by the
         * {@link ViewerSettingStrings.COLOR_COMPARISON_MATCHING_COLOR} setting.
         *
         * By this approach, the viewer can visualize the differences between two groups of nodes ("3-color-comparison").
         *
         * @see {@link InteractionMode.COLOR_COMPARISON}
         * @see {@link leaveColorCompareMode} to leave the color compare mode.
         */
        enterColorCompareMode(): void;
        /**
         * Leaves the color compare mode. For a description of the color compare mode see {@link enterColorCompareMode}.
         *
         * @see {@link Property.COMPARISON_GROUP}
         * @see {@link InteractionMode.COLOR_COMPARISON}
         * @see {@link enterColorCompareMode} to enter the color compare mode.
         */
        leaveColorCompareMode(): void;
        /**
         * Forces the viewer to render in the specified {@link RenderMode} regardless of any other {@link RenderMode} settings.
         * If {@link RenderMode.Unset} is passed, the viewer will switch back to the default mode, specified in
         * {@link ViewerSettingStrings.RENDER_MODE}.
         *
         * @param renderMode The render mode to force the viewer to render in.
         */
        forceRenderMode(renderMode: RenderMode): void;
        /**
         * @ignore
         */
        getCanvasHeight(): number;
        /**
         * @ignore
         */
        getCanvasWidth(): number;
        /**
         * @ignore
         */
        getCanvasElement(): HTMLCanvasElement;
        /**
         * @ignore
         */
        getBoundingClientRect(): ClientRect;
        /**
         * @ignore
         */
        unprojectPoint(inVector: Float32Array, outVector: Float32Array): void;
        /**
         * @ignore
         */
        trimSegmentToFrustum(pt0: Float32Array, pt1: Float32Array, ignoreNear?: boolean): boolean;
        /**
         * @ignore
         */
        projectPoint(inVector: Float32Array, outVector: Float32Array): void;
        /**
         * @ignore
         */
        projectPointToCanvas(inVector: Float32Array, outVector: Float32Array): void;
        /**
         * @ignore
         */
        unprojectPointFromCanvas(inVector: Float32Array, outVector: Float32Array): void;
        /**
         * @ignore
         */
        getVectoresForDirection(direction: number, view: Float32Array, up: Float32Array): void;
        /**
         * @ignore
         */
        resetPerspectiveFOV(): void;
        /**
         * @ignore
         */
        setDynamicClippingPlaneDistance(value: number): void;
        /**
         * @ignore
         */
        enableDynamicClippingPlane(flag: boolean): void;
        /**
         * @ignore
         */
        isNavigationEnabled(): boolean;
        /**
         * @ignore
         */
        setUserInputActive(flag: boolean): void;
        /**
         * @ignore
         */
        setVolatileHighlightEnabled(flag: boolean): void;
        /**
         * @deprecated Will be removed in a future version because it is not needed anymore to switch between render setups.
         *
         * The viewer is destroyed and reinitialized with renderSetup selection
         */
        reset(): void;
    }
    /**
     * Events that signal that the viewport size has changed.
     * It contains the new width and height of the viewport.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.VIEWPORT_CHANGED}
     */
    class ViewportChangedEvent extends WebVisEvent {
        width: number;
        height: number;
        /**
         * @param width The new width of the viewport
         * @param height The new height of the viewport
         */
        constructor(width: number, height: number);
    }
    /**
     * Event that is fired when a viewer setting is changed.
     * The event contains the name of the setting that was changed and the new value of the setting
     * as well as the viewer in which the setting was changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.VIEWER_SETTING_CHANGED}
     * @see {@link ViewerSettingStrings}
     */
    class ViewerSettingChangedEvent extends WebVisEvent {
        viewerSetting: string;
        value: any;
        viewer: ViewerAPI;
        /**
         * @param viewerSetting The name of the setting that has changed
         * @param value The new value of the setting
         * @param viewer The viewer in which the setting was changed
         */
        constructor(viewerSetting: string, value: any, viewer: ViewerAPI);
    }
    /**
     * Event that is fired when a viewer gets removed.
     * The event contains the id of the viewer that was removed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.VIEWER_REMOVED}
     */
    class ViewerRemovedEvent extends WebVisEvent {
        viewerId: string;
        /**
         * @param viewerId The id of the viewer that was removed
         */
        constructor(viewerId: string);
    }
    /**
     * Event that is fired when a viewer navigation gets started.
     * If and when this event is fired depends on the navigation mode that is used.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.VIEWER_NAVIGATION_STARTED}
     * @see {@link NavigationMode}
     */
    class ViewerNavigationStartedEvent extends WebVisEvent {
        viewerId: string;
        /**
         * @param viewerId The id of the viewer in which the navigation was started
         */
        constructor(viewerId: string);
    }
    /**
     * Event that is fired when a viewer navigation ends.
     * If and when this event is fired depends on the navigation mode that is used.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.VIEWER_NAVIGATION_ENDED}
     * @see {@link NavigationMode}
     */
    class ViewerNavigationEndedEvent extends WebVisEvent {
        viewerId: string;
        /**
         * @param viewerId The id of the viewer in which the navigation ended
         */
        constructor(viewerId: string);
    }
    /**
     * Event that is fired when a viewer gets created.
     * The event contains the id of the viewer that was created.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.VIEWER_CREATED}
     * @see {@link ContextAPI.createViewer}
     */
    class ViewerCreatedEvent extends WebVisEvent {
        viewerId: string;
        /**
         * @param viewerId The id of the viewer that was created
         */
        constructor(viewerId: string);
    }
    /**
     * Event that is fired when the view matrix of a viewer is changed.
     * The view matrix can be changed externally, for instance via user
     * interaction or on application level by setting the view matrix of
     * the viewer. It might also be changed by webvis internal logic that
     * requires the view matrix to be updated as a side effect.
     * The event contains the new view matrix.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.VIEW_CHANGED}
     * @see {@link ViewerAPI.setViewMatrix}
     */
    class ViewChangedEvent extends WebVisEvent {
        viewer: ViewerAPI;
        matrix: Float32Array;
        /**
         * @param viewer The viewer in which the view matrix was changed
         * @param matrix The new view matrix
         */
        constructor(viewer: ViewerAPI, matrix: Float32Array);
    }
    /**
     * Event that is fired when the viewer progress state changes.
     * This is the case whenever the viewer uploads data to the GPU,
     * makes a request to a service or updates the rendering state.
     *
     * If every resource is downloaded and drawing is finished,
     * a {@link ModelRenderedEvent} will be fired.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.PROGRESS_CHANGED}
     */
    class ProgressChangedEvent extends WebVisEvent {
        progressState: ProgressState;
        /**
         * @param progressState The current progress state of the viewer
         */
        constructor(progressState: ProgressState);
    }
    /**
     * Event that is fired when every resource is downloaded and the drawing is finished.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MODEL_RENDERED}
     */
    class ModelRenderedEvent extends WebVisEvent {
        constructor();
    }
    /**
     * Represents the two different view perspectives available in the viewer.
     * They determine the definition of left and right in the viewer.
     *
     * **Example**
     * - In the {@link INSIDE} view perspective, when speaking of the left wing mirror
     * of a car, it is the mirror on the left side of the car, when looking from the
     * inside of the car.
     * - In the {@link OUTSIDE} view perspective, when speaking of the left wing mirror
     * of a car, it is the mirror on the left side of the car, when looking from the
     * outside of the car.
     *
     * This has an impact on the interpretation of the {@link ViewDirection} that is
     * passed for instance in {@link ViewerAPI.fitViewToDirection} or
     * {@link ViewerAPI.fitViewToVolumeFromDirection}.
     *
     * @see {@link ViewerSettingStrings.VIEW_PERSPECTIVE}
     */
    enum ViewPerspective {
        /**
         * The view perspective where the left and right sides are defined from the
         * inside of the object.
         */
        INSIDE = "insideView",
        /**
         * The view perspective where the left and right sides are defined from the
         * outside of the object.
         */
        OUTSIDE = "outsideView",
    }
    /**
     * A list of available predefined lighting environments in a viewer.
     */
    enum ViewerLightingEnvironment {
        /**
         * The default lighting environment: A dynamic light source which follows the camera.
         */
        HEADLIGHT = 0,
        /**
         * Multiple colored static light sources.
         */
        FOUR_POINT_LIGHTING = 1,
        /**
         * A combination of static and dynamic light sources.
         * Optimized to reduce strong highlights on flat objects.
         */
        FIVE_POINT_LIGHTING = 2,
    }
    /**
     * A list of predefined view directions that are understood by the viewer
     * for instance in {@link ViewerAPI.fitViewToDirection} or
     * {@link ViewerAPI.fitViewToVolumeFromDirection}. Note, that the viewer's
     * interpretation of these directions depends on the current {@link ViewPerspective}.
     */
    enum ViewDirection {
        TOP = 0,
        BOTTOM = 1,
        FRONT = 2,
        BACK = 3,
        LEFT = 4,
        RIGHT = 5,
        TOP_BACK_RIGHT = 6,
        TOP_FRONT_RIGHT = 7,
        TOP_BACK_LEFT = 8,
        TOP_FRONT_LEFT = 9,
        BOTTOM_BACK_RIGHT = 10,
        BOTTOM_FRONT_RIGHT = 11,
        BOTTOM_BACK_LEFT = 12,
        BOTTOM_FRONT_LEFT = 13,
        FRONT_LEFT = 14,
        FRONT_RIGHT = 15,
        BACK_LEFT = 16,
        BACK_RIGHT = 17,
        FRONT_TOP = 18,
        FRONT_BOTTOM = 19,
        BACK_TOP = 20,
        BACK_BOTTOM = 21,
        RIGHT_TOP = 22,
        RIGHT_BOTTOM = 23,
        LEFT_TOP = 24,
        LEFT_BOTTOM = 25,
        /**
         * Represents the current view direction of the viewer.
         */
        CURRENT = 26,
    }
    /**
     * The possible Order Independent Trancparency Modes.
     */
    enum TransparencyMode {
        /**
         * High performance but low fidelity rendering of transparent objects (default setting).
         * Implements weighted-blended order-independent transparency.
         * Works well for any of the following scenarios:
         *  - Small number of transparent objects
         *  - Very high transparency (low opacity)
         *  - Little overdraw between transparent objects
         */
        PERFORMANCE = 0,
        /**
         * High fidelity but less performance rendering of transparent objects.
         * Implements depth peeling along with weighted-blended order-independent transparency.
         * Performance impact is less than 50% is half of the visible objects are transparent.
         * Works well for any of the following scenarios:
         *  - Large number of transparent objects
         *  - Medium to low transparency (medium to high opacity)
         *  - High overdraw between transparent objects
         */
        QUALITY = 1,
    }
    /**
     * Lists the different screen space coverage calculation methods available in the viewer.
     *
     * @see {@link ViewerSettingStrings.SCREEN_SPACE_COVERAGE_CALCULATION_METHOD}
     */
    enum ScreenSpaceCoverageCalculationMethod {
        RADIAL_VEC_APPROX = 0,
        BBOX_AREA_APPROX = 1,
        BBOX_AREA_COMPUTATION = 2,
        BBOX_WEIGHTED_AREA_COMPUTATION = 3,
    }
    /**
     * Lists the different render setups available in the viewer.
     *
     * @see {@link ViewerSettingStrings.RENDER_SETUP}
     * @see {@link HubAPI.requestSupportedRenderSetups}
     */
    enum RenderSetup {
        /**
         * Rendering happens on the server. The server checks which parts are visible
         * and sends the information about the parts to the client. The client then loads
         * and renders only the visible parts. Requires server GPUs.
         *
         * @see {@link ServiceType.VIS}
         */
        HYBRID = "hy_rmcull",
        /**
         * Rendering happens only on the client side. Requires no server GPUs.
         */
        LOCAL = "cl_webgl1",
        /**
         * @ignore
         * @deprecated Not supported anymore.
         *
         * Rendering happens only on the server side. Requires server GPUs.
         */
        REMOTE = "rm_col_id_cull",
    }
    /**
     * Specifies a list of available camera projection types.
     *
     * @see {@link ViewerSettingStrings.PROJECTION_TYPE}
     * @see {@link ViewerAPI.getCameraProjectionType}
     */
    enum CameraProjectionType {
        /**
         * Perspective projection.
         *
         * The perspective projection is a type of projection where the view direction is not orthogonal to the projection plane.
         * This means that the size of an object on the 2D plane depends on its distance from the camera.
         */
        PERSPECTIVE = 0,
        /**
         * Orthographic projection.
         *
         * The orthographic projection is a type of parallel projection where the view direction is orthogonal to the projection plane.
         * This means that the size of an object does not depend on its distance from the camera. The orthographic projection is a
         * parallel projection, which means that lines which are parallel in the 3D scene will remain parallel in the 2D projection.
         */
        ORTHOGRAPHIC = 1,
    }
    interface VariantProperties {
        id: number;
        name: string;
        enabled: boolean;
    }
    interface VariantsAPI {
        /**
         * @param nodeId The ID of the Node.
         * @returns True, if the Node is Part of an enabled Variant. False otherwise.
         */
        isNodePartOfEnabledVariant(nodeId: number): Promise<boolean>;
        /**
         * @param nodeId The ID of the Node.
         * @returns The Variant(s) for a given nodeID.
         */
        requestVariants(nodeId: number): Promise<VariantProperties[]>;
        /**
         * Enables or disables a given Variant.
         * @param variant The ID of the Variant.
         * @param enabled The enabled state.
         */
        setVariantEnabled(variant: number, enabled: boolean): Promise<void>;
    }
    /**
     * VARIANTS_CHANGED
     * @event VARIANTS_CHANGED
     */
    class VariantChangedEvent extends WebVisEvent {
        variant: number;
        enabled: boolean;
        /**
         * The VARIANTS_CHANGED event occurs if the selected variants change.
         * @param variant        The id of the changed variant
         * @param enabled     The new enabled state of the changed variant.
         */
        constructor(variant: number, enabled: boolean);
    }
    /**
     * The INTERNAL_VARIANT_CHANGED event occurs if the selected variant change.
     *
     * @event
     * @hideconstructor
     * @ignore
     */
    class InternalVariantChangedEvent extends WebVisEvent {
        variant: number;
        variantPath: [number[], number];
        enabled: boolean;
        /**
         * @param variant The id of the changed variant.
         * @param variantPath The internal path of the changed variant.
         * @param enabled The new enabled state of the changed variant.
         */
        constructor(variant: number, variantPath: [number[], number], enabled: boolean);
    }
    interface UtilityAPI {
        /**
         * Creates a new BoxVolume object.
         * @param {[number, number, number]} min -
         * @param {[number, number, number]} max -
         * @returns {BoxVolume} A new Box Volume
         */
        createBoxVolume(min?: [number, number, number], max?: [number, number, number]): BoxVolume;
    }
    /**
     * Describes a topological torus entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyTorusDescriptor {
        /**
         * The area of the torus.
         */
        area: number;
        /**
         * The axis of the torus.
         */
        axis: [number, number, number];
        /**
         * The center point of the torus.
         */
        center: [number, number, number];
        /**
         * The minor radius of the torus.
         */
        minorRadius: number;
        /**
         * The major radius of the torus.
         */
        majorRadius: number;
    }
    /**
     * Describes a topological sphere entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologySphereDescriptor {
        /**
         * The area of the sphere.
         */
        area: number;
        /**
         * The center point of the sphere.
         */
        center: [number, number, number];
        /**
         * The radius of the sphere.
         */
        radius: number;
    }
    /**
     * Describes a topological shape entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyShapeDescriptor {
        /**
         * The volume of the shape.
         */
        volume: number;
    }
    /**
     * Helper to map {@link TopologyProperty}s to the corresponding
     * value types.
     *
     * @see {@link TopologyProperty}
     * @see {@link TopologyAPI}
     */
    interface TopologyPropertyTypeMap {
        "color": number[] | undefined;
        "selected": boolean;
        "highlighted": boolean;
    }
    /**
     * Describes a topological point entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyPointDescriptor {
        /**
         * The point.
         */
        point: [number, number, number];
    }
    /**
     * Describes a topological planar face entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyPlanarFaceDescriptor {
        /**
         * The area of the planar face.
         */
        area: number;
        /**
         * The coefficients A, B, C, and D of the plane
         * equation Ax + By + Cz = D of the planar face.
         */
        plane: [number, number, number, number];
    }
    /**
     * Describes a topological loop entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyLoopDescriptor {
        /**
         * The length of the loop.
         */
        length: number;
        /**
         * The center point of the loop.
         */
        center: [number, number, number];
    }
    /**
     * Describes a topological line segment entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyLineSegmentDescriptor {
        /**
         * The length of the line segment.
         */
        length: number;
        /**
         * The direction of the line segment.
         */
        direction: [number, number, number];
        /**
         * The end point of the line segment.
         */
        end: [number, number, number];
        /**
         * The start point of the line segment.
         */
        start: [number, number, number];
    }
    /**
     * A handle for a topological entity, which can be used with the
     * {@link TopologyAPI}. The handle represents either a shape or an
     * entity within a shape. To get a more detailed
     * {@link TopologyDescriptor descriptor} of the topological entity,
     * the function {@link TopologyAPI.requestTopologyDescriptor} can
     * be used. Besides performing actions such as selecting the
     * topological entity, the handle can also be used together with
     * the {@link MeasurementAPI} to perform different kinds of
     * measurements.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI.requestTopologyDescriptor}
     * @see {@link TopologyAPI}
     * @see {@link MeasurementAPI}
     */
    interface TopologyHandle {
        entityID?: number;
        entityType: EntityType;
        shapeInstanceID: number;
    }
    /**
     * Describes a topological face entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyFaceDescriptor {
        /**
         * The area of the face.
         */
        area: number;
    }
    /**
     * Describes a topological ellipse entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyEllipseDescriptor {
        /**
         * The axis of the ellipse.
         */
        axis: [number, number, number];
        /**
         * The center point of the ellipse.
         */
        center: [number, number, number];
        /**
         * The circumference of the ellipse.
         */
        circumference: number;
        /**
         * The major radius of the ellipse.
         */
        majorRadius: number;
        /**
         * The minor radius of the ellipse.
         */
        minorRadius: number;
    }
    /**
     * Describes a topological edge entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyEdgeDescriptor {
        /**
         * The length of the edge.
         */
        length: number;
    }
    /**
     * Helper to map {@link TopologySubType}s to the corresponding
     * descriptor types.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologySubType}
     * @see {@link TopologyAPI}
     */
    interface TopologyDescriptorMap {
        [TopologySubType.CIRCLE]: TopologyCircleDescriptor;
        [TopologySubType.CIRCULAR_ARC]: TopologyCircularArcDescriptor;
        [TopologySubType.CONE]: TopologyConeDescriptor;
        [TopologySubType.CURVE]: TopologyCurveDescriptor;
        [TopologySubType.CYLINDER]: TopologyCylinderDescriptor;
        [TopologySubType.EDGE]: TopologyEdgeDescriptor;
        [TopologySubType.ELLIPSE]: TopologyEllipseDescriptor;
        [TopologySubType.FACE]: TopologyFaceDescriptor;
        [TopologySubType.LINE_SEGMENT]: TopologyLineSegmentDescriptor;
        [TopologySubType.LOOP]: TopologyLoopDescriptor;
        [TopologySubType.PLANAR_FACE]: TopologyPlanarFaceDescriptor;
        [TopologySubType.SHAPE]: TopologyShapeDescriptor;
        [TopologySubType.SPHERE]: TopologySphereDescriptor;
        [TopologySubType.TORUS]: TopologyTorusDescriptor;
        [TopologySubType.BOX]: TopologyBoxDescriptor;
        [TopologySubType.POINT]: TopologyPointDescriptor;
    }
    /**
     * A descriptor for a topological entity. It contains the
     * {@link TopologySubType subtype} and an object with a series
     * of known attributes of the topological entity. For example,
     * the attributes of a circle are defined in a
     * {@link TopologyCircleDescriptor} and include
     * the center, radius, axis, and circumference. A descriptor
     * for a given topological entity can be requested via
     * {@link TopologyAPI.requestTopologyDescriptor}.
     *
     * @see {@link TopologySubType}
     * @see {@link TopologyDescriptorMap}
     * @see {@link TopologyAPI.requestTopologyDescriptor}
     */
    type TopologyDescriptor<K extends keyof TopologyDescriptorMap = keyof TopologyDescriptorMap> = {
        [P in K]: {
            /**
             * The subtype of the topological entity.
             */
            type: P;
            /**
             * The attributes of the topological entity.
             */
            descriptor: TopologyDescriptorMap[P];
        };
    }[K];
    /**
     * Describes a topological cylinder entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyCylinderDescriptor {
        /**
         * The area of the cylinder.
         */
        area: number;
        /**
         * The center point of the cylinder.
         */
        center: [number, number, number];
        /**
         * The radius of the cylinder.
         */
        radius: number;
        /**
         * The height of the cylinder.
         */
        height: number;
        /**
         * The axis of the cylinder.
         */
        axis: [number, number, number];
    }
    /**
     * Describes a topological curve entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyCurveDescriptor {
        /**
         * The length of the curve.
         */
        length: number;
        /**
         * The start point of the curve.
         */
        start: [number, number, number];
        /**
         * The end point of the curve.
         */
        end: [number, number, number];
    }
    /**
     * Describes a topological cone entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyConeDescriptor {
        /**
         * The area of the cone.
         */
        area: number;
        /**
         * The axis of the cone.
         */
        axis: [number, number, number];
        /**
         * The center point of the cone.
         */
        center: [number, number, number];
        /**
         * The radius of the cone.
         */
        radius: number;
        /**
         * The height of the cone.
         */
        height: number;
        /**
         * The half angle of the cone.
         */
        halfAngle: number;
    }
    /**
     * Describes a topological circular arc entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyCircularArcDescriptor {
        /**
         * The angle of the circular arc.
         */
        angle: number;
        /**
         * The axis of the circular arc.
         */
        axis: [number, number, number];
        /**
         * The center point of the circular arc.
         */
        center: [number, number, number];
        /**
         * The length of the circular arc.
         */
        arcLength: number;
        /**
         * The radius of the circular arc.
         */
        radius: number;
        /**
         * The end point of the circular arc.
         */
        end: [number, number, number];
        /**
         * The start point of the circular arc.
         */
        start: [number, number, number];
    }
    /**
     * Describes a topological circle entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyCircleDescriptor {
        /**
         * The radius of the circle.
         */
        radius: number;
        /**
         * The center point of the circle.
         */
        center: [number, number, number];
        /**
         * The axis of the circle.
         */
        axis: [number, number, number];
        /**
         * The circumference of the circle.
         */
        circumference: number;
    }
    /**
     * Describes a topological box entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyAPI}
     */
    interface TopologyBoxDescriptor {
        /**
         * The center point of the box.
         */
        center: [number, number, number];
        /**
         * The dimension of the box.
         */
        dimension: [number, number, number];
        /**
         * The volume of the box
         */
        volume: number;
    }
    /**
     * A handle that holds an entity and shape identifier from the original CAD file.
     *
     * @see {@link TopologyAPI.mapOriginalToInternalTopologyHandles}
     * @see {@link TopologyAPI.mapInternalToOriginalTopologyHandles}
     */
    interface OriginalTopologyHandle {
        /**
         * The entity identifier from the original CAD file
         */
        entityID: number;
        /**
         * The shape identifier from the original CAD file
         */
        shapeID?: string | undefined;
    }
    /**
     * ## TopologyAPI
     *
     * ### Overview
     *
     * The TopologyAPI provides access to low-level topological entities within a 3D model.
     * A topological entity can be a point, some kind of edge or face, or a shape that groups
     * several of these entities together.
     *
     * A topological entity is usually represented by a {@link TopologyHandle}. Each topological
     * entity has a general {@link TopologyType type} and a more specific {@link TopologySubType subtype}.
     *
     * Given a {@link TopologyHandle}, a more detailed descriptor can be requested via the
     * {@link TopologyAPI.requestTopologyDescriptor requestTopologyDescriptor} function. This
     * descriptor contains the subtype and an object with a series of known attributes of the
     * topological entity. For example, a descriptor for a circle includes the center and
     * radius of the circle.
     *
     * ### Quick Start
     *
     * A topology handle can be obtained via {@link TopologyAPI.mapOriginalToInternalTopologyHandles mapOriginalToInternalTopologyHandles}
     * by providing the identifier of the entity in the original CAD file.
     *
     * Alternatively, you can use a click event listener to obtain a handle for the topological
     * entity under the mouse cursor:
     *
     * ```javascript
     * const context = webvis.getContext();
     * const viewer = context.getViewer();
     *
     * // Disable node selection on click and enable interaction
     * // with topological entities
     * context.setInteractionMode(webvis.InteractionMode.NONE);
     * viewer.setInteractionLevel(webvis.ViewerInteractionLevel.TOPOLOGY);
     * viewer.forceRenderMode(webvis.RenderMode.FacesTopology);
     * viewer.enableSnapping(true);
     *
     * const listenerId = context.registerListener([webvis.EventType.NODE_CLICKED], async (event) => {
     *     const pointerInfo = event.pointerInfo;
     *     const topologyHandle = await pointerInfo.requestTopologyHandle();
     *
     *     await context.addTopologyToSelection(topologyHandle);
     *
     *     const topologyDescriptor = await context.requestTopologyDescriptor(topologyHandle);
     *     console.log("Descriptor: ", topologyDescriptor);
     *
     *     const [originalIdentifier] = await context.mapInternalToOriginalTopologyHandles([topologyHandle]);
     *     console.log("Identifier in original CAD file: ", originalIdentifier);
     * }, 0, true); // Set option 'observeSubTree' to true to observe all entities
     * ```
     *
     * ### Combination With Other APIs
     *
     * When the viewer interaction level is set to {@link ViewerInteractionLevel.TOPOLOGY TOPOLOGY}
     * via the function {@link ViewerInteractionAPI.setInteractionLevel}, webvis will emit
     * {@link TopologyPointerEnterEvent}s and {@link TopologyPointerOutEvent}s when the mouse
     * cursor enters or leaves a topological entity:
     *
     * ```javascript
     * // Setup as shown in the previous example, including setting
     * // the viewer interaction level to TOPOLOGY
     *
     * const listenerId = context.registerListener([webvis.EventType.TOPOLOGY_POINTER_ENTER], (event) => {
     *     const topologyHandle = event.topologyHandle;
     *     viewer.highlightEntity(topologyHandle, {color: [1, 0.8, 0, 0.5]});
     * }, 0, true); // Set option 'observeSubTree' to true to observe all entities
     * ```
     *
     * As demonstrated in the example above, you can use the function {@link ViewerHighlightAPI.highlightEntity}
     * to highlight a topological entity.
     *
     * In addition to that, the {@link MeasurementAPI} can be used to perform different kinds of
     * measurements with topological entities. Examples include distance, angle, and thickness
     * measurements, as well as tangent calculations.
     */
    interface TopologyAPI {
        /**
         * Adds one or more topological entities to the current selection.
         *
         * @see {@link TopologyAPI.setTopologySelection setTopologySelection}
         * @see {@link TopologyAPI.removeTopologyFromSelection removeTopologyFromSelection}
         * @see {@link TopologyAPI.clearTopologySelection clearTopologySelection}
         * @see {@link TopologyAPI.getSelectedTopologyHandles getSelectedTopologyHandles}
         *
         * @param handle The topological entity or array of topological entities which
         *               should be added to the current selection.
         * @returns A promise which resolves when the operation is completed.
         */
        addTopologyToSelection(handle: TopologyHandle | TopologyHandle[]): Promise<void>;
        /**
         * Clears the current topological entity selection.
         *
         * @see {@link TopologyAPI.setTopologySelection setTopologySelection}
         * @see {@link TopologyAPI.addTopologyToSelection addTopologyToSelection}
         * @see {@link TopologyAPI.removeTopologyFromSelection removeTopologyFromSelection}
         * @see {@link TopologyAPI.getSelectedTopologyHandles getSelectedTopologyHandles}
         *
         * @returns A promise which resolves when the operation is completed.
         */
        clearTopologySelection(): Promise<void>;
        /**
         * Creates a circular arc descriptor based on three points.
         * @param point0 The first point.
         * @param point1 The second point.
         * @param point2 The third point.
         * @returns A circular arc descriptor.
         */
        createCircularArcDescriptor(
            point0: [number, number, number],
            point1: [number, number, number],
            point2: [number, number, number],
        ): TopologyDescriptor<TopologySubType.CIRCULAR_ARC>;
        /**
         * Creates a point descriptor for the specified point.
         * @param point The point.
         * @returns A point descriptor.
         */
        createPointDescriptor(point: [number, number, number]): TopologyDescriptor<TopologySubType.POINT>;
        /**
         * Returns all selected topological entities.
         *
         * @see {@link TopologyAPI.isTopologySelected isTopologySelected}
         * @see {@link TopologyAPI.setTopologySelection setTopologySelection}
         *
         * @returns All selected topological entities.
         */
        getSelectedTopologyHandles(): Array<TopologyHandle>;
        /**
         * Returns the type of the given topological entity.
         * @param handle The topology handle.
         * @returns The type of the given topological entity.
         */
        getTopologyType(handle: TopologyHandle): TopologyType;
        /**
         * Returns a handle for the shape that contains the given topological entity.
         * @param handle The topology handle.
         * @returns A handle for the shape that contains the given topological entity.
         */
        getShapeHandle(handle: TopologyHandle): TopologyHandle;
        /**
         * Returns true if the specified topological entity is selected, false otherwise.
         *
         * @see {@link TopologyAPI.getSelectedTopologyHandles getSelectedTopologyHandles}
         * @see {@link TopologyAPI.setTopologySelection setTopologySelection}
         *
         * @param handle The topology handle.
         * @returns True if the specified topological entity is selected, false otherwise.
         */
        isTopologySelected(handle: TopologyHandle): boolean;
        /**
         * Maps the given original topology handles to the corresponding webvis topology
         * handles.
         *
         * @see {@link TopologyAPI.mapInternalToOriginalTopologyHandles mapInternalToOriginalTopologyHandles}
         *
         * @param nodeID  The node which represents the part that contains the
         *                topological entities.
         * @param handles The original topology handles to be mapped.
         * @returns The corresponding webvis topology handles.
         */
        mapOriginalToInternalTopologyHandles(
            nodeID: number,
            handles: OriginalTopologyHandle[],
        ): Promise<Array<TopologyHandle | undefined>>;
        /**
         * Maps the given webvis topology handles to the corresponding original topology
         * handles.
         *
         * @see {@link TopologyAPI.mapOriginalToInternalTopologyHandles mapOriginalToInternalTopologyHandles}
         *
         * @param handles The webvis topology handles to be mapped.
         * @returns The corresponding original topology handles.
         */
        mapInternalToOriginalTopologyHandles(
            handles: TopologyHandle[],
        ): Promise<Array<OriginalTopologyHandle | undefined>>;
        /**
         * Removes one or more topological entities from the current selection.
         *
         * @see {@link TopologyAPI.setTopologySelection setTopologySelection}
         * @see {@link TopologyAPI.addTopologyToSelection addTopologyToSelection}
         * @see {@link TopologyAPI.clearTopologySelection clearTopologySelection}
         * @see {@link TopologyAPI.getSelectedTopologyHandles getSelectedTopologyHandles}
         *
         * @param handle The topological entity or array of topological entities which
         *               should be removed from the current selection.
         * @return A promise which resolves when the operation is completed.
         */
        removeTopologyFromSelection(handle: TopologyHandle | TopologyHandle[]): Promise<void>;
        /**
         * Returns the neighboring edges of the specified topological entity.
         * @param handle The topological entity for which the neighboring edges should be requested.
         * @returns The neighboring edges of the specified topological entity.
         */
        requestNeighboringEdges(handle: TopologyHandle): Promise<TopologyHandle[]>;
        /**
         * Returns the neighboring faces of the specified topological entity.
         * @param handle The topological entity for which the neighboring faces should be requested.
         * @returns The neighboring faces of the specified topological entity.
         */
        requestNeighboringFaces(handle: TopologyHandle): Promise<TopologyHandle[]>;
        /**
         * Returns a list of shape handles for the specified node or subtree.
         * @param nodeId The node ID which is used to collect the shape handles.
         * @returns The list of shape handles for the specified node or subtree
         */
        requestShapeHandles(nodeId: number): Promise<TopologyHandle[]>;
        /**
         * Returns a detailed descriptor for the specified topological entity.
         * The descriptor contains the {@link TopologySubType subtype} and an
         * object with a series of known attributes of the topological entity.
         * For example, a descriptor for a circle includes the center and
         * radius of the circle.
         * @param handle The topological entity.
         * @returns A detailed descriptor for the specified topological entity.
         */
        requestTopologyDescriptor(handle: TopologyHandle): Promise<TopologyDescriptor>;
        /**
         * Returns a box descriptor for the combined bounding box of the
         * specified nodes.
         * @param nodeIds The nodes for which the box descriptor should
         *                be created.
         * @returns The box descriptor for the combined bounding box of
         *          the specified nodes.
         */
        requestBoxDescriptor(nodeIds: number[]): Promise<TopologyDescriptor<TopologySubType.BOX>>;
        /**
         * Sets a {@link TopologyProperty property} of one or more topological
         * entities.
         * @template T     The property which should be set.
         * @param handle   The topological entity or array of topological
         *                 entities which should be modified.
         * @param property The property which should be set.
         * @param value    The new value of the property.
         * @returns A promise which resolves when the operation is completed.
         */
        setTopologyProperty<T extends keyof TopologyPropertyTypeMap>(
            handle: TopologyHandle | TopologyHandle[],
            property: T,
            value: TopologyPropertyTypeMap[T],
        ): Promise<PromiseSettledResult<void>[]>;
        /**
         * Sets the current selection to the specified topological entities.
         *
         * @see {@link TopologyAPI.addTopologyToSelection addTopologyToSelection}
         * @see {@link TopologyAPI.removeTopologyFromSelection removeTopologyFromSelection}
         * @see {@link TopologyAPI.clearTopologySelection clearTopologySelection}
         * @see {@link TopologyAPI.getSelectedTopologyHandles getSelectedTopologyHandles}
         *
         * @param handle One or more topological entities that should be selected.
         * @returns A promise which resolves when the operation is completed.
         */
        setTopologySelection(handle: TopologyHandle | TopologyHandle[]): Promise<void>;
    }
    /**
     * The possible types of a topological entity. Each topological
     * entity also has a more specific subtype, as defined in the
     * {@link TopologySubType} enum.
     *
     * @see {@link TopologySubType}
     * @see {@link TopologyAPI.getTopologyType}
     */
    enum TopologyType {
        /**
         * A face within a shape. This can be a planar or
         * non-planar face.
         */
        FACE = 1,
        /**
         * An edge within a shape. This can be a line segment,
         * circular arc, or other kind of edge.
         */
        EDGE = 2,
        /**
         * A point within a shape.
         */
        POINT = 3,
        /**
         * A shape, which can contain faces, edges, and points.
         */
        SHAPE = 4,
    }
    /**
     * The possible subtypes of a topological entity.
     *
     * @see {@link TopologyDescriptor}
     * @see {@link TopologyDescriptorMap}
     * @see {@link TopologyAPI}
     */
    enum TopologySubType {
        /**
         * A circle, which can be described by a {@link TopologyCircleDescriptor}.
         */
        CIRCLE = 0,
        /**
         * A circular arc, which can be described by a {@link TopologyCircularArcDescriptor}.
         */
        CIRCULAR_ARC = 1,
        /**
         * A cone, which can be described by a {@link TopologyConeDescriptor}.
         */
        CONE = 2,
        /**
         * A curve, which can be described by a {@link TopologyCurveDescriptor}.
         */
        CURVE = 3,
        /**
         * A cylinder, which can be described by a {@link TopologyCylinderDescriptor}.
         */
        CYLINDER = 4,
        /**
         * An edge, which can be described by a {@link TopologyEdgeDescriptor}.
         */
        EDGE = 5,
        /**
         * An ellipse, which can be described by a {@link TopologyEllipseDescriptor}.
         */
        ELLIPSE = 6,
        /**
         * A face, which can be described by a {@link TopologyFaceDescriptor}.
         */
        FACE = 7,
        /**
         * A line segment, which can be described by a {@link TopologyLineSegmentDescriptor}.
         */
        LINE_SEGMENT = 8,
        /**
         * A loop, which can be described by a {@link TopologyLoopDescriptor}.
         */
        LOOP = 9,
        /**
         * A planar face, which can be described by a {@link TopologyPlanarFaceDescriptor}.
         */
        PLANAR_FACE = 10,
        /**
         * A shape, which can be described by a {@link TopologyShapeDescriptor}.
         */
        SHAPE = 11,
        /**
         * A sphere, which can be described by a {@link TopologySphereDescriptor}.
         */
        SPHERE = 12,
        /**
         * A torus, which can be described by a {@link TopologyTorusDescriptor}.
         */
        TORUS = 13,
        /**
         * A box, which can be described by a {@link TopologyBoxDescriptor}.
         */
        BOX = 14,
        /**
         * A point, which can be described by a {@link TopologyPointDescriptor}.
         */
        POINT = 15,
    }
    /**
     * The properties of a topological entity that can be set via the
     * {@link TopologyAPI}.
     *
     * @see {@link TopologyAPI}
     * @see {@link TopologyAPI.setTopologyProperty}
     */
    enum TopologyProperty {
        /**
         * The color of the topological entity. The value is an
         * array of four numbers in the range from 0 to 1,
         * representing the red, green, blue, and alpha components
         * of the color. If the color is set to undefined, it will
         * be reset to the default color.
         *
         * @default undefined
         */
        COLOR = "color",
        /**
         * The highlighted state of the topological entity.
         *
         * @default false
         */
        HIGHLIGHTED = "highlighted",
        /**
         * The selected state of the topological entity.
         *
         * @default false
         */
        SELECTED = "selected",
    }
    /**
     * The possible types of a topological entity. Analogous to
     * enum {@link TopologyType}. Each topological entity also
     * has a more specific subtype, as defined in the
     * {@link TopologySubType} enum.
     *
     * @see {@link TopologyHandle}
     * @see {@link TopologySubType}
     * @see {@link TopologyAPI}
     */
    enum EntityType {
        /**
         * A face within a shape. This can be a planar or
         * non-planar face.
         */
        FACE = 1,
        /**
         * An edge within a shape. This can be a line segment,
         * circular arc, or other kind of edge.
         */
        EDGE = 2,
        /**
         * A point within a shape.
         */
        POINT = 3,
        /**
         * A shape, which can contain faces, edges, and points.
         */
        SHAPE = 4,
    }
    /**
     * Defines the configuration options for creating or managing a {@link SpaceAPI | 3D space}.
     */
    interface SpaceConfiguration {
        /**
         * The retain policy for the space.
         */
        retainPolicy: SpaceRetainPolicy;
        /**
         * Optional tags associated with the space.
         */
        tags?: string[];
        /**
         * An optional description for the space.
         */
        description?: string;
        /**
         * An optional name for the space.
         */
        name?: string;
        /**
         * Optional mapping of member roles to their corresponding access tokens for the space. Set when creating a space.
         */
        tokens?: MemberRoleToSpaceAccessToken;
    }
    /**
     * Maps each {@link MemberRole} to its corresponding {@link SpaceAPI | space} access token.
     */
    type MemberRoleToSpaceAccessToken = {
        [K in MemberRole]: string;
    };
    /**
     * ## Space API
     *
     * The Space API provides methods to interact with a 3D space.
     *
     * ### Overview
     *
     * To work with 3D spaces, you can use the Space API to open existing spaces, create new ones,
     * and obtain shareable space handles.
     *
     * ### Quick Start
     *
     * ```javascript
     * // User A: Gets a shareable handle for the current space
     * const spaceHandle = await webvis.getContext().requestSpaceHandle();
     *
     * // User B: Opens an existing space using the handle of user A
     * await webvis.getContext().openSpace(spaceHandle); // You're now in the existing space
     *
     * // You can also create a new, empty space
     * await webvis.getContext().openSpace(); // You're now in a new, empty space
     * ```
     *
     * ### Space Handles
     *
     * A space handle is a URL that can be used to open a specific 3D space. It contains the space ID and an optional access
     * token for a specific member role. You can obtain a space handle for the current space using the `requestSpaceHandle`
     * method.
     *
     * ```javascript
     * // Get the webvis context
     * const context = await webvis.getContext();
     *
     * // Get a space handle for the current space with the default role (Viewer)
     * const viewerHandle = await context.requestSpaceHandle();
     *
     * // Get a space handle for the current space with a certain role
     * const editorHandle = await context.requestSpaceHandle(MemberRole.EDITOR);
     * ```
     *
     * ### Cloning Spaces
     *
     * You can create a new 3D space by cloning the current space using the `cloneIntoNewSpace` method.
     * This creates a new space with the same content as the current one, allowing you to make changes
     * without affecting the original space.
     *
     * ```javascript
     * // Clone the current space into a new space
     * await context.cloneIntoNewSpace(); // You're now in the cloned space
     * ```
     *
     * ### Events
     *
     * The Space API emits the following events:
     * - {@link SpaceOpenedEvent}
     */
    interface SpaceAPI {
        /**
         * Opens a 3D space.
         *
         * If a space handle is specified and it exists, switches to the 3D space referenced by the handle.
         * If a space handle is specified and it does not exist, throws an error.
         * If no space handle is specified, creates a new 3D space and clears the content.
         *
         * @param spaceHandle The handle of the space to open. If undefined, a new space is created.
         * @returns A promise that resolves when the space has been opened.
         *
         * @see {@link requestSpaceHandle} to get a space handle.
         */
        openSpace(spaceHandle?: string): Promise<void>;
        /**
         * Opens a new 3D space by cloning the current space.
         *
         * @returns A promise that resolves when the new space has been opened.
         */
        cloneIntoNewSpace(): Promise<void>;
        /**
         * Requests a shareable space handle for the current 3D space.
         *
         * A space handle is a URL that can be used to open the current 3D space. It has the following format:
         * - `<HUB_URL>/api/space/v2/<SPACE_ID>` if no role is specified.
         * - `<HUB_URL>/api/space/v2/<SPACE_ID>?token=<TOKEN>` if a role is specified.
         * where `<HUB_URL>` is the URL of the hub, `<SPACE_ID>` is the ID of the current space, and `<TOKEN>` is the
         * access token for the specified role.
         *
         * @param role The role to assign when the space is opened via the handle. If undefined, the {@link MemberRole.VIEWER}
         * role will be assigned when opening the space via the handle.
         * @returns A promise that resolves to the space handle.
         */
        requestSpaceHandle(role?: MemberRole): Promise<string>;
    }
    /**
     * Event that is fired when a {@link SpaceAPI | 3D space} is opened.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.SPACE_OPENED}
     */
    class SpaceOpenedEvent extends WebVisEvent {
        constructor();
    }
    /**
     * Lists all available space retain policies.
     *
     * A space retain policy defines the conditions under which a {@link SpaceAPI | 3D space} is preserved or discarded.
     */
    enum SpaceRetainPolicy {
        /**
         * Preserve the space even when the owner leaves.
         */
        PRESERVE = 1,
        /**
         * Discard the space when the owner leaves.
         */
        DISCARD_WHEN_OWNER_LEAVES = 2,
        /**
         * Discard the space when the last member leaves.
         */
        DISCARD_WHEN_LAST_MEMBER_LEAVES = 3,
    }
    type ViewerSettingType<T> = T extends "aaSetting" ? boolean
        : T extends "backgroundColor" ? string | undefined | null
        : T extends "defaultFieldOfView" ? number
        : T extends "cappingEffectEdgeColor" ? string | undefined | null
        : T extends "cappingEffectInnerColor" ? string | undefined | null
        : T extends "cappingEffectEnabled" ? boolean
        : T extends "colorizeEffect" ? boolean
        : T extends "colorComparisonMatchingColor" ? string | undefined | null
        : T extends "colorComparisonFirstColor" ? string | undefined | null
        : T extends "colorComparisonSecondColor" ? string | undefined | null
        : T extends "coordSys" ? FrontPlaneAxis
        : T extends "disableSpecularHighlights" ? boolean
        : T extends "doubleClickAnimationVolumeScale" ? number
        : T extends "doubleClickTimeWindow" ? number
        : T extends "drawingArrowheadStart" ? DrawingArrowhead
        : T extends "drawingArrowheadEnd" ? DrawingArrowhead
        : T extends "drawingColor" ? string | undefined | null
        : T extends "drawingMode" ? DrawingMode
        : T extends "drawingSize" ? number
        : T extends "dynamicAuxContrastEnabled" ? boolean
        : T extends "dynamicClippingEnabled" ? boolean
        : T extends "dynamicClippingDistance" ? number
        : T extends "dynamicCOREnabled" ? boolean
        : T extends "expandOnViewerSelection" ? boolean
        : T extends "faceHighlightColor" ? string | undefined | null
        : T extends "faceSelectionColor" ? string | undefined | null
        : T extends "fitViewFactor" ? number
        : T extends "flyToOnDoubleClick" ? boolean
        : T extends "flyNavigationSpeed" ? number
        : T extends "focusOnDoubleClick" ? boolean
        : T extends "frustumCulling" ? boolean
        : T extends "ghostedSceneOpacity" ? number
        : T extends "gizmosEnabled" ? boolean
        : T extends "gizmoScalingFactor" ? number
        : T extends "gpuMemoryReleaseFactor" ? number
        : T extends "hoverColor" ? string | undefined | null
        : T extends "initialFit" ? boolean
        : T extends "initView" ? number[] | string
        : T extends "mouseInvertZoomingDirection" ? boolean
        : T extends "lightingEnvironment" ? ViewerLightingEnvironment
        : T extends "lineHighlightColor" ? string | undefined | null
        : T extends "lineSelectionColor" ? string | undefined | null
        : T extends "maxDynamicClipDistance" ? number
        : T extends "maxGPUMemory" ? number
        : T extends "maxSRCCPUMemory" ? number
        : T extends "navigationMode" ? NavigationMode
        : T extends "navigationSampling" ? number
        : T extends "navigationSpeedFactor" ? number
        : T extends "navigationSpeedThrottleFactor" ? number
        : T extends "outlineColor" ? string | undefined | null
        : T extends "outlineColorOccluded" ? string | undefined | null
        : T extends "outlineInnerRadius" ? number
        : T extends "outlineOuterRadius" ? number
        : T extends "preSelectionColor" ? string | undefined | null
        : T extends "projectionType" ? CameraProjectionType
        : T extends "renderAuxOnTop" ? boolean
        : T extends "renderMode" ? RenderMode
        : T extends "renderSetup" ? RenderSetup
        : T extends "sceneOpacity" ? number
        : T extends "screenSpaceCoverageCalculationMethod" ? ScreenSpaceCoverageCalculationMethod
        : T extends "selectionColor" ? string | undefined | null
        : T extends "showAuxOnNavigation" ? boolean
        : T extends "silhouetteEffectColor" ? string | undefined | null
        : T extends "silhouetteEffect" ? boolean
        : T extends "silhouetteEffectExclusiveEnabled" ? boolean
        : T extends "smallFeatureCulling" ? boolean
        : T extends "smallFeaturePixelThreshold" ? number
        : T extends "soc" ? boolean
        : T extends "spacemouseMultiplier" ? number
        : T extends "ssaoEnabled" ? boolean
        : T extends "taaEnabled" ? boolean
        : T extends "topoGeometryColor" ? string | undefined | null
        : T extends "topoGeometrySecondaryColor" ? string | undefined | null
        : T extends "topoPointsEnabled" ? boolean
        : T extends "transparencyMode" ? TransparencyMode
        : T extends "turntableLowerVerticalLimit" ? number
        : T extends "turntableUpperVerticalLimit" ? number
        : T extends "turntableVerticalLimitsEnabled" ? boolean
        : T extends "useDevicePixelRatio" ? boolean
        : T extends "vertexColorsEnabled" ? boolean
        : T extends "viewPerspective" ? ViewPerspective
        : T extends "webglPreserveDrawingbuffer" ? boolean
        : any;
    type URIMap = {
        regex: string;
        replace: string;
    }[];
    type ContextSettingType<T> = T extends "additionalCookies" ? string[] : T extends "additionalRequestHeaders" ? {
            [key: string]: string;
        }
    : T extends "additionalWSQueryParameters" ? {
            [key: string]: string;
        }
    : T extends "annotationEditingEnabled" ? boolean
    : T extends "arkitConfigs" ? any
    : T extends "auxModeRecursiveSearch" ? boolean
    : T extends "auxModeUncolorFacesOnLeave" ? boolean
    : T extends "boosterURL" ? string
    : T extends "cappingGeometryColor" ? string
    : T extends "contextMenuFunction" ? (entries: ContextMenuEntry[]) => ContextMenuEntry[]
    : T extends "customIconMap" ? {
            [key: string]: string;
        }
    : T extends "customToolbarIconMap" ? any
    : T extends "defaultQueryLinkDepth" ? number
    : T extends "disableDefaultInteraction" ? boolean
    : T extends "hubURL" ? string
    : T extends "initialStateActivation" ? boolean
    : T extends "language" ? string
    : T extends "logLevel" ? LogLevel
    : T extends "maxActiveSceneVolumeDiameter" ? number
    : T extends "maxConcurrentDownloads" ? number
    : T extends "measurementAngularTolerance" ? number
    : T extends "measurementMaterialDensities" ? number
    : T extends "modelviewPrintContentFunction"
        ? (context: ContextAPI, nodeID: number, modelViewID: number) => Promise<string>
    : T extends "modelviewPrintResourceNameFunction" ? (context: ContextAPI, nodeID: number) => Promise<string>
    : T extends "notificationLogLevels" ? any
    : T extends "parentSelectEnabled" ? boolean
    : T extends "preferXHRWithCredentials" ? boolean
    : T extends "sessionDeviceTags" ? string[]
    : T extends "sessionForwardUrl" ? string
    : T extends "SESSION_INTERACTIONS" ? any
    : T extends "sessionMemberName" ? string
    : T extends "skipSslVerify" ? boolean
    : T extends "slamProviderType" ? any
    : T extends "snapshotContentSelection" ? SnapshotRestoreOptions
    : T extends "uriMap" ? URIMap
    : T extends "xrEnableDebugImages" ? boolean
    : T extends "xrFusionMode" ? XRFusionMode
    : T extends "xrImageCompressionQuality" ? number
    : T extends "xrImageResolutionProfile" ? string
    : T extends "xrModelTrackerQualityThreshold" ? number
    : T extends "xrModelTrackerSmoothingFactor" ? number
    : ViewerSettingType<T>;
    /**
     * The **SettingsAPI** provides basic functionalities to configure the 3D Space.
     */
    interface SettingsAPI {
        /**
         * Changes the setting to the given value.
         *
         * @param setting    A name that specifies a particular setting
         * @param value      The new value for the setting
         *
         * @returns A boolean which indicates if the setting has changed
         */
        changeSetting<T extends SettingStrings | ViewerSettingStrings | string>(
            setting: T,
            value: ContextSettingType<T>,
        ): boolean;
        /**
         * Applies the specified set of settings to the context.
         *
         * @param config - Settings to import
         */
        importConfig(
            config: {
                [key in SettingStrings | ViewerSettingStrings]?: any;
            },
        ): void;
        /**
         * Returns the value of a setting.
         *
         * @param  setting The name of the setting that should be read
         *
         * @return The value of the specified setting
         */
        readSetting<T extends SettingStrings | ViewerSettingStrings | string>(setting: T): ContextSettingType<T>;
        /**
         * Resets the value of a setting to the installation default.
         *
         * @param setting The name of the setting that should be reset.
         */
        resetSetting(setting: SettingStrings | ViewerSettingStrings): void;
        resetUserSettings(): void;
    }
    /**
     * The SETTINGS_CHANGED event occurs if one of the settings is changed.
     *
     * @event
     * @hideconstructor
     */
    class SettingChangedEvent extends WebVisEvent {
        setting: SettingStrings | ViewerSettingStrings;
        newValue: any;
        oldValue: any;
        /**
         * @param setting The name of the setting that has changed.
         * @param newValue The new value of the Setting
         * @param oldValue The old value of the Setting
         */
        constructor(setting: SettingStrings | ViewerSettingStrings, newValue: any, oldValue: any);
    }
    /**
     * This enum contains all the setting keys that are used to read, change and reset the **settings of a specific viewer**.
     * For every setting key, its default value can be found here, as well as the type of the value.
     *
     * Please note, that a list of general, webvis context related settings can be found in the {@link SettingStrings} enum.
     *
     * Furthermore, please notice the difference between context and viewer level settings, as described in the {@link ViewerAPI}.
     *
     * **Example**
     * ```ts
     * webvis.getContext().getViewer().changeSetting(webvis.ViewerSettingStrings.AA_SETTING_ENABLED, true);
     * webvis.getContext().getViewer().readSetting(webvis.ViewerSettingStrings.CAMERA_FIELD_OF_VIEW);
     * webvis.getContext().getViewer().resetSetting(webvis.ViewerSettingStrings.BACKGROUND_COLOR);
     * ```
     *
     * @see {@link ViewerAPI.changeSetting}
     * @see {@link ViewerAPI.readSetting}
     * @see {@link ViewerAPI.resetSetting}
     * @see {@link ViewerSettingChangedEvent}
     */
    enum ViewerSettingStrings {
        /**
         * Defines whether the screen space anti-aliasing is enabled or not.
         * Fast approximate anti-aliasing (FXAA) is used to smooth the edges of the rendered geometry.
         * Compared to temporal anti-aliasing (TAA), FXAA has a lower quality but also a lower performance impact.
         *
         * @default false
         *
         * @see {@link TAA_ENABLED} for temporal anti-aliasing (TAA).
         */
        AA_SETTING_ENABLED = "aaSetting",
        /**
         * Defines the current background color.
         *
         * @default urn:X-l3d:color:rgba:00000000
         *
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        BACKGROUND_COLOR = "backgroundColor",
        /**
         * Defines the camera field of view in degrees.
         *
         * @default 45
         */
        CAMERA_FIELD_OF_VIEW = "defaultFieldOfView",
        /**
         * Defines the edge color of the capping effect.
         *
         * @default urn:X-l3d:color:rgba:00000000
         *
         * @see {@link CAPPING_EFFECT_ENABLED}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        CAPPING_EFFECT_EDGE_COLOR = "cappingEffectEdgeColor",
        /**
         * Defines the inner color of the capping effect.
         *
         * @default urn:X-l3d:color:rgba:00000000
         * @see {@link CAPPING_EFFECT_ENABLED}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        CAPPING_EFFECT_INNER_COLOR = "cappingEffectInnerColor",
        /**
         * Defines whether the capping effect is enabled or not.
         *
         * This effect highlights the geometry at the position of a clipplane.
         * This helps distinguishing between solid parts and true hollow spaces.
         *
         * @default false
         *
         * @see {@link ClipPlaneAPI}
         */
        CAPPING_EFFECT_ENABLED = "cappingEffectEnabled",
        /**
         * Defines whether the random colorize effect is enabled or not.
         *
         * The random colorize effect applies a different color to every instance of resource.
         * For monolithic models, you will only have one color. For models with linked parts,
         * those linked parts will have different colors.
         *
         * @default false
         * @see {@link Property.NODE_REPRESENTATION}
         */
        COLORIZE_EFFECT_ENABLED = "colorizeEffect",
        /**
         * Defines the matching color for the 3-color-comparison.
         *
         * @default urn:X-l3d:color:rgb:00aa00
         *
         * @see {@link Property.COMPARISON_GROUP}
         * @see {@link ViewerAPI.enterColorCompareMode}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        COLOR_COMPARISON_MATCHING_COLOR = "colorComparisonMatchingColor",
        /**
         * Defines the first color for the 3-color-comparison.
         *
         * @default urn:X-l3d:color:rgb:aa0000
         *
         * @see {@link Property.COMPARISON_GROUP}
         * @see {@link ViewerAPI.enterColorCompareMode}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        COLOR_COMPARISON_FIRST_COLOR = "colorComparisonFirstColor",
        /**
         * Defines the second color for the 3-color-comparison.
         *
         * @default urn:X-l3d:color:rgb:0000aa
         *
         * @see {@link Property.COMPARISON_GROUP}
         * @see {@link ViewerAPI.enterColorCompareMode}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        COLOR_COMPARISON_SECOND_COLOR = "colorComparisonSecondColor",
        /**
         * Defines the front plane of the model for use with the UI elements.
         *
         * @deprecated Please use the {@link SettingStrings.FRONT_PLANE_AXIS} setting with the {@link SettingsAPI.changeSetting} function of the ContextAPI instead.
         */
        COORDINATE_SYSTEM = "coordSys",
        /**
         * Defines whether a viewer shows specular highlighting or not.
         *
         * @default false
         */
        DISABLE_SPECULAR_HIGHLIGHT = "disableSpecularHighlights",
        /**
         * Defines the factor by which volumes are scaled with during double-click animations,
         * affecting the zoom level and the area that the camera will focus on.
         *
         * This setting only has an effect if either {@link FOCUS_ON_DOUBLE_CLICK}
         * or {@link FLYTO_ON_DOUBLECLICK_ENABLED} is set to true.
         *
         * @default 1.6
         */
        DOUBLE_CLICK_ANIMATION_VOLUME_SCALE = "doubleClickAnimationVolumeScale",
        /**
         * Defines the time window for a double-click in milliseconds.
         *
         * @default 250
         */
        DOUBLE_CLICK_TIME_WINDOW = "doubleClickTimeWindow",
        /**
         * Defines the arrow head at the end of a drawing.
         *
         * @default DrawingArrowhead.NONE
         */
        DRAWING_ARROWHEAD_END = "drawingArrowheadEnd",
        /**
         * Defines the arrow head at the start of a drawing.
         *
         * @default DrawingArrowhead.NONE
         */
        DRAWING_ARROWHEAD_START = "drawingArrowheadStart",
        /**
         * Defines the drawing color.
         *
         * @default urn:X-l3d:color:rgb:00b0ff
         *
         * @see {@link ViewerDrawingAPI}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        DRAWING_COLOR = "drawingColor",
        /**
         * Defines the drawing mode.
         *
         * @default DrawingMode.BRUSH
         *
         * @see {@link ViewerDrawingAPI}
         */
        DRAWING_MODE = "drawingMode",
        /**
         * Defines the drawing size in pixels.
         *
         * Please note that we always add 2 pixels to the drawing size.
         *
         * @default 6
         *
         * @see {@link ViewerDrawingAPI}
         */
        DRAWING_SIZE = "drawingSize",
        /**
         * Defines whether the dynamic contrast for auxiliary geometries is enabled or not.
         * If enabled, this will change the color of AUX nodes based on the contrast with the
         * background for better legibility.
         *
         * @default false
         *
         * @see {@link NodeType.AUX}
         */
        DYNAMIC_AUX_CONTRAST_ENABLED = "dynamicAuxContrastEnabled",
        /**
         * Defines whether dynamic clipping is enabled or not.
         * Every part that is closer to the camera than the value defined in
         * {@link DYNAMIC_CLIPPING_DISTANCE} will be clipped.
         *
         * @default false
         *
         * @see {@link DYNAMIC_CLIPPING_DISTANCE}
         */
        DYNAMIC_CLIPPING_ENABLED = "dynamicClippingEnabled",
        /**
         * Defines the dynamic clipping distance in meters.
         * Every part that is closer to the camera then this value will be clipped.
         *
         * @default 5
         *
         * @see {@link DYNAMIC_CLIPPING_ENABLED}
         */
        DYNAMIC_CLIPPING_DISTANCE = "dynamicClippingDistance",
        /**
         * Defines whether the dynamic center of rotation (COR) is enabled or not.
         * If disabled, the center of rotation will always be the origin.
         * If enabled, the center of rotation will be the point at which the user
         * clicked when starting the rotation (only applies if the user clicked on
         * the geometry).
         *
         * @default false
         */
        DYNAMIC_COR_ENABLED = "dynamicCOREnabled",
        /**
         * Defines whether or not a subtree should be expanded to the leaf
         * when selected in the viewer.
         *
         * Usually, users can only select parts that are currently known to webvis. By
         * expanding a node (that has linked parts associated to it), its child nodes
         * will be downloaded and can be selected in the viewer.
         * Changing this setting to `true` will automatically expand the
         * parent nodes and select the leaf node that was clicked.
         *
         * @default false
         */
        EXPAND_ON_VIEWER_SELECTION = "expandOnViewerSelection",
        /**
         * Defines the color to be used to indicate faces in the 3D view
         * that are highlighted via the {@link ViewerHighlightAPI} (for
         * instance during a measurement).
         *
         * @default urn:X-l3d:color:rgba:FFFF00A6
         *
         * @see {@link ViewerHighlightAPI}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        FACE_HIGHLIGHT_COLOR = "faceHighlightColor",
        /**
         * Defines the color to be used to indicate selected faces in the 3D view.
         *
         * @default urn:X-l3d:color:rgba:FFFF00A6
         *
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        FACE_SELECTION_COLOR = "faceSelectionColor",
        /**
         * Defines the factor for view fitting.
         * The factor defines the percentage of the screen that should be
         * covered at maximum by the geometry, per axis. The larger value of
         * the two axes (x and y) will be used. A value of 0.6 for instance
         * means that the geometry will cover at most 60% of the screen both
         * horizontally and vertically.
         *
         * @default 0.6
         */
        FIT_VIEW_FACTOR = "fitViewFactor",
        /**
         * Defines whether or not to fit the camera to the clicked node on double-click.
         *
         * @default false
         */
        FLYTO_ON_DOUBLECLICK_ENABLED = "flyToOnDoubleClick",
        /**
         * Defines the speed for the fly navigation mode.
         *
         * @default 7
         *
         * @see {@link NavigationMode.FLY}
         */
        FLY_NAVIGATION_SPEED = "flyNavigationSpeed",
        /**
         * Defines whether a viewer should focus on a part on double-click.
         *
         * @default true
         */
        FOCUS_ON_DOUBLE_CLICK = "focusOnDoubleClick",
        /**
         * Defines whether camera frustum culling is enabled or not.
         * If enabled, parts not visible by the camera will be excluded from
         * rendering to improve performance.
         *
         * @default true
         */
        FRUSTUM_CULLING = "frustumCulling",
        /**
         * Defines the opacity of the ghosted scene for the geometry that is not
         * occluded by the main scene.
         *
         * @default 0.33
         *
         * @see {@link Property.GHOSTED}
         */
        GHOSTED_SCENE_OPACITY = "ghostedSceneOpacity",
        /**
         * Defines whether the gizmos for manipulating 3D entities
         * in the viewer are enabled or not.
         *
         * @default true
         */
        GIZMOS_ENABLED = "gizmosEnabled",
        /**
         * Defines the scaling factor for the size of gizmo geometries.
         *
         * @default 1
         */
        GIZMO_SCALING_FACTOR = "gizmoScalingFactor",
        /**
         * Defines the percentage of the GPU memory that is released
         * when the memory limit is reached.
         *
         * @default 0.1
         */
        GPU_MEMORY_RELEASE_FACTOR = "gpuMemoryReleaseFactor",
        /**
         * Defines the color to be displayed when hovering the mouse
         * over geometry.
         *
         * @default urn:X-l3d:color:rgb:262626
         *
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        HOVER_COLOR = "hoverColor",
        /**
         * Defines whether or not to fit the view to all visible models when
         * a node's {@link Property.ENABLED | ENABLED property} changes. If active,
         * it also refits when new 3D data is being streamed in.
         * Please note that once the view is updated afterwards,
         * for instance by moving the camera, and at any mouse down event, the
         * initial fit will be disabled. To re-enable it, the setting has to be
         * set again.
         *
         * @default true
         */
        INITIAL_FIT = "initialFit",
        /**
         * Defines the direction which is used for the initial view fitting
         *
         * @default ViewDirection.CURRENT
         */
        INITIAL_FIT_DIRECTION = "initialFitDirection",
        /**
         * Defines a view matrix to set on start.
         *
         * @default undefined
         *
         * @see {@link ViewerAPI.restoreInitView} to restore this initial view.
         */
        INIT_VIEW = "initView",
        /**
         * Defines whether the mouse zoom direction is inverted or not.
         *
         * @default false
         */
        INVERT_ZOOM_DIRECTION = "mouseInvertZoomingDirection",
        /**
         * Defines the viewer's lighting environment.
         *
         * @default ViewerLightingEnvironment.HEADLIGHT
         */
        LIGHTING_ENVIRONMENT = "lightingEnvironment",
        /**
         * Defines the color to be used to indicate lines in the 3D view
         * that are highlighted via the {@link ViewerHighlightAPI} (for
         * instance during a measurement).
         *
         * @default urn:X-l3d:color:rgba:FFFF00BF
         *
         * @see {@link ViewerHighlightAPI}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        LINE_HIGHLIGHT_COLOR = "lineHighlightColor",
        /**
         * Defines the color to be used to indicate selected lines
         * in the 3D view.
         *
         * @default urn:X-l3d:color:rgba:FFFF00BF
         *
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        LINE_SELECTION_COLOR = "lineSelectionColor",
        /**
         * Defines the maximum dynamic clipping distance.
         *
         * @default 5
         */
        MAX_DYNAMIC_CLIP_DIST = "maxDynamicClipDistance",
        /**
         * Defines the limit for the GPU memory in megabytes.
         *
         * @default 1024
         */
        MAX_GPU_MEMORY = "maxGPUMemory",
        /**
         * Defines the limit for the CPU-side memory (RAM) in megabytes.
         *
         * @default 512
         */
        MAX_SRC_MEMORY = "maxSRCCPUMemory",
        /**
         * Defines the current navigation mode.
         *
         * @default NavigationMode.WEBVIS
         */
        NAVIGATION_MODE = "navigationMode",
        /**
         * Defines the sampling factor (viewport scale) during navigation.
         * This setting is meant as an optional optimization that allows for
         * rendering in a lower resolution during navigation.
         *
         * @default 1
         */
        NAVIGATION_SAMPLING = "navigationSampling",
        /**
         * Defines the navigation speed factor (sensitivity).
         *
         * @default 1
         */
        NAVIGATION_SPEED_FACTOR = "navigationSpeedFactor",
        /**
         * Defines the factor to throttle the navigation speed when the
         * modifier key is pressed (throttled sensitivity).
         *
         * @default 0.1
         */
        NAVIGATION_SPEED_THROTTLE_FACTOR = "navigationSpeedThrottleFactor",
        /**
         * Defines the color of the outline.
         *
         * @default urn:X-l3d:color:rgb:ffff00
         *
         * @see {@link Property.OUTLINED}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        OUTLINE_COLOR = "outlineColor",
        /**
         * Defines the color of the outline for occluded parts.
         *
         * @default urn:X-l3d:color:rgb:ff9900
         *
         * @see {@link Property.OUTLINED}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        OUTLINE_COLOR_OCCLUDED = "outlineColorOccluded",
        /**
         * Defines the inner outline radius in pixels
         * (the offset between a part and its outline).
         *
         * ```ts
         * outlineWidth = outlineOuterRadius - outlineInnerRadius
         * ```
         *
         * @default 0
         *
         * @see {@link Property.OUTLINED}
         * @see {@link OUTLINE_OUTER_RADIUS}
         */
        OUTLINE_INNER_RADIUS = "outlineInnerRadius",
        /**
         * Defines the outer outline radius in pixels:
         *
         * ```ts
         * outlineWidth = outlineOuterRadius - outlineInnerRadius
         * ```
         *
         * @default 8
         *
         * @see {@link Property.OUTLINED}
         * @see {@link OUTLINE_INNER_RADIUS}
         */
        OUTLINE_OUTER_RADIUS = "outlineOuterRadius",
        /**
         * Defines the color to be used to indicate the parts the
         * user is interacting with in the 3D scene. This color is
         * used for highlighting parts once the user has clicked on
         * them and before the selection is active.
         *
         * @default urn:X-l3d:color:rgb:FFFF88
         *
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        PRE_SELECTION_COLOR = "preSelectionColor",
        /**
         * Defines the type of camera projection.
         *
         * @default CameraProjectionType.PERSPECTIVE
         *
         * @see {@link ViewerAPI.getCameraProjectionType}
         */
        PROJECTION_TYPE = "projectionType",
        /**
         * Defines whether a viewer renders auxiliaries on top or not.
         *
         * @default false
         */
        RENDER_AUXILIARY_ON_TOP = "renderAuxOnTop",
        /**
         * Defines the render mode of the viewer.
         *
         * Please note, that if the {@link Property.RENDER_MODE} is set on
         * a specific node, this setting will be overridden.
         *
         * @default RenderMode.Faces
         *
         * @see {@link ViewerAPI.forceRenderMode}
         */
        RENDER_MODE = "renderMode",
        /**
         * Defines the render setup.
         *
         * @default RenderSetup.LOCAL
         *
         * @see {@link HubAPI.requestSupportedRenderSetups}
         */
        RENDER_SETUP = "renderSetup",
        /**
         * Sets the overall opacity of the rendered scene.
         * This setting is useful in XR applications to allow the user to see tracked
         * real world objects behind the rendered scene.
         *
         * Possible values range from 0.0 to 1.0, where 1.0 means the scene is
         * fully opaque and 0.0 means the scene is fully transparent.
         *
         * @default 1.0
         */
        SCENE_OPACITY = "sceneOpacity",
        /**
         * Defines how the screen space coverage of parts, which is used for the small
         * feature culling, is calculated.
         *
         * @default "BBOX_WEIGHTED_AREA_COMPUTATION"
         */
        SCREEN_SPACE_COVERAGE_CALCULATION_METHOD = "screenSpaceCoverageCalculationMethod",
        /**
         * Defines the color to be used to indicate selected parts in the 3D view.
         *
         * @default urn:X-l3d:color:rgb:FFFF00
         *
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        SELECTION_COLOR = "selectionColor",
        /**
         * Defines whether a viewer shows the auxiliary geometries during navigation or not
         *
         * @deprecated ViewerSettingStrings.SHOW_AUX_ON_NAVIGATION is deprecated and will be removed in a future version.
         *
         * @default true
         *
         * @see {@link NodeType.AUX}
         */
        SHOW_AUX_ON_NAVIGATION = "showAuxOnNavigation",
        /**
         * Defines the color of the silhouette rendering effect.
         *
         * @default urn:X-l3d:color:rgba:000000FF
         *
         * @see {@link SILHOUETTE_EFFECT_ENABLED}
         * @see {@link SILHOUETTE_EFFECT_EXCLUSIVE_ENABLED}
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         */
        SILHOUETTE_EFFECT_COLOR = "silhouetteEffectColor",
        /**
         * Defines whether the silhouette rendering effect is enabled or not.
         *
         * @default false
         *
         * @see {@link SILHOUETTE_EFFECT_COLOR}
         * @see {@link SILHOUETTE_EFFECT_EXCLUSIVE_ENABLED}
         */
        SILHOUETTE_EFFECT_ENABLED = "silhouetteEffect",
        /**
         * Defines whether only the silhouettes should be rendered or not.
         *
         * @default false
         *
         * @see {@link SILHOUETTE_EFFECT_COLOR}
         * @see {@link SILHOUETTE_EFFECT_ENABLED}
         */
        SILHOUETTE_EFFECT_EXCLUSIVE_ENABLED = "silhouetteEffectExclusiveEnabled",
        /**
         * Defines whether small feature culling is enabled or not.
         *
         * @default false
         *
         * @see {@link SMALL_FEATURE_PIXEL_THRESHOLD}
         */
        SMALL_FEATURE_CULLING = "smallFeatureCulling",
        /**
         * Defines the threshold for small feature culling in pixels.
         * Every part which would be rendered smaller than this threshold
         * will be culled.
         *
         * @default 4
         *
         * @see {@link SMALL_FEATURE_CULLING}
         */
        SMALL_FEATURE_PIXEL_THRESHOLD = "smallFeaturePixelThreshold",
        /**
         * Defines whether software occlusion culling is enabled or not.
         * Before downloading a resource, the viewer will check if the resource
         * is occluded by other geometry which is already rendered. If this is
         * the case, the resource will not be downloaded.
         *
         * @default true
         */
        SOFTWAR_OCCLUSION_CULLING = "soc",
        /**
         * Defines the multiplier used to adjust the space mouse sensitivity.
         *
         * @default 7
         */
        SPACEMOUSE_MULTIPLIER = "spacemouseMultiplier",
        /**
         * Defines whether screen space ambient occlusion (SSAO) is enabled or not.
         *
         * @default false
         */
        SSAO_ENABLED = "ssaoEnabled",
        /**
         * Defines whether temporal anti-aliasing (TAA) is enabled or not.
         * TAA is only available in static scenes. It is disabled in the following cases:
         * - During camera movement, due to the camera not being static. This means TAA is not available in AR.
         * - While downloads are active, the scene must be redrawn every time a new object is loaded.
         * - If GPU memory/CPU time is exceeded, it is not possible to render the whole scene in a single frame. Applying TAA becomes too complex in this case.
         *
         * TAA will automatically be re-enabled once the scene is static again.
         *
         * @default false
         */
        TAA_ENABLED = "taaEnabled",
        /**
         * Defines the color for the topological geometry.
         *
         * @default urn:X-l3d:color:rgb:00b0ff
         *
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         * @see {@link ViewerSettingStrings.RENDER_MODE}
         * @see {@link RenderMode.Topology}
         */
        TOPO_GEOMETRY_COLOR = "topoGeometryColor",
        /**
         * Defines the secondary color for the topological geometry.
         *
         * @default urn:X-l3d:color:rgb:555555
         *
         * @see {@link Property.APPEARANCE_URI} for a definition of valid color strings.
         * @see {@link ViewerSettingStrings.RENDER_MODE}
         * @see {@link RenderMode.Topology}
         */
        TOPO_GEOMETRY_SECONDARY_COLOR = "topoGeometrySecondaryColor",
        /**
         * Defines whether topological points are rendered.
         *
         * @default false
         */
        TOPO_POINTS_ENABLED = "topoPointsEnabled",
        /**
         * Defines the transparency mode
         *
         * @default PERFORMANCE
         */
        TRANSPARENCY_MODE = "transparencyMode",
        /**
         * Defines the lower vertical limit of the turntable navigation mode in degrees.
         *
         * @default -90
         *
         * @see {@link NavigationMode.TURNTABLE}
         * @see {@link TURNTABLE_UPPER_VERTICAL_LIMIT}
         * @see {@link TURNTABLE_VERTICAL_LIMITS_ENABLED}
         */
        TURNTABLE_LOWER_VERTICAL_LIMIT = "turntableLowerVerticalLimit",
        /**
         * Defines the upper vertical limit for the turntable navigation mode in degrees.
         *
         * @default 90
         *
         * @see {@link NavigationMode.TURNTABLE}
         * @see {@link TURNTABLE_LOWER_VERTICAL_LIMIT}
         * @see {@link TURNTABLE_VERTICAL_LIMITS_ENABLED}
         */
        TURNTABLE_UPPER_VERTICAL_LIMIT = "turntableUpperVerticalLimit",
        /**
         * Defines whether the vertical limits for the turntable navigation mode are enabled or not.
         *
         * @default false
         *
         * @see {@link NavigationMode.TURNTABLE}
         * @see {@link TURNTABLE_LOWER_VERTICAL_LIMIT}
         * @see {@link TURNTABLE_UPPER_VERTICAL_LIMIT}
         */
        TURNTABLE_VERTICAL_LIMITS_ENABLED = "turntableVerticalLimitsEnabled",
        /**
         * Defines whether the canvas should be scaled by the `window.devicePixelRatio`
         * or not. Enabling this setting is necessary to compensate for the DPI scaling
         * of the system / monitor. Enabling this setting will improve the visual quality
         * on high DPI monitors but can decrease performance.
         *
         * @default false
         */
        USE_DEVICE_PIXEL_RATIO = "useDevicePixelRatio",
        /**
         * Defines whether vertex colors are enabled or not.
         * If enabled and the model contains vertex colors, the vertex colors will be used
         * for rendering. Furthermore, the node's {@link Property.APPEARANCE_URI} will be
         * ignored. Thus, if the user wants to change the node's appearance in this case,
         * this setting has to be disabled first.
         *
         * @default true
         */
        VERTEX_COLORS_ENABLED = "vertexColorsEnabled",
        /**
         * Defines the view perspective.
         *
         * @default ViewPerspective.INSIDE
         */
        VIEW_PERSPECTIVE = "viewPerspective",
        /**
         * Defines whether or not to preserve the drawing buffer on the WebGL context.
         *
         * @default false
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#preservedrawingbuffer}
         */
        WEBGL_PRESERVE_DRAWINGBUFFER = "webglPreserveDrawingbuffer",
    }
    /**
     * This enum contains all the setting keys that are used to read, change and reset the **settings of a WebVis context**.
     * For every setting key, its default value can be found here, as well as the type of the value.
     *
     * Please note, that a list of viewer-specific settings can be found in the {@link ViewerSettingStrings} enum.
     *
     * Furthermore, please notice the difference between context and viewer level settings, as described in the {@link ContextAPI}.
     *
     * **Example**
     * ```ts
     * webvis.getContext().changeSetting(webvis.SettingStrings.LOG_LEVEL, webvis.LogLevel.DEBUG);
     * webvis.getContext().readSetting(webvis.SettingStrings.HUB_URL);
     * webvis.getContext().resetSetting(webvis.SettingStrings.BATCHED_QUERIES);
     * ```
     *
     * @see {@link ContextAPI.changeSetting}
     * @see {@link ContextAPI.readSetting}
     * @see {@link ContextAPI.resetSetting}
     * @see {@link SettingChangedEvent}
     */
    enum SettingStrings {
        /**
         * A list of cookies that are added to all requests.
         */
        ADDITIONAL_COOKIES = "additionalCookies",
        /**
         * Specifies custom HTTP headers to be included with all requests to the instant3Dhub backend.
         *
         * These headers can be used for various purposes including authentication, client identification,
         * or providing additional context for server-side processing. Unlike cookies, headers are
         * applied to all types of requests including XHR, WebSocket initialization, and fetch calls.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Add authentication and tracking headers
         * context.changeSetting(webvis.SettingStrings.ADDITIONAL_REQUEST_HEADERS, {
         *   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
         *   'X-Client-Version': '3.5.2',
         *   'X-Request-Source': 'webvis-frontend'
         * });
         *
         * // Clear all custom headers
         * context.changeSetting(webvis.SettingStrings.ADDITIONAL_REQUEST_HEADERS, {});
         * ```
         *
         * Note that each change to this setting completely replaces all previously set headers.
         * To preserve existing headers while adding new ones, you should read the current value,
         * extend it with new headers, and then apply the combined set.
         *
         * @default {}
         */
        ADDITIONAL_REQUEST_HEADERS = "additionalRequestHeaders",
        /**
         * Specifies additional query parameters to be included in WebSocket connection URLs.
         *
         * These parameters are appended to the WebSocket URI during connection establishment
         * and can be used for custom authentication, session identification, or feature flags.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Add custom identification parameters
         * context.changeSetting(webvis.SettingStrings.ADDITIONAL_WS_QUERY_PARAMETERS, {
         *   'client': 'engineering-department',
         *   'version': '2.5.0',
         *   'feature_flags': 'extended_logs,beta_features'
         * });
         *
         * // Clear all custom parameters
         * context.changeSetting(webvis.SettingStrings.ADDITIONAL_WS_QUERY_PARAMETERS, {});
         * ```
         *
         * Note: Parameters are visible in the URL and cannot be modified after connection.
         * Reserved names: "token", "memberId"
         *
         * @default {}
         * @see {@link SettingStrings.ADDITIONAL_REQUEST_HEADERS} - For HTTP header-based configuration
         */
        ADDITIONAL_WS_QUERY_PARAMETERS = "additionalWSQueryParameters",
        /**
         * Specifies a custom identifier for your application included in pings and usage data.
         *
         * This identifier helps distinguish connections and track feature usage across different
         * client applications. Set once at startup with a descriptive string.
         *
         * Note: Transmitted to server - avoid sensitive information.
         *
         * @default undefined
         */
        APPLICATION_IDENTIFIER = "applicationIdentifier",
        /**
         * Controls the depth of topology highlighting when working with auxiliary (PMI) objects.
         *
         * In AUX interaction mode, when an auxiliary node is selected, WebVis highlights its related
         * faces in the 3D model. When this setting is enabled, the system also performs the reverse
         * operation - finding and selecting additional auxiliary nodes that relate to the highlighted
         * faces.
         *
         * This creates a cascading effect where:
         * 1. Selecting an auxiliary node highlights its related faces
         * 2. Those faces trigger selection of other auxiliary nodes related to them
         * 3. Those new auxiliary nodes highlight additional faces
         *
         * This setting is particularly useful when exploring complex PMI relationships in manufacturing
         * models, where multiple annotations may reference the same geometric features. When disabled,
         * only the direct face-to-aux relationships for the explicitly selected node are shown.
         *
         * Note: Enabling this may lead to larger selections than expected in densely annotated models.
         *
         * @default false
         * @see {@link InteractionMode.AUX} - This setting only affects the AUX interaction mode
         */
        AUX_MODE_RECURSIVE_SEARCH = "auxModeRecursiveSearch",
        /**
         * Controls whether topology coloring is cleared when exiting AUX interaction mode.
         *
         * When enabled (default), all colored faces related to auxiliary (PMI)
         * nodes will return to their original appearance when switching from AUX mode to another
         * interaction mode. This provides a clean visual state when returning to normal model
         * navigation or selection.
         *
         * When disabled, the colored topology elements (faces) retain their visual
         * emphasis even after leaving AUX mode. This can be useful for preserving the context
         * of important manufacturing features while working with the model in other interaction
         * modes.
         *
         * This setting only affects the appearance of topology elements that were colored
         * through AUX mode operations - it does not affect other selections or highlighting.
         *
         * @default true
         * @see {@link InteractionMode.AUX} - This setting relates to exiting AUX interaction mode
         */
        AUX_MODE_UNCOLOR_FACES_ON_LEAVE = "auxModeUncolorFacesOnLeave",
        /**
         * Controls whether queries that span multiple resources are sent as a single batched request
         * or as individual requests.
         *
         * In WebVis, complex 3D models can be composed of multiple resources, each representing
         * a portion of the complete model. When enabled, this setting combines queries that would
         * normally be sent separately to each resource into a single network request, which can
         * significantly improve performance by reducing network round-trips and connection overhead.
         *
         * This is particularly beneficial when:
         * - Working with assemblies composed of multiple separate resources
         * - Searching for components across the entire model
         * - Querying linked data that spans multiple resources
         *
         * @default false
         * @see {@link QueryAPI.query} - For executing queries against the model
         */
        BATCHED_QUERIES = "batchedQueries",
        /**
         * @deprecated SettingStrings.BOOSTER_URL is deprecated and will be removed in a future version.
         *
         * @default ""
         */
        BOOSTER_URL = "boosterURL",
        /**
         * Specifies the color of capping geometries generated when using clip planes.
         *
         * Capping geometries are surfaces that appear where a clip plane intersects with a 3D model,
         * providing a visual representation of the model's interior. This setting controls the color
         * of these surfaces using an RGBA hex color string.
         *
         * The default value "DDFFB6FF" represents a light green color with full opacity.
         *
         * Note: This setting only affects newly created capping geometries. To apply a color change
         * to existing capping geometries, you'll need to remove and recreate them.
         *
         * @default "DDFFB6FF"
         * @see {@link ClipPlaneAPI.createCapping} - For creating clipping geometries
         * @see {@link ClipPlaneAPI.removeCapping} - For removing existing capping geometries
         */
        CAPPING_GEOMETRY_COLOR = "cappingGeometryColor",
        /**
         * @deprecated SettingStrings.CONTEXT_MENU_FUNCTION is deprecated, please use UISetting.CONTEXT_MENU_FUNCTION and the getSetting/setSetting functions on the webvisUI-Object"
         *
         * A function to modify the context menu's contents
         * This function has as argument: the array with the entries by default of the context menu;
         * and consequently it is expected as a return value, the entries that are wanted to be shown in the context menu:
         *
         * 1. All default entries will be shown:
         *      function(defaultEntries){return defaultEntries}
         *
         * 2. All default entries will be shown, but without the first entry:
         *      function(defaultEntries){
         *          firstEntryPosition = 1;
         *          defaultEntries.splice(firstEntryPosition - 1, 1);
         *          return defaultEntries;
         *      }
         *
         * 3. Swapping the first and second entries:
         *      function(defaultEntries){
         *          firstEntryPosition = 1;
         *          secondEntryPosition = 2;
         *          firstEntry = defaultEntries.splice(firstEntryPosition - 1, 1)[0];
         *          defaultEntries.splice(secondEntryPosition - 1, 0, firstEntry);
         *          return defaultEntries;
         *      }
         *
         * 4. Changing the functionality of the second entry:
         *      function(defaultEntries){
         *          secondEntryPosition = 2;
         *          secondEntryDefaultCommand = defaultEntries[secondEntryPosition - 1].command;
         *          defaultEntries[secondEntryPosition - 1].command = function(nodeId, pickInfo){
         *              console.log("Second Entry was Executed", nodeId, pickInfo);
         *              webvis.getProperty(nodeId, "label").then(
         *                  function(label){
         *                      webvis.postInfo("<table style="border:1px black pointed"><tr><td>Node:<td>" + nodeId +
         *                                      "<tr><td>Label:<td>" + label +
         *                                      "<tr><td>2D Coords:<td>" + pickInfo.canvasCoords +
         *                                      "<tr><td>3D Pos:<td>" + pickInfo.position)+"</table>";
         *              });
         *              secondEntryDefaultCommand();
         *          };
         *          return defaultEntries;
         *      }
         *
         *  5. Inserting a new entry in the menu at the third position:
         *      function(defaultEntries){
         *           newEntry = {
         *              label : "Set Current Language",
         *              subEntries : [
         *                      {
         *                          label : "English",
         *                          command : function(){webvis.changeSetting("language", "en")}
         *                      },
         *                      {
         *                          label : "Deutsch",
         *                          command : function(){webvis.changeSetting("language", "de")}
         *                      },
         *                      {
         *                          label : "Español",
         *                          command : function(){webvis.changeSetting("language", "es")}
         *                      }
         *              ]
         *           };
         *          newEntryPosition = 3;
         *          defaultEntries.splice(newEntryPosition - 1, 0, newEntry);
         *          return defaultEntries;
         *      }
         *
         * 6. Inserting a new entry in the menu, which will appear only after the condition is fulfilled, (e.g. When the node is an Aux node)
         *      function (defaultEntries)
         *       {
         *          const newEntry =
         *                      {
         *                          label : "Custom entry visible only when condition is fulfilled"
         *                          , command : function(nodeID){webvis.postInfo("Custom entry clicked on Aux node:" + nodeID + "!!!")}
         *                          , condition : function(nodeID){return webvis.getNodeType(nodeID) == webvis.NodeType.AUX}
         *                      };
         *          defaultEntries.push(newEntry);
         *          return defaultEntries;
         *       }
         *
         * @default undefined
         */
        CONTEXT_MENU_FUNCTION = "contextMenuFunction",
        /**
         * Controls the default traversal depth for querying related resources when no explicit
         * linkDepth is specified in a query.
         *
         * When executing queries across the instance graph, this setting determines how many levels
         * of linked resources will be traversed when searching for data. A value of:
         *
         * - 0: Only searches within the directly targeted resource (fastest)
         * - 1: Includes the target resource and its directly connected resources (default)
         * - 2+: Traverses additional levels of connected resources (progressively slower)
         *
         * Higher values provide more complete search results by examining more distantly related
         * resources, but can significantly impact query performance, especially in complex models
         * with many interconnected resources.
         *
         * This setting can be overridden for individual queries by setting the linkDepth parameter
         * explicitly in the query object.
         *
         * Example:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Uses the default link depth (from this setting)
         * await context.query({
         *   select: ["nodeId", "label"],
         *   conditions: [{nodeType: "structure"}]
         * });
         *
         * // Overrides the default with explicit linkDepth
         * await context.query({
         *   select: ["nodeId", "label"],
         *   conditions: [{nodeType: "structure"}],
         *   linkDepth: 2
         * });
         * ```
         *
         * @default 1
         * @see {@link QueryAPI.query} For more information on executing queries
         */
        DEFAULT_QUERY_LINK_DEPTH = "defaultQueryLinkDepth",
        /**
         * Controls whether the default object selection interaction is enabled or disabled.
         *
         * When set to true, WebVis will operate in {@link InteractionMode.NONE} instead of the usual
         * {@link InteractionMode.DEFAULT} mode, effectively disabling standard selection interactions.
         * This provides a "view-only" experience where users can navigate around the model but not
         * select or interact with individual components.
         *
         * When this setting changes, an {@link InteractionModeChangedEvent} is triggered, allowing
         * applications to respond to the mode change. Applications can temporarily override this
         * setting by explicitly calling {@link InteractionAPI.setInteractionMode} with a specific
         * interaction mode.
         *
         * @default false
         * @see {@link InteractionAPI.setInteractionMode} - To programmatically change interaction modes
         */
        DISABLE_DEFAULT_INTERACTION = "disableDefaultInteraction",
        /**
         * Defines the orientation of the front plane of the model in the 3D coordinate system.
         * This setting determines which axes are used for the "right", "up", and "forward" vectors,
         * which affects navigation, camera controls, and the interpretation of user interactions.
         *
         * Each option in the FrontPlaneAxis enum represents a specific orientation using a combination
         * of two axes (e.g., POS_X_POS_Y means the right vector is +X and the up vector is +Y).
         * The forward vector is automatically determined to form a right-handed coordinate system.
         *
         * @default FrontPlaneAxis.NEG_Y_POS_Z
         * @see {@link CoordinateSystemAPI} for methods to access the resulting vectors and matrices
         */
        FRONT_PLANE_AXIS = "frontPlaneAxis",
        /**
         * Defines the URL of the instant3Dhub backend service.
         *
         * This setting determines the endpoint for all communications with the instant3Dhub service, including:
         * - Data requests (model loading, queries, etc.)
         * - Session management and authentication
         * - WebSocket connections for real-time features
         *
         * The hub URL is resolved automatically by WebVis using the following priority sequence:
         *
         * 1. **URL Parameter:** If a hub URL is specified in the browser's URL parameters (e.g., `?hubURL=...`), it takes
         * precedence and will be used.
         * 2. **<webvis-config> Element:** If not found in the URL, WebVis searches for a `<webvis-config>` HTML element in
         * the DOM and attempts to parse the hub URL from its attributes or content.
         * 3. **Config File:** If still not found, WebVis tries to load the hub URL from a configuration file:
         *    - It first looks for `webvis.config.json` at the root of the server.
         *    - If not found there, it searches for a config file in the same directory as the script URL from which WebVis
         * was imported.
         * 4. **Script Parsing:** As a last resort, the hub URL is parsed directly from the imported WebVis script itself
         * (if embedded or bundled).
         *
         * @default undefined
         */
        HUB_URL = "hubURL",
        /**
         * @deprecated SettingStrings.INITIAL_STATE_ACTIVATION is deprecated and will be removed in a future version.
         *
         * This setting was intended to check for initial state activation but is no longer used anywhere
         * in the WebVis system.
         *
         * @default false
         */
        INITIAL_STATE_ACTIVATION = "initialStateActivation",
        /**
         * Controls whether WebVis attempts to load settings from a remote configuration file.
         *
         * When enabled (default), WebVis will attempt to fetch a `webvis.config.json` file from the
         * server during initialization. Settings from this file are merged with any explicitly
         * provided settings, with explicit settings taking precedence.
         *
         * This capability is useful for:
         * - Providing consistent default settings across multiple applications
         * - Centralizing configuration management on the server side
         * - Deploying configuration changes without updating application code
         * - Supporting environment-specific settings (development, staging, production)
         *
         * The config file is loaded from the same path as the WebVis library itself. If the file
         * cannot be found or accessed, initialization continues normally using only the explicitly
         * provided settings.
         *
         * @default true
         */
        LOAD_REMOTE_CONFIG_FILE = "loadRemoteConfigFile",
        /**
         * Controls the verbosity of messages output to the browser console by the WebVis logging system.
         *
         * The log level acts as a filter, where only messages at or above the specified level are displayed.
         *
         * Setting a lower level (e.g., ERROR) shows fewer, more important messages, while higher levels
         * (e.g., TRACE) show more messages including less critical ones. This can be helpful for troubleshooting
         * but may impact performance when set to high verbosity levels in production environments.
         *
         * @default LogLevel.WARNING
         */
        LOG_LEVEL = "logLevel",
        /**
         * Limits the scene's active bounding volume size. Ensures rendering accuracy and visual fidelity,
         * especially in scenes which contain expansive geometries, infinite lines, or helper geometries.
         *
         * @default 9007199254740991 (JavaScript's MAX_SAFE_INTEGER)
         */
        MAX_ACTIVE_SCENE_VOLUME_DIAMETER = "maxActiveSceneVolumeDiameter",
        /**
         * @deprecated SettingStrings.MAX_CONCURRENT_DOWNLOADS is deprecated and will be removed in a future version.
         *
         * Controls the maximum number of concurrent downloads that WebVis will attempt to perform
         * when loading model resources. This setting has been superseded by internal adaptive download
         * management that automatically optimizes download concurrency based on network conditions
         * and available system resources.
         *
         * @default 50
         */
        MAX_CONCURRENT_DOWNLOADS = "maxConcurrentDownloads",
        /**
         * Controls the angular tolerance (in degrees) used when determining parallelism in measurements.
         *
         * This setting defines a threshold (in degrees) for how much deviation from exact parallelism
         * is acceptable when performing geometric measurements. When the angle between
         * two geometric entities (like planes or lines) is within this tolerance of 0° or 180°,
         * WebVis will treat them as exactly parallel.
         *
         * This is particularly useful in real-world CAD models where:
         * - Manufacturing tolerances result in slightly imperfect geometry
         * - Numerical precision issues create small deviations from ideal angles
         *
         * Note: Internally, the system adds a small epsilon value (0.001°) to this setting to ensure
         * there's always a minimal tolerance. This additional value is maintained for backward
         * compatibility.
         *
         * @default 0.1
         * @see {@link MeasurementAPI} - For performing measurements between geometric entities
         */
        MEASUREMENT_ANGULAR_TOLERANCE = "measurementAngularTolerance",
        /**
         * @deprecated MEASUREMENT_MATERIAL_DENSITIES is deprecated and will be removed in a future version.
         *
         * Defines material density values for mass calculations in measurements.
         *
         * This setting allowed specifying a JSON string containing a mapping of material names to
         * their corresponding density values, which were used when calculating the mass of measured
         * objects. The format was a stringified JSON object where keys were material names and values
         * were numeric density factors.
         *
         * @default undefined
         * @see {@link MeasurementAPI} - For performing measurements
         */
        MEASUREMENT_MATERIAL_DENSITIES = "measurementMaterialDensities",
        /**
         * @deprecated NOTIFICATION_LOG_LEVELS is deprecated, please use UISetting.NOTIFICATION_FILTER and the
         * getSetting/setSetting functions on the webvisUI-Object"
         */
        NOTIFICATION_LOG_LEVELS = "notificationLogLevels",
        /**
         * Controls the hierarchical selection behavior when clicking on model objects.
         *
         * When enabled (default), clicking on an already selected component will select its parent
         * in the hierarchy. Successive clicks at the same location will continue to traverse up the
         * hierarchy, selecting each parent in turn. This allows easy navigation up the assembly
         * structure without needing to locate and precisely click on parent components.
         *
         * Technically, this setting determines whether the interaction modifier is set to
         * {@link InteractionModifier.EXPAND} during selection processing, which activates the
         * parent traversal logic in the default interaction mode.
         *
         * When disabled, clicking on a selected object won't change the selection, making it
         * more suitable for workflows that require stable selections.
         *
         * @default true
         */
        PARENT_SELECT_ENABLED = "parentSelectEnabled",
        /**
         * Controls whether credentials are included in cross-origin HTTP requests to the instant3Dhub backend.
         *
         * When enabled (default), WebVis will include authentication information such as cookies,
         * HTTP authentication, and client-side SSL certificates in all cross-origin requests.
         * This is required when your application needs to maintain authenticated sessions with the backend
         * across different domains.
         *
         * Security note: Only enable this setting when connecting to trusted domains, as it allows
         * those domains to access cookies that may contain sensitive authentication information.
         * The server must also respond with appropriate CORS headers that allow credentialed requests.
         *
         * @default true
         * @see {@link SettingStrings.ADDITIONAL_REQUEST_HEADERS} - For custom authentication headers
         */
        PREFER_XHR_WITH_CREDENTIALS = "preferXHRWithCredentials",
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         * @ignore
         */
        SESSION_DEVICE_TAGS = "sessionDeviceTags",
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         * @ignore
         */
        SESSION_FORWARD_URL = "sessionForwardUrl",
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         * @ignore
         */
        SESSION_INTERACTIONS = "sessionInteractions",
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         * @ignore
         */
        SESSION_MEMBER_NAME = "sessionMemberName",
        /**
         * @deprecated
         * @ignore
         *
         * Ignore unauthorized certificates when running in node
         */
        SKIP_SSL_VERIFY = "skipSslVerify",
        /**
         * Controls which elements of a snapshot are restored when loading a snapshot.
         *
         * Snapshots in WebVis capture the complete state of a scene, including the scene hierarchy,
         * camera position, selections, and various annotations. This setting allows applications to
         * specify default behavior for which elements should be restored when loading a snapshot.
         *
         * This setting provides the default behavior, but individual calls to
         * {@link SessionStorageAPI.restoreSnapshot | restoreSnapshot} can override these defaults with specific options.
         *
         * @default {
         *      restoreTree: true,
         *      restoreSelection: true,
         *      restoreCamera: true,
         *      restoreAnnotations: true,
         *      restoreMeasurements: true,
         *      restoreLayerFilter: true,
         *      restoreBackground: true
         * }
         * @see {@link SessionStorageAPI.restoreSnapshot} - For restoring snapshots with specific options
         * @see {@link SessionStorageAPI.createSnapshot} - For creating snapshots
         */
        SNAPSHOT_CONTENT_SELECTION = "snapshotContentSelection",
        /**
         * Defines a set of URL rewriting rules that are applied to all network requests made by WebVis.
         *
         * The URI_MAP is an array of objects, each containing a regex pattern and a replacement string.
         * When WebVis makes any network request, the URL is passed through these rewriting rules in sequence,
         * allowing you to transform URLs before they are sent to the network.
         *
         * This is particularly useful for:
         * - Redirecting requests to local development servers
         * - Mapping external URLs to internal resources
         * - Handling URL differences between environments without changing application code
         * - Implementing proxy patterns for specific resources
         *
         * Each entry in the array should have:
         * - `regex`: A string containing a regular expression pattern to match
         * - `replace`: A string containing the replacement text
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Redirect all requests from one domain to another
         * context.changeSetting(webvis.SettingStrings.URI_MAP, [
         *   {
         *     regex: "^https://production-server\\.example\\.com/",
         *     replace: "https://dev-server.example.com/"
         *   },
         *   {
         *     regex: "\\.json$",
         *     replace: ".json?cachebuster=" + Date.now()
         *   }
         * ]);
         * ```
         *
         * The rules are processed in order, with each subsequent rule operating on the
         * result of previous transformations.
         *
         * @default undefined
         */
        URI_MAP = "uriMap",
        /**
         * Specifies the usage group of the application, which is sent to the instant3Dhub alongside the usage data.
         * This can be used to separate usage data for different applications using the same instant3Dhub installation.
         *
         * @default undefined
         */
        USAGE_GROUP = "usageGroup",
        /**
         * Controls whether edge images from the XR model tracker are transmitted to the client.
         *
         * When enabled, WebVis will send edge images that visualize the tracking state of the XR model tracker.
         * These images contain the detected edges of the 3D model that the system is using for tracking.
         * The images are made available through {@link XRModelTrackerEdgeImgReceivedEvent} events and
         * can be displayed in debugging interfaces.
         *
         * This setting is primarily intended for debugging tracking issues in XR applications, allowing
         * developers to visualize how well the model tracker is detecting edges in the camera feed and
         * matching them to the 3D model.
         *
         * Important: Enabling this setting significantly increases bandwidth usage and can impact performance,
         * especially on mobile devices or over limited network connections. It should be disabled in
         * production environments and only enabled when needed for tracking diagnostics.
         *
         * @default false
         * @see {@link XRModelTrackerEdgeImgReceivedEvent} - Event that delivers the edge images
         * @see {@link XR_MODEL_TRACKER_QUALITY_THRESHOLD} - Setting to configure tracking quality threshold
         */
        XR_ENABLE_DEBUG_IMAGES = "xrEnableDebugImages",
        /**
         * Controls how different tracking inputs are combined in AR use cases to create the final camera view.
         *
         * See {@link XRFusionMode} for a detailed description of the individual fusion modes.
         *
         * Changes to this setting take effect immediately without requiring a restart of the tracking service.
         *
         * @default XRFusionMode.SLAM_MODELTRACKER
         * @see {@link RealityAPI.connectXR} - For initializing AR functionality
         * @see {@link XR_MODEL_TRACKER_QUALITY_THRESHOLD} - For adjusting model tracking sensitivity
         * @see {@link XR_MODEL_TRACKER_SMOOTHING_FACTOR} - For controlling tracking smoothness
         */
        XR_FUSION_MODE = "xrFusionMode",
        /**
         * Controls the image compression quality for XR camera frames transmitted during AR use cases.
         *
         * This setting defines a quality level for JPEG compression of the camera images used in
         * AR experiences. It directly impacts both the visual quality of the AR camera feed and the
         * bandwidth required for transmitting these images.
         *
         * The value is specified as a number between 0.0 (smallest file size, lowest visual quality) and 1.0 (largest file size, highest visual quality).
         *
         * @default 0.75
         * @see {@link XR_IMAGE_RESOLUTION_PROFILE} - For another setting that affects AR image quality and performance
         */
        XR_IMAGE_COMPRESSION_QUALITY = "xrImageCompressionQuality",
        /**
         * Controls the resolution of camera images used in AR use cases.
         *
         * This setting determines whether the AR camera feed uses full native resolution or a
         * downsampled lower resolution. It has a significant impact on performance, bandwidth
         * usage, and visual quality.
         *
         * This setting works in conjunction with {@link XR_IMAGE_COMPRESSION_QUALITY} to determine
         * the overall size and quality of the transmitted AR frames. For optimal performance in
         * bandwidth-constrained environments, use LOW_RES with moderate compression. For maximum
         * visual quality where bandwidth is not a concern, use NATIVE with high compression quality.
         *
         * @default XRImageResolutionProfile.LOW_RES
         * @see {@link XR_IMAGE_COMPRESSION_QUALITY} - For controlling image compression level
         */
        XR_IMAGE_RESOLUTION_PROFILE = "xrImageResolutionProfile",
        /**
         * Controls the confidence threshold required for the XR model tracker to consider a model "successfully tracked" in AR.
         *
         * Note: This setting is only relevant when the {@link XR_FUSION_MODE} is set to {@link XRFusionMode.SLAM_MODELTRACKER}.
         *
         * This setting defines the minimum level of confidence (between 0.0 and 1.0) that the model
         * tracking system must have before transitioning the {@link XRState.modelTrackingPhase} to
         * {@link XRModelTrackingPhase.SNAPPED | SNAPPED}. When the confidence level exceeds this threshold:
         *
         * 1. The tracking state changes to {@link XRModelTrackingPhase.SNAPPED}.
         * 2. The XR system automatically sets {@link XRState.anchored} to `true`.
         * 3. The model's position becomes fixed relative to the real world.
         *
         * This threshold directly affects how easily the AR system will "lock onto" the physical object:
         * Lower values allow for a more permissive tracking that snaps more easily but may result in less accurate
         * alignment with the physical world. This can be useful in challenging environments with poor lighting or when
         * tracking complex models. Higher values require a very precise tracking and will only lead to snapping when there
         * is high confidence. They can results in more accurate alignment but snapping may be difficult to achieve in
         * suboptimal conditions.
         *
         * @default 0.65
         * @see {@link XR_FUSION_MODE} - For controlling how tracking inputs are combined
         * @see {@link XR_MODEL_TRACKER_SMOOTHING_FACTOR} - For adjusting how quickly tracking changes are applied
         */
        XR_MODEL_TRACKER_QUALITY_THRESHOLD = "xrModelTrackerQualityThreshold",
        /**
         * Controls how smoothly the AR camera transitions between different poses during model tracking.
         *
         * Note: This setting is only relevant when the {@link XR_FUSION_MODE} is set to {@link XRFusionMode.SLAM_MODELTRACKER}.
         *
         * When the model tracker detects changes in the position or orientation of the tracked object,
         * this setting determines how gradually these changes are applied to the AR view. The value
         * ranges from 0.0 (no smoothing) to 1.0 (maximum smoothing, interpolate over 16 frames).
         *
         * Internally, this setting controls the interpolation factor used when blending between the
         * previous camera pose and the newly detected pose, essentially creating a moving average
         * that filters out rapid changes.
         *
         * @default 0.20
         * @see {@link XR_FUSION_MODE} - For controlling how tracking inputs are combined
         */
        XR_MODEL_TRACKER_SMOOTHING_FACTOR = "xrModelTrackerSmoothingFactor",
    }
    /**
     * A callback function used to track the progress of storing a session.
     *
     * This callback is invoked during the session storage process to provide updates on the progress,
     * including the current step and the total number of steps.
     * When current equals total, the session storage process is complete.
     *
     * ### Use Case
     * Use this callback to monitor the progress of session storage operations. For example, you can use it to
     * update a progress bar or display status messages to the user.
     *
     * @param id - The unique identifier of the session being stored.
     * @param current - The current progress step.
     * @param total - The total number of steps in the session storage process.
     *
     * @see {@link SessionStorageAPI}
     */
    type StoreSessionProgressCallback = (id: string, current: number, total: number) => void;
    /**
     * Options used for restoring a snapshot.
     *
     * These options allow customization of the snapshot restoration process, enabling selective restoration of specific elements such as annotations, camera settings, or measurements.
     *
     * ### Use Case
     * Use this type to configure the snapshot restoration process. For example, you can choose to restore only the camera settings or specific elements of the session state.
     *
     * @see {@link SessionStorageAPI}
     */
    interface SnapshotRestoreOptions {
        /**
         * Specifies whether annotations should be restored.
         *
         * @default true
         */
        restoreAnnotations?: boolean;
        /**
         * Specifies whether the camera settings should be restored.
         *
         * @default true
         */
        restoreCamera?: boolean;
        /**
         * Specifies whether clip planes should be restored.
         *
         * @default true
         */
        restoreClipPlanes?: boolean;
        /**
         * Specifies whether the clip room should be restored.
         *
         * @default true
         */
        restoreClipRoom?: boolean;
        /**
         * Specifies whether drawings should be restored.
         *
         * @default true
         */
        restoreDrawings?: boolean;
        /**
         * Specifies whether drawing planes should be restored.
         *
         * @default true
         */
        restoreDrawingPlanes?: boolean;
        /**
         * Specifies whether the layer filter should be restored.
         *
         * @default true
         */
        restoreLayerFilter?: boolean;
        /**
         * Specifies whether measurements should be restored.
         *
         * @default true
         */
        restoreMeasurements?: boolean;
        /**
         * Specifies whether the selection state should be restored.
         *
         * @default true
         */
        restoreSelection?: boolean;
        /**
         * Specifies whether the tree structure should be restored.
         *
         * @default true
         */
        restoreTree?: boolean;
        /**
         * Specifies whether the background should be restored when restoring camera settings.
         *
         * @default true
         */
        restoreBackground?: boolean;
    }
    /**
     * Represents the properties of a snapshot.
     *
     * These properties define the metadata and state of a snapshot, such as its name, order, thumbnail, and status.
     *
     * ### Use Case
     * Use this type to manage and retrieve metadata about snapshots. For example, you can use it to display snapshot details
     * in the UI or to determine the consistency of a snapshot.
     *
     * @see {@link SessionStorageAPI}
     */
    interface SnapshotProperties {
        /**
         * The name of the snapshot.
         * This property represents the user-defined name of the snapshot.
         * @default undefined
         */
        name?: string | undefined;
        /**
         * The order of the snapshot in the list of all snapshots.
         * @default undefined
         */
        order?: number | undefined;
        /**
         * The thumbnail of the snapshot as a Base64-encoded JPG or PNG image.
         * This property provides a visual representation of the snapshot.
         * @default undefined
         */
        thumbnail?: string | undefined;
        /**
         * Describes the availability and integrity status of a snapshot's referenced data.
         * See {@link SnapshotStatus} for more information about the possible values.
         *
         * @default SnapshotStatus.CONSISTENT
         */
        status?: SnapshotStatus;
    }
    /**
     * Options used for the creation of a snapshot.
     * These options allow customization of the snapshot creation process.
     *
     * ### Use Case
     * Use this type to configure the snapshot creation process. For example, you can specify whether a thumbnail should be created
     * and define its dimensions if needed.
     *
     * @see {@link SessionStorageAPI}
     */
    interface SnapshotCreationOptions {
        /**
         * Specifies whether a thumbnail should be created for the snapshot.
         * @default true
         */
        thumbnail?: boolean;
        /**
         * Specifies the height of the thumbnail in pixels.
         * If neither `thumbnailHeight` nor `thumbnailWidth` is set, the current viewer size will be used.
         * @default undefined
         */
        thumbnailHeight?: number;
        /**
         * Specifies the width of the thumbnail in pixels.
         * If neither `thumbnailHeight` nor `thumbnailWidth` is set, the current viewer size will be used.
         * @default undefined
         */
        thumbnailWidth?: number;
        /**
         * Specifies whether the viewer's background should be stored in the snapshot.
         * @default false
         */
        storeBackground?: boolean;
    }
    interface SessionStore {
        instances: {
            [key: number]: any;
        };
        snapshots: {
            [key: number]: any;
        };
        drawings: {
            [key: number]: any;
        };
        attachments: Array<any>;
        customProperties: Array<any>;
        propertyKeys: Array<string>;
        activeSnapshotID: number;
        tags: [];
        animationFrames: {
            [key: string]: Array<AnimationFrame>;
        };
        about: {
            [key: string]: string;
        };
    }
    /**
     * ## SessionStorageAPI
     *
     * ### Overview
     *
     * The **SessionStorageAPI** provides tools to manage session storage and snapshots in webvis.
     * A session represents the entire state of the 3D space, which can be shared, stored, and restored.
     * Snapshots are subsets of a session that capture a momentary state, including elements like clip planes and measurements.
     *
     * This API allows you to:
     * - Create, change, restore, and delete snapshots.
     * - Store and restore session states.
     *
     * ### Quick Start
     * Example: Create a snapshot, modify its properties, and restore it.
     *
     * ```javascript
     * // Get the WebVis context
     * const context = webvis.getContext();
     *
     * // Create a snapshot
     * const snapshotId = await context.createSnapshot("My Snapshot");
     *
     * // Change the snapshot's properties
     * context.changeSnapshot(snapshotId, { name: "Updated Snapshot Name" });
     *
     * // Restore the snapshot
     * await context.restoreSnapshot(snapshotId);
     * ```
     *
     * ### Events
     *
     * The following events are associated with the SessionStorageAPI:
     * - {@link SnapshotCreatedEvent}
     * - {@link SnapshotCreationStartedEvent}
     * - {@link SnapshotChangedEvent}
     * - {@link SnapshotRestoredEvent}
     * - {@link SnapshotRestoreStartedEvent}
     * - {@link SnapshotRemovedEvent}
     */
    interface SessionStorageAPI {
        /**
         * Creates a snapshot of the current session state.
         *
         * Triggers a {@link SnapshotCreationStartedEvent} and, if successful, a {@link SnapshotCreatedEvent}.
         *
         * @param name The name of the snapshot.
         * @param options Options used for the snapshot creation.
         * @returns The ID of the created snapshot.
         */
        createSnapshot(name?: string, options?: SnapshotCreationOptions): Promise<number>;
        /**
         * Restores the snapshot for the given snapshot ID.
         *
         * Triggers a {@link SnapshotRestoreStartedEvent} and, if successful, a {@link SnapshotRestoredEvent}.
         *
         * @param snapshotID The ID of the snapshot to restore.
         * @param options Options to control the subset of snapshot data to restore.
         * @returns A Promise that resolves when the snapshot is restored.
         */
        restoreSnapshot(snapshotID: number, options?: SnapshotRestoreOptions): Promise<void>;
        /**
         * Changes one or more properties of a snapshot with the specified ID.
         *
         * Triggers a {@link SnapshotChangedEvent}.
         *
         * @param snapshotID The ID of the snapshot to change.
         * @param properties The properties of the snapshot to change.
         * @returns An object with the changed properties.
         */
        changeSnapshot(snapshotID: number, properties: SnapshotProperties): SnapshotProperties;
        /**
         * Changes the textual description of the snapshot with the specified ID to the value of text.
         *
         * Triggers a {@link SnapshotChangedEvent}.
         *
         * @deprecated Calling changeSnapshot with single parameters is deprecated, please use SnapshotProperties instead.
         * @param {number} snapshotID The ID of the snapshot to change.
         * @param {string} name The new name of the snapshot.
         * @param {string} screenshotURL The new screenshot URL of the snapshot.
         * @param {number} order The order inside the list of snapshots.
         */
        changeSnapshot(snapshotID: number, name?: string, screenshotURL?: string, order?: number): SnapshotProperties;
        /**
         * Deletes the snapshot for the given snapshot ID.
         *
         * Triggers a {@link SnapshotRemovedEvent}.
         *
         * @param snapshotID The ID of the snapshot to delete.
         */
        removeSnapshot(snapshotID: number): void;
        /**
         * Exports the current session state
         * @ignore
         */
        exportSession(): SessionStore;
        /**
         * Imports a session from the given data string in the specified format.
         *
         * Supported formats: xscn.
         *
         * @param data The content of the session file.
         * @param format The format of the session file. Default: "xscn".
         * @returns A Promise that resolves when the session is imported.
         */
        importSession(data: any, format?: "xscn" | undefined): Promise<any>;
        /**
         * @deprecated isOfflineStorageAvailable is deprecated.
         *
         * Checks if offline storage is currently available. This functionality is no longer relevant
         * as offline storage is not supported anymore.
         *
         * @returns A Promise that always resolves to false, as offline storage is not used anymore.
         */
        isOfflineStorageAvailable(): Promise<boolean>;
        /**
         * Temporarily stores the session in the connected hub instance and returns an access handle.
         *
         * This function does not transfer caches of referenced resources to the hub instance.
         * For transferring caches, see {@link transferSession}.
         *
         * @returns The access handle of the stored session.
         */
        storeSession(): Promise<string | undefined>;
        /**
         * @deprecated transferSession with progress callback is deprecated. Please use transferSession without
         * parameters and utilize the returned promise instead!
         *
         * Transfers the session to the connected hub instance and returns an access handle.
         *
         * Transfers caches of referenced resources to the hub instance if they are not already present.
         *
         * @param progressCallback Can be used to track the progress of the transfer.
         * @returns The access handle of the transferred session.
         */
        transferSession(progressCallback: StoreSessionProgressCallback): Promise<string | undefined>;
        /**
         * Transfers the session to the connected hub instance and returns an access handle.
         *
         * Transfers caches of referenced resources to the hub instance if they are not already present.
         *
         * @returns The access handle of the transferred session.
         */
        transferSession(): Promise<string | undefined>;
        /**
         * Restores a session for the given access handle from the infrastructure.
         *
         * @param handle The access handle of the session to restore.
         * @returns A Promise that resolves when the session is restored.
         */
        restoreSession(handle: string): Promise<void>;
        /**
         * Returns the IDs of all available snapshots.
         *
         * @returns An array of snapshot IDs.
         */
        getSnapshots(): Array<number>;
        /**
         * Requests the data of the specified snapshot.
         *
         * @param snapshotID The ID of the snapshot to request data for.
         * @returns The data of the specified snapshot.
         */
        requestSnapshotData(snapshotID: number): Promise<SnapshotProperties | undefined>;
        /**
         * @deprecated getSnapshotData is deprecated. Please use {@link requestSnapshotData} instead.
         *
         * @param snapshotID The ID of the snapshot to request data for.
         * @returns The data of the specified snapshot.
         */
        getSnapshotData(snapshotID: number): {
            name: string;
            attachmentID: number;
            order: number;
        } | undefined;
    }
    /**
     * Event that is fired when the restoration of a snapshot starts.
     *
     * This event is triggered at the beginning of the snapshot restoration process.
     * It provides the ID of the snapshot being restored, allowing listeners to react to the start of the restoration.
     *
     * ### Use Case
     * Use this event to track the start of a snapshot restoration process. This can be useful for displaying loading indicators,
     * preparing the application for the restoration workflow, or logging restoration attempts.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link SessionStorageAPI}
     * @see {@link EventType.SNAPSHOT_RESTORE_STARTED}
     */
    class SnapshotRestoreStartedEvent extends WebVisEvent {
        snapshotID: number;
        /**
         * @param snapshotID The ID of the snapshot that is being restored.
         */
        constructor(snapshotID: number);
    }
    /**
     * Event that is fired when a snapshot has been restored.
     *
     * This event is triggered whenever a snapshot is successfully restored in the session.
     * It provides the ID of the restored snapshot and the settings used during the restoration process,
     * allowing listeners to react to the restoration.
     *
     * ### Use Case
     * Use this event to monitor when a snapshot is restored. This can be useful for updating the UI,
     * reloading specific components, or applying additional logic based on the restored snapshot.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link SessionStorageAPI}
     * @see {@link EventType.SNAPSHOT_RESTORED}
     */
    class SnapshotRestoredEvent extends WebVisEvent {
        snapshotID: number;
        settings: SnapshotRestoreOptions;
        /**
         * @param snapshotID The ID of the snapshot that was restored.
         * @param settings The settings used during the snapshot restoration process.
         */
        constructor(snapshotID: number, settings: SnapshotRestoreOptions);
    }
    /**
     * Event that is fired when a snapshot has been removed.
     *
     * This event is triggered whenever a snapshot is deleted from the session. It provides the ID of the removed snapshot, allowing listeners to react to the removal.
     *
     * ### Use Case
     * Use this event to monitor the removal of snapshots. This can be useful for updating the UI, clearing references to the removed snapshot, or performing cleanup operations.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link SessionStorageAPI}
     * @see {@link EventType.SNAPSHOT_REMOVED}
     */
    class SnapshotRemovedEvent extends WebVisEvent {
        snapshotID: number;
        /**
         * @param snapshotID The ID of the snapshot that was removed.
         */
        constructor(snapshotID: number);
    }
    /**
     * Event that is fired when the creation of a snapshot starts.
     *
     * This event is triggered at the beginning of the snapshot creation process, allowing listeners to react to the start of the operation.
     *
     * ### Use Case
     * Use this event to track the start of a snapshot creation process.
     * This can be useful for displaying loading indicators or preparing the application for the snapshot creation workflow.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link SessionStorageAPI}
     * @see {@link EventType.SNAPSHOT_CREATION_STARTED}
     */
    class SnapshotCreationStartedEvent extends WebVisEvent {
        /** */
        constructor();
    }
    /**
     * Event that is fired when a snapshot has been successfully created.
     * It provides information about the created snapshot, including its ID and properties.
     *
     * ### Use Case
     * Use this event to monitor the creation of snapshots. This can be useful for updating the UI,
     * displaying confirmation messages, or triggering additional workflows based on the created snapshot.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link SessionStorageAPI}
     * @see {@link EventType.SNAPSHOT_CREATED}
     */
    class SnapshotCreatedEvent extends WebVisEvent {
        snapshotID: number;
        properties: SnapshotProperties;
        private _attachmentId;
        /**
         * @param snapshotID The ID of the created snapshot.
         * @param properties The properties of the created snapshot, such as name, order, and thumbnail.
         */
        constructor(snapshotID: number, properties: SnapshotProperties, _attachmentId: number);
        /**
         * @deprecated attachmentID is deprecated, please use properties.thumbnail instead.
         *
         * @returns The ID of the attachment associated with the snapshot.
         */
        get attachmentID(): number;
        /**
         * @deprecated name is deprecated, please use properties.name instead.
         *
         * @returns The name of the snapshot.
         */
        get name(): string;
        /**
         * @deprecated order is deprecated, please use properties.order instead.
         *
         * @returns The order of the snapshot.
         */
        get order(): number;
    }
    /**
     * Event that is fired when a snapshot has been changed.
     *
     * It provides the ID of the snapshot and the updated properties, allowing listeners to react to the changes.
     *
     * ### Use Case
     * Use this event to monitor changes to snapshots, such as updates to their name, order, or thumbnail.
     * This is particularly useful for keeping the UI or other components in sync with the latest snapshot state.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link SessionStorageAPI}
     * @see {@link EventType.SNAPSHOT_CHANGED}
     */
    class SnapshotChangedEvent extends WebVisEvent {
        snapshotID: number;
        properties: SnapshotProperties;
        /**
         * @param snapshotID The ID of the Snapshot.
         * @param {SnapshotProperties} properties An object with the changed properties.
         */
        constructor(snapshotID: number, properties: SnapshotProperties);
        /**
         * @deprecated order is deprecated, please use properties.order instead.
         *
         * @returns The order of the snapshot.
         */
        get order(): number;
        /**
         * @deprecated screenshot is deprecated, please use properties.screenshot instead.
         *
         * @returns The screenshot image (thumbnail) of the snapshot.
         */
        get screenshot(): string;
        /**
         * @deprecated text is deprecated, please use properties.name instead.
         *
         * @returns The name of the snapshot.
         */
        get text(): string;
    }
    /**
     * Event that is fired when an internal snapshot is created.
     *
     * This event is primarily used internally to handle snapshot creation processes. It provides detailed information
     * about the created snapshot, including its ID, name, camera state, and additional synchronization data.
     *
     * @event
     * @hideconstructor
     * @ignore
     *
     * @see {@link SessionStorageAPI}
     */
    class InternalSnapshotCreatedEvent extends WebVisEvent {
        snapshotID: number;
        name?: string;
        attachmentID?: number;
        cameraStore?: {
            viewMatrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ];
            centerOfRotation: [number, number, number];
            viewPointDiameter: number;
            viewPlaneDistance: number;
            cameraType: number;
        };
        snapshotStore?: any;
        instanceStores?: {
            [key: number]: any;
        };
        sessionSyncData?: SessionSyncDataMap;
        /**
         * @param snapshotID The ID of the created snapshot.
         * @param name The name of the snapshot.
         * @param attachmentID The ID of the attachment associated with the snapshot.
         * @param cameraStore The camera state at the time of snapshot creation.
         * @param snapshotStore The snapshot store (only for navis).
         * @param instanceStores A map of instance stores (only for navis).
         * @param sessionSyncData The session synchronization data (only for navis).
         */
        constructor(
            snapshotID: number,
            name?: string,
            attachmentID?: number,
            cameraStore?: {
                viewMatrix: [
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                    number,
                ];
                centerOfRotation: [number, number, number];
                viewPointDiameter: number;
                viewPlaneDistance: number;
                cameraType: number;
            },
            snapshotStore?: any,
            instanceStores?: {
                [key: number]: any;
            },
            sessionSyncData?: SessionSyncDataMap,
        );
    }
    /**
     * Describes the availability and integrity status of a snapshot's referenced data.
     *
     * @see {@link SessionStorageAPI}
     */
    enum SnapshotStatus {
        /**
         * All data referenced by the snapshot is present and available.
         *
         * @see {@link SnapshotProperties}
         */
        CONSISTENT = 0,
        /**
         * One or more pieces of data referenced by the snapshot have been removed,
         * making the snapshot incomplete.
         *
         * @see {@link SnapshotProperties}
         */
        INCONSISTENT = 1,
    }
    /**
     * @ignore
     */
    interface StreamTransMissionHints {
        frameSkipThreshold?: number;
    }
    /**
     * @ignore
     */
    interface StreamStateData {
        streamId: number;
        subscriberCount?: number;
        interest?: boolean;
        available?: boolean;
        location?: string;
        signal?: StreamSignal;
    }
    /**
     * @ignore
     */
    interface StreamSignal {
        [key: string]: any;
    }
    interface SessionSyncDataMap {
        nodeIDs: {
            [key: number]: number;
        };
        attachmentIDs: {
            [key: number]: number;
        };
        drawingIDs: {
            [key: number]: number;
        };
        clipPlaneIDs: {
            [key: number]: number;
        };
        clipRoomIDs: {
            [key: number]: number;
        };
        annotationIDs: {
            [key: number]: number;
        };
        drawingPlaneIDs: {
            [key: number]: number;
        };
        measurementIDs: {
            [key: number]: number;
        };
        materialIDs: {
            [key: number]: number;
        };
    }
    interface SessionSyncData {
        annotationIDs: number[];
        attachmentsIDs: number[];
        clipPlaneIDs: number[];
        drawingIDs: number[];
        drawingPlaneIDs: number[];
        materialIDs: number[];
        measurementIDs: number[];
        snapshotIDs: number[];
    }
    /**
     * @ignore
     */
    type SessionStreamStateChangedCallback = (connectionData: StreamStateData) => void;
    /**
     * @ignore
     */
    type SessionStreamMessageCallback = (message: string | ArrayBufferLike | ArrayBufferView | Serializable) => void;
    /**
     * @ignore
     */
    interface SessionStreamData {
        streamId?: number;
        name: string;
        content: string;
        contentType: "ascii" | "binary";
        connectionType: "hosted" | "peer";
        location?: string;
        memberId: number;
        metadata?: any;
        space?: string;
        transmissionHints?: StreamTransMissionHints;
    }
    /**
     * @ignore
     */
    interface SessionStreamCondition {
        streamId?: number;
        name?: string;
        content?: string;
        contentType?: string;
        connectionType?: string;
        location?: string;
        memberId?: number;
        metadata?: any;
        [key: number]: any;
    }
    /**
     * The information about a Session.
     */
    interface SessionStateData extends SessionMemberData {
        state?: SessionConnectionState;
        sessionId?: string;
        sessionUri?: string;
        hidden?: boolean;
    }
    /**
     * The information about a SessionMember.
     */
    interface SessionMemberData {
        name?: string;
        deviceTags?: Array<string>;
        assignedRoles?: Array<string>;
        assignedDirectives?: Array<string>;
        memberId?: number;
        roleHints?: Array<string>;
        spaceDomain?: string;
        settings?: {
            [key: string]: any;
        };
        privileges?: Array<MemberPrivileges>;
    }
    /**
     * The SessionAPI allows to share the state of the InstanceGraph between multiple user in a collaborative setting.
     */
    interface SessionAPI {
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * Connects to a Session. If the ID does not exist, a new Session will be created.
         * @param sessionID The ID of the Session.
         * @param name The ID of the Session.
         */
        connectToSession(sessionID?: string, name?: string): Promise<SessionStateData>;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * Disconnects from a Session.
         */
        disconnectFromSession(): void;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * Shuts down a Session and disconnects all joined SessionMembers.
         */
        shutdownSession(): Promise<void>;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * Removes a SessionMember from a Session.
         * @param memberID The ID of the SessionMember.
         */
        removeSessionMember(memberID: number): void;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * Promotes a SessionMember to the Role of the Moderator.
         * @param memberID The ID of the SessionMember.
         */
        promoteSessionMember(memberID: number): void;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @return The ID of the SessionMember.
         */
        getSessionMemberID(): number;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @return The IDs of all SessionMembers.
         */
        getSessionMembers(): Promise<Array<SessionMemberData>>;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @return Information about the Session.
         */
        getSessionStateData(): SessionStateData;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        getSessionStreams(conditions?: SessionStreamCondition): Promise<Array<SessionStreamData>>;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        awaitStream(conditions: SessionStreamCondition): Promise<SessionStreamData>;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        subscribeStream(streamID: number, callback?: SessionStreamMessageCallback): Promise<void>;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        unsubscribeStream(streamID: number, callback: SessionStreamMessageCallback): void;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        publishStream(data: SessionStreamData): Promise<number | undefined>;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        removeStream(streamID: number): void;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        onStreamStateChange(streamID: number, callback: SessionStreamStateChangedCallback): void;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        sendToStream(streamID: number, message: string | ArrayBuffer): void;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        readSessionParameter(sessionParameter: string, flags: {
            [key: string]: any;
        }): Promise<any>;
        /**
         * @deprecated The whole SessionAPI is under consolidation and will be replaced in a future release.
         *
         * @ignore
         */
        changeSessionParameter(sessionParameter: string, value?: any, flags?: {
            [key: string]: any;
        }): void;
    }
    /**
     * This event occurs if the state of a Stream has changed.
     *
     * @event
     * @hideconstructor
     */
    class StreamStateChangedEvent extends WebVisEvent {
        streamStateData: StreamStateData;
        /**
         * @param streamStateData The changed StreamStateData.
         */
        constructor(streamStateData: StreamStateData);
    }
    /**
     * The STATE_SYNC event is fired to sync new members of a session.
     *
     * @event
     * @hideconstructor
     */
    class StateSyncEvent extends WebVisEvent {
        isEmpty: boolean;
        sessionStore?: SessionStore;
        members?: (MemberProperties & {
            memberId: number;
        })[];
        offeredMemberActions?: Record<number, MemberAction[]>;
        sessionSyncData?: SessionSyncData | SessionSyncDataMap;
        /**
         * @param isEmpty Hints that the state is empty. Depending on this, the client might want to replace the session state with its own.
         * @param sessionStore The SessionStore we have to load if the state is not empty.
         * @param sessionSyncData Additional data we need for synchronization.
         */
        constructor(
            isEmpty: boolean,
            sessionStore?: SessionStore,
            members?: (MemberProperties & {
                memberId: number;
            })[],
            offeredMemberActions?: Record<number, MemberAction[]>,
            sessionSyncData?: SessionSyncData | SessionSyncDataMap,
        );
    }
    /**
     * This event signals a that the session is transferring.
     *
     * @event
     * @hideconstructor
     */
    class SessionTransferEvent extends WebVisEvent {
        sessionID: string;
        /**
         * @param sessionID The id of the new session.
         */
        constructor(sessionID: string);
    }
    /**
     * This event occurs if the state of a Session has changed.
     *
     * @event
     * @hideconstructor
     */
    class SessionStateChangedEvent extends WebVisEvent {
        sessionStateData: SessionStateData;
        /**
         * @param sessionStateData The changed SessionStateData.
         */
        constructor(sessionStateData: SessionStateData);
    }
    /**
     * The SESSION_PARAMETER_CHANGED event is fired when a session parameter has been changed.
     *
     * @event
     * @hideconstructor
     */
    class SessionParameterChangedEvent extends WebVisEvent {
        sessionParameter: string;
        memberID?: number;
        available?: boolean;
        interest?: boolean;
        /**
         * @param sessionParameter The key of the changed session parameter.
         * @param memberID The (optional) memberID for which a member session parameter was changed.
         * @param available The (optional) availability state of the session parameter.
         * @param interest The (optional) interest state of the session parameter.
         */
        constructor(sessionParameter: string, memberID?: number, available?: boolean, interest?: boolean);
    }
    /**
     * This event occurs if the data of a SessionMember has changed.
     *
     * @event
     * @hideconstructor
     */
    class MemberUpdatedEvent extends WebVisEvent {
        memberData: SessionMemberData;
        /**
         * @param memberData The updated information about the SessionMember.
         */
        constructor(memberData: SessionMemberData);
    }
    /**
     * This event occurs if a SessionMember has left.
     *
     * @event
     * @hideconstructor
     */
    class MemberLeftEvent extends WebVisEvent {
        memberID: number;
        /**
         * @param memberID The ID of the SessionMember.
         */
        constructor(memberID: number);
    }
    /**
     * This event occurs if a new SessionMember has joined.
     *
     * @event
     * @hideconstructor
     */
    class MemberJoinedEvent extends WebVisEvent {
        memberData: SessionMemberData;
        /**
         * @param memberData Information about the joined member.
         */
        constructor(memberData: SessionMemberData);
    }
    /**
     * This event signals new or failed credentials acquisition.
     *
     * @event
     * @hideconstructor
     */
    class CredentialsAquisitionUpdateEvent extends WebVisEvent {
        accepted: boolean;
        credentials: string;
        /**
         * @param accepted Is true when credentials were found.
         * @param credentials The credential data.
         */
        constructor(accepted: boolean, credentials: string);
    }
    interface SharedSessionData {
        wsEndpoint: string;
        initPose: Float32Array;
        sessionID: string;
        resetURL: string;
        debugURL: string;
        paramsURL: string;
    }
    enum SessionConnectionState {
        INIT = 0,
        CONNECTING = 1,
        CONNECTED = 2,
    }
    enum MemberPrivileges {
        Moderator = "moderator",
    }
    /**
     * Represents the result of a change selection operation.
     *
     * This type contains information about the selection change, including the target node ID,
     * the count of nodes in the selection before and after the change, and the list of currently selected nodes.
     */
    interface ChangeSelectionResult {
        /**
         * The ID of the node that was the target of the selection change.
         * If value is -1, no node was targeted (for example {@link SelectionAPI.clearSelection}) or multiple nodes were effected.
         */
        targetNodeID: number;
        /**
         * The number of nodes that were selected before the change.
         */
        oldSelectionCount: number;
        /**
         * The number of nodes that are selected after the change.
         */
        newSelectionCount: number;
        /**
         * An array containing the IDs of all currently selected nodes.
         */
        selectedNodes: Array<number>;
    }
    /**
     * ## SelectionAPI
     *
     * ### Overview
     *
     * The **SelectionAPI** provides basic functionalities to manipulate the current selection of nodes.
     * It allows {@link SelectionAPI.addToSelection adding}, {@link SelectionAPI.removeFromSelection removing}, and checking the selection status of nodes, as well as replacing the current selection.
     *
     * ### Quick Start
     *
     * Example: add a node to the selection, query the selection, and clear the selection in the end.
     *
     * ```javascript
     * const context = webvis.getContext()
     *
     * // add node with ID 5 to the selection
     * await context.addToSelection(5)
     *
     * // get selected nodes
     * context.getSelectedNodes() // returns [5]
     *
     * // clear the selection
     * await context.clearSelection()
     * ```
     *
     * ### Reading the selection state of a node
     *
     * Instead of using the {@link SelectionAPI.isSelected isSelected} method,
     * you can also check whether a node is selected by using the {@link InstanceGraphAPI.getProperty getProperty} method.
     * The property {@link Property.SELECTED} can be used to check the selection state of a node.
     *
     * The selection state is recursive, meaning:
     * - When a parent node is selected, all its children are selected as well.
     * - When all children of a node become selected, the parent node is considered selected.
     *
     * The {@link getSelectedNodes} method returns the list of selected nodes. If a parent node is selected, it will return the parent node, but not its children.
     *
     * To get a list of all selected leaf nodes (nodes without children), you can use the {@link getSelectedLeafNodes} method.
     *
     * ### Events
     *
     * The following event is associated with the SelectionAPI:
     *
     * - {@link SelectionChangedEvent}: Triggered when the selection changes.
     */
    interface SelectionAPI {
        /**
         * Returns a list of all selected nodes.
         *
         * @deprecated getSelection is deprecated, please use {@link getSelectedNodes} instead.
         *
         * @return An array which contains the IDs of all nodes in the current selection.
         */
        getSelection(): Promise<Array<number>>;
        /**
         * Returns a list of all selected leaf nodes.
         *
         * @return An array which contains the IDs of all leaf nodes in the current selection.
         */
        getSelectedLeafNodes(): Array<number>;
        /**
         * Returns a list of all selected nodes.
         * When a whole subtree is selected, only the parent node will be included in the returned array.
         * To get the selected leaf nodes of the subtree, use {@link getSelectedLeafNodes} instead.
         *
         * @returns An array which contains the IDs of all nodes in the current selection.
         */
        getSelectedNodes(): Array<number>;
        /**
         * @deprecated selectCollection is deprecated, please use {@link setSelection} instead.
         *
         * Replaces the current selection with the nodes from the given collection.
         *
         * Triggers a {@link SelectionChangedEvent} if silent is set to false.
         *
         * @param collectionID The ID of the collection.
         * @param silent If set to true, no event will be emitted. Default: false
         */
        selectCollection(collectionID: number, silent?: boolean): Promise<ChangeSelectionResult | undefined>;
        /**
         * Clears the current selection.
         *
         * Triggers a {@link SelectionChangedEvent} if silent is set to false.
         *
         * @param silent If set to true, no event will be emitted. Default: false
         * @returns The result of the selection change.
         */
        clearSelection(silent?: boolean): Promise<ChangeSelectionResult>;
        /**
         * Inverts the current selection.
         *
         * Selected nodes will be unselected, and then all previously unselected leaf nodes will be selected.
         * When all child nodes of a parent are selected, the selection moves up the hierarchy as usual.
         *
         * For example, consider the following hierarchy:
         *
         * ```javascript
         * Node 0
         *  |- Node 1
         *      |- Node 1.1
         *      |- Node 1.2
         *  |- Node 2
         *      |- Node 2.1
         *      |- Node 2.2
         * ```
         *
         * If the initial selection is only `Node 2.1`, calling `invertSelection` will result in the selection including `Node 2.2`, `Node 1.1`, `Node 1.2`, and therefore also `Node 1`.
         * `Node 0` and `Node 2` will not become selected, even though they were not selected initially.
         * If {@link getSelectedNodes} is called at this point, it will return `[Node 1, Node 2.2]`.
         *
         * Triggers a {@link SelectionChangedEvent} if silent is set to false.
         *
         * @param silent If set to true, no event will be emitted. Default: false
         * @returns The result of the selection change.
         */
        invertSelection(silent?: boolean): Promise<ChangeSelectionResult>;
        /**
         * Adds the specified nodes to the current selection.
         *
         * Triggers a {@link SelectionChangedEvent} if silent is set to false.
         *
         * @param nodeID The ID or array of IDs of the nodes to add to the selection.
         * @param silent If set to true, no event will be emitted. Default: false
         * @returns The result of the selection change.
         */
        addToSelection(nodeID: number | Array<number>, silent?: boolean): Promise<ChangeSelectionResult>;
        /**
         * Removes the specified nodes from the current selection.
         *
         * Triggers a {@link SelectionChangedEvent} if silent is set to false.
         *
         * @param nodeID The ID or array of IDs of the nodes to remove from the selection.
         * @param silent If set to true, no event will be emitted. Default: false
         * @returns The result of the selection change.
         */
        removeFromSelection(nodeID: number | Array<number>, silent?: boolean): Promise<ChangeSelectionResult>;
        /**
         * Checks if the specified node is part of the selection.
         *
         * @param nodeID The ID of the node to check for selection status.
         * @returns True if the given node is selected, otherwise false.
         */
        isSelected(nodeID: number): Promise<boolean>;
        /**
         * Replaces the current selection with the specified nodes.
         *
         * Triggers a {@link SelectionChangedEvent} if silent is set to false.
         *
         * @param nodeID The ID or array of IDs of the nodes to select.
         * @param silent If set to true, no event will be emitted. Default: false
         * @returns The result of the selection change.
         */
        setSelection(nodeID: number | Array<number>, silent?: boolean): Promise<ChangeSelectionResult>;
    }
    /**
     * This event occurs if the selection has changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link SelectionAPI}
     * @see {@link EventType.SELECTION_CHANGED}
     */
    class SelectionChangedEvent extends WebVisEvent {
        targetNodeID: number;
        oldSelectionCount: number;
        newSelectionCount: number;
        selectedNodes: Array<number>;
        /**
         * @param targetNodeID The ID of the node whose selection has changed. For further information see {@link ChangeSelectionResult.targetNodeID}.
         * @param oldSelectionCount The number of previous selected Nodes.
         * @param newSelectionCount The number of currently selected Nodes.
         * @param selectedNodes The IDs of the currently selected Nodes.
         */
        constructor(
            targetNodeID: number,
            oldSelectionCount: number,
            newSelectionCount: number,
            selectedNodes: Array<number>,
        );
    }
    /**
     * Reflects the current state of the XR system.
     *
     * @see {@link RealityAPI.getXRState}
     * @see {@link XRStateChangedEvent}
     */
    interface XRState {
        /**
         * Specifies in which phase the model tracking is.
         *
         * If the XR system does not support model tracking, this value will always be {@link XRModelTrackingPhase.NONE}.
         */
        modelTrackingPhase: XRModelTrackingPhase;
        /**
         * Represents the current world mapping status
         * of the XR system if available.
         */
        worldMappingStatus: XRWorldMappingStatus;
        /**
         * Whether the rendered model is anchored in the XR space or not.
         *
         * @see {@link RealityAPI.anchorXR}
         * @see {@link RealityAPI.unanchorXR}
         */
        anchored: boolean;
        /**
         * Whether the background feed is visible or not.
         *
         * @see {@link RealityAPI.showXRBackgroundFeed}
         * @see {@link RealityAPI.hideXRBackgroundFeed}
         */
        backgroundFeedVisible: boolean;
    }
    /**
     * Represents a texture scanshot of the current view in the XR environment.
     *
     * A texture scanshot augments the digital model with the color of its real-world
     * counterpart using the texture information from the camera stream.
     *
     * Model-based tracking is required to map texture data to the model with the
     * correct position and orientation.
     *
     * @see {@link RealityAPI}
     * @see {@link XRConfiguration}
     * @see {@link RealityAPI.enterXRInitMode}
     */
    interface XRScanshot {
        /**
         * Stores any additional information about the scanshot other than the raw data itself.
         */
        metadata: {
            /**
             * The view matrix at which the scan was shot.
             */
            viewMatrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array;
            /**
             * The projection matrix of the camera with which the scan has been made.
             */
            projectionMatrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array;
        };
        /**
         * Represents the scanshot as point cloud.
         */
        pointCloudData?: {
            /**
             * The {@link CloudPoint}s within the point cloud representing the scan.
             */
            points: CloudPoint[];
        };
    }
    /**
     * The playback state of an XR sequence.
     *
     * @see {@link RealityAPI.getXRPlaybackState}
     * @see {@link XRPlaybackStateChangedEvent}
     */
    interface XRPlaybackState {
        /**
         * The fractional speed with which the sequence is played back currently
         *
         * Must be a value between 0 and 1
         *
         * @see {@link RealityAPI.setXRPlaybackSpeed}
         */
        currentPlaybackSpeed: number;
        /**
         * The current frame at which the playback is currently
         *
         * @see {@link RealityAPI.seekXRPlayback}
         */
        currentFrame: number;
        /**
         * Whether the sequence is playing or not
         *
         * @see {@link RealityAPI.startXRPlayback}
         * @see {@link RealityAPI.stopXRPlayback}
         */
        isPlaying: boolean;
        /**
         * Whether the playback does "boomerang" (play forward and backward) or not
         *
         * @see {@link RealityAPI.setXRPlaybackBoomerang}
         */
        boomerang: boolean;
        /**
         * The current frame up to which the playback has been buffered.
         * If the replayed sequence is small enough (i.e. contains max. 64 frames),
         * this value will be fixed to the last frame of the sequence.
         */
        bufferHeadFrame: number;
    }
    /**
     * The playback properties of an XR sequence.
     *
     * @see {@link RealityAPI.getXRPlaybackProperties}
     */
    interface XRPlaybackProperties {
        /**
         * The total amount of frames in the sequence
         */
        totalFrames: number;
        /**
         * The original FPS of the sequence
         */
        originalFPS: number;
    }
    /**
     * Information object that is received from the TrackerService.
     */
    interface XRModelTrackerInfo {
        /**
         * Confidence value of the tracker, normalized.
         */
        quality: number;
        /**
         * Inflight count of the hypothesis renderer.
         */
        inflightCount: number;
        /**
         * Tracking state of the model.
         */
        modelTrackingState: XRModelTrackingState;
    }
    /**
     * Defines the behavior of the initialization mode for modeltracking.
     *
     * @see {@link RealityAPI.enterXRInitMode}
     */
    interface XRInitOptions {
        /**
         * Specify if a reset hard should be executed. If set to true all runtime data
         * learned during tracking will be omitted.
         * @default false
         */
        resetHard?: boolean;
        /**
         * Specify if a view fitting should be performed. If set to true the model will
         * be fitted to the current view volume. Otherwise it will stay at its current position.
         * @default true
         */
        fitView?: boolean;
        /**
         * Specify if a reset should also reset Init data. InitTemplates can be imported via
         * the function {@link RealityAPI.importXRInitTemplate}.
         * @default false
         * @see {@link RealityAPI.importXRInitTemplate}
         */
        resetInitTemplate?: boolean;
    }
    /**
     * Configuration for an {@link XRImageSource}.
     * The configuration **must** specify the type of the source to determine how the images are provided.
     *
     * - For a device source, see {@link XRImageSourceConfigDevice}
     * - For a playback source, see {@link XRImageSourceConfigPlayback}
     */
    type XRImageSourceConfig = XRImageSourceConfigDevice | XRImageSourceConfigPlayback | {
        type: string;
    };
    /**
     * Configuration for an XRImageSource that provides {@link XRImage}s from a device.
     */
    interface XRImageSourceConfigDevice {
        type: XRImageSource.DEVICE;
    }
    /**
     * Configuration for an XRImageSource that provides {@link XRImage}s from an image source that can be played back.
     */
    interface XRImageSourceConfigPlayback {
        /**
         * The type of the {@link XRImageSource}.
         */
        type: XRImageSource.PLAYBACK;
        /**
         * The URL of the image source.
         * @default <HUB_URL>/repo/webvis/data/manifest.json
         * @see {@link SettingStrings.HUB_URL}
         */
        url?: string;
        /**
         * The index of the start frame of the playback.
         * @default 0
         */
        startFrame?: number;
        /**
         * The index of the end frame of the playback.
         * @default <totalFrames> - 1
         * @see {@link XRPlaybackProperties}
         */
        endFrame?: number;
        /**
         * The speed of the playback relative of to the original FPS. Must be a value between 0 and 1.
         * @default 1.0
         */
        speed?: number;
        /**
         * Whether the playback should start pushing the XRImages automatically or not.
         * @default false
         */
        autoPlay?: boolean;
    }
    /**
     * Represents an XR image.
     */
    interface XRImage {
        /**
         * Indicates whether the image data is valid or not.
         */
        isValid: boolean;
        /**
         * The image data as a Uint8Array.
         */
        imageData: Uint8Array | undefined;
    }
    /**
     * Configuration for the XR system. The configuration is used when connecting to the XR system.
     *
     * @see {@link RealityAPI.connectXR}
     */
    interface XRConfiguration {
        /**
         * Specifies the configuration of the source of the XR images.
         */
        imageSourceConfig: XRImageSourceConfig;
        /**
         * If true, the XR system will be able to use functionalities that require model-based tracking.
         * @default true
         */
        modelTrackingEnabled?: boolean;
        /**
         * If true, the XR system will be able to use functionalities that require device screenshots.
         * @default false
         */
        deviceScreenshotsEnabled?: boolean;
        /**
         * If true, the XR system will be able to use functionalities that require ray casting.
         * @default false
         */
        rayCastingEnabled?: boolean;
        /**
         * If true, the XR system will show the XR background feed automatically when it is available.
         * @default true
         */
        autoShowBackgroundFeed?: boolean;
    }
    /**
     * Options for anchoring an object in AR.
     *
     * This type specifies the configuration options available when creating an anchor
     * for an object in an Augmented Reality (AR) environment.
     *
     * @see {@link RealityAPI.anchorXR}
     */
    interface XRAnchorOptions {
        /**
         * Determines whether the anchor should be attached to a detected surface.
         */
        anchorToSurface: boolean;
        /**
         * The XR anchor offset transform is used to set a scene's box volume position in conjunction with {@link ContextAPI.anchorXR} so that
         * when anchored to a surface, the scene does not appear to be embedded in the surface.
         * The offset transform also allows for rotations to be applied, but not scaling. If scaling is
         * included in the offset transform, unexpected results may occur.
         * Default value is the identity matrix.
         */
        xrAnchorOffsetTransform?: [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
    }
    /**
     * ## AR and webvis: The RealityAPI
     *
     * ### Overview
     *
     * The **RealityAPI** provides AR functionalities inside the webvis context. This includes:
     * - Connecting to the device's camera stream
     * - Model-based Tracking
     * - SLAM-based anchoring of a model to the real world
     * - Playback of prerecorded sequences
     *
     * ### Quick Start
     *
     * The easiest way to get started with the RealityAPI is to connect to the XR system with the default configuration via the {@link connectXR} method.
     * It will try to connect to the device's camera stream and enable model-based tracking.
     * Once connected, the camera stream will be shown in the background of the viewer automatically.
     *
     * ```typescript
     * await webvis.getContext().connectXR();
     * ```
     *
     * ### Prerequisites: XR Capabilities, XR Configuration and connecting to the local XR system
     *
     * Since having access to an image source (e.g. the AR camera stream) is a prerequisite for using the
     * AR functionalities, the RealityAPI methods can only be used once the RealityAPI has been connected to an image source.
     * This can be done by calling the {@link connectXR} method. The method will return a Promise which resolves when the connection was successful.
     * It requires a configuration object as an argument, which determines what parts of the API are desired to be used.
     * See {@link XRConfiguration} for more information. Whether the desired capabilities are available can be checked by
     * calling the {@link getXRCapabilities} method.
     *
     * **Example: Using the device's camera stream**
     * ```typescript
     * const ctx = webvis.getContext();
     *
     * // Start by requesting the capabilities of the XR system
     * const capabilities = ctx.getXRCapabilities();
     *
     * // Check if the XR system supports providing XR images from the device
     * if (!capabilities.includes(webvis.XRCapability.SUPPORTS_DEVICE_IMAGE_SOURCE)) {
     *    // The XR system does not support providing XR images from the device.
     * }
     *
     * // Connect to the XR system with the desired configuration
     * const xrConfiguration = {
     *    imageSourceConfig: {
     *       type: webvis.XRImageSource.DEVICE // Use the device's camera stream
     *    },
     *    modelTrackingEnabled: capabilities.includes(webvis.XRCapability.MODELTRACKER), // If unset, defaults to true
     *    deviceScreenshotsEnabled: capabilities.includes(webvis.XRCapability.DEVICE_SCREENSHOTS), // If unset, defaults to false
     *    autoShowBackgroundFeed: true // Show the background feed automatically when available, default is true
     * };
     * await ctx.connectXR(xrConfiguration);
     * ```
     *
     * Now, the RealityAPI is connected to the XR system and can be used to access the AR functionalities.
     * Please note, that you can only use some of the functionalities if the XR system has the required capabilities.
     *
     * **Example: RealityAPI function call fails due to unsupported XR Capability**
     * ```typescript
     * // Will fail if the XR system does not support model tracking, i.e. XRCapability.SUPPORTS_MODEL_TRACKING is not present in the capabilities
     * ctx.exportXRInitTemplate();
     * ```
     *
     * For a complete list of available capabilities, see {@link XRCapability}.
     * For a detailed description of the AR functionalities, see the corresponding methods in the RealityAPI.
     *
     * ### XR State
     *
     * The XR state can be queried by calling the {@link getXRState} method. The XR state is represented by the {@link XRState} type.
     *
     * ### Disconnecting from the XR system
     *
     * After the AR functionalities are no longer needed, the RealityAPI can be disconnected by calling the {@link disconnectXR} method.
     * Also, if the user wants to use a different configuration, the RealityAPI can be reconnected with the new configuration.
     *
     * **Example: Disconnecting from and reconnecting to the XR system**
     * ```typescript
     * // ...
     * // Disconnect from the XR system
     * await ctx.disconnectXR();
     *
     * // Reconnect to the XR system with a different configuration
     * const newXRConfiguration = { ... };
     * await ctx.connectXR(newXRConfiguration);
     * // ...
     * await ctx.disconnectXR();
     * ```
     *
     * ### XR Playback API
     *
     * The XR Playback API is a subset of the RealityAPI that allows for playback of frame sequences.
     *
     * With the XR Playback API, recorded frame sequences can be played back anywhere, removing the need to visit the physical location for each test iteration.
     * The recordings can be used to test new features easily or increase development iteration speed without the need of having a physical device available.
     *
     * To use the XR Playback API, the XR system must have the XR Playback capability {@link XRCapability.SUPPORTS_PLAYBACK}. Furthermore, inside the xrConfiguration
     * object, the {@link XRConfiguration.imageSourceConfig} must be of type {@link XRImageSource.PLAYBACK}. This type allows for a more detailed configuration
     * tailored to the playback source. The configuration object must specify the URL of the frame sequence to be played back.
     * The URL must point to the `manifest.json` file of the frame sequence which contains the necessary information about the frame sequence.
     * See {@link XRImageSourceConfigPlayback} for more information.
     *
     * **Example: XR Playback API**
     * ```typescript
     * const xrPlaybackConfiguration = {
     *   imageSourceConfig: {
     *    type: webvis.XRImageSource.PLAYBACK,
     *    url: "https://example.com/manifest.json",
     *    autoPlay: true // Start playback automatically, default is false
     *   }
     * };
     * await ctx.connectXR(xrPlaybackConfiguration);
     * ```
     *
     * The XR Playback API provides methods to control the playback, such as starting, pausing, stopping, seeking, setting the playback speed, etc.
     * You can also query the playback properties and state to get information about the playback sequence.
     * XR Playback API methods can be identified by the naming infix `XRPlayback`.
     */
    interface RealityAPI {
        /**
         * Connect to the XR system with the given {@link XRConfiguration}. The configuration determines what parts of the API are desired to be used.
         *
         * By default, XR will be connected with the following configuration:
         * ```typescript
         * const defaultXRConfiguration = {
         *      imageSourceConfig:
         *      {
         *          type: XRImageSource.DEVICE
         *      }
         * }
         * ```
         * If unspecified, `modelTrackingEnabled` and `autoShowBackgroundFeed` will be inferred as `true` and `deviceScreenshotsEnabled` as `false` automatically.
         *
         * Note: If a change of configuration is required after being initialized, the user has to {@link disconnectXR} and connect with the new configuration.
         *
         * @param {XRConfiguration} xrConfiguration The configuration for the XR system
         * @returns {Promise<void>} Returns a Promise which resolved when the operation was successful or rejects in an error case
         */
        connectXR(xrConfiguration?: XRConfiguration): Promise<void>;
        /**
         * Disconnect from the XR system.
         *
         * This method should be called when the AR functionalities are no longer needed.
         *
         * @returns {Promise<void>} Returns a Promise which resolved when the operation was successful or rejects in an error case
         */
        disconnectXR(): Promise<void>;
        /**
         * Get the array of {@link XRCapability}. The array of capabilities determines what parts of the API can be used. The capabilities
         * are mostly defined by the used device.
         *
         * @returns {Array<XRCapability>} Returns an Array<{@link XRCapability}> containing the XR system's capabilities.
         */
        getXRCapabilities(): Array<XRCapability>;
        /**
         * Get the runtime state of the XR system.
         *
         * @returns {XRState | undefined} Returns either the current {@link XRState} or undefined if the XR system is not connected.
         */
        getXRState(): XRState | undefined;
        /**
         * Enter the XR initialization mode. The initialization mode is used as an entry point for model-based tracking.
         * It unanchors any previously anchored model and starts the model-based tracking process.
         * In this mode, the user can align the model with the real object (snapping). When the model is
         * snapped, the {@link XRState.anchored} value will be set to `true` which will trigger a {@link XRStateChangedEvent}.
         * By that, the init mode gets exited and the model is anchored to the real object. The model now gets tracked
         * and moves with the device.
         *
         * Please note, that this method should only be called if the XR system has the {@link XRCapability.SUPPORTS_MODEL_TRACKING} capability.
         *
         * @param {XRInitOptions} xrInitOptions The options for the XR initialization mode
         * @returns {Promise<void>} Returns a Promise which resolved when the operation was successful or rejects in an error case
         */
        enterXRInitMode(xrInitOptions?: XRInitOptions): Promise<void>;
        /**
         * Returns an array of member IDs of those session members which are currently using an XR device and are
         * currently publishing an XRImage stream.
         *
         * The array will **not** contain the session member ID of the own session member.
         * Will return an empty array, if
         * - the session is not connected.
         * - the session is connected, but no session member currently publishes an XRImage stream.
         *
         * @returns {Array<number>} The array of member IDs of those session members that are currently publishing
         * an XRImage stream.
         */
        getXRMembers(): Array<number>;
        /**
         * Starts spectating the XRImage stream published by the session member with the specified ID within a shared session.
         * This will also hide any other background feed that is currently shown.
         *
         * @param {number} sessionMemberId The session member id of the member to spectate
         * @returns {Promise<void>} Returns a promise which resolves when the operation was successful or rejects in an error case
         */
        startXRSpectate(sessionMemberId: number): Promise<void>;
        /**
         * Stops spectating the currently spectated XRImage stream of a session member.
         */
        stopXRSpectate(): void;
        /**
         * Starts putting the image feed into the viewer's background. Also see {@link hideXRBackgroundFeed}.
         *
         * This will trigger a {@link XRStateChangedEvent} with {@link XRState.backgroundFeedVisible} set to `true`.
         *
         * @returns {Promise<void>} Returns a Promise which resolved when the operation was successful or rejects in an error case
         */
        showXRBackgroundFeed(): Promise<void>;
        /**
         * Stops putting the image feed into the viewer's background. Also see {@link showXRBackgroundFeed}.
         *
         * This will trigger a {@link XRStateChangedEvent} with {@link XRState.backgroundFeedVisible} set to `false`.
         *
         * @returns {Promise<void>} Returns a Promise which resolved when the operation was successful or rejects in an error case
         */
        hideXRBackgroundFeed(): Promise<void>;
        /**
         * Anchors the model at the current 3D pose. Visually, this will have the effect that the model will stay at the
         * current position and orientation in the real world.
         *
         * Please note, that in a model-based tracking scenario, the model will get anchored automatically
         * when the alignment of the model with the real world object is high enough that tracking can be performed
         * (model is snapped).
         *
         * This will trigger a {@link XRStateChangedEvent} with {@link XRState.anchored} set to `true`.
         *
         * The optional parameter {@link XRAnchorOptions}, in conjunction with {@link XRAnchorOptions.anchorToSurface},
         * can be used to anchor the model on a detected surface. By default, this is set to false, and the model
         * is anchored at the current 3D pose of the device, as described above.
         *
         * However, if set to true, and if the device running webvis supports XR and ray casting, a mathematical ray will be cast from the device into the real world.
         * If this ray intersects with a detected surface, the scene will be transformed and anchored to this surface at the intersection point, with the Y axis alined orthogonally to the surface.
         * On occasion, the model may need to be offset, so it does not appear to be imbedded in the surface it is anchored to.
         * In order to achieve this, an optional parameter can be set in the {@link XRAnchorOptions}, by updating the {@link XRAnchorOptions.xrAnchorOffsetTransform} matrix.
         *
         * @param {XRAnchorOptions} xrAnchorOptions An optional object that contains the anchorToSurface property.
         */
        anchorXR(xrAnchorOptions?: XRAnchorOptions): void;
        /**
         * Unanchors the model. This will have the effect that the model will no longer be anchored to the real world.
         *
         * This will trigger a {@link XRStateChangedEvent} with {@link XRState.anchored} set to `false`.
         */
        unanchorXR(): void;
        /**
         * Imports an initialization template for model-based tracking.
         *
         * In a model-based tracking scenario, initialization templates are captured during the tracking process.
         * This initialization data is linked to previously visited viewpoints along the traveled camera path.
         * Once the tracking is lost the templates are used to quickly reinitialize from similar viewpoints without the
         * user having to align the line model with the real object.
         *
         * Once the initialization template data is imported, it will persist until {@link enterXRInitMode} with
         * {@link XRInitOptions.resetInitTemplate} set to `true` is called.
         *
         * This method is only available if the XR system has the {@link XRCapability.SUPPORTS_MODEL_TRACKING} capability.
         *
         * The input data can be aquired via the {@link exportXRInitTemplate} method.
         *
         * @param {string} template The base64 encoded initialization template data
         * @returns {Promise<void>} Returns a Promise which resolved when the operation was successful or rejects in an error case
         */
        importXRInitTemplate(template: string): Promise<void>;
        /**
         * Exports an initialization template for model-based tracking.
         *
         * In a model-based tracking scenario, after a successful tracking session, the learned initialization data
         * can be exported with this function and stored as a template for later.
         *
         * This method is only available if the XR system has the {@link XRCapability.SUPPORTS_MODEL_TRACKING} capability.
         *
         * The acquired data can be imported via {@link importXRInitTemplate} function.
         *
         * @returns {Promise<string>} Returns a Promise which contains the base64 encoded initialization template data
         * when the operation was successful or rejects in an error case.
         */
        exportXRInitTemplate(): Promise<string>;
        /**
         * Request a screenshot of the webview's content inside the native XR device application.
         *
         * @returns {Promise<string>} Returns a Promise which contains the base64 encoded image data when the operation
         * was successful or rejects in an error case.
         */
        requestXRDeviceScreenshot(): Promise<string>;
        /**
         * Requests a scanshot of the current view in the XR environment.
         *
         * @returns The scanshot data.
         */
        requestXRScanshot(): Promise<XRScanshot>;
        /**
         * Set the URL pointing to the `manifest.json` file of the frame sequence to be played back.
         *
         * Triggers a {@link XRPlaybackStateChangedEvent}.
         *
         * @param {string} url The URL of the frame sequence
         * @returns {Promise<number>} Returns a Promise which resolves with the amount of frames in the playback if successful
         * and rejects otherwise
         */
        setXRPlaybackSource(url: string): Promise<number>;
        /**
         * Start the XR playback.
         *
         * Make sure to set the playback source before starting the playback.
         * Triggers a {@link XRPlaybackStateChangedEvent}.
         */
        startXRPlayback(): void;
        /**
         * Stop the XR playback.
         *
         * Triggers a {@link XRPlaybackStateChangedEvent}.
         */
        stopXRPlayback(): void;
        /**
         * Sets the frame range to play back. The total amount of frames in a sequence can be found in the {@link XRPlaybackProperties}.
         *
         * Triggers a {@link XRPlaybackStateChangedEvent}.
         *
         * @param {number} startFrame The index of the first frame to play back
         * @param {number} endFrame The index of the last frame to play back
         * @returns {Promise<number>} Returns a Promise which resolves with the new amount of frames in the playback if successful
         * and rejects otherwise
         */
        setXRPlaybackFrameRange(startFrame: number, endFrame: number): Promise<number>;
        /**
         * Jump to the frame with the specified index in the playback sequence. To get the total amount of frames in the sequence,
         * see {@link XRPlaybackProperties} and {@link getXRPlaybackProperties} method.
         *
         * Triggers a {@link XRPlaybackStateChangedEvent}.
         *
         * @param {number} frameIndex The index of the frame to jump to
         * @returns {Promise<void>} Returns a Promise which reports wether the operation was successful or not
         */
        seekXRPlayback(frameIndex: number): Promise<void>;
        /**
         * Get static information about the playback sequence.
         *
         * @returns {XRPlaybackProperties} The current {@link XRPlaybackProperties}
         */
        getXRPlaybackProperties(): XRPlaybackProperties;
        /**
         * Get real-time information about the current state of the playback.
         *
         * @returns {XRPlaybackState} The current {@link XRPlaybackState}
         */
        getXRPlaybackState(): XRPlaybackState;
        /**
         * Set the desired playback speed. The specified speed must be a value between 0 and 1.
         * It gives the playback speed as a fraction of the original FPS which is stored in the {@link XRPlaybackProperties}.
         *
         * Triggers a {@link XRPlaybackStateChangedEvent}.
         *
         * @param {number} speed The desired playback speed. Must be a value between 0 and 1.
         */
        setXRPlaybackSpeed(speed: number): void;
        /**
         * Specify whether the playback should "boomerang" (play forward and backward in a loop).
         * This is useful for creating a seamless transition at the end of a sequence in terms of pose updates.
         *
         * @param {boolean} boomerang Whether the playback should boomerang or not
         * @returns {Promise<void>} Returns a Promise which reports whether the operation was successful or not
         */
        setXRPlaybackBoomerang(boomerang: boolean): Promise<void>;
    }
    /**
     * Event that is fired when the {@link XRState} changes.
     *
     * @event
     * @hideconstructor
     */
    class XRStateChangedEvent extends WebVisEvent {
        xrState: Partial<XRState>;
        /**
         * @param xrState The new state of the XR system. Will only include the changed properties.
         */
        constructor(xrState: Partial<XRState>);
    }
    /**
     * Event that is fired when an XR spectation is stopped.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link RealityAPI.stopXRSpectate}
     */
    class XRSpectateStoppedEvent extends WebVisEvent {
        constructor();
    }
    /**
     * Event that is fired when an XR spectation is started.
     *
     * @event XR_SPECTATE_STARTED
     * @hideconstructor
     *
     * @see {@link RealityAPI.startXRSpectate}
     */
    class XRSpectateStartedEvent extends WebVisEvent {
        xrMemberId: number;
        /**
         * @param xrMemberId The ID of the session member that is being spectated.
         */
        constructor(xrMemberId: number);
    }
    /**
     * Event that is fired when the {@link XRPlaybackState} changes.
     *
     * @event
     * @hideconstructor
     */
    class XRPlaybackStateChangedEvent extends WebVisEvent {
        xrPlaybackState: Partial<XRPlaybackState>;
        /**
         * @param xrPlaybackState The new state of the XR playback. Will only include the changed properties.
         */
        constructor(xrPlaybackState: Partial<XRPlaybackState>);
    }
    /**
     * Event that is fired when new information about model tracking is received.
     *
     * @event
     * @hideconstructor
     */
    class XRModelTrackerInfoReceivedEvent extends WebVisEvent {
        info: XRModelTrackerInfo;
        /**
         * @param info The newly received data stored in a {@link XRModelTrackerInfo} object.
         */
        constructor(info: XRModelTrackerInfo);
    }
    /**
     * Event that is fired when receiving an edge image from the model tracker.
     * The edge image contains the edges of the tracking target. It is used during
     * ModelTracking for indicating the tracking status of the target geometry.
     *
     * Edge images are only received when the {@link SettingStrings.XR_ENABLE_DEBUG_IMAGES} setting
     * is set to true.
     *
     * @event
     * @hideconstructor
     */
    class XRModelTrackerEdgeImgReceivedEvent extends WebVisEvent {
        img: XRImage;
        /**
         * @param img The edge image stored in a {@link XRImage} object.
         */
        constructor(img: XRImage);
    }
    /**
     * Event that is fired when a session member which was publishing XR images stops publishing.
     * The event contains the id of the session member that stopped publishing XR images.
     *
     * @event
     * @hideconstructor
     */
    class XRMemberRemovedEvent extends WebVisEvent {
        xrMemberId: number;
        /**
         * @param xrMemberId The id of the session member that stopped publishing XR images.
         */
        constructor(xrMemberId: number);
    }
    /**
     * Event that is fired when a new session member starts publishing XR images.
     * The event contains the id of the session member that started publishing XR images.
     *
     * @event
     * @hideconstructor
     */
    class XRMemberAddedEvent extends WebVisEvent {
        xrMemberId: number;
        /**
         * @param xrMemberId The id of the session member that started publishing XR images.
         */
        constructor(xrMemberId: number);
    }
    /**
     * Describes the quality of the current world mapping state.
     */
    enum XRWorldMappingStatus {
        /**
         * The world mapping is not available (yet).
         */
        NOT_AVAILABLE = 0,
        /**
         * The world tracking is only limited and not sufficingly mapped yet.
         */
        LIMITED = 1,
        /**
         * The world tracking has already mapped some areas but is still extending the mapping.
         */
        EXTENDING = 2,
        /**
         * The world tracking is mapped.
         */
        MAPPED = 3,
        /**
         * The current state of the world mapping is unknown.
         */
        UNKNOWN = 4,
    }
    /**
     * The state of the model tracking.
     */
    enum XRModelTrackingState {
        /**
         * The model is snapped and was found in the frame
         */
        TRACKING = 0,
        /**
         * The model is snapped but was not found in the frame
         */
        CRITICAL = 1,
        /**
         * The model is not snapped and not found
         */
        LOST = 2,
    }
    /**
     * The phase of the model tracking.
     */
    enum XRModelTrackingPhase {
        /**
         * The model tracking phase is not set.
         */
        NONE = 0,
        /**
         * The model tracking is in the initialization phase.
         */
        INIT = 1,
        /**
         * The model tracking has snapped.
         */
        SNAPPED = 2,
    }
    /**
     * Enum representing the source of the XR images.
     */
    enum XRImageSource {
        /**
         * XR image source is a recorderd sequence of XR images.
         * This means that the XR system is capable of playing back the sequence of XR images.
         */
        PLAYBACK = "playback",
        /**
         * The XR image source is coming from the local device.
         * This means that the XR system is capable of streaming XR images from the local device, e.g. an AR camera.
         */
        DEVICE = "device",
    }
    /**
     * The XRImageResolutionProfile specifies which resolution a requested images should have.
     * The available options are low resolution (LOW_RES) and native resolution (NATIVE).
     */
    enum XRImageResolutionProfile {
        /**
         * This will request images with a low resolution.
         */
        LOW_RES = "lowRes",
        /**
         * This will request images with the native resolution.
         */
        NATIVE = "native",
    }
    /**
     * The XRFusionMode specifies which inputs will be used for the final visualization.
     * The available inputs are the SLAM-pose and the combination of SLAM- and Modeltracker-pose or neither.
     */
    enum XRFusionMode {
        /**
         * This will prevent any updates to the final camera matrix.
         */
        NONE = 0,
        /**
         * This will include the positional updates of the SLAM-input in the calculation of the final camera matrix.
         */
        SLAM = 1,
        /**
         * This will combine the positional updates of the SLAM- and ModelTracker-inputs to produce the final camera matrix.
         */
        SLAM_MODELTRACKER = 2,
    }
    /**
     * The capabilities of the XR system. The capabilities are used to determine which functionalities are supported by the XR system.
     */
    enum XRCapability {
        /**
         * The XR system supports modeltracking.
         *
         * @see {@link XRConfiguration.modelTrackingEnabled}
         * @see {@link RealityAPI.enterXRInitMode}
         */
        SUPPORTS_MODEL_TRACKING = "supportsModelTracking",
        /**
         * The XR system supports playback of recorded XR images.
         *
         * @see {@link XRConfiguration.imageSourceConfig}
         * @see {@link XRImageSourceConfigPlayback}
         * @see {@link RealityAPI.setXRPlaybackSource}
         * @see {@link RealityAPI.startXRPlayback}
         */
        SUPPORTS_PLAYBACK = "supportsPlayback",
        /**
         * The XR system supports streaming XR images from the local device.
         *
         * @see {@link XRConfiguration.imageSourceConfig}
         * @see {@link XRImageSourceConfigDevice}
         */
        SUPPORTS_DEVICE_IMAGE_SOURCE = "supportsDeviceImageSource",
        /**
         * The XR system is capable of providing device screenshots.
         *
         * @see {@link XRConfiguration.deviceScreenshotsEnabled}
         * @see {@link RealityAPI.requestXRDeviceScreenshot}
         */
        SUPPORTS_DEVICE_SCREENSHOTS = "supportsDeviceScreenshots",
        /**
         * The XR system is capable of generating ray casts.
         *
         * @see {@link XRConfiguration.rayCastingEnabled}
         * @see {@link RealityAPI.anchorXR}
         */
        SUPPORTS_RAY_CASTING = "supportsRayCasting",
    }
    type QuerySelect =
        | "nodeId"
        | "ancestor.nodeId"
        | "ancestor.metadata"
        | "ancestor.metadata.*"
        | "structId"
        | "auxId"
        | "shapeId"
        | "faceInstanceId"
        | "edgeInstanceId"
        | "pointInstanceId"
        | "property"
        | "metadata"
        | "nodeType"
        | "subtreeRootId"
        | "faceHandle"
        | "extFaceLinks"
        | string;
    /**
     * The result of a Query.
     */
    interface QueryResult {
        data: Array<any>;
        errors: Array<any>;
    }
    /**
     * The available conditions of a query.
     */
    interface QueryCondition {
        nodeId?: number;
        originalFaceID?: number;
        ancestors?: Array<QueryCondition>;
        extFaceLink?: string;
        nodeType?: "structure" | "aux";
        metadata?: string;
        equals?: Query | string | number;
        equalsAny?: Array<string>;
        contains?: string;
        lessThan?: number;
        lessOrEqualThan?: number;
        greaterThan?: number;
        greaterOrEqualThan?: number;
        caseSensitive?: boolean;
        pointsTo?: number;
        linkDepth?: number;
        faceHandle?: TopologyHandle;
        not?: Array<QueryCondition>;
        and?: Array<QueryCondition>;
        or?: Array<QueryCondition>;
    }
    interface Query {
        select: Array<QuerySelect>;
        conditions: Array<QueryCondition>;
        linkDepth?: number;
    }
    /**
     * With the Query API you can access additional information about nodes.
     * <ol>
     * <li>
     * Query Object Structure<br><br>
     *
     * The query object is a JSON object which contains a select and a conditions block. The select block is an
     * array which defines the content and layout of the result. The conditions describe a set of tests on nodes
     * and their properties. The result will contain information for all elements on which all conditions passed
     * (implicit AND relation between condition array elements)
     * <br><br>
     * {<br>
     *  select:     [ <selectkey>,         <selectkey.value>      ]<br>
     *  conditions: [{<selectkey>:<value>, <conditionkey>:<value>}]<br>
     * }<br>
     * </li><br>
     * <li>
     * Select Keys<br><br>
     *
     * <table style="width:100%">
     * <tr>
     *     <th>Key</th>
     *     <th>Value</th>
     *     <th>Example</th>
     *     <th>Description</th>
     * </tr>
     * <tr>
     *     <td>nodeId</td>
     *     <td>number</td>
     *     <td>42</td>
     *     <td>The id of an aux or structure node.</td>
     * </tr>
     * <tr>
     *     <td>property</td>
     *     <td>any</td>
     *     <td>"label"</td>
     *     <td>The name of the property to check. If the property is a structure the sub-elements can be accessed with ".". If no condition is set, the node is selected if the property has a non-empty value.</td>
     * </tr>
     * <tr>
     *     <td>metadata</td>
     *     <td>any</td>
     *     <td>"auxAttributes.productionClass", "auxProperties.lowerTolerance"</td>
     *     <td>The name of the property to check. If the property is a structure the sub-elements can be accessed with ".". If no condition is set, the node is selected if the property has a non-empty value.</td>
     * </tr>
     * <tr>
     *     <td>nodeType</td>
     *     <td>string</td>
     *     <td>"structure", "aux"</td>
     *     <td>Check if the node belongs to a specific class.</td>
     * </tr>
     * <tr>
     * <td>topoHandle</td>
     * <td>json object</td>
     * <td>
     * {
     *   "entityID": 1583,
     *   "entityType": 1,
     *   "shapeInstanceID": 1
     * }
     * </td>
     * <td>An object that identifies one topological element. Topological elements can be faces edges or points.
     * The elementtype is identified by entityType which can be one of the following values:
     * </br> 1->face </br> 2->edge </br> 3->point </br> Note: This key is only used for the select part of the query as it is resolved to its specialization when returned. </br>  </td>
     * </tr>
     * <tr>
     * <td>faceHandle</td>
     * <td>json object</td>
     * <td>
     * {
     *   "entityID": 1583,
     *   "entityType": 1,
     *   "shapeInstanceID": 1
     * }
     * </td>
     * <td>An object that identifies a topological element of type face.  </br>  </td>
     * </tr>
     * <tr>
     * <td> edgeHandle </td>
     * <td>json object</td>
     * <td>
     * {
     *   "entityID": 1583,
     *   "entityType": 2,
     *   "shapeInstanceID": 1
     * }
     * </td>
     * <td>An object that identifies a topological element of type edge.  </br>  </td>
     * </tr>
     * <tr>
     * <td> pointHandle </td>
     * <td>json object</td>
     * <td>
     * {
     *   "entityID": 1583,
     *   "entityType": 3,
     *   "shapeInstanceID": 1
     * }
     * </td>
     * <td>An object that identifies a topological element of type point. </br>  </td>
     * </tr>
     * </table>
     * </li><br>
     * <li>
     * Conditions<br><br>
     *
     * <table style="width:100%">
     * <tr>
     *     <th>Key</th>
     *     <th>Value</th>
     *     <th>Example</th>
     *     <th>Description</th>
     * </tr>
     * <tr>
     *     <td>equals</td>
     *     <td>any</td>
     *     <td>"myLabel", "Label_*"</td>
     *     <td>Check whether the selected property equals the set value. Can contain * for arbitrary characters and whitespaces for basic wildcard matching.</td>
     * </tr>
     * <tr>
     *     <td>lessThan</td>
     *     <td>number</td>
     *     <td>5</td>
     *     <td>Test if the property value is larger than the specified value.</td>
     * </tr>
     * <tr>
     *     <td>lessOrEqualThan</td>
     *     <td>number</td>
     *     <td>4</td>
     *     <td>Test if the property value is larger or equal than the specified value.</td>
     * </tr>
     * <tr>
     *     <td>greaterThan</td>
     *     <td>number</td>
     *     <td>10</td>
     *     <td>Test if the property value is smaller than the specified value.</td>
     * </tr>
     * <tr>
     *     <td>greaterOrEqualThan</td>
     *     <td>number</td>
     *     <td>11</td>
     *     <td>Test if the property value is smaller than the specified value.</td>
     * </tr>
     * <tr>
     *     <td>caseSensitive</td>
     *     <td>boolean</td>
     *     <td>true</td>
     *     <td>Default is false.</td>
     * </tr>
     * <tr>
     *     <td>pointsTo</td>
     *     <td>number</td>
     *     <td>123 </td>
     *     <td>Is used to query aux to aux relations (see example).</td>
     * </tr>
     * </table>
     * </li><br>
     * <li>
     * Logical Keys<br><br>
     *
     * Logical keys can be put inside conditions instead of a select or condition key in order to express the corresponding logical operation.<br><br>
     *
     * <table style="width:100%">
     * <tr>
     *     <th>Key</th>
     *     <th>Value</th>
     *     <th>Example</th>
     *     <th>Description</th>
     * </tr>
     * <tr>
     *     <td>or</td>
     *     <td>array</td>
     *     <td>{"or": [{"nodeId": 15}, {"nodeId": 16}]}</td>
     *     <td>an OR relation</td>
     * </tr>
     * <tr>
     *     <td>and</td>
     *     <td>array</td>
     *     <td>{"and": [{"metadata": "auxProperties.sizeA", "equals": 15}, {"metadata": "auxProperties.sizeB", "equals": 20}]}</td>
     *     <td>an AND relation</td>
     * </tr>
     * <tr>
     *     <td>not</td>
     *     <td>condition</td>
     *     <td>{"not": {"metadata": "sizeA", "equals": 15}}</td>
     *     <td>invert a condition</td>
     * </tr>
     * </table>
     * </li><br>
     * <li>
     * Results<br><br>
     *
     * An array of arrays. For each successful condition match an array with the selected element values is returned. The order of values matches the select Specification.<br><br>
     *
     * <table style="width:100%">
     * <tr>
     *     <th>Select</th>
     *     <th>Result</th>
     * </tr>
     * <tr>
     *     <td>select: ["nodeId", "metadata.auxAttributes"]</td>
     *     <td>[[15, {...}], [42, {...}], ...]</td>
     * </tr>
     * </table>
     * </li><br>
     * <li>
     * Examples<br><br>
     *
     * <table style="width:100%">
     * <tr>
     * <th>Description</th>
     * <th>Query</th>
     * <th>Response</th>
     * </tr>
     * <tr>
     * <td>
     * Aux nodes for a faceHandle excluding nodes of type Revision index
     * </td>
     * <td>
     * {
     * "select": [
     *   "nodeId"
     * ],
     * "conditions": [
     *   {
     *     "nodeType": "aux"
     *   },
     *   {
     *     "faceHandle": {
     *       "entityType": 1,
     *       "shapeInstanceID": 2,
     *       "entityID": 814
     *     }
     *   },
     *   {
     *     "not": [
     *       {
     *         "metadata": "auxProperties.pmiType",
     *         "equals": "Revision Index"
     *       }
     *     ]
     *   }
     * ]
     * }
     * </td>
     * <td>
     * [
     *  [
     *    {
     *      "entityID": 1583,
     *      "entityType": 1,
     *      "shapeInstanceID": 1
     *    }
     *  ]
     * ]
     * </td>
     * </tr>
     * <tr>
     * <td>
     * Select topological elements connected to one auxNode
     * </td>
     * <td>
     * {
     *  "select": [
     *    "topoHandle"
     *  ],
     *  "conditions": [
     *    {
     *      "nodeType": "aux"
     *    },
     *    {
     *      "nodeId": 2502
     *    }
     *  ]
     * }
     * </td>
     * <td>
     * [
     *  [
     *    {
     *      "entityID": 1583,
     *      "entityType": 2,
     *      "shapeInstanceID": 1
     *    }
     *  ],
     *  [
     *    {
     *      "entityID": 1584,
     *      "entityType": 1,
     *      "shapeInstanceID": 1
     *    }
     *  ]
     * ]
     * </td>
     * </tr>
     * <tr>
     * <td>
     * Search metadata for minimum diameter
     * </td>
     * <td>
     * {
     *  "select":["nodeId", "metadata.auxProperties.label"],
     *  "conditions":[
     *   {"nodeType": "aux"},
     *   {"metadata":
     *     "auxProperties.pmiType",
     *     "equals": "Dimension"},
     *   {"metadata":
     *     "auxProperties.type",
     *     "equals": "Diameter"},
     *   {"metadata":
     *    "auxProperties.value",
     *    "greaterThan": 5.5}
     *  ]
     * }
     * </td>
     * <td>
     * [[15, "labelA"], [42, "labelB"], ...]
     * </td>
     * </tr>
     * <tr>
     * <td>
     * Textual search for modelView names
     * </td>
     * <td>
     * {
     *  "select": [
     *    "nodeId",
     *    "metadata.auxProperties.label"
     *  ],
     *  "conditions": [
     *    {
     *      "nodeType": "aux"
     *    },
     *    {
     *      "metadata": "auxProperties.pmiType",
     *      "equals": "ModelView"
     *    },
     *    {
     *      "metadata": "auxProperties.label",
     *      "equals": "2_51_*"
     *    }
     *  ]
     * }
     * </td>
     * <td>
     * [
     *  [
     *    8672,
     *    "2_51_Test_2_3"
     *  ]
     * ]
     * </td>
     * </tr>
     * <tr>
     * <td>
     * Search for PMI Type
     * </td>
     * <td>
     *    {
     * "select": [
     *   "nodeId",
     *   "metadata.auxProperties.*"
     * ],
     * "conditions": [
     *   {
     *     "nodeType": "aux"
     *   },
     *   {
     *     "metadata": "auxProperties.pmiType",
     *     "equals": "Dimension"
     *   },
     *   {
     *     "metadata": "auxProperties.fit",
     *     "equals": "h8",
     *     "caseSensitive": true
     *   }
     * ]
     * }
     * </td>
     * <td>
     * [
     * [
     *   5411,
     *   {
     *     "metadata.auxProperties.bottomRight": "0.0640887 0 -0.0686957",
     *     "metadata.auxProperties.type": "Linear",
     *    ...
     *   }
     * ]
     * ]
     * </td>
     * </tr>
     * <tr>
     * <td>
     * Search for attributes
     * </td>
     * <td>
     * {
     *  "select":["nodeId"],
     *  "conditions":[
     *   {"nodeType": "aux"},
     *   {"metadata":
     *    "auxAttributes.precision",
     *    "greaterThan": 2},
     *   {"metadata":
     *    "auxAttributes.originAnchor",
     *    "equals": 4},
     *  ]
     * }
     * </td>
     * <td>
     * [[15], [42], ...]
     * </td>
     * </tr>
     * <tr>
     * <td>
     * Nested query example
     * </td>
     * <td>
     * {
     *  "select": [
     *    "nodeId",
     *    "metadata.auxAttributes.label"
     *  ],
     *  "conditions": [
     *    {
     *      "nodeType": "aux"
     *    },
     *    {
     *      "metadata": "auxProperties.pmiType",
     *      "equals": "DatumFeatureSymbol"
     *    },
     *    {
     *      "metadata": "auxAttributes.label",
     *      "equals": {
     *        "select": [
     *          "metadata.auxProperties.propertyName"
     *        ],
     *        "conditions": [
     *          {
     *            "nodeType": "aux"
     *          },
     *          {
     *            "metadata": "auxProperties.pmiType",
     *            "equals": "frame"
     *          },
     *          {
     *            "nodeId": 7522
     *          }
     *        ]
     *      }
     *    }
     *  ]
     * }
     * </td>
     * <td>
     * [
     *  [
     *    1234,
     *    "abc"
     *  ],
     * .....
     * ]
     * </td>
     * </tr>
     * <tr>
     * <td>
     * Query auxNodes of type ModelView connected to specific auxNode
     * </td>
     * <td>
     * {
     * "select": [
     *    "nodeId"
     *  ],
     *  "conditions": [
     *    {
     *      "nodeType": "aux"
     *    },
     *    {
     *      "metadata": "auxProperties.pmiType",
     *      "equals": "ModelView"
     *    },
     *    {
     *      "pointsTo": 323
     *    }
     *  ]
     * </td>
     * <td>
     * [
     *  [
     *    1234
     *  ],
     *  [
     *    3456
     *  ],
     * .....
     * ]
     * </td>
     * </tr>
     * </table>
     * <br><br>
     * <li>
     * Full Example<br><br>
     *
     * <br><br>
     * const queryLabels = await context.query({
     *                             select: ['nodeId', 'label'],
     *                             conditions: [{ nodeType: 'aux' }, { metadata: 'auxProperties.pmiType', equals: 'ModelView' }]
     *                         });
     *    const queryPMIType = await context.query({
     *    select: ['nodeId', 'auxProperties.pmiType'],
     *    conditions: [{ nodeType: 'aux' }, { metadata: 'auxProperties.pmiType', equals: 'ModelView' }]
     *    });
     * </li>
     * </li>
     * </ol>
     */
    interface QueryAPI {
        /**
         * Executes the query on the specified subtree
         * @param {IWebVisQuery | IWebVisQueryObject | string} query
         * @param {number} nodeID
         * @returns {IWebVisQuery}
         */
        query(query: Query | string, nodeID?: number): Promise<QueryResult>;
    }
    /**
     * @deprecated NotificationEvent is deprecated and will be removed in a future release.
     *
     * The NOTIFICATION event occurs if a new notification arrives.
     *
     * @event
     * @hideconstructor
     */
    class NotificationEvent extends WebVisEvent {
        message: string;
        notificationLevel: string;
        /**
         * @param message The notification message.
         * @param notificationLevel The level of the notification.
         */
        constructor(message: string, notificationLevel: string);
    }
    /**
     * @deprecated The NotificationLevel enum is deprecated and will be removed in a future release. Please use the webvisUI.UINotificationLevel with the related UISetting.NOTIFICATION_FILTER instead.
     */
    enum NotificationLevel {
        FATAL = 0,
        ERROR = 1,
        WARNING = 2,
        INFORMATION = 3,
        DEBUG = 5,
        TRACE = 6,
    }
    interface NodePathHandleMap {
        [key: string]: NodePathHandle;
    }
    interface NodePathHandle {
        nodeID: number;
    }
    /**
     * NodeIDs are generated during runtime. There is no guarantee, that the nodeIDs of a loaded model
     * are the same, if the 3D Space was reloaded in the browser.
     *
     * The NodePathAPI allows the user to handle nodes with static identifiers, which are not
     * changed during runtime. This holds, if the model resource is not changed.
     *
     * **Example**
     * ```typescript
     * // Get an instance of the ContextAPI
     * const myContext = webvis.getContext( "example" )
     *
     * // add some model
     * myContext.add(someModelURI);
     *
     * // the model is currently loading in the browser and we know, that the parts which are of interest have the nodeIDds 170 and 171
     * // we execute the following code in the console to get a string that can be used to refer to the part everytime
     * const handles = await myContext.createNodePathHandles([170, 171]);
     * const nodePathStrings = await myContext.requestNodePathStrings(handles);
     *
     * // Afterwards the nodePathStrings can be used to retrieve the runtime nodeIDs by script
     * const nodePathHandleMap = await myContext.requestNodePathHandleMap(nodePathStrings);
     * for (const nodePathString of nodePathStrings) {
     *     console.log(nodePathString + " has the nodeID " + nodePathHandleMap[nodePathString].nodeID);
     * }
     * ```
     */
    interface NodePathAPI {
        /**
         * requestNodePathHandleMap Returns an object mapping from input paths to the respective handles.
         *
         * @param paths {Array<string | NodePathHandle>} The array of node path strings or handles.
         * @param scope {number} [scope=0] nodeID specifying the scope as starting point for the paths
         * @return {Promise<NodePathHandleMap>} The resulting object mapping paths to handles
         */
        requestNodePathHandleMap(paths: Array<string>, scope?: number): Promise<NodePathHandleMap>;
        /**
         * createNodePathHandles Creates and returns handles for the target node ids or topology selectors.
         *
         * @param targets {Array<number>} Array of target node ids to create the handles for
         * @return {Promise<Array<NodePathHandle>>} The array of handles
         */
        createNodePathHandles(targets: Array<number>): Promise<Array<NodePathHandle>>;
        /**
         * requestNodePathStrings Returns string representations for the respective node path handles.
         *
         * @param handles {Array<NodePathHandle>}
         * @param [scope=0] {number} nodeID specifying the scope as starting point for the path resolution
         * @param typePriorities {Array<NodePathFragmentType>} Array of  priorities to control the fragments for the path string assembly.
         * @return {Promise<Array<string>>} String representation of the node path for the respective scope.
         */
        requestNodePathStrings(
            handles: Array<NodePathHandle>,
            scope?: number,
            typePriorities?: Array<NodePathFragmentType>,
        ): Promise<Array<string>>;
    }
    enum NodePathFragmentType {
        LOCAL_ID = 0,
        LEAF_INDEX = 1,
        LINK_INDEX = 2,
    }
    /**
     * Data associated with a {@link MemberAPI | member}.
     *
     * Can be requested via {@link MemberAPI.requestMemberProperties}.
     */
    interface MemberProperties {
        /**
         * The name of the member.
         *
         * Use {@link MemberAPI.setMemberName} to change the name.
         */
        name?: string;
        /**
         * The role of the member in the {@link SpaceAPI | space}.
         *
         * @see {@link MemberAction.PROMOTE} and {@link MemberAction.DEMOTE} for changing the role of a member.
         */
        role: MemberRole;
        /**
         * Custom data associated with the member.
         *
         * @see {@link MemberAPI.setMemberProfileEntry} and {@link MemberAPI.deleteMemberProfileEntry}
         * for modifying profile entries.
         */
        profile?: MemberProfile;
    }
    /**
     * App specific profile data associated with a {@link MemberAPI | member}.
     *
     * Can be modified via {@link MemberAPI.setMemberProfileEntry} and {@link MemberAPI.deleteMemberProfileEntry}.
     */
    interface MemberProfile {
        /**
         * Custom user data stored in the member profile.
         */
        userData: {
            [key: string]: Serializable;
        };
    }
    /**
     * Maps {@link MemberAction}s to their corresponding options types.
     *
     * If the action does not require any options, the type is `undefined`.
     */
    interface MemberActionsToOptionsMap {
        /**
         * @see {@link MemberAction.FOLLOW_VIEW}
         */
        [MemberAction.FOLLOW_VIEW]: undefined;
        /**
         * @see {@link MemberAction.UNFOLLOW_VIEW}
         */
        [MemberAction.UNFOLLOW_VIEW]: undefined;
        /**
         * @see {@link MemberAction.FOLLOW_XR_VIEW}
         */
        [MemberAction.FOLLOW_XR_VIEW]: undefined;
        /**
         * @see {@link MemberAction.UNFOLLOW_XR_VIEW}
         */
        [MemberAction.UNFOLLOW_XR_VIEW]: undefined;
        /**
         * @see {@link MemberAction.KICK}
         */
        [MemberAction.KICK]: undefined;
        /**
         * @see {@link MemberAction.PROMOTE}
         */
        [MemberAction.PROMOTE]: {
            role: MemberRole;
        } | undefined;
        /**
         * @see {@link MemberAction.DEMOTE}
         */
        [MemberAction.DEMOTE]: {
            role: MemberRole;
        } | undefined;
    }
    /**
     * ## Member API
     *
     * ### Overview
     *
     * The Member API provides methods to interact with members in the current {@link SpaceAPI | space}.
     * Members represent users connected to the {@link SpaceAPI | space}. You can retrieve information about members,
     * manage custom data associated with them, and perform actions on them.
     *
     * Every member has an ID, which is a continuous number starting from 0. The local member (the user of the current client)
     * always has the ID 0. Other members are assigned IDs in the order they join the {@link SpaceAPI | space}.
     *
     * ### Quick Start
     *
     * ```javascript
     * // Get the webvis context
     * const context = await webvis.getContext();
     *
     * // Get the IDs of all members in the current space
     * const memberIds = context.getMembers();
     *
     * // Request properties for the local member, which always has ID 0
     * const localMemberProps = await context.requestMemberProperties(0);
     *
     * // Request properties for another member
     * const otherMemberProps = await context.requestMemberProperties(1);
     *
     * // Set/get the name of the local member
     * context.setMemberName("John Doe");
     * const memberName = context.getMemberName();
     * ```
     *
     * ### Custom member data
     *
     * You can manage custom data at the profile entries of a member using the
     * `setMemberProfileEntry` and `deleteMemberProfileEntry` methods. This data
     * is stored in the `profile` field of the {@link MemberProperties} object and will be
     * available to other members in the same {@link SpaceAPI | space}.
     *
     * ```javascript
     * // Set/get custom data at the profile entries of the local member
     * await context.setMemberProfileEntry("status", "online");
     * await context.setMemberProfileEntry("age", 30);
     * const status = localMemberProps.profile["status"]; // "online"
     * const age = localMemberProps.profile["age"]; // 30
     *
     * // Delete a profile entry of the local member
     * await context.deleteMemberProfileEntry("age");
     * ```
     *
     * ### Member actions
     *
     * You can request and use actions available on a member using the
     * `requestMemberActions` and `useMemberAction` methods. Member actions
     * allow you to perform predefined operations on members, see {@link MemberAction}
     * for a list of available actions.
     *
     * ```javascript
     * // Request available actions on another member
     * const actions = await context.requestMemberActions(1);
     *
     * // Use an action on another member
     * if (actions.includes(webvis.MemberAction.PROMOTE)) {
     *   await context.useMemberAction(1, webvis.MemberAction.PROMOTE);
     * }
     * ```
     *
     * ### Events
     *
     * The Member API emits the following events:
     * - {@link MemberActionAddedEvent}
     * - {@link MemberActionRemovedEvent}
     * - {@link MemberChangedEvent}
     * - {@link MemberCreatedEvent}
     * - {@link MemberRemovedEvent}
     */
    interface MemberAPI {
        /**
         * Deletes a profile entry of the local member.
         * @param key The key of the profile entry to delete.
         * @returns A promise that resolves when the profile entry has been deleted.
         */
        deleteMemberProfileEntry(key: string): Promise<void>;
        /**
         * Gets the name of the local member.
         * @returns The name of the local member, or undefined if not set.
         */
        getMemberName(): string | undefined;
        /**
         * Gets a list of all member IDs in the current {@link SpaceAPI | space}.
         * @returns An array of member IDs.
         */
        getMembers(): number[];
        /**
         * Requests the actions available on a member.
         * @param memberId The ID of the member to request actions for.
         * @returns A promise that resolves to an array of member actions.
         */
        requestMemberActions(memberId: number): Promise<MemberAction[]>;
        /**
         * Requests the properties of a member.
         * @param id The ID of the member to request the properties for.
         * @returns A promise that resolves to the member properties, or undefined if the member does not exist.
         */
        requestMemberProperties(id: number): Promise<MemberProperties | undefined>;
        /**
         * Sets the name of the local member.
         * @param name The new name for the local member.
         */
        setMemberName(name: string): void;
        /**
         * Sets a profile entry of the local member.
         * @param key The key of the profile entry to set.
         * @param value The value to set for the profile entry.
         * @returns A promise that resolves when the profile entry has been set.
         */
        setMemberProfileEntry(key: string, value: Serializable): Promise<void>;
        /**
         * Uses an action on a member.
         *
         * @param memberId The ID of the member to use the action on.
         * @param action The action to use.
         * @param options Optional parameters for the action.
         * @returns A promise that resolves when the action has been used.
         */
        useMemberAction<A extends MemberAction>(
            memberId: number,
            action: A,
            options?: MemberActionsToOptionsMap[A],
        ): Promise<void>;
    }
    /**
     * Event that is fired when a member has been removed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MEMBER_REMOVED}
     */
    class MemberRemovedEvent extends WebVisEvent {
        memberId: number;
        /**
         * @param memberId The ID of the removed member.
         */
        constructor(memberId: number);
    }
    /**
     * Event that is fired when a new member has been created.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MEMBER_CREATED}
     */
    class MemberCreatedEvent extends WebVisEvent {
        memberId: number;
        memberProperties: MemberProperties;
        /**
         * @param memberId The ID of the created member.
         * @param memberProperties Information about the joined member.
         */
        constructor(memberId: number, memberProperties: MemberProperties);
    }
    /**
     * Event that is fired when a member has been changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MEMBER_CHANGED}
     */
    class MemberChangedEvent extends WebVisEvent {
        memberId: number;
        memberProperties: Partial<MemberProperties>;
        /**
         * @param memberId The ID of the changed member.
         * @param memberProperties Information about the changed member.
         */
        constructor(memberId: number, memberProperties: Partial<MemberProperties>);
    }
    /**
     * Event that is fired when a member action is performed.
     *
     * @event
     * @hideconstructor
     *
     * @ignore Out of scope for public API, but required for session handler
     *
     * @see {@link EventType.MEMBER_ACTION_USED}
     */
    class MemberActionUsedEvent extends WebVisEvent {
        sourceMemberId: number;
        targetMemberId: number;
        memberAction: MemberAction;
        details?: any;
        /**
         * @param sourceMemberId The memberId of the member that initiated the action
         * @param targetMemberId The memberId of the member that is the target of the action
         * @param memberAction The action that was performed
         * @param details Additional details about the action. The content depends on the action.
         */
        constructor(sourceMemberId: number, targetMemberId: number, memberAction: MemberAction, details?: any);
    }
    /**
     * Event that is fired when a member action is removed from a member.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MEMBER_ACTION_REMOVED}
     */
    class MemberActionRemovedEvent extends WebVisEvent {
        memberId: number;
        memberAction: MemberAction;
        /**
         * @param memberId The id of the member the action belongs to.
         * @param memberAction The action that was removed.
         */
        constructor(memberId: number, memberAction: MemberAction);
    }
    /**
     * Event that is fired when a member action is added to a member.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MEMBER_ACTION_ADDED}
     */
    class MemberActionAddedEvent extends WebVisEvent {
        memberId: number;
        memberAction: MemberAction;
        /**
         * @param memberId The id of the member the action belongs to.
         * @param memberAction The action that was added.
         */
        constructor(memberId: number, memberAction: MemberAction);
    }
    /**
     * Lists all available {@link MemberAPI | member} roles.
     */
    enum MemberRole {
        OWNER = 1,
        EDITOR = 2,
        VIEWER = 3,
    }
    /**
     * Lists all available member actions.
     *
     * A member action represents an action that can be performed on a member in the current space.
     * It can be used via {@link MemberAPI.useMemberAction}.
     */
    enum MemberAction {
        /**
         * Starts following the view of the target member.
         */
        FOLLOW_VIEW = "followView",
        /**
         * Stops following the view of the target member.
         */
        UNFOLLOW_VIEW = "unfollowView",
        /**
         * Starts following the XR view of the target member.
         */
        FOLLOW_XR_VIEW = "followXRView",
        /**
         * Stops following the XR view of the target member.
         */
        UNFOLLOW_XR_VIEW = "unfollowXRView",
        /**
         * Changes the role of the target member to a higher role.
         */
        PROMOTE = "promote",
        /**
         * Changes the role of the target member to a lower role.
         */
        DEMOTE = "demote",
        /**
         * Kicks the target member from the {@link SpaceAPI | space}.
         */
        KICK = "kick",
    }
    /**
     * The result of a thickness measurement.
     *
     * @see {@link MeasurementAPI.measureThickness}
     * @see {@link MeasurementType.THICKNESS}
     */
    interface ThicknessMeasurementResult {
        /**
         * The calculated thickness value.
         */
        thickness: number;
        /**
         * The two 3D points used to calculate the thickness.
         */
        points: [[number, number, number], [number, number, number]];
    }
    /**
     * The result of a tangent measurement.
     *
     * @see {@link MeasurementAPI.measureTangent}
     */
    interface TangentMeasurementResult {
        /**
         * The calculated tangent vector.
         */
        tangent: [number, number, number];
        /**
         * The point on the topological edge used for the tangent calculation.
         */
        point: [number, number, number];
    }
    /**
     * The result of a measurement of the normal of a face at a specific point.
     *
     * @see {@link MeasurementAPI.measureNormal}
     */
    interface NormalMeasurementResult {
        /**
         * The calculated normal vector.
         */
        normal: [number, number, number];
        /**
         * The point on the face used for the normal calculation.
         */
        point: [number, number, number];
    }
    /**
     * Helper to map {@link MeasurementType}s to corresponding input types.
     *
     * @see {@link MeasurementAPI.createMeasurement createMeasurement}
     * @see {@link MeasurementType}
     */
    interface MeasurementTypeToTargetMap {
        /**
         * Input type for {@link MeasurementType.SINGLE}.
         */
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type -- To provide a consistent API for all measurement types, it must be a single-element tuple.
        [MeasurementType.SINGLE]: [MeasurementTarget];
        /**
         * Input type for {@link MeasurementType.MULTIPLE}.
         */
        [MeasurementType.MULTIPLE]: [MeasurementTarget, MeasurementTarget];
        /**
         * Input type for {@link MeasurementType.ARC}.
         */
        [MeasurementType.ARC]: [
            MeasurementTarget<MeasurementTargetClass.POINT>,
            MeasurementTarget<MeasurementTargetClass.POINT>,
            MeasurementTarget<MeasurementTargetClass.POINT>,
        ];
        /**
         * Input type for {@link MeasurementType.THICKNESS}.
         */
        [MeasurementType.THICKNESS]: [
            MeasurementTarget<MeasurementTargetClass.POINT>,
            MeasurementTarget<MeasurementTargetClass.TOPOLOGY>,
        ];
    }
    /**
     * Helper to map {@link MeasurementType}s to corresponding result types.
     *
     * @see {@link MeasurementProperties}
     * @see {@link MeasurementType}
     */
    interface MeasurementTypeToResultMap {
        /**
         * Result type for {@link MeasurementType.SINGLE}.
         */
        [MeasurementType.SINGLE]: TopologyDescriptor;
        /**
         * Result type for {@link MeasurementType.MULTIPLE}.
         */
        [MeasurementType.MULTIPLE]: BetweenMeasurementResult;
        /**
         * Result type for {@link MeasurementType.ARC}.
         */
        [MeasurementType.ARC]: TopologyDescriptor<TopologySubType.CIRCULAR_ARC>;
        /**
         * Result type for {@link MeasurementType.THICKNESS}.
         */
        [MeasurementType.THICKNESS]: ThicknessMeasurementResult;
    }
    /**
     * Helper to map {@link MeasurementTargetClass}es to corresponding value types.
     *
     * @see {@link MeasurementAPI}
     * @see {@link MeasurementTargetClass}
     */
    interface MeasurementTargetClassMap {
        /**
         * Value type for {@link MeasurementTargetClass.POINT}.
         */
        [MeasurementTargetClass.POINT]: [number, number, number];
        /**
         * Value type for {@link MeasurementTargetClass.PLANE}.
         */
        [MeasurementTargetClass.PLANE]: [number, number, number, number];
        /**
         * Value type for {@link MeasurementTargetClass.LINE}.
         */
        [MeasurementTargetClass.LINE]: [number, number, number, number, number, number];
        /**
         * Value type for {@link MeasurementTargetClass.NODE}.
         */
        [MeasurementTargetClass.NODE]: number[];
        /**
         * Value type for {@link MeasurementTargetClass.TOPOLOGY}.
         */
        [MeasurementTargetClass.TOPOLOGY]: TopologyHandle;
        /**
         * Value type for {@link MeasurementTargetClass.LINE_SEGMENT}.
         */
        [MeasurementTargetClass.LINE_SEGMENT]: [[number, number, number], [number, number, number]];
        /**
         * Value type for {@link MeasurementTargetClass.CURVE}.
         */
        [MeasurementTargetClass.CURVE]: [[number, number, number], [number, number, number]][];
    }
    /**
     * Represents a 3D object that can be used for measurements via the {@link MeasurementAPI}. A measurement target
     * has a `class` and a `value`. The available classes and corresponding value types are defined in the
     * {@link MeasurementTargetClass} enum.
     *
     * @see {@link MeasurementAPI}
     * @see {@link MeasurementTargetClass}
     *
     * @template K - The {@link MeasurementTargetClass}. Defaults to all available classes.
     */
    type MeasurementTarget<K extends keyof MeasurementTargetClassMap = keyof MeasurementTargetClassMap> = {
        [P in K]: {
            class: P;
            value: MeasurementTargetClassMap[P];
        };
    }[K];
    /**
     * The result of a measurement performed via the {@link MeasurementAPI.createMeasurement createMeasurement} function. The
     * content of the result depends on the {@link MeasurementType} of the measurement.
     *
     * @see {@link MeasurementAPI}
     * @see {@link MeasurementType}
     *
     * @template K - The {@link MeasurementType}. Defaults to all available types.
     */
    type MeasurementResult<K extends keyof MeasurementTypeToResultMap = keyof MeasurementTypeToResultMap> = {
        [P in K]: MeasurementTypeToResultMap[P];
    }[K];
    /**
     * The properties of a measurement entity in the webvis context.
     *
     * @see {@link MeasurementAPI}
     */
    interface MeasurementProperties {
        /**
         * The anchor position of the measurement annotation. Together with the {@link contentOffset}, this
         * defines the position of the measurement annotation.
         * @default [0,0,0]
         */
        anchorPosition?: [number, number, number] | Float32Array;
        /**
         * The IDs of nodes that are represented by or related to the {@link targets} of the measurement.
         */
        connectedNodeIds?: number[];
        /**
         * The offset of the measurement annotation from its {@link anchorPosition}.
         * @default [0,0,0]
         */
        contentOffset?: [number, number, number] | Float32Array;
        /**
         * Defines whether the measurement annotation is visible.
         * @default true
         */
        enabled?: boolean;
        /**
         * The name of the measurement. This is independent of and does not influence the measurement's ID.
         * @default undefined
         */
        name?: string;
        /**
         * The state of the measurement.
         */
        state?: MeasurementState;
        /**
         * The targets of the measurement. The content of this array depends on the {@link type} of the measurement.
         */
        targets?: MeasurementTarget[];
        /**
         * The result of the measurement. The content of the result depends on the {@link type} of the measurement.
         */
        result?: MeasurementResult;
        /**
         * The type of the measurement.
         */
        type?: MeasurementType;
    }
    /**
     * Attention: This type is experimental and may be changed or removed
     * in future versions.
     *
     * A point match for a distance constraint. It contains the point
     * that matches the distance constraint and the corresponding point on
     * the target from which the distance was measured.
     */
    interface DistanceConstraintMatch {
        /**
         * The point that matches the distance constraint.
         */
        point: [number, number, number];
        /**
         * The corresponding point on the target from which the distance
         * was measured.
         */
        pointOnDistanceTarget: [number, number, number];
    }
    /**
     * The result of a distance and angle measurement between two {@link MeasurementTarget}s.
     *
     * @see {@link MeasurementAPI.measureBetween}
     * @see {@link MeasurementType.MULTIPLE}
     */
    interface BetweenMeasurementResult {
        /**
         * The angle between the two measurement targets if applicable.
         */
        angle?: number;
        /**
         * The distance between the two measurement targets.
         * - If the two measurement targets intersect the distance is zero.
         */
        distance: number;
        /**
         * The two 3D points used to calculate the distance.
         *
         * - If the two measurement targets intersect the two points are equal.
         * - If the two measurement targets intersect and both are from the class {@link MeasurementTargetClass.PLANE} the two points are used to describe the intersection line.
         */
        points: [[number, number, number], [number, number, number]];
        /**
         * The intersection of the two measurement targets, if existent. Note
         * that the intersection is not available for all {@link MeasurementTargetClass}
         * combinations. For details, see the documentation of
         * {@link MeasurementAPI.measureBetween measureBetween}.
         */
        intersection?: MeasurementTarget[];
    }
    /**
     * ## MeasurementAPI
     *
     * ### Overview
     *
     * The MeasurementAPI provides functionality to:
     * - Perform different kinds of measurements between 3D objects
     * - Create and manage measurements as first-class entities in the webvis context
     *
     * Possible measurement inputs include nodes, shapes, faces, edges, and points, as well as planes and lines.
     * All available input types are defined in the {@link MeasurementTargetClass} enum.
     *
     * ### Quick Start
     *
     * To measure the distance between a point and a plane, we need to represent them as {@link MeasurementTarget}s
     * as follows:
     *
     * ```javascript
     * const point = [0, 0, 0];
     * const plane = [1, 0, 0, 1]; // [normal_x, normal_y, normal_z, distance]
     *
     * const pointTarget = {
     *     class: webvis.MeasurementTargetClass.POINT,
     *     value: point
     * };
     *
     * const planeTarget = {
     *     class: webvis.MeasurementTargetClass.PLANE,
     *     value: plane
     * };
     * ```
     *
     * For other target types, see {@link MeasurementTargetClass}. With these targets, we can now measure the
     * distance using the {@link MeasurementAPI.measureBetween measureBetween} function:
     *
     * ```javascript
     * const context = webvis.getContext();
     *
     * const result = await context.measureBetween(pointTarget, planeTarget);
     *
     * const distance = result.distance;
     * const pointOnPlane = result.points[1];
     * ```
     *
     * ### Measurement Functions
     *
     * The API contains two sets of functions. The first is used to perform a measurement and return the result
     * without creating a new measurement entity in the webvis context. These include:
     * - {@link MeasurementAPI.measureBetween measureBetween} to measure distances and angles
     * - {@link MeasurementAPI.measureTangent measureTangent} to measure the tangent of an edge at a point
     * - {@link MeasurementAPI.measureThickness measureThickness} to measure the thickness of a shape at a point
     *
     * The second set of functions is used to create and manage measurements as first-class entities in the webvis
     * context. Here, {@link MeasurementAPI.createMeasurement createMeasurement} is used to perform different kinds
     * of measurements and create a new measurement entity holding the result. The available measurement types for this
     * scenario are defined in the {@link MeasurementType} enum. Besides this function, this set also includes:
     * - {@link MeasurementAPI.changeMeasurement changeMeasurement} to change the properties of a measurement entity
     * - {@link MeasurementAPI.requestMeasurementData requestMeasurementData} to request the properties of a
     *   measurement
     * - {@link MeasurementAPI.getMeasurements getMeasurements} to get all available measurements
     * - {@link MeasurementAPI.removeMeasurement removeMeasurement} to remove a measurement
     *
     * ### Creating a Measurement Entity
     *
     * If we want to perform the same measurement as in the quick start example, but also create a corresponding
     * measurement entity in the webvis context, we can use the
     * {@link MeasurementAPI.createMeasurement createMeasurement} function:
     *
     * ```javascript
     * // Define targets as in the quick start example...
     *
     * const context = webvis.getContext();
     *
     * const measurementId = context.createMeasurement(
     *     webvis.MeasurementType.MULTIPLE, // Analogous to measureBetween
     *     [pointTarget, planeTarget]
     * );
     *
     * // We can access the result of the measurement by requesting
     * // its properties
     * const measurementProperties = await context.requestMeasurementData(measurementId);
     * const result = measurementProperties.result;
     * ```
     *
     * ### Working With Model Geometry
     *
     * In webvis, a part of a model's geometry can be referenced via a {@link TopologyHandle}. Given such a handle,
     * we can create a corresponding {@link MeasurementTarget} to use in measurements:
     *
     * ```javascript
     * const topologyHandle = getTopologyHandle(); // Replace with your topology handle
     *
     * const edgeMeasurementTarget = {
     *     class: webvis.MeasurementTargetClass.TOPOLOGY,
     *     value: topologyHandle
     * };
     * ```
     */
    interface MeasurementAPI {
        /**
         * Performs a measurement and creates a corresponding measurement entity in the webvis context.
         * The different kinds of measurements that this function can perform are defined in the
         * {@link MeasurementType} enum. Depending on the measurement type, different targets are required.
         *
         * Triggers a {@link MeasurementCreatedEvent} when the measurement entity has been created, followed by a
         * {@link MeasurementChangedEvent} when processing is complete and the result is available.
         *
         * @see {@link changeMeasurement}
         * @see {@link requestMeasurementData}
         *
         * @template T - The {@link MeasurementType}.
         * @param type - The type of the measurement, given as a {@link MeasurementType}.
         * @param targets - The {@link MeasurementTarget}s, as defined by the {@link MeasurementType}.
         * @param properties - Additional properties of the measurement entity. These include the enabled state and
         * positioning information.
         * @returns The ID of the created measurement.
         */
        createMeasurement<T extends keyof MeasurementTypeToTargetMap>(
            type: T,
            targets: MeasurementTypeToTargetMap[T],
            properties?: MeasurementProperties,
        ): number;
        /**
         * Changes one or more properties of the measurement entity with the specified ID.
         *
         * Triggers a {@link MeasurementChangedEvent} when the measurement entity has been changed.
         *
         * @see {@link createMeasurement}
         *
         * @param measurementID - The ID of the measurement entity that should be changed.
         * @param properties - The properties that should be changed.
         * @returns An object with the changed properties.
         */
        changeMeasurement(measurementID: number, properties: MeasurementProperties): MeasurementProperties;
        /**
         * Returns the properties of the measurement entity with the specified ID. These include the result of the
         * measurement, as well as its type and targets.
         *
         * @see {@link createMeasurement}
         *
         * @param measurementID - The ID of the measurement entity.
         * @returns The properties of the measurement entity.
         */
        requestMeasurementData(measurementID: number): Promise<MeasurementProperties>;
        /**
         * Returns the IDs of all measurement entities in the webvis context.
         *
         * @see {@link createMeasurement}
         *
         * @returns The IDs of all measurement entities.
         */
        getMeasurements(): Array<number>;
        /**
         * Removes the measurement entity with the specified ID from the webvis context and all related snapshots.
         *
         * Triggers a {@link MeasurementRemovedEvent} when the measurement entity has been removed.
         *
         * @see {@link createMeasurement}
         *
         * @param measurementID - The ID of the measurement entity that should be removed.
         * @param safe - Performs a safe remove which interrupts the removal process if the measurement is part of one
         * or more snapshots. Default: false
         * @returns The resulting state of the removal process.
         */
        removeMeasurement(measurementID: number, safe?: boolean): RemoveState;
        /**
         * Measures the distance and, if applicable, the angle between two measurement targets. The result also includes
         * the corresponding closest points on the targets.
         *
         * If the targets intersect, the result will contain a representation of the intersection. Note that the
         * intersection is not available for measurements involving target classes
         * {@link MeasurementTargetClass.TOPOLOGY TOPOLOGY} or {@link MeasurementTargetClass.NODE NODE}, except for
         * the cases plane-face and face-face.
         *
         * @param target0 - The first measurement target.
         * @param target1 - The second measurement target.
         * @returns The result of the measurement.
         */
        measureBetween(target0: MeasurementTarget, target1: MeasurementTarget): Promise<BetweenMeasurementResult>;
        /**
         * Measures the normal of a face at a given point. The face is specified by a measurement target that
         * points to a corresponding {@link TopologyHandle}. If the point does not lie on the face, the closest
         * point on the face is used.
         *
         * @param topology - The measurement target representing the face via a {@link TopologyHandle}.
         * @param point - The point at which the normal should be measured.
         * @returns The result of the normal measurement.
         */
        measureNormal(
            topology: MeasurementTarget<MeasurementTargetClass.TOPOLOGY>,
            point: MeasurementTarget<MeasurementTargetClass.POINT>,
        ): Promise<NormalMeasurementResult>;
        /**
         * Measures the tangent of an edge at a given point. The edge is specified by a measurement target that
         * points to a corresponding {@link TopologyHandle}. If the point does not lie on the edge, the closest
         * point on the edge is used.
         *
         * @param topology - The measurement target representing the edge via a {@link TopologyHandle}.
         * @param point - The point at which the tangent should be measured.
         * @returns The result of the tangent measurement.
         */
        measureTangent(
            topology: MeasurementTarget<MeasurementTargetClass.TOPOLOGY>,
            point: MeasurementTarget<MeasurementTargetClass.POINT>,
        ): Promise<TangentMeasurementResult>;
        /**
         * Measures the thickness of a shape at a given point. The shape is specified by a measurement target that
         * points to a corresponding {@link TopologyHandle}. If the point does not lie on the shape, the closest
         * point on the shape is used. The thickness is measured along the line defined by the normal of the shape
         * at the given point.
         *
         * @param topology - The measurement target representing the shape via a {@link TopologyHandle}.
         * @param point - The point at which the thickness should be measured.
         * @returns The result of the thickness measurement.
         */
        measureThickness(
            topology: MeasurementTarget<MeasurementTargetClass.TOPOLOGY>,
            point: MeasurementTarget<MeasurementTargetClass.POINT>,
        ): Promise<ThicknessMeasurementResult>;
        /**
         * Attention: This function is experimental and may be changed or removed
         * in future versions.
         *
         * Returns points from a search space that have the specified
         * distance to a set of measurement targets. The search space is
         * defined by a measurement target. Currently only supports
         * a search space that is defined by a curve and
         * edges as distance targets.
         *
         * @param searchCurve    The curve on which to search.
         * @param distanceCurves The targets from which the distance is measured.
         * @param distance       The distance.
         * @returns An array of points that match the distance constraint.
         */
        measurePointsByDistance(
            searchCurve: MeasurementTarget<MeasurementTargetClass.CURVE>,
            distanceCurves: MeasurementTarget<MeasurementTargetClass.TOPOLOGY>[],
            distance: number,
        ): Promise<DistanceConstraintMatch[]>;
    }
    /**
     * Event that is fired when a measurement entity has been removed from the webvis context.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MEASUREMENT_REMOVED}
     * @see {@link MeasurementAPI.removeMeasurement}
     */
    class MeasurementRemovedEvent extends WebVisEvent {
        measurementID: number;
        /**
         * @param measurementID The ID of the measurement.
         */
        constructor(measurementID: number);
    }
    /**
     * Event that is fired when a measurement entity has been created in the webvis context.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MEASUREMENT_CREATED}
     * @see {@link MeasurementAPI.createMeasurement}
     */
    class MeasurementCreatedEvent extends WebVisEvent {
        measurementID: number;
        properties: MeasurementProperties;
        /**
         * @param measurementID The ID of the measurement.
         * @param properties The properties of the measurement.
         */
        constructor(measurementID: number, properties: MeasurementProperties);
    }
    /**
     * Event that is fired when a measurement entity has been changed in the webvis context.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MEASUREMENT_CHANGED}
     * @see {@link MeasurementAPI.createMeasurement}
     * @see {@link MeasurementAPI.changeMeasurement}
     */
    class MeasurementChangedEvent extends WebVisEvent {
        measurementID: number;
        properties: MeasurementProperties;
        /**
         * @param measurementID The ID of the measurement.
         * @param properties The properties of the measurement that have been changed.
         */
        constructor(measurementID: number, properties: MeasurementProperties);
    }
    /**
     * The types of measurements that can be performed by the {@link MeasurementAPI.createMeasurement createMeasurement} function.
     *
     * @see {@link MeasurementTargetClass}
     * @see {@link MeasurementAPI}
     */
    enum MeasurementType {
        /**
         * Creates a measurement entity that holds information about a single 3D object.
         *
         * The measurement input is an array containing a single {@link MeasurementTarget}. The currently supported
         * target classes are {@link MeasurementTargetClass.POINT POINT}, {@link MeasurementTargetClass.NODE NODE},
         * and {@link MeasurementTargetClass.TOPOLOGY TOPOLOGY}.
         *
         * The measurement result has type {@link TopologyDescriptor} and describes the 3D object. In case of input
         * target class {@link MeasurementTargetClass.NODE NODE}, the result describes the combined bounding box of
         * the nodes.
         */
        SINGLE = 0,
        /**
         * A measurement of the distance and, if applicable, the angle between two 3D objects.
         * Analogous to the {@link MeasurementAPI.measureBetween measureBetween} function.
         *
         * If the targets intersect, the result will contain a representation of the intersection. Note that the
         * intersection is not available for all {@link MeasurementTargetClass} combinations. For details, see the
         * documentation of {@link MeasurementAPI.measureBetween measureBetween}.
         *
         * The measurement input is an array of two {@link MeasurementTarget}s.
         *
         * The measurement result has type {@link BetweenMeasurementResult}.
         */
        MULTIPLE = 1,
        /**
         * A measurement of different properties of a circular arc that is defined by three points.
         *
         * The measurement input is an array of three corresponding {@link MeasurementTarget}s. The first
         * point specifies the start of the circular arc, the second point lies on the arc, and the third point
         * specifies the end of the arc.
         *
         * The measurement result has type {@link TopologyDescriptor} and its `descriptor` property points to a
         * {@link TopologyCircularArcDescriptor}. It includes the radius, center, and length of the circular arc.
         */
        ARC = 2,
        /**
         * A measurement of the thickness of a shape at a given point. Analogous to the
         * {@link MeasurementAPI.measureThickness measureThickness} function.
         *
         * The measurement input is an array of two {@link MeasurementTarget}s. The first one represents
         * the point and the second one represents the shape.
         *
         * The measurement result has type {@link ThicknessMeasurementResult}.
         */
        THICKNESS = 3,
    }
    /**
     * The available classes of {@link MeasurementTarget}s that can be used with the {@link MeasurementAPI}.
     *
     * @see {@link MeasurementTarget}
     * @see {@link MeasurementType}
     * @see {@link MeasurementAPI}
     */
    enum MeasurementTargetClass {
        /**
         * A 3D point given by its x, y, and z coordinates.
         */
        POINT = 0,
        /**
         * A 3D line given by a point on the line and a direction. The line data is specified as a single array
         * with the format:
         *
         * ```
         * [point_x, point_y, point_z, direction_x, direction_y, direction_z]
         * ```
         */
        LINE = 1,
        /**
         * A 3D plane given by the coefficients A, B, C, and D of the plane equation Ax + By + Cz = D.
         * The plane data is specified as a single array with the format:
         *
         * ```
         * [A, B, C, D]
         * ```
         */
        PLANE = 2,
        /**
         * A part of a geometry represented by a {@link TopologyHandle}. This includes shapes, faces, and edges.
         */
        TOPOLOGY = 3,
        /**
         * One or multiple nodes given by an array of node IDs.
         */
        NODE = 4,
        /**
         * A 3D line segment given by the start and end points. The line segment data is specified as:
         *
         * ```
         * [[start_x, start_y, start_z], [end_x, end_y, end_z]]
         * ```
         */
        LINE_SEGMENT = 5,
        /**
         * A 3D curve given as an array of line segments. The line segments are
         * given by the start and end points. The line segments are not necessarily
         * ordered or connected.
         */
        CURVE = 6,
    }
    enum MeasurementState {
        CREATED = 1000,
        REQUESTED = 2000,
        PROCESSING = 2001,
        READY = 3000,
        WARNING = 4000,
        ERROR = 5000,
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * The properties of a material entity in the webvis context.
     *
     * @see {@link MaterialAPI}
     */
    interface MaterialProperties {
        /**
         * The base color of the material specified by an RGB array, where each channel's value ranges from 0 to 1.
         * @default [1,1,1]
         */
        baseColor?: [number, number, number];
        /**
         * The emissive color of the material specified by an RGB array, where each channel's value ranges from 0 to 1.
         * @default [0,0,0]
         */
        emissiveColor?: [number, number, number];
        /**
         * The opacity of the material specified in the range from 0 to 1.
         * @default 1.0
         */
        opacity?: number;
        /**
         * The roughness of the material specified in the range from 0 to 1.
         * @default 0.5
         */
        roughness?: number;
        /**
         * The metallic property of the material specified in the range from 0 to 1.
         * @default 0
         */
        metallic?: number;
        /**
         * The name of the material.
         * @default undefined
         */
        name?: string;
    }
    /**
     * ## MaterialAPI
     *
     * ### Overview
     *
     * The **MaterialAPI** provides a set of methods for creating and managing materials in a webvis context. It allows you to:
     *
     * - Create materials and assign them to specific nodes in a scene.
     * - Edit and update existing materials.
     * - Retrieve all materials at once.
     * - Request detailed material data for a specific material.
     * - Remove materials when they are no longer needed.
     *
     * ### Quick Start
     * The fastest way to get familiar with the MaterialAPI is by creating a material and assigning it to a node. The material can then be updated later and removed when it is no longer needed:
     *
     * ```javascript
     * // Get the webvis context
     * const context = webvis.getContext();
     *
     * // Create a node to assign the material to and enable the resource to make it visible
     * const nodeId = context.add({dataURI: "urn:x-i3d:shape:box", initialProperties: {enabled: true}});
     *
     * // Create a material
     * const materialId = context.createMaterial({
     *      baseColor: [1, 0, 0],
     *      opacity: 1,
     *      roughness: 0.5,
     *      metallic: 0,
     *      name: "Red Material",
     * });
     *
     * // Create an appearance URI which can be used to assign the material to a node
     * const appearanceURI = `urn:X-l3d:material:${materialId}`;
     *
     * // Assign the material to the previously added node via the APPEARANCE_URI property
     * await context.setProperty(nodeId, webvis.Property.APPEARANCE_URI, appearanceURI);
     *
     *  // Change the base color and the name of the material
     * context.changeMaterial(materialId, {
     *      baseColor: [0, 1, 0],
     *      name: "Green Material"
     *  });
     *
     * // Unassign the material from the node
     * await context.setProperty(nodeId, webvis.Property.APPEARANCE_URI, null);
     *
     * // Remove the material if no longer required
     * context.removeMaterial(materialId);
     * ```
     *
     * ### Events
     *
     * The following events are associated with the MaterialAPI:
     * - {@link MaterialCreatedEvent}
     * - {@link MaterialChangedEvent}
     * - {@link MaterialRemovedEvent}
     */
    interface MaterialAPI {
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Creates a new material and triggers a {@link MaterialCreatedEvent}.
         *
         * @param properties Initial properties of the created material.
         * @returns The ID of the newly created material.
         */
        createMaterial(properties?: MaterialProperties): number;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Changes one or more properties of a material with the specified ID and triggers a {@link MaterialChangedEvent}.
         *
         * @param materialId The ID of the material you want to change.
         * @param properties The properties of the material you want change.
         * @returns An object with the changed properties.
         */
        changeMaterial(materialId: number, properties: MaterialProperties): MaterialProperties;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Removes the material from the scene and all related snapshots and triggers a {@link MaterialRemovedEvent}.
         *
         * @param materialId The ID of the material.
         * @param safe       Performs a safe remove which interrupts the removal process if the material is part of
         *                   one or more Snapshots. Default: false
         * @returns The resulting state of the removal process.
         */
        removeMaterial(materialId: number, safe?: boolean): RemoveState;
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns the IDs of all material entities in the webvis context.
         *
         * @returns The IDs of all available materials
         */
        getMaterials(): number[];
        /**
         * *Experimental. May be changed in the future without notice.*
         *
         * Returns the properties of the material entity with the specified ID.
         *
         * @param materialId The ID of the material entity.
         * @returns The properties of the material entity.
         */
        getMaterialData(materialId: number): MaterialProperties;
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a material entity has been removed from the webvis context
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MATERIAL_REMOVED}
     * @see {@link MaterialAPI}
     * @see {@link MaterialAPI.removeMaterial}
     */
    class MaterialRemovedEvent extends WebVisEvent {
        materialId: number;
        /**
         * @param materialId The ID of the material.
         */
        constructor(materialId: number);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a material entity has been created in the webvis context.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MATERIAL_CREATED}
     * @see {@link MaterialAPI}
     * @see {@link MaterialAPI.createMaterial}
     */
    class MaterialCreatedEvent extends WebVisEvent {
        materialId: number;
        properties: MaterialProperties;
        /**
         * @param materialId The ID of the material.
         * @param properties The properties of the material.
         */
        constructor(materialId: number, properties: MaterialProperties);
    }
    /**
     * *Experimental. May be changed in the future without notice.*
     *
     * Event that is fired when a material entity has been changed in the webvis context.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.MATERIAL_CHANGED}
     * @see {@link MaterialAPI}
     * @see {@link MaterialAPI.changeMaterial}
     */
    class MaterialChangedEvent extends WebVisEvent {
        materialId: number;
        properties: MaterialProperties;
        /**
         * @param materialId The ID of the material.
         * @param properties The properties of the material that have been changed.
         */
        constructor(materialId: number, properties: MaterialProperties);
    }
    /**
     * This event occurs if a log message is created.
     *
     * @event
     * @hideconstructor
     */
    class LogEvent extends WebVisEvent {
        level: LogLevel;
        timestamp: string;
        message: string;
        /**
         * @param level The log level of the log message.
         * @param timestamp The timestamp when the log message was created.
         * @param message The log message.
         */
        constructor(level: LogLevel, timestamp: string, message: string);
    }
    /**
     * The available LogLevels.
     */
    enum LogLevel {
        SILENT = 0,
        FATAL = 1,
        ERROR = 2,
        WARNING = 3,
        INFO = 4,
        DEBUG = 5,
        TRACE = 6,
    }
    /**
     * The result of enabling or disabling a {@link LayerFilterAPI layer filter}.
     *
     * @see {@link LayerFilterAPI}
     * @see {@link LayerFilterAPI.setLayerFilterEnabled}
     */
    interface SetLayerFilterEnabledResult {
        /**
         * The name of the layer filter.
         */
        layerFilterName: string;
        /**
         * The new enabled state of the layer filter.
         */
        value: boolean;
        /**
         * Indicates if the layer filter has changed its state.
         */
        hasChanged: boolean;
    }
    /**
     * ## LayerFilterAPI
     *
     * ### Overview
     *
     * The LayerFilterAPI is used to manage the visibility of layers and filter them.
     * These are additional metadata information from input data and are not always provided.
     *
     * The LayerFilterAPI provides methods to:
     * - Retrieve the list of available layer filters and their states.
     * - Enable or disable specific layer filters.
     * - Check if a specific node is part of an enabled layer filter.
     *
     * This functionality is particularly useful for managing the visualization of complex models
     * by toggling the visibility of specific layer filters based on user preferences or application logic.
     *
     * ### Quick Start
     *
     * To use the LayerFilterAPI, layer filters can be accessed via the context:
     *
     * ```javascript
     * // Get the webvis context
     * const context = webvis.getContext();
     *
     * context.getRegisteredLayerFilters();
     * // -> example: {DEFAULT: false, LAYER1: false}
     *
     * // Enable a layer filter
     * context.setLayerFilterEnabled('LAYER1', true);
     * // -> example: {layerFilterName: 'LAYER1', value: true, hasChanged: true}
     *
     * context.getEnabledLayerFilters();
     * // -> example: ['LAYER1']
     *
     * context.getRegisteredLayerFilters();
     * // -> example: {DEFAULT: false, LAYER1: true}
     *
     * // Check if a node is part of an enabled layer
     * await context.isNodePartOfEnabledLayers(nodeID);
     * // -> example: true
     * ```
     *
     * ### Events
     *
     * The following events are associated with the LayerFilterAPI:
     * - {@link LayerFilterChangedEvent}
     * - {@link LayerFilterRegisteredEvent}
     * - {@link LayerFilterUnregisteredEvent}
     */
    interface LayerFilterAPI {
        /**
         * Returns the currently defined list of layer filters with their current state.
         *
         * @return Returns a map of the registered layer filters and their states.
         */
        getRegisteredLayerFilters(): {
            [key: string]: boolean;
        };
        /**
         * Returns the currently defined list of enabled layer filters.
         *
         * @return An array of strings representing the names of the enabled layer filters.
         */
        getEnabledLayerFilters(): Array<string>;
        /**
         * Sets the enabled state of a single layer filter.
         *
         * Triggers a {@link LayerFilterChangedEvent}.
         *
         * @param name The name of the layer filter
         * @param enabled The new enabled state.
         * @returns The result of the operation.
         */
        setLayerFilterEnabled(name: string, enabled: boolean): SetLayerFilterEnabledResult;
        /**
         * Returns true if the specified node ID is part of an enabled layer.
         *
         * @param nodeID The node ID which should be checked.
         * @return Returns a promise that resolves to true if the node is part of an enabled layer, false otherwise.
         */
        isNodePartOfEnabledLayers(nodeID: number): Promise<boolean>;
    }
    /**
     * Event that is fired when a layer filter has been unregistered.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link LayerFilterAPI}
     * @see {@link EventType.LAYERFILTER_UNREGISTERED}
     */
    class LayerFilterUnregisteredEvent extends WebVisEvent {
        name: string;
        /**
         * @param name The name of the unregistered LayerFilter.
         */
        constructor(name: string);
    }
    /**
     * Event that is fired when a new layer filter has been registered.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link LayerFilterAPI}
     * @see {@link EventType.LAYERFILTER_REGISTERED}
     */
    class LayerFilterRegisteredEvent extends WebVisEvent {
        name: string;
        enabled: boolean;
        /**
         * @param name The name of the registered layer filter.
         * @param enabled The enabled state of the new layer filter.
         */
        constructor(name: string, enabled: boolean);
    }
    /**
     * Event that is fired when a layer filter has been changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link LayerFilterAPI}
     * @see {@link EventType.LAYERFILTER_CHANGED}
     */
    class LayerFilterChangedEvent extends WebVisEvent {
        name: string;
        enabled: boolean;
        /**
         * @param name The name of the changed layer filter.
         * @param enabled The new enabled state of the changed layer filter.
         */
        constructor(name: string, enabled: boolean);
    }
    /**
     * Contains the properties of an interaction.
     *
     * @see {@link InteractionAPI.processInteractionInput}
     */
    interface InteractionData {
        /**
         * The ID of the target node or node collection that the interaction is applied to.
         *
         * @see {@link CollectionAPI} for node collections as targetID
         */
        targetID: number;
        /**
         * Optional property for transporting the target's name to the interaction.
         */
        targetName?: string;
        /**
         * Whether the target was interacted with via picking or by ID.
         */
        type?: InteractionType;
        /**
         * The interaction modifier that is applied to the interaction.
         */
        modifier?: InteractionModifier;
        /**
         * The original event that triggered the interaction.
         */
        originalEvent?: Event;
        /**
         * Optional property storing information about where the interaction originated from (e.g. the DOM element that triggered the interaction).
         */
        origin?: any;
        /**
         * Pointer information related to the interaction.
         */
        pointerInfo?: PointerInfo;
    }
    /**
     * ## InteractionAPI
     *
     * ### Overview
     *
     * The **InteractionAPI** provides functionalities to control the current interaction behavior by
     * switching between different predefined interaction modes {@link InteractionMode | interaction modes}.
     *
     * ### Quick Start
     *
     * **Example**
     * ```javascript
     * // Get the webvis default context
     * const myContext = webvis.getContext();
     *
     * // Switch to another interaction mode
     * myContext.setInteractionMode(webvis.InteractionMode.MEASUREMENT_DOUBLE);
     *
     * // Get the current interaction mode
     * const activeInteractionMode = myContext.getInteractionMode();
     *
     * // Leave the double measurement mode and switch back to the default interaction behaviour.
     * myContext.resetInteractionMode();
     * ```
     *
     * ### Events
     * The InteractionAPI emits the following events:
     * - {@link InteractionModeChangedEvent}
     */
    interface InteractionAPI {
        /**
         * Set the current interaction mode.
         *
         * @deprecated Calling setInteractionMode with the mode parameter of type string or string[] is deprecated, please use the InteractionMode enum instead.
         * @param mode Specifies the interaction mode you want set.
         * @param keepColorCompareActive Specifies if the color comparison mode should stay active. Default: false
         *
         * @see {@link isColorComparisonActive}
         */
        setInteractionMode(mode: string | Array<string>, keepColorCompareActive?: boolean): void;
        /**
         * Set the current interaction mode.
         *
         * @param mode Specifies the interaction mode you want set.
         * @param keepColorCompareActive Specifies if the color comparison mode should stay active. Default: false
         *
         * @see {@link isColorComparisonActive}
         */
        setInteractionMode(mode: InteractionMode, keepColorCompareActive?: boolean): void;
        /**
         * Returns the current Interaction mode.
         *
         * @returns {InteractionMode} The current Interaction mode.
         */
        getInteractionMode(): InteractionMode;
        /**
         * Checks if the color comparison mode is active.
         *
         * @returns {boolean} true if the color comparison mode is active, otherwise false.
         */
        isColorComparisonActive(): boolean;
        /**
         * Triggers an interaction on the current active interaction mode.
         *
         * @param interactionData - Definition of the triggered Interaction.
         */
        processInteractionInput(interactionData: InteractionData): void;
        /**
         * Sets the current interaction mode back to the Default mode.
         *
         * @param keepColorCompareActive Specifies if the color comparison mode should stay active. (Default: false)
         * @see {@link isColorComparisonActive}
         */
        resetInteractionMode(keepColorCompareActive?: boolean): void;
    }
    /**
     * Event that is fired when the interaction mode is changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link InteractionAPI}
     */
    class InteractionModeChangedEvent extends WebVisEvent {
        mode: InteractionMode;
        keepColorCompareActive: boolean;
        /**
         * @param mode The new active interaction mode.
         * @param keepColorCompareActive Indicates if the color comparison mode should stay active.
         */
        constructor(mode: InteractionMode, keepColorCompareActive: boolean);
    }
    /**
     * The available interaction types. They determine if a target was picked or interacted with by ID.
     *
     * @see {@link InteractionData}
     * @see {@link InteractionAPI}
     */
    enum InteractionType {
        /**
         * Target is interacted with via picking.
         */
        PICKING = 0,
        /**
         * Target is interacted with by ID.
         */
        BY_ID = 1,
    }
    /**
     * The available InteractionProgress states.
     */
    enum InteractionProgress {
        WAITING_FIRST_INPUT = 0,
        WAITING_SECOND_INPUT = 1,
        WAITING_THIRD_INPUT = 2,
        DONE = 3,
    }
    /**
     * The available interaction modifiers. They determine additional modifications of an interaction.
     *
     * @see {@link InteractionData}
     * @see {@link InteractionAPI}
     */
    enum InteractionModifier {
        /**
         * The default modifier. The interaction has no additional modifications.
         */
        DEFAULT = 0,
        /**
         * Indicates that the current target node should be added to the current selection.
         */
        ADD = 1,
        /**
         * Indicates that the parent of the selected node should be selected, too.
         * Enable {@link SettingStrings.PARENT_SELECT_ENABLED} to set this modifier in interactions.
         */
        EXPAND = 2,
        /**
         * Indicates that the secondary button of the pointer was used.
         */
        SECONDARY = 3,
    }
    /**
     * The available interaction modes. They determine how interactions with the space and its entities are processed.
     *
     * @see {@link InteractionAPI}
     */
    enum InteractionMode {
        /**
         * Allows to define a 2D box on the canvas. Entities contained by this box will be selected.
         */
        AREA_SELECTION = 0,
        /**
         * Allows to define a 2D box on the canvas. The viewer will zoom into the defined area.
         */
        AREA_ZOOM = 1,
        /**
         * Allows to identify relations between PMI's and faces.
         */
        AUX = 2,
        /**
         * Allows to create clip planes from geometrical features.
         */
        CLIP_PLANE = 3,
        /**
         * Allows to compare two nodes.
         */
        COLOR_COMPARISON = 4,
        /**
         * The default interaction mode. Will also be set when {@link InteractionAPI.resetInteractionMode} is being called.
         */
        DEFAULT = 5,
        /**
         * Allows to perform an explosion.
         */
        EXPLOSION = 6,
        /**
         * Allows to perform an arc measurement based on three points on a geometry.
         */
        MEASUREMENT_ARC = 7,
        /**
         * Allows to perform a double measurement between two geometrical features.
         */
        MEASUREMENT_DOUBLE = 8,
        /**
         * Allows to perform a single measurement on a geometry.
         */
        MEASUREMENT_SINGLE = 9,
        /**
         * Allows to perform a thickness measurement on a geometry.
         */
        MEASUREMENT_THICKNESS = 10,
        /**
         * Mode to disable all interaction.
         */
        NONE = 11,
        /**
         * Allows to draw on geometries.
         */
        PAINT = 12,
        /**
         * Allows to transform nodes.
         */
        TRANSFORMATION = 13,
    }
    /**
     * This type is used to define the type of a property.
     *
     * See {@link Property} for a formatted list of all available properties along with their types and default values.
     */
    type PropertyType<T> = T extends "activatable" ? boolean : T extends "animation" ? {
            name: string;
        } & AnimationOptions
    : T extends "appearancePattern" ? number | null
    : T extends "appearanceURI" ? string | number | undefined | null
    : T extends "attachment" ? any
    : T extends "auxContent" ? any
    : T extends "auxEnabled" ? EnabledState | boolean
    : T extends "auxNodes" ? number[]
    : T extends "children" ? number[]
    : T extends "comparisonGroup" ? ComparisonGroup
    : T extends "depth" ? number
    : T extends "enabled" ? EnabledState | boolean
    : T extends "ghosted" ? boolean
    : T extends "globalTransform" ? [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array
    : T extends "globalVolume" ? BoxVolume
    : T extends "hasAuxStructure" ? boolean
    : T extends "hidden" ? boolean
    : T extends "infoState" ? NodeInfoState
    : T extends "label" ? string
    : T extends "localTransform" ? [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array
    : T extends "localVolume" ? BoxVolume
    : T extends "modelViews" ? number[]
    : T extends "names" ? string[]
    : T extends "nodeRepresentation" ? NodeRepresentation
    : T extends "outlined" ? boolean
    : T extends "parent" ? number
    : T extends "pickable" ? boolean
    : T extends "real" ? EnabledState | boolean
    : T extends "realOccluder" ? boolean
    : T extends "renderMode" ? RenderMode
    : T extends "resourceState" ? NodeResourceState
    : T extends "selected" ? boolean
    : T extends "state" ? NodeState
    : T extends "subType" ? string
    : T extends "type" ? NodeType
    : T extends "userData" ? Serializable | undefined
    : any;
    /**
     * Defines initial properties of a new node. These become the default values
     * for the new node, i.e. {@link InstanceGraphAPI.resetProperty} and
     * {@link InstanceGraphAPI.resetProperties} will reset to these values.
     *
     * @see {@link InstanceGraphAPI.add}
     */
    interface InitialNodeProperties {
        /**
         * Specifies the initial enabled state of the added node.
         *
         * @default false
         *
         * @see {@link Property.ENABLED}
         */
        enabled?: boolean;
        /**
         * Specifies the initial aux enabled state of the added node.
         *
         * @default false
         *
         * @see {@link Property.AUX_ENABLED}
         */
        auxEnabled?: boolean;
        /**
         * @ignore
         * Specifies the initial appearance pattern of the added node.
         *
         * @default null
         *
         * @see {@link Property.APPEARANCE_PATTERN}
         */
        appearancePattern?: number | null;
        /**
         * Specifies the initial appearance URI of the added node.
         *
         * @default null
         *
         * @see {@link Property.APPEARANCE_URI}
         */
        appearanceURI?: string | null;
        /**
         * Specifies the initial local transform of the added node.
         *
         * @default [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
         *
         * @see {@link Property.LOCAL_TRANSFORM}
         */
        localTransform?: [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ];
        /**
         * Specifies the initial pickable state of the added node.
         *
         * @default true
         *
         * @see {@link Property.PICKABLE}
         */
        pickable?: boolean;
        /**
         * Specifies the initial real state of the added node.
         *
         * @default false
         *
         * @see {@link Property.REAL}
         */
        real?: boolean;
        /**
         * Specifies the initial real occluder state of the added node.
         *
         * @default false
         *
         * @see {@link Property.REAL_OCCLUDER}
         */
        realOccluder?: boolean;
        /**
         * Specifies the initial render mode of the added node.
         *
         * @default RenderMode.UNSET
         *
         * @see {@link Property.RENDER_MODE}
         */
        renderMode?: RenderMode;
        /**
         * Specifies the initial comparison of the added node.
         *
         * @default ComparisonGroup.NONE
         *
         * @see {@link Property.COMPARISON_GROUP}
         */
        comparisonGroup?: ComparisonGroup;
        /**
         * Specifies the initial custom property states of the added node.
         *
         * @default undefined
         *
         * @see {@link Property}
         */
        customProperties?: {
            [customPropertyName: string]: Serializable;
        };
        /**
         * Specifies the initial attachment ID of the added node.
         *
         * @default undefined
         *
         * @see {@link AttachmentAPI}
         */
        attachmentId?: number;
        /**
         * Specifies the initial outlined state of the added node.
         *
         * @default false
         *
         * @see {@link Property.OUTLINED}
         */
        outlined?: boolean;
        /**
         * Specifies the initial ghosted state of the added node.
         *
         * @default false
         *
         * @see {@link Property.GHOSTED}
         */
        ghosted?: boolean;
        /**
         * Specifies the initial hidden state of the added node.
         *
         * @default false
         *
         * @see {@link Property.HIDDEN}
         */
        hidden?: boolean;
    }
    /**
     * Options for adding a new node to the scene.
     *
     * @see {@link InstanceGraphAPI.add}
     */
    interface AddNodeOptions {
        /**
         * Specifies the URI to the data resource.
         *
         * @default undefined
         */
        dataURI?: string;
        /**
         * Specifies the parent node ID of the added node.
         *
         * @default 0
         */
        parentId?: number;
        /**
         * The `autoExpand` flag can be used to automatically expand the added node to allow direct interaction with the underlying data.
         *
         * @default false
         *
         * @see {@link NodeRepresentation.EXPANDED_ASSEMBLY}
         */
        autoExpand?: boolean;
        /**
         * Specifies a custom label for the added node.
         *
         * @default undefined
         */
        label?: string;
        /**
         * Specifies the mime type of the data resource.
         *
         * Per default the mime type is automatically detected and an override is only necessary in special cases.
         * Valid mime types can be retrieved from the {@link HubAPI.requestSupportedContentTypes} method.
         *
         * @default undefined
         */
        mimeType?: string;
        /**
         * Specifies initial properties of the added node.
         * These become the default values for this node, i.e. {@link InstanceGraphAPI.resetProperty} and
         * {@link InstanceGraphAPI.resetProperties} will reset to these values.
         *
         * @default undefined
         */
        initialProperties?: InitialNodeProperties;
        /**
         * Specifies the strategy which is used when a data cache is requested from the instant3Dhub.
         *
         * @default CacheStrategy.REUSE
         */
        cacheStrategy?: CacheStrategy;
    }
    /**
     * ## InstanceGraphAPI
     *
     * ### Overview
     *
     * The InstanceGraphAPI allows for the control and manipulation of webvis content. The instance graph represents a scene graph-like
     * tree structure of nodes, where each node can contain links to 3D geometry and/or group other nodes.
     *
     * The {@link getProperty} and {@link setProperty} functions enable setting and retrieving properties of various types on the nodes.
     * Properties are used to modify any node-dependent data, such as color, local transformation, etc. While there is a
     * set of predefined node properties that webvis will respond to, the surrounding application can add any other custom
     * properties to the nodes using {@link registerCustomProperty}.
     *
     * All properties can be persisted by the different functionalities of the {@link SessionStorageAPI}.
     *
     * ### Quick Start
     *
     * ```ts
     * // Get the context
     * const context = webvis.getContext();
     *
     * // Add a new node to the InstanceGraph
     * const nodeId = context.add(
     * {
     *     dataURI: "urn:x-i3d:shape:box",
     *     label: "My node",
     *     initialProperties: { enabled: true }
     * });
     *
     * // Register a custom property
     * context.registerCustomProperty("myCustomProperty", 0);
     *
     * // Getting and setting properties
     * await context.setProperty(nodeId, "myCustomProperty", 42);
     * const [label, customProp] = await context.getProperties(nodeId, [webvis.Property.LABEL, "myCustomProperty"]);
     *
     * console.log(label, customProp); // My node 42
     * ```
     *
     * ### Events
     * The InstanceGraphAPI emits the following events:
     * - {@link CustomPropertyRegisteredEvent}
     * - {@link NodeAddedEvent}
     * - {@link NodeChangedEvent}
     * - {@link NodeErrorEvent}
     * - {@link NodePropertiesResetEvent}
     * - {@link NodeRemovedEvent}
     */
    interface InstanceGraphAPI {
        /**
         * Adds a new node to the instance graph.
         *
         * @param options Specifies the options for the new Node.
         *
         * @returns The ID of the added node
         */
        add(options: AddNodeOptions): number;
        /**
         * @deprecated This function will no longer be available in future webvis releases. Please use the add function with {@link AddNodeOptions} instead.
         *
         * Adds a new Node to the InstanceGraph.
         *
         * Triggers a {@link NodeAddedEvent}. In case of an error, a {@link NodeErrorEvent} is triggered.
         *
         * @param  dataURI     Specifies the URI to the data resource.
         * @param  parentID    Specifies the parent Node ID of the added Node.
         * @param  usage       The usage parameter allows to define how the resource should be inserted in the InstanceGraph.
         * @param  label       Specifies a custom label for the added Node.
         * @param  contentType Specifies the MimeType of the data resource.
         * @param  initialProperties Specifies initialProperties of the added Node.
         * @param  [cacheStrategy=CacheStrategy.REUSE] Specifies the strategy which is used when a data cache is requested from the Hub.
         *
         * @returns The ID of added node
         */
        add(
            dataURI: string,
            parentID?: number,
            usage?: UsageString,
            label?: string,
            contentType?: string,
            initialProperties?: InitialNodeProperties,
            cacheStrategy?: CacheStrategy,
        ): number;
        /**
         * Creates a custom node along with custom data which is stored in an attachment.
         *
         * The attached data can be accessed via the {@link Property.ATTACHMENT} property of the node.
         *
         * Triggers a {@link NodeAddedEvent}. In case of an error, a {@link NodeErrorEvent} is triggered.
         *
         * @param customNodeType  Specifies the custom node type.
         * @param data            Specifies the data of the custom node.
         * @param dataType        Specifies the type of the data. Default: "json".
         *
         * @returns The ID of the newly created custom node.
         *
         * @see {@link AttachmentAPI}
         */
        addCustomNode(customNodeType: string, data: any, dataType?: AttachmentType): number;
        /**
         * Removes the node for the given node ID from the scene and all related snapshots. If no node ID is supplied, all nodes are deleted.
         *
         * Triggers a {@link NodeRemovedEvent}.
         *
         * @param nodeID  The ID of the node that should be removed or undefined to remove all nodes.
         * @param safe    Performs a safe remove which interrupt the removal process if the node is part of one or more snapshots.
         *                Default: false.
         *
         * @returns A promise that resolves with the {@link RemoveState} once the operation is complete.
         *
         * @see {@link SessionStorageAPI}
         */
        remove(nodeID?: number | Array<number>, safe?: boolean): Promise<RemoveState>;
        /**
         * Sets the specified property to the given value on the node(s) with the specified ID(s).
         *
         * Triggers a {@link NodeChangedEvent}. Depending on the property it can trigger additional events,
         * e.g. {@link ActiveSceneVolumeChangedEvent}.
         *
         * @param nodeID    The ID(s) of the node(s) whose property has to be set.
         * @param property  The name of the {@link Property} that has to be set.
         * @param value     The new value of the specified property.
         * @param silent    The silent flag indicates that no NODE_CHANGED event is fired. Default: false
         */
        setProperty<T extends Property | string>(
            nodeID: number | Array<number>,
            property: T,
            value: PropertyType<T>,
            silent?: boolean,
        ): Promise<void>;
        /**
         * Returns the value of the specified property of the given node.
         *
         * @param nodeID    The ID(s) of the node(s) whose property should be read.
         * @param property  The name of the {@link Property} whose value should be read.
         *
         * @returns The retrieved value of the node property.
         */
        getProperty<T extends Property | string>(nodeID: number, property: T): Promise<PropertyType<T>>;
        /**
         * Returns the values of the specified properties of the given node.
         *
         * @param nodeID      The ID of the node whose properties should be read.
         * @param properties  The names of the {@link Property | Properties} whose values should be read.
         *
         * @returns           The retrieved values of the node's properties.
         */
        getProperties<T extends Property | string>(
            nodeID: number,
            properties: Array<T>,
        ): Promise<Array<PropertyType<T>>>;
        /**
         * Returns the full volume of the current scene. It is the smallest volume that contains all nodes of the scene,
         * regardless of their {@link Property.ENABLED} state.
         */
        requestFullSceneVolume(): Promise<BoxVolume>;
        /**
         * Returns the active volume of the current scene. It is the smallest volume that contains all nodes of the scene
         * that are enabled.
         *
         * @see {@link Property.ENABLED}
         */
        requestActiveSceneVolume(): Promise<BoxVolume>;
        /**
         * Resets the value of the specified property of the given node.
         *
         * Triggers a {@link NodePropertiesResetEvent}. If the property has changed,
         * this will additionally trigger a {@link NodeChangedEvent}.
         *
         * @param nodeID     The ID of the node whose {@link Property} should be reset.
         * @param property   The {@link Property} that should be reset.
         * @param recursive  If set to true, the {@link Property | properties} are reset recursively. Default: false
         */
        resetProperty(nodeID: number, property: Property | string, recursive?: boolean): Promise<void>;
        /**
         * Resets the value of the specified properties of the given node.
         *
         * Triggers a {@link NodePropertiesResetEvent}. If the property has changed,
         * this will additionally trigger a {@link NodeChangedEvent}.
         *
         * @param nodeID      The ID of the node whose {@link Property} should be reset.
         * @param properties  List of {@link Property | properties} which should be reset.
         * @param recursive   If set to true, the {@link Property | properties} are reset recursively. Default: false
         */
        resetProperties(nodeID: number, properties: (Property | string)[], recursive?: boolean): Promise<void>;
        /**
         * Traverses the subtree of a given node ID and collects all statistics (currently only available for AUX nodes).
         *
         * @param nodeType Specifies the target node type. Default: {@link NodeType.ALL}
         * @param nodeID   Specifies the node ID as the entry point of the subtree traversal. Default: 0
         * @returns        An object of type/count pairs.
         */
        getStatistics(nodeType?: NodeType, nodeID?: number, recursive?: boolean): Promise<any>;
        /**
         * Returns a JSON object containing the metadata for the given node ID.
         *
         * @param nodeID The ID of a node.
         *
         * @returns A JSON object containing the requested metadata.
         */
        getMetadata(nodeID: number): Promise<{
            [key: string]: string;
        }>;
        /**
         * Registers a new custom node property.
         *
         * Custom properties allow developers to hook into the node hierarchy with custom data. This enables the creation
         * of custom behaviors and interactions that can benefit from the NODE_* events, like the {@link NodeChangedEvent},
         * emitted by the InstanceGraphAPI.
         *
         * Triggers a {@link CustomPropertyRegisteredEvent}
         *
         * @param name         The name of the new property.
         * @param defaultValue Specifies the default value.
         * @param recursive    Defines whether the property is recursive. Default: false
         */
        registerCustomProperty(name: string, defaultValue: any, recursive?: boolean): void;
        /**
         * Returns a list of all existing AUX root node IDs below the specified subtree.
         *
         * @param scopeNodeId Specifies the top one node ID of the subtree to be searched. Default: 0
         *
         * @returns A list of AUX root node IDs.
         */
        requestAuxRootNodeIds(scopeNodeId?: number): Promise<Array<number>>;
        /**
         * Returns the L3D information of the specified node.
         *
         * @param targetNodeId Specifies the target node ID.
         *
         * @returns The L3D information of the specified node
         */
        requestL3DInformation(targetNodeId: number): Promise<any>;
        /**
         * Returns a list of all existing root node IDs below the specified subtree.
         *
         * @param scopeNodeId Specifies the top one node ID of the subtree to be searched. Default: 0
         * @param recursive   Specifies if the subtree is traversed recursively. Default: false
         *
         * @returns A list of root node IDs.
         */
        requestRootNodeIds(scopeNodeId?: number, recursive?: boolean): Promise<Array<number>>;
        /**
         * Returns a list of all existing runtime node IDs of a specified type.
         *
         * @param nodeType The node type to collect.
         * @param subType  The sub type to collect. Only used for custom nodes. See {@link Property.SUBTYPE}.
         *
         * @returns A list of runtime node IDs of the specified type.
         */
        collectRuntimeNodesOfType(nodeType: NodeType, subType?: string): Array<number>;
        /**
         * Sets a new parent for a given node ID.
         *
         * Triggers a {@link NodeChangedEvent}.
         *
         * @param nodeID The ID of the node whose parent should be set.
         * @param newParentID The ID of the new parent node.
         */
        setParent(nodeID: number, newParentID: number): void;
        /**
         * Checks if a node is deletable.
         *
         * @returns true if the node is deletable.
         */
        isNodeDeletable(nodeID: number): boolean;
        /**
         * Checks if a node is a specific type.
         *
         * @returns true if the node is of the specified type, otherwise false.
         */
        isNodeType(nodeID: number, nodeType: NodeType): boolean;
        /**
         * Inverts all enabled states.
         *
         * Triggers a {@link NodeChangedEvent}.
         */
        invertEnabledStates(): void;
        /**
         * Returns a list of all node IDs that are included in or overlapped by the specified bounding volume.
         *
         * @param boxVolume                Specifies the bounding volume.
         * @param includeOverlappingNodes  Specifies whether the result should include nodes which overlap the specified bounding volume as well. Default: false
         * @param includeDisabledNodes     Specifies whether the result should include nodes which are disabled as well. Default: false
         * @param forceExpand              If set to true, L3D instances may be expanded to find their leaf nodes. Default: false
         * @param scopeNodeId              Specifies the top one node ID of the subtree to be searched. Default: 0
         *
         * @returns List of all node IDs which are included or overlapped by the specified bounding volume.
         */
        requestNodeIdsByBoxVolume(
            boxVolume: BoxVolume,
            includeOverlappingNodes?: boolean,
            includeDisabledNodes?: boolean,
            forceExpand?: boolean,
            scopeNodeId?: number,
        ): Promise<number[]>;
        /**
         * @deprecated This function will no longer be available in future webvis releases. Use the {@link QueryAPI} instead.
         *
         * Traverses the subtree of a given node ID and collects all enabled aux nodes.
         *
         * @param nodeID Specifies the entry point of the subtree traversal. Default: 0
         *
         * @returns An Array of all enabled aux node IDs
         */
        getEnabledAuxNodes(nodeID: number): Promise<Array<number>>;
        /**
         * Returns the root node ID of the given node or topology element.
         *
         * @param target         Specifies the target node or topology element.
         * @param includeTarget  Controls if the target node itself can be returned as root node. If set to false and a
         *                       root node ID is passed in, it returns the next higher root node ID. Default: true
         *
         * @returns The root node ID of the given node ID or topology handle.
         */
        getRootNodeId(target: number | TopologyHandle, includeTarget?: boolean): number | undefined;
    }
    /**
     * This interfaces provides functions for working with BoxVolumes.
     * BoxVolumes are axis aligned bounding boxes (AABB). They are usually used to describe the minimal bounding box of a node.
     * They consist of six values, 3 for the minimum and 3 for the maximum corner.
     */
    interface BoxVolume {
        /**
         * Checks if the BoxVolume is valid.
         *
         * @returns true if the BoxVolume is valid, false otherwise
         */
        isValid(): boolean;
        /**
         * @ignore
         * Sets the BoxVolume to valid or invalid.
         *
         * @param valid true if the BoxVolume should be valid, false otherwise
         */
        setValid(valid?: boolean): void;
        /**
         * Creates a BoxVolume from an array.
         *
         * @param array the number array with 6 values, representing the minimum and maximum corners of the BoxVolume
         *
         * @returns true if the new BoxVolume is valid, false otherwise
         */
        fromArray(array: Float32Array | Array<number>): boolean;
        /**
         * Resets the BoxVolume to its initial state.
         */
        reset(): void;
        /**
         * Creates the BoxVolume from a center point and a size.
         *
         * @param center the center point of the new BoxVolume, consisting of the x, y, and z coordinates
         * @param size the size of the new BoxVolume, consisting of the width, height, and depth
         *
         * @returns the new BoxVolume
         */
        setFromCenterSize(
            center: [number, number, number] | Float32Array,
            size: [number, number, number] | Float32Array,
        ): BoxVolume;
        /**
         * Sets the minimum corner of the BoxVolume.
         * The point is specified as a single array with the format `[x, y, z]`.
         *
         * @param min the minimum corner of the BoxVolume
         */
        setMin(min: [number, number, number] | Float32Array): void;
        /**
         * Sets the maximum corner of the BoxVolume.
         * The point is specified as a single array with the format `[x, y, z]`.
         *
         * @param max the maximum corner of the BoxVolume
         */
        setMax(max: [number, number, number] | Float32Array): void;
        /**
         * Extends the BoxVolume to include the given point.
         * If the point is already inside the BoxVolume, nothing is done.
         *
         * @param p the point to include in the BoxVolume with the format `[x, y, z]`
         */
        includePoint(p: Float32Array): void;
        /**
         * Extends this box in such a way that both, `newMin` and `newMax`, are included.
         * If one of the given values is already inside the box, nothing is done (i.e., the box is potentially extended,
         * but never shrunk after calling this function).
         * If this box has no valid minimum / maximum yet, the given values are used.
         *
         * @param newMin The potential new minimum corner of the box in the format `[x, y, z]`.
         * @param newMax The potential new maximum corner of the box in the format `[x, y, z]`.
         */
        extend(newMin: [number, number, number] | Float32Array, newMax: [number, number, number] | Float32Array): void;
        /**
         * Extends a BoxVolume by another BoxVolume.
         * The resulting BoxVolume will span over the other BoxVolume, too. If the other BoxVolume is already inside
         * this BoxVolume, nothing is done.
         *
         * @param other another BoxVolume
         */
        extendByVolume(other: BoxVolume): void;
        /**
         * Extends a BoxVolume by a transformed BoxVolume.
         *
         * @param other the BoxVolume to extend by
         * @param transform the transformation matrix to apply to the `other` BoxVolume
         */
        extendByTransformedVolume(
            other: BoxVolume,
            transform?: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array,
        ): void;
        /**
         * Gets the minimum point of the BoxVolume.
         * The point is specified as a single array with the format `[x, y, z]`.
         *
         * @returns the minimum point of the BoxVolume
         */
        getMin(): Float32Array;
        /**
         * Gets the maximum point of the BoxVolume.
         * The point is specified as a single array with the format `[x, y, z]`.
         *
         * @returns the maximum point of the BoxVolume
         */
        getMax(): Float32Array;
        /**
         * Gets the center point of the BoxVolume.
         * The point is specified as a single array with the format `[x, y, z]`.
         *
         * @returns the center point of the BoxVolume
         */
        getCenter(): Float32Array;
        /**
         * Gets the size of the BoxVolume.
         *
         * @returns the size of the BoxVolume, specified as a single array with the format `[max_x - min_x, max_y - min_y, max_z - min_z]`.
         */
        getSize(): Float32Array;
        /**
         * Gets the radial vector of the BoxVolume.
         *
         * @returns A Float32Array representing the radial vector, which is half the difference
         *          between the maximum and minimum coordinates of the bounding box.
         */
        getRadialVec(): Float32Array;
        /**
         * Gets the diameter of the BoxVolume.
         *
         * @returns The diameter of the bounding box, which is the Euclidean distance between
         *          the minimum and maximum coordinates.
         */
        getDiameter(): number;
        /**
         * Sets the minimum and maximum corners of the BoxVolume to that of a given BoxVolume.
         *
         * @param other the BoxVolume to copy the corners from
         */
        copy(other: BoxVolume): void;
        /**
         * Creates a new BoxVolume from a given BoxVolume which is transformed by a matrix.
         *
         * @param matrix the transformation matrix
         * @param other the BoxVolume to transform
         *
         * @returns the new BoxVolume
         */
        transformFrom(
            matrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array,
            other: BoxVolume,
        ): BoxVolume;
        /**
         * Creates a new BoxVolume from a given BoxVolume, defined by an array, which is then transformed by a matrix.
         *
         * @param matrix the transformation matrix
         * @param otherVolume the BoxVolume to transform defined by a 6-element array of the minimum and maximum corners.
         *
         * @returns the new BoxVolume
         */
        transformFromArray(
            matrix: [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ] | Float32Array,
            otherVolume: number[],
        ): BoxVolume;
        /**
         * Checks if two BoxVolumes are overlapping.
         *
         * @returns true if the BoxVolumes are overlapping, false otherwise
         */
        overlaps(other: BoxVolume): boolean;
        /**
         * Checks if the given BoxVolume contains the other BoxVolume.
         *
         * @param other the other BoxVolume
         *
         * @returns true if the given BoxVolume contains the other BoxVolume, false otherwise
         */
        contains(other: BoxVolume): boolean;
        /**
         * Checks if the given BoxVolume equals the other BoxVolume.
         *
         * @param other the other BoxVolume
         *
         * @returns true if the given BoxVolume equals the other BoxVolume, false otherwise
         */
        equals(other: BoxVolume): boolean;
        /**
         * Gets the corner points of a BoxVolume.
         *
         * @returns An array of eight Float32Array objects. Each Float32Array represents a corner
         *          point of the bounding box in 3D space, with the fourth component set to 1.
         */
        getCornerPoints(): Array<Float32Array>;
    }
    /**
     * The NODE_REMOVED event occurs if a node has been removed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.NODE_REMOVED}
     * @see {@link InstanceGraphAPI.remove}
     */
    class NodeRemovedEvent extends WebVisEvent {
        targetNodeID: number;
        parentNodeID: number;
        /**
         * @param targetNodeID The ID of the target node.
         * @param parentNodeID The ID of the parent node.
         */
        constructor(targetNodeID: number, parentNodeID: number);
    }
    /**
     * This event occurs if one or more properties of the node have been reset.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.NODE_PROPERTIES_RESET}
     * @see {@link InstanceGraphAPI.resetProperties}
     */
    class NodePropertiesResetEvent extends WebVisEvent {
        targetNodeID: number;
        properties: Array<string>;
        recursive: boolean;
        /**
         * @param targetNodeID The ID of the target node.
         * @param properties The properties that have been reset.
         * @param recursive If set to true, the properties are reset recursively.
         */
        constructor(targetNodeID: number, properties: Array<string>, recursive: boolean);
    }
    /**
     * This event occurs if a node goes into an error state.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.NODE_ERROR}
     */
    class NodeErrorEvent extends WebVisEvent {
        targetNodeId: number;
        state: NodeState;
        /**
         * @param targetNodeId The ID of the target node.
         * @param state The State of the target node.
         */
        constructor(targetNodeId: number, state: NodeState);
    }
    /**
     * This event occurs if a node's {@link Property} has been changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.NODE_CHANGED}
     * @see {@link InstanceGraphAPI}
     */
    class NodeChangedEvent extends WebVisEvent {
        targetNodeID: number;
        sourceNodeID: number;
        property: Property | string;
        newValue: PropertyType<Property | string>;
        oldValue: PropertyType<Property | string>;
        /**
         * @param targetNodeID The ID of the target node.
         * @param sourceNodeID The ID of the source node.
         * @param property The property which has been changed.
         * @param newValue The new value of the property.
         * @param oldValue The old value of the property.
         */
        constructor(
            targetNodeID: number,
            sourceNodeID: number,
            property: Property | string,
            newValue: PropertyType<Property | string>,
            oldValue: PropertyType<Property | string>,
        );
        /**
         * Returns a map of all changes.
         *
         * @returns The map of all changes. The key is a {@link Property} and the value is the new value.
         */
        get changeList(): {
            [key: string]: any;
        };
    }
    /**
     * This event occurs if a node has been added.
     *
     * The event will only be triggered if the listener is registered on a parent node
     * of the added node. For more information, see {@link EventAPI.registerListener}.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.NODE_ADDED}
     * @see {@link InstanceGraphAPI.add}
     */
    class NodeAddedEvent extends WebVisEvent {
        targetNodeID: number;
        parentNodeID: number;
        nodeType: NodeType;
        dataUri: string;
        targetNodeDepth: number;
        label: string;
        properties?: {
            [key: string]: any;
        };
        usage?: UsageString;
        subType?: string;
        contentType?: string;
        /**
         * @param targetNodeID The ID of the target node.
         * @param parentNodeID The ID of the parent node.
         * @param nodeType The type of the target node.
         * @param dataUri The data URI of the target node.
         * @param targetNodeDepth The depth of the target node.
         * @param label The label of the target node.
         * @param properties A map of all properties on the node.
         * @param usage The usage of the target node.
         * @param subType The subtype of the target node.
         * @param contentType The content type of the target node.
         */
        constructor(
            targetNodeID: number,
            parentNodeID: number,
            nodeType: NodeType,
            dataUri: string,
            targetNodeDepth: number,
            label: string,
            properties?: {
                [key: string]: any;
            },
            usage?: UsageString,
            subType?: string,
            contentType?: string,
        );
    }
    /**
     * @ignore
     *
     * @event
     * @hideconstructor
     */
    class InternalParentChangedEvent extends WebVisEvent {
        nodePath: [number[], number];
        parentPath: [number[], number];
        /**
         * @param nodePath The path of the node which should be moved.
         * @param parentPath The path of the new parent node.
         */
        constructor(nodePath: [number[], number], parentPath: [number[], number]);
    }
    /**
     * @ignore
     *
     * The INTERNAL_NODES_REMOVED event occurs if one or more of the Nodes have been removed.
     *
     * @event
     * @hideconstructor
     */
    class InternalNodesRemovedEvent extends WebVisEvent {
        targetNodeIDs: Array<number>;
        targetNodePaths: [number[], number][];
        /**
         * @param targetNodeIDs The IDs of the target Nodes.
         * @param targetNodePaths The paths of the target Nodes.
         */
        constructor(targetNodeIDs: Array<number>, targetNodePaths: [number[], number][]);
    }
    /**
     * @ignore
     *
     * The INTERNAL_NODES_CHANGED event occurs if multiple Nodes have been changed.
     *
     * @event
     * @hideconstructor
     */
    class InternalNodesChangedEvent extends WebVisEvent {
        targetNodeIDs: Array<number>;
        targetNodePaths: [number[], number][];
        propertyName: string;
        propertyValue: any;
        /**
         * @param targetNodeIDs The IDs of the changed Nodes.
         * @param targetNodePaths The paths of the changed Nodes.
         * @param propertyName  The name of the changed Property.
         * @param propertyValue The new value of the Property.
         */
        constructor(
            targetNodeIDs: Array<number>,
            targetNodePaths: [number[], number][],
            propertyName: string,
            propertyValue: any,
        );
    }
    /**
     * This event is fired when a custom property has been registered.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.CUSTOM_PROPERTY_REGISTERED}
     * @see {@link InstanceGraphAPI.registerCustomProperty}
     */
    class CustomPropertyRegisteredEvent extends WebVisEvent {
        customPropName: string;
        recursive: boolean;
        defaultValue: any;
        /**
         * @param customPropName The name of the custom property
         * @param recursive The recursive state of the new custom property
         * @param defaultValue specifies the property default value
         */
        constructor(customPropName: string, recursive: boolean, defaultValue: any);
    }
    /**
     * The CUSTOM_NODE_ADDED event occurs if a custom Node has been added.
     *
     * @event
     * @hideconstructor
     * @deprecated This event is not used anymore. It has been replaced by the {@link NodeAddedEvent}.
     */
    class CustomNodeAddedEvent extends WebVisEvent {
        targetNodeID: number;
        customType: string;
        attachmentID: number;
        /**
         * @param targetNodeID The ID of the target Node.
         * @param customType The custom type of the target Node.
         * @param attachmentID The ID of the attachment.
         */
        constructor(targetNodeID: number, customType: string, attachmentID: number);
    }
    /**
     * This event occurs if the active scene volume has been changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link EventType.ACTIVE_SCENE_VOLUME_CHANGED}
     */
    class ActiveSceneVolumeChangedEvent extends WebVisEvent {
        volume: BoxVolume;
        /**
         * @param volume The new active scene volume
         */
        constructor(volume: BoxVolume);
    }
    /**
     * The usage for the node is set automatically. When {@link AddNodeOptions.autoExpand} is set to `true`, the
     * usage becomes "open", which means that the node will be expanded immediately when added.
     * Otherwise, the usage is "auto", meaning that the node will be expanded when required.
     *
     * @see {@link NodeRepresentation}
     */
    type UsageString = "open" | "closed" | "auto";
    /**
     * The possible Render Modes. The render mode defines how the geometry is rendered.
     *
     * It can be set globally for a single viewer using the {@link ViewerSettingStrings.RENDER_MODE} setting
     * or for individual nodes using the {@link Property.RENDER_MODE} property, the latter taking precedence.
     * Furthermore, the method {@link ViewerAPI.forceRenderMode} overrides both settings.
     */
    enum RenderMode {
        /**
         * Render only the faces of the geometry.
         */
        Faces = 0,
        /**
         * Render only the edges of the geometry.
         */
        Topology = 1,
        /**
         * Render the faces and the edges of the geometry.
         */
        FacesTopology = 2,
        /**
         * Render the faces of the geometry as occlude.
         */
        Occluder = 3,
        /**
         * Render the faces of the geometry as occlude plus the edges of the geometry.
         */
        OccluderTopology = 4,
        /**
         * Renders the geometry with currently set {@link ViewerSettingStrings.RENDER_MODE} of the individual viewers.
         */
        Unset = 5,
    }
    /**
     * The properties a node can have. Node properties can be set and retrieved using the {@link InstanceGraphAPI}.
     *
     * Using {@link InstanceGraphAPI.setProperty} will trigger a {@link EventType.NODE_CHANGED} event.
     */
    enum Property {
        /**
         * Specifies whether an AUX node can be enabled.
         *
         * If this is true, the AUX node can be shown by setting the {@link Property.ENABLED}.
         *
         * @default true
         */
        ACTIVATABLE = "activatable",
        /**
         * The Animation property is used to assign an animation to a node.
         *
         * @default null
         *
         * @see {@link AnimationAPI}
         */
        ANIMATION = "animation",
        /**
         * @ignore
         *
         * Overlay the node's appearance with a pattern.
         *
         * @default null
         */
        APPEARANCE_PATTERN = "appearancePattern",
        /**
         * The appearance URI of a node. This defines the node's visual appearance using a URN that encodes color and transparency.
         * Appearance URNs always start with `urn:X-l3d:color:` followed by a format and a color specification. Supported formats include:
         *
         * - **Hexadecimal colors**: Specify a color using the `rgb` format, e.g., `urn:X-l3d:color:rgb:FF0000` for red (`#FF0000`).
         * - **Hexadecimal with transparency**: Use the `rgba` format, e.g., `urn:X-l3d:color:rgba:FF000080` for 50% transparent red.
         * - **Transparency only**: Use the `a` format to set only the opacity in hexadecimal format, e.g., `urn:X-l3d:color:a:80` for 50% opacity.
         * - **Named colors**: Specify standard CSS color names, e.g., `urn:X-l3d:color:red`.
         *
         * For convenience, you can omit the `urn:X-l3d:color:` prefix and use the color or transparency code directly, such as
         * `"FF0000"`, `"FF000080"`, or `"80"`.
         *
         * Set to null to reset the appearance.
         *
         * @default null
         */
        APPEARANCE_URI = "appearanceURI",
        /**
         * The attachment property is used to attach data to a node. This property contains either the attachment ID or
         * the attachment data itself.
         *
         * @default undefined
         *
         * @see {@link AttachmentAPI}
         */
        ATTACHMENT = "attachment",
        /**
         * Contains additional information for AUX nodes.
         *
         * @default undefined
         */
        AUX_CONTENT = "auxContent",
        /**
         * Specifies whether an AUX node is enabled.
         *
         * If set to true, all AUX nodes associated with the node become visible.
         *
         * @default false
         */
        AUX_ENABLED = "auxEnabled",
        /**
         * Contains the IDs of all related AUX nodes.
         *
         * There are two kinds of AUX nodes. PMIs (Product and Manufacturing Information) are used to display annotations
         * and measurements, or to show additional information about a node. The second kind are model views, which can
         * contain PMIs as well as camera views that place the camera and the model at a specific position.
         *
         * @default undefined
         */
        AUX_NODES = "auxNodes",
        /**
         * Contains the IDs of all child nodes.
         *
         * @default []
         */
        CHILDREN = "children",
        /**
         * Contains the {@link ComparisonGroup} of a node.
         *
         * @default ComparisonGroup.NONE
         *
         * @see {@link ViewerAPI.enterColorCompareMode}
         * @see {@link InteractionMode.COLOR_COMPARISON}
         */
        COMPARISON_GROUP = "comparisonGroup",
        /**
         * Indicates the depth of a node within the hierarchy. Root nodes have a depth of 1,
         * and each subsequent level of child nodes increases the depth by 1.
         *
         * @default 0
         */
        DEPTH = "depth",
        /**
         * Specifies whether a node is enabled. Toggles the visibility of the according 3D geometry if a viewer is attached.
         *
         * @default false
         *
         * @see {@link ViewerAPI}
         */
        ENABLED = "enabled",
        /**
         * Specifies whether a node is ghosted. Ghosted nodes become transparent and can't be interacted with,
         * which is useful for highlighting other nodes in the scene. This can be used to localize otherwise occluded
         * nodes in your 3D data.
         *
         * This effect can be further customized by {@link ViewerSettingStrings.GHOSTED_SCENE_OPACITY}.
         *
         * @default false
         */
        GHOSTED = "ghosted",
        /**
         * Contains the global transformation matrix of a node. Global transformations are relative to the world coordinate system,
         * which is always in meters. Hence, the translational component of the local and global transformation is set in meters.
         * For top-level nodes, the global transformation is equal to the local transformation. For child nodes, the global transformation
         * is calculated by multiplying the parent's global transformation with the child's local transformation.
         *
         * The global transformation will be updated when manipulating the {@link Property.LOCAL_TRANSFORM} property.
         *
         *    number, number, number, number,
         *    number, number, number, number,
         *    number, number, number, number,
         *    number, number, number, number
         * ] | Float32Array
         * @default mat4.create()
         */
        GLOBAL_TRANSFORM = "globalTransform",
        /**
         * Contains the axis-aligned global box volume of a node in meters.
         *
         * Volumes are propagated throughout the node tree, meaning they will update when the {@link Property.LOCAL_TRANSFORM}
         * property of the node itself or related nodes (parents or children) is modified.
         *
         * @default new BoxVolume()
         */
        GLOBAL_VOLUME = "globalVolume",
        /**
         * Specifies whether a node has an AUX node structure attached.
         *
         * If this is true, the AUX nodes can be accessed by reading the {@link Property.AUX_NODES}.
         *
         * @default false
         */
        HAS_AUX_STRUCTURE = "hasAuxStructure",
        /**
         * Specifies whether a node has variants.
         *
         * The node's variants can be accessed using {@link VariantsAPI.requestVariants}.
         *
         * @default false
         *
         * @see {@link VariantsAPI}
         */
        HAS_VARIANTS = "hasVariants",
        /**
         * Specifies whether a node is hidden. This property is used to fully hide nodes from the scene.
         *
         * @default false
         */
        HIDDEN = "hidden",
        /**
         * @deprecated Property INFO_STATE is deprecated and will be removed in the next release. Please use {@link STATE} instead.
         */
        INFO_STATE = "infoState",
        /**
         * Contains the label of a node.
         *
         * @default ""
         */
        LABEL = "label",
        /**
         * Contains the local transformation matrix of a node. Notice that the world coordinate system is always in meters,
         * hence the translational component of the local and global transformation is set in meters.
         *
         * Local transformations are defined in the 3D data but can be changed via this property. Currently, you can only
         * transform root nodes of linked parts.
         *
         * Changing the local transform will update the {@link Property.GLOBAL_TRANSFORM} and {@link Property.GLOBAL_VOLUME} properties.
         *
         *   number, number, number, number,
         *   number, number, number, number,
         *   number, number, number, number,
         *   number, number, number, number
         * ] | Float32Array
         * @default mat4.create()
         */
        LOCAL_TRANSFORM = "localTransform",
        /**
         * Contains the axis-aligned local box volume of a node in meters.
         *
         * The local volume will be updated when manipulating the {@link Property.LOCAL_TRANSFORM} property.
         *
         * @default new BoxVolume()
         */
        LOCAL_VOLUME = "localVolume",
        /**
         * Contains the IDs of all model views that are attached to a node. Model views are a certain kind of AUX node that can contain
         * PMIs as well as camera views that place the camera and the model at a specific position.
         *
         * Model views can be enabled by setting the {@link Property.AUX_ENABLED} property of the model view ID to true.
         *
         * @default undefined
         */
        MODEL_VIEWS = "modelViews",
        /**
         * Contains the names of a node.
         *
         * @default []
         */
        NAMES = "names",
        /**
         * Contains the {@link NodeRepresentation} of a node.
         *
         * @default NodeRepresentation.ASSEMBLY
         */
        NODE_REPRESENTATION = "nodeRepresentation",
        /**
         * Whether the node is outlined or not. If enabled, the outlined node's silhoutte is highlighted even if it is
         * occluded by other geometry. This can be used to localize otherwise occluded nodes or small details in your
         * 3D data.
         *
         * This effect can be customized via {@link ViewerSettingStrings.OUTLINE_COLOR}, {@link ViewerSettingStrings.OUTLINE_COLOR_OCCLUDED},
         * {@link ViewerSettingStrings.OUTLINE_INNER_RADIUS} and {@link ViewerSettingStrings.OUTLINE_OUTER_RADIUS}.
         *
         * @default false
         */
        OUTLINED = "outlined",
        /**
         * Contains the ID of the parent node.
         *
         * @default undefined
         */
        PARENT = "parent",
        /**
         * Specifies whether a node is pickable. This disabled interactions on the node but still allows it to be visible.
         *
         * @default true
         */
        PICKABLE = "pickable",
        /**
         * The real property is used by the {@link RealityAPI} to specify whether a node will be marked as tracking target for the {@link ServiceType.REALITY | Reality service}.
         * The expected value is an {@link EnabledState}. Note that true will be mapped to {@link EnabledState.Enabled} and false to {@link EnabledState.Disabled}.
         *
         * @default false
         */
        REAL = "real",
        /**
         * When set to true, the node will be used as an occluder in the hypothesis generation process.
         *
         * @default false
         */
        REAL_OCCLUDER = "realOccluder",
        /**
         * Contains the {@link RenderMode} of a node. If set to anything other than {@link RenderMode.Unset}, this property overrides
         * the {@link ViewerSettingStrings.RENDER_MODE} setting of the viewer but gets overridden by the {@link ViewerAPI.forceRenderMode} method.
         *
         * @default RenderMode.Unset
         */
        RENDER_MODE = "renderMode",
        /**
         * @deprecated Property RESOURCE_STATE is deprecated and will be removed in the next release. Please use {@link STATE} instead.
         */
        RESOURCE_STATE = "resourceState",
        /**
         * Specifies whether a node is selected.
         *
         * @default false
         *
         * @see {@link SelectionAPI}
         */
        SELECTED = "selected",
        /**
         * Contains the {@link NodeState} of a node.
         *
         * @default NodeState.CREATED
         */
        STATE = "state",
        /**
         * A subtype can be set for custom nodes next to the {@link NodeType}. It can be used to further
         * specify the type of a customly created node.
         *
         * @default undefined
         */
        SUBTYPE = "subType",
        /**
         * Contains the {@link NodeType} of a node.
         *
         * @default nodeType.STRUCTURE
         */
        TYPE = "type",
        /**
         * Can contain any type of serializable data that is attached to a node.
         *
         * @default undefined
         */
        USER_DATA = "userData",
    }
    /**
     * Describes the type of the Node.
     */
    enum NodeType {
        NONE = 0, // 0x000000000000
        STRUCTURE = 1, // 0x000000000001
        AUX = 2, // 0x000000000010
        CUSTOM = 4, // 0x000000000100
        ALL = 7, // 0x000000000111
        COLLECTION = 8, // 0x000000001000
        CAPPING = 17, // 0x000000010001
        MODELVIEW = 18, // 0x000000010010
        CLIPPLANE = 34, // 0x000000100010
        CLIPROOM = 66, // 0x000001000010
        MARKER = 130, // 0x000010000010
        TEXT = 258, // 0x000100000010
        DIMENSION = 514, // 0x001000000010
        ANNOTATION = 1026,
    }
    /**
     * The NodeStateCategory is used to categorize a {@link NodeState} into a specific class. The category can be determined by
     * dividing the state by 1000 and rounding down. For example, the category {@link INITIALIZATION} contains all node states between
     * 1000 and 1999.
     */
    enum NodeStateCategory {
        /**
         * Contains all initialization related states.
         */
        INITIALIZATION = 1,
        /**
         * Contains all processing related states.
         */
        PROCESSING = 2,
        /**
         * Contains all successful states.
         */
        FINISHED_SUCCESSFUL = 3,
        /**
         * Contains all warning related states.
         */
        FINISHED_WITH_WARNING = 4,
        /**
         * Contains all error related states.
         */
        FINISHED_WITH_ERROR = 5,
    }
    /**
     * The NodeState describes the current state of a Node and its referenced data.
     * The NodeState is grouped by the {@link NodeStateCategory} which can be determined by dividing the state by 1000.
     *
     * ```typescript
     *  const category : NodeStateCategory = Math.floor(nodeState / 1000);
     * ```
     *
     * @see {@link InstanceGraphAPI}
     */
    enum NodeState {
        /**
         * Indicates that the node is created.
         */
        CREATED = 1000,
        /**
         * Indicates that the processing is requested.
         */
        REQUESTED = 2000,
        /**
         * Indicates that the processing is in progress.
         */
        PROCESSING = 2001,
        /**
         * Indicates that the referenced data is ready to use.
         */
        READY = 3000,
        /**
         * Indicates a general warning that doesn't match any of the specific ones.
         */
        WARNING = 4000,
        /**
         * Indicates that one or more nodes in the subtree have an error.
         */
        WARNING_SUBTREE = 4001,
        /**
         * Indicates a general error that doesn't match any of the specific ones.
         */
        ERROR = 5000,
        /**
         * Indicates a problem with the data authorization.
         */
        ERROR_AUTHORIZATION = 5001,
        /**
         * Indicates a problem with the data processing.
         */
        ERROR_PROCESSING = 5002,
        /**
         * Indicates a problem with the network connection.
         */
        ERROR_CONNECTION = 5003,
        /**
         * Indicates a problem with the license checkout.
         */
        ERROR_LICENSE = 5004,
        /**
         * Indicates a problem with the input URI validation.
         */
        ERROR_VALIDATION = 5005,
    }
    /**
     * Describes the resource state the node is in.
     * @deprecated NodeResourceState is deprecated and will be removed in the next release. Please use {@link NodeState} instead.
     */
    enum NodeResourceState {
        INIT = 0,
        REQUESTED = 1,
        LOADING = 2,
        UNKNOWN_ERROR = 3,
        CACHE_DATA_ERROR = 4,
        CACHE_REF_ERROR = 5,
        CACHE_AUTH_ERROR = 6,
        NETWORK_ERROR = 7,
        LICENSE_ERROR = 8,
        WAITING = 9,
        READY = 10,
        EMPTY = 11,
        UNLOADED = 13,
        CACHE_DEPENDENCY_ERROR = 14,
        UNREACHABLE = 15,
        NUM_CLIENT_RESOURCE_STATES = 16,
    }
    /**
     * Describes the representation of a node.
     */
    enum NodeRepresentation {
        /**
         * The node is a leaf node with geometry.
         */
        PART = 1,
        /**
         * The node is a leaf node which contains a linked resource.
         */
        LINKED_PART = 2,
        /**
         * The node has child nodes and does not contain a linked resource.
         */
        ASSEMBLY = 4,
        /**
         * The node is an empty leaf node.
         */
        EMPTY_PART = 8,
        /**
         * The node contains a linked resource which is collapsed.
         */
        COLLAPSED_ASSEMBLY = 16,
        /**
         * The node contains a linked resource which is expanded.
         */
        EXPANDED_ASSEMBLY = 64,
    }
    /**
     * Describes, if the info state of a Node.
     * @deprecated NodeInfoState is deprecated and will be removed in the next release. Please use {@link NodeState} instead.
     */
    enum NodeInfoState {
        DEFAULT = 0,
        MISSING_DATA = 4,
        MISSING_DATA_IN_SUBTREE = 8,
        WARNINGS = 10,
        ERRORS = 5,
    }
    /**
     * Describes, if a node is (partially) enabled.
     */
    enum EnabledState {
        /**
         * The node or one of its properties are disabled.
         */
        Disabled = 0,
        /**
         * The node or one of its properties are enabled.
         */
        Enabled = 1,
        /**
         * The node or one of its properties are partially enabled, which means some of its children are enabled and some are disabled.
         */
        Partial = 2,
    }
    /**
     * Describes, if a node is part of a ColorComparison and if yes, in which group.
     */
    enum ComparisonGroup {
        NONE = 0,
        /**
         * Group A for color comparison (see {@link ViewerAPI.enterColorCompareMode}).
         */
        A = 1,
        /**
         * Group B for color comparison (see {@link ViewerAPI.enterColorCompareMode}).
         */
        B = 2,
        /**
         * Group for XR edge comparison (see {@link ViewerXREdgeCompareAPI}).
         */
        XR_EDGE = 3,
    }
    /**
     * Defines the strategy which is used when a data cache is requested from the Hub.
     */
    enum CacheStrategy {
        /**
         * Reuses previously generated cache results if available.
         */
        REUSE = 0,
        /**
         * Ignores previously generated cache results and forces the cache regeneration for the input data.
         */
        REGENERATE = 1,
        /**
         * Ignores previously generated cache results and forces the cache regeneration for the input data and linked data below.
         */
        REGENERATE_RECURSIVE = 2,
    }
    interface UserFeedback {
        rating: number;
        message: string;
    }
    /**
     * Defines the information about a content type. A content type stores information about the format which could be transcoded by the backend transcoder service.
     *
     * @see {@link HubAPI.requestSupportedContentTypes}
     */
    interface ContentType {
        /**
         * Homepage for more information on a contentType.
         *
         * @example "http://www.web3d.org"
         */
        home?: string;
        /**
         * The identifier of the contentType.
         *
         * @example "x3d-xml"
         */
        id: string;
        /**
         * Information whether the contentType is experimental or not.
         */
        isExperimental?: boolean;
        /**
         * The full name of a contentType.
         *
         * @example "X3D, XML Encoding"
         */
        label: string;
        /**
         * The mimeTypes of a contentType.
         *
         * @example ["model/x3d+xml", "model/x3d"]
         */
        mimeTypes?: Array<string>;
        /**
         * The specification of a contentType.
         *
         * @example "ISO/IEC IS 19775-1:2013"
         */
        spec?: string;
        /**
         * Supported suffixes of a contentType.
         *
         * @example ["x3d", "x3dz", "x3z"]
         */
        suffixes?: Array<string>;
        /**
         * The version of the contentType.
         */
        version?: string;
    }
    /**
     * ## webvis: The HubAPI
     *
     * ### Overview
     *
     * The **HubAPI** provides functionalities to get information from the instant3Dhub-backend. This includes:
     * - requesting basic hub information
     * - requesting service states
     *
     * Every webvis instance requires a backend connection.
     * The backend address is defined by {@link SettingStrings.HUB_URL}.
     * Webvis will automatically connect to the backend in the background using the specified huburl.
     *
     * ### Quick Start
     *
     * Example: Request the supported content types from the backend.
     *
     * ```javascript
     * const context = webvis.getContext();
     *
     * const contentTyes = await context.requestSupportedContentTypes();
     * ```
     *
     * ### Events
     *
     * The following events are associated with the HubAPI:
     * - {@link ServiceConnectionLostEvent}: This event occurs when the connection to a service gets lost.
     * - {@link ServiceErrorEvent}: This event occurs when the service goes into an error.
     * - {@link ServiceStateChangedEvent}: This event occurs when the state of a service changes.
     */
    interface HubAPI {
        /**
         * Request a list of (model) data formats which are supported by the connected instance3Dhub-backend.
         * If requested before the connection to the Hub is established, it will return the local list of content types.
         *
         * @returns {Promise<Array<ContentType>>} Returns a Promise which contains the list of all supported data formats.
         */
        requestSupportedContentTypes(): Promise<Array<ContentType>>;
        /**
         * Request all supported render setups if one or more are available.
         * The render setup is a key value pair where the key is the name of the render setup and the value could be
         * used as an input value for the {@link ViewerSettingStrings.RENDER_SETUP} setting.
         *
         * @returns {Promise<Array<{name:string, value:string}>>} Returns a Promise which contains the list of supported render setups.
         */
        requestSupportedRenderSetups(): Promise<
            Array<{
                name: string;
                value: string;
            }>
        >;
        /**
         * Requests all available services of the backend and their current state.
         *
         * @returns {Promise<Map<ServiceType, ServiceState>>} Returns a Promise which contains a map of all available services and their states.
         */
        requestServiceStates(): Promise<Map<ServiceType, ServiceState>>;
        /**
         * Request the current version of the connected instant3Dhub-backend. May return undefined for older versions.
         *
         * @returns {Promise<string | undefined>} Returns a Promise which contains a string containing the version of the connected backend.
         */
        requestHubVersion(): Promise<string | undefined>;
    }
    /**
     * This event occurs if the state of a service changes.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link HubAPI}
     * @see {@link EventType.SERVICE_STATE_CHANGED}
     */
    class ServiceStateChangedEvent extends WebVisEvent {
        service: ServiceType;
        state: ServiceState;
        /**
         * @param service The name of the service.
         * @param state The new status of the service.
         */
        constructor(service: ServiceType, state: ServiceState);
    }
    /**
     * This event occurs if a service goes into an error state.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link HubAPI}
     * @see {@link EventType.SERVICE_ERROR}
     */
    class ServiceErrorEvent extends WebVisEvent {
        service: ServiceType;
        state: ServiceState;
        /**
         * @param service The name of the service.
         * @param state The new state of the service.
         */
        constructor(service: ServiceType, state: ServiceState);
    }
    /**
     * This event occurs if the connection to a service has been lost.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link HubAPI}
     * @see {@link EventType.SERVICE_CONNECTION_LOST}
     */
    class ServiceConnectionLostEvent extends WebVisEvent {
        service: string;
        status: number;
        /**
         * @param service The name of the service.
         * @param status The status code of the connection.
         */
        constructor(service: string, status: number);
    }
    /**
     * Represents the various services provided by the instant3dhub-backend. The ServiceType is used to identify which services are available from the backend.
     *
     * The state of a service can be obtained by using the {@link HubAPI.requestServiceStates} function, which returns a {@link ServiceState} for each service.
     *
     * @see {@link HubAPI.requestServiceStates}
     * @see {@link ServiceState}
     */
    enum ServiceType {
        /**
         * The service for retrieving geometric-, structural- as well as meta-data.
         */
        DELIVERY = "DeliveryService",
        /**
         * The service for geometry operations.
         * Provides interactive geometry capping functionality.
         *
         * @see {@link ClipPlaneAPI.createCapping}
         */
        GEOMETRY = "GeometryService",
        /**
         * Indicates the Hub2Resource as a service.
         */
        HUB_2_RESOURCE = "Hub2ResourceService",
        /**
         * Indicates the Hub3Resource as a service.
         */
        HUB_3_RESOURCE = "Hub3ResourceService",
        /**
         * The service for interactive measurements.
         *
         * @see {@link MeasurementAPI}
         */
        MEASUREMENT = "MeasurementService",
        /**
         * The service for dynamic queries of non-geometric data.
         *
         * @see {@link QueryAPI}
         */
        QUERY = "QueryService",
        /**
         * The modeltracking functionality for the RealityAPI.
         *
         * @see {@link RealityAPI}
         */
        REALITY = "RealityService",
        /**
         * The service for collaborating simultaneously with multiple users.
         */
        SHARED_SESSION = "SharedSessionService",
        /**
         * The service for a persistent storage API for storing and retrieving 3D spaces.
         *
         * @see {@link SessionStorageAPI.storeSession}
         */
        SPACE_STORE = "SpaceStoreService",
        /**
         * The service for an interactive visualization using {@link RenderSetup.HYBRID}
         *
         * @see {@link ViewerAPI}
         * @see {@link ViewerSettingStrings.RENDER_SETUP}
         */
        VIS = "VisService",
    }
    /**
     * The ServiceStateCategory is used to categorize a {@link ServiceState} into a specific class.
     */
    enum ServiceStateCategory {
        /**
         * Contains all initialization related States.
         */
        IDLE = 1,
        /**
         * Contains all connection and setup related States.
         */
        CONNECTING = 2,
        /**
         * Contains all connected related States.
         */
        CONNECTED = 3,
        /**
         * Contains all warning related States.
         */
        WARNING = 4,
        /**
         * Contains all error related States.
         */
        ERROR = 5,
        /**
         * Contains all shutdown related States.
         */
        SHUTDOWN = 6,
    }
    /**
     * The {@link ServiceState} describes the current state of a Service.
     * The ServiceState is grouped by the {@link ServiceStateCategory} which can be discovered by dividing the State by 1000.
     *
     *  ```javascript
     *  const category = Math.floor(serviceState / 1000);
     * ```
     *
     * @see {@link ServiceStateCategory}
     * @see {@link ServiceType}
     */
    enum ServiceState {
        /**
         * Indicates that the Service was created.
         */
        CREATED = 1000,
        /**
         * Indicates that the Service is requested.
         */
        REQUESTED = 2000,
        /**
         * Indicates that the Service is ready to use.
         */
        READY = 3000,
        /**
         * Indicates a general Warning that doesn't match any of the specific ones.
         */
        WARNING = 4000,
        /**
         * Indicates that the HTTP connection to the Service is not responding.
         */
        WARNING_HTTP_NOT_RESPONDING = 4001,
        /**
         * Indicates that the WS connection to the Service is not responding.
         */
        WARNING_WS_NOT_RESPONDING = 4002,
        /**
         * Indicates that the HTTP and WS connection to the Service is not responding.
         */
        WARNING_HTTP_AND_WS_NOT_RESPONDING = 4003,
        /**
         * Indicates a general Error that doesn't match any of the specific ones.
         */
        ERROR = 5000,
        /**
         * Indicates that the Service was not responding for a longer time and the automatic shutdown timeout was reached.
         */
        ERROR_SHUTDOWN_TIMEOUT_REACHED = 5001,
        /**
         * Indicates that a WS connection closed abnormally.
         */
        ERROR_ABNORMAL_WS_CLOSE = 5002,
        /**
         * Indicates that there was a problem to request the Service from the backend.
         */
        ERROR_REQUEST = 5003,
        /**
         * Indicates that there was a problem to acquire a license for the Service.
         */
        ERROR_NO_LICENSE = 5004,
        /**
         * Indicates that the Service is shutting down
         */
        SHUTDOWN = 6000,
    }
    /**
     * A listener which can be registered via the {@link FrameAPI}. When registered,
     * it is executed on every tick of the internal update loop of the webvis
     * context. The listener receives the timestamp of the current tick and
     * the elapsed time since the last tick.
     *
     * @see {@link FrameAPI}
     *
     * @param time    Timestamp of the current tick of the internal update loop,
     *                in milliseconds.
     * @param elapsed Elapsed time since the last tick of the internal update loop,
     *                in milliseconds.
     */
    type FrameListener = (time: number, elapsed: number) => void;
    /**
     * ## FrameAPI
     *
     * ### Overview
     *
     * The FrameAPI provides functions for registering and unregistering
     * {@link FrameListener frame listeners} which are executed on every tick
     * of the internal update loop of the webvis context.
     *
     * The FrameAPI might be used to:
     * - process events that have been collected between frames in a batched manner
     * - perform complex animations that cannot be implemented using the {@link AnimationAPI}
     * - record properties of the scene, like the camera position and orientation
     *
     * ### Quick Start
     *
     * To get started with the FrameAPI, you can register a listener via the webvis context:
     * ```javascript
     * const context = webvis.getContext();
     *
     * // Define your frame listener
     * const myFrameListener = (time, elapsed) =>
     * {
     *     console.log(`Time of current tick: ${time} ms. Time since last tick: ${elapsed} ms.`);
     * };
     *
     * // Register your frame listener
     * context.registerFrameListener(myFrameListener);
     *
     * // Later unregister your frame listener
     * context.unregisterFrameListener(myFrameListener);
     * ```
     *
     * ### Execution Behavior
     *
     * The execution frequency of a frame listener will usually match the refresh rate
     * of the display, which is typically around 60 Hz. Frame listener execution might
     * be throttled when the document is not visible (e.g., when the browser tab is in
     * the background).
     *
     * When executed, a listener receives the timestamp of the current tick of the
     * internal update loop and the elapsed time since the last tick. Custom logic
     * should never assume a specific update rate, but instead be based on the provided
     * timing information.
     *
     * @see {@link FrameListener}
     * @see {@link AnimationAPI}
     */
    interface FrameAPI {
        /**
         * Registers a frame listener which is executed on every tick of the
         * internal update loop of the webvis context.
         *
         * @param listener The listener to register.
         */
        registerFrameListener(listener: FrameListener): void;
        /**
         * Unregisters a frame listener which has previously been registered via
         * {@link registerFrameListener}.
         *
         * @param listener The listener to unregister.
         */
        unregisterFrameListener(listener: FrameListener): void;
    }
    /**
     * The **ExplosionAPI** provides a very basic explosion, which moves the parts away from a given point.
     * The Explosion is completely circular. Overlapping parts are possible.
     *
     * **Example**
     * ```typescript
     * // Get an instance of the ContextAPI
     * const myContext : ContextAPI = webvis.getContext( "example" )
     * const nodeID : number = myContext.add("someModelURL");
     *
     * // Create a simple Explosion from the center of the node's BoxVolume.
     * myContext.createExplosion(nodeID);
     *
     * // Perform the Explosion. All parts are moved away 0.3 times their distance to the center of the node.
     * myContext.performExplosion(0.3);
     *
     * // Reset all transformations.
     * myContext.endExplosion();
     * ```
     *
     * **Restrictions**
     *
     * Explosions cannot be performed on monolithic models.
     */
    interface ExplosionAPI {
        /**
         * Creates an Explosion (around a given point).
         * @param centerNodeID The nodeID of the node around which center the explosion is created.
         */
        createExplosion(centerNodeID?: number): void;
        /**
         * Performs the actual Explosion.
         * @param explosionFactor The value by which the parts are expanded.
         */
        performExplosion(explosionFactor: number): void;
        /**
         * Restores the initial transformations of all exploded parts.
         */
        endExplosion(): void;
    }
    /**
     * The ExplosionStartedEvent occurs if an Explosion has been started.
     *
     * @event
     * @hideconstructor
     */
    class ExplosionStartedEvent extends WebVisEvent {
        center: Float32Array;
        /**
         * @param center The center around which the parts are exploded.
         */
        constructor(center: Float32Array);
    }
    /**
     * The ExplosionFinishedEvent occurs if an Explosion has been finished.
     *
     * @event
     * @hideconstructor
     */
    class ExplosionFinishedEvent extends WebVisEvent {
        constructor();
    }
    /**
     * The ExplosionChangedEvent occurs if an Explosion has been changed.
     *
     * @event
     * @hideconstructor
     */
    class ExplosionChangedEvent extends WebVisEvent {
        explosionFactor: number;
        /**
         * @param explosionFactor Determines how widespread the Explosion is.
         */
        constructor(explosionFactor: number);
    }
    /**
     * A listener for webvis events that can be registered via the {@link EventAPI}.
     *
     * The listener consumes an event that extends {@link WebVisEvent} and is expected
     * to not return anything. If the listener returns a promise, the listener execution
     * mechanism will not wait for the promise to resolve.
     *
     * The event's {@link WebVisEvent.type type} property specifies its {@link EventType}
     * and determines its structure.
     *
     * @template T - The type of event that the listener listens to. This can also be
     * a union of multiple event types.
     * @param event - The event that has been fired.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention -- To maintain backwards compatibility with customer code, we have to deviate from the naming convention here.
    interface IEventListener<T extends WebVisEvent = WebVisEvent> {
        (event: T): void;
    }
    /**
     * ## EventAPI
     *
     * ### Overview
     *
     * The EventAPI provides the functions {@link EventAPI.registerListener registerListener} and
     * {@link EventAPI.unregisterListener unregisterListener} for managing event listeners. Examples of event triggers
     * are the addition and removal of nodes, changes to node properties, and user interactions with the visualization.
     * - The {@link EventType} enum lists all available event types.
     * - An event listener is registered for a set of event types and must implement the
     *   {@link IEventListener} interface.
     * - An event's {@link WebVisEvent.type type} property specifies its {@link EventType} and determines its structure.
     *
     * ### Quick Start
     *
     * The example below demonstrates how to register a listener for {@link EventType.NODE_ADDED NODE_ADDED} events.
     * Registering an event listener returns a listener ID, which can be used to unregister the listener later.
     *
     * ```javascript
     * // Get the webvis context
     * const context = webvis.getContext();
     *
     * // Register a listener for NODE_ADDED events
     * const listenerId = context.registerListener([webvis.EventType.NODE_ADDED], (event) => {
     *    // Print the ID of the added node.
     *    console.log(event.targetNodeID);
     * });
     *
     * // ...
     *
     * // Later: unregister the listener
     * context.unregisterListener(listenerId);
     * ```
     *
     * ### Scoping listeners in the node hierarchy
     *
     * Several events are linked to a specific node in the hierarchy, e.g. {@link NodeClickedEvent}s. When
     * registering a listener for the corresponding event types, a listening scope must be specified in the node
     * hierarchy. For more information, see the {@link EventAPI.registerListener registerListener} function.
     */
    interface EventAPI {
        /**
         * Registers a listener for a set of {@link EventType}s. If the given event types array is empty, the
         * listener will react to all event types. The listener must implement the {@link IEventListener}
         * interface. It will be called with events that extend the {@link WebVisEvent} base class. An event's
         * `type` property specifies its {@link EventType} and determines its structure.
         *
         * ### Scoping listeners in the node hierarchy
         *
         * Several {@link EventType}s are linked to a specific node in the hierarchy. These include all that
         * have a `NODE_` or `TOPOLOGY_` prefix, as well as several animation-related event types.
         *
         * When registering a listener for these event types, a listening scope must be specified in the node
         * hierarchy. This is done by setting the optional parameters `nodeID` and `observeSubTree`. The
         * `observeSubTree` flag determines whether the listener is scoped to only the specified node or the
         * entire subtree under the node.
         *
         * By default, listeners are scoped to the global root node and `observeSubTree` is `false`, such that
         * listeners do not receive any events linked to added nodes. To listen to events from all nodes, set
         * `nodeID` to `0` and `observeSubTree` to `true`.
         *
         * There are a few things to note when scoping listeners:
         * - {@link EventType.NODE_ADDED NODE_ADDED} events are linked to the parent node of the added node.
         * - {@link EventType.NODE_CHANGED NODE_CHANGED} events behave differently depending on the node property
         *   that has changed. When the node property is recursive, the event is passed to all listeners in the
         *   subtree. When the change to the node property affects the node's ancestors, events will also be
         *   triggered for the ancestors.
         *
         * @template T - The type of event that the listener listens to. This can also be a union of multiple
         * event types.
         * @param eventTypes - The types of events that the listener listens to. If an empty array is passed,
         * the listener will listen to all event types.
         * @param listener - The event listener.
         * @param nodeID - The ID of the node to which the listener should be scoped. Default: `0`
         * @param observeSubTree - If set to true, the listener will be scoped to the whole subtree under the
         * specified node. Default: `false`
         *
         * @return - The ID of the event listener.
         */
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics -- To maintain backwards compatibility with customer code, we must retain the unnecessary generic.
        registerListener<T extends WebVisEvent = WebVisEvent>(
            eventTypes: Array<EventType>,
            listener: IEventListener<T>,
            nodeID?: number,
            observeSubTree?: boolean,
        ): number;
        /**
         * Unregisters the event listener with the given ID.
         *
         * @see {@link EventAPI}
         *
         * @param listenerID - The ID of the event listener that should be unregistered.
         */
        unregisterListener(listenerID: number): void;
    }
    /**
     * Base class for all webvis events. Each runtime event has a unique ID. An
     * event's {@link WebVisEvent.type type} property specifies its {@link EventType}
     * and determines its structure. For working with webvis events, see
     * {@link EventAPI}.
     *
     * @event
     * @hideconstructor
     */
    class WebVisEvent {
        private static _eventCount;
        /**
         * The unique ID of the event.
         */
        id: number;
        /**
         * The type of the event.
         */
        type?: EventType;
        /**
         * The transaction code associated with the event.
         */
        transactionCode?: string;
        /**
         * The transaction ID associated with the event.
         */
        transactionID?: number;
        constructor();
    }
    /**
     * This enum lists all event types that are available in the webvis {@link EventAPI}. Each event
     * type corresponds to a specific subclass of the {@link WebVisEvent} base class, as linked in the
     * description of each enum entry. An event's type can be queried using its
     * {@link WebVisEvent.type type} property.
     *
     * @see {@link EventAPI}
     */
    enum EventType {
        /**
         * Event type corresponding to a {@link NodeChangedEvent}.
         * @see {@link InstanceGraphAPI}
         */
        NODE_CHANGED = 0,
        /**
         * Event type corresponding to a {@link NodeAddedEvent}.
         * @see {@link InstanceGraphAPI}
         */
        NODE_ADDED = 1,
        /**
         * Event type corresponding to a {@link NodeRemovedEvent}.
         * @see {@link InstanceGraphAPI}
         */
        NODE_REMOVED = 2,
        /**
         * Event type corresponding to a {@link NodeClickedEvent}.
         * @see {@link ViewerAPI}
         */
        NODE_CLICKED = 3,
        /**
         * Event type corresponding to a {@link NodePointerEnterEvent}.
         * @see {@link ViewerAPI}
         */
        NODE_POINTER_ENTER = 4,
        /**
         * Event type corresponding to a {@link NodePointerOverEvent}.
         * @see {@link ViewerAPI}
         */
        NODE_POINTER_OVER = 5,
        /**
         * Event type corresponding to a {@link NodePointerOutEvent}.
         * @see {@link ViewerAPI}
         */
        NODE_POINTER_OUT = 6,
        /**
         * Event type corresponding to a {@link SnapshotCreatedEvent}.
         * @see {@link SessionStorageAPI}
         */
        SNAPSHOT_CREATED = 7,
        /**
         * Event type corresponding to a {@link SnapshotRestoredEvent}.
         * @see {@link SessionStorageAPI}
         */
        SNAPSHOT_RESTORED = 8,
        /**
         * Event type corresponding to a {@link SnapshotRemovedEvent}.
         * @see {@link SessionStorageAPI}
         */
        SNAPSHOT_REMOVED = 9,
        /**
         * Event type corresponding to a {@link SnapshotChangedEvent}.
         * @see {@link SessionStorageAPI}
         */
        SNAPSHOT_CHANGED = 10,
        /**
         * Event type corresponding to a {@link MeasurementCreatedEvent}.
         * @see {@link MeasurementAPI}
         */
        MEASUREMENT_CREATED = 11,
        /**
         * Event type corresponding to a {@link MeasurementChangedEvent}.
         * @see {@link MeasurementAPI}
         */
        MEASUREMENT_CHANGED = 12,
        /**
         * @ignore
         */
        MEASUREMENT_UI_CHANGED = 13,
        /**
         * Event type corresponding to a {@link MeasurementRemovedEvent}.
         * @see {@link MeasurementAPI}
         */
        MEASUREMENT_REMOVED = 14,
        /**
         * Event type corresponding to a {@link ClipPlaneCreatedEvent}.
         * @see {@link ClipPlaneAPI}
         */
        CLIPPLANE_CREATED = 15,
        /**
         * Event type corresponding to a {@link ClipPlaneChangedEvent}.
         * @see {@link ClipPlaneAPI}
         */
        CLIPPLANE_CHANGED = 16,
        /**
         * Event type corresponding to a {@link ClipPlaneRemovedEvent}.
         * @see {@link ClipPlaneAPI}
         */
        CLIPPLANE_REMOVED = 17,
        /**
         * Event type corresponding to a {@link ClippingRoomCreatedEvent}.
         * @see {@link ClipPlaneAPI}
         */
        CLIPPING_ROOM_CREATED = 18,
        /**
         * Event type corresponding to a {@link ClippingRoomChangedEvent}.
         * @see {@link ClipPlaneAPI}
         */
        CLIPPING_ROOM_CHANGED = 19,
        /**
         * Event type corresponding to an {@link AnnotationCreatedEvent}.
         * @see {@link AnnotationAPI}
         */
        ANNOTATION_CREATED = 20,
        /**
         * Event type corresponding to an {@link AnnotationChangedEvent}.
         * @see {@link AnnotationAPI}
         */
        ANNOTATION_CHANGED = 21,
        /**
         * Event type corresponding to an {@link AnnotationRemovedEvent}.
         * @see {@link AnnotationAPI}
         */
        ANNOTATION_REMOVED = 22,
        /**
         * Event type corresponding to a {@link SettingChangedEvent}.
         * @see {@link SettingsAPI}
         */
        SETTING_CHANGED = 23,
        /**
         * Event type corresponding to a {@link ViewerSettingChangedEvent}.
         * @see {@link SettingsAPI}
         * @see {@link ViewerAPI.changeSetting}
         */
        VIEWER_SETTING_CHANGED = 24,
        /**
         * @ignore
         */
        NOTIFICATION = 26,
        /**
         * Event type corresponding to an {@link ActiveSceneVolumeChangedEvent}.
         * @see {@link InstanceGraphAPI}
         */
        ACTIVE_SCENE_VOLUME_CHANGED = 27,
        /**
         * Event type corresponding to a {@link SelectionChangedEvent}.
         * @see {@link SelectionAPI}
         */
        SELECTION_CHANGED = 28,
        /**
         * Event type corresponding to a {@link ModelRenderedEvent}.
         */
        MODEL_RENDERED = 29,
        /**
         * Event type corresponding to an {@link InteractionModeChangedEvent}.
         * @see {@link InteractionAPI}
         */
        INTERACTION_MODE_CHANGED = 31,
        /**
         * Event type corresponding to a {@link LayerFilterChangedEvent}.
         * @see {@link LayerFilterAPI}
         */
        LAYERFILTER_CHANGED = 32,
        /**
         * Event type corresponding to a {@link LayerFilterRegisteredEvent}.
         * @see {@link LayerFilterAPI}
         */
        LAYERFILTER_REGISTERED = 33,
        /**
         * Event type corresponding to an {@link ActiveItemEvent}.
         * @see {@link ViewerGizmoAPI}
         */
        ACTIVE_ITEM = 34,
        /**
         * Event type corresponding to an {@link ExplosionStartedEvent}.
         * @see {@link ExplosionAPI}
         */
        EXPLOSION_STARTED = 35,
        /**
         * Event type corresponding to an {@link ExplosionChangedEvent}.
         * @see {@link ExplosionAPI}
         */
        EXPLOSION_CHANGED = 36,
        /**
         * Event type corresponding to an {@link ExplosionFinishedEvent}.
         * @see {@link ExplosionAPI}
         */
        EXPLOSION_FINISHED = 37,
        /**
         * Event type corresponding to a {@link ProgressChangedEvent}.
         */
        PROGRESS_CHANGED = 42,
        /**
         * Event type corresponding to a {@link ViewerCreatedEvent}.
         * @see {@link ViewerAPI}
         * @see {@link ContextAPI.createViewer}
         */
        VIEWER_CREATED = 43,
        /**
         * Event type corresponding to a {@link ViewerRemovedEvent}.
         * @see {@link ViewerAPI}
         * @see {@link ContextAPI.removeViewer}
         */
        VIEWER_REMOVED = 44,
        /**
         * Event type corresponding to a {@link ViewerNavigationStartedEvent}.
         * @see {@link ViewerAPI}
         * @see {@link ViewerSettingStrings.NAVIGATION_MODE}
         */
        VIEWER_NAVIGATION_STARTED = 45,
        /**
         * Event type corresponding to a {@link ViewerNavigationEndedEvent}.
         * @see {@link ViewerAPI}
         * @see {@link ViewerSettingStrings.NAVIGATION_MODE}
         */
        VIEWER_NAVIGATION_ENDED = 46,
        /**
         * @ignore
         */
        SESSION_STATE_CHANGED = 48,
        /**
         * @ignore
         */
        STREAM_STATE_CHANGED = 49,
        /**
         * @ignore
         */
        MEMBER_JOINED = 50,
        /**
         * @ignore
         */
        MEMBER_UPDATED = 51,
        /**
         * @ignore
         */
        MEMBER_LEFT = 52,
        /**
         * @ignore
         */
        STATE_SYNC = 53,
        /**
         * @ignore
         */
        SESSION_PARAMETER_CHANGED = 54,
        /**
         * @ignore
         */
        SESSION_TRANSFER = 57,
        /**
         * Event type corresponding to a {@link BackgroundClickedEvent}.
         * @see {@link ViewerAPI}
         */
        BACKGROUND_CLICKED = 58,
        /**
         * Event type corresponding to a {@link ViewChangedEvent}.
         * @see {@link ViewerAPI}
         */
        VIEW_CHANGED = 59,
        /**
         * @ignore
         */
        WEBVIS_RESET = 60,
        /**
         * Event type corresponding to a {@link RequestContextMenuEvent}.
         */
        REQUEST_CONTEXT_MENU = 62,
        /**
         * @ignore
         */
        CREDENTIALS_AQUISITION_UPDATE = 65,
        /**
         * Event type corresponding to a {@link ViewportChangedEvent}.
         * @see {@link ViewerAPI}
         */
        VIEWPORT_CHANGED = 66,
        /**
         * @ignore
         */
        CUSTOM_NODE_ADDED = 67,
        /**
         * Event type corresponding to a {@link ClippingRoomRemovedEvent}.
         * @see {@link ClipPlaneAPI}
         */
        CLIPPING_ROOM_REMOVED = 68,
        /**
         * Event type corresponding to an {@link AnimationStartedEvent}.
         * @see {@link AnimationAPI}
         */
        ANIMATION_STARTED = 69,
        /**
         * Event type corresponding to an {@link AnimationIterationEvent}.
         * @see {@link AnimationAPI}
         */
        ANIMATION_ITERATION = 70,
        /**
         * Event type corresponding to an {@link AnimationEndedEvent}.
         * @see {@link AnimationAPI}
         */
        ANIMATION_ENDED = 71,
        /**
         * Event type corresponding to an {@link AnimationFramesCreatedEvent}.
         * @see {@link AnimationAPI}
         */
        ANIMATION_FRAMES_CREATED = 72,
        /**
         * Event type corresponding to an {@link AnimationFramesRemovedEvent}.
         * @see {@link AnimationAPI}
         */
        ANIMATION_FRAMES_REMOVED = 73,
        /**
         * Event type corresponding to a {@link CustomPropertyRegisteredEvent}.
         * @see {@link InstanceGraphAPI}
         */
        CUSTOM_PROPERTY_REGISTERED = 74,
        /**
         * Event type corresponding to an {@link AttachmentCreatedEvent}.
         * @see {@link AttachmentAPI}
         */
        ATTACHMENT_CREATED = 75,
        /**
         * Event type corresponding to an {@link AttachmentDataChangedEvent}.
         * @see {@link AttachmentAPI}
         */
        ATTACHMENT_DATA_CHANGED = 76,
        /**
         * Event type corresponding to an {@link AttachmentRemovedEvent}.
         * @see {@link AttachmentAPI}
         */
        ATTACHMENT_REMOVED = 77,
        /**
         * Event type corresponding to a {@link SnapshotRestoreStartedEvent}.
         * @see {@link SessionStorageAPI}
         */
        SNAPSHOT_RESTORE_STARTED = 78,
        /**
         * Event type corresponding to a {@link LayerFilterUnregisteredEvent}.
         * @see {@link LayerFilterAPI}
         */
        LAYERFILTER_UNREGISTERED = 79,
        /**
         * Event type corresponding to a {@link SnapshotCreationStartedEvent}.
         * @see {@link SessionStorageAPI}
         */
        SNAPSHOT_CREATION_STARTED = 80,
        /**
         * @ignore
         */
        INTERNAL_NODES_REMOVED = 81,
        /**
         * @ignore
         */
        INTERNAL_NODES_CHANGED = 82,
        /**
         * @ignore
         */
        INTERNAL_SNAPSHOT_CREATED = 83,
        /**
         * Event type corresponding to an {@link XRMemberAddedEvent}.
         * @see {@link RealityAPI}
         */
        XR_MEMBER_ADDED = 84,
        /**
         * Event type corresponding to an {@link XRMemberRemovedEvent}.
         * @see {@link RealityAPI}
         */
        XR_MEMBER_REMOVED = 85,
        /**
         * Event type corresponding to an {@link XRModelTrackerInfoReceivedEvent}.
         * @see {@link RealityAPI}
         */
        XR_MODELTRACKER_INFO_RECEIVED = 87,
        /**
         * Event type corresponding to an {@link XRModelTrackerEdgeImgReceivedEvent}.
         * @see {@link RealityAPI}
         */
        XR_MODELTRACKER_EDGEIMG_RECEIVED = 88,
        /**
         * Event type corresponding to an {@link XRStateChangedEvent}.
         * @see {@link RealityAPI}
         */
        XR_STATE_CHANGED = 90,
        /**
         * Event type corresponding to a {@link NodePropertiesResetEvent}.
         * @see {@link InstanceGraphAPI}
         */
        NODE_PROPERTIES_RESET = 91,
        /**
         * Event type corresponding to a {@link LogEvent}.
         * @see {@link SettingStrings.LOG_LEVEL}
         */
        LOG_EVENT = 92,
        /**
         * Event type corresponding to a {@link ViewerGizmoChangedEvent}.
         * @see {@link ViewerGizmoAPI}
         */
        VIEWER_GIZMO_CHANGED = 93,
        /**
         * Event type corresponding to a {@link DrawingChangedEvent}.
         * @see {@link DrawingAPI}
         */
        DRAWING_CHANGED = 94,
        /**
         * Event type corresponding to a {@link DrawingCreatedEvent}.
         * @see {@link DrawingAPI}
         */
        DRAWING_CREATED = 95,
        /**
         * Event type corresponding to a {@link DrawingRemovedEvent}.
         * @see {@link DrawingAPI}
         */
        DRAWING_REMOVED = 96,
        /**
         * @ignore
         */
        INTERNAL_DRAWING_CREATED = 97,
        /**
         * Event type corresponding to a {@link ServiceConnectionLostEvent}.
         */
        SERVICE_CONNECTION_LOST = 98,
        /**
         * Event type corresponding to a {@link VariantChangedEvent}.
         * @see {@link VariantsAPI}
         */
        VARIANT_CHANGED = 99,
        /**
         * @ignore
         */
        REQUEST_ERROR = 100,
        /**
         * Event type corresponding to a {@link ViewerGizmoModeChangedEvent}.
         * @see {@link ViewerGizmoAPI}
         */
        VIEWER_GIZMO_MODE_CHANGED = 101,
        /**
         * Event type corresponding to a {@link NodeErrorEvent}.
         * @see {@link InstanceGraphAPI}
         */
        NODE_ERROR = 102,
        /**
         * Event type corresponding to a {@link DrawingPlaneChangedEvent}.
         * @see {@link DrawingPlaneAPI}
         */
        DRAWING_PLANE_CHANGED = 103,
        /**
         * Event type corresponding to a {@link DrawingPlaneCreatedEvent}.
         * @see {@link DrawingPlaneAPI}
         */
        DRAWING_PLANE_CREATED = 104,
        /**
         * Event type corresponding to a {@link DrawingPlaneRemovedEvent}.
         * @see {@link DrawingPlaneAPI}
         */
        DRAWING_PLANE_REMOVED = 105,
        /**
         * Event type corresponding to a {@link ServiceStateChangedEvent}.
         */
        SERVICE_STATE_CHANGED = 107,
        /**
         * Event type corresponding to a {@link ServiceErrorEvent}.
         */
        SERVICE_ERROR = 108,
        /**
         * Event type corresponding to a {@link ViewerStateChangedEvent}.
         * @see {@link ViewerStateAPI}
         */
        VIEWER_STATE_CHANGED = 109,
        /**
         * Event type corresponding to a {@link ViewerErrorEvent}.
         * @see {@link ViewerStateAPI}
         */
        VIEWER_ERROR = 110,
        /**
         * @ignore
         */
        INTERNAL_CONTEXT_CLEARED = 111,
        /**
         * @ignore
         */
        INTERNAL_VARIANT_CHANGED = 112,
        /**
         * Event type corresponding to a {@link ViewerMagnifierChangedEvent}.
         * @see {@link ViewerMagnifierAPI}
         */
        VIEWER_MAGNIFIER_CHANGED = 113,
        /**
         * Event type corresponding to a {@link TopologyPointerEnterEvent}.
         * @see {@link ViewerInteractionAPI}
         */
        TOPOLOGY_POINTER_ENTER = 114,
        /**
         * Event type corresponding to a {@link TopologyPointerOutEvent}.
         * @see {@link ViewerInteractionAPI}
         */
        TOPOLOGY_POINTER_OUT = 115,
        /**
         * @ignore
         */
        XR_SETTINGS_CHANGED = 116,
        /**
         * Event type corresponding to an {@link XRPlaybackStateChangedEvent}.
         * @see {@link RealityAPI}
         */
        XR_PLAYBACK_STATE_CHANGED = 117,
        /**
         * Event type corresponding to an {@link XRSpectateStartedEvent}.
         * @see {@link RealityAPI}
         */
        XR_SPECTATE_STARTED = 118,
        /**
         * Event type corresponding to an {@link XRSpectateStoppedEvent}.
         * @see {@link RealityAPI}
         */
        XR_SPECTATE_STOPPED = 119,
        /**
         * Event type corresponding to an {@link ViewerXREdgeCompareChangedEvent}.
         * @see {@link ViewerXREdgeCompareAPI}
         */
        VIEWER_XR_EDGE_COMPARE_CHANGED = 120,
        /**
         * Event type corresponding to an {@link ViewerHeatmapCreatedEvent}.
         * @see {@link ViewerHeatmapAPI}
         */
        VIEWER_HEATMAP_CREATED = 121,
        /**
         * Event type corresponding to an {@link ViewerHeatmapChangedEvent}.
         * @see {@link ViewerHeatmapAPI}
         */
        VIEWER_HEATMAP_CHANGED = 122,
        /**
         * Event type corresponding to an {@link ViewerHeatmapRemovedEvent}.
         * @see {@link ViewerHeatmapAPI}
         */
        VIEWER_HEATMAP_REMOVED = 123,
        /**
         * Event type corresponding to an {@link ViewerHeatmapConfigChangedEvent}.
         * @see {@link ViewerHeatmapAPI}
         */
        VIEWER_HEATMAP_CONFIG_CHANGED = 124,
        /**
         * @ignore
         */
        INTERNAL_PARENT_CHANGED = 125,
        /**
         * Event type corresponding to a {@link MaterialCreatedEvent}.
         * @see {@link MaterialAPI}
         */
        MATERIAL_CREATED = 126,
        /**
         * Event type corresponding to a {@link MaterialChangedEvent}.
         * @see {@link MaterialAPI}
         */
        MATERIAL_CHANGED = 127,
        /**
         * Event type corresponding to a {@link MaterialRemovedEvent}.
         * @see {@link MaterialAPI}
         */
        MATERIAL_REMOVED = 128,
        /**
         * Event type corresponding to an {@link ViewerPointCloudCreatedEvent}.
         * @see {@link ViewerPointCloudAPI}
         */
        VIEWER_POINT_CLOUD_CREATED = 129,
        /**
         * Event type corresponding to an {@link ViewerPointCloudChangedEvent}.
         * @see {@link ViewerPointCloudAPI}
         */
        VIEWER_POINT_CLOUD_CHANGED = 130,
        /**
         * Event type corresponding to an {@link ViewerPointCloudRemovedEvent}.
         * @see {@link ViewerPointCloudAPI}
         */
        VIEWER_POINT_CLOUD_REMOVED = 131,
        /**
         * Event type corresponding to an {@link ViewerPOISetCreatedEvent}
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_SET_CREATED = 132,
        /**
         * Event type corresponding to an {@link ViewerPOISetChangedEvent}
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_SET_CHANGED = 133,
        /**
         * Event type corresponding to an {@link ViewerPOISetRemovedEvent}
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_SET_REMOVED = 134,
        /**
         * Event type corresponding to a {@link ViewerPOIClickedEvent}.
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_CLICKED = 135,
        /**
         * Event type corresponding to a {@link ViewerPOIPointerEnterEvent}.
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_POINTER_ENTER = 136,
        /**
         * Event type corresponding to a {@link ViewerPOIPointerOutEvent}.
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_POINTER_OUT = 137,
        /**
         * Event type corresponding to a {@link ViewerPOIStyleCreatedEvent}.
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_STYLE_CREATED = 138,
        /**
         * Event type corresponding to a {@link ViewerPOIStyleChangedEvent}.
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_STYLE_CHANGED = 139,
        /**
         * Event type corresponding to a {@link ViewerPOIStyleRemovedEvent}.
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_STYLE_REMOVED = 140,
        /**
         * Event type corresponding to an {@link ViewerPOISetPointsAddedEvent}
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_SET_POINTS_ADDED = 141,
        /**
         * Event type corresponding to an {@link ViewerPOISetPointsChangedEvent}
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_SET_POINTS_CHANGED = 142,
        /**
         * Event type corresponding to an {@link ViewerPOISetPointsRemovedEvent}
         * @see {@link ViewerPointsOfInterestAPI}
         */
        VIEWER_POI_SET_POINTS_REMOVED = 143,
        /**
         * Event type corresponding to a {@link MemberCreatedEvent}.
         * @see {@link MemberAPI}
         */
        MEMBER_CREATED = 144,
        /**
         * Event type corresponding to a {@link MemberChangedEvent}.
         * @see {@link MemberAPI}
         */
        MEMBER_CHANGED = 145,
        /**
         * Event type corresponding to a {@link MemberRemovedEvent}.
         * @see {@link MemberAPI}
         */
        MEMBER_REMOVED = 146,
        /**
         * @ignore
         */
        MEMBER_ACTION_USED = 147,
        /** Event type corresponding to a {@link MemberActionAddedEvent}.
         * @see {@link MemberAPI}
         */
        MEMBER_ACTION_ADDED = 148,
        /** Event type corresponding to a {@link MemberActionRemovedEvent}.
         * @see {@link MemberAPI}
         */
        MEMBER_ACTION_REMOVED = 149,
        /** Event type corresponding to a {@link SpaceOpenedEvent}.
         * @see {@link SpaceAPI}
         */
        SPACE_OPENED = 150,
        EVENT_TYPE_COUNT = 151,
    }
    interface DrawingPlaneProperties {
        /**
         * The enabled state of the DrawingPlane.
         * @default false
         */
        enabled?: boolean;
        /**
         * The invisible state of the DrawingPlane.
         * @default false
         */
        invisible?: boolean;
        /**
         * The name of the DrawingPlane.
         * @default undefined
         */
        name?: string;
        /**
         * The normal vector of the DrawingPlane.
         * @default [0, 1, 0]
         */
        normal?: [number, number, number];
        /**
         * The position of the DrawingPlane.
         * @default [0,0,0]
         */
        position?: [number, number, number];
        /**
         * The tangent vector of the DrawingPlane.
         * @default [1, 0, 0]
         */
        tangent?: [number, number, number];
    }
    interface DrawingPlaneAPI {
        /**
         * Creates a new DrawingPlane with the specified properties.
         *
         * @param {DrawingPlaneProperties} properties - Initial properties of the created Drawing.
         * @returns {number} The ID of the newly created Drawing.
         */
        createDrawingPlane(properties?: DrawingPlaneProperties): number;
        /**
         * Changes one or more properties of a DrawingPlane with the specified ID.
         *
         * @param {number} drawingPlaneId - The ID of the DrawingPlane you want to change.
         * @param {DrawingPlaneProperties} properties - The properties of the DrawingPlane you want change.
         * @returns {DrawingPlaneProperties} An Object with the changed Properties.
         */
        changeDrawingPlane(drawingPlaneId: number, properties: DrawingPlaneProperties): DrawingPlaneProperties;
        /**
         * Returns the DrawingPlane properties for the specified DrawingPlane ID.
         *
         * @param {number} drawingPlaneId - The ID of the DrawingPlane you want to get the Data for.
         * @returns {Promise<DrawingPlaneProperties>} The requested DrawingPlane properties.
         */
        getDrawingPlaneData(drawingPlaneId: number): DrawingPlaneProperties;
        /**
         * Returns all available DrawingPlane IDs.
         *
         * @returns {number[]} An Array of all available DrawingPlane IDs.
         */
        getDrawingPlanes(): number[];
        /**
         * Removes a DrawingPlane with the specified ID.
         * If a DrawingPlane is part of a Snapshot the removal will fail with the State {@link RemoveState.REFERENCED_BY_SNAPSHOT}.
         *
         * @param {number} drawingPlaneId - The ID of the Drawing you want to remove.
         * @param {boolean} [safe=false] Performs a safe remove which interrupt the removal process if the Drawing is part of one or more Snapshots.
         * @returns {RemoveState}
         */
        removeDrawingPlane(drawingPlaneId: number, safe?: boolean): RemoveState;
    }
    /**
     * The DrawingPlaneRemovedEvent occurs if a DrawingPlane was removed.
     *
     * @event
     * @hideconstructor
     */
    class DrawingPlaneRemovedEvent extends WebVisEvent {
        drawingPlaneId: number;
        /**
         * @param drawingPlaneId The ID of the DrawingPlane.
         */
        constructor(drawingPlaneId: number);
    }
    /**
     * The DrawingPlaneCreatedEvent occurs if a DrawingPlane was created.
     *
     * @event
     * @hideconstructor
     */
    class DrawingPlaneCreatedEvent extends WebVisEvent {
        drawingPlaneId: number;
        properties: DrawingPlaneProperties;
        /**
         * @param drawingPlaneId The ID of the clipplane.
         * @param properties An object with the changed properties.
         */
        constructor(drawingPlaneId: number, properties: DrawingPlaneProperties);
    }
    /**
     * The DrawingPlaneChangedEvent occurs if a DrawingPlane was changed.
     *
     * @event
     * @hideconstructor
     */
    class DrawingPlaneChangedEvent extends WebVisEvent {
        drawingPlaneId: number;
        properties: DrawingPlaneProperties;
        /**
         * @param drawingPlaneId The ID of the DrawingPlane.
         * @param properties An object with the changed properties.
         */
        constructor(drawingPlaneId: number, properties: DrawingPlaneProperties);
    }
    interface DrawingProperties {
        /**
         * The enabled state of the Drawing.
         * @default false
         */
        enabled?: boolean | undefined;
        /**
         * The name of the Drawing.
         * @default undefined
         */
        name?: string | undefined;
    }
    interface DrawingData {
        /**
         * The properties of the Drawing.
         */
        properties: DrawingProperties;
        /**
         * The Data generated by the {@link ViewerDrawingAPI}.
         */
        data: ViewerDrawingResult;
    }
    /**
     * The **DrawingAPI** provides basic functionalities to interact with 2D Drawings created with
     * the help of the {@link ViewerDrawingAPI}.
     */
    interface DrawingAPI {
        /**
         * Changes one or more properties of a Drawing with the specified id.
         * @param {number} drawingId - The id of the Drawing.
         * @param {DrawingProperties} properties - The properties of the Drawing.
         * @returns {DrawingProperties} An object with the changed properties.
         */
        changeDrawing(drawingId: number, properties: DrawingProperties): DrawingProperties;
        /**
         * Creates a new Drawing from the Output of the {@link ViewerDrawingAPI}.
         * @param {ViewerDrawingResult} data - The data generated with the help of the {@link ViewerDrawingAPI}.
         * @param {DrawingProperties} properties - Initial properties of the created Drawing.
         * @returns {number} The id of the newly created Drawing.
         */
        createDrawing(data: ViewerDrawingResult, properties?: DrawingProperties): number;
        /**
         * Returns all available Drawing ids.
         * @returns {number[]} An Array of all available Drawing ids.
         */
        getDrawings(): number[];
        /**
         * Removes a Drawing with the specified id.
         * If a Drawing is part of a Snapshot the removal will fail with the State {@link RemoveState.REFERENCED_BY_SNAPSHOT}
         * @param {number} drawingId - The id of the to be removed Drawing.
         * @param {boolean} [safe=false] Performs a safe remove which interrupt the removal process if the Drawing is part of one or more Snapshots.
         * @returns {RemoveState}
         */
        removeDrawing(drawingId: number, safe?: boolean): RemoveState;
        /**
         * Returns the DrawingData for the specified Drawing id.
         * @param {number} drawingId - The id of the Drawing from which the data is requested.
         * @returns {Promise<DrawingData>} The requested Drawing data.
         */
        requestDrawingData(drawingId: number): Promise<DrawingData>;
    }
    /**
     * @ignore
     */
    class InternalDrawingCreatedEvent extends WebVisEvent {
        drawingId: number;
        attachmentId: number;
        properties: DrawingProperties;
        constructor(drawingId: number, attachmentId: number, properties: DrawingProperties);
    }
    /**
     * This event is fired when a drawing has been removed.
     *
     * @event
     * @hideconstructor
     */
    class DrawingRemovedEvent extends WebVisEvent {
        drawingId: number;
        /**
         * @param drawingId The id of the Drawing.
         */
        constructor(drawingId: number);
    }
    /**
     * This event is fired when a drawing has been created.
     *
     * @event
     * @hideconstructor
     */
    class DrawingCreatedEvent extends WebVisEvent {
        drawingId: number;
        /**
         * @param drawingId The id of the Drawing.
         */
        constructor(drawingId: number);
    }
    /**
     * This event is fired when a drawing has been changed.
     *
     * @event
     * @hideconstructor
     */
    class DrawingChangedEvent extends WebVisEvent {
        drawingId: number;
        properties: DrawingProperties;
        /**
         * @param drawingId The id of the Drawing.
         * @param properties Properties of the Drawing.
         */
        constructor(drawingId: number, properties: DrawingProperties);
    }
    enum RemoveState {
        /**
         * The removal of the was successful.
         */
        OK = 0,
        /**
         * The removal of failed, because of an unknown id.
         */
        UNKNOWN_ID = 1,
        /**
         * The removal failed, because it is referenced by one or more Snapshots.
         */
        REFERENCED_BY_SNAPSHOT = 2,
    }
    /**
     * ## CoordinateSystemAPI
     *
     * ### Overview
     *
     * The `CoordinateSystemAPI` provides methods to retrieve the current (right-handed) coordinate system's transformation matrix and its right,
     * up, and forward vectors.
     * All information are based on the {@link SettingStrings.FRONT_PLANE_AXIS | front plane axis setting} which defines the orientation of the
     * front plane of the model in the 3D space.
     *
     * ### Quick Start
     *
     * To read out the current coordinate system as well as the currently set {@link SettingStrings.FRONT_PLANE_AXIS | front plane axis setting},
     * you can use the following code:
     * ```javascript
     * // Get the webvis context
     * const webvis = webvis.getContext();
     *
     * const csMat = context.getCoordinateSystemMatrix();
     * const front = context.readSetting(webvis.SettingStrings.FRONT_PLANE_AXIS);
     *
     * // Print the current coordinate system matrix and the corresponding front plane axis.
     * console.log('Front Plane Axis Setting:', front);
     * console.log('Coordinate System Matrix (column-major):');
     * console.table([
     *   [csMat[0], csMat[4], csMat[8],  csMat[12]],  // First row
     *   [csMat[1], csMat[5], csMat[9],  csMat[13]],  // Second row
     *   [csMat[2], csMat[6], csMat[10], csMat[14]],  // Third row
     *   [csMat[3], csMat[7], csMat[11], csMat[15]]   // Fourth row
     * ]);
     * ```
     *
     * To change the transformations, change the {@link SettingStrings.FRONT_PLANE_AXIS | front plane axis setting}:
     * ```javascript
     * // Change the front plane to be defined by right=-y, up=+z and thus forward=-x.
     * const context = webvis.getContext();
     * context.changeSetting(webvis.SettingStrings.FRONT_PLANE_AXIS, webvis.FrontPlaneAxis.NEG_Y_POS_Z);
     *
     * const csMat = context.getCoordinateSystemMatrix();
     * const csRight = context.getCoordinateSystemRightVector();
     * const csUp = context.getCoordinateSystemUpVector();
     * const csForward = context.getCoordinateSystemForwardVector();
     *
     * console.log('Coordinate System Vectors:');
     * console.log('  Right:',      csRight);
     * console.log('  Up:',         csUp);
     * console.log('  Forward:',    csForward);
     *
     * console.log('Coordinate System Matrix (column-major):');
     * console.table([
     *   [csMat[0], csMat[4], csMat[8],  csMat[12]],  // First row
     *   [csMat[1], csMat[5], csMat[9],  csMat[13]],  // Second row
     *   [csMat[2], csMat[6], csMat[10], csMat[14]],  // Third row
     *   [csMat[3], csMat[7], csMat[11], csMat[15]]   // Fourth row
     * ]);
     * ```
     *
     * @see {@link SettingStrings.FRONT_PLANE_AXIS} for the corresponding setting
     * @see {@link FrontPlaneAxis} for all possible front plane values
     */
    interface CoordinateSystemAPI {
        /**
         * This function returns a 4x4 transformation matrix that transforms the default right-handed coordinate system,
         * where the x-axis points right, the y-axis points up, and the z-axis points forward (towards the viewer),
         * to a custom coordinate system defined by the {@link SettingStrings.FRONT_PLANE_AXIS | front plane axis setting}.
         *
         * @returns The 4x4 coordinate system matrix
         */
        getCoordinateSystemMatrix(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
        /**
         * Returns the right vector of the current coordinate system.
         *
         * @returns The right vector of the current coordinate system.
         */
        getCoordinateSystemRightVector(): [number, number, number] | Float32Array;
        /**
         * Returns the up vector of the current coordinate system.
         *
         * @returns The up vector of the current coordinate system.
         */
        getCoordinateSystemUpVector(): [number, number, number] | Float32Array;
        /**
         * Returns the forward vector of the current coordinate system.
         *
         * @returns The forward vector of the current coordinate system.
         */
        getCoordinateSystemForwardVector(): [number, number, number] | Float32Array;
    }
    /**
     * Defines all possible definitions of the front plane axis in a right-handed coordinate system.
     *
     * The front plane axis is defined by the right and up vector of the coordinate system.
     * The forward vector is then defined by the cross product of the right and up vector.
     *
     * @see {@link SettingStrings.FRONT_PLANE_AXIS}
     * @see {@link CoordinateSystemAPI}
     */
    enum FrontPlaneAxis {
        /**
         * Specifies a front plane which is defined by right=+x, up=+y and thus forward=+z.
         * This means that the x-axis points to the right, the y-axis points up and
         * the z-axis points towards the viewer.
         */
        POS_X_POS_Y = "xy",
        /**
         * Specifies a front plane which is defined by right=-x, up=+y and thus forward=-z.
         * This means that the x-axis points to the left, the y-axis points up and
         * the z-axis points away from the viewer.
         */
        NEG_X_POS_Y = "-xy",
        /**
         * Specifies a front plane which is defined by right=+x, up=-y and thus forward=-z.
         * This means that the x-axis points to the right, the y-axis points down and
         * the z-axis points away from the viewer.
         */
        POS_X_NEG_Y = "x-y",
        /**
         * Specifies a front plane which is defined by right=-x, up=-y and thus forward=+z.
         * This means that the x-axis points to the left, the y-axis points down and
         * the z-axis points towards the viewer.
         */
        NEG_X_NEG_Y = "-x-y",
        /**
         * Specifies a front plane which is defined by right=+x, up=+z and thus forward=-y.
         * This means that the x-axis points to the right, the y-axis points away from the viewer and
         * the z-axis points up.
         */
        POS_X_POS_Z = "xz",
        /**
         * Specifies a front plane which is defined by right=-x, up=+z and thus forward=+y.
         * This means that the x-axis points to the left, the y-axis points towards the viewer and
         * the z-axis points up.
         */
        NEG_X_POS_Z = "-xz",
        /**
         * Specifies a front plane which is defined by right=+x, up=-z and thus forward=+y.
         * This means that the x-axis points to the right, the y-axis points towards the viewer and
         * the z-axis points down.
         */
        POS_X_NEG_Z = "x-z",
        /**
         * Specifies a front plane which is defined by right=-x, up=-z and thus forward=-y.
         * This means that the x-axis points to the left, the y-axis points away from the viewer and
         * the z-axis points down.
         */
        NEG_X_NEG_Z = "-x-z",
        /**
         * Specifies a front plane which is defined by right=+y, up=+z and thus forward=+x.
         * This means that the x-axis points towards the viewer, the y-axis points to the right and
         * the z-axis points up.
         */
        POS_Y_POS_Z = "yz",
        /**
         * Specifies a front plane which is defined by right=-y, up=+z and thus forward=-x.
         * This means that the x-axis points away from the viewer, the y-axis points to the left and
         * the z-axis points up.
         */
        NEG_Y_POS_Z = "-yz",
        /**
         * Specifies a front plane which is defined by right=+y, up=-z and thus forward=-x.
         * This means that the x-axis points away from the viewer, the y-axis points to the right and
         * the z-axis points down.
         */
        POS_Y_NEG_Z = "y-z",
        /**
         * Specifies a front plane which is defined by right=-y, up=-z and thus forward=+x.
         * This means that the x-axis points towards the viewer, the y-axis points to the left and
         * the z-axis points down.
         */
        NEG_Y_NEG_Z = "-y-z",
    }
    interface ContextStateAPI {
        /**
         * Register a callback to a specific state. The callback is executed once when the state is reached.
         * If webVis is already in that state the callback is triggered immediately.
         *
         * @param  state The state for which a callback is registered
         *
         * @return       A promise which throws an error if the requested state is invalid
         *
         * The following states are allowed as target </br>
         * <code>init</code> - Is reached when webVis is fully configured and set up.<br>
         * <code>resourceStateUpdated</code> - Is reached when there is state information available for all resources (This information can also be "still transcoding").<br>
         * <code>resourceProcessed</code> - This is triggered when all resources are done transcoding.<br>
         * <code>renderingFinished</code> - This is triggered when webVis is done with rendering. So no more image changes are imminent.<br>
         */
        waitFor(state: ContextState): Promise<void>;
    }
    type ContextState =
        | "configParsed"
        | "sessionSetup"
        | "preinit"
        | "init"
        | "resourceStateUpdated"
        | "resourceProcessed"
        | "renderingFinished";
    /**
     * Defines the properties of an entry of a requested context menu.
     *
     * This type is only used internally by the {@link RequestContextMenuEvent} event to request a context menu from the UI.
     * To modify the context menu, use the related functions provided by the webvisUI API.
     */
    interface ContextMenuEntry {
        id?: string;
        label?: string;
        description?: string;
        iconID?: string;
        condition: (nodeID: number, pointerInfo: PointerInfo) => boolean;
        command?: (nodeID: number, pointerInfo: PointerInfo) => void;
        highlight?: (nodeID: number, pointerInfo: PointerInfo) => void;
        subEntries?: Array<ContextMenuEntry>;
    }
    /**
     * Defines the properties of a requested context menu.
     *
     * This type is only used internally by the {@link RequestContextMenuEvent} event to request a context menu from the UI.
     * To modify the context menu, use the related functions provided by the webvisUI API.
     */
    interface ContextMenuData {
        leftPos: number;
        topPos: number;
        targetID?: number;
        clickResult?: PointerInfo;
        contents?: Array<ContextMenuEntry>;
        onCloseCallback?: () => void;
    }
    /**
     * The RequestContextMenuEvent requests the specified viewer to display its context menu with the given content.
     *
     * @event
     * @hideconstructor
     */
    class RequestContextMenuEvent extends WebVisEvent {
        provider: any;
        menuData: ContextMenuData;
        /**
         * @param provider The target component that should handle the request.
         * @param menuData ContextMenuData object containing desired menu location, targetNodeID, etc.
         */
        constructor(provider: any, menuData: ContextMenuData);
    }
    type UnserializableValue = bigint | symbol | {
        (...args: never): unknown;
    };
    type SerializableValue = string | number | boolean | null | undefined | SerializableValue[] | {
        [key: string]: SerializableValue;
    } | {
        toJSON(): SerializableValue;
    };
    type Serializable<T = SerializableValue> = T extends SerializableValue ? T
        : T extends UnserializableValue ? never
        : {
            [P in keyof T]: T[P] extends SerializableValue ? T[P]
                : T[P] extends UnserializableValue ? never
                : Serializable<T[P]>;
        };
    /**
     * The ContextAPI combines all functionality which can be applied on the WebvisContext.
     */
    interface ContextAPI
        extends
            AnnotationAPI,
            ClipPlaneAPI,
            CollectionAPI,
            ContextStateAPI,
            ExplosionAPI,
            FrameAPI,
            HubAPI,
            InstanceGraphAPI,
            InteractionAPI,
            LayerFilterAPI,
            EventAPI,
            MeasurementAPI,
            DrawingAPI,
            DrawingPlaneAPI,
            QueryAPI,
            SelectionAPI,
            SessionAPI,
            SettingsAPI,
            SessionStorageAPI,
            UtilityAPI,
            AttachmentAPI,
            AnimationAPI,
            NodePathAPI,
            RealityAPI,
            TopologyAPI,
            VariantsAPI,
            CoordinateSystemAPI,
            MaterialAPI,
            MemberAPI,
            SpaceAPI
    {
        /**
         * Clears the whole Context by removing all Nodes, Snapshots, ClipPlanes, Drawings, Measurements, etc.
         */
        clear(): Promise<void>;
        /**
         * @return The name of the context.
         */
        getName(): string;
        /**
         * Creates a viewer element.
         *
         * @param viewerID The id of the viewer.
         * @param canvas   The canvas which is attached to the viewer.
         * @param settings ViewerSettings
         */
        createViewer(
            viewerID?: string,
            canvas?: HTMLCanvasElement,
            settings?: {
                [key in ViewerSettingStrings]?: any;
            },
        ): ViewerAPI;
        /**
         * Removes a viewer element.
         *
         * @param viewer The id of the viewer.
         */
        removeViewer(viewer: ViewerAPI): void;
        /**
         * @return An array of all viewer elements.
         */
        getViewers(): Array<ViewerAPI>;
        /**
         * @param id The id of the viewer.
         * @return The viewer element by the given id.
         */
        getViewer(id?: string): ViewerAPI;
        /**
         * @ignore
         * @param settings
         */
        initializeLegacyContext(
            settings: {
                [key in SettingStrings | ViewerSettingStrings]?: any;
            },
        ): Promise<void>;
    }
    /**
     * Event that is fired when a reset is performed.
     *
     * @event
     * @hideconstructor
     */
    class WebVisResetEvent extends WebVisEvent {
        hard: boolean;
        /**
         * @param hard If true, the reset is a hard reset, otherwise it is a soft reset.
         */
        constructor(hard: boolean);
    }
    /**
     * @ignore
     */
    class InternalContextClearedEvent extends WebVisEvent {
        constructor();
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention -- To maintain backwards compatibility with customer code, we have to deviate from the naming convention here.
    interface ICollection {
        /**
         * Removes all elements from a collection without deleting the collection itself.
         */
        clear(): void;
        /**
         * Applies a callback on all elements of a collection.
         *
         * @param callback The callback function.
         */
        forNodes(callback: (nodeID: number) => Promise<any>): Promise<any>;
        /**
         * Applies a callback on all root node elements of a collection.
         *
         * @param callback The callback function.
         */
        forRootNodes(callback: (nodeID: number) => Promise<any>): Promise<any>;
        /**
         * Creates a copy of a given collection.
         *
         * @param other A ICollection object.
         */
        copy(other: ICollection): void;
        /**
         * @return The number of elements inside a collection.
         */
        getNodeCount(): number;
    }
    /**
     * @deprecated The CollectionAPI is deprecated. Please use nodeId[] instead.
     *
     * Collections store groups of nodes. They can be created empty or from a list of nodes.
     * There is also the way to create a collection by searching nodes matching a given property.
     */
    interface CollectionAPI {
        /**
         * @deprecated createCollection is deprecated and will be removed in future versions. Please use a simple array of node IDs instead.
         *
         * Returns the id of a new collection containing the nodes from the given list.
         *
         * @param nodeIDlist An array of node id's from which a new node collection should be created.
         *
         * @return           The id of the newly created node collection.
         */
        createCollection(nodeIDlist?: Array<number>): number;
        /**
         * @deprecated createCollection is deprecated and will be removed in future versions. Please use a simple array of node IDs instead.
         *
         * Creates a new, empty collection and returns its id.
         *
         * @return The id of the newly created collection.
         */
        createCollection(): number;
        /**
         * @deprecated removeCollection is deprecated and will be removed in future versions.
         *
         * Removes the collection with the given id.
         *
         * @param collectionID Specifies which collection should be removed
         */
        removeCollection(collectionID: number): void;
        /**
         * @deprecated getCollection is deprecated and will be removed in future versions.
         *
         * Returns the collection with the given id.
         *
         * @param collectionID  Specifies which collection should be returned
         *
         * @return              The collection with the given id
         */
        getCollection(collectionID: number): ICollection;
        /**
         * @deprecated searchByVolume is deprecated and will be removed in future versions. Please use {@link InstanceGraphAPI.requestNodeIdsByBoxVolume} instead.
         *
         * Finds nodes within the given BoxVolume (created using the createBoxVolume() function).
         * If includeOverlappingNodes is false, only nodes fully contained by the box volume are returned.
         * The rootNodeID specifies the node from which the subtree is searched.
         *
         * @param  selectionBox            3-dimensional search volume.
         * @param  includeOverlappingNodes Specifies whether the search result contains only those nodes which lie entirely in the search volume or if overlapping nodes are also included.
         * @param  rootNodeID              Restricts the search to a subtree of a node with the given id.
         *
         * @return                         A the id of the created collection of nodes that are fitting the given search criteria.
         */
        searchByVolume(selectionBox: BoxVolume, includeOverlappingNodes: boolean, rootNodeID?: number): Promise<number>;
        /**
         * @deprecated addToCollection is deprecated and will be removed in future versions.
         *
         * Adds the node given by nodeID to the collection with id collectionID. If recursive is true,
         * the descendants of the node are also added. Returns the  number of nodes in the collection.
         *
         * @param  collectionID Specifies to which collection the node should be added
         * @param  nodeID       Specifies which node should be added to the collection
         * @param  recursive    Specifies if the children of the node should also be added to the collection
         */
        addToCollection(collectionID: number, nodeID: number, recursive?: boolean): void;
        /**
         * @deprecated removeFromCollection is deprecated and will be removed in future versions.
         *
         * Removes a node given by nodeID from the collection with id collectionID. If recursive is true,
         * the descendants of the node are also removed.
         *
         * @param  collectionID Specifies from which collection the node should be removed
         * @param  nodeID       Specifies which node should be removed from the collection
         * @param  recursive    Specifies whether the children of the node should be removed from the collection too
         */
        removeFromCollection(collectionID: number, nodeID: number, recursive?: boolean): void;
        /**
         * @deprecated getCollectionElements is deprecated and will be removed in future versions.
         *
         * Returns an array containing the ids of the nodes in the collection.
         * Modifying the returned array results in undefined behavior.
         *
         * @param  collectionID The id of the node collection
         *
         * @return              Array of node IDs representing the node collection
         */
        getCollectionElements(collectionID: number): Promise<Array<number>>;
        /**
         * @deprecated getCollectionNodeCount is deprecated and will be removed in future versions.
         *
         * Returns the number of elements inside a collection.
         *
         * @param  collectionID The id of the collection
         *
         * @return              Number of elements in a collection.
         */
        getCollectionNodeCount(collectionID: number): Promise<number>;
    }
    /**
     * Configuration properties for clip rooms.
     *
     * These properties control the size, position, appearance, and behavior
     * of clip rooms in the scene. A clip room is a box-shaped clipping volume
     * that hides geometry outside its boundaries, allowing you to examine
     * internal structures of models.
     *
     * @see {@link ClipPlaneAPI}
     * @see {@link ClipPlaneAPI.createClippingRoom}
     * @see {@link ClipPlaneAPI.changeClippingRoom}
     */
    interface ClipRoomProperties {
        /**
         * Controls whether the clip room is enabled or disabled.
         *
         * When set to false, the clip room exists but has no effect on the scene.
         * This allows temporarily disabling clipping without removing the clip room.
         *
         * @default true
         */
        enabled?: boolean;
        /**
         * Controls whether the visual representation of the clip room is hidden.
         *
         * When set to true, the clip room will still perform clipping, but its
         * visual indicator (the wireframe box) will not be displayed.
         *
         * @default false
         */
        invisible?: boolean;
        /**
         * The display name of the clip room.
         *
         * This name can be used for identification in user interfaces or debugging.
         *
         * @default undefined
         */
        name?: string;
        /**
         * The dimensions of the clip room along the X, Y, and Z axes.
         *
         * These values define the width, height, and depth of the clip room
         * in local space before any transformations are applied.
         *
         * Example:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a clip room that's 10 units wide, 5 units tall, and 8 units deep
         * context.createClippingRoom({
         *   size: [10, 5, 8]
         * });
         * ```
         *
         * @default [1, 1, 1]
         */
        size?: [number, number, number] | Float32Array;
        /**
         * The transformation matrix of the clip room.
         *
         * This 4x4 matrix defines the complete transformation (position, rotation, and scale)
         * of the clip room in world space. It allows positioning and orienting the clip room
         * anywhere in the scene.
         *
         * Example:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a clip room rotated 45 degrees around the Y axis
         * const angle = Math.PI / 4; // 45 degrees
         * const c = Math.cos(angle);
         * const s = Math.sin(angle);
         *
         * context.createClippingRoom({
         *   size: [10, 5, 8],
         *   transform: [
         *     c, 0, s, 0,    // First row (rotation + scale)
         *     0, 1, 0, 0,    // Second row (rotation + scale)
         *     -s, 0, c, 0,   // Third row (rotation + scale)
         *     0, 0, 0, 1     // Fourth row (translation + w)
         *   ]
         * });
         * ```
         *
         * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
         */
        transform?: [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
    }
    /**
     * Configuration properties for clip planes.
     *
     * These properties control the position, orientation, appearance, and behavior
     * of clip planes. They can be used when creating or modifying
     * clip planes.
     *
     * @see {@link ClipPlaneAPI}
     * @see {@link ClipPlaneAPI.createClipPlane}
     * @see {@link ClipPlaneAPI.changeClipPlane}
     */
    interface ClipPlaneProperties {
        /**
         * Animation configuration for the clip plane.
         *
         * IMPORTANT: You must first create animation frames using {@link AnimationAPI.createAnimationFrames}
         * with a specific name. Then you can reference those frames by providing that same name in this property.
         *
         * The {@link animation} property accepts a name (which must match the name used when creating the animation frames)
         * and animation options that control how those frames are played. Animation only works when using
         * {@link ClipPlaneAPI.changeClipPlane}, not when initially creating a clip plane.
         *
         * Setting this property to null stops any active animation.
         *
         * Example:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // First, create animation frames with a specific name
         * context.createAnimationFrames("clip_plane_motion", [
         *   { time: 0, translation: [0, 0, 0], rotation: [0, 0, 0] },
         *   { time: 0.5, translation: [10, 0, 0], rotation: [0, Math.PI/4, 0] },
         *   { time: 1, translation: [0, 0, 0], rotation: [0, Math.PI/2, 0] }
         * ]);
         *
         * // Create a clip plane (animation won't be applied here)
         * const clipPlaneId = context.createClipPlane({
         *   normal: [0, 0, 1],
         *   position: [0, 0, 0]
         * });
         *
         * // Apply animation to the existing clip plane, referencing the previously created frames
         * context.changeClipPlane(clipPlaneId, {
         *   animation: {
         *     name: "clip_plane_motion",  // Must match the name used in createAnimationFrames
         *     duration: 2000,
         *     iterationCount: 3
         *   }
         * });
         *
         * // Stop animation
         * context.changeClipPlane(clipPlaneId, {
         *   animation: null
         * });
         * ```
         *
         * @see {@link AnimationOptions}
         * @see {@link AnimationFrame}
         * @see {@link AnimationAPI.createAnimationFrames}
         * @default null
         */
        animation?:
            | ({
                name: string;
            } & AnimationOptions)
            | null;
        /**
         * List of node IDs which should be exclusively clipped by this clip plane.
         *
         * When specified, only these nodes will be affected by the clip plane, all others
         * will be ignored. This property is mutually exclusive with excludedNodes.
         *
         * Example:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Only clip nodes 123 and 456
         * context.createClipPlane({
         *   normal: [0, 1, 0],
         *   clippedNodes: [123, 456]
         * });
         * ```
         *
         * @default []
         */
        clippedNodes?: number[];
        /**
         * Controls whether the clip plane is enabled or disabled.
         *
         * When set to false, the clip plane exists but has no effect on the scene.
         * This allows temporarily disabling clipping without removing the clip plane.
         *
         * @default true
         */
        enabled?: boolean;
        /**
         * List of node IDs which should be excluded from clipping.
         *
         * When specified, these nodes will not be affected by the clip plane, while all others
         * will be clipped. This property is mutually exclusive with clippedNodes.
         *
         * Example:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Clip everything except nodes 123 and 456
         * context.createClipPlane({
         *   normal: [0, 1, 0],
         *   excludedNodes: [123, 456]
         * });
         * ```
         *
         * @default []
         */
        excludedNodes?: number[];
        /**
         * Controls whether the visual representation of the clip plane is hidden.
         *
         * When set to true, the clip plane will still perform clipping, but its
         * visual indicator (the plane outline) will not be displayed.
         *
         * @default false
         */
        invisible?: boolean;
        /**
         * The display name of the clip plane.
         *
         * This name can be used for identification in user interfaces or debugging.
         *
         * @default undefined
         */
        name?: string;
        /**
         * The normal vector of the clip plane.
         *
         * This vector defines the orientation of the clip plane, pointing in the
         * direction where geometry will be clipped away. The vector will be normalized
         * internally.
         *
         * @default [0, 1, 0]
         */
        normal?: [number, number, number] | Float32Array;
        /**
         * The position of the clip plane in 3D space.
         *
         * This defines a point on the clip plane, determining its location in the scene.
         *
         * @default [0, 0, 0]
         */
        position?: [number, number, number] | Float32Array;
        /**
         * The tangent vector of the clip plane.
         *
         * This vector is perpendicular to the normal and defines the orientation of the
         * plane's visual representation. If not provided, it will be automatically calculated
         * to be perpendicular to the normal.
         *
         * @default [1, 0, 0]
         */
        tangent?: [number, number, number] | Float32Array;
        /**
         * The thickness of the clip plane's non-clipping volume.
         *
         * When set to a value greater than zero, this creates a volume around the clip plane
         * where geometry is not clipped. For example, if thickness is set to 1.0, then geometry
         * within 1.0 units perpendicular distance on both sides of the plane will remain visible,
         * regardless of which side of the plane it's on. This is useful for creating cross-section
         * views that highlight geometry near the cut plane.
         *
         * @default 0
         */
        thickness?: number;
        /**
         * The transformation matrix of the clip plane.
         *
         * This 4x4 matrix defines the complete transformation (position, rotation, and scale)
         * of the clip plane in world space.
         *
         * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
         */
        transform?: [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
    }
    /**
     * ## ClipPlaneAPI
     *
     * ### Overview
     * Clip planes are used to visually cut through 3D models by defining a separating plane
     * that hides geometry on one side. This makes it possible to examine internal structures
     * and cross-sections of models that would otherwise be hidden.
     *
     * A clip room consists of six orthogonal planes forming a box that clips any geometry
     * outside of it, useful for focusing on specific regions of interest.
     *
     * ### Key Features
     *
     * - Creating individual clip planes with specific orientation and position
     * - Creating clip rooms (box-shaped clipping volumes)
     * - Positioning clip planes relative to selected components
     * - Enabling/disabling clip planes
     * - Creating capping geometry to visualize cut surfaces
     * - Configuring which nodes are affected by clipping
     *
     * ### Quick Start
     *
     * ```javascript
     * // Get the webvis context
     * const context = webvis.getContext();
     *
     * // Create a basic clip plane
     * const clipPlaneId = context.createClipPlane({
     *   normal: [0, 0, 1],     // Z-axis normal (up)
     *   position: [0, 0, 0]    // Passing through origin
     * });
     *
     * // Create a clip room around selected nodes
     * const selectedNodes = context.getSelectedNodes();
     * context.clipOtherParts(selectedNodes);
     *
     * // Create and visualize a cut surface
     * await context.createCapping(clipPlaneId);
     * ```
     *
     * ### Events
     *
     * The API triggers the following events:
     *
     * - {@link ClipPlaneCreatedEvent}
     * - {@link ClipPlaneChangedEvent}
     * - {@link ClipPlaneRemovedEvent}
     * - {@link ClippingRoomCreatedEvent}
     * - {@link ClippingRoomChangedEvent}
     * - {@link ClippingRoomRemovedEvent}
     *
     * ### Related Types
     *
     * - {@link ClipPlaneProperties}
     * - {@link ClipRoomProperties}
     */
    interface ClipPlaneAPI {
        /**
         * Creates a new clip plane.
         *
         * Clip planes create a visual cut through 3D models, allowing examination of internal structures
         * by hiding geometry on one side of the plane. The orientation and position of the plane are
         * defined by its normal vector and a point on the plane.
         *
         * A clip plane can be configured to exclude specific nodes from clipping or to clip only
         * specific nodes, using the excludedNodes and clippedNodes properties respectively.
         *
         * Triggers a {@link ClipPlaneCreatedEvent} when the clip plane is created.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a clip plane aligned with the XY plane
         * const clipPlaneId = context.createClipPlane({
         *   normal: [0, 0, 1],     // Z-axis normal
         *   position: [0.04, -0.03, -0.15],   // Passing through a specific point
         *   name: "Section View"
         * });
         *
         * // Create a clip plane with excluded nodes
         * const clipPlaneId = context.createClipPlane({
         *   normal: [1, 0, 0],
         *   excludedNodes: [1234, 5678],  // These nodes won't be clipped
         *   invisible: true               // Hide the visual representation of the plane
         * });
         * ```
         *
         * @param properties Initial properties of the created clip plane. Default: {}
         * @returns The ID of the newly created clip plane.
         */
        createClipPlane(properties?: ClipPlaneProperties): number;
        /**
         * @deprecated Calling createClipPlane with single parameters is deprecated, please use ClipPlaneProperties instead.
         *
         * Creates a clip plane defined by the plane's normal, positioned at an optional point (otherwise at
         * the world space origin) and an optional name.
         *
         * @param normal The normal of the clip plane
         * @param point An arbitrary point in space which lies on the clip plane
         * @param name The name of the clip plane
         * @param thickness The thickness of the clip plane
         * @param tangent The tangent of the clip plane
         * @param disabled The state of the clip plane
         * @param invisible Invisible on the UI
         * @param exclusive Set the exclusive flag to clip geometry when using exclusiveClipplanes property
         * @returns The ID of the newly created clip plane
         */
        createClipPlane(
            normal?: Float32Array | Array<number>,
            point?: Float32Array | Array<number>,
            name?: string,
            thickness?: number,
            tangent?: Float32Array | Array<number>,
            disabled?: boolean,
            invisible?: boolean,
            exclusive?: boolean,
        ): number;
        /**
         * Changes one or more properties of an existing clip plane .
         *
         * Allows modifying various aspects of a clip plane such as orientation, position,
         * visibility, and selection of which nodes are affected. Only the properties
         * specified in the properties object will be changed.
         *
         * Triggers a {@link ClipPlaneChangedEvent} when properties are modified.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Change the position and orientation of a clip plane
         * const updatedProps = context.changeClipPlane(clipPlaneId, {
         *   normal: [0, 1, 0],     // Update to Y-axis normal
         *   position: [0, 0, 5],   // Move to new position
         *   invisible: true        // Hide the visual plane representation
         * });
         *
         * // Exclude certain components from being clipped
         * context.changeClipPlane(clipPlaneId, {
         *   excludedNodes: [1234, 5678]  // These nodes won't be affected by the clip plane
         * });
         * ```
         *
         * @param clipPlaneId The ID of the clip plane to modify
         * @param properties Properties to change on the clip plane
         * @returns An object containing only the properties that were actually changed
         */
        changeClipPlane(clipPlaneId: number, properties: ClipPlaneProperties): ClipPlaneProperties;
        /**
         * @deprecated Calling changeClipPlane with single parameters is deprecated, please use the version with ClipPlaneProperties instead.
         *
         * Changes properties of an existing clip plane using individual parameters.
         *
         * Triggers a {@link ClipPlaneChangedEvent} when properties are modified.
         *
         * @param clipPlaneID The ID of the clip plane to modify
         * @param normal The new normal vector for the clip plane
         * @param point A point in space that lies on the clip plane
         * @param name The display name for the clip plane
         * @param thickness The visual thickness of the clip plane
         * @param tangent The tangent vector for the clip plane
         * @param disabled Whether the clip plane is enabled (false) or disabled (true)
         * @param invisible Whether the clip plane's visual representation is hidden
         * @param exclusive Whether the clip plane only affects nodes with the exclusiveClipplanes property
         */
        changeClipPlane(
            clipPlaneID: number,
            normal?: Float32Array | Array<number>,
            point?: Float32Array | Array<number>,
            name?: string,
            thickness?: number,
            tangent?: Float32Array | Array<number>,
            disabled?: boolean,
            invisible?: boolean,
            exclusive?: boolean,
        ): void;
        /**
         * Returns the IDs of all clip planes.
         *
         * This method provides a list of all clip plane IDs that can be used with other
         * ClipPlaneAPI methods like changeClipPlane, removeClipPlane, or requestClipPlaneData.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Get all clip planes and print their properties
         * const clipPlaneIds = context.getClipPlanes();
         *
         * clipPlaneIds.forEach(async (id) => {
         *   const properties = await context.requestClipPlaneData(id);
         *   console.log(`Clip plane ${id}: ${properties.name || 'unnamed'}`);
         * });
         * ```
         *
         * @returns An array of clip plane IDs. Empty array if no clip planes exist.
         */
        getClipPlanes(): Array<number>;
        /**
         * Retrieves the properties of a specific clip plane.
         *
         * This method asynchronously fetches the current configuration of a clip plane,
         * including its position, orientation, visibility settings, and any node exclusions.
         * The data is returned as a ClipPlaneProperties object that can be inspected or used
         * to create a similar clip plane.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * const properties = await context.requestClipPlaneData(clipPlaneId);
         * console.log(`Clip plane position: [${properties.position}]`);
         * console.log(`Clip plane normal: [${properties.normal}]`);
         *
         * // Use the properties to create a similar clip plane
         * const newClipPlaneId = context.createClipPlane({
         *   ...properties,
         *   name: properties.name + " (copy)"
         * });
         * ```
         *
         * @param clipPlaneId The ID of the clip plane to get data for
         * @returns Promise resolving to the clip plane's properties
         */
        requestClipPlaneData(clipPlaneId: number): Promise<ClipPlaneProperties>;
        /**
         * Removes a clip plane from the scene.
         *
         * This method completely removes the specified clip plane from the scene. Any capping
         * geometry associated with the clip plane will also be removed.
         *
         * When the `safe` parameter is set to true and the clip plane is referenced by snapshots,
         * the removal will be prevented and the method will return `REFERENCED_BY_SNAPSHOT`.
         * By default (`safe` is false), clip planes will be forcibly removed even if they're
         * referenced by snapshots.
         *
         * Triggers a {@link ClipPlaneRemovedEvent} when the clip plane is successfully removed.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Safe remove - will fail if referenced by snapshots
         * const removeResult = context.removeClipPlane(clipPlaneId, true);
         *
         * if (removeResult === webvis.RemoveState.REFERENCED_BY_SNAPSHOT) {
         *   console.log("Cannot remove clip plane - it's referenced by a snapshot");
         * } else if (removeResult === webvis.RemoveState.OK) {
         *   console.log("Clip plane successfully removed");
         * }
         *
         * // Force remove even if referenced by snapshots (default behavior)
         * context.removeClipPlane(clipPlaneId);
         * ```
         *
         * @param clipPlaneId The ID of the clip plane to remove
         * @param safe Whether to prevent removal if the clip plane is referenced by snapshots. Default: false
         * @returns A RemoveState value indicating the result of the removal operation
         */
        removeClipPlane(clipPlaneId: number, safe?: boolean): RemoveState;
        /**
         * Creates a new clip room.
         *
         * A clip room consists of six orthogonal planes forming a box that clips any geometry
         * outside of it. This is useful for examining internal structures of complex models
         * or focusing on specific regions of interest.
         *
         * Clip rooms can be positioned and sized using the properties object, and can be
         * made invisible (for clipping without showing the room boundaries) or disabled
         * temporarily without removing them.
         *
         * Triggers a {@link ClippingRoomCreatedEvent} when the clip room is created.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a basic clip room at the origin
         * context.createClippingRoom({
         *   size: [10, 10, 10],        // Size along X, Y, and Z axes
         *   name: "Engine Section"
         * });
         *
         * // Create a positioned and rotated clip room
         * context.createClippingRoom({
         *   size: [5, 5, 5],
         *   // Matrix including rotation and translation
         *   transform: [
         *     0.866, 0.5, 0, 0,      // First row (rotation + scale)
         *     -0.5, 0.866, 0, 0,     // Second row (rotation + scale)
         *     0, 0, 1, 0,            // Third row (rotation + scale)
         *     10, 5, 3, 1            // Fourth row (translation + w)
         *   ]
         * });
         * ```
         *
         * @param properties Initial properties of the created clip room. Default: {}
         */
        createClippingRoom(properties?: ClipRoomProperties): void;
        /**
         * @deprecated Calling createClippingRoom with single parameters is deprecated, please use ClipRoomProperties instead.
         *
         * Creates a new clip room.
         *
         * @param {string} name - The name of the clip room.
         * @param {Float32Array | Array<number>} size - The size of the clip room.
         * @param {Float32Array | Array<number>} transformation - The transformation of the clip room.
         * @param {boolean} disabled - The disabled state of the clip room.
         * @param {boolean} invisible - The invisible state of the clip room.
         */
        createClippingRoom(
            name?: string,
            size?: Float32Array | Array<number>,
            transformation?: Float32Array | Array<number>,
            disabled?: boolean,
            invisible?: boolean,
        ): void;
        /**
         * Changes one or more properties of an existing clip room.
         *
         * Allows modifying various aspects of the clip room such as size, position,
         * orientation (via transform matrix), visibility, and enabled state. Only the properties
         * specified in the properties object will be changed.
         *
         * Since WebVis only supports a single clip room at a time, there's no need to specify
         * a clip room ID. If no clip room exists when this method is called, it will create one.
         *
         * Triggers a {@link ClippingRoomChangedEvent} when properties are modified.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Change the size and position of a clip room
         * const updatedProps = context.changeClippingRoom({
         *   size: [20, 15, 10],          // Resize the clip room
         *   transform: [                 // Move to new position with rotation
         *     1, 0, 0, 0,
         *     0, 1, 0, 0,
         *     0, 0, 1, 0,
         *     5, 2, 3, 1                 // Translation component
         *   ],
         *   invisible: true              // Hide the visual representation
         * });
         *
         * // Disable the clip room temporarily without removing it
         * context.changeClippingRoom({
         *   enabled: false
         * });
         * ```
         *
         * @param properties Properties to change on the clip room
         * @returns An object containing only the properties that were actually changed
         */
        changeClippingRoom(properties?: ClipRoomProperties): ClipRoomProperties;
        /**
         * @deprecated Calling changeClippingRoom with single parameters is deprecated, please use ClipRoomProperties instead.
         *
         * Changes one or more properties of the clip room.
         *
         * @param {string} name - The name of the clip room.
         * @param {Float32Array | Array<number>} size - The size of the clip room.
         * @param {Float32Array | Array<number>} transformation - The transformation of the clip room.
         * @param {boolean} disabled - The disabled state of the clip room.
         * @param {boolean} invisible - The invisible state of the clip room.
         * @returns {ClipRoomProperties} An object with the changed properties.
         */
        changeClippingRoom(
            name?: string,
            size?: Float32Array | Array<number>,
            transformation?: Float32Array | Array<number>,
            disabled?: boolean,
            invisible?: boolean,
        ): ClipRoomProperties;
        /**
         * Removes the clip room from the scene.
         *
         * This method completely removes the clip room and disables its clipping effect.
         * Only one clip room can exist at a time, so there's no need to specify an ID.
         *
         * When the `safe` parameter is set to true and the clip room is referenced by snapshots,
         * the removal will be prevented and the method will return `REFERENCED_BY_SNAPSHOT`.
         * By default (`safe` is false), the clip room will be forcibly removed even if it's
         * referenced by snapshots.
         *
         * Triggers a {@link ClippingRoomRemovedEvent} when the clip room is successfully removed.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Safe remove - will fail if referenced by snapshots
         * const removeResult = context.removeClippingRoom(true);
         *
         * if (removeResult === webvis.RemoveState.REFERENCED_BY_SNAPSHOT) {
         *   console.log("Cannot remove clip room - it's referenced by a snapshot");
         * } else if (removeResult === webvis.RemoveState.OK) {
         *   console.log("Clip room successfully removed");
         * }
         *
         * // Force remove even if referenced by snapshots (default behavior)
         * context.removeClippingRoom();
         * ```
         *
         * @param safe Whether to prevent removal if the clip room is referenced by snapshots. Default: false
         * @returns A RemoveState value indicating the result of the removal operation
         */
        removeClippingRoom(safe?: boolean): RemoveState;
        /**
         * Returns the ID of the current clip room.
         *
         * Since WebVis only supports a single clip room at a time, this method returns
         * a single ID value rather than an array. The ID can be used with other clip room
         * methods like requestClipRoomData.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Get the current clip room ID and retrieve its properties
         * const clipRoomId = context.getClipRoom();
         *
         * if (clipRoomId !== undefined) {
         *   const properties = await context.requestClipRoomData();
         *   console.log(`Clip room size: [${properties.size}]`);
         * } else {
         *   console.log("No clip room exists in the scene");
         * }
         * ```
         *
         * @returns The ID of the current clip room, or undefined if no clip room exists
         */
        getClipRoom(): number | undefined;
        /**
         * Retrieves the properties of the current clip room.
         *
         * This method asynchronously fetches the current configuration of the clip room,
         * including its size, position, transformation matrix, and visibility settings.
         * The data is returned as a ClipRoomProperties object that can be inspected or used
         * to create a similar clip room after the current one is removed.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Get the clip room properties and display information
         * const properties = await context.requestClipRoomData();
         * console.log(`Clip room size: [${properties.size}]`);
         * console.log(`Clip room transform: [${properties.transform}]`);
         *
         * // Use the properties to create a similar clip room after removing the current one
         * context.removeClippingRoom();
         * context.createClippingRoom({
         *   ...properties,
         *   size: [properties.size[0] * 1.5, properties.size[1] * 1.5, properties.size[2] * 1.5],
         *   name: properties.name ? properties.name + " (enlarged)" : "Enlarged Room"
         * });
         * ```
         *
         * @returns Promise resolving to the clip room's properties
         */
        requestClipRoomData(): Promise<ClipRoomProperties>;
        /**
         * Creates a clip room that encompasses the selected node(s).
         *
         * This method automatically calculates a bounding box around the specified target
         * node(s) and creates a clip room with the exact dimensions of that box. It's an
         * easy way to isolate specific components for closer examination by clipping away
         * all surrounding geometry.
         *
         * The created clip room replaces any existing clip room .
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a clip room around a single component
         * context.clipOtherParts(4567);
         *
         * // Create a clip room around multiple components
         * context.clipOtherParts([1234, 5678, 9012]);
         *
         * // Create a clip room around the currently selected components
         * const selectedNodes = context.getSelectedNodes();
         * if (selectedNodes.length > 0) {
         *   context.clipOtherParts(selectedNodes);
         * }
         * ```
         *
         * @param target ID or array of IDs of the nodes to create a clip room around
         */
        clipOtherParts(target: number | Array<number>): void;
        /**
         * Generates capping geometry for the surface that is cut by a clip plane.
         *
         * This method creates visible geometry at the intersection of the clip plane and the model,
         * allowing you to see and interact with the cut surface. The generated capping geometry
         * supports measurements and all other operations that can be performed on regular geometry.
         *
         * Once generated, capping geometry can be enabled, disabled, or removed using the
         * corresponding methods.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a clip plane
         * const clipPlaneId = context.createClipPlane({
         *   normal: [0, 0, 1],
         *   position: [0, 0, 0]
         * });
         *
         * // Generate capping geometry for the cut surface
         * await context.createCapping(clipPlaneId);
         *
         * // Later, disable the capping when not needed
         * await context.disableCapping(clipPlaneId);
         * ```
         *
         * @param clipPlaneId The ID of the clip plane to create capping geometry for
         * @returns Promise that resolves when the capping geometry has been created
         */
        createCapping(clipPlaneId: number): Promise<void>;
        /**
         * Enables the generated capping geometry for a clip plane.
         *
         * After capping geometry has been created for a clip plane, this method makes it visible
         * . The capping geometry represents the intersection between the clip plane
         * and the model, allowing visualization and interaction with the cut surface.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a clip plane and generate capping geometry
         * const clipPlaneId = context.createClipPlane({
         *   normal: [0, 0, 1],
         *   position: [0, 0, 0]
         * });
         *
         * await context.createCapping(clipPlaneId);
         *
         * // Later disable capping and then re-enable it
         * await context.disableCapping(clipPlaneId);
         * // ...
         * await context.enableCapping(clipPlaneId);
         * ```
         *
         * @param clipPlaneId The ID of the clip plane whose capping geometry should be enabled
         * @returns Promise that resolves when the capping geometry has been enabled
         */
        enableCapping(clipPlaneId: number): Promise<void>;
        /**
         * Disables the generated capping geometry for a clip plane.
         *
         * This method temporarily hides the capping geometry without removing it from
         * the scene. The capping geometry can be made visible again using {@link enableCapping}.
         * This is useful when you need to switch between seeing the cut surface and
         * seeing through to the interior of the model.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a clip plane and generate capping geometry
         * const clipPlaneId = context.createClipPlane({
         *   normal: [0, 0, 1],
         *   position: [0, 0, 0]
         * });
         *
         * await context.createCapping(clipPlaneId);
         *
         * // Hide the capping geometry temporarily
         * await context.disableCapping(clipPlaneId);
         *
         * // Show it again later
         * await context.enableCapping(clipPlaneId);
         * ```
         *
         * @param clipPlaneId The ID of the clip plane whose capping geometry should be disabled
         * @returns Promise that resolves when the capping geometry has been disabled
         */
        disableCapping(clipPlaneId: number): Promise<void>;
        /**
         * Completely removes the generated capping geometry for a clip plane.
         *
         * This method permanently deletes any capping geometry that was previously created
         * for the specified clip plane. Unlike {@link disableCapping}, which merely hides the
         * geometry, this method removes it entirely from the scene.
         *
         * If you later want to see capping geometry again, you'll need to call {@link createCapping}
         * to regenerate it.
         *
         * Example usage:
         * ```javascript
         * // Get the webvis context
         * const context = webvis.getContext();
         *
         * // Create a clip plane and generate capping geometry
         * const clipPlaneId = context.createClipPlane({
         *   normal: [0, 0, 1],
         *   position: [0, 0, 0]
         * });
         *
         * await context.createCapping(clipPlaneId);
         *
         * // Later, permanently remove the capping geometry
         * await context.removeCapping(clipPlaneId);
         * ```
         *
         * @param clipPlaneId The ID of the clip plane whose capping geometry should be removed
         * @returns Promise that resolves when the capping geometry has been removed
         */
        removeCapping(clipPlaneId: number): Promise<void>;
    }
    /**
     * Event that is fired when a clip plane is removed from the scene.
     * Contains the ID of the clip plane that was removed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ClipPlaneAPI}
     * @see {@link EventType.CLIPPLANE_REMOVED}
     */
    class ClipPlaneRemovedEvent extends WebVisEvent {
        clipPlaneID: number;
        /**
         * @param clipPlaneID The ID of the clip plane that was removed
         */
        constructor(clipPlaneID: number);
    }
    /**
     * Event that is fired when a clip plane is created in the scene.
     * Contains the clip plane ID and an object with all the initial properties of the clip plane.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ClipPlaneAPI}
     * @see {@link EventType.CLIPPLANE_CREATED}
     */
    class ClipPlaneCreatedEvent extends WebVisEvent {
        clipPlaneID: number;
        properties: ClipPlaneProperties;
        /**
         * @param clipPlaneID The ID of the clip plane that was created
         * @param properties An object containing all properties of the created clip plane
         */
        constructor(clipPlaneID: number, properties: ClipPlaneProperties);
        /**
         * @deprecated The disabled getter is deprecated. Please use {@link ClipPlaneProperties.enabled} instead (note that disabled = !enabled).
         *
         * Returns whether the clip plane is disabled. This is the inverse of the enabled property
         * in the properties object.
         *
         * @see {@link ClipPlaneProperties.enabled}
         */
        get disabled(): boolean;
        /**
         * @deprecated The invisible getter is deprecated. Please use {@link ClipPlaneProperties.invisible} instead.
         *
         * Returns whether the clip plane is visually hidden. When true, the clip plane's
         * wireframe outline will not be displayed, though the clipping effect remains active.
         *
         * @see {@link ClipPlaneProperties.invisible}
         */
        get invisible(): boolean;
        /**
         * @deprecated The localTransform getter is deprecated. Please use {@link ClipPlaneProperties.transform} instead.
         *
         * Returns the 4x4 transformation matrix that defines the position, rotation, and scale
         * of the clip plane in world space.
         *
         * @see {@link ClipPlaneProperties.transform}
         */
        get localTransform(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
        /**
         * @deprecated The name getter is deprecated. Please use {@link ClipPlaneProperties.name} instead.
         *
         * Returns the display name of the clip plane, which can be used for identification
         * in user interfaces or for debugging purposes.
         *
         * @see {@link ClipPlaneProperties.name}
         */
        get name(): string;
        /**
         * @deprecated The normal getter is deprecated. Please use {@link ClipPlaneProperties.normal} instead.
         *
         * Returns the normal vector of the clip plane, which defines its orientation in space.
         *
         * @see {@link ClipPlaneProperties.normal}
         */
        get normal(): [number, number, number] | Float32Array;
        /**
         * @deprecated The position getter is deprecated. Please use {@link ClipPlaneProperties.position} instead.
         *
         * Returns the position of the clip plane in world space.
         *
         * @see {@link ClipPlaneProperties.position}
         */
        get position(): [number, number, number] | Float32Array;
        /**
         * @deprecated The point getter is deprecated. Please use {@link ClipPlaneProperties.position} instead.
         *
         * Returns the position of the clip plane in world space.
         *
         * @see {@link ClipPlaneProperties.position}
         */
        get point(): [number, number, number] | Float32Array;
        /**
         * @deprecated The thickness getter is deprecated. Please use {@link ClipPlaneProperties.thickness} instead.
         *
         * Returns the visual thickness of the clip plane representation in the scene.
         *
         * @see {@link ClipPlaneProperties.thickness}
         */
        get thickness(): number;
    }
    /**
     * Event that is fired when properties of a clip plane are changed.
     * Contains the clip plane ID and an object with only the properties that were actually changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ClipPlaneAPI}
     * @see {@link EventType.CLIPPLANE_CHANGED}
     */
    class ClipPlaneChangedEvent extends WebVisEvent {
        clipPlaneID: number;
        properties: ClipPlaneProperties;
        /**
         * @param clipPlaneID The ID of the clip plane that was changed
         * @param properties An object containing only the properties that were changed
         */
        constructor(clipPlaneID: number, properties: ClipPlaneProperties);
        /**
         * @deprecated The disabled getter is deprecated. Please use {@link ClipPlaneProperties.enabled} instead (note that disabled = !enabled).
         *
         * Returns whether the clip plane is disabled. This is the inverse of the enabled property
         * in the properties object.
         *
         * @see {@link ClipPlaneProperties.enabled}
         */
        get disabled(): boolean;
        /**
         * @deprecated The invisible getter is deprecated. Please use {@link ClipPlaneProperties.invisible} instead.
         *
         * Returns whether the clip plane is visually hidden. When true, the clip plane's
         * wireframe outline will not be displayed, though the clipping effect remains active.
         *
         * @see {@link ClipPlaneProperties.invisible}
         */
        get invisible(): boolean;
        /**
         * @deprecated The localTransform getter is deprecated. Please use {@link ClipPlaneProperties.transform} instead.
         *
         * Returns the 4x4 transformation matrix that defines the position, rotation, and scale
         * of the clip plane in world space.
         *
         * @see {@link ClipPlaneProperties.transform}
         */
        get localTransform(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
        /**
         * @deprecated The name getter is deprecated. Please use {@link ClipPlaneProperties.name} instead.
         *
         * Returns the display name of the clip plane, which can be used for identification
         * in user interfaces or for debugging purposes.
         *
         * @see {@link ClipPlaneProperties.name}
         */
        get name(): string;
        /**
         * @deprecated The normal getter is deprecated. Please use {@link ClipPlaneProperties.normal} instead.
         *
         * Returns the normal vector of the clip plane, which defines its orientation in space.
         *
         * @see {@link ClipPlaneProperties.normal}
         */
        get normal(): [number, number, number] | Float32Array;
        /**
         * @deprecated The position getter is deprecated. Please use {@link ClipPlaneProperties.position} instead.
         *
         * Returns the position of the clip plane in world space.
         *
         * @see {@link ClipPlaneProperties.position}
         */
        get position(): [number, number, number] | Float32Array;
        /**
         * @deprecated The point getter is deprecated. Please use {@link ClipPlaneProperties.position} instead.
         *
         * Returns the position of the clip plane in world space.
         *
         * @see {@link ClipPlaneProperties.position}
         */
        get point(): [number, number, number] | Float32Array;
        /**
         * @deprecated The thickness getter is deprecated. Please use {@link ClipPlaneProperties.thickness} instead.
         *
         * Returns the visual thickness of the clip plane representation in the scene.
         *
         * @see {@link ClipPlaneProperties.thickness}
         */
        get thickness(): number;
    }
    /**
     * Event that is fired when a clip room is removed from the scene.
     * Contains the ID of the clip room that was removed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ClipPlaneAPI}
     * @see {@link EventType.CLIPPING_ROOM_REMOVED}
     */
    class ClippingRoomRemovedEvent extends WebVisEvent {
        clipRoomID: number;
        /**
         * @param clipRoomID The ID of the clip room that was removed
         */
        constructor(clipRoomID: number);
    }
    /**
     * Event that is fired when a clip room is created in the scene.
     * Contains the clip room ID and an object with all the initial properties of the clip room.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ClipPlaneAPI}
     * @see {@link EventType.CLIPPING_ROOM_CREATED}
     */
    class ClippingRoomCreatedEvent extends WebVisEvent {
        clipRoomID: number;
        properties: ClipRoomProperties;
        /**
         * @param clipRoomID The ID of the clip room that was created
         * @param properties An object containing all properties of the created clip room
         */
        constructor(clipRoomID: number, properties: ClipRoomProperties);
        /**
         * @deprecated The disabled getter is deprecated. Please use {@link ClipRoomProperties.enabled} instead (note that disabled = !enabled).
         *
         * Returns whether the clip room is disabled. This is the inverse of the enabled property
         * in the properties object.
         *
         * @see {@link ClipRoomProperties.enabled}
         */
        get disabled(): boolean;
        /**
         * @deprecated The invisible getter is deprecated. Please use {@link ClipRoomProperties.invisible} instead.
         *
         * Returns whether the clip room is visually hidden. When true, the clip room's
         * wireframe outline will not be displayed, though the clipping effect remains active.
         *
         * @see {@link ClipRoomProperties.invisible}
         */
        get invisible(): boolean;
        /**
         * @deprecated The name getter is deprecated. Please use {@link ClipRoomProperties.name} instead.
         *
         * Returns the display name of the clip room, which can be used for identification
         * in user interfaces or for debugging purposes.
         *
         * @see {@link ClipRoomProperties.name}
         */
        get name(): string;
        /**
         * @deprecated The size getter is deprecated. Please use {@link ClipRoomProperties.size} instead.
         *
         * Returns the dimensions of the clip room along the X, Y, and Z axes.
         * The size defines the extent of the clipping box in local space.
         *
         * @see {@link ClipRoomProperties.size}
         */
        get size(): [number, number, number] | Float32Array;
        /**
         * @deprecated The transformation getter is deprecated. Please use {@link ClipRoomProperties.transform} instead.
         *
         * Returns the 4x4 transformation matrix that defines the position, rotation, and scale
         * of the clip room in world space.
         *
         * @see {@link ClipRoomProperties.transform}
         */
        get transformation(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
    }
    /**
     * Event that is fired when properties of a clip room are changed.
     * Contains the clip room ID and an object with only the properties that were actually changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link ClipPlaneAPI}
     * @see {@link EventType.CLIPPING_ROOM_CHANGED}
     */
    class ClippingRoomChangedEvent extends WebVisEvent {
        clipRoomID: number;
        properties: ClipRoomProperties;
        /**
         * @param clipRoomID The ID of the clip room.
         * @param properties An object containing only the properties that were changed
         */
        constructor(clipRoomID: number, properties: ClipRoomProperties);
        /**
         * @deprecated The disabled getter is deprecated. Please use {@link ClipRoomProperties.enabled} instead (note that disabled = !enabled).
         *
         * Returns whether the clip room is disabled. This is the inverse of the enabled property
         * in the properties object.
         *
         * @see {@link ClipRoomProperties.enabled}
         */
        get disabled(): boolean;
        /**
         * @deprecated The invisible getter is deprecated. Please use {@link ClipRoomProperties.invisible} instead.
         *
         * Returns whether the clip room is visually hidden. When true, the clip room's
         * wireframe outline will not be displayed, though the clipping effect remains active.
         *
         * @see {@link ClipRoomProperties.invisible}
         */
        get invisible(): boolean;
        /**
         * @deprecated The name getter is deprecated. Please use {@link ClipRoomProperties.name} instead.
         *
         * Returns the display name of the clip room, which can be used for identification
         * in user interfaces or for debugging purposes.
         *
         * @see {@link ClipRoomProperties.name}
         */
        get name(): string;
        /**
         * @deprecated The size getter is deprecated. Please use {@link ClipRoomProperties.size} instead.
         *
         * Returns the dimensions of the clip room along the X, Y, and Z axes.
         * The size defines the extent of the clipping box in local space.
         *
         * @see {@link ClipRoomProperties.size}
         */
        get size(): [number, number, number] | Float32Array;
        /**
         * @deprecated The transformation getter is deprecated. Please use {@link ClipRoomProperties.transform} instead.
         *
         * Returns the 4x4 transformation matrix that defines the position, rotation, and scale
         * of the clip room in world space.
         *
         * @see {@link ClipRoomProperties.transform}
         */
        get transformation(): [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
    }
    /**
     * ## webvis: The AttachmentAPI
     *
     * ### Overview
     * The **AttachmentAPI** provides basic functionalities to define additional data optionally attached to a node.
     * This data can be of any type defined in {@link AttachmentType} and is stored in the form of a URI.
     * The AttachmentAPI provides methods to {@link AttachmentAPI.fetchAttachmentData fetch}, {@link AttachmentAPI.setAttachmentData set} and {@link AttachmentAPI.removeAttachment remove} the data.
     *
     * ### Quick Start
     *
     * Example: Create a new attachment with text data.
     * ```javascript
     * const context = webvis.getContext();
     *
     * // Create a new attachment
     * const attachmentId = context.createAttachment(webvis.AttachmentType.TEXT);
     *
     * // Set the attachment data
     * context.setAttachmentData(attachmentId, "hello world");
     *
     * // Fetch the attachment data
     * await context.fetchAttachmentData(attachmentId); // returns "hello world"
     * ```
     *
     * ### Adding Attachments to nodes
     *
     * Attachments can be added to nodes using the {@link InstanceGraphAPI.setProperty setProperty} method.
     *
     * Example: attaching an attachment to a node.
     * ```javascript
     * const context = webvis.getContext();
     *
     * // Create a new attachment and set data
     * const attachmentId = context.createAttachment(webvis.AttachmentType.TEXT);
     * context.setAttachmentData(attachmentId, "hello world");
     *
     * // Attach the attachment to a node
     * context.setProperty(nodeId, webvis.Property.ATTACHMENT, attachmentId);
     *
     * // Fetch the attachment data
     * await context.getProperty(nodeId, webvis.Property.ATTACHMENT); // returns "hello world"
     * ```
     *
     * ### Events
     *
     * The following events are associated with the AttachmentAPI:
     * - {@link AttachmentCreatedEvent}
     * - {@link AttachmentDataChangedEvent}
     * - {@link AttachmentRemovedEvent}
     */
    interface AttachmentAPI {
        /**
         * Creates a new attachment.
         *
         * Triggers an {@link AttachmentCreatedEvent}.
         *
         * @param dataType Specifies the attachment data type.
         * @return The ID of the created attachment.
         */
        createAttachment(dataType: AttachmentType): number;
        /**
         * Removes the Attachment from the scene and all related snapshots.
         *
         * Triggers an {@link AttachmentRemovedEvent}.
         *
         * @param attachmentID Specifies the attachment object.
         * @param safe Performs a safe remove which interrupt the removal process if the attachment is part of one or more snapshots. If no safe remove, a snapshot could link to missing data. Default: false.
         * @return The state of the removal process.
         */
        removeAttachment(attachmentID: number, safe?: boolean): RemoveState;
        /**
         * Fetches and returns the attachment data of the specified attachment.
         *
         * @param attachmentID Specifies the attachment object.
         * @return The attached data.
         */
        fetchAttachmentData(attachmentID: number): Promise<Serializable>;
        /**
         * Returns the attachment data.
         *
         * @param attachmentID Specifies the attachment object.
         * @return The attached data
         * @deprecated getAttachmentData is deprecated, please use {@link fetchAttachmentData} instead.
         */
        getAttachmentData(attachmentID: number): Serializable;
        /**
         * Sets the attachment data.
         *
         * Triggers an {@link AttachmentDataChangedEvent}.
         *
         * @param attachmentID Specifies the attachment object.
         * @param data The new attachment data.
         */
        setAttachmentData(attachmentID: number, data: Serializable): void;
        /**
         * Returns the attachment data URI.
         *
         * @param attachmentID Specifies the attachment object.
         * @return The attachment data URI.
         */
        getAttachmentDataURI(attachmentID: number): string;
        /**
         * Sets the attachment data URI.
         *
         * @param attachmentID Specifies the attachment object.
         * @param dataURI The attachment data URI.
         */
        setAttachmentDataURI(attachmentID: number, dataURI: string): void;
    }
    /**
     * This event occurs if an attachment was removed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AttachmentAPI.removeAttachment}
     * @see {@link EventType.ATTACHMENT_REMOVED}
     */
    class AttachmentRemovedEvent extends WebVisEvent {
        attachmentID: number;
        /**
         * @param attachmentID The ID of the attachment.
         */
        constructor(attachmentID: number);
    }
    /**
     * This event occurs if the data of an attachment was changed.
     *
     * @event
     * @hideconstructor
     * @template T The data type fitting the {@link AttachmentType} of the attachment data.
     *
     * @see {@link AttachmentAPI.setAttachmentData}
     * @see {@link EventType.ATTACHMENT_DATA_CHANGED}
     */
    class AttachmentDataChangedEvent<T = any> extends WebVisEvent {
        attachmentID: number;
        data: T;
        /**
         * @param attachmentID The ID of the attachment.
         * @param data The new attachment data.
         */
        constructor(attachmentID: number, data: T);
    }
    /**
     * This event occurs if a new attachment was created.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AttachmentAPI.createAttachment}
     * @see {@link EventType.ATTACHMENT_CREATED}
     */
    class AttachmentCreatedEvent extends WebVisEvent {
        attachmentID: number;
        dataType: AttachmentType;
        /**
         * @param attachmentID The ID of the attachment.
         * @param dataType The type of the attachment data.
         */
        constructor(attachmentID: number, dataType: AttachmentType);
    }
    /**
     * Defines the information about the content type of attachments.
     * An attachment type stores information about the format of the attachment data.
     * Further information about the attachment type can be found in the official documentation of the responseType of a XMLHttpRequest.
     *
     * @see {@link AttachmentAPI.createAttachment}
     */
    enum AttachmentType {
        /**
         * Defines an attachment type for text data.
         */
        TEXT = "text",
        /**
         * Defines an attachment type for json data.
         */
        JSON = "json",
        /**
         * Defines an attachment type for arraybuffer data.
         */
        ARRAYBUFFER = "arraybuffer",
        /**
         * Defines an attachment type for blob data.
         */
        BLOB = "blob",
        /**
         * Defines an attachment type for HTML document or XML document data.
         */
        DOCUMENT = "document",
    }
    /**
     * The **AnnotationProperties** type defines the properties of an annotation.
     *
     * @see {@link AnnotationAPI}
     */
    interface AnnotationProperties {
        /**
         * The anchor position of the annotation.
         * @default [0,0,0]
         */
        anchorPosition?: [number, number, number] | Float32Array;
        /**
         * The connected Node ID of the annotation.
         * @default null
         */
        connectedNodeId?: number | null;
        /**
         * The content of the annotation.
         * @default undefined
         */
        content?: string;
        /**
         * The content offset of the annotation.
         * @default [1,0,1]
         */
        contentOffset?: [number, number, number] | Float32Array;
        /**
         * The enabled state of the annotation.
         * @default false
         */
        enabled?: boolean;
        /**
         * The name of the annotation.
         * @default undefined
         */
        name?: string;
        /**
         *  Specifies if the annotation comes from a trusted source.
         *  @default true
         */
        trustedSource?: boolean;
    }
    /**
     * **AnnotationData** defines the properties and content of an annotation.
     *
     * @see {@link AnnotationAPI}
     */
    interface AnnotationData {
        /**
         * The ID of a node the annotation is linked to.
         */
        nodeID: number;
        /**
         * The label of the annotation.
         *
         * @example "This is a great annotation!"
         */
        label: string;
        /**
         * Determines whether the annotation is visible or not.
         */
        visible: boolean;
        /**
         * Determines whether the annotation is active or not.
         */
        active: boolean;
        /**
         * Determines whether an explicit offset should be used or not.
         */
        explicitOffset: boolean;
        /**
         * Determines the annotation's anchor position.
         *
         * @example [0, 1, 0]
         */
        anchorPosition: [number, number, number] | Float32Array;
        /**
         * Determines the annotation's label position.
         *
         * @example [0, 2, 0]
         */
        labelPosition: [number, number, number] | Float32Array;
        /**
         * Provides the transform of the annotation.
         */
        transform: [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ] | Float32Array;
        /**
         * Determines whether the annotation source is trusted or not.
         */
        trustedSource: boolean;
    }
    /**
     * ### Overview
     *
     * The **AnnotationAPI** provides a set of tools for creating and managing annotations via the webvis context. It allows you to:
     *
     * - Create annotations and attach them to specific nodes in a scene.
     * - Edit and update existing annotations.
     * - Retrieve all annotations at once.
     * - Request detailed annotation data for a specific annotations.
     * - Remove annotations when they are no longer needed.
     *
     * Examples of all operations are provided below.
     *
     * ### Quick Start
     * The fastest way to get familiar with the AnnotationAPI is by creating annotations via the webvis context. Once you have the context, you can call the annotation methods directly.
     *
     * Example: Create, update and remove an annotation using the AnnotationAPI and connect the annotation to a node.
     *
     * ```typescript
     * // Get the webvis context
     * const context = webvis.getContext();
     *
     * // Create a node to attach the annotation to and enable the resource to make it visible
     * const nodeID = context.add({dataURI: "urn:x-i3d:shape:box", initialProperties: {enabled: true}});
     *
     * // Define custom annotation data using the AnnotationProperties type
     * const customAnnotationData = {
     *      anchorPosition: [0, 0, 0],
     *      connectedNodeId: 1,
     *      content: "New Annotation",
     *      contentOffset: [0, 0.5, 0],
     *      enabled: true,
     *      name: "Annotation 1",
     *      trustedSource: true
     *  };
     *
     * // Create an annotation using the custom annotation data
     * const annotationId = context.createAnnotation(customAnnotationData);
     *
     * // Fetch the data of the newly created annotation
     * const annotationData = await context.requestAnnotationData(annotationId);
     * console.log("Fetched annotation data:", annotationData);
     *
     * // Update the annotation with new content
     * context.changeAnnotation(annotationId, { content: "Updated Annotation" });
     *
     * // Fetch the data of the updated annotation
     * const updatedAnnotationData = await context.requestAnnotationData(annotationId);
     * console.log("Fetched updated annotation data:", updatedAnnotationData);
     *
     * // Remove the annotation if no longer required
     * context.removeAnnotation(annotationId);
     * ```
     *
     * ### Events
     *
     * The following events are associated with the AnnotationAPI:
     * - {@link AnnotationCreatedEvent}
     * - {@link AnnotationChangedEvent}
     * - {@link AnnotationRemovedEvent}
     */
    interface AnnotationAPI {
        /**
         * Creates a new Annotation and triggers an {@link AnnotationCreatedEvent}.
         * @param {AnnotationProperties} properties - Initial properties of the created Annotation.
         * @returns {number} The ID of the newly created Annotation.
         */
        createAnnotation(properties?: AnnotationProperties): number;
        /**
         * @deprecated
         * Creates a new annotation. Should use a properties object {@link AnnotationProperties} as an argument rather than passing individual values.
         *
         * @param nodeID The ID of the node that the Annotation belongs to.
         * @param label The text of the Annotation.
         * @param visible Indicates if the Annotation should be visible or hidden.
         * @param anchorPosition Anchor position in world space coordinates.
         * @param labelOffset The offset between anchorPosition and where the label should be displayed.
         *
         * @return The ID of the new annotation.
         */
        createAnnotation(
            nodeID: number,
            label: string,
            visible?: boolean,
            anchorPosition?: Float32Array | Array<number>,
            labelOffset?: Float32Array | Array<number>,
        ): number;
        /**
         * Changes one or more properties of an Annotation with the specified ID and triggers an {@link AnnotationChangedEvent}.
         * @param {number} annotationId - The ID of the Annotation you want to change.
         * @param {AnnotationProperties} properties - The properties of the Annotation you want change.
         * @returns {AnnotationProperties} An Object with the changed Properties.
         */
        changeAnnotation(annotationId: number, properties: AnnotationProperties): AnnotationProperties;
        /**
         * @deprecated
         * Changes an annotation. Should use a properties object {@link AnnotationProperties} as an argument rather than passing individual values.
         *
         * @param annotationID The ID of the Annotation.
         * @param label The text of the Annotation.
         * @param visible Indicates if the Annotation should be visible or hidden.
         * @param anchorPosition Anchor position in world space coordinates.
         * @param labelPosition The position of the label.
         * @param active DEPRECATED
         * @param transform The transformation of the Annotation.
         */
        changeAnnotation(
            annotationID: number,
            label?: string,
            visible?: boolean,
            anchorPosition?: Float32Array | Array<number>,
            labelPosition?: Float32Array | Array<number>,
            active?: boolean,
            transform?: Float32Array | Array<number>,
        ): void;
        /**
         * Removes the Annotation from the scene and all related Snapshots and triggers an {@link AnnotationRemovedEvent}.
         *
         * @param annotationId The ID of the Annotation.
         * @param {boolean} [safe=false] Performs a safe remove which interrupt the removal process if the Annotation is part of one or more Snapshots.
         * @returns {RemoveState}
         */
        removeAnnotation(annotationId: number, safe?: boolean): RemoveState;
        /**
         * @deprecated
         * @param annotationId The ID of the Annotation.
         * @returns The content and properties of an annotation.
         */
        getAnnotationData(annotationId: number): AnnotationData;
        /**
         * Returns the AnnotationData for the specified Annotation ID.
         * @param {number} annotationId - The ID of the Annotation you want to request the data for.
         * @returns {Promise<AnnotationProperties>} The requested Annotation data.
         */
        requestAnnotationData(annotationId: number): Promise<AnnotationProperties>;
        /**
         * @returns {Array<number>} The IDs of all available Annotations.
         */
        getAnnotations(): Array<number>;
    }
    /**
     * Event that is fired when an annotation has been removed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AnnotationAPI}
     * @see {@link EventType.ANNOTATION_REMOVED}
     */
    class AnnotationRemovedEvent extends WebVisEvent {
        annotationID: number;
        /**
         * @param annotationID The ID of the annotation.
         */
        constructor(annotationID: number);
    }
    /**
     * Event that is fired when an annotation has been created.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AnnotationAPI}
     * @see {@link EventType.ANNOTATION_CREATED}
     */
    class AnnotationCreatedEvent extends WebVisEvent {
        annotationID: number;
        properties: AnnotationProperties;
        /**
         * @param annotationID The ID of the annotation.
         * @param properties An object with the properties to be used when creating the annotation.
         */
        constructor(annotationID: number, properties: AnnotationProperties);
        /**
         * @deprecated anchorPosition is deprecated, please use properties.anchorPosition instead.
         */
        get anchorPosition(): Float32Array | Array<number>;
        /**
         * @deprecated label is deprecated, please use properties.content instead.
         */
        get label(): string;
        /**
         * @deprecated labelPosition is deprecated, please use properties.contentOffset instead.
         */
        get labelPosition(): Float32Array | Array<number>;
        /**
         * @deprecated nodeID is deprecated, please use properties.connectedNodeId instead.
         */
        get nodeID(): number;
        /**
         * @deprecated transform is deprecated.
         */
        get transform(): Float32Array | Array<number>;
        /**
         * @deprecated trustedSource is deprecated, please use properties.trustedSource instead.
         */
        get trustedSource(): boolean;
        /**
         * @deprecated visible is deprecated, please use properties.enabled instead.
         */
        get visible(): boolean;
    }
    /**
     * Event that is fired when an annotation has been changed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AnnotationAPI}
     * @see {@link EventType.ANNOTATION_CHANGED}
     */
    class AnnotationChangedEvent extends WebVisEvent {
        annotationID: number;
        properties: AnnotationProperties;
        private _labelPosition;
        /**
         * @param annotationID The ID of the annotation.
         * @param properties An object with the properties to be changed.
         */
        constructor(
            annotationID: number,
            properties: AnnotationProperties,
            _labelPosition: Float32Array | Array<number>,
        );
        /**
         * @deprecated active is deprecated.
         */
        get active(): boolean;
        /**
         * @deprecated anchorPosition is deprecated, please use properties.anchorPosition instead.
         */
        get anchorPosition(): Float32Array | Array<number>;
        /**
         * @deprecated label is deprecated, please use properties.content instead.
         */
        get label(): string;
        /**
         * @deprecated labelPosition is deprecated, please use properties.contentOffset instead.
         */
        get labelPosition(): Float32Array | Array<number>;
        /**
         * @deprecated transform is deprecated.
         */
        get transform(): Float32Array | Array<number>;
        /**
         * @deprecated trustedSource is deprecated, please use properties.trustedSource instead.
         */
        get trustedSource(): boolean;
        /**
         * @deprecated visible is deprecated, please use properties.enabled instead.
         */
        get visible(): boolean;
    }
    /**
     * The **AnimationOptions** provide additional options of a whole animation sequence.
     *
     * @see {@link AnimationAPI}
     */
    interface AnimationOptions {
        /**
         * The total duration of the animation sequence in milliseconds.
         * @default 1000
         */
        duration?: number;
        /**
         * The initial delay of the animation sequence.
         * @default 0
         */
        delay?: number;
        /**
         * The timing function used for the interpolation.
         * @default AnimationTimingFunction.LINEAR
         */
        timingFunction?: AnimationTimingFunction;
        /**
         * The number of iterations of the animation sequence.
         * @default 1
         */
        iterationCount?: number;
        /**
         * The playback rate of the animation sequence.
         * @default 1
         */
        playbackRate?: number;
        /**
         * The current time of the animation sequence between 0 and the total duration.
         * @default 0
         */
        time?: number;
        /**
         * The play state of the animation sequence.
         * @default AnimationPlayState.INITIAL
         */
        playState?: AnimationPlayState;
    }
    /**
     * An **AnimationFrame** defines a single state inside of an animation sequence.
     *
     * @see {@link AnimationAPI}
     */
    interface AnimationFrame {
        /**
         * The center point which is used for all rotation and scale interpolations.
         * @default [0, 0, 0]
         */
        center?: [number, number, number];
        /**
         * The color as [r,g,b], [r,g,b,a], string (hexadecimal value or HTML Color Code). Use null to reset.
         * @default null
         */
        color?: [number, number, number] | [number, number, number, number] | string | null;
        /**
         * The rotation as Euler angles [x,y,z] or Quaternion [C,xS,yS,zS].
         * @default [0, 0, 0]
         */
        rotation?: [number, number, number] | [number, number, number, number];
        /**
         * The scale as [x,y,z].
         * @default [1, 1, 1]
         */
        scale?: [number, number, number];
        /**
         * The translation as [x,y,z].
         * @default [0, 0, 0]
         */
        translation?: [number, number, number];
        /**
         * The opacity between 0 and 1.
         * @default 1
         */
        opacity?: number;
        /**
         * The time between 0 and 1. Indicates the progress of the animation sequence for this AnimationFrame.
         * @default 0
         */
        time?: number;
        /**
         * The enabled state as true or false.
         * @default true
         */
        enabled?: boolean;
    }
    /**
     * ## The AnimationAPI
     *
     * ### Overview
     *
     * The **AnimationAPI** provides basic functionalities to define keyframe-based animation sequences.
     * An animation sequence defines a gradual change from one node state to another, whereby a single
     * state is defined by an {@link AnimationFrame} which includes different properties to specify the
     * transformation and appearance of a node at that point in time. An animation sequence is independent
     * of a specific node and can be applied to multiple nodes with different {@link AnimationOptions}.
     *
     * ### Quick Start
     *
     * Example: create a simple animation sequence which does a full rotation around the Y-axis and apply it to a node.
     * ```javascript
     * const context = webvis.getContext();
     *
     * // Create a simple animation sequence which does a full rotation around the Y-axis
     * context.createAnimationFrames( "rotate" , [
     *  { rotation: [ 0, 0,   0 ] },
     *  { rotation: [ 0, 180, 0 ] },
     *  { rotation: [ 0, 360, 0 ] }
     * ]);
     *
     * // Apply the animation sequence to an InstanceGraph node with a total duration of 1000ms
     * context.setProperty( 1, webvis.Property.ANIMATION, {
     *    name     : "rotate",
     *    duration : 1000,
     * });
     * ```
     *
     * ### Events
     *
     * The following events are associated with the AnimationAPI:
     * - {@link AnimationStartedEvent}
     * - {@link AnimationEndedEvent}
     * - {@link AnimationIterationEvent}
     * - {@link AnimationFramesCreatedEvent}
     * - {@link AnimationFramesRemovedEvent}
     *
     * ### Restrictions
     *
     * Animation sequences that include transformations and are applied to a leaf node cannot yet be visualized by the viewer.
     */
    interface AnimationAPI {
        /**
         * Creates a new keyframe-based animation sequence.
         * @param name The name of the animation sequence.
         * @param frames The keyframes of the animation sequence.
         */
        createAnimationFrames(name: string, frames: Array<AnimationFrame>): void;
        /**
         * Removes an existing animation sequence.
         * @param name Specifies the name of the animation frames.
         */
        removeAnimationFrames(name: string): void;
        /**
         * @param targetId The id of the target.
         * @param targetType The type of the target.
         * @param animationName The name of the animation frames.
         * @param options The options of the animation.
         * @ignore
         */
        animate(
            targetType: AnimationTargetType,
            targetId: number,
            animationName: string,
            options: AnimationOptions,
        ): void;
    }
    /**
     * Event that is fired when a animation is started.
     * The event contains the name as identifier of the animation that has started.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AnimationAPI}
     * @see {@link EventType.ANIMATION_STARTED}
     */
    class AnimationStartedEvent extends WebVisEvent {
        animationName: string;
        targetNodeID: number;
        targetType: AnimationTargetType;
        options: AnimationOptions;
        /**
         * @param animationName The name of the started animation.
         * @param targetNodeID The node ID which runs the animation.
         * @param targetType The type of the animation target.
         * @param options The options of the animation.
         */
        constructor(
            animationName: string,
            targetNodeID: number,
            targetType: AnimationTargetType,
            options: AnimationOptions,
        );
    }
    /**
     * Event that is fired when an animation finished an iteration.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AnimationAPI}
     * @see {@link EventType.ANIMATION_ITERATION}
     */
    class AnimationIterationEvent extends WebVisEvent {
        animationName: string;
        targetNodeID: number;
        targetType: AnimationTargetType;
        iteration: number;
        /**
         * @param animationName The name of the running animation.
         * @param targetNodeID The node id which runs the animation.
         * @param targetType The type of the animation target.
         * @param iteration The current iteration.
         */
        constructor(animationName: string, targetNodeID: number, targetType: AnimationTargetType, iteration: number);
    }
    /**
     * Event that is fired when existing animation frames were removed.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AnimationAPI}
     * @see {@link EventType.ANIMATION_FRAMES_REMOVED}
     */
    class AnimationFramesRemovedEvent extends WebVisEvent {
        name: string;
        /**
         * @param name The name of the removed animation frames.
         */
        constructor(name: string);
    }
    /**
     * Event that is fired when a new animation frames were created.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AnimationAPI}
     * @see {@link EventType.ANIMATION_FRAMES_CREATED}
     */
    class AnimationFramesCreatedEvent extends WebVisEvent {
        name: string;
        frames: Array<AnimationFrame>;
        /**
         * @param name The name of the generated animation frames.
         * @param frames The list of created animation frames.
         */
        constructor(name: string, frames: Array<AnimationFrame>);
    }
    /**
     * Event that is fired when an animation has ended.
     * The event contains the name as identifier of the animation that has ended.
     *
     * @event
     * @hideconstructor
     *
     * @see {@link AnimationAPI}
     * @see {@link EventType.ANIMATION_ENDED}
     */
    class AnimationEndedEvent extends WebVisEvent {
        animationName: string;
        targetNodeID: number;
        targetType: AnimationTargetType;
        options: AnimationOptions;
        /**
         * @param animationName The name of the ended animation.
         * @param targetNodeID The node ID which runs the animation.
         * @param targetType The type of the animation target.
         * @param options The options of the ended animation.
         */
        constructor(
            animationName: string,
            targetNodeID: number,
            targetType: AnimationTargetType,
            options: AnimationOptions,
        );
    }
    /**
     * The origin that is used for transformation operations.
     */
    enum AnimationTransformOrigin {
        CENTER = "center",
        CUSTOM = "custom",
    }
    /**
     * Defines how an animation progresses through the duration of each iteration.
     *
     * @see {@link AnimationOptions}
     */
    enum AnimationTimingFunction {
        /**
         * The animation progresses at a constant pace from start to finish.
         */
        LINEAR = "linear",
        /**
         * The animation starts slowly and accelerates towards the end.
         */
        EASEIN = "easein",
        /**
         * The animation starts quickly and decelerates towards the end.
         */
        EASEOUT = "easeout",
        /**
         * The animation starts slowly, accelerates, decelerates, and then slows down at the end.
         */
        EASEINOUT = "easeinout",
    }
    /**
     * Specifies the type of target for an animation.
     */
    enum AnimationTargetType {
        /**
         * The target is a node.
         */
        NODE = 0,
        /**
         * The target is a clip plane.
         */
        CLIP_PLANE = 1,
    }
    /**
     * The properties of an {@link AnimationFrame}.
     */
    enum AnimationProperty {
        CENTER = "center",
        COLOR = "color",
        ROTATION = "rotation",
        SCALE = "scale",
        TRANSLATION = "translation",
        OPACITY = "opacity",
        ENABLED = "enabled",
    }
    /**
     * Indicates the play state of an animation.
     *
     * @see {@link AnimationOptions}
     */
    enum AnimationPlayState {
        /**
         * The animation is in its initial state and has not started yet.
         */
        INITIAL = "initial",
        /**
         * The animation is currently active and running.
         */
        RUNNING = "running",
        /**
         * The animation is paused and can be resumed.
         */
        PAUSED = "paused",
    }
    /**
     * An object that specifies characteristics about the event listener
     */
    interface ContextCreatedListenerOptions {
        /**
         * If true, the listener would be automatically removed when invoked.
         * @default false
         */
        once?: boolean;
    }
    /**
     * An object that specifies characteristics about the event listener
     */
    interface ContextRemovedListenerOptions {
        /**
         * If true, the listener would be automatically removed when invoked.
         * @default false
         */
        once?: boolean;
    }
    /**
     * A listener function which can be registered with {@link addContextCreatedListener}.
     * @param {ContextAPI} context - The created Context.
     */
    type ContextCreatedListener = (context: ContextAPI) => void;
    /**
     * A listener function which can be registered with {@link addContextRemovedListener}.
     * @param {string} contextName - The name of the removed Context.
     */
    type ContextRemovedListener = (contextName: string) => void;
    /**
     * Creates a new Context with the specified name and settings
     * @hidden
     * @param {string} name - Specifies the name of the context
     * @param {{[key in SettingStrings]? : any}} [settings = {}] - Specifies the settings for the context
     */
    function createLegacyContext(name: string): ContextAPI | undefined;
    /**
     * Requests a new Context with the specified name and settings
     * @param {string} name - Specifies the name of the context
     * @param {{[key in SettingStrings]? : any}} [settings = {}] - Specifies the settings for the context
     */
    function requestContext(
        name: string,
        settings?: {
            [key in SettingStrings | ViewerSettingStrings]?: any;
        },
    ): Promise<ContextAPI | undefined>;
    /**
     * Removes the Context with the specified name.
     * @param {string} name - Specifies the name of the context which should be removed
     */
    function removeContext(name: string): Promise<void>;
    /**
     * Returns the Context with the specified name.
     * @param {string} name - Specifies the name for the context
     */
    function getContext(name?: string): ContextAPI | undefined;
    /**
     * Returns a list of all available Context's
     */
    function getContexts(): ContextAPI[];
    /**
     * Adds a listener function that will be called whenever a new Context is created.
     * @param {ContextCreatedListener} listener - The listener function that will be called whenever a new Context is created.
     * @param {ContextCreatedListenerOptions} options - Additional listener options.
     */
    function addContextCreatedListener(listener: ContextCreatedListener, options?: ContextCreatedListenerOptions): void;
    /**
     * Adds a listener function that will be called whenever a Context is removed.
     * @param {ContextCreatedListener} listener - The listener function that will be called whenever a Context is removed.
     * @param {ContextRemovedListenerOptions} options - Additional listener options.
     */
    function addContextRemovedListener(listener: ContextRemovedListener, options?: ContextRemovedListenerOptions): void;
    /**
     * Removes a previously added listener function.
     * @param {ContextCreatedListener} listener - The listener function which was added by {@link addContextCreatedListener} before.
     */
    function removeContextCreatedListener(listener: ContextCreatedListener): void;
    /**
     * Removes a previously added listener function.
     * @param {ContextRemovedListener} listener - The listener function which was added by {@link addContextRemovedListener} before.
     */
    function removeContextRemovedListener(listener: ContextRemovedListener): void;
    const about: VersionInfo;
}
/**
 * @deprecated
 */
declare function webvisViewer(): (identifier?: string) => webvis.ViewerAPI;
/**
 * @deprecated
 */
declare function webvisContext(): (identifier?: string) => webvis.ContextAPI;
