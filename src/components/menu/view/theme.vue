<template lang="">
<div class="theme-group">
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
            <el-dropdown-item class="theme-3 dropdown-item theme-icons" command="天空蓝">天空蓝</el-dropdown-item>
            <el-dropdown-item class="theme-4 dropdown-item theme-icons" command="文艺绿">文艺绿</el-dropdown-item>
            <el-dropdown-item class="theme-5 dropdown-item theme-icons" command="脑残粉">脑残粉</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</div>

</template>

<script>
export default {
  name: "theme",
  data() {
    return {
      theme_index: 1,
      current_theme: "经典",
      ulActive: false,
      items: [
        { text: "经典" },
        { text: "天空蓝" },
        { text: "文艺绿" },
        { text: "脑残粉" },
      ],
    };
  },

  computed: {
    class_theme_index: function () {
      return "theme-" + this.theme_index;
    },
  },

  methods: {
    handleCommand(command) {
      this.current_theme = command;
      alert("暂时未实现，敬请期待！");
    },
  },
};
</script>