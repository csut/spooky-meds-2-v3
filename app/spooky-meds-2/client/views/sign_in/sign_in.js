
/*****************************************************************************/
/* SignIn: Event Handlers and Helpersss .js*/
/*****************************************************************************/

Template.SignIn.events({
  'submit #sign-in__form' : function(e, t) {
    e.preventDefault();
    var un = $('#sign-in__username').val().trim();
    var pw = $('#sign-in__password').val().trim();

    Meteor.loginWithPassword(un, pw, function(error) {
      if (error) {
        console.log(error);
        $('#sign-in__username').val("")
        $('#sign-in__password').val("")
        Session.set('sign-in__error', "Incorrect Username or Password");
      } else {
        console.log("no error");
        Session.set('sign-in__error', undefined);
      }
    });
  }
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.SignIn.helpers({
  'signInError' : function() {
    return Session.get('sign-in__error');
  }
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* SignIn: Lifecycle Hooks */
/*****************************************************************************/
Template.SignIn.created = function () {
};

Template.SignIn.rendered = function () {
};

Template.SignIn.destroyed = function () {
};


