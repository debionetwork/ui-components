# [ New ] ui-debio-breadcrumbs :tada:
`ui-debio-breadcrumbs` It's our new custom component, it's fast with pure CSS and of course easy to use. You just call like another tag
eg `<span>` and `<ui-debio-breadcrumbs>` but in pug `span` and `ui-debio-breadcrumbs`


### How to use

using pug
```pug
ui-debio-breadcrumbs
```
using plain html
```html
<ui-debio-breadcrumbs></ui-debio-breadcrumbs>
```

and this component will automatically create breadcrumbs links

NOTE: if you have a nested route, then you need to give meta like this
![image](https://user-images.githubusercontent.com/67890542/156320870-476752ac-fa65-49ac-a0df-afbf10ddda8c.png)

so breadcrumbs know this route parent and component will create like (Request Test -> Select Services)
