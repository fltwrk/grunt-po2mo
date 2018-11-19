# grunt-po2mo

[![npm](https://flat.badgen.net/npm/license/@fltwk/grunt-po2mo)](https://www.npmjs.org/package/@fltwk/grunt-po2mo)
[![npm](https://flat.badgen.net/npm/v/@fltwk/grunt-po2mo)](https://www.npmjs.org/package/@fltwk/grunt-po2mo)
[![CircleCI](https://flat.badgen.net/circleci/github/fltwk/grunt-po2mo)](https://circleci.com/gh/fltwk/grunt-po2mo)
[![David](https://flat.badgen.net/david/dev/fltwk/grunt-po2mo)](https://david-dm.org/fltwk/grunt-po2mo?type=dev)

Compiles `.po` files into binary `.mo` files with `msgfmt`

This plugin is largely based on Michele Bertoli's [`grunt-po2mo`](https://www.npmjs.com/package/grunt-po2mo), with some minor differences:

- uses `child_process` instead of `sync-exec`
- supports additional options
- code base is linted with `eslint`

## Prerequisites

You will need `msgfmt` installed in order for this task to work

### macOS

```sh
$ brew install gettext
$ brew link --force gettext
```

### Linux

```sh
# Debian
$ sudo apt-get install gettext

# Fedora
$ dnf install gettext-devel
```

## Installation

```sh
$ npm install @fltwk/grunt-po2mo --save-dev
```

## Usage

```js
grunt.loadNpmTasks('@fltwk/grunt-po2mo');

grunt.initConfig({
  po2mo: {
    files: {
      src: 'languages/de_AT.po',
      dest: 'languages/de_AT.mo',
    }
  }
});

grunt.registerTask('default', ['po2mo']);
```

### Options

#### `options.alignment`

Type: `int`  
Default: `1`  

Align strings to NUMBER bytes

#### `options.checkAccelerators`

Type: `string|null`  
Default: `null`  

Check presence of keyboard accelerators for menu items

#### `options.checkCompatibility`

Type: `bool`  
Default: `false`  

Check that GNU `msgfmt` behaves like X/Open `msgfmt`

#### `options.checkDomain`

Type: `bool`  
Default: `false`  

Check for conflicts between domain directives and the `--output-file` option

#### `options.checkFormat`

Type: `bool`  
Default: `false`  

Check language dependent format strings

#### `options.checkHeader`

Type: `bool`  
Default: `false`  

Verify presence and contents of the header entry

#### `options.endianness`

Type: `string|null`  
Default: `null`  

Write out 32-bit numbers in the given byte order (big or little, default depends on platform)

#### `options.noHash`

Type: `bool`  
Default: `false`  

Binary file will not include the hash table 

#### `options.useFuzzy`

Type: `bool`  
Default: `false`.  

Use fuzzy entries in output

#### `options.deleteSrc`

Type: `bool`  
Default: `false`  

Will delete the source `.po` file after conversion

## Authors

- [MicheleBertoli](https://github.com/MicheleBertoli/)
- [floatwork_](https://github.com/fltwk/)

## License

This work is licensed under [The MIT License](LICENSE)
