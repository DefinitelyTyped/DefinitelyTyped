import * as React from 'react';
import SpriteSheet from 'react-responsive-spritesheet';

function SpriteSheetTest(): React.ReactElement {
    const [instance, setInstance] = React.useState<SpriteSheet>();

    React.useEffect(() => {
        if (instance == null) {
            return;
        }

        instance.play();
        instance.pause();
        instance.goToAndPlay(3);
        instance.goToAndPause(5);
        instance.setStartAt(1);
        instance.setEndAt(4);
        instance.setFps(9);
        instance.setDirection('rewind');

        instance.getInfo('frame');
        instance.getInfo('fps');
        instance.getInfo('steps');
        instance.getInfo('width');
        instance.getInfo('height');
        instance.getInfo('scale');
        instance.getInfo('direction');
        instance.getInfo('isPlaying');
        instance.getInfo('isPaused');
        instance.getInfo('completeLoopCicles');
    }, [instance]);

    return (
        <SpriteSheet
            className={'div-1'}
            style={{ padding: '4rem' }}
            image={'/assets/graphics/test.png'}
            widthFrame={64}
            heightFrame={64}
            steps={4}
            fps={1}
            direction="forward"
            timeout={2}
            autoplay={true}
            loop={false}
            isResponsive={false}
            startAt={1}
            endAt={5}
            background={'/assets/graphics/background.png'}
            backgroundSize={'contain'}
            backgroundRepeat={'repeat-x'}
            backgroundPosition={'center'}
            getInstance={spritesheet => {
                setInstance(spritesheet);
            }}
            onClick={spritesheet => console.log('Clicked')}
            onDoubleClick={spritesheet => console.log('Double Clicked')}
            onMouseMove={spritesheet => console.log('Moved Mouse')}
            onMouseEnter={spritesheet => console.log('Mouse Enter')}
            onMouseLeave={spritesheet => console.log('Mouse Leave')}
            onMouseOver={spritesheet => console.log('Mouse Over')}
            onMouseOut={spritesheet => console.log('Mouse Out')}
            onMouseDown={() => console.log('Mouse Down')}
            onMouseUp={() => console.log('Mouse Up')}
            onInit={() => console.log('Initialized')}
            onResize={spritesheet => spritesheet.getInfo('width')}
            onPlay={spritesheet => spritesheet.pause()}
            onPause={spritesheet => spritesheet.getInfo('isPlaying')}
            onLoopComplete={() => console.log('Loop Complete')}
            onEachFrame={spritesheet => spritesheet.getInfo('frame')}
            onEnterFrame={[
                {
                    frame: 2,
                    callback: () => {
                        console.log('Entered Frame 2');
                    },
                },
                {
                    frame: 4,
                    callback: () => console.log('Entered Frame 4'),
                },
            ]}
        />
    );
}
