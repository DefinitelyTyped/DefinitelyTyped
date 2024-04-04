declare namespace OneLine {
    interface OneLine {
        event: EventObject;
        adUnitRequest(arrFoAdIds?: string[], allowReload?: boolean): void;
        buildVideoUrl(bidder: BidderConfig[], placementID: string, customParams: VideoCustomParameters, videoTitle?: string): string;
    }
    interface VideoCustomParameters {
        ad_count?: number;
        ad_duration?: number;
        ad_request_count?: number;
        betting?: "true" | "false";
        buffer_duration?: number;
        video_count?: number;
        video_duration?: number;
        page_type?: string | undefined;
        ad_type?: "preroll" | "bumper";
        video_title?: string | undefined;
      }
      
      interface VideoParameters {
        cust_params: VideoCustomParameters;
        iu: string;
        output: string;
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
