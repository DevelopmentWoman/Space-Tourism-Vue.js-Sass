<template>
    <div class="container-footer cont-foot-general item7">
        <div class="distance">
            <h3 class="h3-general">Avg. distance</h3>
            <p class="p-dest">{{distance}}</p>

        </div>
        <div class="travel">
            <h3 class="h3-general">Est. travel time</h3>
            <p class="p-dest">{{travel}}</p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'GeneralFooter',
    props:{
        distance: String,
        travel: String
    }
}
</script>