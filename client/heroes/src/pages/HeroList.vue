<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>

    <router-link class="btn btn-success" to="/add-hero">添加</router-link>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <router-link :to="{ name: 'edit-hero', params: { id: item.id } }">
                编辑
              </router-link>
              <a href="#" @click.prevent="handleDelete(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },

  created() {
    this.loadData();
  },

  methods: {
    loadData() {
      this.$http.get("/heroes").then((res) => {
        console.log(res);
        const { status, data } = res;
        if (status === 200) {
          this.list = data;
        }
      });
    },

    handleDelete(id) {
      if (!confirm("是否确认删除？")) {
        return;
      }
      this.$http
        .delete(`/heroes/${id}`)
        .then((res) => {
          if (res.status === 200) {
            // 删除成功，重新渲染列表
            this.loadData();
          } else {
            alert("删除失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>