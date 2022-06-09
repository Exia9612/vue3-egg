import { IPageData } from '../../typings'

function formatParams (data: any, appkey: string): string {
  if (typeOf(data) !== 'Object') {
    throw new Error('Option "data" must be a type Object')
  }

  let paramStr: string = '?'
  for (const key in data) {
    paramStr += `${key}=${data[key]}&`
  }

  if (appkey) {
    paramStr += `key=${appkey}`
  } else {
    paramStr.slice(0, -1)
  }
  return paramStr
}

function typeOf(value: any): string {
  if (value === null) {
    return 'null'
  }

  return typeof(value) === 'object' ?
  {
    '[object Object]': 'Object',
    '[object Array]': 'Array'
  }[({}).toString.call(value)] :
  typeof(value)
}

function getPageData<T> (data: Array<T>, pageNum: number, count: number): IPageData<T> {
  const retInfo: IPageData<T> = {
    hasMore: true,
    data: []
  }

  if (data.length <= count) {
    retInfo.hasMore = false
    retInfo.data?.concat(data)
  } else {
    const pageCount: number = Math.ceil(data.length / count)
    if (pageNum >= pageCount) {
      retInfo.hasMore = false
      retInfo.data = null
    } else {
      retInfo.hasMore = true
      retInfo.data = data.splice(pageNum * count, count)
    }
  }

  return retInfo
}

export {
  formatParams,
  typeOf,
  getPageData
}