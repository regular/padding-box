padding-box
---

```
const pbox = require('padding-box')
const rect = pbox(document.body.querySelector('h1'))

=> result has the same properties as getBoundingClientRect()
  
  {
    left, right, top, bottom,
    x, y,
    width,
    height
  }
```

License: ISC
