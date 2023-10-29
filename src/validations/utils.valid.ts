
// handler validate object is string
export const isString = (object: any): boolean => {
  return typeof object === 'string'
}

// handler validate object is number
export const isNumber = (object: any): boolean => {
  return typeof object === 'number'
}

// handler validate object is array of string
export const isArrayString = (object: any): boolean => {
  return Array.isArray(object) && object.every((item) => typeof item === 'string')
}

// handler validate object is different from null and undefined
export const isNotNullOrUndefined = (object: any): boolean => {
  return object !== null && object !== undefined
}
