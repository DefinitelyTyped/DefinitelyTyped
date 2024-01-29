export { default as Route } from "@ember/routing/route";
export { default as Router } from "@ember/routing/router";
import RouterService from "@ember/routing/router-service";
import "@ember/routing/-private/router-dsl";
import "@ember/routing/-private/transition";
interface Registry {
    router: RouterService;
}
