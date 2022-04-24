<template>
  <div>
        <header>
          <HeaderComponent/>
            <nav :class="classNav">
                <ul>
                    <li class="activ" ><router-link style="text-decoration: none; color: rgba(255, 255, 255, 0.5);" to="/"  @click="activame"> <span>00</span>   HOME</router-link></li>
                    <li class="activ-explore"><router-link style="text-decoration: none; color: rgba(255, 255, 255, 0.5);" to="/destination" @click="activame"><span>01</span>  DESTINATION</router-link></li>
                    <li ><router-link style="text-decoration: none; color: rgba(255, 255, 255, 0.5);" to="/crew" @click="activame"><span>02</span>  CREW</router-link></li>
                    <li ><router-link style="text-decoration: none; color: rgba(255, 255, 255, 0.5);" to="/technology" @click="activame"><span>03</span>  TECHNOLOGY</router-link></li>
                </ul>
            </nav>
        </header>
        <router-view/>
  </div>

</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue'
import  {provide,ref} from 'vue'
  
export default {
  components: { HeaderComponent },
  setup() {
      const classNav = ref('classNav')
      const dataJson = ref([])
      const destinationInf = ref(0)
      provide('destinationInf',destinationInf)
      provide('classNav', classNav)
      provide('dataJson',dataJson)

      // console.log(classNav);




      const fetchFunction = async function(){
        try {
          const resp = await fetch('data.json')
          const data = await resp.json()
          dataJson.value = data
        } catch (error) {
          console.log(error)
        }

      }

      const activame = e=>{
        let liAll = document.querySelectorAll('li')
        if (e.target.closest('span')) return
        liAll.forEach(elem =>{
          if(elem.classList.contains('activ')) elem.classList.remove('activ')
        })

        e.target.closest('li').classList.add('activ')
        // console.log(e.target)
      }

      fetchFunction()





      return{classNav, activame}

      
  },
      mounted(){
        this.$router.push('')
      }

  
}
</script>

<style lang="scss" src="./sass/main.scss">

</style>
