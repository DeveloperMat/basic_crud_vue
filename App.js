const app = new Vue({
   el: '#app',
   data: {
       titulo: 'Gym con vue',
       tareas: [],
       nuevaTarea: ''
   },
   methods: {
       agregarTarea: function(){
           this.tareas.push({
               nombre: this.nuevaTarea,
               estado: false
           })
           
           this.nuevaTarea = '';
           localStorage.setItem('gym', JSON.stringify(this.tareas))
       },
       editarTarea: function(index){
        this.tareas[index].estado = true
        localStorage.setItem('gym', JSON.stringify(this.tareas))
        },

        eliminarTarea: function(index){
            this.tareas.splice(index,1)
            localStorage.setItem('gym', JSON.stringify(this.tareas))
        }
   },
   created: function(){
       let datosDB = JSON.parse(localStorage.getItem('gym'))
       console.log(datosDB)
       if(datosDB === null){
           this.tareas = [];

       }else {
           this.tareas = datosDB;
       }
   }
})