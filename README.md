<div align="center">
<img src="https://avatars.githubusercontent.com/u/76637246?s=200&v=4">
</div>

<div align="Center">
<h1>@debionetwork/ui-components</h1>
<h2>Decentralized Sovereign Biomed </h2>
The Anonymous-First Platform for Medical and Bioinformatics Data.

<br>
<br>

[![Node.js version](https://img.shields.io/badge/Node.js-%5E14.0.0-green?logo=Node.Js)](https://nodejs.org/)
[![Medium](https://img.shields.io/badge/Medium-DeBio%20Network-brightgreen?logo=medium)](https://blog.debio.network)

</div>

## Quick install

DeBio Ui is a collection of components (vue based) jointly developed by the DeBio team, which is intended to make it easier to develop a project without having to re-create your components repeatedly.

### NPM

```sh
npm install @debionetwork/ui-components
```

**or**

### Yarn

```sh
yarn add @debionetwork/ui-components
```

### Bower

```sh
bower install @debionetwork/ui-components
```

### Import

After installation, you can import the package into your project using this snippet:

```js
import UiComponents from "@debionetwork/ui-components"
import "@debionetwork/ui-components/dist/debionetwork-ui-components.css"

Vue.use(UiComponents)

new Vue({
  UiComponents, // <-- Put here
  render: h => h(App)
}).$mount("#app")
```
And you can use it in all your pages or components