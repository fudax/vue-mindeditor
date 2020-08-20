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
import styleOperation from './styleOperation'
import fontOperation from './fontOperation.vue'

export default {
  name: 'viewMenu',
  components: {
    mold,
    theme,
    arrange,
    styleOperation,
    fontOperation
  }
}

</script>
