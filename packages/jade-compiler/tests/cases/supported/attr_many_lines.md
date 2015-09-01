# attributes in many lines

# file.jade
```jade
input(
  type='checkbox'
  name='agreement'
  checked
)
```

# file.blaze
```javascript
(function() {
  return HTML.INPUT({
    type: "checkbox",
    name: "agreement",
    checked: ""
  });
})
```
