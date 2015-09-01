# mixin with arguments

# file.jade
```jade
mixin pet(name)
  li.pet= name
ul
  +pet('<cat>')
  +pet('&dog')
  +pet('pig')
```
```pending
```

# file.blaze
```javascript
```

