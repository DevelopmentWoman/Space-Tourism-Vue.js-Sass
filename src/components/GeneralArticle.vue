<template>
    <article class="container-article item6">
        <p class="p-general">{{article}}</p>
    </article>
</template>

<script>

export default {
    name: 'GeneralArticle',
    props:{
        article: String
    }

}
</script>