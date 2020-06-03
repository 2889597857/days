<template>
  <div class="tishi">
    <div
      v-for="(item, index) in tui"
      :key="index"
      :class="[{external2:item.trueAnswer ? true : false},{external:item.trueAnswer ? false : true}]"
      @click="goto(index)"
    >
      <div class="interior"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tishi",
    props: {
      tui: Array
    },
    data() {
      return {
        scrollWidth: Number
      };
    },
    mounted() {
      let csg = document.body.scrollWidth;
      if (csg >= 600) {
        this.scrollWidth = 84;
      } else {
        this.scrollWidth = 135;
      }
    },
    methods: {
      goto(x) {
        console.log(x);
        document.documentElement.scrollTop = x * this.scrollWidth + 60;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tishi {
    width: 200px;
    display: grid;
    grid-template-columns: repeat(4, 50px);
    grid-auto-flow: row dense;
    grid-gap: 5px;
    cursor: pointer;
    .external {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      background: #ebf5fc;
      box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
        3px 3px 5px rgba(0, 0, 0, 0.1);
      .interior {
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1),
          inset 3px 3px 5px rgba(0, 0, 0, 0.1);
      }
    }
    .external2 {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      background: #909399;
      box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
        3px 3px 5px rgba(0, 0, 0, 0.1);
    }
  }
</style>