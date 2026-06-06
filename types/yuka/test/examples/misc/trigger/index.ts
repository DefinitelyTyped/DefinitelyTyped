import * as YUKA from "yuka";
import { CustomTrigger } from "./CustomTrigger.js";

const entityMesh = { matrix: new YUKA.Matrix4() };
const triggerMesh1 = { matrix: new YUKA.Matrix4() };
const triggerMesh2 = { matrix: new YUKA.Matrix4() };

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();
const entity = new YUKA.GameEntity();
entity.boundingRadius = 0.25;
entity.setRenderComponent(entityMesh, sync);

entityManager.add(entity);

const radius = 2;
const size = new YUKA.Vector3(3, 3, 3);

const sphericalTriggerRegion = new YUKA.SphericalTriggerRegion(radius);
const rectangularTriggerRegion = new YUKA.RectangularTriggerRegion(size);

const trigger1 = new CustomTrigger(sphericalTriggerRegion);
trigger1.position.set(3, 0, 0);

const trigger2 = new CustomTrigger(rectangularTriggerRegion);
trigger2.position.set(-3, 0, 0);

entityManager.add(trigger1);
entityManager.add(trigger2);

// visualize triggers
trigger1.setRenderComponent(triggerMesh1, sync);
trigger2.setRenderComponent(triggerMesh2, sync);

const delta = time.update().getDelta();
const elapsedTime = time.getElapsed();
entity.position.x = Math.sin(elapsedTime) * 2;
entityManager.update(delta);

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
