<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>

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

      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">
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
    };
  },
  methods: {
    handleAdd() {
      this.$http.post("/heroes", this.formData).then((res) => {
        const { status } = res;
        if (status === 201) {
          // 判断添加是否成功
          // 添加成功，跳转到英雄列表
          this.$router.push({ name: "heroes" });
        } else {
          alert("添加失败");
        }
      });
    },
  },
};
</script>