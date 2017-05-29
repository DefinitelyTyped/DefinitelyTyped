angular.module("test", [
	"ui.bootstrap",
	"ui.router",
	"ui.router.default"
])
	.config(function($stateProvider: angular.ui.IStateProvider) {
		$stateProvider
			.state('contacts', {
				// no modal
				resolve: {
					a: function() {
						return "a";
					},
					b: function() {
						return ["a", "b"];
					}
				}
			})
			.state('contacts.contact', {
				// boolean modal
				modal: true
			})
			.state('contacts.contact.edit', {
				// string[] modal
				modal: ["a", "b"]
			})
		;
	});
