import CDP = require("chrome-remote-interface");
import Protocol from "devtools-protocol";

function assertType<T>(value: T): T {
    return value;
}

(async () => {
    let client: CDP.Client | undefined;
    try {
        const cdpPort = { port: 9223 };
        client = await CDP(cdpPort);
        client.on("disconnect", () => {});
        client.on("event", (message) => {
            if (message.method === "Network.requestWillBeSent") {}
        });

        // Stable Domains
        {
            client.on("Browser.downloadWillBegin", (params) => {
                // $ExpectType DownloadWillBeginEvent
                params;
            });
            client.on("Browser.downloadProgress", (params) => {
                // $ExpectType DownloadProgressEvent
                params;
            });
            client.on("Debugger.breakpointResolved", (params) => {
                // $ExpectType BreakpointResolvedEvent
                params;
            });
            client.on("Debugger.paused", (params) => {
                // $ExpectType PausedEvent
                params;
            });
            client.on("Debugger.scriptFailedToParse", (params) => {
                // $ExpectType ScriptFailedToParseEvent
                params;
            });
            client.on("Debugger.scriptParsed", (params) => {
                // $ExpectType ScriptParsedEvent
                params;
            });
            client.on("Debugger.resumed", () => {});
            client.on("DOM.childNodeInserted", (params) => {
                // $ExpectType ChildNodeInsertedEvent
                params;
            });
            client.on("DOM.attributeRemoved", (params) => {
                // $ExpectType AttributeRemovedEvent
                params;
            });
            client.on("DOM.documentUpdated", () => {});
            client.on("DOM.setChildNodes", (params) => {
                // $ExpectType SetChildNodesEvent
                params;
            });
            client.on("Emulation.virtualTimeBudgetExpired", () => {});
            client.on("Fetch.requestPaused", (params) => {
                // $ExpectType RequestPausedEvent
                params;
            });
            client.on("Fetch.authRequired", (params) => {
                // $ExpectType AuthRequiredEvent
                params;
            });
            client.on("Input.dragIntercepted", (params) => {
                // $ExpectType DragInterceptedEvent
                params;
            });
            client.on("Log.entryAdded", (params) => {
                // $ExpectType EntryAddedEvent
                params;
            });
            client.on("Network.requestWillBeSent", (params) => {
                // $ExpectType RequestWillBeSentEvent
                params;
            });
            client.on("Network.loadingFailed", (params) => {
                // $ExpectType LoadingFailedEvent
                params;
            });
            client.on("Network.loadingFinished", (params) => {
                // $ExpectType LoadingFinishedEvent
                params;
            });
            client.on("Network.responseReceived", (params) => {
                // $ExpectType ResponseReceivedEvent
                params;
            });
            client.on("Page.domContentEventFired", (params) => {
                // $ExpectType DomContentEventFiredEvent
                params;
            });
            client.on("Page.frameNavigated", (params) => {
                // $ExpectType FrameNavigatedEvent
                params;
            });
            client.on("Page.loadEventFired", (params) => {
                // $ExpectType LoadEventFiredEvent
                params;
            });
            client.on("Performance.metrics", (params) => {
                // $ExpectType MetricsEvent
                params;
            });
            client.on("Profiler.consoleProfileFinished", (params) => {
                // $ExpectType ConsoleProfileFinishedEvent
                params;
            });
            client.on("Runtime.bindingCalled", (params) => {
                // $ExpectType BindingCalledEvent
                params;
            });
            client.on("Runtime.consoleAPICalled", (params) => {
                // $ExpectType ConsoleAPICalledEvent
                params;
            });
            client.on("Runtime.exceptionThrown", (params) => {
                // $ExpectType ExceptionThrownEvent
                params;
            });
            client.on("Runtime.executionContextCreated", (params) => {
                // $ExpectType ExecutionContextCreatedEvent
                params;
            });
            client.on("Runtime.executionContextDestroyed", (params) => {
                // $ExpectType ExecutionContextDestroyedEvent
                params;
            });
            client.on("Runtime.inspectRequested", (params) => {
                // $ExpectType InspectRequestedEvent
                params;
            });
            client.on("Security.certificateError", (params) => {
                // $ExpectType CertificateErrorEvent
                params;
            });
            client.on("Target.targetCreated", (params) => {
                // $ExpectType TargetCreatedEvent
                params;
            });
        }

        // Deprecated domain events
        client.on("Console.messageAdded", (params) => {
            // $ExpectType MessageAddedEvent
            params;
        });

        // Experimental domain events
        {
            client.on("Accessibility.loadComplete", (params) => {
                // $ExpectType LoadCompleteEvent
                params;
            });
            client.on("Accessibility.nodesUpdated", (params) => {
                // $ExpectType NodesUpdatedEvent
                params;
            });
            client.on("Animation.animationCreated", (params) => {
                // $ExpectType AnimationCreatedEvent
                params;
            });
            client.on("Audits.issueAdded", (params) => {
                // $ExpectType IssueAddedEvent
                params;
            });
            client.on("BackgroundService.recordingStateChanged", (params) => {
                // $ExpectType RecordingStateChangedEvent
                params;
            });
            client.on("BackgroundService.backgroundServiceEventReceived", (params) => {
                // $ExpectType BackgroundServiceEventReceivedEvent
                params;
            });
            client.on("Cast.sinksUpdated", (params) => {
                // $ExpectType SinksUpdatedEvent
                params;
            });
            client.on("Cast.issueUpdated", (params) => {
                // $ExpectType IssueUpdatedEvent
                params;
            });
            client.on("CSS.fontsUpdated", (params) => {
                // $ExpectType FontsUpdatedEvent
                params;
            });
            client.on("CSS.styleSheetAdded", (params) => {
                // $ExpectType StyleSheetAddedEvent
                params;
            });
            client.on("Database.addDatabase", (params) => {
                // $ExpectType AddDatabaseEvent
                params;
            });
            client.on("DeviceAccess.deviceRequestPrompted", (params) => {
                // $ExpectType DeviceRequestPromptedEvent
                params;
            });
            client.on("DOMStorage.domStorageItemAdded", (params) => {
                // $ExpectType DomStorageItemAddedEvent
                params;
            });
            client.on("FedCm.dialogShown", (params) => {
                // $ExpectType DialogShownEvent
                params;
            });
            client.on("HeapProfiler.heapStatsUpdate", (params) => {
                // $ExpectType HeapStatsUpdateEvent
                params;
            });
            client.on("Inspector.detached", (params) => {
                // $ExpectType DetachedEvent
                params;
            });
            client.on("Inspector.targetCrashed", () => {});
            client.on("Inspector.targetReloadedAfterCrash", () => {});
            client.on("LayerTree.layerTreeDidChange", (params) => {
                // $ExpectType LayerTreeDidChangeEvent
                params;
            });
            client.on("Media.playerPropertiesChanged", (params) => {
                // $ExpectType PlayerPropertiesChangedEvent
                params;
            });
            client.on("Overlay.inspectNodeRequested", (params) => {
                // $ExpectType InspectNodeRequestedEvent
                params;
            });
            client.on("Overlay.nodeHighlightRequested", (params) => {
                // $ExpectType NodeHighlightRequestedEvent
                params;
            });
            client.on("PerformanceTimeline.timelineEventAdded", (params) => {
                // $ExpectType TimelineEventAddedEvent
                params;
            });
            client.on("Preload.prerenderAttemptCompleted", (params) => {
                // $ExpectType PrerenderAttemptCompletedEvent
                params;
            });
            client.on("ServiceWorker.workerVersionUpdated", (params) => {
                // $ExpectType WorkerVersionUpdatedEvent
                params;
            });
            client.on("Storage.cacheStorageContentUpdated", (params) => {
                // $ExpectType CacheStorageContentUpdatedEvent
                params;
            });
            client.on("Tethering.accepted", (params) => {
                // $ExpectType AcceptedEvent
                params;
            });
            client.on("Tracing.dataCollected", (params) => {
                // $ExpectType DataCollectedEvent
                params;
            });
            client.on("WebAudio.contextCreated", (params) => {
                // $ExpectType ContextCreatedEvent
                params;
            });
            client.on("WebAuthn.credentialAdded", (params) => {
                // $ExpectType CredentialAddedEvent
                params;
            });
        }

        const { Network, Page, Runtime } = client;
        await Network.enable();
        await Network.enable({});
        await Network.enable({}, "sessionId"); // Should be Network.enable('sessionId')
        // @ts-expect-error
        await Network.setAcceptedEncodings();
        await Network.setAcceptedEncodings({ encodings: [] });
        await Page.enable();
        await Page.navigate({ url: "https://github.com" });
        await client.Runtime.runIfWaitingForDebugger("sessionId");
        await client.Fetch.enable({ patterns: [] }, "sessionId");
        let loadEvent = await Page.loadEventFired();
        loadEvent = await client["Page.loadEventFired"]();
        loadEvent.timestamp;
        await Page.interstitialHidden();
        await client["Page.interstitialHidden"]();
        const unsubscribe = Network.requestWillBeSent((params, sessionId) => {
            params.request.url;
            unsubscribe();
        });
        const unsubscribeAlt = client["Network.requestWillBeSent"]((params, sessionId) => {
            params.request.url;
            unsubscribeAlt();
        });
        const unsubscribe2 = Network.requestWillBeSent((params) => {
            params.request.url;
            unsubscribe2();
        });
        const unsubscribeAlt2 = client["Network.requestWillBeSent"]((params) => {
            params.request.url;
            unsubscribeAlt2();
        });
        const unsubscribe3 = Page.frameResized(() => {
            unsubscribe3();
        });
        const unsubscribeAlt3 = client["Page.frameResized"](() => {
            unsubscribeAlt3();
        });
        await Runtime.enable();
        const loc = await Runtime.evaluate({ expression: "window.location.toString()" });
        const targets = await CDP.List(cdpPort);
        for (const target of targets) {
            if (target.url.startsWith("https://github.com")) {
                await CDP.Close({ ...cdpPort, id: target.id });
            }
        }

        assertType<Promise<void>>(client.send("Network.enable"));
        assertType<Promise<Protocol.Page.NavigateResponse>>(
            client.send("Page.navigate", { url: "https://github.com" }),
        );
        assertType<Promise<Protocol.Page.NavigateResponse>>(
            client.send("Page.navigate", { url: "https://github.com" }, "sessionId"),
        );
        client.send(
            "Page.navigate",
            (error: boolean | Error, response: Protocol.Page.NavigateResponse | CDP.SendError | undefined) => {},
        );
        client.send(
            "Page.navigate",
            { url: "https://github.com" },
            (error: boolean | Error, response: Protocol.Page.NavigateResponse | CDP.SendError | undefined) => {},
        );
        client.send(
            "Page.navigate",
            { url: "https://github.com" },
            "sessionId",
            (error: boolean | Error, response: Protocol.Page.NavigateResponse | CDP.SendError | undefined) => {},
        );
        // @ts-expect-error
        client.send("Page.navigate", (error: boolean, response: CDP.SendError) => {});
        // @ts-expect-error
        client.send("Page.navigate", (error: boolean, response: Protocol.Page.NavigateResponse) => {});
    } finally {
        if (client) {
            await client.close();
        }
    }
})();

CDP.Activate({ id: "CC46FBFA-3BDA-493B-B2E4-2BE6EB0D97EC" }, (err) => {
    if (!err) {}
});

(() => {
    const cdpPort = { port: 9223 };
    CDP(cdpPort, client => {
        CDP.List(cdpPort, (err, targets) => {
            if (!err) {
                for (const target of targets) {
                    if (target.url.startsWith("https://github.com")) {
                        CDP.Close({ id: target.id }, err => {});
                    }
                }
            }
        });
        client.close();
    });
})();

(() => {
    CDP(client => {
        CDP.List((err, targets) => {
            if (!err) {
                for (const target of targets) {
                    if (target.url.startsWith("https://github.com")) {
                        CDP.Close({ id: target.id }, err => {});
                    }
                }
            }
        });
        client.close();
    });
})();

(async () => {
    CDP.New((err, target) => {
        if (!err && target.url.startsWith("https://github.com")) {
            CDP.Close({ id: target.id }, err => {});
        }
    });

    CDP.New({ url: "https://github.com" }, (err, target) => {
        if (!err && target.url.startsWith("https://github.com")) {
            CDP.Close({ id: target.id }, err => {});
        }
    });

    const target: CDP.Target | undefined = await CDP.New({ url: "https://github.com" });
})();

(() => {
    CDP.Protocol((err, protocol) => {
        if (!err) {
            CDP({ protocol });
        }
    });
})();

CDP.Version((err, info) => {
    if (!err) {}
});
