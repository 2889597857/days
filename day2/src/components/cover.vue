<template>
  <div id="cover">
    <div class="cover">
      <p>考试结束</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cover",
    props: {
      width: Number,
      height: Number
    }
  };
</script>

<style lang="scss" scoped>
  #cover {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    .cover {
      width: 400px;
      height: 200px;
      background-color: #fff;
      position: relative;
      top: 20%;
      left: 50%;
      transform: translate(-50%);
      text-align: center;
      p {
        font-size: 20px;
        font-weight: 600px;
        line-height: 200px;
      }
    }
  }
</style>