<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/hot-news">热点新闻</router-link>
      </li>
      <li>
        <router-link to="/music">音乐</router-link>
      </li>
    </ul>

    <!-- 顶层的页面容器组件 -->
    <router-view class="box"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
.box {
  border: 1px solid red;
}
</style>
