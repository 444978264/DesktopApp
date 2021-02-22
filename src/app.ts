import pkg from '../package.json'

export const test: string = ''

export function test2(age: number) {
  if (age > 19) {
    return pkg.version
  }
}
