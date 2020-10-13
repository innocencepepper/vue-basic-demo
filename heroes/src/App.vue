<template>
  <div id="app">
    <!-- 顶部栏 -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <side-bar></side-bar>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 路由视图 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    SideBar,
  },
};
</script>

<style>
</style>
