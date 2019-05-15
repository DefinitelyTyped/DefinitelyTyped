import * as stdMocks from 'std-mocks';

stdMocks.use();
stdMocks.use({print: false});
stdMocks.use({stdout: false});
stdMocks.use({stderr: false});

stdMocks.restore();
stdMocks.restore({stdout: false});
stdMocks.restore({stderr: false});

stdMocks.flush();
stdMocks.flush({stdout: false}).stderr;
stdMocks.flush({stdout: false}).stdout; // $ExpectError
