/*****************************************************************************/
/* UpdateLog Methods */
/*****************************************************************************/

Meteor.methods({
  'updateLog' : function() {
    // console.log('Meteor.methods.updateLog');
    // console.log("console.log(Meteor.userId());");
    // console.log(Meteor.userId());
    if (Meteor.userId() !== null) {
      MedsLog.insert({
        date: (new Date()).getTime(),
        updater: Meteor.user().username
      });
    }
  }
 /*
  * Example:
  *  '/app/update_log/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
});
