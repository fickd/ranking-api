exports.up = function (knex) {
  return knex.schema.createTable("ranking_sources", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("url").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ranking_sources");
};
