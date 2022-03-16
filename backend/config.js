"use strict";

/** Shared config for application; can be required many places. */

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "weather_test"
      : process.env.DATABASE_URL || "weather";
}


module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUri,
};
