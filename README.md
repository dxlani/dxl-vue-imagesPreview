# dxl-vue-imagesPreview

dxl-vue-imagesPreview is a picture viewer for Vue.js.


## Demo

[LiveDemo](http://p8ny46w8x.bkt.clouddn.com/index.html?2018-05-13)

## Install

```bash
$ npm install dxl-vue-imagesPreview
```

## Import

### Import using module

```js
  // in ES6 modules
  import vueimagesPreview from 'dxl-vue-imagesPreview'

  // in CommonJS
  const vueimagesPreview = require('dxl-vue-imagesPreview')
  
  Vue.use(vueimagesPreview)
```

### Import using script tag

```html
   <script src="../node_modules/dxl-vue-imagesPreview/dist/dxl-vue-imagesPreview.js"></script>
   
   // as a component reference
   <dxl-vue-imagesPreview></dxl-vue-imagesPreview>
```


## Usage

Work on Vue instance
```html
   <dxl-vue-imagesPreview :imgData="imgData" :switch="true"></dxl-vue-imagesPreview>
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

