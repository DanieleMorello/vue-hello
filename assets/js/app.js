const { createApp } = Vue

createApp({
    /* option object */
  data() {
    return {
      message: 'Hello Vue!',
      url:'https://picsum.photos/200/300'
    }
  }
}).mount('#app')