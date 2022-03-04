# [ New ] ui-debio-textarea :tada:
`ui-debio-textarea` It's our new custom component, it's fast with pure CSS and of course easy to use. You just call like another tag
eg `<span>` and `<ui-debio-textarea>` but in pug `span` and `ui-debio-textarea`

### Props
- `width [String, Number]`: To adjust the width
- `label [String]`: To add and set a label
- `variant[String]`: Apply size to component (default, small, large)
- `block [Boolean]`: To set width to 100%
- `disabled [Boolean]`: To set input to a disabled state

### How to use

#### - simple
```pug
ui-debio-textarea(
  v-model="yourData"
)
```

#### - with label
```pug
ui-debio-textarea(
  v-model="yourData"
  label="Im your label"
)
```
