/// <reference types="cypress" />

import type Protocol from "devtools-protocol/types/protocol";
import type ProtocolMapping from "devtools-protocol/types/protocol-mapping";

declare global {
    // Augment the Cypress namespace to include type definitions for cypress-cdp.
    namespace Cypress {
        namespace CDP {
            // #region CDP
            type RdpCommands = ProtocolMapping.Commands;
            type RdpCommandNames = keyof RdpCommands;

            type CdpCommandFnParams<RdpCommandName extends RdpCommandNames> =
                RdpCommands[RdpCommandName]["paramsType"][number] extends never ? Record<string, never>
                    : RdpCommands[RdpCommandName]["paramsType"][number];
            type CdpCommandFnReturnType<RdpCommandName extends RdpCommandNames> =
                RdpCommands[RdpCommandName]["returnType"];
            interface CdpCommandFnOptions {
                log: LogConfig;
            }
            type CdpCommandFn = <RdpCommandName extends RdpCommandNames>(
                rdpCommand: RdpCommandName,
                params: CdpCommandFnParams<RdpCommandName>,
                options?: CdpCommandFnOptions,
            ) => Chainable<CdpCommandFnReturnType<RdpCommandName>>;
            // #endregion

            // #region getCDPNodeId
            type getCDPNodeIdFn = (selector: string) => Chainable<number>;
            // #endregion

            // #region hasEventListeners
            interface hasEventListenersFnOptions {
                log: LogConfig;
                type: string;
            }
            type hasEventListenersFn = (
                selector: string,
                options?: hasEventListenersFnOptions,
            ) => Chainable<Protocol.DOMDebugger.GetEventListenersResponse>;
            // #endregion
        }

        interface Chainable<Subject = any> {
            /**
             * Custom command to send a RDP command to Chrome DevTools.
             * @example
             *    const selector = 'button#one'
             *    cy.CDP('Runtime.evaluate', {
             *        expression: 'frames[0].document.querySelector("' + selector + '")',
             *    }).should((v) => {
             *       expect(v.result).to.have.property('objectId')
             *    })
             */
            CDP: CDP.CdpCommandFn;

            /**
             * Custom command to return the internal element's Node Id that can be used to query the run-time properties, for example the rendered font.
             * @example
             *    cy.getCDPNodeId('body').then((nodeId) => {
             *       cy.CDP('CSS.getPlatformFontsForNode', {
             *          nodeId
             *       });
             *    });
             */
            getCDPNodeId: CDP.getCDPNodeIdFn;

            /**
             * Custom command to get listeners attached to a DOM element.
             * @example
             *    cy.hasEventListeners('button#one')
             * @example
             *    cy.hasEventListeners('button#one', { type: 'click' })
             */
            hasEventListeners: CDP.hasEventListenersFn;
        }
    }
}
