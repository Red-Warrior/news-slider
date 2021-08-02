<template>
  <div class="outer-line">
    <div :style="`transform:translateX(${slidePosition})`" class="inner-line"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",

  props: {
    currentProgress: Number,
  },

  computed: {
    slidePosition() {
      return this.currentProgress * 27 + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
.outer-line {
  width: 360px;
  height: 1px;
  background-color: $brand-color;
}

.inner-line {
  transition: all 0.6s;
  left: 0;
  width: 144px;
  height: 1px;
  background-color: $text-color;
}
</style>
