new Vue({
  el: "#app",
  data: {
    name: "Bob",
    job: "The Builder"
  },
  methods: {
    greet: function(time) {
      return "Hey man, wassup! Good " + time + " " + this.name;
    }
  }
});
