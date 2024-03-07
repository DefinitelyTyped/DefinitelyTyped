declare namespace OneLine {
    interface OneLine {
        event: EventObject;
        adUnitRequest(arrFoAdIds?: string[], allowReload?: boolean): void;
        buildVideoUrl(bidder: BidderConfig[], placementID: string): void;
        adUnitInfiniteRequest(arrOfOb: ArrOfOb[]): void;
    }

    interface ArrOfOb {
        infiniteId: string;
        divId: string;
    }

    interface BidderParams {
        placementId: string;
    }

    interface BidderConfig {
        bidder: string;
        params: BidderParams;
    }

    interface EventObject {
        o: { [key: string]: (NoParamFunction[] | "ONE-TIME-DONE") | (ParamFunction[] | "ONE-TIME-DONE") };
        topic: {
            tcfReady: string;
            documentReady: string;
            isEmpty: string;
            isNotEmpty: string;
            ageGateReady: string;
        };
        cons: {
            OneTime: string;
        };
        subscribe(topic: string, fn: NoParamFunction): void;
        broadcast(oneTime: boolean, topic: string, data?: any): void;
    }

    type NoParamFunction = () => void;
    type ParamFunction = (arg: any) => void;
}

declare const OneLine: OneLine.OneLine;
export = OneLine;
