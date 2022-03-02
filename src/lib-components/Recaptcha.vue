<template>
    <vue-recaptcha @verify="verify" :sitekey="sitekey" :loadRecaptchaScript="true"></vue-recaptcha>
</template>

<script>
import VueRecaptcha from "vue-recaptcha"

export default {
  name: "UiDebioRecaptcha",

  props: {
    sitekey: { type: String, default: null },
    verify: Function
  },
    
  components: {
    VueRecaptcha
  }
}
</script>
