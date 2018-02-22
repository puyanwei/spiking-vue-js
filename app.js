var one = new Vue({
  el: "#app-one",
  data: {
    title: "Vue App One"
  },
  methods: {},
  computed: {
    greet: function() {
      return "Hello this is app one";
    }
  }
});

var two = new Vue({
  el: "#app-two",
  data: {
    title: "Vue App Two"
  },
  methods: {
    changeTitle: function() {
      one.title = "Title changed from App Two!";
    }
  },
  computed: {
    greet: function() {
      return "Hello this is app two";
    }
  }
});

two.title = "Changed from outside";
