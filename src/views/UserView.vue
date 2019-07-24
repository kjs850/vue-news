<template>
  <div>
    <p>id : {{ fetchedUser.id }}</p>
    <p>karma : {{ fetchedUser.karma }}</p>
    <p>joined : {{ fetchedUser.created }}</p>
  </div>
</template>

<script>
  // import { fetchUser } from "../api/index.js";
  import { mapGetters } from 'vuex';


  export default {
    created() {
      // fetchUser('davideast')
      //         .then(response => console.log(response))
      //         .catch(error => console.log(error))
      const userId = this.$route.params.id;
      this.$store.dispatch('FETCH_USER', userId);
    },
    computed:{
      ...mapGetters(['fetchedUser'])
    }
  }
</script>

<style>

</style>
