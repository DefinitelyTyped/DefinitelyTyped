/// <reference types="./index"/>

describe('test suite', () => {
  it('tests toEqualJSX method', () => {
    const component = (
      <div>hello world</div>
    );
    expect(component).toEqualJSX(<div>hello world</div>);
  });

  it('tests toIncludeJSX method', () => {
    const component = (
      <div><span>hello world</span></div>
    );
    expect(component).toIncludeJSX(<span>hello world</span>);
  });
});
