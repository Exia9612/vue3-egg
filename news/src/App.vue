<template>
  <div class="container">
    <my-header />
    <!-- Component：要渲染的组件 -->
    <router-view v-slot="{ Component }">
      <!-- include - string | RegExp | Array。只有名称匹配的组件会被缓存 -->
      <keep-alive include="Home">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import MyHeader from './components/Header/index.vue';
export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>
