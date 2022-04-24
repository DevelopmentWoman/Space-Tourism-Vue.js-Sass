<template>
    <div class="container-destination cont-general">
        <div class="container-grid grid-general">
            <h1 class="h1-general item1"><span>01</span>Pick your destination</h1>
            <general-img :sourcImg='srcImg'/>
            <destination-btn/>
            <general-title  :title='title'/>
            <general-article :article='article'/>
            <general-footer :distance='distance' :travel='travel'/>

        </div>

    </div>
</template>


<script>

import {provide,ref,inject,computed} from 'vue'
import GeneralImg from '../components/GeneralImg.vue'
import DestinationBtn from '../components/DestinationBtn.vue'
import GeneralTitle from '../components/GeneralTitle.vue'
import GeneralArticle from '../components/GeneralArticle.vue'
import GeneralFooter from '../components/GeneralFooter.vue'


export default {
  components: { GeneralImg, DestinationBtn, GeneralTitle, GeneralArticle, GeneralFooter },
  name: 'DestinationView.vue',

  setup() {
      let dataJ = inject('dataJson')
      let indexBtn = ref(0)
      provide('indexBtn',indexBtn)




        const srcImg =  computed(()=>{
           return dataJ.value.destinations[indexBtn.value].images.png 
             
        })
        const title =  computed(()=>{
           return dataJ.value.destinations[indexBtn.value].name
        })
        const article =  computed(()=>{
           return dataJ.value.destinations[indexBtn.value].description
        })

        
        const distance = computed(()=>{
             return dataJ.value.destinations[indexBtn.value].distance

        })
        const travel = computed(()=>{
             return dataJ.value.destinations[indexBtn.value].travel
        })
        return {srcImg, title, article, distance, travel}
  },

        mounted() {
        let liAll = document.querySelectorAll('li')
        
        liAll.forEach(elem =>{
        if (elem.classList.contains('activ'))   elem.classList.remove('activ')
        })

        document.querySelector('.activ-explore').classList.add('activ')
        console.log(liAll)
        },


}
</script>