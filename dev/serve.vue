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
    <ui-debio-button>Click me</ui-debio-button>
  </div>
</template>
