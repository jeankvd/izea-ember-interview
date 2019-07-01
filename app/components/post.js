import Component from "@ember/component";

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
        setTimeout(() => {
          this.toggleProperty("sidePanelActive");
          this.toggleProperty("panelIsSlidingOut");
        }, 1000);
      }
    }
  }
});
