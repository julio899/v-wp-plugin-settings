<template>
  <div id="app" code="c95212f10ee3c332ad7db40ad542e6691c6ff7b6">
    <HelloWorld v-if="cargando" msg="Cargando..." />
    <span v-if="!cargando && licenciaIsValid">Licencia valida</span>
    <span v-if="!cargando && !licenciaIsValid"
      >Error!!! Licencia NO valida</span
    >
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  props: {
    code: String
  },
  methods: {
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
            console.log(
              data,
              this.$el.attributes.getNamedItem('code').nodeValue
            );
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
    HelloWorld
  },
  beforeCreate: function() {
    /* eslint-disable */
    console.log('beforeCreate Main', this);
    fetch('https://randomuser.me/api/?results=5').then(r => {
      r.json().then(dataUsers => {
        this.$data.users = dataUsers;
        this.$data.lic = this.$el.attributes.getNamedItem('code').nodeValue;
        this.validate();
      });
    });
    /*
        var datos = {
            lic: 'code',
            proccess_lic: 'proccess_start'
        };
        fetch('http://localhost:8000/lic', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'content-type': 'application/json'
            }
        }).then(r => {
            r.json().then(data => {
                if (data.error !== null) {
                    console.log(data,this.$el.attributes.getNamedItem('code').nodeValue);
                } else {
                    console.info(data.data.status);
                    this.$data.licenciaIsValid = true;
                }
                // check Respuesta si paso
                console.log(this.$data.licenciaIsValid)
            });
        });
        */
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
</style>
