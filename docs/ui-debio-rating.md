# [ New ] ui-debio-rating :tada:
`ui-debio-rating` It's our new custom component, it's fast with pure CSS and of course easy to use. You just call like another tag
eg `<span>` and `<ui-debio-rating>` but in pug `span` and `ui-debio-rating`

### Props
- `rating[Number]`: Current rating
- `totalRating[Number]`: Total of rating number
- `totalReviews[Number]`: Set total reviewers, you need active `withReviewers` to use this feature
- `size[String, Number]`: Apply size of star icon
- `interactive[Boolean]`: Make component interactive which mean you can select star
- `withReviewers[Boolean]`: Apply number of reviewers

### How to use

#### - simple
```pug
ui-debio-rating(
  rating="3"
  size="10"
)
```

#### - interactive
```pug
ui-debio-rating(
  rating="3"
  size="10"
  interactive
)
```

#### - with total reviews
```pug
ui-debio-rating(
  rating="3"
  size="10"
  total-reviews
  with-reviewers
)
```
