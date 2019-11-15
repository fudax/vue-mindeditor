<template>
<div class="main-container">
  <header-menu></header-menu>
  <mainEditor></mainEditor>
  <navigator></navigator>
</div>

</template>

<script>
import headerMenu from '@/components/header'
import mainEditor from '@/components/main_editor/main_editor'
import navigator from '@/components/main_editor/navigator'

export default {
  name: 'editor',
  components: {
    headerMenu,
    mainEditor,
    navigator
  },
}

</script>
