# [ New ] ui-debio-modal :tada:
`ui-debio-modal` It's our new custom component, it's fast with pure CSS and of course easy to use. You just call like another tag
eg `<span>` and `<ui-debio-modal>` but in pug `span` and `ui-debio-modal`

### Props
- `show[Boolean]`: Current state to make modal show/hide
- `disabledIconAnimate[Boolean]`: false by default to make modal icon animated
- `title[String]`: Apply modal title
- `icon[String]`: Apply icon to make modal with icon
- `iconSize[String, Number]`: Apply custom icon size
- `iconViewBox[String]`: Apply custom icon viewbox
- `ctaTitle[String]`: Apply cta button title
- `ctaAction[Function]`: Apply method handler when cta button clicked
- `ctaOutlined[Boolean]`: Enable by default to make button outlined
- `showCta[Boolean]`: Enable by default to show cta button
- `showTitle[Boolean]`: Enable by default to show title
- `ctaDisabled[Boolean]`: false by default to make cta clickable
- `disableDismiss[Boolean]`: False by default to make modal dissmisable

### Slots
- `title`: To create custom title
- `cta`: To create custom cta button
- `default slot`: default slot to create modal body by default

### How to use

#### - simple
```pug
ui-debio-modal(
  show="yourState"
)
```

#### - with title
```pug
ui-debio-modal(
  show="yourState"
  title="Im your title"
)
```

#### - with icon
```pug
ui-debio-modal(
  show="yourState"
  icon="icon"
)
```
