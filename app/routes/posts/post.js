import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import RSVP from "rsvp";
export default Route.extend({
  model() {
    const ajax = this.get("ajax");
    return RSVP.hash({
      post: ajax.request("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
      })
    });
  },
  ajax: service()
});
