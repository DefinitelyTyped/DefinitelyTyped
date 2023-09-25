import { EntityManager, GameEntity, Trigger } from "yuka";

const entityManager = new EntityManager();

const entity = new GameEntity();

entityManager.add(entity);

entityManager.remove(entity);

entityManager.clear();
const foundEntity: GameEntity | null = entityManager.getEntityByName("dummy");
entityManager.update(12);
entityManager.updateEntity(entity, 12);
entityManager.updateNeighborhood(entity);

const trigger = new Trigger();
entityManager.processTrigger(trigger);

if (foundEntity) {
    entityManager.sendMessage(entity, foundEntity, "hello there", 0, { arbitrary: "data" });
}
entityManager.fromJSON(entityManager.toJSON());

class DummyEntity extends GameEntity {
}
entityManager.registerType("Dummy", DummyEntity);
