import { Matrix4 } from "../math/Matrix4";
import { Quaternion } from "../math/Quaternion";
import { Ray } from "../math/Ray";
import { Vector3 } from "../math/Vector3";
import { EntityManager } from "./EntityManager";
import { Telegram } from "./Telegram";

export interface GameEntityConstructor {
    new(): GameEntity;
}

/**
 * Base class for all game entities.
 */
export class GameEntity {
    /**
     * The name of this game entity.
     * @default ''
     */
    name: string;

    /**
     * Whether this game entity is active or not.
     * @default true
     */
    active: boolean;

    /**
     * The child entities of this game entity.
     */
    children: GameEntity[];

    /**
     * A reference to the parent entity of this game entity.
     * Automatically set when added to a {@link GameEntity}.
     * @default null
     */
    readonly parent: GameEntity | null;

    /**
     * A list of neighbors of this game entity.
     */
    readonly neighbors: GameEntity[];

    /**
     * Game entities within this radius are considered as neighbors of this entity.
     * @default 1
     */
    neighborhoodRadius: number;

    /**
     * Whether the neighborhood of this game entity is updated or not.
     * @default false
     */
    updateNeighborhood: boolean;

    /**
     * The position of this game entity.
     */
    position: Vector3;

    /**
     * The rotation of this game entity.
     */
    rotation: Quaternion;

    /**
     * The scaling of this game entity.
     * @default Vector3(1, 1, 1)
     */
    scale: Vector3;

    /**
     * The default forward vector of this game entity.
     * @default Vector3(0,0,1)
     */
    forward: Vector3;

    /**
     * The default up vector of this game entity.
     * @default Vector3(0,1,0)
     */
    up: Vector3;

    /**
     * The bounding radius of this game entity in world units.
     * @default 0
     */
    boundingRadius: number;

    /**
     * The maximum turn rate of this game entity in radians per seconds.
     * @default π
     */
    maxTurnRate: number;

    /**
     * Whether the entity can activate a trigger or not.
     * @default true
     */
    canActivateTrigger: boolean;

    /**
     * A reference to the entity manager of this game entity.
     * Automatically set when added to an {@link EntityManager}.
     * @default null
     */
    readonly manager: EntityManager | null;

    /**
     * Constructs a new game entity.
     */
    constructor();

    /**
     * A transformation matrix representing the world space of this game entity.
     */
    get worldMatrix(): Matrix4;

    /**
     * Unique ID, primarily used in context of serialization/deserialization.
     */
    get uuid(): string;

    /**
     * Executed when this game entity is updated for the first time by its {@link EntityManager}.
     */
    start(): this;

    /**
     * Updates the internal state of this game entity. Normally called by {@link EntityManager#update}
     * in each simulation step.
     *
     * @param delta - The time delta.
     */
    update(delta: number): this;

    /**
     * Adds a game entity as a child to this game entity.
     *
     * @param entity - The game entity to add.
     */
    add(entity: GameEntity): this;

    /**
     * Removes a game entity as a child from this game entity.
     *
     * @param entity - The game entity to remove.
     */
    remove(entity: GameEntity): this;

    /**
     * Computes the current direction (forward) vector of this game entity
     * and stores the result in the given vector.
     *
     * @param result - The direction vector of this game entity.
     * @return The direction vector of this game entity.
     */
    getDirection(result: Vector3): Vector3;

    /**
     * Directly rotates the entity so it faces the given target position.
     *
     * @param target - The target position.
     */
    lookAt(target: Vector3): this;

    /**
     * Given a target position, this method rotates the entity by an amount not
     * greater than {@link GameEntity#maxTurnRate} until it directly faces the target.
     *
     * @param target - The target position.
     * @param delta - The time delta.
     * @param tolerance - A tolerance value in radians to tweak the result when a game entity is considered to face a target.
     * @return Whether the entity is faced to the target or not.
     */
    rotateTo(target: Vector3, delta: number, tolerance?: number): boolean;

    /**
     * Computes the current direction (forward) vector of this game entity
     * in world space and stores the result in the given vector.
     *
     * @param result - The direction vector of this game entity in world space.
     * @return The direction vector of this game entity in world space.
     */
    getWorldDirection(result: Vector3): Vector3;

    /**
     * Computes the current position of this game entity in world space and
     * stores the result in the given vector.
     *
     * @param result - The position of this game entity in world space.
     * @return The position of this game entity in world space.
     */
    getWorldPosition(result: Vector3): Vector3;

    /**
     * Sets a renderable component of a 3D engine with a sync callback for this game entity.
     *
     * @param renderComponent - A renderable component of a 3D engine.
     * @param callback - A callback that can be used to sync this game entity with the renderable component.
     */
    setRenderComponent<ComponentType>(renderComponent: ComponentType, callback: RenderCallback<ComponentType>): this;

    /**
     * Holds the implementation for the message handling of this game entity.
     *
     * @param telegram - The telegram with the message data.
     * @return Whether the message was processed or not.
     */
    handleMessage(telegram: Telegram): boolean;

    /**
     * Holds the implementation for the line of sight test of this game entity.
     * This method is used by {@link Vision#visible} in order to determine whether
     * this game entity blocks the given line of sight or not. Implement this method
     * when your game entity acts as an obstacle.
     *
     * @param ray - The ray that represents the line of sight.
     * @param intersectionPoint - The intersection point.
     * @return The intersection point.
     */
    lineOfSightTest(ray: Ray, intersectionPoint: Vector3): Vector3 | null;

    /**
     * Sends a message with the given data to the specified receiver.
     *
     * @param receiver - The receiver.
     * @param message - The actual message.
     * @param delay - A time value in millisecond used to delay the message dispatching.
     * @param data - An object for custom data.
     */
    sendMessage(receiver: GameEntity, message: string, delay?: number, data?: object | null): this;

    /**
     * Transforms this instance into a JSON object.
     *
     * @return The JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;

    /**
     * Restores UUIDs with references to GameEntity objects.
     *
     * @param entities - Maps game entities to UUIDs.
     */
    resolveReferences(entities: Map<string, GameEntity>): this;

    /**
     * @deprecated GameEntity.updateWorldMatrix() has been removed. World matrices are automatically updated on access.
     */
    updateWorldMatrix(): void;
}

export type RenderCallback<ComponentType> = (entity: GameEntity, renderComponent: ComponentType) => void;
