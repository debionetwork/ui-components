// install function executed by Vue.use()
function install (Vue) {
  if (install.installed) return
  install.installed = true

  // For each matching file name...
  requireComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = fileName
      .split("/")
      .pop()
      .replace(/\.\w+$/, "")
    // components[componentName] = componentConfig.default || componentConfig
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// To auto-install when vue is found

let GlobalVue = null
if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

const requireComponent = require.context(
  // Look for files in the current directory
  "./components",
  // Do not look in subdirectories
  false,
  // Only include "_base-" prefixed .vue files
  /[\w-]+\.vue$/
)

// Default export is library as a whole, registered via Vue.use()
export default plugin

// To allow individual component use, export components
// each can be registered via Vue.component()
// console.log({components})
// export {components}
