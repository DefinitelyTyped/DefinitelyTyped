import { FC, useRef } from 'react';
import { Button } from 'react-native';
import Confetti from 'react-native-confetti';

const ConfettiTest: FC = () => {
    const confetti = useRef<Confetti>(null);

    const start = () =>
        confetti.current!.startConfetti(() => {
            /* Done */
        });
    const stop = () => confetti.current!.stopConfetti();

    return (
        <>
            <Button title="Start" onPress={start}></Button>
            <Button title="Stop" onPress={stop}></Button>

            <Confetti
                ref={confetti}
                confettiCount={100}
                timeout={5000}
                untilStopped={true}
                duration={5000}
                colors={['rgb(242.2, 102, 68.8)', 'rgb(255, 198.9, 91.8)']}
                size={1.5}
                bsize={1.5}
            />
        </>
    );
};

export default ConfettiTest;
