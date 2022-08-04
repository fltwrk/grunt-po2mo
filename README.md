# grunt-po2mo

[![npm](https://flat.badgen.net/npm/license/@floatwork/grunt-po2mo)](https://www.npmjs.org/package/@floatwork/grunt-po2mo)
[![npm](https://flat.badgen.net/npm/v/@floatwork/grunt-po2mo)](https://www.npmjs.org/package/@floatwork/grunt-po2mo)
[![CI](https://img.shields.io/github/workflow/status/fltwrk/grunt-po2mo/CI?style=flat-square)](https://github.com/fltwrk/grunt-po2mo/actions)

Compiles `.po` files into binary `.mo` files with `msgfmt`

This plugin is largely based on Michele Bertoli's [`grunt-po2mo`](https://www.npmjs.com/package/grunt-po2mo), with some minor differences:

- uses no third-party dependencies
- supports additional options
- code base is linted with `eslint`

## Prerequisites

You will need `msgfmt` installed in order for this task to work

### macOS

```sh
# Homebrew
$ brew install gettext
$ brew link --force gettext

# MacPorts
$ sudo port install gettext
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
$ npm install @floatwork/grunt-po2mo --save-dev
```

## Usage

```js
grunt.loadNpmTasks('@floatwork/grunt-po2mo');

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
- [floatwork_](https://github.com/fltwrk/)

## License

This work is licensed under [The MIT License](LICENSE)
