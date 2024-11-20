<script setup>  
   import { ref,watch } from 'vue';
  // 使用 Pinia Store，從 showCellPhone.js 中引入 showCellPhoneStore 函式
  import { showCellPhoneStore } from '../../stores/showCellPhone';
  const closeCellPhone=showCellPhoneStore()
  function closeCellPhoneButton(){
    closeCellPhone.closeShowMainPart()
    console.log('再次確認已經關閉了')
  }
   // 使用 Pinia Store，從 AddAndRemoveLinkCard.js 中引入 useLinkCardStore & useTextCardStore  函式
   import { useLinkCardStore } from '../../stores/AddAndRemoveLinkCard';
   import { useTextCardStore} from '../../stores/AddAndRemoveLinkCard';
   import { usetImageCardStore} from '../../stores/AddAndRemoveLinkCard';
   let linkCardStore=useLinkCardStore()
   let textCardStore=useTextCardStore()
   let imageCardStore=usetImageCardStore()
   let cardArray=ref(linkCardStore.linkArray)
   watch(()=>linkCardStore.linkArray,(newLinkArray)=>{
       cardArray.value=newLinkArray
   })
   let textCardArray=ref(textCardStore.cardTextArray)
   watch(()=>textCardStore.cardTextArray,(newTextCardArray)=>{
       textCardArray.value=newTextCardArray
   })
   let imageCardArray=ref(imageCardStore.cardImageArray)
   watch(()=>imageCardStore.cardImageArray,(newImageCardArray)=>{
       imageCardArray.value=newImageCardArray
       console.log('卡片陣列最新值:',imageCardArray.value)
   })
   // 使用 Pinia Store 將 ProfileCard.js 內的  editProfileStore 函式引入
   import { editProfileStore} from '@/stores/ProfileCard';
   const profileStore=editProfileStore()
   

   const props=defineProps({
        onSaveHtml: Function,
   })
   function handleSave2(){
      if(props.onSaveHtml){
          props.onSaveHtml()
      }
      else{
          console.log('無法接受到從 App.vue 過來的函式')
      }
   }
   

  
</script>


<template>
  <div class="container">
      <div class="checkInputContainer">
        <input 
          type="text" 
          :placeholder="`https://www.aiot.com.tw/${profileStore.userName}`"
          class="inputStyle" @click="handleSave2" readonly 
        >

      </div>
      <div class="MainPart" >
        <!-- 頭像與電子信箱部分 -->
        <div class="profilePart">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dAhStiHcrHApsHPn4NzbbrQ7GkfOgnBPMQ&s" alt="自我簡介圖片" class="profile-image"> 
          <p class="description">
              {{profileStore.userIntro}}
          </p>
        </div>
      <!-- 連結卡片內容顯示按鈕部分 -->
      <div class="buttonPart" v-for="card in cardArray" :key="card.id" >    
          <div v-if="card.inputValue===true">
            <div v-if="!card.webSiteTitle && !card.webSiteUrl" class='noLinkContainer'>
                  輸入連結標題及連結將會顯示在這裡
            </div>
            <div v-else>
                  <button class="clickButton">
                    <a :href="card.webSiteUrl" class="buttonHref" target="_blank"
                    >  
                        {{ card.webSiteTitle }}
                    </a> 
                </button>
              </div>
            </div>
      </div>
       <!-- 文字卡片內容顯示輸入框部分-->
       <div class="textareaPart" v-for="text in textCardArray" :key="text.id" >
         <div v-if="text.inputTextValue===true"> 
            <div v-if='!text.textTitle && !text.textContent'>
                你所輸入的標題及內容都會在這裡顯示
            </div>
            <div v-else>
                    <h1>
                        {{ text.textTitle }}    
                    </h1>
                    <p>
                        {{ text.textContent }}
                    </p>
              </div>
           </div>
       </div>
       <!-- 圖片卡片顯示內容部分 -->
        <div class="ImagePart" v-for="Image in imageCardArray" :key="Image.id"
        >
         <div v-if="Image.inputImageValue===true">
            <div v-if='!Image.imageUrl' class='noImageContainer'>
                  <p>上傳圖片後將會顯示在這裡</p>
            </div>
            <div v-else>
                <img :src="Image.imageUrl" alt="顯示區圖片" /> 
            </div>    
          </div>
        </div>
      
    </div>
  </div>

  <div class="container2" >
       <div class="closeIcon"  @click="closeCellPhoneButton">
              <span class="material-symbols-outlined" style="font-size: 35px;">
                  close
              </span>
        </div>
        <div class="MainPart2" >
  
        <!-- 頭像與電子信箱部分 -->

        <div class="profilePart" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dAhStiHcrHApsHPn4NzbbrQ7GkfOgnBPMQ&s" alt="自我簡介圖片" class="profile-image"> 
          <p class="description">
                {{profileStore.userIntro}}
           </p>
        </div> 
         <!-- 連結卡片內容顯示按鈕部分 -->
      <div class="buttonPart" v-for="card in cardArray" :key="card.id" >    
          <div v-if="card.inputValue===true">
            <div v-if="!card.webSiteTitle && !card.webSiteUrl" class='noLinkContainer'>
                  輸入連結標題及連結將會顯示在這裡
            </div>
            <div v-else>
                  <button class="clickButton">
                    <a :href="card.webSiteUrl" class="buttonHref" target="_blank"
                    >  
                        {{ card.webSiteTitle }}
                    </a> 
                </button>
              </div>
          </div>
      </div>
        <!-- 文字卡片內容顯示輸入框部分-->
       <div class="textareaPart" v-for="text in textCardArray" :key="text.id" >
         <div v-if="text.inputTextValue===true"> 
                  <h1>
                      {{ text.textTitle }}    
                  </h1>
                  <p>
                      {{ text.textContent }}
                  </p>
           </div>
       </div>
       <!-- 圖片卡片顯示內容部分 -->
        <div class="ImagePart" v-for="Image in imageCardArray" :key="Image.id"
        >
          <div v-if='!Image.imageUrl' class='noImageContainer'>
                <p>上傳圖片後將會顯示在這裡</p>
          </div>
          <div v-else>
                <img :src="Image.imageUrl" alt="顯示區圖片" /> 
          </div>    
        </div>
   </div>
     
  </div> 


</template>


<style scoped>
*{
    position: relative;
    box-sizing: border-box;
}
.container{
    text-align: center;
    width:100%;
    height:100%;
    display:block;
    overflow: hidden;
    padding-top:30px;
    border-radius: 20px;
    box-sizing: border-box; 
    z-index:5;
    background:  #F8F2F2;
}
.container2{
    text-align: center;
    width:100%;
    height:100%; 
    display:none;
    padding-top:30px;
    border-radius: 20px;
    box-sizing: border-box;
    position: relative;
    padding-top:1.5rem;
    background:  #F8F2F2;
}
.MainPart{
   width:73.25%; 
   height:90%; 
   position: relative;
   box-sizing: border-box;
   margin: 0 auto;
   padding-top:1.5rem; 
   overflow-y: scroll;
   scrollbar-width:none;
   border-radius: 10px;;
   /* background-image: url('https://picsum.photos/440/960?random=1'); */
   background-image:url('https://thumb.photo-ac.com/f7/f711ad526fd909d3d43787179cf6c06a_t.jpeg');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}
.MainPart2{
   width:100%; 
   height:90%; 
   position: relative;
   box-sizing: border-box;
   margin: 0 auto;
   padding-top:1.5rem;
   overflow-y: scroll;
   scrollbar-width:none;
   border-radius: 10px;;
   /* background-image: url('https://picsum.photos/440/960?random=1'); */
   background-image: url(https://thumb.photo-ac.com/f7/f711ad526fd909d3d43787179cf6c06a_t.jpeg);
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}
.closeIcon{
   cursor: pointer;  
   position: absolute;
   top:0;
   right:0;
}

.profilePart{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    height:auto;
}
.profile-image{
    display: flex;
    width: 100px;
    height: 100px; 
    border-radius: 50%;
    z-index:5;
}
.description {
    font-size: 18px;
    /* color:#0b0b0b; */
    color:#ffffff;
    letter-spacing:.15em;
}
.buttonPart{
   box-sizing: border-box;
   width:80%;
   margin:0 auto;
   padding-left:1rem;
   padding-right:1rem;
}
.clickButton{
  width:100%;
  height:50px;
  font-size:24px;
  text-align: center;
  border:1px solid #737373;
  border-radius: 20px;
  cursor: pointer; 
  background-color: #f1f1a1;
}
.clickButton:hover{
  background-color: #adffeb;
}
.checkInputContainer{
   display:block;
   box-sizing: border-box;
   margin:0 auto;
}
 .buttonHref{
   text-decoration:none;
   padding: 15px; 
   box-sizing: border-box;
} 
.textareaPart{
   width:100%;
   min-height:50px;
   background-color: rgba(0, 0, 0, 0.5);
   color:#ffffff;
   margin-top:.8rem;
   margin-bottom:.8rem;
}
.ImagePart{
    width:100%;
    max-height:300px;
    border-radius:5px;
}
.noLinkContainer{
   width:100%;
   height:50px;
   background-color:rgba(0,0,0,0.6);
   color:#fff;
}
.noImageContainer{
    width:100%;
    height:200px;
    background-color:rgba(0,0,0,0.6);
    color:#fff;
}
.ImagePart img{
  width:100%;
  height:100%;
  border-radius:50px;
}
@media(max-width:1200px){
  .container{
     display:none;
  }
  .checkInputContainer{
     display:none;
  }
  .checkPhone{
    display:none;
  } 
  .container2{
     display:block;
  }
}
/* InputBar 部分 */
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