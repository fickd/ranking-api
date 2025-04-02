exports.up = function (knex) {
  return knex.schema.createTable("sites", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("url").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sites");
};
