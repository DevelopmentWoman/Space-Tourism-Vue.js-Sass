<template>
  <div>
      <div class="logo">
        <img src="../../public/assets/shared/logo.svg" alt="">
      </div>
      <button class="mobile-nav-toggle" @click='show'></button>
  </div>
</template>

<script>
import{inject} from 'vue'
export default {
    name: 'Header',
    setup() {
      let classNav = inject('classNav')

      const show = (e)=>{
        if (!e.target.classList.contains('close')){
         e.target.classList.add('close')
         classNav.value ='open'
        }else{
          e.target.classList.remove('close')
         classNav.value =''
        }
      }

      return{show}
    }
}




</script>