new Vue({
  el: "#app",
  data: {},
  methods: {
    readRefs: function() {
      console.log(this.$refs.input.value);
    }
  },
  computed: {}
});
