<template>
  <div
    class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000"
    :class="[stateClasses]"
  >
    <div class="w-full h-full flex items-center justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["current"],
  data() {
    return {
      state: "start"
    };
  },

  computed: {
    stateClasses() {
      switch (this.state) {
        case "start":
          return "translate-x-full";
          break;
        case "active":
          return "";
          break;
        case "finish":
          return "-translate-x-full";
          break;
      }
    }
  },

  methods: {
    startState() {
      this.state = "start";
    },

    activeState() {
      this.state = "active";
    },

    finishState() {
      this.state = "finish";
    },

    nextState() {
      switch (this.state) {
        case "start":
          this.state = "active";
          break;
        case "active":
          this.state = "finish";
          break;
        case "finish":
          break;
      }
    },

    previousState() {
      switch (this.state) {
        case "finish":
          this.state = "active";
          break;
        case "active":
          this.state = "start";
          break;
        case "start":
          break;
      }
    }
  }
};
</script>