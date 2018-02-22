new Vue({
  el: "#app",
  data: {
    output: "Your fave video game"
  },
  methods: {
    readRefs: function() {
      this.output = this.$refs.input.value;
      console.log(this.$refs.test.innerHTML);
    }
  },
  computed: {}
});
