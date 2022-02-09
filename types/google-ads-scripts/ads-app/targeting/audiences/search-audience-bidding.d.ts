declare namespace GoogleAdsScripts {
    namespace AdsApp {
        interface SearchAudienceBidding {
            /** Clears the bid modifier value. */
            clearBidModifier(): void;
            /** Returns the current bid modifier value. */
            getBidModifier(): number;
            /** Sets the bid modifier value for this audience to the specified value. */
            setBidModifier(modifier: number): void;
        }
    }
}
