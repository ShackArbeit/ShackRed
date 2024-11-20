<script setup>
import { editProfileStore} from '@/stores/ProfileCard';
const profileStore=editProfileStore()
console.log('使用者名稱:',profileStore.userName)
</script>

<template>
<div class="card-container">
    <div class="profile-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dAhStiHcrHApsHPn4NzbbrQ7GkfOgnBPMQ&s" alt="自我簡介圖片" 
        style="width: 120%;height:120%;border-radius: 50%;">
    </div>
    <div style="width:100%;display:flex;justify-content: center;margin-top:.5rem;
    margin-bottom:.5rem">
    <input 
        class="description" 
        type="text"
        v-model="profileStore.userName"
        :disabled="profileStore.NameEditNow"
    >
        <span @click="profileStore.enableNameEdit"
         style="cursor: pointer;"
        >✏️</span>  
    </div>
    <div style='width:100%;display:flex;justify-content: center;margin-top:.5rme;
    margin-bottom:.5rem'>
        <input 
        class="description"
        type="text"
        v-model="profileStore.userIntro"
        maxlength="30"
        :disabled="profileStore.IntroEditNow"
        >
        <span @click="profileStore.enableIntroEdit"
        style="cursor: pointer;"
        >✏️</span>  
    </div>
</div>


</template>


<style scoped>
 .card-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 28px;
    box-sizing: border-box;
    border: 1px solid v #D1C3C3;
    margin: 0 auto;;
    background:  #FEF8F7;
    border:1px solid #bdc2c3;
    display: flex;
 }
 .description {
    color:  #3A3131;
    font-family: "Noto Sans TC";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing:0.5px;
    border:none;
    outline: none;
    background:  #FEF8F7;
    text-align: center;
    margin-right:1rem;
}
@media(min-width:1200px){
 .card-container {
    width:88.88%;
    height:35.71%;   
}
.profile-image {
    display: flex;
    width: 100px;
    height: 100px;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top:.5rem
}

}
@media (max-width: 1200px){
    .card-container{
        width:86.54%;
        height: auto;  
        padding-top:1rem;
        padding-bottom:1rem;
    }
    .profile-image{
        width:60px;
        height:60px;
    }
    .description{
        font-size: 12px;
    }
}
@media (max-width: 768px){
    .card-container{
        width:60.60%;
    }
}

</style>