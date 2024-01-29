import DetectOS from "detectos.js";

const Detect: DetectOS = new DetectOS();
const os: string | null = Detect.OS;
const browser: string | null = Detect.OS;
const version: string | null = Detect.version;
