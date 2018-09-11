<template>
  <svg data-name="mobile" :height="height" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 392.94 715"><defs><linearGradient id="014c1da1-8fbc-4b78-b7b6-4af1b8694bf8" x1="196.47" y1="715" x2="196.47" gradientUnits="userSpaceOnUse"><stop offset="0.01" stop-color="gray" stop-opacity="0.25"/><stop offset="0.54" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient></defs><title>mobile</title><rect width="392.94" height="715" rx="24.73" ry="24.73" fill="url(#014c1da1-8fbc-4b78-b7b6-4af1b8694bf8)"/><rect x="9.05" y="9.95" width="374.84" height="688.43" rx="24.73" ry="24.73" fill="#fff"/><rect x="51.37" y="58.61" width="290.2" height="560.24" :fill="primaryColor"/><ellipse cx="196.47" cy="659.21" rx="23.14" ry="23.74" fill="#dbdbdb"/><ellipse cx="152.51" cy="32.5" rx="4.63" ry="4.75" fill="#dbdbdb"/><rect x="173.33" y="28.94" width="71.73" height="7.12" rx="1.5" ry="1.5" fill="#dbdbdb"/></svg>
</template>

<script>
export default {
  name: 'UndrawMobile',
  props: {
    /**
     * Sets the primary color of the illustration
     */
    primaryColor: {
      type: String,
      default: '#6c63ff'
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
