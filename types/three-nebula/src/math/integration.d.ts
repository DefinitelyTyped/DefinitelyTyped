import Particle from "../core/Particle";
import { INTEGRATION_TYPES } from "./constants";

/**
 * Performs euler integration on the particle.
 */
export function eulerIntegration(particle: Particle, time: number, damping: number): void;

/**
 * Performs the chosen integration on the particle.
 * Defaults to euler integration.
 */
export function integrate(particle: Particle, time: number, damping: number, type?: INTEGRATION_TYPES): void;
