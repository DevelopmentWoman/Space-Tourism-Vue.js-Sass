<template>
    <div class="container-img item2">
        <img :src= sourcImg>
    </div>
</template>


<script>

export default {
    name: 'GeneralImg',
    props:{
        sourcImg: String
    }    
}
</script>