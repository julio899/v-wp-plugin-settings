<template>
  <div id="app" code="c95212f10ee3c332ad7db40ad542e6691c6ff7b6">
    <HelloWorld v-if="cargando" msg="Cargando..."/>
    <h3 v-if="!cargando && !licenciaIsValid"
      class="invalida">Error!!! Licencia NO valida</h3
    >
    <Usuarios v-if="!cargando && licenciaIsValid" :users="users"></Usuarios>
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue';
import Usuarios from './components/Usuarios.vue';

export default {
  name: 'app',
  props: {
    code: j899__lic_code
  },
  methods: {
    getUsers:function(){
      return JSON.stringify(this.users);
    },
    validate: async function() {
      var datos = {
        lic: this.$data.lic,
        proccess_lic: 'proccess_start'
      };
      var resp = await fetch('http://localhost:8000/lic', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'content-type': 'application/json'
        }
      }).then(r => {
        r.json().then(data => {
          if (data.error !== null) {
            console.log(data);
          } else {
            console.info(data.data.status);
            this.$data.licenciaIsValid = true;
          }
          // check Respuesta si paso
          console.log(this.$data.licenciaIsValid);
          this.cargando = false;
        });
      });

      return resp;
    }
  },
  components: {
    HelloWorld,
    Usuarios
  },
  beforeCreate: function() {
    /* eslint-disable */
    // console.log('beforeCreate Main', this);
    fetch('https://randomuser.me/api/?results=5').then(r => {
      r.json().then(dataUsers => {
        this.$data.users = dataUsers;
        //this.$data.lic = this.$el.attributes.getNamedItem('code').nodeValue;
        this.$data.lic = j899__lic_code;
        this.validate();
      });
    });
  },
  data: function() {
    return {
      licenciaIsValid: false,
      lic: '',
      users: null,
      cargando: true
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3.invalida{
  color: #ff3131;
  text-shadow: #867c7cb8 1px 1px 2px;
}
</style>
