<template>
    <div class="container-btn item3">
        <button value="0" aria-selected="true" role="tab" @click="search" class="activ btn-general" >MOON</button>
        <button value="1" aria-selected="true" role="tab"  @click="search" class="btn-general">MARS</button>
        <button value="2" aria-selected="true" role="tab"  @click="search" class="btn-general" >EUROPA</button>
        <button value="3" aria-selected="true" role="tab" @click="search" class="btn-general" >TITAN</button>
    </div>
</template>

<script>
import {inject} from 'vue'
export default {
    name: 'DestinationBtn',
    
    setup(){

        let indexBtn = inject('indexBtn')
        const search = e=>{
            let btnAll = document.querySelectorAll('button')
            btnAll.forEach(elem =>{
                if(elem.classList.contains('activ')) elem.classList.remove('activ')
            })
            e.target.classList.add('activ')
            indexBtn.value = e.target.value
        }

      

        return{search}

    },



}
</script>