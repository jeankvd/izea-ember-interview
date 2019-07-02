import Component from "@ember/component";
import { later } from "@ember/runloop";

export default Component.extend({
  sidePanelActive: false,
  panelIsSlidingOut: false,
  classNameBindings: ["panelIsSlidingOut", "sidePanelActive"],
  actions: {
    toggleSidePanel() {
      this.toggleProperty("sidePanelActive");
    },
    toggleSidePanelOut() {
      if (this.get("sidePanelActive") && !this.get("panelIsSlidingOut")) {
        this.toggleProperty("panelIsSlidingOut");

        /* Setting timeout to allow animation to run */
        later(() => {
          this.toggleProperty("sidePanelActive");
          this.toggleProperty("panelIsSlidingOut");
        }, 500);
      }
    }
  }
});
