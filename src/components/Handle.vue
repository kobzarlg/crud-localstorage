<template lang="html">
  <div class="block-main">
    <div class="block block-nav">
      <router-link :to="{ name: 'Main', params: {} }"> <i class="fa fa-arrow-left"></i> Back</router-link>
    </div>
    <div class="block block-content">
      <form class="" @submit.prevent="submitForm()">
        <div class="row">
          <label class="input-column input-label" for="name">Name</label>
          <div class="input-column input-container">
            <input type="text" id="name" class="input-field" autocomplete="off"
            v-model="user.name"
            title='Field should begin with a capital letter and contain only letters, ".", "-" and space characters'
            required pattern="^[A-Z][\w\s\-\.]*" minlength="2" maxlength="20"
            />
          </div>
        </div>
        <div class="row">
          <label class="input-column input-label" for="surname">Surname</label>
          <div class="input-column input-container">
            <input type="text" id="surname" class="input-field" autocomplete="off"
            v-model="user.surname"
            title='Field should begin with a capital letter and contain only letters, ".", "-" and space characters'
            required pattern="^[A-Z][\w\s\-\.]*" minlength="2" maxlength="40"
            />
          </div>
        </div>
        <div class="row">
          <label class="input-column input-label" for="phone">Phone</label>
          <div class="input-column input-container">
            <input type="tel" id="phone" class="input-field" autocomplete="off"
            v-model="user.phone"
            title="Phone should contain only digits and be 10 to 12 characters in length"
            required pattern="[\d]{10,12}" minlength="10" maxlength="12"
            />
          </div>
        </div>
        <div class="row">
          <label class="input-column input-label" for="email">Email</label>
          <div class="input-column input-container">
            <input type="email" id="email" class="input-field" autocomplete="off"
            v-model="user.email"
            title="Please enter valid email"
            required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}"
            />
          </div>
        </div>
        <div class="row">
          <div class="input-column input-label">
            <button type="submit" class="button button-submit"><i class="fa fa-user-check"></i> Save</button>
          </div>
          <div class="input-column input-container">
          </div>
        </div>
      </form>
    </div>
    <div class="block block-json">
      <form class="" @submit.prevent="submitJson()">
        <div class="row">
          <label class="input-column input-label" for="json">Import Json</label>
          <div class="input-column input-container">
            <input type="text" id="json" class="input-field" autocomplete="off"
            v-model="json"
            title="JSON string must begin and end with curly braces"
            required pattern='\{(.+)\}'
            />
          </div>
        </div>
        <div class="row">
          <div class="input-column input-label">
            <button type="submit" class="button button-submit"><i class="fa fa-user-check"></i> Save</button>
          </div>
          <div class="input-column input-container">
            <span class="error-text">{{error}}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Handle',
  data: () => ({
    user: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      id: '',
    },
    isNew: true,
    json: '',
    error: ''
  }),
  mounted(){

    const index = this.getLastID()
    // if gt error - go to mein page
    if (index === -1) this.$router.push( { name: 'Main', params: {} }  )

    this.user.id = index
    const storage = JSON.parse(localStorage.getItem('users') || '[]')
    if (storage.length > 0) {
      const needle = storage.findIndex( elem => {
        return elem.id == this.$route.params.id
      })
      if (needle !== -1) { // if found id in data - do edit process and set exists data
        this.user = storage[needle]
        this.isNew = false
      }
    }

  },
  methods: {
    submitForm(){

      const storage = JSON.parse(localStorage.getItem('users') || '[]')
      if (this.isNew) {
        storage.push(this.user)
      }else{
        // find index in array
        const needle = storage.findIndex( elem => {
          return elem.id == this.user.id
        })
        // replace exists element
        storage.splice(needle,1,this.user)
      }

      // save and go to main component
      localStorage.setItem('users', JSON.stringify(storage))
      this.$router.push( { name: 'Main', params: {} } )
    },
    submitJson(){
      try {
        const json = JSON.parse(this.json),
        propsMustBe = ['name','surname','phone','email'],
        regex = {
          'name': /^([A-Z][\w\s\-\.]){2,20}/,
          'surname': /^([A-Z][\w\s\-\.]){2,40}/,
          'phone': /^([\d]){10,12}/,
          'email': /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/i,
        }
        // check json on match, empty values and existence of required arguments
        for (let prop in json) {
          if (json.hasOwnProperty(prop)) {
            if ( propsMustBe.indexOf(prop) === -1  ) throw 'JSON does not contain all necessery arguments'
            if ( !json.prop.length ) throw 'JSON should does not contain empty value at necessery arguments'
            if ( !regex[prop].test(json[prop]) ) throw 'JSON does not match pattern'
          }
        }
        this.user = json
        this.error = ''
        this.submitForm()
      } catch (e) {
        this.error = 'Invalid format or data'
      }
    },
    getLastID(){
      const storage = JSON.parse(localStorage.getItem('users') || '[]')

      if (this.$route.params.id) {
        // get data from local storage
        if (storage.length > 0) {
          return storage.findIndex( elem => {
            return elem.id == this.$route.params.id
          })
        }else{
          return this.$route.params.id
        }
      }else{
        // calculate max id and increment it
        const ids = []
        storage.forEach( elem => {
          ids.push(elem.id)
        })
        return ids.length > 0 ? Math.max(...ids) + 1 : 1
      }
    }
  }
}
</script>

<style lang="css">
</style>
