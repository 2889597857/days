<template>
  <div id="app">
    <div class="question">
      <HelloWorld
        v-for="(item, index) in question"
        :key="index"
        :msg="item"
      />
    </div>
    <div class="submit">
      <countDown ref="coontDown" />
      <tit
        :tui="question"
        class="countDown"
      />
      <div class="gongneng">
        <button @click="save">暂存</button>
        <button @click="result">提交</button>
        <button @click="top">顶部</button>
      </div>
    </div>
    <cover v-show="cover" />
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";
  import tit from "./components/tishi.vue";
  import countDown from "./components/time.vue";
  import cover from "./components/cover.vue";
  export default {
    name: "App",
    components: {
      HelloWorld,
      tit,
      countDown,
      cover
    },
    data() {
      return {
        question: [
          {
            id: "1",
            question: "我是问题1",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "2",
            question: "我是问题",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "3",
            question: "我是问题",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "4",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "5",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "6",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "7",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "8",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "9",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "10",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "11",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "12",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "13",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "14",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "15",
            question: "我是问题4",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          },
          {
            id: "16",
            question: "我是问题16",
            answer: {
              A: "答案A",
              B: "答案B",
              C: "答案C",
              D: "答案D"
            },
            trueAnswer: "",
            error: false
          }
        ],
        answer: {},
        realAnswer: [],
        scrollWidth: 0,
        cover: false
      };
    },
    methods: {
      result() {
        let count = this.question.length;
        this.question.forEach(element => {
          if (!element.trueAnswer.length) {
            element.error = true;
          } else {
            count--;
            element.error = false;
            if (count == 0) {
              this.cover = true;
              const child = this.$refs.coontDown;
              const time = child.time;
              child.ClearInterval();
              //ajax this.answer  time
              sessionStorage.setItem(
                "time",
                JSON.stringify({
                  minute: "05",
                  second: "00"
                })``
              );
            }
          }
        });
      },
      async save() {
        await this.question.forEach((element, index) => {
          this.answer[index] = element.trueAnswer;
        });
        sessionStorage.setItem("answer", JSON.stringify(this.answer));
      },
      timeOut() {
        this.cover = true;
        this.save();
        // ajax   this.answer 00:00
      },
      top() {
        document.documentElement.scrollTop = 0;
      }
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    user-select: none;
    box-sizing: border-box;
    .submit {
      position: fixed;
      top: 30%;
      right: 25%;
      width: 220px;
      display: flex;
      flex-direction: column;
      button {
        height: 50px;
        width: 50px;
        margin: 5px 0;
        border: none;
        outline: none;
        cursor: pointer;
      }
      .gongneng {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 5px 0;
        button {
          border-radius: 15px;
        }
      }
    }
  }
  @media screen and (min-width: 601px) {
    .hello {
      width: 400px;
      height: 85px;
      font-size: 16px;
      font-weight: 700;
      .questions {
        display: flex;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .hello {
      width: 90%;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      height: 135px;
      .questions {
        display: block;
        font-weight: 500;
        font-size: 12px;
      }
    }
    #app {
      .submit {
        top: 35%;
        right: 10%;
        width: 70px;
        height: 200px;
        font-size: 10px;
        .countDown {
          display: none;
        }
        .gongneng {
          flex-direction: column;
          width: 100%;
          align-items: center;
          button {
            width: 40px;
            height: 40px;
            font-size: 10px;
            border-radius: 10px;
          }
        }
      }
    }
  }
</style>
