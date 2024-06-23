import "cypress";
import "cypress-cdp";

// #region CDP
// $ExpectType Chainable<void>
cy.CDP("Console.enable", {});

// $ExpectType Chainable<EnableResponse>
cy.CDP("Debugger.enable", {});

// @ts-expect-error
cy.CDP("Debugger.enable");

// @ts-expect-error
cy.CDP("Non-existent.command", {});
// #endregion

// #region getCDPNodeId
// $ExpectType Chainable<number>
cy.getCDPNodeId("body");

// @ts-expect-error
cy.getCDPNodeId(1);
// #endregion

// #region hasEventListeners
// $ExpectType Chainable<GetEventListenersResponse>
cy.hasEventListeners("button#one");

// @ts-expect-error
cy.hasEventListeners(1);
// #endregion
