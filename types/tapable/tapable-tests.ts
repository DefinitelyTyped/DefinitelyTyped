import { HookFactory } from "tapable";
const hf: HookFactory<boolean> = (key) => !!key;
