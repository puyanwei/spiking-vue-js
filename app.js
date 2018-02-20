new Vue({
  el: "#app",
  data: {
    name: "Bob",
    job: "The Builder",
    website: "http://www.google.com"
  },
  methods: {
    greet: function(time) {
      return "Hey man, wassup! Good " + time + " " + this.name;
    }
  }
});
