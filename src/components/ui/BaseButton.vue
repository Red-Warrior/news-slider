<template>
  <button class="button">
    <slot>
      <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L11 11L1 21" stroke="#527CCD" />
      </svg>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid #c8d9fb;
  background: none;
  margin: 0;
  padding: 0;

  &:hover {
    background-color: $brand-color;
  }
}

.button--reverse svg {
  transform: rotate(180deg);
}
</style>
