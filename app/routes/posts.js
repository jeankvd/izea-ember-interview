import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  model() {
    const ajax = this.get("ajax");
    return ajax.request("https://jsonplaceholder.typicode.com/posts", {
      method: "GET"
    });
  },
  ajax: service()
});
