import { easings, motion } from "@carbon/motion";

const easingNames = Object.keys(easings);

const firstEasing = easingNames[0];
const firstMode = Object.keys(firstEasing)[0];

motion(firstEasing, firstMode);
