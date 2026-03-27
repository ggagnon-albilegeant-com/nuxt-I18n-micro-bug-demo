<template>
<div>
  <pre style="font-size: x-large">
    ______________Some text from a translation file : <span>{{ $ts('pageLevelKey') }}</span>
    Some text from a component "inline" translation : <span>{{ $ts('componentLevelKey') }}</span>
  </pre>
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

