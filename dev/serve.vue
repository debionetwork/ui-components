<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { DebionetworkUiComponentsSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  DebionetworkUiComponentsSample,
  // }
});
</script>

<template>
  <div id="app">
    <ui-debio-recaptcha sitekey="6LffSE8aAAAAAKg6qAIF6dk_IMLrlB9liGestbW6" :verify="true" />
  </div>
</template>
