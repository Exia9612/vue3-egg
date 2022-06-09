const nodeFetch = require('node-fetch')
// import nodeFetch from 'node-fetch'
import { formatParams } from '../lib/utils'
import { IHttpGetParams } from '../../typings'

module.exports = {
  httpGet(options: IHttpGetParams): Promise<void> {
    const { url, data, success, fail } = options
    return nodeFetch(url + formatParams(data, this.app.config.APP_KEY))
      .then((res) => {
        const result = res.json()
        return result
      })
      .then((data: any) => {
        return success(data.result.data)
      })
      .catch((err) => fail(err))
  }
}