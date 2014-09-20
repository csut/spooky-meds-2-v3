/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
Meteor.subscribe('meds_log');

_.extend(App, {
});

App.helpers = {
  'hoursAgo' : function(ms) {
    // return number of hours ago
    var now = (new Date()).getTime();
    var then =  ms;
    var ellapsedMs = now - then;
    var ellapsedHours = ellapsedMs / 1000 / 60 / 60;
    var returnVal = Math.floor(ellapsedHours);
    return returnVal;
  },
  'minutesAgo' : function(ms) {
    // return number of minutes ago
    var now = (new Date()).getTime();
    var then =  ms;
    var ellapsedMs = now - then;
    var ellapsedMinutes = ellapsedMs / 1000 / 60;
    var returnVal = Math.floor(ellapsedMinutes);
    return returnVal;
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
