declare let element: HTMLElement;

// $ExpectType void
select(element);

// @ts-expect-error
select();

// @ts-expect-error
select(element, element);

// @ts-expect-error
select(30);
