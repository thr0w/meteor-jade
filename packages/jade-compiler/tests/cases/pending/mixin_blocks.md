# mixin with blocks

# file.jade
```jade
mixin article(title)
  .article
    .article-wrapper
      h1= title
      if block
        block
      else
        p No content provided
div
  +article('Hello world')
  +article('Hello world')
    p This is my
    p Amazing article
```

# file.blaze
```javascript
```
