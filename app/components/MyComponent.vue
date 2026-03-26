<template>
<div>
  <p>Some text from a translation file : <span>{{ $ts('pageLevelKey') }}</span></p>
  <p>Some text from a component "inline" translation : <span>{{ $ts('componentLevelKey') }}</span></p>
</div>
</template>

<script setup lang="ts">
const { $t, $ts, $defineI18nRoute } = useNuxtApp();
$defineI18nRoute({
  locales: {
    en: {
      componentLevelKey: "This comes from the component.",
    },
    fr: {
      componentLevelKey: "Ceci provient du composant.",
    },
  },
});
</script>

