new Vue({
  el: "#app",
  data: {
    age: 25
  },
  methods: {
    add: function(value) {
      this.age += value;
    },
    subtract: function(value) {
      this.age -= value;
    }
  }
});
