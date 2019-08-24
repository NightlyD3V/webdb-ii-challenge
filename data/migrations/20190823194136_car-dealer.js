
exports.up = function(knex) {
  //cars table 
  return knex.schema.createTable('car-dealer', tbl => {
    tbl.increments();
    tbl.integer('vin').notNullable();
    tbl.string('make', 120).notNullable();
    tbl.string('model', 120).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.string('transmission', 120);
    tbl.string('title', 120);
  });
};

exports.down = function(knex) {
  //drop cars table
  return knex.schema.dropTableIfExists('car-dealer');
};
