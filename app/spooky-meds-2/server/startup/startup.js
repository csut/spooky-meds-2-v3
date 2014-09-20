Meteor.startup(function() {
  var password = "eyecream";
  Meteor.users.remove({});
  if (Meteor.users.find({username: "jenny"}).fetch().length > 0) {
    console.log("jenny exists");
  } else {
    console.log("jenny DOESN'T exist");
    console.log("creating jenny");
    Accounts.createUser({
      username : "jenny",
      password : password
    });
  }
  if (Meteor.users.find({username: "chris"}).fetch().length > 0) {
    console.log("chris exists");
  } else {
    console.log("chris DOESN'T exist");
    console.log("creating chris");
    Accounts.createUser({
      username : "chris",
      password : password
    });
  }
});