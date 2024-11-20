<script setup>
// 使用 Pinia Store 將 ProfileCard.js 內的  editProfileStore 函式引入
import { editProfileStore} from '@/stores/ProfileCard';
const profileStore=editProfileStore()
const emit = defineEmits(["save-html"]);
function handleSave() {
  emit("save-html");
  console.log("事件已發送");
}

</script>


<template>
<input 
type="text" 
:placeholder="`https://www.aiot.com.tw/${profileStore.userName}`"
class="inputStyle" @click="handleSave" readonly >

</template>

<style scoped>
.inputStyle{
    width:73.25%; 
    height:60px;
    border:none;
    border-radius: 20px;
    background-color:#fef3ff;
    margin-bottom:24px;
    cursor: pointer;
    border:1px solid #c1c1c1;
}
.inputStyle::hover{
    border:1px solid #fc2247;
}
.inputStyle::placeholder{
    font-size:18px;
    color:black;
    letter-spacing:.15em;
    padding-left:1.5rem; 
}
@media(max-width:1200px){
    .inputStyle{
        padding-left:0;
        margin:none;
        /* width:65.65%; */
        width:75%;
        height:48px;
        margin-right:1.5rem;
    }
}
@media(max-width:768px){
    .inputStyle{
        margin:none;
        height:48px;
        width:80%;
    }
    .inputStyle::placeholder{
        text-align: center;
    }
    .inputStyle::placeholder{
        font-size: 12px;
    }
}
</style>