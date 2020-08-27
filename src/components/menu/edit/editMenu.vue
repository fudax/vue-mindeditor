<template lang="html">
<div class="menu-container">
  <expand></expand>
  <selection></selection>
  <insert-box></insert-box>
  <move-box></move-box>
  <edit-del></edit-del>
  <sequence-box></sequence-box>
  <progress-box></progress-box>
</div>
</template>

<script>
import insertBox from './insertBox'
import moveBox from './moveBox'
import editDel from './editDel'
import sequenceBox from './sequenceBox'
import progressBox from './progressBox'
import expand from './expand'
import selection from './selection'

export default {
  name: 'editMenu',
  components: {
    insertBox,
    moveBox,
    editDel,
    sequenceBox,
    progressBox,
    expand,
    selection
  }
}
</script>
