
/*****************************************************************************/
/* Index: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Index.events({
  'click #index__sign-out' : function(e, t) {
    e.preventDefault();
    console.log('click #index__sign-out');
    Meteor.logout();
  },
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Index.helpers({
  'latestUpdate' : function() {
    // console.log("console.log(MedsLog.find({}, {sort: {date: -1}}).fetch());");
    // console.log(MedsLog.find({}, {sort: {date: -1}}).fetch());
    return MedsLog.find({}, {sort: {date: -1}}).fetch()[0];
  },
  'updatedWithinLastHour' : function(dateOb) {
    return App.helpers.hoursAgo(dateOb) < 1;
  },
  'updatedWithinLastTwoMinutes' : function(dateOb) {
    return App.helpers.minutesAgo(dateOb) < 2;
  }
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Index: Lifecycle Hooks */
/*****************************************************************************/
Template.Index.created = function () {
};

Template.Index.rendered = function () {
};

Template.Index.destroyed = function () {
};


