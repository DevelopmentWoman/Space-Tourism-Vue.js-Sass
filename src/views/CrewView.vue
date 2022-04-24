<template>
    <div class="container-crew cont-general">
        <div class="container-grid grid-general">
            <h1 class="h1-general item1"><span>02</span>MEET YOUR CREW</h1>
            <general-img :sourcImg='srcImg'/>
            <crew-btn/>
            <general-subtitle :subtitle='profession'/>
            <general-title :title='title'/>
            <general-article :article='article'/>
        </div>
    </div>
</template>

<script>

import CrewBtn from '../components/CrewBtn.vue'
import GeneralArticle from '../components/GeneralArticle.vue'
import GeneralImg from '../components/GeneralImg.vue'
import GeneralTitle from '../components/GeneralTitle.vue'
import {ref, provide,inject,computed} from 'vue'
import GeneralSubtitle from '../components/GeneralSubtitle.vue'

export default {
  components: { GeneralImg, GeneralTitle, GeneralArticle, CrewBtn, GeneralSubtitle },
    name: 'CrewView.vue',

    setup() {
        let dataJ = inject('dataJson')
        let indexBtn = ref(0)
        provide('indexBtn',indexBtn)

        const srcImg =  computed(()=>{
           return dataJ.value.crew[indexBtn.value].images.png 
             
        })
        const title =  computed(()=>{
           return dataJ.value.crew[indexBtn.value].name
        })
        const profession =  computed(()=>{
           return dataJ.value.crew[indexBtn.value].role
        })
        const article =  computed(()=>{
           return dataJ.value.crew[indexBtn.value].bio
        })

        return {srcImg, title, profession,article}

    }

}
</script>