<template>
  <div>
    <h1>音乐版块</h1>
    <ul>
      <li>
        <router-link to="/music/pop">流行</router-link>
      </li>
      <li><router-link to="/music/rock">摇滚</router-link></li>
    </ul>

    <router-view class="box"></router-view>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid blue;
}
</style>