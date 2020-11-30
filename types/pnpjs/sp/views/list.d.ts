import { IViews, IView } from "./types";
declare module "../lists/types" {
    interface _List {
        readonly views: IViews;
        readonly defaultView: IView;
        getView(id: string): IView;
    }
    interface IList {
        /**
         * Gets the views on this list
         */
        readonly views: IViews;
        /**
         * Gets the default view for this list
         */
        readonly defaultView: IView;
        /**
         * Gets a view by view guid id
         *
         */
        getView(id: string): IView;
    }
}
//# sourceMappingURL=list.d.ts.map