Accounts.validateNewUser(function(user) {
  console.log('calling validateNewUser');
  return user.username === 'chris' || user.username === 'jenny';
});