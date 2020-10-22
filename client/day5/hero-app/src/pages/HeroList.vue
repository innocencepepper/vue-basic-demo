<template>
  <div>
    <h2 class="sub-header">英雄列表管理</h2>

    <!-- 添加按钮 -->
    <a class="btn btn-success" @click.prevent="gotoAddForm">添加新英雄</a>

    <!-- 数据表格 -->
    <div class="table-responsive">
      <table class="table table-striped">
        <!-- 表头 -->
        <thead>
          <tr>
            <th>#</th>
            <th>英雄名称</th>
            <th>英雄性别</th>
            <th>操作</th>
          </tr>
        </thead>

        <!-- 表格数据行 -->
        <tbody>
          <tr v-for="(item, index) in heroes" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <a href="#" @click.prevent="gotoEditForm(item.id)">编辑</a>
              &nbsp;&nbsp;
              <a href="#" @click.prevent="handleRemove(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入网络请求模块 apis/api
import api from "@/apis/api";

export default {
  created() {
    // 进入页面时，调用后端获取列表数据
    this.loadData();
  },

  data() {
    return {
      heroes: [],
    };
  },

  methods: {
    async loadData() {
      try {
        // 发送GET请求
        //（记得先启动 json-server，并使用 db-hero.json 作为数据源文件）
        // const { status, data } = await this.$http.get("/heroes");

        const { status, data } = await api.getHeroList();

        if (status === 200) {
          // 请求成功，更新响应式数据 heroes
          this.heroes = data;
        }
      } catch (e) {
        alert("网络请求错误", e.message);
      }
    },

    // 添加按钮的事件处理函数：跳转到添加表单页面
    gotoAddForm() {
      this.$router.push("/add-hero");
    },

    // 删除英雄，需要传入 id
    async handleRemove(id) {
      // 弹出删除确认框
      const ok = confirm("确认删除英雄吗？");

      if (ok) {
        // 发送请求，进行特定id的记录删除
        const { status } = await api.removeHeroById(id);

        if (status === 200) {
          // 删除成功，重新加载最新数据
          this.loadData();
        } else {
          alert("删除失败");
        }
      }
    },

    gotoEditForm(id) {
      this.$router.push(`/edit-hero/${id}`);
    },
  },
};
</script>