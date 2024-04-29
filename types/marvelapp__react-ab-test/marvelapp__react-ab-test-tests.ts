import { emitter, experimentDebugger, mixpanelHelper, segmentHelper } from "marvelapp__react-ab-test";

emitter.emitWin("Experiment 1"); // $ExpectType void
emitter.addActiveVariantListener("Experiment 1", () => "test"); // $ExpectType Subscription
emitter.addPlayListener("Experiment 1", () => "test"); // $ExpectType Subscription
emitter.addWinListener("Experiment 1", () => "test"); // $ExpectType Subscription
emitter.defineVariants("Experiment 1", ["Variant A", "Variant B"]); // $ExpectType void
emitter.setActiveVariant("Experiment 1", "Variant A"); // $ExpectType void
emitter.getActiveVariant("Experiment 1"); // $ExpectType string
emitter.calculateActiveVariant("Experiment 1"); // $ExpectType string
emitter.getSortedVariants("Experiment 1"); // $ExpectType string[]
emitter.setCustomDistributionAlgorithm(() => true); // $ExpectType void

const sub = emitter.addActiveVariantListener("Experiment 1", () => "test2"); // $ExpectType Subscription
sub.remove(); // $ExpectType void
sub.eventType; //  $ExpectType string
sub.listener; //  $ExpectType ListenerCallback

experimentDebugger.enable(); // $ExpectType void
experimentDebugger.disable(); // $ExpectType void
experimentDebugger.setDebuggerAvailable(true); // $ExpectType void

mixpanelHelper.enable(); // $ExpectType void
mixpanelHelper.disable(); // $ExpectType void

segmentHelper.enable(); // $ExpectType void
segmentHelper.disable(); // $ExpectType void
