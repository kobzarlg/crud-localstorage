<template lang="html">
  <div class="block-main">
    <div class="block-nav">
      <router-link class="button" :to="{ name: 'Handle', params: {} }"> <i class="fa fa-user-plus"></i> Add User  </router-link>
    </div>
    <div class="block-content" v-if="users.length > 0">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Email</th>
          <th colspan="2"></th>
        </tr>
        <row v-for="user in users" :user="user" :key="user.id" />
      </table>
    </div>
  </div>
</template>

<script>
import Row from './Row'
export default {
  name: 'Main',
  components: {
    'row': Row
  },
  mounted(){
    // get data from local storage
    this.users = JSON.parse(localStorage.getItem('users') || "[]")
  },
  data: () => ({
    users: [],
  })
}
</script>

<style lang="css">
</style>
