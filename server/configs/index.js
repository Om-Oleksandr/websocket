module.exports = {
  mongo: {
    development: {
      host: 'localhost',
      port: 27017,
      dbName: 'fd_chat',
    },
    test: {
      host: 'localhost',
      port: 27017,
      dbName: 'fd_test_chat',
    },
    production: {},
  },
};
