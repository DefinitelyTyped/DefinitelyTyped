namespace Components {
	export class TestComponent extends polymer.Base {

		public field: string = 'foo';
		
		constructor() {
			super();
			this.is = 'test-test';
		}

        public ready(): void {
			console.log('ready');
			this.async(() => {
				console.log('delayed');	
			}, 500);
        }
	}

	polymer.createElement(TestComponent);
}
