import vueimagesPreview from './dxl-vue-imagespreview'

const imagesPreview = {
  install (Vue, options) {
    Vue.component(vueimagesPreview.name, vueimagesPreview)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(imagesPreview)
}

export default imagesPreview
