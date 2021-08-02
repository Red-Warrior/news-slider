<template>
  <div class="button-group">
    <base-button class="button--reverse"></base-button>
    <base-button></base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";

export default {
  name: "ButtonsGroup",

  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.button-group {
  display: flex;
  justify-content: space-between;
  width: 160px;
  height: 200px;
}
</style>
