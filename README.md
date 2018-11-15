# grunt-po2mo

[![npm](https://flat.badgen.net/npm/license/@fltwk/grunt-po2mo)](https://www.npmjs.org/package/@fltwk/grunt-po2mo)
[![npm](https://flat.badgen.net/npm/v/@fltwk/grunt-po2mo)](https://www.npmjs.org/package/@fltwk/grunt-po2mo)
[![David](https://flat.badgen.net/david/dev/fltwk/grunt-po2mo)](https://david-dm.org/fltwk/grunt-po2mo?type=dev)

Compiles `.po` files into binary `.mo` files with `msgfmt`

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
    options: {
      deleteSrc: true
    },
    files: {
      src: 'languages/de_AT.po',
      dest: 'languages/de_AT.mo',
    },
  }
});

grunt.registerTask('default', ['po2mo']);
```

### Options

#### `options.deleteSrc`

Type: `bool`  
Default value: `false`  

Will delete the source `.po` file.

## Authors

- [MicheleBertoli](https://github.com/MicheleBertoli/)
- [floatwork_](https://github.com/fltwk/)

## License

This work is licensed under [The MIT License](LICENSE)
