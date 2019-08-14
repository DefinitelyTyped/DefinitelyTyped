declare namespace pc {

    /**
     * @component
     * @name pc.CollisionComponent
     * @description Create a new CollisionComponent
     * @class A collision volume. use this in conjunction with a {@link pc.RigidBodyComponent} to make a collision volume that can be simulated using the physics engine.
     * <p>If the {@link pc.Entity} does not have a {@link pc.RigidBodyComponent} then this collision volume will act as a trigger volume. When an entity with a dynamic
     * or kinematic body enters or leaves an entity with a trigger volume, both entities will receive trigger events.
     * <p>The following table shows all the events that can be fired between two Entities:
     * <table class="table table-striped table-condensed">
     *  <tr><td></td><td><strong>Rigid Body (Static)</strong></td><td><strong>Rigid Body (Dynamic or Kinematic)</strong></td><td><strong>Trigger Volume</strong></td></tr>
     *  <tr>
     *       <td><strong>Rigid Body (Static)</strong></td>
     *       <td>-</td>
     *       <td><ul class="list-group">
     *           <li class="list-group-item">contact</li>
     *           <li class="list-group-item">collisionstart</li>
     *           <li class="list-group-item">collisionend</li>
     *       </td>
     *       <td>-</td>
     *   </tr>
     *  <tr>
     *       <td><strong>Rigid Body (Dynamic or Kinematic)</strong></td>
     *       <td><ul class="list-group">
     *           <li class="list-group-item">contact</li>
     *           <li class="list-group-item">collisionstart</li>
     *           <li class="list-group-item">collisionend</li>
     *       </td>
     *       <td><ul class="list-group">
     *           <li class="list-group-item">contact</li>
     *           <li class="list-group-item">collisionstart</li>
     *           <li class="list-group-item">collisionend</li>
     *       </td>
     *       <td><ul class="list-group">
     *           <li class="list-group-item">triggerenter</li>
     *           <li class="list-group-item">triggerleave</li>
     *       </td>
     *   </tr>
     *  <tr>
     *       <td><strong>Trigger Volume</strong></td>
     *       <td>-</td>
     *       <td><ul class="list-group">
     *           <li class="list-group-item">triggerenter</li>
     *           <li class="list-group-item">triggerleave</li>
     *       </td>
     *       <td>-</td>
     *   </tr>
     * </table>
     * </p>
     * @param {pc.CollisionComponentSystem} system The ComponentSystem that created this Component
     * @param {pc.Entity} entity The Entity that this Component is attached to.
     * @property {String} type The type of the collision volume. Defaults to 'box'. Can be one of the following:
     * <ul>
     * <li><strong>box</strong>: A box-shaped collision volume.</li>
     * <li><strong>sphere</strong>: A sphere-shaped collision volume.</li>
     * <li><strong>capsule</strong>: A capsule-shaped collision volume.</li>
     * <li><strong>cylinder</strong>: A cylinder-shaped collision volume.</li>
     * <li><strong>mesh</strong>: A collision volume that uses a model asset as its shape.</li>
     * </ul>
     * @property {pc.Vec3} halfExtents The half-extents of the box-shaped collision volume in the x, y and z axes. Defaults to [0.5, 0.5, 0.5]
     * @property {Number} radius The radius of the sphere, capsule or cylinder-shaped collision volumes. Defaults to 0.5
     * @property {Number} axis The local space axis with which the capsule or cylinder-shaped collision volume's length is aligned. 0 for X, 1 for Y and 2 for Z. Defaults to 1 (Y-axis).
     * @property {Number} height The total height of the capsule or cylinder-shaped collision volume from tip to tip. Defaults to 2.
     * @property {pc.Asset} asset The asset for the model of the mesh collision volume - can also be an asset id.
     * @property {pc.Model} model The model that is added to the scene graph for the mesh collision volume.
     * @extends pc.Component
     */
    class CollisionComponent extends pc.Component {
        constructor(system: pc.CollisionComponentSystem, entity: pc.Entity)

        type: string;
        halfExtents: pc.Vec3;
        radius: number;
        axis: number;
        height: number;
        asset: pc.Asset;
        model: pc.Model;
    }
}
