<template>
  <header class="header">
     <div class="icon-area left">
       <span
         :class="'iconfont icon-' + leftIcon"
         @click="goBackPage"
       ></span>
     </div>
     <h1>{{ title }}</h1>
     <div class="icon-area right">
      <span
        v-if="right && name === 'Detail'"
        :class="'iconfont icon-' + rightIcon"
        @click="handleFollowClick"
      ></span>
      <router-link 
        :to="rightPath"
        v-else-if="right && name !== 'Detail'"
      >
        <span :class="'iconfont icon-' + rightIcon"></span> 
      </router-link>
     </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { RouteLocationNormalizedLoaded, Router, useRoute, useRouter } from "vue-router";
import { Store, useStore } from "vuex";
import { useFollowedCheck, useNewsFollow, useRouteInfo } from "../../compositions";
import { IHeaderInfo } from '../../typings';


export default defineComponent({
  name: 'Header',
  setup () {
    const router: Router = useRouter()
    const route: RouteLocationNormalizedLoaded = useRoute();
    const state: IHeaderInfo = reactive({
      name: 'Home',
      title: '新闻头条',
      left: false,
      right: true,
      leftIcon: '', 
      rightIcon: 'mine',
      leftPath: '',
      rightPath: '/mynews'
    });

    watch(
      () => route.name,
      (routeName) => {
        const routeInfo: IHeaderInfo | undefined = useRouteInfo(routeName as string)
        Object.assign(state, routeInfo)
      }
    )

    const goBackPage = () => {
      router.go(-1)
    }

    return {
      ...toRefs(state),
      goBackPage
    }
  }
})
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .44rem;
    background-color: #cf5f55;
    color: #fff;

    h1 {
      text-align: center;
      line-height: .44rem;
      font-size: .18rem;
    }

    .icon-area {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: .44rem;
      height: .44rem;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }

      a {
        color: #fff;
      }

      .icon-mine {
        font-size: .25rem;
      }

      .iconfont.icon-arrow-right {
        vertical-align: .025rem;
      }

      .icon-star-o,
      .icon-star-full {
        font-size: .22rem;
        vertical-align: .025rem;
      }

      .icon-star-full {
        color: #F6BF4E;
      }
    }
  }
</style>