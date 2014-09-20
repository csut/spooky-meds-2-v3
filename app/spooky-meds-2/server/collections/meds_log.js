/*
 * Add query methods like this:
 *  MedsLog.findPublic = function () {
 *    return MedsLog.find({is_public: true});
 *  }
 */


MedsLog.allow({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});

MedsLog.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
