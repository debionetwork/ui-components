# [ New ] ui-debio-textarea :tada:
`ui-debio-textarea` It's our new custom component, it's fast with pure CSS and of course easy to use. You just call like another tag
eg `<span>` and `<ui-debio-textarea>` but in pug `span` and `ui-debio-textarea`

### Props
- `accept[Array, String]`:  unique file type specifiers, describing which file types to allow.
- `labelRules[String]`: Apply label text rules
- `validateOnBlur[Boolean]`: Delays validation until blur event
- `clearFile[Boolean]`: To clear current file
- `withTooltip[Boolean]`: Apply tooltip on this component
- `tooltipDesc[String]`: Apply tooltip text on this component, you need enable `withTooltip` to show this text
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
