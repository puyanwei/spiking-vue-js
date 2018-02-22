Vue.component("greeting", {
  template:
    "<p>Hi, I am {{ name }} <button @click='changeName'>Change Name</button></p>",
  data: function() {
    return {
      name: "Chun Li"
    };
  },
  methods: {
    changeName: function() {
      this.name = "E.Honda";
    }
  }
});

var one = new Vue({
  el: "#app-one",
  data: {},
  methods: {},
  computed: {}
});

var two = new Vue({
  el: "#app-two",
  data: {},
  methods: {},
  computed: {}
});
