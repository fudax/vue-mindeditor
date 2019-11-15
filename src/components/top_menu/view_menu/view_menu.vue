<template lang="">
<div class="menu-container">
  <mold></mold>
  <theme></theme>
  <arrange></arrange>
  <styleOperation></styleOperation>
  <fontOperation></fontOperation>
</div>

</template>

<script>
import mold from './mold'
import theme from './theme'
import arrange from './arrange'
import styleOperation from './style_operation'
import fontOperation from './font_operation.vue'

export default {
  name: 'view_menu',
  components: {
    mold,
    theme,
    arrange,
    styleOperation,
    fontOperation
  }
}

</script>
