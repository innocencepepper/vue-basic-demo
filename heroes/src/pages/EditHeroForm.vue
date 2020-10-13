<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>

    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input
          type="text"
          class="form-control"
          placeholder="英雄名称"
          v-model="formData.name"
        />
      </div>

      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input
          type="text"
          class="form-control"
          placeholder="英雄性别"
          v-model="formData.gender"
        />
      </div>

      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">
        提交
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 绑定到表单元素
      formData: {
        name: "",
        gender: "",
      },
      heroId: -1,
    };
  },

  created() {
    // 获取路由参数
    this.heroId = this.$route.params.id;

    console.log(this.heroId);

    // 调用 获取英雄对象的方法
    this.loadData();
  },

  methods: {
    // 根据id，获取英雄对象
    loadData() {
      this.$http
        .get(`/heroes/${this.heroId}`)
        .then((res) => {
          if (res.status === 200) {
            this.formData = res.data;
          }
        });
    },

    handleEdit() {
      this.$http
        .put(`/heroes/${this.heroId}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({ name: "heroes" });
          } else {
            alert("修改失败");
          }
        });
    },
  },
};
</script>