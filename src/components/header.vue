<template lang="html">
  <header>
    <ul id="mind_tab">
      <li :class="{selected:switchShow.showEditMenu}">
        <a href="javascritp:;" class="btn-showEditMenu" @click="showMenu">思路</a>
      </li>
      <li :class="{selected:switchShow.showViewMenu}">
        <a href="javascritp:;" class="btn-showViewMenu" @click="showMenu">外观</a>
      </li>
      <li :class="{selected:switchShow.showSelectMenu}">
        <a href="javascritp:;" class="btn-showSelectMenu" @click="showMenu">视图</a>
      </li>
    </ul>
    <div id="mind_tab-content">
      <div class="mind-tab-panel" v-show="switchShow.showEditMenu">
        <edit-menu></edit-menu>
      </div>
      <div class="mind-tab-panel" v-show="switchShow.showViewMenu">
        <view-menu></view-menu>
      </div>
      <div class="mind-tab-panel" v-show="switchShow.showSelectMenu">
        <select-menu></select-menu>
      </div>
    </div>
  </header>
</template>

<script>
  import editMenu from './top_menu/edit_menu/edit_menu'
  import viewMenu from './top_menu/view_menu/view_menu'
  import selectMenu from './top_menu/select_menu/select_menu'
  export default {
    name: 'headerVue',
    data() {
      return {
        switchShow: {
          showEditMenu: true,
          showViewMenu: false,
          showSelectMenu: false
        }
      }
    },
    components: {
      editMenu,
      viewMenu,
      selectMenu
    },
    methods: {
      showMenu: function (e) {
        for (var variable in this.switchShow) {
          if (this.switchShow.hasOwnProperty(variable)) {
            this.switchShow[variable] = false
          }
        }
        this['switchShow'][e.target.className.replace('btn-', '')] = true
      }
    }
  }

</script>

<style lang="scss">
  @import "../style/header.scss";

</style>
