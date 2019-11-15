<template lang="">
<div class="theme-group">
  <!--   <div class="dropdown-toggle theme-icons menu-btn" :class="class_theme_index" @click="toggle">
<a href="javascript:;">{{items[theme_index].text}}</a>
</div>
<ul class="dropdown-list" v-show="ulActive">
  <li class="dropdown-item theme-icons menu-btn " v-for="(item, index ) in items" :class="`theme-`+ (index + 1)">
    <a href="javascript:;">{{item.text}}</a>
  </li>
</ul> -->

  <el-row class="block-col-1">
    <el-col :span="24">
      <!-- <span class="demonstration">click 激活</span> -->
      <el-dropdown trigger="click" :hide-on-click="true" class="dropdown-toggle theme-icons menu-btn" @command="handleCommand">
        <span class="el-dropdown-link ">
        {{current_theme}}
      <i class="el-icon-caret-bottom el-icon--right"></i>
    </span>
        <el-dropdown-menu slot="dropdown" class="theme-dropdown-list">
          <el-dropdown-item class="theme-1 dropdown-item theme-icons" command="经典">经典</el-dropdown-item>
          <el-dropdown-item class="theme-2 dropdown-item theme-icons" command="2" 蓝</el-dropdown-item>
            <el-dropdown-item class="theme-3 dropdown-item theme-icons" command="天空蓝">天空蓝</el-dropdown-item>
            <el-dropdown-item class="theme-4 dropdown-item theme-icons" command="文艺绿">文艺绿</el-dropdown-item>
            <el-dropdown-item class="theme-5 dropdown-item theme-icons" command="脑残粉">脑残粉</el-dropdown-item>
            <el-dropdown-item class="theme-6 dropdown-item theme-icons" command="6"></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</div>

</template>

<script>
export default {
  name: 'theme',
  data() {
    return {
      theme_index: 1,
      current_theme:'经典',
      ulActive: false,
      items: [
        { text: '经典' },
        { text: '天空蓝' },
        { text: '文艺绿' },
        { text: '脑残粉' }
      ]
    }
  },
  computed: {
    // items: function () {
    //   var list = [];
    //   for (var i = 1; i <= 18; i++) {
    //     list.push(1)
    //   }
    //   return list;
    // },

    class_theme_index: function () {
      return 'theme-' + this.theme_index
    }
  },
  methods: {
    handleCommand(command) {
      // console.log(command);
      this.current_theme = command;
      // this.$message('click on item ' + command);
    },
    // toggle() {
    //   this.ulActive = !this.ulActive;
    // },
  }
}

</script>
