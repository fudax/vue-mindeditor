<template lang="html">
<div class="mind-editor"></div>
</template>

<script>
import {
  mapActions,
  mapMutations,
  mapGetters
} from 'vuex'
export default {
  mounted() {
    var Editor = require('../../script/editor');
    var el = this.$el;
    var editor = window.editor = new Editor(el);
    this.setEditor(editor);
    if (window.localStorage.mindText) {
      editor.minder.importJson(JSON.parse(window.localStorage.mindText));
    }

    editor.minder.on('contentchange', function () {
      window.localStorage.mindText = JSON.stringify(editor.minder.exportJson());
    });

    window.minder = window.km = editor.minder;
    this.setMinder(editor.minder);
    this.executeCallback();
  },
  computed: {
    ...mapGetters([
      'minder',
    ])
  },
  methods: {
    ...mapActions([
      'executeCallback'
    ]),
    ...mapMutations([
      'setMinder',
      'setEditor'
    ])
  },
}
</script>

<style lang="scss">
  @import "../../style/editor.scss";
</style>
