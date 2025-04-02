exports.up = function (knex) {
  return knex.schema.createTable("final_category_rankings", (table) => {
    table.increments("id").primary();

    table
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");

    table
      .integer("site_id")
      .unsigned()
      .references("id")
      .inTable("sites")
      .onDelete("CASCADE");

    table.integer("total_score").notNullable();
    table.float("average_rank").notNullable();
    table.integer("rank_count").notNullable();
    table.integer("final_rank").notNullable();
    table.date("aggregated_date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("final_category_rankings");
};
