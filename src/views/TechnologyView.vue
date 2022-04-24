<template>
    <div class="container-technology cont-general">
        <div class="container-grid grid-general">
            <h1 class="h1-general"><span>03</span>SPACE LAUNCH 101</h1>
            <general-img :sourcImg='srcImg'/>
            <technology-btn/>
            <general-subtitle :subtitle='profession'/>
            <general-title :title='title'/>
            <general-article :article='article'/>
        </div>
    </div>
</template>

<script>

import GeneralArticle from '../components/GeneralArticle.vue'
import GeneralImg from '../components/GeneralImg.vue'
import GeneralTitle from '../components/GeneralTitle.vue'
import GeneralSubtitle from '../components/GeneralSubtitle.vue'
import TechnologyBtn from '../components/TechnologyBtn.vue'
import {ref, provide,inject,computed, watchEffect} from 'vue'

export default {
  components: { GeneralImg, GeneralTitle, GeneralArticle, GeneralSubtitle, TechnologyBtn },
    name: 'TechnologyView',

    setup() {
        let dataJ = inject('dataJson')
        let indexBtn = ref(0)
        provide('indexBtn',indexBtn)

        const srcImg =  computed(()=>{
            console.log(screen.width)
            if (screen.width < 900){
                            console.log(screen.width)
                return dataJ.value.technology[indexBtn.value].images.landscape
            }else{
                            // console.log(screen.width)
                return dataJ.value.technology[indexBtn.value].images.portrait
            }

             
        })
        const title =  computed(()=>{
           return dataJ.value.technology[indexBtn.value].name
        })
        // const profession =  computed(()=>{
        //    return "The terminology"
        // })
                const profession =  "The terminology"
        
        const article =  computed(()=>{
           return dataJ.value.technology[indexBtn.value].description
        })


        return {srcImg, title, profession,article}

    }

}
</script>