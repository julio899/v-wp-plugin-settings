<template>
  <div class="contenedor">
    <h3>Usuarios Premium</h3>
      <ul>
        <li v-for="user in users.results" >
          
          <div class="info-img">
            <img :src="user.picture.large" :alt="user.name.first+' '+user.name.last">
          </div>
          
          <div class="info">
            <p class="name">{{user.name.title}} {{user.name.first}} {{user.name.last}}</p>
            <p>{{user.email}}</p>
            <p>{{user.cell}}</p>
          </div>

        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Usuarios',
  props: {
    users: null
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');
h3{
    text-align: left;
    margin-left: 4em;
}
li{
  min-height: 150px;
  list-style: none;
  font-weight: 100;
  font-size: 1.2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  font-family: 'Open Sans Condensed', sans-serif;
}
.info{
  padding-top: 1em;
}
p{
    padding: 0;
    margin: 0;
    font-size: 20px;
}
p.name{
    font-weight: bold;
    text-transform: capitalize;
    font-size: 20px;
}
img{
    border-radius: 50%;
    border: 5px solid #c1c1c170;
}
</style>
