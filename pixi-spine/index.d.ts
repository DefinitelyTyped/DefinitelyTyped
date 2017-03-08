// Type definitions for Pixi-spine 1.3
// Project: https://github.com/pixijs/pixi-spine/tree/master
// Definitions by: Ivan Popelyshev <https://github.com/pixijs/pixi-spine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as PPP from "pixi.js";

declare module "pixi.js" {
    namespace spine.core {
        class Animation {
            name: string;
            timelines: Timeline[];
            duration: number;
            constructor(name: string, timelines: Timeline[], duration: number);
            apply(skeleton: Skeleton, lastTime: number, time: number, loop: boolean, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
            static binarySearch(values: ArrayLike<number>, target: number, step?: number): number;
            static linearSearch(values: ArrayLike<number>, target: number, step: number): number;
        }
        interface Timeline {
            apply(skeleton: Skeleton, lastTime: number, time: number, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
            getPropertyId(): number;
        }
        enum TimelineType {
            rotate = 0,
            translate = 1,
            scale = 2,
            shear = 3,
            attachment = 4,
            color = 5,
            deform = 6,
            event = 7,
            drawOrder = 8,
            ikConstraint = 9,
            transformConstraint = 10,
            pathConstraintPosition = 11,
            pathConstraintSpacing = 12,
            pathConstraintMix = 13,
        }
        abstract class CurveTimeline implements Timeline {
            static LINEAR: number;
            static STEPPED: number;
            static BEZIER: number;
            static BEZIER_SIZE: number;
            private curves;
            abstract getPropertyId(): number;
            constructor(frameCount: number);
            getFrameCount(): number;
            setLinear(frameIndex: number): void;
            setStepped(frameIndex: number): void;
            getCurveType(frameIndex: number): number;
            setCurve(frameIndex: number, cx1: number, cy1: number, cx2: number, cy2: number): void;
            getCurvePercent(frameIndex: number, percent: number): number;
            abstract apply(skeleton: Skeleton, lastTime: number, time: number, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class RotateTimeline extends CurveTimeline {
            static ENTRIES: number;
            static PREV_TIME: number;
            static PREV_ROTATION: number;
            static ROTATION: number;
            boneIndex: number;
            frames: ArrayLike<number>;
            constructor(frameCount: number);
            getPropertyId(): number;
            setFrame(frameIndex: number, time: number, degrees: number): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class TranslateTimeline extends CurveTimeline {
            static ENTRIES: number;
            static PREV_TIME: number;
            static PREV_X: number;
            static PREV_Y: number;
            static X: number;
            static Y: number;
            boneIndex: number;
            frames: ArrayLike<number>;
            constructor(frameCount: number);
            getPropertyId(): number;
            setFrame(frameIndex: number, time: number, x: number, y: number): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class ScaleTimeline extends TranslateTimeline {
            constructor(frameCount: number);
            getPropertyId(): number;
            apply(skeleton: Skeleton, lastTime: number, time: number, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class ShearTimeline extends TranslateTimeline {
            constructor(frameCount: number);
            getPropertyId(): number;
            apply(skeleton: Skeleton, lastTime: number, time: number, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class ColorTimeline extends CurveTimeline {
            static ENTRIES: number;
            static PREV_TIME: number;
            static PREV_R: number;
            static PREV_G: number;
            static PREV_B: number;
            static PREV_A: number;
            static R: number;
            static G: number;
            static B: number;
            static A: number;
            slotIndex: number;
            frames: ArrayLike<number>;
            constructor(frameCount: number);
            getPropertyId(): number;
            setFrame(frameIndex: number, time: number, r: number, g: number, b: number, a: number): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class AttachmentTimeline implements Timeline {
            slotIndex: number;
            frames: ArrayLike<number>;
            attachmentNames: string[];
            constructor(frameCount: number);
            getPropertyId(): number;
            getFrameCount(): number;
            setFrame(frameIndex: number, time: number, attachmentName: string): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, events: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class DeformTimeline extends CurveTimeline {
            slotIndex: number;
            attachment: VertexAttachment;
            frames: ArrayLike<number>;
            frameVertices: Array<ArrayLike<number>>;
            constructor(frameCount: number);
            getPropertyId(): number;
            setFrame(frameIndex: number, time: number, vertices: ArrayLike<number>): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class EventTimeline implements Timeline {
            frames: ArrayLike<number>;
            events: Event[];
            constructor(frameCount: number);
            getPropertyId(): number;
            getFrameCount(): number;
            setFrame(frameIndex: number, event: Event): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class DrawOrderTimeline implements Timeline {
            frames: ArrayLike<number>;
            drawOrders: number[][];
            constructor(frameCount: number);
            getPropertyId(): number;
            getFrameCount(): number;
            setFrame(frameIndex: number, time: number, drawOrder: number[]): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class IkConstraintTimeline extends CurveTimeline {
            static ENTRIES: number;
            static PREV_TIME: number;
            static PREV_MIX: number;
            static PREV_BEND_DIRECTION: number;
            static MIX: number;
            static BEND_DIRECTION: number;
            ikConstraintIndex: number;
            frames: ArrayLike<number>;
            constructor(frameCount: number);
            getPropertyId(): number;
            setFrame(frameIndex: number, time: number, mix: number, bendDirection: number): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class TransformConstraintTimeline extends CurveTimeline {
            static ENTRIES: number;
            static PREV_TIME: number;
            static PREV_ROTATE: number;
            static PREV_TRANSLATE: number;
            static PREV_SCALE: number;
            static PREV_SHEAR: number;
            static ROTATE: number;
            static TRANSLATE: number;
            static SCALE: number;
            static SHEAR: number;
            transformConstraintIndex: number;
            frames: ArrayLike<number>;
            constructor(frameCount: number);
            getPropertyId(): number;
            setFrame(frameIndex: number, time: number, rotateMix: number, translateMix: number, scaleMix: number, shearMix: number): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class PathConstraintPositionTimeline extends CurveTimeline {
            static ENTRIES: number;
            static PREV_TIME: number;
            static PREV_VALUE: number;
            static VALUE: number;
            pathConstraintIndex: number;
            frames: ArrayLike<number>;
            constructor(frameCount: number);
            getPropertyId(): number;
            setFrame(frameIndex: number, time: number, value: number): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class PathConstraintSpacingTimeline extends PathConstraintPositionTimeline {
            constructor(frameCount: number);
            getPropertyId(): number;
            apply(skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
        class PathConstraintMixTimeline extends CurveTimeline {
            static ENTRIES: number;
            static PREV_TIME: number;
            static PREV_ROTATE: number;
            static PREV_TRANSLATE: number;
            static ROTATE: number;
            static TRANSLATE: number;
            pathConstraintIndex: number;
            frames: ArrayLike<number>;
            constructor(frameCount: number);
            getPropertyId(): number;
            setFrame(frameIndex: number, time: number, rotateMix: number, translateMix: number): void;
            apply(skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number, setupPose: boolean, mixingOut: boolean): void;
        }
    }
    namespace spine.core {
        class AnimationState {
            static emptyAnimation: Animation;
            data: AnimationStateData;
            tracks: TrackEntry[];
            events: Event[];
            listeners: AnimationStateListener2[];
            queue: EventQueue;
            propertyIDs: IntSet;
            animationsChanged: boolean;
            timeScale: number;
            trackEntryPool: Pool<TrackEntry>;
            constructor(data: AnimationStateData);
            update(delta: number): void;
            updateMixingFrom(entry: TrackEntry, delta: number, canEnd: boolean): void;
            apply(skeleton: Skeleton): void;
            applyMixingFrom(entry: TrackEntry, skeleton: Skeleton): number;
            applyRotateTimeline(timeline: Timeline, skeleton: Skeleton, time: number, alpha: number, setupPose: boolean, timelinesRotation: number[], i: number, firstFrame: boolean): void;
            queueEvents(entry: TrackEntry, animationTime: number): void;
            clearTracks(): void;
            clearTrack(trackIndex: number): void;
            setCurrent(index: number, current: TrackEntry): void;
            setAnimation(trackIndex: number, animationName: string, loop: boolean): TrackEntry;
            setAnimationWith(trackIndex: number, animation: Animation, loop: boolean): TrackEntry;
            addAnimation(trackIndex: number, animationName: string, loop: boolean, delay: number): TrackEntry;
            addAnimationWith(trackIndex: number, animation: Animation, loop: boolean, delay: number): TrackEntry;
            setEmptyAnimation(trackIndex: number, mixDuration: number): TrackEntry;
            addEmptyAnimation(trackIndex: number, mixDuration: number, delay: number): TrackEntry;
            setEmptyAnimations(mixDuration: number): void;
            expandToIndex(index: number): TrackEntry;
            trackEntry(trackIndex: number, animation: Animation, loop: boolean, last: TrackEntry): TrackEntry;
            disposeNext(entry: TrackEntry): void;
            _animationsChanged(): void;
            setTimelinesFirst(entry: TrackEntry): void;
            checkTimelinesFirst(entry: TrackEntry): void;
            checkTimelinesUsage(entry: TrackEntry, usageArray: boolean[]): void;
            getCurrent(trackIndex: number): TrackEntry;
            addListener(listener: AnimationStateListener2): void;
            removeListener(listener: AnimationStateListener2): void;
            clearListeners(): void;
            clearListenerNotifications(): void;
            onComplete: (trackIndex: number, loopCount: number) => any;
            onEvent: (trackIndex: number, event: Event) => any;
            onStart: (trackIndex: number) => any;
            onEnd: (trackIndex: number) => any;
            private static deprecatedWarning1;
            setAnimationByName(trackIndex: number, animationName: string, loop: boolean): void;
            private static deprecatedWarning2;
            addAnimationByName(trackIndex: number, animationName: string, loop: boolean, delay: number): void;
            private static deprecatedWarning3;
            hasAnimationByName(animationName: string): boolean;
        }
        class TrackEntry {
            animation: Animation;
            next: TrackEntry;
            mixingFrom: TrackEntry;
            listener: AnimationStateListener2;
            trackIndex: number;
            loop: boolean;
            eventThreshold: number;
            attachmentThreshold: number;
            drawOrderThreshold: number;
            animationStart: number;
            animationEnd: number;
            animationLast: number;
            nextAnimationLast: number;
            delay: number;
            trackTime: number;
            trackLast: number;
            nextTrackLast: number;
            trackEnd: number;
            timeScale: number;
            alpha: number;
            mixTime: number;
            mixDuration: number;
            mixAlpha: number;
            timelinesFirst: boolean[];
            timelinesRotation: number[];
            reset(): void;
            getAnimationTime(): number;
            setAnimationLast(animationLast: number): void;
            isComplete(): boolean;
            resetRotationDirections(): void;
            onComplete: (trackIndex: number, loopCount: number) => any;
            onEvent: (trackIndex: number, event: Event) => any;
            onStart: (trackIndex: number) => any;
            onEnd: (trackIndex: number) => any;
            private static deprecatedWarning1;
            private static deprecatedWarning2;
            time: number;
            endTime: number;
            loopsCount(): number;
        }
        class EventQueue {
            objects: any[];
            drainDisabled: boolean;
            animState: AnimationState;
            constructor(animState: AnimationState);
            start(entry: TrackEntry): void;
            interrupt(entry: TrackEntry): void;
            end(entry: TrackEntry): void;
            dispose(entry: TrackEntry): void;
            complete(entry: TrackEntry): void;
            event(entry: TrackEntry, event: Event): void;
            private static deprecatedWarning1;
            deprecateStuff(): boolean;
            drain(): void;
            clear(): void;
        }
        enum EventType {
            start = 0,
            interrupt = 1,
            end = 2,
            dispose = 3,
            complete = 4,
            event = 5,
        }
        interface AnimationStateListener2 {
            start(entry: TrackEntry): void;
            interrupt(entry: TrackEntry): void;
            end(entry: TrackEntry): void;
            dispose(entry: TrackEntry): void;
            complete(entry: TrackEntry): void;
            event(entry: TrackEntry, event: Event): void;
        }
        abstract class AnimationStateAdapter2 implements AnimationStateListener2 {
            start(entry: TrackEntry): void;
            interrupt(entry: TrackEntry): void;
            end(entry: TrackEntry): void;
            dispose(entry: TrackEntry): void;
            complete(entry: TrackEntry): void;
            event(entry: TrackEntry, event: Event): void;
        }
    }
    namespace spine.core {
        class AnimationStateData {
            skeletonData: SkeletonData;
            animationToMixTime: Map<number>;
            defaultMix: number;
            constructor(skeletonData: SkeletonData);
            setMix(fromName: string, toName: string, duration: number): void;
            private static deprecatedWarning1;
            setMixByName(fromName: string, toName: string, duration: number): void;
            setMixWith(from: Animation, to: Animation, duration: number): void;
            getMix(from: Animation, to: Animation): number;
        }
    }
    namespace spine.core {
        class AtlasAttachmentLoader implements AttachmentLoader {
            atlas: TextureAtlas;
            constructor(atlas: TextureAtlas);
            newRegionAttachment(skin: Skin, name: string, path: string): RegionAttachment;
            newMeshAttachment(skin: Skin, name: string, path: string): MeshAttachment;
            newBoundingBoxAttachment(skin: Skin, name: string): BoundingBoxAttachment;
            newPathAttachment(skin: Skin, name: string): PathAttachment;
        }
    }
    namespace spine.core {
        abstract class Attachment {
            name: string;
            constructor(name: string);
        }
        abstract class VertexAttachment extends Attachment {
            bones: number[];
            vertices: ArrayLike<number>;
            worldVerticesLength: number;
            constructor(name: string);
            computeWorldVertices(slot: Slot, worldVertices: ArrayLike<number>): void;
            computeWorldVerticesWith(slot: Slot, start: number, count: number, worldVertices: ArrayLike<number>, offset: number): void;
            applyDeform(sourceAttachment: VertexAttachment): boolean;
        }
    }
    namespace spine.core {
        interface AttachmentLoader {
            newRegionAttachment(skin: Skin, name: string, path: string): RegionAttachment;
            newMeshAttachment(skin: Skin, name: string, path: string): MeshAttachment;
            newBoundingBoxAttachment(skin: Skin, name: string): BoundingBoxAttachment;
            newPathAttachment(skin: Skin, name: string): PathAttachment;
        }
    }
    namespace spine.core {
        enum AttachmentType {
            Region = 0,
            BoundingBox = 1,
            Mesh = 2,
            LinkedMesh = 3,
            Path = 4,
        }
    }
    namespace spine.core {
        class BoundingBoxAttachment extends VertexAttachment {
            color: Color;
            constructor(name: string);
        }
    }
    namespace spine.core {
        class MeshAttachment extends VertexAttachment {
            region: TextureRegion;
            path: string;
            regionUVs: ArrayLike<number>;
            triangles: number[];
            color: Color;
            hullLength: number;
            private parentMesh;
            inheritDeform: boolean;
            tempColor: Color;
            constructor(name: string);
            updateWorldVertices(slot: Slot, premultipliedAlpha: boolean): ArrayLike<number>;
            updateUVs(region: TextureRegion, uvs: ArrayLike<number>): ArrayLike<number>;
            applyDeform(sourceAttachment: VertexAttachment): boolean;
            getParentMesh(): MeshAttachment;
            setParentMesh(parentMesh: MeshAttachment): void;
        }
    }
    namespace spine.core {
        class PathAttachment extends VertexAttachment {
            lengths: number[];
            closed: boolean;
            constantSpeed: boolean;
            color: Color;
            constructor(name: string);
        }
    }
    namespace spine.core {
        class RegionAttachment extends Attachment {
            x: number;
            y: number;
            scaleX: number;
            scaleY: number;
            rotation: number;
            width: number;
            height: number;
            color: Color;
            path: string;
            region: TextureRegion;
            constructor(name: string);
            updateWorldVertices(slot: Slot, premultipliedAlpha: boolean): ArrayLike<number>;
        }
    }
    namespace spine.core {
        enum BlendMode {
            Normal = 0,
            Additive = 1,
            Multiply = 2,
            Screen = 3,
        }
    }
    namespace spine.core {
        class Bone implements Updatable {
            static yDown: boolean;
            matrix: Matrix;
            readonly worldX: number;
            readonly worldY: number;
            data: BoneData;
            skeleton: Skeleton;
            parent: Bone;
            children: Bone[];
            x: number;
            y: number;
            rotation: number;
            scaleX: number;
            scaleY: number;
            shearX: number;
            shearY: number;
            ax: number;
            ay: number;
            arotation: number;
            ascaleX: number;
            ascaleY: number;
            ashearX: number;
            ashearY: number;
            appliedValid: boolean;
            sorted: boolean;
            constructor(data: BoneData, skeleton: Skeleton, parent: Bone);
            update(): void;
            updateWorldTransform(): void;
            updateWorldTransformWith(x: number, y: number, rotation: number, scaleX: number, scaleY: number, shearX: number, shearY: number): void;
            setToSetupPose(): void;
            getWorldRotationX(): number;
            getWorldRotationY(): number;
            getWorldScaleX(): number;
            getWorldScaleY(): number;
            worldToLocalRotationX(): number;
            worldToLocalRotationY(): number;
            rotateWorld(degrees: number): void;
            updateAppliedTransform(): void;
            worldToLocal(world: Vector2): Vector2;
            localToWorld(local: Vector2): Vector2;
        }
    }
    namespace spine.core {
        class BoneData {
            index: number;
            name: string;
            parent: BoneData;
            length: number;
            x: number;
            y: number;
            rotation: number;
            scaleX: number;
            scaleY: number;
            shearX: number;
            shearY: number;
            transformMode: TransformMode;
            constructor(index: number, name: string, parent: BoneData);
        }
        enum TransformMode {
            Normal = 0,
            OnlyTranslation = 1,
            NoRotationOrReflection = 2,
            NoScale = 3,
            NoScaleOrReflection = 4,
        }
    }
    namespace spine.core {
        interface Constraint extends Updatable {
            getOrder(): number;
        }
    }
    namespace spine.core {
        class Event {
            data: EventData;
            intValue: number;
            floatValue: number;
            stringValue: string;
            time: number;
            constructor(time: number, data: EventData);
        }
    }
    namespace spine.core {
        class EventData {
            name: string;
            intValue: number;
            floatValue: number;
            stringValue: string;
            constructor(name: string);
        }
    }
    namespace spine.core {
        class IkConstraint implements Constraint {
            data: IkConstraintData;
            bones: Bone[];
            target: Bone;
            mix: number;
            bendDirection: number;
            level: number;
            constructor(data: IkConstraintData, skeleton: Skeleton);
            getOrder(): number;
            apply(): void;
            update(): void;
            apply1(bone: Bone, targetX: number, targetY: number, alpha: number): void;
            apply2(parent: Bone, child: Bone, targetX: number, targetY: number, bendDir: number, alpha: number): void;
        }
    }
    namespace spine.core {
        class IkConstraintData {
            name: string;
            order: number;
            bones: BoneData[];
            target: BoneData;
            bendDirection: number;
            mix: number;
            constructor(name: string);
        }
    }
    namespace spine.core {
        class PathConstraint implements Constraint {
            static NONE: number;
            static BEFORE: number;
            static AFTER: number;
            data: PathConstraintData;
            bones: Bone[];
            target: Slot;
            position: number;
            spacing: number;
            rotateMix: number;
            translateMix: number;
            spaces: number[];
            positions: number[];
            world: number[];
            curves: number[];
            lengths: number[];
            segments: number[];
            constructor(data: PathConstraintData, skeleton: Skeleton);
            apply(): void;
            update(): void;
            computeWorldPositions(path: PathAttachment, spacesCount: number, tangents: boolean, percentPosition: boolean, percentSpacing: boolean): number[];
            addBeforePosition(p: number, temp: number[], i: number, out: number[], o: number): void;
            addAfterPosition(p: number, temp: number[], i: number, out: number[], o: number): void;
            addCurvePosition(p: number, x1: number, y1: number, cx1: number, cy1: number, cx2: number, cy2: number, x2: number, y2: number, out: number[], o: number, tangents: boolean): void;
            getOrder(): number;
        }
    }
    namespace spine.core {
        class PathConstraintData {
            name: string;
            order: number;
            bones: BoneData[];
            target: SlotData;
            positionMode: PositionMode;
            spacingMode: SpacingMode;
            rotateMode: RotateMode;
            offsetRotation: number;
            position: number;
            spacing: number;
            rotateMix: number;
            translateMix: number;
            constructor(name: string);
        }
        enum PositionMode {
            Fixed = 0,
            Percent = 1,
        }
        enum SpacingMode {
            Length = 0,
            Fixed = 1,
            Percent = 2,
        }
        enum RotateMode {
            Tangent = 0,
            Chain = 1,
            ChainScale = 2,
        }
    }
    namespace spine.core {
        class Skeleton {
            data: SkeletonData;
            bones: Bone[];
            slots: Slot[];
            drawOrder: Slot[];
            ikConstraints: IkConstraint[];
            transformConstraints: TransformConstraint[];
            pathConstraints: PathConstraint[];
            _updateCache: Updatable[];
            updateCacheReset: Updatable[];
            skin: Skin;
            color: Color;
            time: number;
            flipX: boolean;
            flipY: boolean;
            x: number;
            y: number;
            constructor(data: SkeletonData);
            updateCache(): void;
            sortIkConstraint(constraint: IkConstraint): void;
            sortPathConstraint(constraint: PathConstraint): void;
            sortTransformConstraint(constraint: TransformConstraint): void;
            sortPathConstraintAttachment(skin: Skin, slotIndex: number, slotBone: Bone): void;
            sortPathConstraintAttachmentWith(attachment: Attachment, slotBone: Bone): void;
            sortBone(bone: Bone): void;
            sortReset(bones: Bone[]): void;
            updateWorldTransform(): void;
            setToSetupPose(): void;
            setBonesToSetupPose(): void;
            setSlotsToSetupPose(): void;
            getRootBone(): Bone;
            findBone(boneName: string): Bone;
            findBoneIndex(boneName: string): number;
            findSlot(slotName: string): Slot;
            findSlotIndex(slotName: string): number;
            setSkinByName(skinName: string): void;
            setSkin(newSkin: Skin): void;
            getAttachmentByName(slotName: string, attachmentName: string): Attachment;
            getAttachment(slotIndex: number, attachmentName: string): Attachment;
            setAttachment(slotName: string, attachmentName: string): void;
            findIkConstraint(constraintName: string): IkConstraint;
            findTransformConstraint(constraintName: string): TransformConstraint;
            findPathConstraint(constraintName: string): PathConstraint;
            getBounds(offset: Vector2, size: Vector2): void;
            update(delta: number): void;
        }
    }
    namespace spine.core {
        class SkeletonBounds {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
            boundingBoxes: BoundingBoxAttachment[];
            polygons: Array<ArrayLike<number>>;
            private polygonPool;
            update(skeleton: Skeleton, updateAabb: boolean): void;
            aabbCompute(): void;
            aabbContainsPoint(x: number, y: number): boolean;
            aabbIntersectsSegment(x1: number, y1: number, x2: number, y2: number): boolean;
            aabbIntersectsSkeleton(bounds: SkeletonBounds): boolean;
            containsPoint(x: number, y: number): BoundingBoxAttachment;
            containsPointPolygon(polygon: ArrayLike<number>, x: number, y: number): boolean;
            intersectsSegment(x1: number, y1: number, x2: number, y2: number): BoundingBoxAttachment;
            intersectsSegmentPolygon(polygon: ArrayLike<number>, x1: number, y1: number, x2: number, y2: number): boolean;
            getPolygon(boundingBox: BoundingBoxAttachment): ArrayLike<number>;
            getWidth(): number;
            getHeight(): number;
        }
    }
    namespace spine.core {
        class SkeletonData {
            name: string;
            bones: BoneData[];
            slots: SlotData[];
            skins: Skin[];
            defaultSkin: Skin;
            events: EventData[];
            animations: Animation[];
            ikConstraints: IkConstraintData[];
            transformConstraints: TransformConstraintData[];
            pathConstraints: PathConstraintData[];
            width: number;
            height: number;
            version: string;
            hash: string;
            fps: number;
            imagesPath: string;
            findBone(boneName: string): BoneData;
            findBoneIndex(boneName: string): number;
            findSlot(slotName: string): SlotData;
            findSlotIndex(slotName: string): number;
            findSkin(skinName: string): Skin;
            findEvent(eventDataName: string): EventData;
            findAnimation(animationName: string): Animation;
            findIkConstraint(constraintName: string): IkConstraintData;
            findTransformConstraint(constraintName: string): TransformConstraintData;
            findPathConstraint(constraintName: string): PathConstraintData;
            findPathConstraintIndex(pathConstraintName: string): number;
        }
    }
    namespace spine.core {
        class SkeletonJson {
            attachmentLoader: AttachmentLoader;
            scale: number;
            private linkedMeshes;
            constructor(attachmentLoader: AttachmentLoader);
            readSkeletonData(json: string | any): SkeletonData;
            readAttachment(map: any, skin: Skin, slotIndex: number, name: string): Attachment;
            readVertices(map: any, attachment: VertexAttachment, verticesLength: number): void;
            readAnimation(map: any, name: string, skeletonData: SkeletonData): void;
            readCurve(map: any, timeline: CurveTimeline, frameIndex: number): void;
            getValue(map: any, prop: string, defaultValue: any): any;
            static blendModeFromString(str: string): number;
            static positionModeFromString(str: string): PositionMode;
            static spacingModeFromString(str: string): SpacingMode;
            static rotateModeFromString(str: string): RotateMode;
            static transformModeFromString(str: string): TransformMode;
            static transformModeLegacy(inheritRotation: boolean, inheritScale: boolean): TransformMode;
        }
    }
    namespace spine.core {
        class Skin {
            name: string;
            attachments: Array<Map<Attachment>>;
            constructor(name: string);
            addAttachment(slotIndex: number, name: string, attachment: Attachment): void;
            getAttachment(slotIndex: number, name: string): Attachment;
            attachAll(skeleton: Skeleton, oldSkin: Skin): void;
        }
    }
    namespace spine.core {
        class Slot {
            currentMesh: any;
            currentSprite: any;
            meshes: any;
            currentMeshName: string;
            sprites: any;
            currentSpriteName: string;
            blendMode: number;
            tempRegion: TextureRegion;
            tempAttachment: Attachment;
            data: SlotData;
            bone: Bone;
            color: Color;
            attachment: Attachment;
            private attachmentTime;
            attachmentVertices: number[];
            constructor(data: SlotData, bone: Bone);
            getAttachment(): Attachment;
            setAttachment(attachment: Attachment): void;
            setAttachmentTime(time: number): void;
            getAttachmentTime(): number;
            setToSetupPose(): void;
        }
    }
    namespace spine.core {
        class SlotData {
            index: number;
            name: string;
            boneData: BoneData;
            color: Color;
            attachmentName: string;
            blendMode: number;
            constructor(index: number, name: string, boneData: BoneData);
        }
    }
    namespace spine.core {
        abstract class Texture {
            protected _image: HTMLImageElement;
            constructor(image: HTMLImageElement);
            getImage(): HTMLImageElement;
            abstract setFilters(minFilter: TextureFilter, magFilter: TextureFilter): void;
            abstract setWraps(uWrap: TextureWrap, vWrap: TextureWrap): void;
            abstract dispose(): void;
            static filterFromString(text: string): TextureFilter;
            static wrapFromString(text: string): TextureWrap;
        }
        enum TextureFilter {
            Nearest = 9728,
            Linear = 9729,
            MipMap = 9987,
            MipMapNearestNearest = 9984,
            MipMapLinearNearest = 9985,
            MipMapNearestLinear = 9986,
            MipMapLinearLinear = 9987,
        }
        enum TextureWrap {
            MirroredRepeat = 33648,
            ClampToEdge = 33071,
            Repeat = 10497,
        }
        class TextureRegion {
            texture: Texture;
            size: Rectangle;
            readonly width: number;
            readonly height: number;
            readonly u: number;
            readonly v: number;
            readonly u2: number;
            readonly v2: number;
            readonly offsetX: number;
            readonly offsetY: number;
            readonly pixiOffsetY: number;
            readonly spineOffsetY: number;
            readonly originalWidth: number;
            readonly originalHeight: number;
            readonly x: number;
            readonly y: number;
            readonly rotate: boolean;
        }
    }
    namespace spine.core {
        class TextureAtlas implements Disposable {
            pages: TextureAtlasPage[];
            regions: TextureAtlasRegion[];
            constructor(atlasText: string, textureLoader: (path: string, loaderFunction: (tex: BaseTexture) => any) => any, callback: (obj: TextureAtlas) => any);
            addTexture(name: string, texture: Texture): TextureAtlasRegion;
            addTextureHash(textures: Map<Texture>, stripExtension: boolean): void;
            addSpineAtlas(atlasText: string, textureLoader: (path: string, loaderFunction: (tex: BaseTexture) => any) => any, callback: (obj: TextureAtlas) => any): void;
            private load(atlasText, textureLoader, callback);
            findRegion(name: string): TextureAtlasRegion;
            dispose(): void;
        }
        class TextureAtlasPage {
            name: string;
            minFilter: TextureFilter;
            magFilter: TextureFilter;
            uWrap: TextureWrap;
            vWrap: TextureWrap;
            baseTexture: BaseTexture;
            width: number;
            height: number;
            setFilters(): void;
        }
        class TextureAtlasRegion extends TextureRegion {
            page: TextureAtlasPage;
            name: string;
            index: number;
        }
    }
    namespace spine.core {
        class TransformConstraint implements Constraint {
            data: TransformConstraintData;
            bones: Bone[];
            target: Bone;
            rotateMix: number;
            translateMix: number;
            scaleMix: number;
            shearMix: number;
            temp: Vector2;
            constructor(data: TransformConstraintData, skeleton: Skeleton);
            apply(): void;
            update(): void;
            getOrder(): number;
        }
    }
    namespace spine.core {
        class TransformConstraintData {
            name: string;
            order: number;
            bones: BoneData[];
            target: BoneData;
            rotateMix: number;
            translateMix: number;
            scaleMix: number;
            shearMix: number;
            offsetRotation: number;
            offsetX: number;
            offsetY: number;
            offsetScaleX: number;
            offsetScaleY: number;
            offsetShearY: number;
            constructor(name: string);
        }
    }
    namespace spine.core {
        interface Updatable {
            update(): void;
        }
    }
    namespace spine.core {
        interface Map<T> {
            [key: string]: T;
        }
        class IntSet {
            array: number[];
            add(value: number): boolean;
            contains(value: number): boolean;
            remove(value: number): void;
            clear(): void;
        }
        interface Disposable {
            dispose(): void;
        }
        class Color {
            r: number;
            g: number;
            b: number;
            a: number;
            static WHITE: Color;
            static RED: Color;
            static GREEN: Color;
            static BLUE: Color;
            static MAGENTA: Color;
            constructor(r?: number, g?: number, b?: number, a?: number);
            set(r: number, g: number, b: number, a: number): this;
            setFromColor(c: Color): this;
            setFromString(hex: string): this;
            add(r: number, g: number, b: number, a: number): this;
            clamp(): this;
        }
        class MathUtils {
            static PI: number;
            static PI2: number;
            static radiansToDegrees: number;
            static radDeg: number;
            static degreesToRadians: number;
            static degRad: number;
            static clamp(value: number, min: number, max: number): number;
            static cosDeg(degrees: number): number;
            static sinDeg(degrees: number): number;
            static signum(value: number): number;
            static toInt(x: number): number;
            static cbrt(x: number): number;
        }
        class Utils {
            static SUPPORTS_TYPED_ARRAYS: boolean;
            static arrayCopy<T>(source: ArrayLike<T>, sourceStart: number, dest: ArrayLike<T>, destStart: number, numElements: number): void;
            static setArraySize<T>(array: T[], size: number, value?: any): T[];
            static ensureArrayCapacity<T>(array: T[], size: number, value?: any): T[];
            static newArray<T>(size: number, defaultValue: T): T[];
            static newFloatArray(size: number): ArrayLike<number>;
            static toFloatArray(array: number[]): number[] | Float32Array;
        }
        class DebugUtils {
            static logBones(skeleton: Skeleton): void;
        }
        class Pool<T> {
            private items;
            private instantiator;
            constructor(instantiator: () => T);
            obtain(): T;
            free(item: T): void;
            freeAll(items: ArrayLike<T>): void;
            clear(): void;
        }
        class Vector2 {
            x: number;
            y: number;
            constructor(x?: number, y?: number);
            set(x: number, y: number): Vector2;
            length(): number;
            normalize(): this;
        }
        class TimeKeeper {
            maxDelta: number;
            framesPerSecond: number;
            delta: number;
            totalTime: number;
            private lastTime;
            private frameCount;
            private frameTime;
            update(): void;
        }
        interface ArrayLike<T> {
            length: number;
            [n: number]: T;
        }
    }
    namespace spine {
        function atlasParser(): (resource: loaders.Resource, next: () => any) => any;
        function imageLoaderAdapter(loader: any, namePrefix: any, baseUrl: any, imageOptions: any): (line: string, callback: (baseTexture: BaseTexture) => any) => void;
        function syncImageLoaderAdapter(baseUrl: any, crossOrigin: any): (line: any, callback: any) => void;
    }
    namespace spine {
        class SpineSprite extends Sprite {
            region: core.TextureRegion;
            constructor(tex: Texture);
        }
        class SpineMesh extends mesh.Mesh {
            region: core.TextureRegion;
            constructor(texture: Texture, vertices?: Float32Array, uvs?: Float32Array, indices?: Uint16Array, drawMode?: number);
        }
        class Spine extends Container {
            static globalAutoUpdate: boolean;
            tintRgb: ArrayLike<number>;
            spineData: core.SkeletonData;
            skeleton: core.Skeleton;
            stateData: core.AnimationStateData;
            state: core.AnimationState;
            slotContainers: Container[];
            constructor(spineData: core.SkeletonData);
            autoUpdate: boolean;
            tint: number;
            update(dt: number): void;
            private setSpriteRegion(attachment, sprite, region);
            private setMeshRegion(attachment, mesh, region);
            protected lastTime: number;
            autoUpdateTransform(): void;
            createSprite(slot: core.Slot, attachment: core.RegionAttachment, defName: string): SpineSprite;
            createMesh(slot: core.Slot, attachment: core.MeshAttachment): SpineMesh;
            hackTextureBySlotIndex(slotIndex: number, texture?: Texture, size?: Rectangle): boolean;
            hackTextureBySlotName: (slotName: string, texture?: Texture, size?: Rectangle) => any;
        }
    }
}
