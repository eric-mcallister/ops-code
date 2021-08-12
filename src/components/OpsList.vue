<template>
  <v-row>
    <h3>Type List</h3>
    <br />
    <v-expansion-panels popout>
      <v-expansion-panel v-for="type in types" :key="type.number">
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import typesData from '../types.json';

export default {
    name: 'OpsList',
    data () {
      return {
        types: typesData,
      };
    },
};
</script>

