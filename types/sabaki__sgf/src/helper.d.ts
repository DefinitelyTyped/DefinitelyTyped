import { Types } from "../index";

export function escapeString(input: string): string;

export function unescapeString(input: string): string;

export function parseVertex(input: string): Types.Vertex;

export function stringifyVertex(input: Types.Vertex): string;

export function parseCompressedVertices(input: string): Types.Vertex[];

export function parseDates(input: string): Types.Dates[] | null;

export function stringifyDates(input: readonly Types.Dates[]): string;
