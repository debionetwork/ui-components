# [ New ] ui-debio-file :tada:
`ui-debio-file` It's our new custom component, it's fast with pure CSS and of course easy to use. You just call like another tag
eg `<span>` and `<ui-debio-file>` but in pug `span` and `ui-debio-file`

### Props
- `width [String, Number]`: To adjust the width
- `label [String]`: To add and set a label
- `block [Boolean]`: To set width to 100%
- `validateOnBlur[Boolean]`: Delays validation until blur event
- `variant[String]`: Apply size to component (default, small, large)
- `disabled [Boolean]`: To set input to a disabled state

### How to use

#### - simple
```pug
ui-debio-file(
  v-model="yourData"
)
```

#### - with label
```pug
ui-debio-file(
  v-model="yourData"
  label="Im your label"
)
```
