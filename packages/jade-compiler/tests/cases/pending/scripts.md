# scripts

# file.jade
```jade
script.
  import {Customer} from "customer"; // {name: string, phone: string}[]
- var customers: Customer
ul
  each customer in customers
    li(onClick= function(e){clickHandle(customer)})
      span= customer.name
      span= customer.phone
script.
  function clickHandle(customer: Customer)
  {
    alert('click')
  }
```

# file.blaze
```javascript
```
