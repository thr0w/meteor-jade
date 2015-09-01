# interation conditional

# file.jade
```jade
- var values: string[] = [];
ul
  each val in values.length ? values : ['There are no values']
    li= val
```

# file.blaze
```javascript
```
