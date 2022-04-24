<template>
    <div class="container-btn">
        <button value="0" aria-selected="true" role="tab" @click="search" class="activ">1</button>
        <button value="1" aria-selected="true" role="tab" @click="search" class="">2</button>
        <button value="2" aria-selected="true" role="tab" @click="search" class="">3</button>
    </div>
</template>

<script>
import {inject} from 'vue'
export default {
    name: 'TechnologyBtn',
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

