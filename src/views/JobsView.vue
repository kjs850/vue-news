<template>
  <div>
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      <a v-bind:href="job.url">{{job.title}}</a>
      <small>{{job.time_ago}} by {{job.domain}}</small>

    </p>
  </div>
</template>

<script>

  export default {
      created() {
        this.$store.dispatch('FETCH_JOBS')
                .then(() => console.log('sucess'))
                .catch(() => console.log('fail'));
      }
  }
</script>

<style>

</style>
