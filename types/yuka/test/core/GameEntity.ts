import { GameEntity, Ray, Telegram, Vector3 } from "yuka";

const gameEntity = new GameEntity();

gameEntity.name = "dummy";
gameEntity.active = false;
gameEntity.active = true;
gameEntity.children; // $ExpectType GameEntity[]
gameEntity.parent; // $ExpectType GameEntity | null

gameEntity.neighbors.indexOf(new GameEntity());
gameEntity.neighborhoodRadius = 2000;
gameEntity.updateNeighborhood = true;
gameEntity.position; // $ExpectType Vector3
gameEntity.rotation; // $ExpectType Quaternion
gameEntity.scale; // $ExpectType Vector3
gameEntity.forward; // $ExpectType Vector3
gameEntity.up; // $ExpectType Vector3
gameEntity.boundingRadius = 2000;
gameEntity.maxTurnRate = 2000;
gameEntity.canActivateTrigger = true;
gameEntity.manager; // $ExpectType EntityManager | null
gameEntity.worldMatrix; // $ExpectType Matrix4
gameEntity.uuid; // $ExpectType string

gameEntity.start(); // $ExpectType GameEntity
gameEntity.update(12); // $ExpectType GameEntity
gameEntity.add(new GameEntity()); // $ExpectType GameEntity
gameEntity.remove(new GameEntity()); // $ExpectType GameEntity
gameEntity.getDirection(new Vector3()); // $ExpectType Vector3
gameEntity.lookAt(new Vector3()); // $ExpectType GameEntity
gameEntity.rotateTo(new Vector3(), 0); // $ExpectType boolean
gameEntity.rotateTo(new Vector3(), 0, 0); // $ExpectType boolean
gameEntity.getWorldDirection(new Vector3()); // $ExpectType Vector3
gameEntity.getWorldPosition(new Vector3()); // $ExpectType Vector3
gameEntity.setRenderComponent({}, (entity: GameEntity, renderComponent: object) => {}); // $ExpectType GameEntity
gameEntity.handleMessage(new Telegram(gameEntity, gameEntity, "", 0, {})); // $ExpectType boolean
gameEntity.lineOfSightTest(new Ray(new Vector3(), new Vector3()), new Vector3()); // $ExpectType Vector3 | null
gameEntity.sendMessage(gameEntity, ""); // $ExpectType GameEntity
gameEntity.sendMessage(gameEntity, "", 10); // $ExpectType GameEntity
gameEntity.sendMessage(gameEntity, "", 10, null); // $ExpectType GameEntity
gameEntity.sendMessage(gameEntity, "", 10, { custom: "data" }); // $ExpectType GameEntity
gameEntity.fromJSON(gameEntity.toJSON()); // $ExpectType GameEntity
gameEntity.resolveReferences(new Map<string, GameEntity>()); // $ExpectType GameEntity

gameEntity.updateWorldMatrix();
