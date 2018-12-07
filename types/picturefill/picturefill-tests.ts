function test_elements() {
  // no args
  picturefill();

  // Element[]
  picturefill({elements: [ document.getElementById('#id') ]});

  // NodeList
  picturefill({elements: document.querySelectorAll('img')});
}

function test_optional() {
  picturefill({
    elements: [],
    reevaluate: true
  });
}
