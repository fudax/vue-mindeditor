<template >
<div class="do-group">
  <p class="undo menu-btn" :disabled="disabled1">
    <i class="tab-icons"></i>
  </p>
  <p class="redo menu-btn" :disabled="disabled2">
    <i class="tab-icons"></i>
  </p>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'undo_redo',
  data() {
    return {
      disabled1: false,
      disabled2: false,
    }
  },

}

</script>
