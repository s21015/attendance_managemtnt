import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'absences'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('student_name').notNullable()
      table.string('student_id').notNullable()
      table.integer('kind').notNullable()
      table.string('reason')
      table.dateTime('start_date').notNullable()
      table.dateTime('end_date')
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
