# object-mock
Mock object properties temporarily

```sh
npm install object-mock
```

```js
import assert from 'assert'
import mock from 'object-mock'

const unmock = mock(process, 'platform', 'chris')

assert(process.platform === 'chris')

unmock()

assert(process.platform !== 'chris')
```
