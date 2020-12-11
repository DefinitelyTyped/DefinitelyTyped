import { INavigationService } from "./types";
import "./web";
export { INavNodeUpdateResult, INavigation, INavigationNode, INavigationNodeAddResult, INavigationNodes, INavigationService, Navigation, NavigationNode, NavigationNodes, NavigationService, IMenuNode, IMenuNodeCollection, ISerializableNavigationNode, INavNodeInfo, } from "./types";
declare module "../rest" {
    interface SPRest {
        readonly navigation: INavigationService;
    }
}
//# sourceMappingURL=index.d.ts.map