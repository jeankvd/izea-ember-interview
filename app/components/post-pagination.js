import Component from '@ember/component';

export default Component.extend({
    currentPage: 1,
    postsPerPage: 5,
    actions: {
        goToPrevious() {
            this.set('currentPage', this.getCurrentPage - 1);
        },

    }
});
