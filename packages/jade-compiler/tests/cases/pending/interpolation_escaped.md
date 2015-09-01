# interpolation escaped

# file.jade
```jade
- var title: string = "On Dogs: Man's Best Friend";
- var author: string = "enlore";
- var theGreat: string = "<span>escape!</span>";
div
  h1= title
  p Written with love by #{author}
  p This will be safe: #{theGreat}
```

# file.blaze
```javascript

```

