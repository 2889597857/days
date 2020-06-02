<template>
  <div class="hello">
    <div :class="[{error:msg.error},'world']">
      <p>{{msg.id}}.{{msg.question}}</p>
      <div class="questions">
        <div
          v-for="(item, index) in ABCD"
          :key="`question${index}${msg.id}`"
          class="question"
        >
          <input
            type="radio"
            :value="item"
            :id="`question${index}${msg.id}`"
            v-model="msg.trueAnswer"
          >
          <label :for="`question${index}${msg.id}`">{{msg.answer[item]}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        answer: "",
        ABCD: ["A", "B", "C", "D"]
      };
    },
    methods: {
      caa() {
        console.log(this.answer);
      }
    }
  };
</script>
<style scoped lang="scss">
  .hello {
    margin: 5px auto;
    box-sizing: border-box;
    .error {
      border: 1px solid red;
    }
    .world {
      padding: 0 5px;
    }
    .questions {
      .question {
        margin: 5px 5px;
        display: flex;
        justify-content: center;
        p {
          font-size: 15px;
        }
      }
      input,
      label {
        cursor: pointer;
      }
    }
  }
</style>
