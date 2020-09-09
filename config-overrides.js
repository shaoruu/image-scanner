const { override } = require('customize-cra')

module.exports = override(
  (() => (config) => {
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader', options: { inline: 'fallback' } }
    })

    config.output.globalObject = 'this'

    return config
  })()
)
