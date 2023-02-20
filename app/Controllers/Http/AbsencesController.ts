import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Absence from "App/Models/Absence";

export default class AbsencesController {
    public async index(ctx: HttpContextContract) {
      const absences = await Absence.all()
      const data = {
        title: 'sample',
        message: 'temple',
        data: absences
      }
      return ctx.view.render('absences/index', data)
    }

    public async add(ctx: HttpContextContract) {
      const data = {
        title: '届け出',
        message: '届け出の新規作成'
      }
      return ctx.view.render('absences/add', data)
    }

    public async add_posted(ctx: HttpContextContract) {
      await Absence.create(ctx.request.body())
      return ctx.response.redirect('/absences')
    }
}
