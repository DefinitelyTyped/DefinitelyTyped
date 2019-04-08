// Type definitions for mina Snap-SVG 0.4
// Project: https://github.com/adobe-webplatform/Snap.svg, http://onlyvc.us/mina
// Definitions by: Lars Klein <https://github.com/lhk>, Mattanja Kern <https://github.com/mattanja>, Andrey Kurdyumov <https://github.com/kant2002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function mina(a: number, A: number, b: number, B: number, get: () => number, set: (time: number) => void, easing?: (num: number) => number): mina.AnimationDescriptor;
declare namespace mina {
    interface MinaAnimation {
        id: string;
        duration(): number;
        easing(): number;
        speed(): number;
        status(): number;
        stop(): void;
    }

    interface AnimationDescriptor {
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

    function backin(n: number): number;
    function backout(n: number): number;
    function bounce(n: number): number;
    function easein(n: number): number;
    function easeinout(n: number): number;
    function easeout(n: number): number;
    function elastic(n: number): number;
    function getById(id: string): AnimationDescriptor;
    function linear(n: number): number;
    function time(): number;
}
