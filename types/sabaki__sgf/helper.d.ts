import { Dates, Vertex } from "./types";

export function escapeString(input: string): string;

export function unescapeString(input: string): string;

export function parseVertex(input: string): Vertex;

export function stringifyVertex(input: Vertex): string;

export function parseCompressedVertices(input: string): Vertex[];

export function parseDates(input: string): Dates[] | null;

export function stringifyDates(input: Dates[]): string;
