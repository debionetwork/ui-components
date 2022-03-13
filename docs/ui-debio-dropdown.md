# [ New ] ui-debio-dropdown :tada:
`ui-debio-dropdown` It's our new custom component, it's fast with pure CSS and of course easy to use. You just call like another tag
eg `<span>` and `<ui-debio-dropdown>` but in pug `span` and `ui-debio-dropdown`

### Props
- `items[Array]`: Can be an array of objects or array of strings.
- `itemValue[String]`: Set property of items’s value.
- `itemText[String]`: Set property of items’s text value
- `width[String, Number]`: Apply custom width to component
- `label[String]`: Apply label to component
- `customLabel[Function]`: Apply a freedom maipulating custom label items selection
- `placeholder[String]`: Apply placeholder to an input search
- `variant[String]`: Apply size to component (default, small, large)
- `validateOnBlur[Boolean]`: Delays validation until blur event
- `outlined[Boolean]`: Applies a border to the component.
- `returnObject[Boolean]`: Will return an object after choosing an item
- `closeOnSelect[Boolean]`: When enable, dropdown will close items selection after clicking
- `block[Boolean]`: Expands the dropdown to 100% of available space.
- `disabled [Boolean]`: To set to a disabled state

### Slots
- `item`: Get current item

### How to use

#### - simple
```pug
ui-debio-dropdown(
  items="yourDataItemCollections"
  v-model="yourData"
)
```

#### - with label
```pug
ui-debio-dropdown(
  items="yourDataItemCollections"
  v-model="yourData"
  label="Im your label"
)
```

#### - with itemText and itemValue
if you have array object data collections, then you should set 2 props `itemText` and `itemValue`

sample array of objects
```json
"collections": [
  {
    "bookName": "Harry Potter",
    "bookPrice": 3000
  },
  {
    "bookName": "Tinker Bell",
    "bookPrice": 4000
  }
]
```

```pug
ui-debio-dropdown(
  items="collections"
  v-model="yourData"
  itemText="bookName"
  itemValue="bookPrice"
)

```
#### - with custom label
sample array of objects
```json
"collections": [
  {
    "name": "Happy",
    "emoji": "😁"
  },
  {
    "name": "Sad",
    "emoji": "😔"
  }
]
```

```pug
ui-debio-dropdown(
  items="collections"
  v-model="yourData"
  itemText="name"
  itemValue="emoji"
  :customLabel="customLabelHandler"
)
```

```js
// Inside methods create your custom label handler
customLabelHandler ({ name, emoji }) {
  return `${emoji} - ${name}`
}
```
`Output: 😁 - Happy`

