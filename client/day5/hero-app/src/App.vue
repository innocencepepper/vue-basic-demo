<template>
  <div id="app">
    <!-- 黑色的顶部栏 -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">
        <!-- 菜单栏 -->
        <app-menu></app-menu>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主体部分 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入顶部栏组件
import AppHeader from "@/components/AppHeader.vue";
// 引入菜单栏组件
import AppMenu from "@/components/AppMenu.vue";

export default {
  name: "App",

  // 注册组件
  components: {
    AppHeader,
    AppMenu
  },
};
</script>

<style>
</style>
