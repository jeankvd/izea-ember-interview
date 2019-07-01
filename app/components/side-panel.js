import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  actions: {
    toggleSidePanelOut() {
      this.get("toggleSidePanelOut")();
    }
  },
  ajax: service(),
  didInsertElement() {
    const ajax = this.get("ajax");
    ajax
      .request(
        "https://jsonplaceholder.typicode.com/users/" + this.get("post").userId,
        {
          method: "GET"
        }
      )
      .then(response => {
        this.set("user", response);
      });
  }
});
