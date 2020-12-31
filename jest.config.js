module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    Session: {
      getActiveUserLocale: function() {
        return "ja";
      }
    }
  }
};
