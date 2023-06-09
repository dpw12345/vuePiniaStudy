import { defineStore } from 'pinia'
export const  useHelloStore = defineStore('hello',{
    state:()=>{
        return {
            title:'helloWorld'
        }
    },
    getters:{
        titlePlus():string{
            return this.title +"hello"
        }
    },
    actions:{
        getTitle(){
            console.log(this.title,'title');
            
        }
    }
})