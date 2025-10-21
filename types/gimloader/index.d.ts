declare namespace Gimloader {
    type EventEmitter2 = import("eventemitter2").EventEmitter2;
    namespace Stores {
        type Collider = import("@dimforge/rapier2d-compat").Collider;
        type ColliderDesc = import("@dimforge/rapier2d-compat").ColliderDesc;
        type RigidBody = import("@dimforge/rapier2d-compat").RigidBody;
        type RigidBodyDesc = import("@dimforge/rapier2d-compat").RigidBodyDesc;
        type Vector = import("@dimforge/rapier2d-compat").Vector;
        type BaseScene = import("phaser").Scene;

        interface Team {
            characters: Map<number, string>;
            id: string;
            name: string;
            score: number;
        }

        interface Teams {
            teams: Map<string, Team>;
            updateCounter: number;
        }

        interface SceneStore {
            currentScene: string;
            gpuTier: number;
            isCursorOverCanvas: boolean;
        }

        interface BackgroundLayersManager {
            layerManager: LayerManager;
            scene: Scene;
            createLayer(options: {
                layerId: string;
                depth: number;
            }): void;
            fill(terrain: TerrainOption): void;
            fillForPlatformer(): void;
            fillForTopDown(terrain: TerrainOption): void;
            removeLayer(options: {
                layerId: string;
            }): void;
        }

        interface LayerManager {
            backgroundLayersManager: BackgroundLayersManager;
            colliders: Map<string, Map<string, string>>;
            layers: Map<string, any>;
            scene: Scene;
            createInitialLayers(): void;
            createLayer(id: string): void;
            fillBottomLayer(terrain: TerrainOption): void;
            getActualLayerDepth(id: string): number;
            moveLayersAboveCharacters(): void;
            onWorldSizeChange(): void;
        }

        interface TileManager {
            cumulTime: number;
            scene: Scene;
            layerManager: LayerManager;
        }

        interface CharacterOptions {
            id: string;
            x: number;
            y: number;
            scale: number;
            type: string;
        }

        interface Spectating {
            findNewCharacter(): void;
            onBeginSpectating(): void;
            onEndSpectating(): void;
            setShuffle(shuffle: boolean, save?: boolean): void;
        }

        interface CharacterManager {
            characterContainer: import("phaser").GameObjects.Container;
            characters: Map<string, Character>;
            scene: Scene;
            spectating: Spectating;
            addCharacter(options: CharacterOptions): Character;
            cullCharacters(): void;
            removeCharacter(id: string): void;
            update(dt: number): void;
        }

        interface Removal {
            overlay: Overlay;
            prevMouseWasDown: boolean;
            scene: Scene;
            checkForItem(): void;
            createStateListeners(): void;
            removeSelectedItems(): void;
            update(): void;
        }

        interface PlatformerEditing {
            setTopDownControlsActive(active: boolean): void;
        }

        interface SelectedDevicesOverlay {
            graphics: import("phaser").GameObjects.Graphics;
            scene: Scene;
            showing: boolean;
            hide(): void;
            show(rects: Rect[]): void;
        }

        interface MultiSelect {
            boundingBoxAroundEverything: Rect | null;
            currentlySelectedDevices: Device[];
            currentlySelectedDevicesIds: string[];
            hidingSelectionForDevices: boolean;
            isSelecting: boolean;
            modifierKeyDown: boolean;
            mouseShifts: Vector[];
            movedOrCopiedDevices: Device[];
            overlay: Overlay;
            scene: Scene;
            selectedDevices: Device[];
            selectedDevicesIds: string[];
            selectedDevicesOverlay: SelectedDevicesOverlay;
            selection: Rect | null;
            addDeviceToSelection(device: Device): void;
            endSelectionRect(): void;
            findSelectedDevices(): void;
            hasSomeSelection(): boolean;
            hideSelection(): void;
            multiselectDeleteKeyHandler(): void;
            multiselectKeyHandler(down: boolean): void;
            onDeviceAdded(device: Device): void;
            onDeviceRemoved(id: string): void;
            setShiftParams(): void;
            startSelectionRect(): void;
            unselectAll(): void;
            update(): void;
            updateSelectedDevicesOverlay(): void;
            updateSelectionRect(): void;
        }

        interface DepthSort {
            overlay: Overlay;
            scene: Scene;
            update(): void;
        }

        interface ActionManager {
            depthSort: DepthSort;
            multiSelect: MultiSelect;
            platformerEditing: PlatformerEditing;
            removal: Removal;
            update(): void;
        }

        interface Projectile {
            id: string;
            startTime: number;
            endTime: number;
            start: Vector;
            end: Vector;
            radius: number;
            appearance: string;
            ownerId: string;
            ownerTeamId: string;
            damage: number;
            hitPos?: Vector;
            hitTime?: number;
        }

        interface Projectiles {
            damageMarkers: any;
            dynamicDevices: Set<Device>;
            fireSlashes: any;
            projectileJSON: Map<string, Projectile>;
            runClientSidePrediction: boolean;
            scene: Scene;
            addProjectile(projectile: Projectile): void;
            fire(pointer: import("phaser").Input.Pointer, snap: boolean): void;
            update(): void;
        }

        interface WorldBoundsCollider {
            body: RigidBody;
            collider: Collider;
        }

        interface BodyBounds {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
        }

        interface BodyStatic {
            bounds: BodyBounds;
            cells: Set<string>;
        }

        interface Body {
            collider?: Collider;
            colliderDesc: ColliderDesc;
            rigidBody?: RigidBody;
            rigidBodyDesc: RigidBodyDesc;
            static: BodyStatic;
            device?: {
                id: string;
            };
            terrain?: {
                key: string;
            };
        }

        interface ActiveBodies {
            activeBodies: Set<string>;
            bodyManager: BodyManager;
            currentCoordinateKeys: Set<string>;
            world: World;
            disableBody(id: string): void;
            enable(keys: Set<string>, setAll: boolean): void;
            enableBodiesAlongLine(options: {
                start: Vector;
                end: Vector;
            }): void;
            enableBodiesWithinAreas(options: {
                areas: Rect[];
                disableActiveBodiesOutsideArea: boolean;
            }): void;
            enableBody(id: string): void;
            setDirty(): void;
        }

        interface BodyManager {
            activeBodies: ActiveBodies;
            bodies: Map<string, Body>;
            cells: Map<string, Set<string>>;
            dynamicBodies: Set<string>;
            gridSize: number;
            staticBodies: Set<string>;
            staticSensorBodies: Set<string>;
            _idCount: number;
            find(id: string): Body | undefined;
            findPotentialStaticBodiesWithinArea(area: Rect): Set<string>;
            generateId(): void;
            insert(body: Body): string;
            remove(id: string): void;
        }

        interface PhysicsManager {
            bodies: BodyManager;
            cumulTime: number;
            lastTime: number;
            physicsStep(dt: number): void;
            runPhysicsLoop(dt: number): void;
            world: World;
            worldBoundsColliders: Set<WorldBoundsCollider>;
        }

        interface CreateTileOptions {
            x: number;
            y: number;
            tileIndex: number;
            terrainOption: TerrainOption;
        }

        interface InGameTerrainBuilder {
            afterFailureWithTouch: boolean;
            clearConsumeErrorMessage(): void;
            clearPreviewLayer(): void;
            createPreviewTile(options: CreateTileOptions): void;
            overlay: Overlay;
            previewingTile?: Vector;
            scene: Scene;
            update(): void;
            wasDown: boolean;
        }

        interface WorldInteractives {
            scene: Scene;
            currentDevice?: Device;
            clearCurrentDevice(): void;
            setCurrentDevice(device: Device): void;
            update(devices: Device[]): void;
        }

        interface ShowOverlayOptions {
            x: number;
            y: number;
            width: number;
            height: number;
            depth: number;
        }

        interface Overlay {
            scene: Scene;
            showing: boolean;
            showingDimensions: {
                width: number;
                height: number;
            } | null;
            showingPosition: {
                x: number;
                y: number;
            } | null;
            hide(): void;
            show(options: ShowOverlayOptions): void;
        }

        interface DevicesPreview {
            devicePreviewOverlay: Overlay;
            previousDevices: Device[];
            scene: Scene;
            removePreviousDevices(isBeingReplaced: boolean): void;
            update(): void;
        }

        interface DevicesAction {
            inputManager: InputManager;
            scene: Scene;
            onClick(arg: any): void;
            update(): void;
        }

        interface DeviceProjectiles {
            device: Device;
            addToDynamicDevices(): void;
            collidesWithProjectile(object: Circle): boolean;
            onClientPredictedHit(position: Vector): void;
            removeFromDynamicDevices(): void;
            setDynamic(dynamic: boolean): void;
        }

        interface DeviceTweens {
            list: import("phaser").Tweens.Tween[];
            device: Device;
            add(config: import("phaser").Types.Tweens.TweenBuilderConfig): import("phaser").Tweens.Tween;
            destroy(): void;
        }

        interface WirePoints {
            device: Device;
            end: Vector;
            start: Vector;
            onPointChange(): void;
            setBoth(x: number, y: number): void;
        }

        interface Layers {
            depth: number;
            device: Device;
            layer: string;
            options: any;
        }

        interface ShadowOptions {
            x: number;
            y: number;
            r1: number;
            r2: number;
            alphaMultip: number;
            depth: number;
        }

        interface Shadows {
            device: Device;
            list: ShadowOptions[];
            add(options: ShadowOptions): void;
            destroy(): void;
            forEach(callback: (shadow: ShadowOptions) => void): void;
            hide(): void;
            show(): void;
        }

        interface Circle {
            x: number;
            y: number;
            radius: number;
        }

        interface RotatedCircle extends Circle {
            angle: number;
        }

        interface VisualEditingCircle {
            angle: number;
            rotable: boolean;
            radius: number;
            minRadius: number;
            maxRadius: number;
            onChange(value: RotatedCircle): void;
        }

        interface RotatedRect extends Rect {
            angle: number;
        }

        interface VisualEditingBox {
            width: number;
            height: number;
            angle: number;
            minWidth: number;
            maxWidth: number;
            minHeight: number;
            maxHeight: number;
            keepRatio: boolean;
            rotable: boolean;
            onChange(value: RotatedRect): void;
        }

        interface VisualEditing {
            add: {
                box(options: VisualEditingBox): void;
                circle(options: VisualEditingCircle): void;
            };
            device: Device;
            isActive: boolean;
            shapes: (VisualEditingBox | VisualEditingCircle)[];
            clear(): void;
        }

        interface InteractiveZones {
            add: {
                circle(zone: CircleShort): void;
                rect(zone: Rect): void;
            };
            canInteractThroughColliders: boolean;
            device: Device;
            forceDisabled: boolean;
            zones: (CircleShort | Rect)[];
            contains(x: number, y: number): boolean;
            destroy(): void;
            getCanInteractThroughColliders(): boolean;
            getInfo(): any;
            getMaxDistance(x: number, y: number): number;
            isInteractive(): boolean;
            onPlayerCanInteract(): void;
            onPlayerCantInteractAnyMore(): void;
            setCanInteractThroughColliders(canInteract: boolean): void;
            setForceDisabled(forceDisabled: boolean): void;
            setInfo(info: any): void;
        }

        interface DeviceInput {
            device: Device;
            enabled: boolean;
            hasKeyListeners: boolean;
            isCurrentlyUnderMouse: boolean;
            addDeviceToCursorUnderList(): void;
            createKeyListeners(): void;
            cutCopyHandler(action: string): void;
            disable(): void;
            dispose(): void;
            disposeKeyListeners(): void;
            enable(): void;
            partIsNoLongerUnderMouse(): void;
            partIsUnderMouse(): void;
            removeDeviceFromCursorUnderList(): void;
        }

        interface DeviceUI {
            device: Device;
            close(): void;
            open(options: Record<string, any>): void;
            update(options: Record<string, any>): void;
        }

        interface VFX {
            character: Character;
            damageBoostActive: boolean;
            phaseActive: boolean;
            tintModifierId: string;
            transparencyModifierId: string;
            setTintModifier(id: string): void;
            setTransparencyModifier(id: string): void;
            startDamageBoostAnim(): void;
            startPhaseAnim(): void;
            stopDamageBoostAnim(): void;
            stopPhaseAnim(): void;
        }

        interface TintParams {
            type: string;
            fromColor: string;
            toColor: string;
            duration: number;
            tween?: import("phaser").Tweens.Tween;
            ease(t: number): number;
        }

        interface Tint {
            character: Character;
            scene: Scene;
            phase?: TintParams;
            playerAppearanceModifierDevice?: TintParams;
            immunity?: TintParams;
            damageBoost?: TintParams;
            getTintParams(type: string): TintParams | undefined;
            setTintParams(type: string, tint?: TintParams): void;
            startAnimateTint(params: TintParams): void;
            stopAnimateTint(type: string): void;
            update(): void;
        }

        interface SkinOptions {
            id: string;
            editStyles: Record<string, string>;
        }

        interface Skin {
            character: Character;
            editStyles?: Record<string, string>;
            latestSkinId: string;
            scene: Scene;
            skinId: string;
            applyEditStyles(options: SkinOptions): void;
            setupSkin(position: Vector): void;
            updateSkin(options: SkinOptions): void;
        }

        interface Shadow {
            character: Character;
            image?: import("phaser").GameObjects.Image;
            createShadow(): void;
            destroy(): void;
            update(): void;
        }

        interface TweenScaleOptions {
            type: string;
            scale: number;
            duration: number;
        }

        interface Scale {
            activeScale: number;
            baseScale: number;
            character: Character;
            respawningScale: number;
            scaleX: number;
            scaleY: number;
            scene: Scene;
            spectatorScale: number;
            dependencyScale: number;
            isVisible: boolean;
            getCurrentScale(type: number): void;
            onSkinChange(): void;
            setScale(type: number, scale: number): void;
            tweenScale(options: TweenScaleOptions): void;
            update(): void;
        }

        interface Position {
            character: Character;
            update(dt: number): void;
        }

        interface Network {
            lastAngle?: number;
            lastAngleUpdate: number;
            updateAimAngle(angle: number): void;
        }

        interface Nametag {
            alpha: number;
            character: Character;
            creatingTag: boolean;
            depth: number;
            destroyed: boolean;
            followScale: boolean;
            fragilityTag?: import("phaser").GameObjects.Text;
            healthMode: string;
            name: string;
            scale: number;
            scene: Scene;
            tag: import("phaser").GameObjects.Text;
            teamState: TeamState;
            fontColor: string;
            tags: import("phaser").GameObjects.Text[];
            createFragilityTag(): void;
            createTag(): void;
            destroy(): void;
            makeVisibleChanges(force?: boolean): void;
            playHideAnimation(): void;
            playShowUpAnimation(): void;
            setName(name: string): void;
            update(update: {
                teamState: TeamState;
            }): void;
            updateFontColor(): void;
            updateFragility(fragility: number): void;
            updateTagAlpha(force?: boolean): void;
            updateTagDepth(force?: boolean): void;
            updateTagPosition(force?: boolean): void;
            updateTagScale(force?: boolean): void;
        }

        interface CharacterInput {
            character: Character;
            isListeningForInput: boolean;
            scene: Scene;
            setupInput(): void;
        }

        interface TeamState {
            status: string;
            teamId: string;
        }

        interface Indicator extends Updates {
            character: Character;
            characterHeight: number;
            depth: number;
            image: import("phaser").GameObjects.Image;
            isMain: boolean;
            isSpectated: boolean;
            lastCharacterAlpha: number;
            scene: Scene;
            teamState: TeamState;
            destroy(): void;
            makeIndicator(): void;
        }

        interface ImpactAnimation {
            animations: Map<string, import("phaser").GameObjects.Sprite>;
            character: Character;
            loadedAnimations: Set<string>;
            scene: Scene;
            _play(animation: string): void;
            destroy(): void;
            load(animation: string): void;
            play(animation: string): void;
        }

        interface Immunity {
            character: Character;
            classImmunityActive: boolean;
            spawnImmunityActive: boolean;
            activate(): void;
            activateClassImmunity(): void;
            activateSpawnImmunity(): void;
            deactivate(): void;
            deactivateClassImmunity(): void;
            deactivateSpawnImmunity(): void;
            isActive(): boolean;
        }

        interface Updates {
            update(update: {
                delta: number;
            }): void;
            updateAlpha(): void;
            updateDepth(): void;
            updatePosition(dt: number): void;
            updateScale(): void;
        }

        interface Healthbar extends Updates {
            character: Character;
            depth: number;
            isVisible: boolean;
            scene: Scene;
            destroy(): void;
            makeIndicator(): void;
            updateValue(): void;
        }

        interface Flip {
            character: Character;
            flipXLastX: number;
            isFlipped: boolean;
            lastX: number;
            lastY: number;
            update(): void;
            updateFlipForMainCharacter(): void;
            updateFlipForOthers(): void;
        }

        interface Dimensions {
            character: Character;
            currentDimensionsId: string;
            bottomY: number;
            centerX: number;
            topY: number;
            x: number;
            onPotentialDimensionsChange(): void;
        }

        interface Depth {
            character: Character;
            currentDepth: number;
            lastY: number;
            update(): void;
            updateDepth(): void;
        }

        interface Culling {
            character: Character;
            isInCamera: boolean;
            needsCullUpdate: boolean;
            scene: Scene;
            shouldForceUpdate: boolean;
            forceUpdate(): void;
            hideObject(object: any): void;
            onInCamera(): void;
            onOutCamera(): void;
            showObject(object: any): void;
            updateNeedsUpdate(): void;
        }

        interface TrailParticles {
            frameHeight: number;
            frameWidth: number;
            imageUrl: string;
            numberOfFrames: number;
        }

        interface TrailEmitter {
            frequency: number;
            quantity: number;
            blendMode: number;
            speed: number;
            speedVariation: number;
            lifetime: number;
            lifetimeVariation: number;
            scale: number;
            scaleVariation: number;
            scaleThreshold: number;
            rotationRandomAtStart: boolean;
            rotationChange: number;
            rotationChangeVariation: number;
            rotationAllowNegativeChange: boolean;
            alphaThresholdStart: number;
            alphaThresholdEnd: number;
            gravityY: number;
            yOriginChange: number;
            emitterZone: Partial<Vector>;
        }

        interface TrailAppearance {
            id: string;
            emitter: TrailEmitter;
            particles: TrailParticles;
        }

        interface CharacterTrail {
            character: Character;
            currentAppearance: TrailAppearance;
            currentAppearanceId: string;
            isReady: boolean;
            lastSetAlpha: number;
            destroy(): void;
            followCharacter(): void;
            setNewAppearance(appearance: TrailAppearance): void;
            update(): void;
            updateAppearance(id: string): void;
        }

        interface TweenAlphaOptions {
            alpha: number;
            type: string;
            duration: number;
            ease?: string;
        }

        interface Alpha {
            character: Character;
            cinematicModeAlpha: number;
            currentAlpha: number;
            immunity: number;
            phaseAlpha: number;
            playerAppearanceModifierDeviceAlpha: number;
            scene: Scene;
            getCurrentAlpha(): number;
            setAlpha(type: string, alpha: number): void;
            tweenAlpha(options: TweenAlphaOptions): void;
            update(): void;
        }

        interface EndInfo {
            end: number;
            start: number;
            x: number;
            y: number;
        }

        interface Point {
            endTime: number;
            endX: number;
            endY: number;
            startTime: number;
            startX: number;
            startY: number;
            teleported: boolean;
            usedTeleported: boolean;
        }

        interface Movement {
            character: Character;
            currentPoint: Point;
            currentTime: number;
            nonMainCharacterGrounded: boolean;
            pointMap: Point[];
            targetIsDirty: boolean;
            targetNonMainCharacterGrounded: boolean;
            targetX: number;
            targetY: number;
            teleportCount: number;
            teleported: boolean;
            getCurrentEndInfo(): EndInfo;
            moveToTargetPosition(): void;
            onMainCharacterTeleport(): void;
            postPhysicsUpdate(dt: number): void;
            setNonMainCharacterTargetGrounded(grounded: boolean): void;
            setTargetX(x: number): void;
            setTargetY(y: number): void;
            setTeleportCount(teleportCount: number): void;
            update(dt: number): void;
        }

        interface NonMainCharacterState {
            grounded: boolean;
        }

        interface Animation {
            availableAnimations: string[];
            blinkTimer: number;
            bodyAnimationLocked: boolean;
            bodyAnimationStartedAt: number;
            character: Character;
            currentBodyAnimation: string;
            currentEyeAnimation: string;
            lastGroundedAnimationAt: number;
            nonMainCharacterState: NonMainCharacterState;
            prevNonMainCharacterState: NonMainCharacterState;
            skinChanged: boolean;
            destroy(): void;
            onAnimationComplete(options: any): void;
            onSkinChanged(): void;
            playAnimationOrClearTrack(animations: string[], track: number): void;
            playBodyAnimation(animation: string): void;
            playBodySupplementalAnimation(animation: string): void;
            playEyeAnimation(animation: string): void;
            playJumpSupplementalAnimation(animation: string): void;
            playMovementSupplementalAnimation(animation: string): void;
            setupAnimations(): void;
            startBlinkAnimation(): void;
            stopBlinkAnimation(): void;
            update(dt: number): void;
        }

        interface ProjectileAppearance {
            imageUrl: string;
            rotateToTarget: boolean;
            scale: number;
        }

        interface WeaponAsset extends BaseAsset {
            fireFrames: number[];
            fromCharacterCenterRadius: number;
            hideFireSlash: boolean;
            idleFrames: number;
            originX: number;
            originY: number;
        }

        interface BaseAsset {
            frameHeight: number;
            frameRate: number;
            frameWidth: number;
            imageUrl: string;
            scale: number;
        }

        interface ImpactAsset extends BaseAsset {
            frames: number[];
            hideIfNoHit?: boolean;
        }

        interface SoundEffect {
            path: string;
            volume: number;
        }

        interface CurrentAppearance {
            id: string;
            explosionSfx: SoundEffect[];
            fireSfx: SoundEffect[];
            impact: ImpactAsset;
            projectile: ProjectileAppearance;
            reloadSfx: SoundEffect;
            weapon: WeaponAsset;
        }

        interface AimingAndLookingAround {
            angleTween?: import("phaser").Tweens.Tween;
            character: Character;
            currentAngle?: number;
            currentAppearance?: CurrentAppearance;
            currentWeaponId?: string;
            isAiming: boolean;
            lastUsedAngle: number;
            sprite: import("phaser").GameObjects.Sprite;
            targetAngle?: number;
            characterShouldFlipX(): boolean;
            destroy(): void;
            isCurrentlyAiming(): boolean;
            onInventoryStateChange(): void;
            playFireAnimation(): void;
            setImage(appearance: CurrentAppearance): void;
            setSpriteParams(skipRecalculateAlpha: boolean): void;
            setTargetAngle(angle: number, instant?: boolean): void;
            update(): void;
            updateAnotherCharacter(): void;
            updateMainCharacterMouse(): void;
            updateMainCharacterTouch(): void;
        }

        interface ServerPosition {
            packet: number;
            x: number;
            y: number;
            jsonState: string;
            teleport: boolean;
        }

        interface Bodies {
            character: Character;
            collider: Collider;
            colliderDesc: ColliderDesc;
            rigidBody: RigidBody;
            rigidBodyDesc: RigidBodyDesc;
        }

        interface PhysicsInput {
            _jumpKeyPressed: boolean;
            activeClassDeviceId: string;
            angle: number;
            ignoredStaticBodies: Set<any>;
            ignoredTileBodies: Set<any>;
            jump: boolean;
            projectileHitForcesQueue: Set<any>;
        }

        interface MovementState {
            accelerationTicks: number;
            direction: string;
            xVelocity: number;
        }

        interface Jump {
            actuallyJumped: boolean;
            isJumping: boolean;
            jumpCounter: number;
            jumpTicks: number;
            jumpsLeft: number;
            xVelocityAtJumpStart: number;
        }

        interface PhysicsState {
            forces: any[];
            gravity: number;
            grounded: boolean;
            groundedTicks: number;
            jump: Jump;
            lastGroundedAngle: number;
            movement: MovementState;
            velocity: Vector;
        }

        interface Physics {
            character: Character;
            currentPacketId: number;
            frameInputsHistory: Map<number, PhysicsInput>;
            justAppliedProjectileHitForces: Set<any>;
            lastClassDeviceActivationId: number;
            lastPacketSent: number[];
            lastSentClassDeviceActivationId: number;
            lastSentTerrainUpdateId: number;
            lastTerrainUpdateId: number;
            newlyAddedTileBodies: Set<any>;
            phase: boolean;
            physicsBodyId: string;
            prevState: PhysicsState;
            projectileHitForcesHistory: Map<any, any>;
            projectileHitForcesQueue: Set<any>;
            scene: Scene;
            state: PhysicsState;
            tickInput: TickInput;
            destroy(): void;
            getBody(): Bodies;
            postUpdate(dt: number): void;
            preUpdate(): void;
            sendToServer(): void;
            setServerPosition(serverPosition: ServerPosition): void;
            setupBody(x: number, y: number): void;
            updateDebugGraphics(): void;
        }

        interface Character {
            aimingAndLookingAround: AimingAndLookingAround;
            alpha: Alpha;
            animation: Animation;
            body: Vector;
            characterTrail: CharacterTrail;
            culling: Culling;
            depth: Depth;
            dimensions: Dimensions;
            flip: Flip;
            healthbar: Healthbar;
            id: string;
            immunity: Immunity;
            impactAnimation: ImpactAnimation;
            indicator: Indicator;
            input: CharacterInput;
            isActive: boolean;
            isDestroyed: boolean;
            isMain: boolean;
            movement: Movement;
            nametag: Nametag;
            network: Network;
            physics: Physics;
            position: Position;
            prevBody: Vector;
            scale: Scale;
            scene: Scene;
            shadow: Shadow;
            skin: Skin;
            spine: any;
            teamId: string;
            tint: Tint;
            type: string;
            vfx: VFX;
            destroy(): void;
            setIsMain(isMain: boolean): void;
            update(dt: number): void;
        }

        interface UpdateCullOptions {
            mainCharacter: Character;
            isPhase: boolean;
            insideView: boolean;
        }

        interface Cull {
            device: Device;
            ignoresCull: boolean;
            isInsideView: boolean;
            margin: number;
            wasInsideView: boolean;
            getMargin(): number;
            ignoreCulling(): void;
            setMargin(margin: number): void;
            setOnEnterViewCallback(callback: () => void): void;
            setOnLeaveViewCallback(callback: () => void): void;
            onEnterViewCallback?(): void;
            onLeaveViewCallback?(): void;
            updateCull(options: UpdateCullOptions): void;
        }

        type ColliderOptions = {
            device: Device;
            scene: Scene;
            angle: number;
        } & DeviceCollider;

        type DeviceCollider = RectShort | CircleShort | Ellipse;

        interface Colliders {
            add: {
                box(collider: RectShort): void;
                circle(collider: CircleShort): void;
                ellipse(collider: Ellipse): void;
            };
            device: Device;
            list: DeviceCollider[];
            createOptions(collider: DeviceCollider): ColliderOptions;
            destroy(): void;
            forEach(callback: (collider: DeviceCollider) => void): void;
            hideDebug(): void;
            showDebug(): void;
        }

        interface Rect {
            x: number;
            y: number;
            width: number;
            height: number;
        }

        interface BoundingBox {
            cachedBoundingBox: Rect;
            device: Device;
            hardcodedBoundingBox?: Rect;
            clearCached(): void;
            clearHardcoded(): void;
            getBoundingBox(): Rect;
            isHardcoded(): boolean;
            isInsideBoundingBox(x: number, y: number): boolean;
            setHardcoded(rect: Rect): void;
        }

        interface AppearanceVariation {
            device: Device;
            resetAppearance(): void;
            setPreviewAppearance(): void;
            setRemovalAppearance(): void;
        }

        interface BaseDevice {
            isPreview: boolean;
            placedByClient: boolean;
            isDestroyed: boolean;
            x: number;
            y: number;
            forceUseMyState: boolean;
            options: Record<string, any>;
            state: Record<string, any>;
            prevState: Record<string, any>;
            name: string;
            id: string;
            scene: Scene;
            deviceOption: DeviceOption;
            visualEditing: VisualEditing;
            shadows: Shadows;
            input: DeviceInput;
            parts: any;
            cull: Cull;
            boundingBox: BoundingBox;
            appearanceVariation: AppearanceVariation;
            colliders: Colliders;
            interactiveZones: InteractiveZones;
            deviceUI: DeviceUI;
            layers: Layers;
            wirePoints: WirePoints;
            tweens: DeviceTweens;
            projectiles: DeviceProjectiles;
            sensors: any;
            onHide: (() => void) | null;
            onShow: (() => void) | null;
            onUpdate: (() => void) | null;
            initialStateProcessing(state: Record<string, any>): Record<string, any>;
            getMaxDepth(): number;
            onStateUpdateFromServer(key: string, value: any): void;
            getRealKey(key: string): string;
            onPostUpdate(): void;
            onInit(): void;
            onMessage(message: {
                key: string;
                data: any;
            }): void;
            onStateChange(key: string): void;
            onDestroy(options: {
                isBeingReplaced: boolean;
            }): void;
            sendToServerDevice(key: string, data: any): void;
            openDeviceUI(): void;
            checkIfCollidersEnabled(): boolean;
            destroy(options: {
                isBeingReplaced: boolean;
            }): void;
        }

        type Device = BaseDevice & {
            [key: string]: any;
        };

        interface Cameras {
            allCameras: Device[];
            allCamerasNeedsUpdate: boolean;
            camerasPlayerIsInside: any[];
            scene: Scene;
            wasInPrePhase: boolean;
            findNewCameras(allCameras: Device[], x: number, y: number): any;
            setCurrentCameraSizeDevice(device: Device): void;
            switchToDefaultCameraSize(reset: boolean): void;
            update(devices: Device[]): void;
        }

        interface Devices {
            allDevices: Device[];
            cameras: Cameras;
            devicesAction: DevicesAction;
            devicesPreview: DevicesPreview;
            devicesToPostUpdate: Set<Device>;
            devicesToUpdate: Set<Device>;
            interactives: WorldInteractives;
            scene: Scene;
            visualEditingManager: any;
            addDevice(device: Device): void;
            cullDevices(): void;
            findDeviceUnderMouse(): Device | undefined;
            getDeviceById(id: string): Device | undefined;
            hasDevice(id: string): boolean;
            removeDeviceById(id: string, options: {
                isBeingReplaced: boolean;
            }): void;
            update(dt: number): void;
        }

        interface WorldManager {
            devices: Devices;
            inGameTerrainBuilder: InGameTerrainBuilder;
            physics: PhysicsManager;
            projectiles: Projectiles;
            scene: Scene;
            terrain: any;
            wires: any;
            update(dt: number): void;
        }

        interface MovementPointer {
            id: string;
            x: number;
            y: number;
            downX: number;
            downY: number;
        }

        interface Mouse {
            clickListeners: Map<string, (pointer: import("phaser").Input.Pointer) => void>;
            downX: number;
            downY: number;
            isHoldingDown: boolean;
            movementPointer?: MovementPointer;
            scene: Scene;
            stopRunningClickHandlers: boolean;
            worldX: number;
            worldY: number;
            x: number;
            y: number;
            addClickListener(options: {
                callback: (pointer: import("phaser").Input.Pointer) => void;
            }): () => void;
            pointerUpdate(pointer: import("phaser").Input.Pointer): void;
            removeClickListener(id: string): void;
            shouldBecomeMovementPointer(pointer: import("phaser").Input.Pointer): boolean;
        }

        interface KeyboardState {
            isHoldingDown: boolean;
            isHoldingLeft: boolean;
            isHoldingRight: boolean;
            isHoldingUp: boolean;
            isHoldingSpace: boolean;
        }

        interface Keyboard {
            heldKeys: Set<string>;
            scene: Scene;
            state: KeyboardState;
            createListeners(): void;
            isKeyDown(key: number): boolean;
        }

        interface PressedKeys {
            up: boolean;
            down: boolean;
            left: boolean;
            right: boolean;
        }

        interface Cursor {
            scene: Scene;
            createStateListeners(): void;
            updateCursor(): void;
        }

        interface AimCursor {
            aimCursor: import("phaser").GameObjects.Sprite;
            aimCursorWorldPos: Vector;
            centerShiftX: number;
            centerShiftY: number;
            scene: Scene;
            x: number;
            y: number;
            update(): void;
        }

        interface TickInput {
            angle: number | null;
            jump: boolean;
            _jumpKeyPressed: boolean;
        }

        interface InputManager {
            aimCursor: AimCursor;
            currentInput: TickInput;
            cursor: Cursor;
            isListeningForInput: boolean;
            jumpedSinceLastPhysicsFetch: boolean;
            keyboard: Keyboard;
            mouse: Mouse;
            physicsInputHandledBetweenUpdates: boolean;
            scene: Scene;
            getAimingDirection(): Vector;
            getInputAngle(): number | null;
            getKeys(): PressedKeys;
            getMouseWorldXY(): Vector;
            getPhysicsInput(): TickInput;
            refreshInput(): void;
            update(): void;
        }

        interface Scene extends BaseScene {
            actionManager: ActionManager;
            cameraHelper: any;
            characterManager: CharacterManager;
            dt: number;
            inputManager: InputManager;
            resizeManager: any;
            shadowsManager: any;
            spine: any;
            tileManager: TileManager;
            uiManager: any;
            worldManager: WorldManager;
            create(): void;
        }

        interface Phaser {
            mainCharacter: Character;
            mainCharacterTeleported: boolean;
            scene: Scene;
        }

        interface NetworkStore {
            attemptingToConnect: boolean;
            attemptingToReconnect: boolean;
            authId: string;
            client: any;
            clientConnectionString: string;
            error: any;
            errorFindingServerForGame: boolean;
            errorJoiningRoom: boolean;
            failedToReconnect: boolean;
            findingServerForGame: boolean;
            hasJoinedRoom: boolean;
            isOffline: boolean;
            isUpToDateWithPingPong: boolean;
            joinedRoom: boolean;
            phaseBeforeReconnect: string | null;
            ping: number;
            room: any;
            roomIntentErrorMessage: string;
            syncingAfterReconnection: boolean;
        }

        interface Matchmaker {
            gameCode: string;
        }

        interface Loading {
            completedInitialLoad: boolean;
            loadedInitialDevices: boolean;
            loadedInitialTerrain: boolean;
            percentageAssetsLoaded: number;
        }

        interface Hooks {
            hookJSON: string;
        }

        interface EditingStore {
            accessPoints: Map<any, any>;
            gridSnap: number;
            showMemoryBarAtAllTimes: boolean;
        }

        interface Assignment {
            hasSavedProgress: boolean;
            objective: string;
            percentageComplete: number;
        }

        interface ActivityFeed {
            feedItems: {
                id: string;
                message: string;
            }[];
        }

        interface CustomAssetOption {
            id: string;
            maxOnMap: number;
            memoryCost: number;
            minimumRoleLevel?: number;
            validate: any;
        }

        interface TerrainOption {
            id: string;
            name: string;
            maskTilesUrl: string;
            borderTilesUrl: string;
            fillUrl: string;
            blockedMapStyles?: string[];
            seasonTicketRequired?: boolean;
            previewUrl: string;
            health?: number;
            minimumRoleLevel?: number;
        }

        interface SkinOption {
            id: string;
            name: string;
            minimumRoleLevel?: number;
        }

        interface CircleShort {
            x: number;
            y: number;
            r: number;
        }

        interface RectShort {
            x: number;
            y: number;
            w: number;
            h: number;
        }

        interface RotatedRectShort extends RectShort {
            angle: number;
        }

        interface RotatedEllipse extends Ellipse {
            angle: number;
        }

        interface Ellipse {
            x: number;
            y: number;
            r1: number;
            r2: number;
        }

        interface PropOption {
            id: string;
            name: string;
            scaleMultip: number;
            originX: number;
            originY: number;
            imageUrl: string;
            rectColliders: RotatedRectShort[];
            circleColliders: CircleShort[];
            ellipseColliders: RotatedEllipse[];
            shadows: Ellipse[];
            seasonTicketRequired?: boolean;
            minimumRoleLevel?: number;
            defaultLayer?: string;
        }

        interface WeaponShared {
            cooldownBetweenShots: number;
            allowAutoFire: boolean;
            startingProjectileDistanceFromCharacter: number;
        }

        interface Weapon {
            type: string;
            appearance: string;
            shared: WeaponShared;
            bullet?: {
                ammoItemId: string;
            };
        }

        interface ItemOption {
            type: string;
            id: string;
            name: string;
            editorName: string;
            description: string;
            previewImage: string;
            rarity?: string;
            weapon?: Weapon;
            minimumRoleLevel?: number;
            useCommand?: string;
            consumeType?: string;
            terrainId?: string;
            maxStackSize?: number;
        }

        interface OptionSchema {
            options: any[];
            categories?: any[];
        }

        interface DeviceInfo {
            id: string;
            name: string;
            description?: string;
            optionSchema: OptionSchema;
            defaultState: any;
            codeGridSchema: CodeGridSchema;
            wireConfig?: any;
            minimumRoleLevel?: number;
            maxOnMap?: number;
            initialMemoryCost?: number;
            subsequentMemoryCost?: number;
            supportedMapStyles?: string[];
            seasonTicketRequired?: boolean;
            maximumRoleLevel?: number;
        }

        interface CodeGrids {
            blockCategories: string;
            customBlocks: string;
            customBlocksParsed: any[];
        }

        interface WorldOptions {
            codeGrids: CodeGrids;
            customAssetsOptions: CustomAssetOption[];
            deviceOptions: DeviceInfo[];
            hasAllProps: boolean;
            itemOptions: ItemOption[];
            propsOptions: PropOption[];
            skinOptions: SkinOption[];
            terrainOptions: TerrainOption[];
        }

        interface Limits {
            blocksPerCodeGrid: number;
            codeGrids: number;
            codeGridsPerDevice: number;
            collidingTiles: number;
            customAssetOnMapDefault: number;
            deviceMaxOnMapDefault: number;
            nonCollidingTiles: number;
            wires: number;
        }

        interface Counters {
            codeGrids: number;
            collidingTiles: number;
            customAssets: Map<string, number>;
            devices: Map<string, number>;
            nonCollidingTiles: number;
            wires: number;
        }

        interface Costs {
            codeGrid: number;
            collidingTile: number;
            customAssetDefault: number;
            deviceInitialDefault: number;
            deviceSubsequentDefault: number;
            nonCollidingTile: number;
            wire: number;
        }

        interface MemorySystem {
            costs: Costs;
            counters: Counters;
            limits: Limits;
            maxUsedMemory: number;
            usedMemoryCost: number;
        }

        interface CharacterData {
            allowWeaponFire: boolean;
            existsBeforeReconnect: boolean;
            fragility: number;
            health: number;
            id: string;
            isActive: boolean;
            lastPlayersTeamId: string;
            name: string;
            permissions: Permissions;
            score: number;
            teamId: string;
            type: string;
        }

        interface Characters {
            characters: Map<string, CharacterData>;
        }

        interface Scorebar {
            teamColors: string[];
            teams: string[];
        }

        interface NoneGui {
            addMenu: {
                screen: string;
            };
            duringGameScreenVisible: boolean;
            optionsMenu: {
                screen: string;
            };
            screen: string;
        }

        interface Modals {
            closeAllModals: () => void;
            cosmosModalOpen: boolean;
            switchToRegisterScreenWhenCosmosModalOpens: boolean;
        }

        interface KnockoutAlert {
            id: string;
            name: string;
        }

        interface GuiSlot {
            id: string;
            position: string;
            text: string;
            trackedItemId: any;
            showTrackedItemMaximumAmount: boolean;
            type: string;
            priority: number;
            color: string;
        }

        interface DamageIndicator {
            show: boolean;
            /** `h` for red, `s` for blue, and any other string for yellow. */
            type: string;
        }

        interface BottomInGamePrimaryContent {
            interactionWantsToBeVisible: boolean;
            prioritizeInteraction: boolean;
        }

        interface Achievement {
            id: string;
            key: string;
            reset: () => void;
            update: () => void;
        }

        interface GUI {
            achievement: Achievement;
            bottomInGamePrimaryContent: BottomInGamePrimaryContent;
            damageIndicator: DamageIndicator;
            guiSlots: GuiSlot[];
            guiSlotsChangeCounter: number;
            knockoutAlerts: KnockoutAlert[];
            modals: Modals;
            none: NoneGui;
            openInputBlockingUI: string[];
            playersManagerUpdateCounter: number;
            scale: number;
            scorebar?: Scorebar;
            selectedPlayerId: string;
            showingGrid: boolean;
        }

        interface Permissions {
            adding: boolean;
            editing: boolean;
            manageCodeGrids: boolean;
            removing: boolean;
        }

        interface GameSession {
            callToAction: any;
            countdownEnd: number;
            phase: string;
            resultsEnd: number;
            widgets: {
                widgets: any[];
            };
        }

        interface Session {
            allowGoogleTranslate: boolean;
            amIGameOwner: boolean;
            canAddGameTime: boolean;
            cosmosBlocked: boolean;
            customTeams: {
                characterToTeamMap: Map<string, string>;
            };
            duringTransition: boolean;
            gameClockDuration: string;
            gameOwnerId: string;
            gameSession: GameSession;
            gameTime: number;
            gameTimeLastUpdateAt: number;
            globalPermissions: Permissions;
            loadingPhase: boolean;
            mapCreatorRoleLevel: number;
            mapStyle: string;
            modeType: string;
            ownerRole: string;
            phase: string;
            phaseChangedAt: number;
            version: string;
        }

        interface ZoneDropOverrides {
            allowItemDrop: boolean;
            allowResourceDrop: boolean;
            allowWeaponDrop: boolean;
        }

        interface XPAddition {
            amount: number;
            reason: string;
            xp: number;
        }

        interface XP {
            additionTimeouts: Map<string, ReturnType<typeof setTimeout>>;
            additions: XPAddition[];
            showingLevelUp: boolean;
        }

        interface MeSpectating {
            id: string;
            name: string;
            shuffle: boolean;
        }

        interface TileToRemove {
            depth: number;
            id: string;
            x: number;
            y: number;
        }

        interface Removing {
            deviceIdToRemove?: string;
            removingMode: string;
            removingTilesEraserSize: number;
            removingTilesLayer: number;
            removingTilesMode: string;
            tilesToRemove: TileToRemove[];
            wireIdToRemove?: string;
        }

        interface NonDismissMessage {
            description: string;
            title: string;
        }

        interface Mood {
            activeDeviceId: string;
            vignetteActive: boolean;
            vignetteStrength: number;
        }

        interface MobileControls {
            left: boolean;
            right: boolean;
            up: boolean;
        }

        interface InventorySlot {
            amount: number;
            existsBeforeReconnect: boolean;
        }

        interface AlertFeed {
            amount: number;
            itemId: string;
        }

        interface InteractiveSlot {
            clipSize: number;
            count: number;
            currentClip: number;
            durability: number;
            itemId: string;
            waiting: boolean;
            waitingEndTime: number;
            waitingStartTime: number;
        }

        interface Inventory {
            activeInteractiveSlot: number;
            alertFeed?: AlertFeed;
            alertsFeed: AlertFeed[];
            currentWaitingEndTime: number;
            infiniteAmmo: boolean;
            interactiveSlotErrorMessageTimeouts: Map<string, ReturnType<typeof setTimeout>>;
            interactiveSlotErrorMessages: Map<string, string>;
            interactiveSlots: Map<string, InteractiveSlot>;
            interactiveSlotsOrder: number[];
            isCurrentWaitingSoundForItem: boolean;
            lastShotsTimestamps: Map<string, number>;
            maxSlots: number;
            slots: Map<string, InventorySlot>;
        }

        interface InteractiveInfo {
            action: string;
            allowedToInteract: boolean;
            message: string;
            topHeader?: string;
            topHeaderColor: string;
        }

        interface Interactives {
            deviceId: string;
            info: InteractiveInfo;
        }

        interface Health {
            fragility: number;
            health: number;
            lives: number;
            maxHealth: number;
            maxShield: number;
            shield: number;
        }

        interface EditingPreferences {
            cameraZoom: number;
            movementSpeed: number | null;
            phase: boolean | null;
            showGrid: boolean | null;
            topDownControlsActive: boolean;
        }

        interface CurrentlyEditedDevice {
            deviceOptionId: string;
            id: string;
        }

        interface EditingDevice {
            currentlyEditedDevice: CurrentlyEditedDevice;
            currentlyEditedGridId: string;
            currentlySortedDeviceId: string;
            screen: string;
            sortingState: any[];
            usingMultiselect: boolean;
            visualEditing: any;
        }

        interface Editing {
            device: EditingDevice;
            preferences: EditingPreferences;
            wire: {
                currentlyEditedWireId: string;
            };
        }

        interface MeDeviceUI {
            current: {
                deviceId: string;
                props: any;
            };
            desiredOpenDeviceId?: string;
            serverVersionOpenDeviceId: string;
        }

        interface MeCustomAssets {
            currentData?: {
                shapes: Shapes;
            };
            currentIcon: string;
            currentId: string;
            currentName: string;
            currentOptionId: string;
            isUIOpen: boolean;
            openOptionId: string | null;
            pendingDeleteId: string | null;
            showDeleteConfirm: boolean;
        }

        interface Context {
            cursorIsOverCharacterId: string;
            __devicesUnderCursor: string[];
            __wiresUnderCursor: Set<string>;
            cursorIsOverDevice: boolean;
            cursorIsOverWire: boolean;
        }

        interface ClassDesigner {
            activeClassDeviceId: string;
            lastActivatedClassDeviceId: string;
            lastClassDeviceActivationId: number;
        }

        interface CinematicMode {
            charactersVisible: boolean;
            enabled: boolean;
            followingMainCharacter: boolean;
            hidingGUI: boolean;
            mainCharacterVisible: boolean;
            nameTagsVisible: boolean;
        }

        interface AddingWires {
            hoveringOverSupportedDevice: boolean;
            pointUnderMouseDeviceId?: string;
            startDeviceSelected: boolean;
        }

        interface AddingTerrain {
            brushSize: number;
            buildTerrainAsWall: boolean;
            currentlySelectedTerrain: string;
            currentlySelectedTerrainDepth: number;
        }

        interface ExistingDevice {
            action: string;
            id: string;
            shiftX: number;
            shiftY: number;
            use: boolean;
        }

        interface AddingDevices {
            currentlySelectedProp: string;
            existingDevice: ExistingDevice;
            selectedDeviceType: string;
        }

        interface Adding {
            devices: AddingDevices;
            terrain: AddingTerrain;
            wires: AddingWires;
            mode: string;
        }

        interface Me {
            adding: Adding;
            cinematicMode: CinematicMode;
            classDesigner: ClassDesigner;
            completedInitialPlacement: boolean;
            context: Context;
            currentAction: string;
            customAssets: MeCustomAssets;
            deviceUI: MeDeviceUI;
            editing: Editing;
            gotKicked: boolean;
            health: Health;
            interactives: Interactives;
            inventory: Inventory;
            isRespawning: boolean;
            mobileControls: MobileControls;
            mood: Mood;
            movementSpeed: number;
            myTeam: string;
            nonDismissMessage: NonDismissMessage;
            phase: boolean;
            preferences: {
                startGameWithMode: string;
            };
            properties: Map<string, any>;
            removing: Removing;
            roleLevel: number;
            spawnPosition: Vector;
            spectating: MeSpectating;
            teleportCount: number;
            unredeemeedXP: number;
            xp: XP;
            zoneDropOverrides: ZoneDropOverrides;
        }

        interface QueuedTile {
            timestamp: number;
            removedBodyIds: string[];
        }

        interface Tile {
            collides: boolean;
            depth: number;
            terrain: string;
            x: number;
            y: number;
        }

        interface Terrain {
            currentTerrainUpdateId: number;
            modifiedHealth: Map<string, number>;
            queuedTiles: Map<number, QueuedTile>;
            teamColorTiles: Map<string, string>;
            tiles: Map<string, Tile>;
        }

        interface DeviceState {
            deviceId: string;
            properties: Map<string, any>;
        }

        interface CodeGridItem {
            createdAt: number;
            existsBeforeReconnect: boolean;
            json: string;
            triggerType: string;
            owner?: string;
            triggerValue?: string;
            visitors: string[];
        }

        interface CodeGrid {
            existsBeforeReconnect: boolean;
            items: Map<string, CodeGridItem>;
        }

        interface CodeGridSchema {
            allowChannelGrids: boolean;
            customBlocks: any[];
            triggers: any[];
        }

        interface DeviceOption {
            codeGridSchema: CodeGridSchema;
            defaultState: any;
            id: string;
            optionSchema: {
                options: any[];
            };
            wireConfig: any;
        }

        interface DeviceData {
            depth: number;
            deviceOption: DeviceOption;
            existsBeforeReconnect: boolean;
            hooks: any;
            id: string;
            isPreview: boolean;
            layerId: string;
            name: any;
            options: Record<string, any>;
            props: any;
            x: number;
            y: number;
        }

        interface WorldDevices {
            codeGrids: Map<string, CodeGrid>;
            devices: Map<string, DeviceData>;
            states: Map<string, DeviceState>;
        }

        interface Shapes {
            circles: number[][];
            lines: number[][];
            paths: number[][];
            rects: number[][];
        }

        interface CustomAsset {
            data: {
                shapes: Shapes;
            };
            icon: string;
            id: string;
            name: string;
            optionId: string;
        }

        interface WorldCustomAssets {
            customAssets: Map<string, CustomAsset>;
            isUIOpen: boolean;
            updateCounter: number;
        }

        interface World {
            customAssets: WorldCustomAssets;
            devices: WorldDevices;
            height: number;
            width: number;
            mapOptionsJSON: string;
            terrain: Terrain;
            wires: {
                wires: Map<any, any>;
            };
        }

        interface Stores {
            activityFeed: ActivityFeed;
            assignment: Assignment;
            characters: Characters;
            editing: EditingStore;
            gui: GUI;
            hooks: Hooks;
            loading: Loading;
            matchmaker: Matchmaker;
            me: Me;
            memorySystem: MemorySystem;
            network: NetworkStore;
            phaser: Phaser;
            scene: SceneStore;
            session: Session;
            teams: Teams;
            world: World;
            worldOptions: WorldOptions;
        }
    }

    class PluginsApi {
        /** A list of all the plugins installed */
        get list(): string[];
        /** Whether a plugin exists and is enabled */
        isEnabled(name: string): boolean;
        /** Gets the headers of a plugin, such as version, author, and description */
        getHeaders(name: string): {
            name: string;
            description: string;
            author: string;
            version: string | null;
            reloadRequired: string;
            isLibrary: string;
            downloadUrl: string | null;
            webpage: string | null;
            needsLib: string[];
            optionalLib: string[];
            syncEval: string;
            gamemode: string[];
            hasSettings: string;
        };
        /** Gets the exported values of a plugin, if it has been enabled */
        get(name: string): any;
        /**
         * @deprecated Use {@link get} instead
         * @hidden
         */
        getPlugin(name: string): {
            return: any;
        };
    }

    class LibsApi {
        /** A list of all the libraries installed */
        get list(): string[];
        /** Gets whether or not a plugin is installed and enabled */
        isEnabled(name: string): boolean;
        /** Gets the headers of a library, such as version, author, and description */
        getHeaders(name: string): {
            name: string;
            description: string;
            author: string;
            version: string | null;
            reloadRequired: string;
            isLibrary: string;
            downloadUrl: string | null;
            webpage: string | null;
            needsLib: string[];
            optionalLib: string[];
            syncEval: string;
            gamemode: string[];
            hasSettings: string;
        };
        /** Gets the exported values of a library */
        get(name: string): any;
    }

    class ScopedRewriterApi {
        private readonly id;
        constructor(id: string);
        /**
         * Creates a hook that will modify the code of a script before it is run.
         * This value is cached, so this hook may not run on subsequent page loads.
         * addParseHook should always be called in the top level of a script.
         * @param prefix Limits the hook to only running on scripts beginning with this prefix.
         * Passing `true` will only run on the index script, and passing `false` will run on all scripts.
         * @param callback The function that will modify the code. Should return the modified code. Cannot have side effects.
         */
        addParseHook(prefix: string | boolean, callback: (code: string) => string): () => void;
        /**
         * Creates a shared value that can be accessed from any script.
         * @param id A unique identifier for the shared value.
         * @param value The value to be shared.
         * @returns A string representing the code to access the shared value.
         */
        createShared(id: string, value: any): string;
        /** Removes the shared value with a certain id created by {@link createShared} */
        removeSharedById(id: string): void;
    }

    class RewriterApi {
        /**
         * Creates a hook that will modify the code of a script before it is run.
         * This value is cached, so this hook may not run on subsequent page loads.
         * addParseHook should always be called in the top level of a script.
         * @param pluginName The name of the plugin creating the hook.
         * @param prefix Limits the hook to only running on scripts beginning with this prefix.
         * Passing `true` will only run on the index script, and passing `false` will run on all scripts.
         * @param callback The function that will modify the code. Should return the modified code. Cannot have side effects.
         */
        addParseHook(pluginName: string, prefix: string | boolean, callback: (code: string) => string): () => void;
        /** Removes all hooks created by a certain plugin */
        removeParseHooks(pluginName: string): void;
        /**
         * Creates a shared value that can be accessed from any script.
         * @param pluginName The name of the plugin creating the shared value.
         * @param id A unique identifier for the shared value.
         * @param value The value to be shared.
         * @returns A string representing the code to access the shared value.
         */
        createShared(pluginName: string, id: string, value: any): string;
        /** Removes all values created by {@link createShared} by a certain plugin */
        removeShared(pluginName: string): void;
        /** Removes the shared value with a certain id created by {@link createShared} */
        removeSharedById(pluginName: string, id: string): void;
    }

    class ScopedPatcherApi {
        private readonly id;
        constructor(id: string);
        /**
         * Runs a callback after a function on an object has been run
         * @returns A function to remove the patch
         */
        after(object: any, method: string, callback: PatcherAfterCallback): () => void;
        /**
         * Runs a callback before a function on an object has been run.
         * Return true from the callback to prevent the function from running
         * @returns A function to remove the patch
         */
        before(object: any, method: string, callback: PatcherBeforeCallback): () => void;
        /**
         * Runs a function instead of a function on an object
         * @returns A function to remove the patch
         */
        instead(object: any, method: string, callback: PatcherInsteadCallback): () => void;
    }

    type PatcherAfterCallback = (thisVal: any, args: IArguments, returnVal: any) => any;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    type PatcherBeforeCallback = (thisVal: any, args: IArguments) => boolean | void;

    type PatcherInsteadCallback = (thisVal: any, args: IArguments) => void;

    class PatcherApi {
        /**
         * Runs a callback after a function on an object has been run
         * @returns A function to remove the patch
         */
        after(id: string, object: any, method: string, callback: PatcherAfterCallback): () => void;
        /**
         * Runs a callback before a function on an object has been run.
         * Return true from the callback to prevent the function from running
         * @returns A function to remove the patch
         */
        before(id: string, object: any, method: string, callback: PatcherBeforeCallback): () => void;
        /**
         * Runs a function instead of a function on an object
         * @returns A function to remove the patch
         */
        instead(id: string, object: any, method: string, callback: PatcherInsteadCallback): () => void;
        /** Removes all patches with a given id */
        unpatchAll(id: string): void;
    }

    class ScopedStorageApi {
        private readonly id;
        constructor(id: string);
        /** Gets a value that has previously been saved */
        getValue(key: string, defaultValue?: any): any;
        /** Sets a value which can be retrieved later, persisting through reloads */
        setValue(key: string, value: any): void;
        /** Removes a value which has been saved */
        deleteValue(key: string): void;
        /** Adds a listener for when a stored value with a certain key changes  */
        onChange(key: string, callback: ValueChangeCallback): () => void;
    }

    type ValueChangeCallback = (value: any, remote: boolean) => void;

    class StorageApi {
        /** Gets a value that has previously been saved */
        getValue(pluginName: string, key: string, defaultValue?: any): any;
        /** Sets a value which can be retrieved later, through reloads */
        setValue(pluginName: string, key: string, value: any): void;
        /** Removes a value which has been saved */
        deleteValue(pluginName: string, key: string): void;
        /**
         * @deprecated use {@link deleteValue}
         * @hidden
         */
        get removeValue(): (pluginName: string, key: string) => void;
        /** Adds a listener for when a plugin's stored value with a certain key changes */
        onChange(pluginName: string, key: string, callback: ValueChangeCallback): () => void;
        /** Removes a listener added by onChange */
        offChange(pluginName: string, key: string, callback: ValueChangeCallback): void;
        /** Removes all listeners added by onChange for a certain plugin */
        offAllChanges(pluginName: string): void;
    }

    class ScopedUIApi extends BaseUIApi {
        private readonly id;
        constructor(id: string);
        /**
         * Adds a style to the DOM
         * @returns A function to remove the styles
         */
        addStyles(style: string): () => void;
    }

    interface ModalButton {
        text: string;
        style?: "primary" | "danger" | "close";
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        onClick?: (event: MouseEvent) => boolean | void;
    }

    interface ModalOptions {
        id: string;
        title: string;
        style: string;
        className: string;
        closeOnBackgroundClick: boolean;
        buttons: ModalButton[];
        onClosed: () => void;
    }

    class BaseUIApi {
        /** Shows a customizable modal to the user */
        showModal(element: HTMLElement | import("react").ReactElement, options?: Partial<ModalOptions>): void;
    }

    class UIApi extends BaseUIApi {
        /**
         * Adds a style to the DOM
         * @returns A function to remove the styles
         */
        addStyles(id: string, style: string): () => void;
        /** Remove all styles with a given id */
        removeStyles(id: string): void;
    }

    interface ScopedNetApi extends BaseNetApi {
        new(id: string, defaultGamemode: string[]): this;
        /**
         * Runs a callback when the game is loaded, or runs it immediately if the game has already loaded.
         * If the \@gamemode header is set the callback will only fire if the gamemode matches one of the provided gamemodes.
         * @returns A function to cancel waiting for load
         */
        onLoad(callback: (type: ConnectionType, gamemode: string) => void, gamemode?: string | string[]): () => void;
    }

    type ConnectionType = "None" | "Colyseus" | "Blueboat";

    interface BaseNetApi extends EventEmitter2 {
        new(): this;
        /** Which type of server the client is currently connected to */
        get type(): ConnectionType;
        /** The id of the gamemode the player is currently playing */
        get gamemode(): string;
        /** The room that the client is connected to, or null if there is no connection */
        get room(): any;
        /** Whether the user is the one hosting the current game */
        get isHost(): boolean;
        /** Sends a message to the server on a specific channel */
        send(channel: string, message: any): void;
    }

    interface NetApi extends BaseNetApi {
        new(): this;
        /**
         * Runs a callback when the game is loaded, or runs it immediately if the game has already loaded
         * @returns A function to cancel waiting for load
         */
        onLoad(
            id: string,
            callback: (type: ConnectionType, gamemode: string) => void,
            gamemode?: string | string[],
        ): () => void;
        /** Cancels any calls to {@link onLoad} with the same id */
        offLoad(id: string): void;
        /**
         * @deprecated Methods for both transports are now on the base net api
         * @hidden
         */
        get colyseus(): this;
        /**
         * @deprecated Methods for both transports are now on the base net api
         * @hidden
         */
        get blueboat(): this;

        /**
         * @deprecated use net.on
         * @hidden
         */
        addEventListener(channel: string, callback: (...args: any[]) => void): void;
        /**
         * @deprecated use net.off
         * @hidden
         */
        removeEventListener(channel: string, callback: (...args: any[]) => void): void;
    }

    class ScopedParcelApi extends BaseParcelApi {
        private readonly id;
        constructor(id: string);
        /**
         * Waits for a module to be loaded, then runs a callback
         * @returns A function to cancel waiting for the module
         */
        getLazy(): () => void;
    }

    class BaseParcelApi {
        /**
         * Gets a module based on a filter, returns null if none are found
         * Be cautious when using this- plugins will often run before any modules load in,
         * meaning that if this is run on startup it will likely return nothing.
         * Consider using getLazy instead.
         */
        query(): any;
        /**
         * Returns an array of all loaded modules matching a filter
         * Be cautious when using this- plugins will often run before any modules load in,
         * meaning that if this is run on startup it will likely return nothing.
         * Consider using getLazy instead.
         */
        queryAll(): any[];
    }

    class ParcelApi extends BaseParcelApi {
        /**
         * Waits for a module to be loaded, then runs a callback
         * @returns A function to cancel waiting for the module
         */
        getLazy(): () => void;
        /** Cancels any calls to getLazy with the same id */
        stopLazy(): void;
        /**
         * @deprecated Use {@link getLazy} instead
         * @hidden
         */
        get interceptRequire(): () => () => void;
        /**
         * @deprecated Use {@link stopLazy} instead
         * @hidden
         */
        get stopIntercepts(): () => void;
    }

    class ScopedHotkeysApi extends BaseHotkeysApi {
        private readonly id;
        constructor(id: string);
        /**
         * Adds a hotkey which will fire when certain keys are pressed
         * @returns A function to remove the hotkey
         */
        addHotkey(options: HotkeyOptions, callback: KeyboardCallback): () => void;
        /**
         * Adds a hotkey which can be changed by the user
         * @returns A function to remove the hotkey
         */
        addConfigurableHotkey(options: ConfigurableHotkeyOptions, callback: KeyboardCallback): () => void;
    }

    type KeyboardCallback = (e: KeyboardEvent) => void;

    class BaseHotkeysApi {
        /**
         * Releases all keys, needed if a hotkey opens something that will
         * prevent keyup events from being registered, such as an alert
         */
        releaseAll(): void;
        /** Which key codes are currently being pressed */
        get pressed(): Set<string>;
        /**
         * @deprecated Use {@link pressed} instead
         * @hidden
         */
        get pressedKeys(): Set<string>;
    }

    interface OldConfigurableOptions {
        category: string;
        title: string;
        preventDefault?: boolean;
        defaultKeys?: Set<string>;
    }

    interface ConfigurableHotkeyOptions {
        category: string;
        /** There should be no duplicate titles within a category */
        title: string;
        preventDefault?: boolean;
        default?: HotkeyTrigger;
    }

    interface HotkeyTrigger {
        /** Should be a keyboardevent [code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) */
        key?: string;
        /** Should be keyboardevent [codes](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) */
        keys?: string[];
        ctrl?: boolean;
        shift?: boolean;
        alt?: boolean;
    }

    interface HotkeyOptions extends HotkeyTrigger {
        preventDefault?: boolean;
    }

    class HotkeysApi extends BaseHotkeysApi {
        /**
         * Adds a hotkey with a given id
         * @returns A function to remove the hotkey
         */
        addHotkey(id: string, options: HotkeyOptions, callback: KeyboardCallback): () => void;
        /** Removes all hotkeys with a given id */
        removeHotkeys(id: string): void;
        /**
         * Adds a hotkey which can be changed by the user
         * @param id A unique id for the hotkey, such as `myplugin-myhotkey`
         * @returns A function to remove the hotkey
         */
        addConfigurableHotkey(id: string, options: ConfigurableHotkeyOptions, callback: KeyboardCallback): () => void;
        /** Removes a configurable hotkey with a given id */
        removeConfigurableHotkey(id: string): void;
        /**
         * @deprecated Use {@link addHotkey} instead
         * @hidden
         */
        add(keys: Set<string>, callback: KeyboardCallback, preventDefault?: boolean): void;
        /**
         * @deprecated Use {@link removeHotkeys} instead
         * @hidden
         */
        remove(keys: Set<string>): void;
        /**
         * @deprecated Use {@link addConfigurableHotkey} instead
         * @hidden
         */
        addConfigurable(
            pluginName: string,
            hotkeyId: string,
            callback: KeyboardCallback,
            options: OldConfigurableOptions,
        ): void;
        /**
         * @deprecated Use {@link removeConfigurableHotkeys} instead
         * @hidden
         */
        removeConfigurable(pluginName: string, hotkeyId: string): void;
    }

    class Api {
        /**
         * @deprecated Gimkit has switched from Parcel to vite, rendering this api useless.
         * @hidden
         */
        static parcel: Readonly<ParcelApi>;
        /** Functions to edit Gimkit's code */
        static rewriter: Readonly<RewriterApi>;
        /** Functions to listen for key combinations */
        static hotkeys: Readonly<HotkeysApi>;
        /**
         * Ways to interact with the current connection to the server,
         * and functions to send general requests
         */
        static net: Readonly<NetApi>;
        /** Functions for interacting with the DOM */
        static UI: Readonly<UIApi>;
        /** Functions for persisting data between reloads */
        static storage: Readonly<StorageApi>;
        /** Functions for intercepting the arguments and return values of functions */
        static patcher: Readonly<PatcherApi>;
        /** Methods for getting info on libraries */
        static libs: Readonly<LibsApi>;
        /** Gets the exported values of a library */
        static lib: (name: string) => any;
        /** Methods for getting info on plugins */
        static plugins: Readonly<PluginsApi>;
        /** Gets the exported values of a plugin, if it has been enabled */
        static plugin: (name: string) => any;
        /** Gimkit's internal react instance */
        static get React(): typeof import("react");
        /** Gimkit's internal reactDom instance */
        static get ReactDOM(): typeof import("react-dom/client");
        /** A variety of Gimkit internal objects available in 2d gamemodes */
        static get stores(): Stores.Stores;
        /**
         * Gimkit's notification object, only available when joining or playing a game
         *
         * {@link https://ant.design/components/notification}
         */
        static get notification(): any;
        /**
         * @deprecated No longer supported
         * @hidden
         */
        static get contextMenu(): {
            showContextMenu: () => void;
            createReactContextMenu: () => void;
        };
        /**
         * @deprecated No longer supported
         * @hidden
         */
        static get platformerPhysics(): any;
        /**
         * @deprecated The api no longer emits events. Use GL.net.loaded to listen to load events
         * @hidden
         */
        static addEventListener(type: string, callback: () => void): void;
        /**
         * @deprecated The api no longer emits events
         * @hidden
         */
        static removeEventListener(type: string, callback: () => void): void;
        /**
         * @deprecated Use {@link plugins} instead
         * @hidden
         */
        static get pluginManager(): Readonly<PluginsApi>;
        constructor(type?: string, name?: string);
        /**
         * @deprecated Gimkit has switched from Parcel to vite, rendering this api useless.
         * @hidden
         */
        parcel: Readonly<ScopedParcelApi>;
        /** Functions to edit Gimkit's code */
        rewriter: Readonly<ScopedRewriterApi>;
        /** Functions to listen for key combinations */
        hotkeys: Readonly<ScopedHotkeysApi>;
        /**
         * Ways to interact with the current connection to the server,
         * and functions to send general requests
         */
        net: Readonly<ScopedNetApi>;
        /** Functions for interacting with the DOM */
        UI: Readonly<ScopedUIApi>;
        /** Functions for persisting data between reloads */
        storage: Readonly<ScopedStorageApi>;
        /** Functions for intercepting the arguments and return values of functions */
        patcher: Readonly<ScopedPatcherApi>;
        /** Methods for getting info on libraries */
        libs: Readonly<LibsApi>;
        /** Gets the exported values of a library */
        lib: (name: string) => any;
        /** Methods for getting info on plugins */
        plugins: Readonly<PluginsApi>;
        /** Gets the exported values of a plugin, if it has been enabled */
        plugin: (name: string) => any;
        /** Gimkit's internal react instance */
        get React(): typeof import("react");
        /** Gimkit's internal reactDom instance */
        get ReactDOM(): typeof import("react-dom/client");
        /** A variety of gimkit internal objects available in 2d gamemodes */
        get stores(): Stores.Stores;
        /**
         * Gimkit's notification object, only available when joining or playing a game
         *
         * {@link https://ant.design/components/notification}
         */
        get notification(): any;
        /** Run a callback when the plugin or library is disabled */
        onStop: (callback: () => void) => void;
        /**
         * Run a callback when the plugin's settings menu button is clicked
         *
         * This function is not available for libraries
         */
        openSettingsMenu: (callback: () => void) => void;
    }
}

declare const api: Gimloader.Api;
declare const GL: typeof Gimloader.Api;
/** @deprecated Use GL.stores */
declare const stores: Gimloader.Stores.Stores;
/** @deprecated No longer supported */
declare const platformerPhysics: any;

interface Window {
    api: Gimloader.Api;
    GL: typeof Gimloader.Api;
    /** @deprecated Use GL.stores */
    stores: Gimloader.Stores.Stores;
    /** @deprecated No longer supported */
    platformerPhysics: any;
}
