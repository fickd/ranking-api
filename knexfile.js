require("dotenv").config(); // 꼭 있어야 함

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user: "root",
      password: "rootpass",
      database: "ranking_db",
    },
    migrations: {
      directory: "./",
    },
    seeds: {
      directory: "./",
    },
  },
};
