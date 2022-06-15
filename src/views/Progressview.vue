<template>
<div>
    <p>
        progress
    </p>
    <el-progress type="circle" :percentage="this.score" color='gray'></el-progress>
</div> 

</template>

<script>
export default {
    data(){
        return{
            score:80
        }
    }
}
</script>