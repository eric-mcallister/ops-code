<template>
    <div class="footer">
        <v-footer dark>
            <v-layout justify-center row wrap>
            <v-flex lighten-2 py-3 text-xs-center white--text>
                &copy;2021 — <strong>Test // Vuetify</strong>
            </v-flex>
            </v-layout>
        </v-footer>
    </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>