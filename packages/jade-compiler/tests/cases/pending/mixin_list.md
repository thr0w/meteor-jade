# mixin declaring and using

# file.jade
```jade
//- Declaration
mixin list
  ul
    li foo
    li bar
    li baz
//- Use
div
  +list
  +list
```

# file.blaze
```javascript
```
