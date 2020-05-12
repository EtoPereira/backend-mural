
exports.up = function(knex) {
  return knex.schema.createTable('professores', function(table) {
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable(); //adicionar hash md5
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('professores');
};
