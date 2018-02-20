new Vue({
  el: "#app",
  data: {
    name: "Bob",
    job: "The Builder",
    website: "http://www.google.com",
    websiteTag: "<a href='http://www.google.com'>GOOGLE</a>"
  },
  methods: {
    greet: function(time) {
      return "Hey man, wassup! Good " + time + " " + this.name;
    }
  }
});
