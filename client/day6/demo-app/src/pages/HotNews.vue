<template>
  <div>
    热点新闻版块

    <Dialog>
      <!-- 以下内容将插入Dialog组件的name为top的插槽中 -->
      <template v-slot:top>
        <h4>用户登录</h4>
      </template>

      <!-- 以下内容将插入Dialog组件的name为body的插槽中 -->
      <template v-slot:body>
        <div>
          <label for="username">账号：</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label for="password">密码：</label>
          <input type="text" name="password" />
        </div>
      </template>

      <!-- 以下内容将插入Dialog组件的name为foot的插槽中 -->
      <template v-slot:foot>
        <div>
          <button>登录</button>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog.vue";

export default {
  components: {
    Dialog,
  },
};
</script>