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
      <button @click="aaaa">暂存</button>
      <button @click="result">提交</button>
      <button @click="top">顶部</button>
      <!-- <button @click="scroll(14)">顶部</button> -->
    </div>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";
  export default {
    name: "App",
    components: {
      HelloWorld
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
          }
        ],
        answer: [],
        realAnswer: [],
        scrollWidth: 0
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
      result() {
        this.question.forEach((element, index) => {
          if (!element.trueAnswer.length) {
            element.error = true;
          } else {
            element.error = false;
          }
          this.answer[index] = element.trueAnswer;
          sessionStorage.setItem("answer", JSON.stringify(this.answer));
        });
      },
      save() {
        this.question.forEach((element, index) => {
          if (!element.trueAnswer.length) {
            element.error = true;
          } else {
            element.error = false;
          }
          this.answer[index] = element.trueAnswer;
          sessionStorage.setItem("answer", JSON.stringify(this.answer));
        });
      },
      scroll(x) {
        document.documentElement.scrollTop = x * this.scrollWidth + 60;
      },
      top() {
        document.documentElement.scrollTop = 0;
      },
      aaaa() {
        // console.log(this.answer);
        // document.documentElement.scrollTop = 0;
        console.log(document.documentElement.scrollTop);
      }
    }
  };
  window.addEventListener("beforeunload", () => {
    // console.log(vue);
    // sessionStorage.setItem("store", JSON.stringify(this.answer));
  });
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
      top: 50%;
      right: 30%;
      width: 50px;
      height: 110px;
      display: flex;
      flex-direction: column;
      button {
        height: 50px;
        margin: 5px 0;
        border: none;
        outline: none;
        cursor: pointer;
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
        top: 45%;
        right: 10%;
        width: 30px;
        height: 60px;
        font-size: 10px;
      }
    }
  }
</style>
