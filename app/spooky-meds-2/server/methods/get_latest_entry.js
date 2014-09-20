/*****************************************************************************/
/* GetLatestEntry Methods */
/*****************************************************************************/

Meteor.methods({
  'getLatestEntry' : function() {
    // var del = MedsLog.find({}, {"$sort": {date: -1}}).fetch()[0];
    return MedsLog.find({}, {$sort: {date: -1}}).fetch()[0];
  }
 /*
  * Example:
  *  '/app/get_latest_entry/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
});
