<template lang="html">
  <div class="block">
    <div class="block-delete">
      Do you want delete user?
      <div class="input-column input-container">
        <button type="button" class="button" @click="deleteUser()"><i class="fa fa-check-circle"></i> Yes </button>
        <button type="button" class="button" @click="goToMain()"><i class="fa fa-times-circle"></i> No </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Delete',
  methods: {
    goToMain(){
      this.$router.push( { name: 'Main', params: {} }  )
    },
    deleteUser(){
      const storage = JSON.parse(localStorage.getItem('users') || '[]')
      if (storage.length > 0) {
        const needle = storage.findIndex( elem => {
          return elem.id == this.$route.params.id
        })

        // user not found
        if (needle === -1) this.goToMain()

        storage.splice(needle,1)

        // save and go to main component
        localStorage.setItem('users', JSON.stringify(storage));
        this.goToMain()
      }else{ // empty local storage
        this.goToMain()
      }
    }
  }
}
</script>

<style lang="css">
</style>
