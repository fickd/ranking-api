exports.up = function (knex) {
  return knex.schema.createTable("site_rankings", (table) => {
    table.increments("id").primary();

    table
      .integer("site_id")
      .unsigned()
      .references("id")
      .inTable("sites")
      .onDelete("CASCADE");

    table
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");

    table
      .integer("ranking_source_id")
      .unsigned()
      .references("id")
      .inTable("ranking_sources")
      .onDelete("CASCADE");

    table.integer("ranking_position").notNullable();
    table.timestamp("crawled_at").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("site_rankings");
};
