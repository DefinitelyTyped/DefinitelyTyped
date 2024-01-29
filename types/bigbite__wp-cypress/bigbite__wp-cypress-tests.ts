import "@bigbite/wp-cypress";

// $ExpectType Chainable<Exec>
cy.wp("cli version");

// @ts-expect-error
cy.wp();

// @ts-expect-error
cy.wp(null);

// @ts-expect-error
cy.wp(1);

// $ExpectType Chainable<Exec>
cy.seed("MySeeder");

// @ts-expect-error
cy.seed();

// @ts-expect-error
cy.seed(null);

// @ts-expect-error
cy.seed(1);

// $ExpectType Chainable<Exec>
cy.seedClean("MySeeder");

// @ts-expect-error
cy.seedClean();

// @ts-expect-error
cy.seedClean(null);

// @ts-expect-error
cy.seedClean(1);

// $ExpectType Chainable<Exec>
cy.cleanThenSeed("MySeeder");

// @ts-expect-error
cy.cleanThenSeed();

// @ts-expect-error
cy.cleanThenSeed(null);

// @ts-expect-error
cy.cleanThenSeed(1);

// $ExpectType Chainable<Exec>
cy.resetWP("5.9");

// $ExpectType Chainable<Exec>
cy.resetWP(false);

// @ts-expect-error
cy.resetWP(null);

// @ts-expect-error
cy.resetWP(1);

// $ExpectType Chainable<Exec>
cy.installTheme("my-theme");

// @ts-expect-error
cy.installTheme();

// @ts-expect-error
cy.installTheme(null);

// @ts-expect-error
cy.installTheme(1);

// $ExpectType Chainable<Exec>
cy.installPlugin("my-plugin");

// @ts-expect-error
cy.installPlugin();

// @ts-expect-error
cy.installPlugin(null);

// @ts-expect-error
cy.installPlugin(1);

// $ExpectType Chainable<Exec>
cy.activatePlugin("my-plugin");

// @ts-expect-error
cy.activatePlugin();

// @ts-expect-error
cy.activatePlugin(null);

// @ts-expect-error
cy.activatePlugin(1);

// $ExpectType Chainable<Exec>
cy.deactivatePlugin("my-plugin");

// @ts-expect-error
cy.deactivatePlugin();

// @ts-expect-error
cy.deactivatePlugin(null);

// @ts-expect-error
cy.deactivatePlugin(1);

// $ExpectType Chainable<AUTWindow>
cy.visitAdmin();

// Handle `options` param
// $ExpectType Chainable<AUTWindow>
cy.visitAdmin({
    method: "GET",
});

// @ts-expect-error
cy.visitAdmin("https://example.com");

// @ts-expect-error
cy.visitAdmin(1);

// @ts-expect-error
cy.visitAdmin(null);

// $ExpectType Chainable<AUTWindow>
cy.editPost(1);

// Handle `options` param
// $ExpectType Chainable<AUTWindow>
cy.editPost(1, {
    method: "GET",
});

// @ts-expect-error
cy.editPost("1");

// @ts-expect-error
cy.editPost(1, "https://example.com");

// @ts-expect-error
cy.editPost(1, 1);

// @ts-expect-error
cy.editPost(1, null);

// $ExpectType Chainable<AUTWindow>
cy.saveCurrentPost();

// @ts-expect-error
cy.saveCurrentPost("my-post");

// @ts-expect-error
cy.saveCurrentPost(1);

// @ts-expect-error
cy.saveCurrentPost(null);

// $ExpectType Chainable<Exec>
cy.switchUser("myUser", "myPassword");

// $ExpectType Chainable<Exec>
cy.switchUser("myUser", null);

// $ExpectType Chainable<Exec>
cy.switchUser("myUser");

// $ExpectType Chainable<Exec>
cy.switchUser();

// @ts-expect-error
cy.switchUser(1, 1);

// @ts-expect-error
cy.switchUser(1);

// @ts-expect-error
cy.switchUser("myUser", 1);

// @ts-expect-error
cy.switchUser(null, null);

// @ts-expect-error
cy.switchUser(null);

// $ExpectType Chainable<Exec>
cy.logout();

// @ts-expect-error
cy.logout("myUser");

// @ts-expect-error
cy.logout(1);

// @ts-expect-error
cy.logout(null);
