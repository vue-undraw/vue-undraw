<template>
  <svg data-name="blog post" viewBox="0 0 627 759" :height="height" xmlns="http://www.w3.org/2000/svg" ><defs><linearGradient id="a" x1="313.72" y1="759" x2="313.72" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity=".25"/><stop offset=".54" stop-color="gray" stop-opacity=".12"/><stop offset="1" stop-color="gray" stop-opacity=".1"/></linearGradient><linearGradient id="b" x1="313.72" y1="455.23" x2="313.72" y2="213.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3" stop-opacity=".25"/><stop offset=".54" stop-color="#b3b3b3" stop-opacity=".1"/><stop offset="1" stop-color="#b3b3b3" stop-opacity=".05"/></linearGradient></defs><path fill="url(#a)" d="M0 0h627.45v759H0z"/><path fill="#fff" d="M7.58 5.49h612.28v736.45H7.58z"/><path :fill="accentColor" d="M50.71 52.74h240.74v19.72H50.71zM50.71 513.37h240.74v19.72H50.71z"/><path fill="#e0e0e0" d="M50.71 92.18h526.03v19.72H50.71zM50.71 131.63h526.03v19.72H50.71z"/><path fill="url(#b)" d="M46.44 213.09H581v242.14H46.44z"/><path :fill="primaryColor" d="M51.18 216.78h526.03v231.2H51.18z"/><path fill="#e0e0e0" d="M50.71 637.59h526.03v19.72H50.71zM50.71 678.34h526.03v19.72H50.71zM50.71 597.05h526.03v19.72H50.71zM50.71 556.51h526.03v19.72H50.71z"/></svg>
</template>

<script>
export default {
  name: 'UndrawBlogPost',
  props: {
    /**
     * Sets the primary color of the illustration
     */
    primaryColor: {
      type: String,
      default: '#6c63ff'
    },
    /**
     * Sets the accent color of the illustration
     */
    accentColor: {
      type: String,
      default: '#64ffda'
    },
    /** Sets height of the illustration
     */
    height: {
      type: String,
      default: '100'  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
