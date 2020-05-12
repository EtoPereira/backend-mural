exports.up = function(knex) {
  return knex.schema.createTable('publicacoes', function (table){
      table.increments();
      table.string('titulo').notNullable();
      table.string('descricao').notNullable();
      table.string('data').notNullable();
      table.string('professor_id').notNullable();

      table.foreign('professor_id').references('id').inTable('professores');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('publicacoes')
};
