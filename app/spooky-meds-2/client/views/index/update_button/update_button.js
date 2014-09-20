
/*****************************************************************************/
/* UpdateButton: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.UpdateButton.events({
  'click .update-button__button' : function(e, tmpl) {
    // console.log('click #log__update');
    if (window.confirm("Would you like to update the meds log?")) {
      Meteor.call('updateLog');
    }
  }
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.UpdateButton.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* UpdateButton: Lifecycle Hooks */
/*****************************************************************************/
Template.UpdateButton.created = function () {
};

Template.UpdateButton.rendered = function () {
};

Template.UpdateButton.destroyed = function () {
};


