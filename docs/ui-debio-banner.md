# [ New ] ui-debio-banner :tada:
`ui-debio-banner` It's our new custom component, it's fast with pure CSS and of course easy to use. You just call like another tag
eg `<span>` and `<ui-debio-banner>` but in pug `span` and `ui-debio-banner`

### Props
- `title[String]`: To create title text inside the banner component
- `subtitle[String]`: To create subtitle text inside the banner component
- `gradientColor[String]`: To make a banner with gradient color here 4 option of banner gradient (primary, secondary, tertiary, violet)
- `withDecoration[Boolean]`: To create a decoration like some particle on the right side of the banner

### Slots
- `illustration`: You can use it If you want to create an illustration on the left side of the banner
- `cta`: You can use it If you want to create a button on the right side of the banner

### How to use


#### - simple
```pug
ui-debio-banner(
  title="My title"
  subtitle="My subtitle"
)
```

#### - with gradient color
```pug
ui-debio-banner(
  title="My title"
  subtitle="My subtitle"
  gradient-color="secondary"
)
```

#### - with decoration (some particle)
```pug
ui-debio-banner(
  title="My title"
  subtitle="My subtitle"
  gradient-color="secondary"
  with-decoration
)
```

#### - with decoration (some particle)
```pug
ui-debio-banner(
  title="My title"
  subtitle="My subtitle"
  gradient-color="secondary"
  with-decoration
)
```

#### - with custom max-width subtitle (some particle)
```pug
ui-debio-banner(
  title="My title"
  subtitle="My subtitle"
  gradient-color="secondary"
  maxSubTitleWidth="200px"
)
```