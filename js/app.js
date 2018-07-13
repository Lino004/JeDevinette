new Vue({
    el: '.bloc',

    data : {

        valeurIn : 0,
        solution : solution = Math.floor(Math.random() * 100) + 1,
        message : ['...'],
    },
    methods : {

        controle : function(){
            if(this.valeurIn < this.solution){
                this.message.push("Hum! Ton nombre est trop petit.")
            }else if(this.valeurIn > this.solution){
                this.message.push("Hum! Ton nombre est trop grand.")
            }else{
                this.message.push("Super tu as trouvé")
            }
        }
    }
})