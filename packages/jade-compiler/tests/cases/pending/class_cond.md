# class conditional attributes

# file.jade

```jade
- var authenticated = true
div(class=authenticated ? 'authed' : 'anon')
```

# file.blaze
```javascript

```
