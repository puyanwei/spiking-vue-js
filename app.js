new Vue({
  el: "#app",
  data: {
    age: 25
  },
  methods: {
    add: function() {
      this.age++;
    },
    subtract: function() {
      this.age--;
    }
  }
});
