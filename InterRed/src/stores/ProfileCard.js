import { defineStore } from 'pinia';
import { ref } from 'vue';

export const editProfileStore=defineStore('editStore',()=>{
    const userName=ref('點鉛筆 Icon 編輯 Your Name !')
    const userIntro=ref('點鉛筆 Icon 編輯 Your Intro !')
    const NameEditNow = ref(true);
    const IntroEditNow = ref(true);
  

    const enableNameEdit = () => {
         NameEditNow.value = false;
         userName.value=''
         console.log('可以編輯了1')
      };
      
      const enableIntroEdit = () => {
        IntroEditNow.value = false;
        userIntro.value=''
      };
      return {userName,userIntro,enableNameEdit,enableIntroEdit,NameEditNow,IntroEditNow}
})