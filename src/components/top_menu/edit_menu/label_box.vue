<template lang="">
<div class="label-group">
  <el-input placeholder="请选择日期" icon="edit" v-model="label" :on-icon-click="handleIconClick">
  </el-input>
  <div class="dropdown">
    <ul></ul>
  </div>
</div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'label_box',
  data() {
    return {
      label: ''
    }
  },
  computed:{
    ...mapState({

    })
  },
  methods: {
    handleIconClick(ev) {
      // console.log(ev);
    }
  }
}

</script>
