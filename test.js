import identifiers from './dist/65536.js'
for (let id of identifiers()) {
  Deno.test(`testing var ${id}`, () => eval(`var ${id}`))
}
