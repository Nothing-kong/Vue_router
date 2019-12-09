<template>
  <div>
    <div >
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header">
            <h2 >Router Basic - 01</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <router-link to='/about' class="list-group-item">About</router-link>
            <router-link to='/home' class="list-group-item">Home</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 在此显示当前路由组件 -->
              <!-- 当前: 与请求的路径匹配的路由 -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped>


</style>