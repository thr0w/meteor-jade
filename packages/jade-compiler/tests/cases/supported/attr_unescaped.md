# attribute escaping

# file.jade
```jade
div
  div(escaped="<code>")
  div(unescaped!="<code>")
```

# file.blaze
```javascript
(function() {
  return HTML.DIV(HTML.DIV({
    escaped: "<code>"
  }), "\n", HTML.DIV({
    unescaped: "<code>"
  }));
})
```
