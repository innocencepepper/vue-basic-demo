<template>
  <div class="dialog">
    <!-- 弹出框的头部栏 -->
    <div class="dialog-top">
        <slot name="top"></slot>
    </div>

    <!-- 弹出框主体区域 -->
    <div class="dialog-body">
        <!-- 往这里插入内容 -->
        <slot name="body"></slot>
    </div>

    <!-- 弹出框底部区域 -->
    <div class="dialog-foot">
        <slot name="foot"></slot>
    </div>
  </div>
</template>

<style scoped>
.dialog {
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 20px;
    margin: 40px;
    box-shadow: 10px 10px 10px #cccccc;
}
</style>