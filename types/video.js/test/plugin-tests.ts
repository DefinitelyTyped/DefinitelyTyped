import videojs from 'video.js';

declare module 'video.js' {
    interface VideoJsPlayer {
        somePlugin(options?: SomePluginOptions): SomePluginType;
    }

    interface VideoJsPlayerPluginOptions {
        somePlugin: SomePluginOptions;
    }

    interface SomePluginOptions {
        test: boolean;
    }

    class SomePluginType {}
}

videojs('example_video_1').somePlugin();

videojs('example_video_2', {
    autoplay: true,
    plugins: {
        somePlugin: {
            test: true,
        },
        someOtherPluginNotTyped: {},
    },
});

videojs('example_video_3', {
    plugins: {},
});
