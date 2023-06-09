import { defineStore } from 'pinia'
export const useMoreStore = defineStore('more',{
    state:()=>{
        return {
            line:'other store by more'
        }
    },
    getters:{
        linePro:(state)=>{
            return state.line+'别的'
        }
    },
    actions:{
        setLine(payload:any){
            if(this.line.endsWith('more')){
                console.log(this.linePro,'linePro');
                
            }else{
                console.log(this.line);
                
            }
            this.getLine(payload)
        },
        getLine(payload:any){
            console.log('lalalalala',payload);
            
        }
    }
})