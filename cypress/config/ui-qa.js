const { defineSonfiug, defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')

const e2e = {
    baseUrl: "https://front.serverest.dev/",
    env:{
        username: '',
        password: ''
    }
}
module.exports = defineConfig({
    ...baseConfig,
    e2e
})