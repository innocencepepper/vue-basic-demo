<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- 
            <li class="active">
                <a href="#">Overview <span class="sr-only">(current)</span></a>
            </li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li> 
        -->
      <router-link tag="li" active-class to="/hero-list">
        <a>英雄管理</a>
      </router-link>

      <router-link tag="li" active-class to="/weapen-list">
        <a>武器管理</a>
      </router-link>
      
      <router-link tag="li" active-class to="/armor-list">
        <a>装备管理</a>
      </router-link>
    </ul>
  </div>
</template>