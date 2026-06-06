import EmberError from "@ember/error";

new EmberError("Fuuuuuuuu"); // $ExpectType Error

// allows to extend from EmberError
class AjaxError extends Error {
}
