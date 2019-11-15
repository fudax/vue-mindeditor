<template lang="html">
<div class="menu-container">
  <undo-redo></undo-redo>
  <insert-box></insert-box>
  <move-box></move-box>
  <edit-del></edit-del>
  <attachment></attachment>
  <sequence-box></sequence-box>
  <progress-box></progress-box>
  <label-box></label-box>
</div>
</template>

<script>
import undoRedo from './undo_redo'
import insertBox from './insert_box'
import moveBox from './move_box'
import editDel from './edit_del'
import attachment from './attachment'
import sequenceBox from './sequence_box'
import progressBox from './progress_box'
import labelBox from './label_box'

export default {
  name: 'edit_menu',
  components: {
    undoRedo,
    insertBox,
    moveBox,
    editDel,
    attachment,
    sequenceBox,
    progressBox,
    labelBox
  }
}

</script>
