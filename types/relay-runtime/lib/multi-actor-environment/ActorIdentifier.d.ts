/**
 * A unique identifier of the current actor.
 */
export type ActorIdentifier = string;

export function assertInternalActorIdentifier(actorIdentifier: ActorIdentifier): void;

export function getActorIdentifier(actorID: string): ActorIdentifier;

export function getDefaultActorIdentifier(): ActorIdentifier;
