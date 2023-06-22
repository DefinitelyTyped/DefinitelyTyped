import * as React from 'react';
import ModalVideo from 'react-modal-video';

const App: React.FC = () => (
    <>
        <ModalVideo channel="custom" url="https://" />
        <ModalVideo channel="vimeo" videoId="KSPJFK" />
        <ModalVideo
            channel="youku"
            videoId="KSPJFK"
            youku={{ autoplay: 1 }}
            ratio="4:5"
            animationSpeed={200}
            isOpen={false}
            onClose={() => undefined}
            allowFullScreen={true}
            aria={{ dismissBtnMessage: 'closed', openMessage: 'Open' }}
            classNames={{
                modalVideo: 'mv',
                modalVideoBody: 'mv-mb',
                modalVideoClose: 'mv-mc',
                modalVideoCloseBtn: 'mv-btn',
                modalVideoEffect: 'mv-ve',
                modalVideoIframeWrap: 'mv-fw',
                modalVideoInner: 'mv-in',
            }}
        />
    </>
);

export default App;
