<template lang="html">
  <tr>
    <td class="cell cell-content">{{ user.name }}</td>
    <td class="cell cell-content">{{ user.surname }}</td>
    <td class="cell cell-content">{{ user.phone }}</td>
    <td class="cell cell-content">{{ user.email }}</td>
    <td class="cell cell-action"> <router-link class="button button-action" :to="{ name: 'Handle', params: {id: user.id} }"><i class="fa fa-user-edit icon icon-edit"></i></router-link> </td>
    <td class="cell cell-action"> <router-link class="button button-action" :to="{ name: 'Delete', params: {id: user.id} }"><i class="fa fa-user-times icon icon-delete"></i></router-link> </td>
  </tr>
</template>

<script>
export default {
  name: 'Row',
  props: ['user']
}
</script>

<style lang="css">
</style>
