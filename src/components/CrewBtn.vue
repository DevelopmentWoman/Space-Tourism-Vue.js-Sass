<template>
    <div class="container-btn item3">
        <button value="0" aria-selected="true" role="tab" @click="search" class="activ"></button>
        <button value="1" aria-selected="true" role="tab" @click="search" class=""></button>
        <button value="2" aria-selected="true" role="tab" @click="search" class=""></button>
       <button value="3" aria-selected="true" role="tab" @click="search" class=""></button>
    </div>
</template>

<script>
import {inject} from 'vue'
export default {
    name: 'CrewBtn',
    setup(){

        let indexBtn = inject('indexBtn')
        const search = e=>{
            let btnAll = document.querySelectorAll('button')
            btnAll.forEach(elem =>{
                if(elem.classList.contains('activ')) elem.classList.remove('activ')
            })
            e.target.classList.add('activ')
            indexBtn.value = e.target.value
            console.log(indexBtn.value)
        }
     
        return{search}

    },

}
</script>

