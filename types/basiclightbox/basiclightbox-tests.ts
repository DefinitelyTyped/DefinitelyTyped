import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);

const instance2 = basicLightbox.create(`
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`, {
	closable: false
});

const instance3 = basicLightbox.create(
	document.querySelector('#template')!
);

const visible = basicLightbox.visible();

instance.show(() => console.log('lightbox now visible'));

instance.close(() => console.log('lightbox not visible anymore'));

const visible2 = instance.visible();

const elem = instance.element();
