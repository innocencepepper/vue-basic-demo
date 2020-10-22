<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>

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
import api from "@/apis/api";

export default {
  data() {
    // 收集表单数据
    return {
      hero: {
        name: "",
        gender: "",
      },
      heroId: "",
    };
  },

  created() {
    // 获取动态路由中传递的英雄id参数
    const heroId = this.$route.params.id;

    // 将英雄id参数保存到data中
    this.heroId = heroId;

    // 加载id对应的英雄数据，并回显到表单中s
    this.loadHeroById(heroId);
  },

  methods: {
    async loadHeroById(id) {
      // 2种不同的 axios 调用API的方式
      // const { status, data } = await this.$http.get("/heroes/" + id);
      const { status, data } = await api.getHeroById(id);

      if (status === 200) {
        // this.hero.name = data.name
        // this.hero.gender = data.gender
        this.hero = data;
      }
    },

    async handleSave() {
      const hero = this.hero;

      // 发送PUT请求，更新数据
      // const { status } = await this.$http.put(`/heroes/${this.heroId}`, hero);
      const { status } = await api.updateHero(this.heroId, hero);

      if (status === 200) {
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