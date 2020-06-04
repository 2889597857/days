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
          minute: "05",
          second: "00"
        },
        realTime: {},
        interval: null
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
        this.interval = setInterval(() => {
          this.countDown();
        }, 1000);
      },
      ClearInterval() {
        clearInterval(this.interval);
      },
      countDown() {
        if (this.time.second !== 0) {
          this.time.second--;
        } else {
          this.time.second = 59;
          this.time.minute--;
        }
        if (this.time.second == 0 && this.time.minute == 0) {
          this.ClearInterval();
          this.$parent.timeOut();
          console.log(this.$parent);
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
    } else {
      sessionStorage.removeItem("time");
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
  @media screen and (max-width: 600px) {
    #time {
      height: 20px;
      .time {
        line-height: 20px;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
</style>