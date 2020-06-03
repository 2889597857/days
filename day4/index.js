new Vue({
  el: '#time',
  data() {
    return {
      time: {
        minute: '1',
        second: '10',
      },
      realTime: {},
      flag: true,
    };
  },
  mounted() {
    let a = JSON.parse(sessionStorage.getItem('time'));
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
    },
  },
});

window.addEventListener('beforeunload', () => {
  let a = document.querySelector('.minute').innerText;
  let b = document.querySelector('.scend').innerText;
  let time = {
    minute: a,
    second: b,
  };
  sessionStorage.setItem('time', JSON.stringify(time));
});
