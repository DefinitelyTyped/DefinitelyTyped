import { FluentRevealEffect } from "fluent-reveal-effect";

// tests all values for the options object
FluentRevealEffect.applyEffect("#element", {
    clickEffect: true,
    lightColor: "rgba(255,255,255,0.6)",
    gradientSize: 80,
    isContainer: true,
    children: {
        borderSelector: ".btn-border",
        elementSelector: ".btn",
        lightColor: "rgba(255,255,255,0.3)",
        gradientSize: 150,
    },
});

// tests no values for the options object
FluentRevealEffect.applyEffect(".element2", {});
