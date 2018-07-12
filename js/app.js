new Vue({
    el: '.bloc',

    data : {

        valeurIn : 0,
        solution : solution = Math.floor(Math.random() * 100) + 1,
        message : "...",
        show : false
    },
    methods : {
        controle : function(){
            
            this.show = !this.show
            if(this.valeurIn < this.solution){
                this.message = "Hum, ton nombre est trop petit"
            }else if(this.valeurIn > this.solution){
                this.message = "Hum, ton nombre est trop grand"
            }else{
                this.message = "Super tu as trouvé"
            }
        }
    }
})