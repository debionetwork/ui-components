import { mount } from "@vue/test-utils"
import Recaptcha from "@/components/Recaptcha"

describe("Recaptcha", () => {
  it("Should render", () => {
    mount(Recaptcha, {
      propsData: { sitekey: "", verify: () => {} }
    })
  })
})
