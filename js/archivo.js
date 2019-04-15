var vue = new Vue({
  el: '#app',
  data: {
    image: "",
    activeColor:'',
    actColor:'',
    comment: false,
    
  },
    created() {
      paramsString = window.location.search.split('?')[1]
      if(!paramsString){
        return 0
      }
      paramsArray = paramsString.split('&')

      params = Array.new

      params = paramsArray.map((val) => new Object({
          name: val.split('=')[0],
          val: val.split('=')[1],
      }) )
      
      imagePath = params.filter((val) => val.name == 'img')[0].val
      
      this.image = `./img/${imagePath}`
      console.log(this.image)
  },
 methods:{
    like(){
      if (this.activeColor==''){
        this.activeColor ='red';
      }else if (this.activeColor=='red'){
        this.activeColor = 'black';
     }else if (this.activeColor=='black'){
       this.activeColor = 'red';
     }
    },
    favorite(){
      if (this.actColor==''){
        this.actColor ='yellow';
      }else if (this.actColor=='yellow'){
        this.actColor = 'black';
      }else if (this.actColor=='black'){
        this.actColor = 'yellow';
      }           
      }
    }
})
var vue2 = new Vue({
  el: '#app2',
  data: {
    progress_bar_style: {
      width: '0%',
      backgroundColor: 'blue'
    },
    inputOne: "",
    inputTwo: "",
    inputTree:"",
    inputFour:"",
    inputFive:"",
    inputSix:""
  },
  methods: {
    inputChange(){
      let progress = 0
      if(this.inputOne != ""){
        progress+= 17
      }
      if(this.inputTwo != ""){
        progress+= 17
      }
      if(this.inputTree != ""){
        progress+= 17
      }
      if(this.inputFour != ""){
        progress+= 17
      }
      if(this.inputFive != ""){
        progress+= 17
      }
      if(this.inputSix != ""){
        progress+= 15
      }
      this.progress_bar_style.width = `${progress}%`
    }
  }
})

var vue3=new Vue({ 
  el: '#app3',
  data: {
    
  },
  methods: {
    processFile(event) {
      this.someData = event.target.files[0]
    }
  }
})