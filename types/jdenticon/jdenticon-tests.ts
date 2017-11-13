import { jdenticon } from "jdenticon";

function testJdenticon() {
  if (typeof jdenticon.version !== 'string') {
    throw '.version should be of string type.';
  }

  jdenticon.update('#jdenticon', 'd6d7705392bc7af633328bea8c4c6904', 8);
}

testJdenticon();
