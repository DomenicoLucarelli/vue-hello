const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Andrea/Davide vi metto lo sfondo scuro perchè vi voglio bene',
        image:'https://www.focus.it/images/2021/04/30/Rondine-in-volo-orig.jpeg'
      }
    }
  }).mount('#app')