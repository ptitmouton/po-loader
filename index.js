const { parsePo, parseMo } = require('gettext-to-messageformat')
const loaderUtils = require('loader-utils')
const MessageFormat = require('messageformat')

module.exports = function (input) {
  const parse = /\.mo(\?|$)/.test(this.request) ? parseMo : parsePo
  const options = loaderUtils.getOptions(this)
  const { headers, pluralFunction, translations } = parse(input, options)
  const lc = headers.language || options.defaultLocale || 'en'
  const mfOpts = pluralFunction ? { [lc]: pluralFunction } : lc
  const mf = new MessageFormat(mfOpts)
  if (options.biDiSupport) mf.setBiDiSupport()
  return mf.compile(translations).toString('module.exports')
}
