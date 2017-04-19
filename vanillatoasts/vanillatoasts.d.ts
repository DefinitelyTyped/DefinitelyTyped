// Type definitions for vanilla-toasts v1.0.1
// Project: https://github.com/AlexKvazos/VanillaToasts
// Definitions by: Cristian Rodríguez Bernal <https://github.com/maldicion069/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface createVT {
    title: string;
    text: string;
    type?: string;
    icon?: string;
    timeout?: number;
    callback?: () => void;
}
declare namespace VanillaToasts {
    function create(options: createVT): void;
}
