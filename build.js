import {transform, stop} from 'https://deno.land/x/esbuild@v0.19.11/mod.js'

for (let exponent = 8; exponent <= 16; exponent++) {
  let offsets = []

  for (let i = 0; i < 2 ** exponent; i++) {
    let next = 0, current = offsets.length % 2
    try { eval(`var ${String.fromCodePoint(i)}`) }
    catch (e) { next = 1 }
  
    if (next !== current) offsets.push(0)
    offsets[offsets.length - 1]++
  }
  
  let text = new TextEncoder().encode(String.fromCodePoint(...offsets))
  let b64 = btoa(String.fromCharCode(...text))
  
  let js = `
    let arr = Uint8Array.from(atob(DICT_B64), c => c.codePointAt())
    let offsets = Array.from(new TextDecoder().decode(arr), c => c.codePointAt())
    export default function* () {
      let i = 0, n = 0
      for (let offset of offsets) {
        if (n % 2) while (offset--) yield String.fromCodePoint(i++)
        else i += offset
        n++
      }
    }
  `
  
  let {code} = await transform(js, {
    define: {DICT_B64: JSON.stringify(b64)},
    format: 'esm',
    minify: true
  })
  
  await Deno.writeTextFile(`dist/${2 ** exponent}.js`, code)
  
  stop()  
}
