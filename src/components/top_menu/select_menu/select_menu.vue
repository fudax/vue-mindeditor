<template lang="">
  <div class="menu-container">
   <expand></expand>
   <selection></selection>
  </div>
</template>

<script>
import expand from './expand'
import selection from './selection'

export default {
  name:'select_menu',
  components:{
    expand,
    selection
  }
}
</script>
