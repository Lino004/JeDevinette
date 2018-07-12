new Vue({
    el: '.bloc',

    data : {

        valeurIn : 0,
        solution : solution = Math.floor(Math.random() * 100) + 1,
        controleM1 : false,
        controleM2 : false,
        controleM3 : false,
    },
    methods : {
        controle : function(){
           controleM1 = true
        }
    }
})