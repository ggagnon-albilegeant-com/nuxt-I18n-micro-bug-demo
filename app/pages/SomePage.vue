<template>
<div>
  <button @click="changeLocale">Change locale (current locale is : {{ locale }})</button>
  <hr/>
  <MyComponent />
</div>
</template>

<script setup lang="ts">
const { locale } = useI18nLocale();
const { $switchLocale } = useI18n();

function changeLocale() {
  console.log(locale);
  if(locale.value === "en")
    $switchLocale("fr");
  else $switchLocale("en")
}
</script>
