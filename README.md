# Gettext loader for WebPack

Loads gettext .po/.pot/.mo files into JavaScript as precompiled functions using
[gettext-to-messageformat] and [messageformat].


## Installation

```sh
npm install --save messageformat-po-loader
```
or
```sh
yarn add messageformat-po-loader
```


## Usage

#### WebPack configuration

```js
{
  test: [/\.pot?$/, /\.mo$/],
  loader: require.resolve('messageformat-po-loader'),
  options: {
    biDiSupport: false,
    defaultCharset: null,
    defaultLocale: 'en',
    forceContext: false,
    pluralFunction: null,
    verbose: false
  }
}
```

The default option values are shown, and are not required. Most options are
passed on to [gettext-to-messageformat] (see there for their documentation);
`defaultLocale` is the fallback used by [messageformat] if not set in the .po
file `language` header comment, and `biDiSupport` enables bi-directional text
support in messageformat.


#### messages.po

```pot
# Examples from http://pology.nedohodnik.net/doc/user/en_US/ch-poformat.html
msgid ""
msgstr ""
"Content-Type: text/plain; charset=UTF-8\n"
"Language: pl\n"
"Plural-Forms: nplurals=3; plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"

msgid "Time: %1 second"
msgid_plural "Time: %1 seconds"
msgstr[0] "Czas: %1 sekunda"
msgstr[1] "Czas: %1 sekundy"
msgstr[2] "Czas: %1 sekund"

msgid "%1 took %2 ms to complete."
msgstr "Trebalo je %2 ms da se %1 završi."

msgid "%s took %d ms to complete."
msgstr "Trebalo je %2$d ms da se %1$s završi."

msgid "No star named %(starname)s found."
msgstr "Nema zvezde po imenu %(starname)s."
```


#### example.js

```js
import messages from './messages.po'

messages['%s took %d ms to complete.'](['TASK', 42])
// 'Trebalo je 42 ms da se TASK završi.'

messages['No star named %(starname)s found.']({ starname: 'Chi Draconis' })
// 'Nema zvezde po imenu Chi Draconis.'
```


[gettext-to-messageformat]: https://github.com/eemeli/gettext-to-messageformat
[messageformat]: https://messageformat.github.io/
