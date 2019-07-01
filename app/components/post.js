import Component from "@ember/component";

export default Component.extend({
  sidePanelActive: false,
  actions: {
    toggleSidePanel() {
      this.toggleProperty("sidePanelActive");
    }
  }
});
