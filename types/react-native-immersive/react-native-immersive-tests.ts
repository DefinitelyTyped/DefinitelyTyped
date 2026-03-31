import { Immersive } from "react-native-immersive";

Immersive.on();
Immersive.off();
Immersive.setImmersive(true);

const restore = () => {
    Immersive.on();
};

Immersive.addImmersiveListener(restore);
Immersive.removeImmersiveListener(restore);
