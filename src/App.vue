<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.block-nav {
  padding: 30px;
}

.icon {
  color: #242128;
}

.block-nav a, .block-nav a.router-link-exact-active{
  font-weight: bold;
  text-decoration: none;
  color: #242128;
}



.button{
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  border: none;
  text-decoration: none;
  background: #ffffff;
}

.button-action{
  padding: 0.1rem;
}

.table{
  border-collapse: collapse;
  margin: 0 auto;
}
.table .cell-content{
  padding: 0.25rem 1rem;
}
.table .cell-action{
  padding: 0.25rem;
}


.row{
  display: flex;
  margin: 0.1rem;
}
.input-label{
  padding: 0.25rem 0;
  margin-bottom: 0;
  flex-basis: 20%;
}
.input-container{
  flex-basis: 60%;
}
.input-field{
  display: block;
  width: 100%;
  padding: 0.25rem 0.75rem;
  border: 1px solid #242128;
  border-radius: 0.25rem;
  font-size: 1rem;
}
.input-field:focus{
  outline-color: #ffffff;
}
.block-content .input-field:valid{
  border-color: #0A932C;
}


.error-text{
  display: block;
  padding: 0.25rem 0.75rem;
  font-style: italic;
  color: #D12E2E;
}


.block-text{
  
}



</style>
