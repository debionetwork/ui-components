import { mount } from "@vue/test-utils"
import Recaptcha from "@/lib-components/Recaptcha"

describe("Recaptcha", () => {
  it("Should render", () => {
    mount(Recaptcha, {
      propsData: { sitekey: "", verify: () => {} }
    })
  })
})
