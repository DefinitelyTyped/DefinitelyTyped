/// <reference types="cypress" />

export {};

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            /**
             * Execute the WP CLI.
             *
             * @param command Command.
             *
             * @example cy.wp('cli version')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            wp(command: string): Chainable<Exec>;

            /**
             * Seed the database with the given seeder.
             *
             * @param seeder Seed name.
             *
             * @example cy.seed('MySeeder')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            seed(seeder: string): Chainable<Exec>;

            /**
             * Run the seeder clean method.
             *
             * @param seeder Seed name.
             *
             * @example cy.seedClean('MySeeder')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            seedClean(seeder: string): Chainable<Exec>;

            /**
             * Run the seeder clean method then seed the database.
             *
             * @param seeder Seed name.
             *
             * @example cy.cleanThenSeed('MySeeder')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            cleanThenSeed(seeder: string): Chainable<Exec>;

            /**
             * Perform full teardown.
             *
             * @param [version=false] WordPress version.
             *
             * @example cy.resetWP('5.9')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            resetWP(version?: string | false): Chainable<Exec>;

            /**
             * Install a theme.
             *
             * @param name Theme name.
             *
             * @example cy.installTheme('my-theme')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            installTheme(name: string): Chainable<Exec>;

            /**
             * Activate a theme.
             *
             * @param name Theme name.
             *
             * @example cy.activateTheme('my-theme')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            activateTheme(name: string): Chainable<Exec>;

            /**
             * Install a plugin.
             *
             * @param name Plugin name.
             *
             * @example cy.installPlugin('my-plugin')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            installPlugin(name: string): Chainable<Exec>;

            /**
             * Activate a plugin.
             *
             * @param name Plugin name.
             *
             * @example cy.activatePlugin('my-plugin')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            activatePlugin(name: string): Chainable<Exec>;

            /**
             * De-activate a plugin.
             *
             * @param name Plugin name.
             *
             * @example cy.deactivatePlugin('my-plugin')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            deactivatePlugin(name: string): Chainable<Exec>;

            /**
             * Visit the WordPress admin panel.
             *
             * @param [options={}] Visit options.
             *
             * @example cy.visitAdmin()
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            visitAdmin(options?: Partial<VisitOptions>): Chainable<AUTWindow>;

            /**
             * Visit a post's edit page.
             *
             * @param id Post ID.
             * @param [options={}] Visit options.
             *
             * @example cy.editPost(1)
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            editPost(id: number, options?: Partial<VisitOptions>): Chainable<AUTWindow>;

            /**
             * If on a post's edit page, save the post.
             *
             * @example cy.saveCurrentPost()
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            saveCurrentPost(): Chainable<AUTWindow>;

            /**
             * Log in as a different user.
             *
             * @param [user='admin']  Username.
             * @param [password=null] Password.
             *
             * @example cy.switchUser('myUser', 'myPassword')
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            switchUser(user?: string, password?: string | null): Chainable<Exec>;

            /**
             * Logout from the current user.
             *
             * @example cy.logout()
             *
             * @see https://github.com/bigbite/wp-cypress/wiki/Cypress-Commands
             */
            logout(): Chainable<Exec>;
        }
    }
}
