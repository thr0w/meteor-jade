# iteration from object

# file.jade
```jade
ul
  each val, index in {'a':'one','b':'two','c':'three'}
    li= index + ': ' + val
```

# file.blaze
```javascript
```

