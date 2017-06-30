// Type definitions for mina Snap-SVG 0.4.1
// Project: https://github.com/adobe-webplatform/Snap.svg
// Definitions by: Lars Klein <https://github.com/lhk>, Mattanja Kern <https://github.com/mattanja>, Andrey Kurdyumov <https://github.com/kant2002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function mina(a:number, A:number, b:number, B:number, get:Function, set:Function, easing?:(num:number)=>number):mina.AnimationDescriptor;
declare namespace mina {
    export interface MinaAnimation {
        id: string;
        duration: Function;
        easing: Function;
        speed: Function;
        status: Function;
        stop: Function;
    }

    export interface AnimationDescriptor {
        id: string;
        start: number;
        end: number;
        b: number;
        s: number;
        dur: number;
        spd: number;
        get(): number;
        set(slave: number): number;
        easing(input: number): number;
        status(): number;
        status(newStatus: number): void;
        speed(): number;
        speed(newSpeed: number): void;
        duration(): number;
        duration(newDuration: number): void;
        stop(): void;
        pause(): void;
        resume(): void;
        update(): void;
    }

    export function backin(n:number):number;
    export function backout(n:number):number;
    export function bounce(n:number):number;
    export function easein(n:number):number;
    export function easeinout(n:number):number;
    export function easeout(n:number):number;
    export function elastic(n:number):number;
    export function getById(id:string):AnimationDescriptor;
    export function linear(n:number):number;
    export function time():number;
}
