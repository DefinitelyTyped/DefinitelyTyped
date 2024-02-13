declare namespace OneLine {
  interface OneLine {
    event: EventObject;
    /**
      declare global {
          interface Window {
              ndmOne: NdmOne;
          }
      }
      ndmOne.adUnitRequest(); // Set command to load all matching ad units on the page
      //ndmOne.adUnitRequest(['ndm-1', 'ndm-2']); // Or load only this div's
      //ndmOne.adUnitRequest(['push-up-all']); // Or load only all push up's 
      */
    adUnitRequest(arrFoAdIds?: string[], allowReload?: boolean): void;
    buildVideoUrl(bidder: BidderConfig[], placementID: string);
  }

  interface BidderParams {
    placementId: string;
  }
  
  interface BidderConfig {
    bidder: string;
    params: BidderParams;
  }

  interface EventObject {
    o: { [key: string]: Function[] | "ONE-TIME-DONE" };
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
    subscribe(topic: string, fn: Function): void;
    broadcast(oneTime: boolean, topic: string, data?: any): void;
  }
}

declare const OneLine: OneLine.OneLine;
export = OneLine;
