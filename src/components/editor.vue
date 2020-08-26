<template>
<div class="main-container">
  <header-menu></header-menu>
  <main-editor></main-editor>
  <navigator></navigator>
</div>

</template>

<script>
import headerMenu from '@/components/header'
import mainEditor from '@/components/main/mainEditor'
import navigator from '@/components/main/navigator'

export default {
  name: 'editor',
  components: {
    headerMenu,
    mainEditor,
    navigator
  },
}

</script>
