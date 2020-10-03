import * as sodium from 'libsodium-wrappers-sumo';

sodium.ready.then(() => {
  const key = sodium.crypto_secretstream_xchacha20poly1305_keygen();

  const res = sodium.crypto_secretstream_xchacha20poly1305_init_push(key);
  const [state_out, header] = [res.state, res.header];
  const c1 = sodium.crypto_secretstream_xchacha20poly1305_push(state_out,
    sodium.from_string('message 1'), null,
    sodium.crypto_secretstream_xchacha20poly1305_TAG_MESSAGE);
  const c2 = sodium.crypto_secretstream_xchacha20poly1305_push(state_out,
    sodium.from_string('message 2'), null,
    sodium.crypto_secretstream_xchacha20poly1305_TAG_FINAL);

  const state_in = sodium.crypto_secretstream_xchacha20poly1305_init_pull(header, key);
  const r1 = sodium.crypto_secretstream_xchacha20poly1305_pull(state_in, c1);
  const [m1, tag1] = [sodium.to_string(r1.message), r1.tag];
  const r2 = sodium.crypto_secretstream_xchacha20poly1305_pull(state_in, c2);
  const [m2, tag2] = [sodium.to_string(r2.message), r2.tag];
});
