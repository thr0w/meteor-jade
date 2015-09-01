# attributes

# file.jade
```jade
ul(a="x")
```

# file.blaze
```javascript
(function() {
  return HTML.UL({
    a: "x"
  });
})
```
