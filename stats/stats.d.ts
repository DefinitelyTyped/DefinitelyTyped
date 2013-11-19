/**
 * @author mrdoob / http://mrdoob.com/
 * stats.js - http://github.com/mrdoob/stats.js
 */
declare class Stats {

	REVISION: number;

	domElement: HTMLDivElement;
	
	setMode(value: number): void;
	
	begin(): void;
	
	end(): number;
	
	update(): void;
}