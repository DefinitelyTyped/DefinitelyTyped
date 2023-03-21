import NodeMediaServer = require('node-media-server');

// example in https://github.com/illuspas/Node-Media-Server#remux-to-hlsdash-live-stream
const config = {
    rtmp: {
      port: 1935,
      chunk_size: 60000,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60
    },
    http: {
      port: 8000,
      mediaroot: './media',
      allow_origin: '*'
    },
    trans: {
      ffmpeg: '/usr/local/bin/ffmpeg',
      tasks: [
        {
          app: 'live',
          hls: true,
          hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
          hlsKeep: true, // to prevent file delete after end the stream
          dash: true,
          dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
        }
      ]
    }
  };

const nms = new NodeMediaServer(config);

// $ExpectType void
nms.run();

// @ts-expect-error
nms.on();

// @ts-expect-error
nms.on('test');

// $ExpectType void
nms.on('test', () => {});

// $ExpectType Map<string, unknown>
nms.getSession('1');

// $ExpectType void
nms.stop();

const dashTrueNMS = new NodeMediaServer({
    trans: {
        ffmpeg: '',
        tasks: [
            {
                app: 'test',
                dash: true
            }
        ]
    }
});

const dashStringNMS = new NodeMediaServer({
    trans: {
        ffmpeg: '',
        tasks: [
            {
                app: 'test',
                // @ts-expect-error
                dash: 'somestring'
            }
        ]
    }
});
