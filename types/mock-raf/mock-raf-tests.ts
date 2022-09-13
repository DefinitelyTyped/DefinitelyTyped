import createMockRaf = require('mock-raf');

const mockRaf = createMockRaf();
const id = mockRaf.raf(() => {
  console.log('RAF!!!');
});
mockRaf.step({ count: 10 });
mockRaf.cancel(id);
console.log(mockRaf.now());
