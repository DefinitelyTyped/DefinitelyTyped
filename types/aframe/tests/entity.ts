import 'aframe';
import { describe, beforeEach, afterEach, it } from 'intern!bdd';
import * as expect from 'intern/chai!expect';

function assertStaticShape(entity: AFrame.Entity) {
	expect(entity).to.exist;

	expect(entity.components).to.exist;
	expect(entity.object3D).to.exist;
	expect(entity.object3DMap).to.exist;

	expect(entity.addState).to.be.a('function');
	expect(entity.emit).to.be.a('function');
	expect(entity.flushToDOM).to.be.a('function');
	expect(entity.getAttribute).to.be.a('function');
	expect(entity.getComputedAttribute).to.be.a('function');
	expect(entity.getObject3D).to.be.a('function');
	expect(entity.getOrCreateObject3D).to.be.a('function');
	expect(entity.is).to.be.a('function');
	expect(entity.pause).to.be.a('function');
	expect(entity.play).to.be.a('function');
	expect(entity.setAttribute).to.be.a('function');
	expect(entity.setObject3D).to.be.a('function');
	expect(entity.removeAttribute).to.be.a('function');
	expect(entity.removeObject3D).to.be.a('function');
	expect(entity.removeState).to.be.a('function');
}

describe('entity', () => {
	let entity: AFrame.Entity;

	beforeEach(() => {
		entity = <any> document.createElement('a-entity');
	});

	describe('entity is not attached to a scene', () => {
		it('has the expected shape', () => {
			assertStaticShape(entity);
			expect(entity.sceneEl).to.not.exist;
		});
	});

	describe('entity is part of a scene', () => {
		let scene: AFrame.Scene;

		beforeEach(() => {
			return new Promise(function (resolve) {
				scene = <any> document.createElement('a-scene');
				scene.addEventListener('renderstart', function () {
					resolve();
				});
				document.body.appendChild(scene);
				scene.appendChild(entity);
			});
		});

		afterEach(() => {
			document.body.innerHTML = '';
		});

		it('has the expected shape', () => {
			assertStaticShape(entity);
			expect(entity.sceneEl).to.exist;
		});
	});
});
