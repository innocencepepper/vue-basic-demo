<template>
  <div>
    <h2 class="sub-header">添加新英雄</h2>
    
    <form>
      <!-- 英雄姓名 -->
      <div class="form-group">
        <label for="name">英雄姓名</label>
        <input
          type="text"
          class="form-control"
          placeholder="英雄姓名"
          v-model="hero.name"
        />
      </div>

      <!-- 英雄性别 -->
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input
          type="text"
          class="form-control"
          placeholder="英雄性别"
          v-model="hero.gender"
        />
      </div>

      <!-- 提交按钮 -->
      <button type="submit" class="btn btn-success" @click.prevent="handleSave">
        保存
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    // 收集表单数据
    return {
      hero: {
        name: "",
        gender: "",
      },
    };
  },

  methods: {
    async handleSave() {
      const hero = this.hero;

      // 发送POST请求，保存数据
      const { status } = await axios.post("http://localhost:3000/heroes", hero);

      if (status === 201) {
        // 保存成功，跳转到列表页面
        this.$router.push("/hero-list");
      } else {
        // 保存失败，弹框提示
        alert("保存英雄失败");
      }
    },
  },
};
</script>