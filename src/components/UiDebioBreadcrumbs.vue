<template lang="pug">
  .ui-debio-breadcrumbs
    .ui-debio-breadcrumbs__wrapper
      .ui-debio-breadcrumbs__links
        router-link.ui-debio-breadcrumbs__link(
          v-for="(link, idx) in links"
          :key="idx"
          :to="idx === links.length - 1 ? $route.path : { name: link.to ? link.to : $route.matched[idx].name }"
        ) {{ link.title ? link.title : link.replaceAll("-", " ") }}
</template>

<script>
export default {
  name: "UiDebioBreadcrumbs",

  data: () => ({
    links: []
  }),

  props: {
    baseRouter: { type: String, default: null }
  },

  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(val) {
        this.handlerBreadcrumbs(val, this.baseRouter)
      }
    },

    baseRouter(val) {
      this.handlerBreadcrumbs(this.$route, val)
    }
  },

  mounted() {
    this.initLinksAnimation()
  },

  updated() {
    this.initLinksAnimation()
  },

  methods: {
    handlerBreadcrumbs(currentRoute, baseRoute) {
      const formated = currentRoute.path === "/" ? [baseRoute] : [baseRoute, ...currentRoute.path.split("/")]
      const links = currentRoute.path === "/" ? [baseRoute] : [baseRoute, ...formated.slice(1, formated?.length)]
      if (!this.$router.options.routes) return

      const routeChildren = this.$router.options.routes
        .find(route => route.name === baseRoute)
        .children

      const parentRoute = routeChildren.find(route => route.name === currentRoute.meta?.parent)

      this.links = links

      if (this.links.length < this.$route.matched.length) return

      this.links = this.links
        .slice(0, this.$route.matched.length)
        .reduce((filtered, link, idx) => {
          if (parentRoute && idx === 1) filtered.push({
            title: parentRoute.meta.pageHeader,
            to: parentRoute.name
          })

          const compute =
            (idx === this.$route.matched.length - 1 && links[idx + 1]) ||
            (idx !== 0 && link !== this.$route.meta.pageHeader)
              ? this.$route.meta.pageHeader
              : link

          filtered.push(compute)
          return filtered
        }, [])
    },

    initLinksAnimation() {
      document.querySelectorAll(".ui-debio-breadcrumbs__link").forEach((link, idx) => {
        if (idx === 0) return
        const delay = idx + 3

        link.classList.add("ui-debio-breadcrumbs__link--animated")
        link.style.animationDelay = `.${delay}s`

        setTimeout(() => {
          link.classList.remove("ui-debio-breadcrumbs__link--animated")
          link.style.animationDelay = null

        }, `${delay + 4}00`)
      })
    }
  }
}
</script>

<style lang="sass">
  @import "../styles/mixins.sass"

  .ui-debio-breadcrumbs
    &__links
      display: flex
      align-items: center
      gap: .5rem

    &__link
      text-transform: capitalize
      align-items: inherit
      display: inherit
      text-decoration: none
      @include h3-opensans

      &--animated
        opacity: 0
        animation: showing cubic-bezier(.7, -0.04, .61, 1.14) .4s

      &:not(:last-of-type)
        color: #ABABAB

        &::after
          content: "\F0142"
          color: #ABABAB
          font: normal normal normal 24px "Material Design Icons"
          margin-left: .5rem

    @keyframes showing
      0%
        transform: translateX(-100%)
        opacity: 0
      55%
        opacity: 0
      100%
        transform: translateX(0)
        opacity: 1
</style>
