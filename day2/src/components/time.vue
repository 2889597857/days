<template>
  <div id="time">
    <div class="time">
      <span class="minute">{{time.minute}}</span><span>:</span><span class="scend">{{time.second}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: {
          minute: "15",
          second: "00"
        },
        realTime: {},
        flag: true
      };
    },
    mounted() {
      let a = JSON.parse(sessionStorage.getItem("time"));
      if (a) {
        this.time = a;
        this.start();
      } else {
        this.start();
      }
    },
    methods: {
      start() {
        if (this.time.second == 0 && this.time.minute >= 1) {
          this.time.second = 59;
          this.time.minute--;
        }

        const interval = setInterval(() => {
          this.countDown(interval);
        }, 1000);
      },
      countDown(interval) {
        if (this.time.second !== 0) {
          this.time.second--;
        } else {
          this.time.second = 59;
          this.time.minute--;
        }
        if (this.time.second == 0 && this.time.minute == 0) {
          clearInterval(interval);
        }
      }
    }
  };
  window.addEventListener("beforeunload", () => {
    let a = document.querySelector(".minute").innerText;
    let b = document.querySelector(".scend").innerText;
    if (a != 0 && b != 0) {
      sessionStorage.setItem(
        "time",
        JSON.stringify({
          minute: a,
          second: b
        })
      );
    }
  });
</script>

<style lang="scss" scoped>
  #time {
    width: 100%;
    height: 40px;
    margin: 10px auto;
    .time {
      text-align: center;
      line-height: 40px;
      font-size: 30px;
      font-weight: 600;
      margin: 0 5px;
    }
  }
</style>