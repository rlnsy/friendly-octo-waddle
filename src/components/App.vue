<template>
  <div id="app">
	<img id="icon" class="icon" src="../images/icon.png">
	<a target="_blank" href="https://icons8.com/icons/set/pineapple-emoji">Pineapple icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  <p> 2 + 3 is {{ result }} </p>
  </div>
</template>
<script>
import functions from "../lib";
export default {
  name: "app",
  components: {},
  data: () => {
      return {
		lib: null
	  }
  },
  computed: {
	result() {
		if (this.lib) {
			return this.lib.add(2,3);
		} else {
			return null;
		}
	}
  },
  asyncComputed: {},
  async mounted() {
	this.lib = await functions();
  },
}
</script>
