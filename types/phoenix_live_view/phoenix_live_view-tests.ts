import { Socket } from "phoenix";
import { LiveSocket, SocketOptions, ViewHook, UploadEntry } from "phoenix_live_view";

function test_socket() {
  // Hooks
  const testHook = {
    mounted() {
      const hook = this as unknown as ViewHook;
      console.log('TestHook mounted');
      hook.pushEvent('hook-mounted', { name: 'testHook' },
        (reply, ref) => {
          console.log(`Got hook-mounted reply ${JSON.stringify(reply)} ref ${ref}`);
        });
    }
  };

  // Uploaders
  function testUploader(entries: UploadEntry[], _onViewError: any) {
    entries.forEach(entry => {
      console.log(`file: ${entry.file.name}`);
      console.log(`meta: ${JSON.stringify(entry.meta)}`);
    });
  }

  const MyHooks = {
    test: testHook
  };

  const MyUploaders = {
    test: testUploader
  };

  const opts: SocketOptions = {
    params: {
      _csrf_token: '1234'
    },
    hooks: MyHooks,
    uploaders: MyUploaders
  };

  const liveSocket = new LiveSocket("/live", Socket, opts);
  liveSocket.enableDebug();
  liveSocket.enableProfiling();
  liveSocket.connect();
}
