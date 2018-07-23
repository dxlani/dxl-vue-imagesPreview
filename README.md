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
<template>
  <div id="app">
    <dxl-vue-imagespreview :imgData="imgUrl" :switch="true" v-if="imgUrl"></dxl-vue-imagespreview>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imgUrl: [{
          url:'http://p8ny46w8x.bkt.clouddn.com/test1.jpg',
          name: 'test1.jpg'
        },
        {
          url: 'http://p8ny46w8x.bkt.clouddn.com/test2.jpg',
          name: 'test2.jpg'
        }, {
          url: 'http://p8ny46w8x.bkt.clouddn.com/test3.jpg',
          name: 'test3.jpg'
        },
        {
          url: 'http://p8ny46w8x.bkt.clouddn.com/test4.jpg',
          name: 'test4.jpg'
        }]
    }
  }
}
</script>
## Options

### props
  | options | type | Description | Default |
  | -----| -----| -----| -----|
  | imgData| Array | imgUrl and imgName| - |
  | switch | Boolean | Whether to enable thumbnails | true |


## License

MIT

Copyright (c) 2018-present, dingxiaolin
