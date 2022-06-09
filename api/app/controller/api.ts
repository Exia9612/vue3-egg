import { Controller } from 'egg';
import { IGetNewsListParams } from '../../typings';

export default class ApiController extends Controller {
  public async getNewsList(): Promise<void> {
    const { ctx } = this;
    const { type, pageNum, count }: IGetNewsListParams = ctx.request.body

    ctx.body = await ctx.service.api.getNewsList( { type, pageNum, count });
  }
}
