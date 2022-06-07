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

function typeOf(value: string): string {
  if (value === null) {
    return 'null'
  }

  return typeof(value) === 'object' ?
  {
    '[object Object]:': 'Object',
    '[object Array]': 'Array'
  }[Object.toString.call(value)] :
  typeof(value)
}

export {
  formatParams,
  typeOf
}