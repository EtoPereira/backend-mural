
exports.up = function(knex) {
  return knex.schema.createTable('calendario', function (table){
    table.increments();
    table.string('materia').notNullable();
    table.string('turma_ano_id').notNullable();
    table.foreign('turma_ano_id').references('id').inTable('turmas');
    table.string('data').notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('calendario');
};
