# dxl-vue-imagespreview

dxl-vue-imagespreview is a picture viewer for Vue.js.


## Demo

[LiveDemo](http://p8ny46w8x.bkt.clouddn.com/index.html?2018-05-13)

## Install

```bash
$ npm install dxl-vue-imagespreview
```

## Import

### Import using module

```js
  // in ES6 modules
  import vueimagesPreview from 'dxl-vue-imagespreview'

  // in CommonJS
  const vueimagesPreview = require('dxl-vue-imagespreview')
  
  Vue.use(vueimagesPreview)
```

### Import using script tag

```html
   <script src="../node_modules/dxl-vue-imagesPreview/dist/dxl-vue-imagespreview.js"></script>
   
   // as a component reference
   <dxl-vue-imagespreview></dxl-vue-imagespreview>
```


## Usage

Work on Vue instance
```html
   <dxl-vue-imagespreview :imgData="imgData" :switch="true"></dxl-vue-imagespreview>
```
## Options

### props
  | options | type | Description | Default |
  | -----| -----| -----| -----|
  | imgData| Array | imgUrl and imgName| - |
  | switch | Boolean | Whether to enable thumbnails | true |


## License

MIT

Copyright (c) 2018-present, Joy Sang

