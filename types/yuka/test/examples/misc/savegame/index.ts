import * as YUKA from "yuka";
import { CustomEntity } from "./CustomEntity";
import { CustomVehicle } from "./CustomVehicle";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();
const targetMesh = { matrix: new YUKA.Matrix4() };
const vehicleMesh = { matrix: new YUKA.Matrix4() };

// register custom types so the entity manager is able to instantiate
// custom objects from JSON
entityManager.registerType("CustomEntity", CustomEntity);
entityManager.registerType("CustomVehicle", CustomVehicle);
if (hasSavegame()) {
    // load an existing savegame
    onLoad();
} else {
    const target = new CustomEntity();
    target.setRenderComponent(targetMesh, sync);
    target.generatePosition();

    const vehicle = new CustomVehicle();
    vehicle.target = target;
    vehicle.setRenderComponent(vehicleMesh, sync);

    const seekBehavior = new YUKA.SeekBehavior(target.position);
    vehicle.steering.add(seekBehavior);

    entityManager.add(target);
    entityManager.add(vehicle);
}

time.update();
const delta = time.getDelta();
entityManager.update(delta);

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}

function onSave() {
    const json = entityManager.toJSON();
    const jsonString = JSON.stringify(json);

    localStorage.setItem("yuka_savegame", jsonString);
}

function onLoad() {
    const jsonString = localStorage.getItem("yuka_savegame");

    if (jsonString !== null) {
        try {
            const json = JSON.parse(jsonString);
            entityManager.fromJSON(json);

            // restore render components (depends on 3D engine)
            const target = entityManager.getEntityByName("target");
            if (target instanceof YUKA.GameEntity) {
                target.setRenderComponent(targetMesh, sync);
            }
            const vehicle = entityManager.getEntityByName("vehicle");
            if (vehicle instanceof YUKA.GameEntity) {
                vehicle.setRenderComponent(vehicleMesh, sync);
            }
        } catch (e) {
            console.error(e);
            onClear();
            alert("Invalid Savegame found. Savegame was deleted.");
            window.location.reload();
        }
    }
}

function onClear() {
    localStorage.removeItem("yuka_savegame");
}

function hasSavegame() {
    return localStorage.getItem("yuka_savegame") !== null;
}
