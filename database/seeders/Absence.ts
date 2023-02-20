import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Absence from "App/Models/Absence";
import {DateTime} from "luxon";

export default class extends BaseSeeder {
  public async run () {
    await Absence.create({
      student_name: 'なかそねつよし',
      student_id: 's21000',
      kind: 1,
      reason: '風邪症状のため',
      start_date: DateTime.fromISO('2023-01-20'),
      end_date: DateTime.fromISO('2023-01-20'),
    })
  }
}
