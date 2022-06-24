const { v4: uuid } = require("uuid");

exports.generateRandomString = () => uuid().replace(/-/g, "");
