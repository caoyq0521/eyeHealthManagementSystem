Vue.component('header-template',{
	props:['showBack','title','imgUrl','callback'],
	methods:{
		back(){
			this.callback();
		}
	},
	template:`
	    <div id="header">
	       <div class="back flex-wrap flex-center" v-if='showBack' @click='back'>
	       		<img :src="imgUrl" alt="">
	       </div>
            <h1>{{title}}</h1>
        </div>
	`
})