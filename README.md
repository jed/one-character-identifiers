# one-character-identifiers
this module exports an iterator that yields, in order by code point, every valid JavaScript identifier that fits in a character. it comes in nine sizes, from [256 codepoints](https://github.com/jed/one-character-identifiers/blob/main/dist/256.js) (267 bytes) to [65536 codepoints](https://github.com/jed/one-character-identifiers/blob/main/dist/65536.js) (1.26 Kb). each one contains a pre-computed dictionary of valid JavaScript identifiers generated by trying to declare a variable for every character from \u0000 on up, and keeping only the ones that pass.

# example usage

```js
import ids from 'https://esm.sh/gh/jed/one-character-identifiers/dist/512.js'
for (let id of ids()) console.log(`${id} is a valid identifier.`)

// > $ is a valid identifier.
// > A is a valid identifier.
// > B is a valid identifier.
// > C is a valid identifier.
// > D is a valid identifier.
// > E is a valid identifier.
// > F is a valid identifier.
// > G is a valid identifier.
// > H is a valid identifier.
// > I is a valid identifier.
// > J is a valid identifier.

// ...

// > Ǽ is a valid identifier.
// > ǽ is a valid identifier.
// > Ǿ is a valid identifier.
// > ǿ is a valid identifier.
```