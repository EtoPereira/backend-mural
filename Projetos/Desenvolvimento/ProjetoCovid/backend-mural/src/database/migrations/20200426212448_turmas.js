
exports.up = function(knex) {
  return knex.schema.createTable('turmas', function (table){
    table.string('id').primary();
    table.string('turma_ano').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('turmas');
};
