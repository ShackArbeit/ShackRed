<script setup>
import {readonly, ref,provide} from 'vue';
import SideBarOne from './components/LayoutPart/SideBarOne.vue';
import SideBarTwo from './components/LayoutPart/SideBarTwo.vue';
import ProfileCard from './components/CardPart/ProfileCard.vue';
import LinkCard from './components/CardPart/LinkCard.vue';
import TextCard from './components/CardPart/TextCard.vue';
import ImageCard from './components/CardPart/ImageCard.vue'
import ShowContentBlock from './components/LayoutPart/ShowContentBlock.vue'
import PreviewButton from './components/OutputPart/PreviewButton.vue'
import InputBar from './components/OutputPart/InputBar.vue';
import SideBarTwoContent from './components/LayoutPart/SideBarTwoContent.vue';
import PageOne from './components/EditStylePart/PageOne.vue';
import { nextTick } from 'vue';

//  Pinia Store 關於預覽手機螢幕在小尺寸下打開的按鈕的設定
// 其中  showCellPhoneStore  在 ShowContentBlock.vue & PreviewButton.vue 中使用
import { showCellPhoneStore } from './stores/showCellPhone';
const store = showCellPhoneStore(); 

// 關於螢幕在小尺寸下，點擊鉛筆 Icon 後會出現從下向上的彈跳視窗的部分設定
// 使用在SideBarTwoContent.vue 中所設定的 emit 
const isBottomSheetVisible = ref(false);
const showBottomSheet = () => {
  isBottomSheetVisible.value = true;
  console.log('已經向上滑動了')
};

// 使用 Pinia Store 設定關於點擊連結 Icon 後會在 SubBlockThree 中新增連結卡面的部份
import { useLinkCardStore } from '@/stores/AddAndRemoveLinkCard';
import { useTextCardStore } from '@/stores/AddAndRemoveLinkCard';
import { usetImageCardStore } from '@/stores/AddAndRemoveLinkCard';
const linkCardStore = useLinkCardStore();
const textCardStore=useTextCardStore()
const iamgeCardStore=usetImageCardStore()
// 使用 Pinia Store 將 ProfileCard.js 內的  editProfileStore 函式引入
import { editProfileStore} from '@/stores/ProfileCard';
const profileStore=editProfileStore()


// 產稱額外 Hmtl 檔案部分
const blockThreeRef = ref(null);
function saveHtmlWithCss() {
  nextTick(() => {
    if (blockThreeRef.value) {
      const clonedContent = blockThreeRef.value.cloneNode(true);
      const excludeSpan = clonedContent.querySelector("span.material-symbols-outlined");
      const exclueInput=clonedContent.querySelector("input.inputStyle")
      if (excludeSpan && exclueInput) {
        console.log('移除元素:',exclueInput)
        excludeSpan.remove();
        exclueInput.remove()
      }
      const htmlContent = clonedContent.innerHTML;
      const styles = Array.from(document.querySelectorAll("style"))
        .map((style) => style.innerHTML)
        .join("\n");
      const fullHtmlContent = `
        <html>
          <head>
            <style>${styles}</style>
          </head>
          <body style="position:relative;">
            <div
            style="height:900px; max-width:50%;margin:0 auto;"
            >
              ${htmlContent}
            </div>
          </body>
        </html>
      `;
      const url='http://localhost:3000/api/save-html'
      async function transferHtml(url){
           try{
                const response=await fetch(url,{
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ content: fullHtmlContent, filename: `${profileStore.userName}.html` }),
                })
                if (!response.ok) {
                        throw new Error('Request failed with status ' + response.status);
                  }
                const result=await response.json()
                console.log('回傳結果如下:',result)
           }catch(error){
              console.log('無法上傳，錯誤如下:',error.message)
           }
      }
      transferHtml(url)
      // const blob = new Blob([fullHtmlContent], { type: "text/html" });
      // const link = document.createElement("a");
      // link.href = URL.createObjectURL(blob);
      // link.download = `${profileStore.userName}.html`;
      // link.click();
      // URL.revokeObjectURL(link.href);
      console.log("已經轉檔!");
    } else {
      console.error("blockThreeRef 找不到 DOM 元素");
    }
  });
}

// 控制 "樣式" 與 "首頁" 的部分
const currentView = ref('home');
function updateView(newView){
     currentView.value=newView
}
provide("currentView",readonly(currentView))
provide('updateView',updateView)

</script>

<template>
    <div class="Maincontainer"  >
      <div class="blockOne"  >
          <SideBarOne />
      </div> 
      <div class="blockTwo" v-if="currentView === 'home'">
          <SideBarTwo />  
      </div>
      <div class="blockThree" v-if="currentView === 'home'">
        <div class="mobilSizeTopContainer"  >
              <div class="mobiLogo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 30" fill="none">
                  <path d="M36.4671 5.82045C35.0658 5.82045 33.9304 6.94832 33.9304 8.34025V21.8408C33.9304 21.8408 33.9304 21.8484 33.9304 21.8559V21.8634C33.9304 23.5722 32.5329 24.9566 30.8127 24.9566C29.0924 24.9566 27.7063 23.5798 27.6949 21.8785V8.07242C27.657 3.60996 24.0038 0 19.5038 0C17.2937 0 15.2886 0.871369 13.8152 2.28593C12.3456 0.909091 10.3709 0.0678989 8.19494 0.0678989C3.69114 0.0678989 0.0379747 3.67409 0 8.14032V21.6597C0 23.0517 1.13544 24.1796 2.53671 24.1796C3.23924 24.1796 3.87342 23.8966 4.33291 23.4402C4.79241 22.9838 5.07722 22.3538 5.07722 21.656V8.17427C5.0962 6.48057 6.48228 5.11128 8.19114 5.11128C9.9 5.11128 11.2899 6.48057 11.3089 8.17427V21.8785C11.3203 26.3636 14.9848 30 19.5 30C21.6949 30 23.6848 29.1437 25.1544 27.7518C26.6241 29.1437 28.6177 30 30.8089 30C35.3127 30 38.9658 26.3938 39 21.9276V8.34025C39 6.94832 37.8646 5.82045 36.4633 5.82045H36.4671ZM22.6215 21.8785C22.6101 23.5798 21.2203 24.9566 19.5038 24.9566C17.7873 24.9566 16.3975 23.5798 16.3861 21.8785V8.14032C16.3861 8.14032 16.3861 8.11769 16.3861 8.10637C16.4051 6.41267 17.7911 5.04338 19.5 5.04338C21.2089 5.04338 22.5987 6.41267 22.6177 8.10637V21.8785H22.6215Z" fill="#3A3131"/>
                  </svg>
              </div>
              <InputBar  @save-html=" saveHtmlWithCss"  /> 
              <PreviewButton />
        </div>
        <div class="subBlockThree"  >
            <ProfileCard />
            <!-- 連結卡片 -->
            <LinkCard v-for="card in linkCardStore.linkArray " :key="card.id" :cardId="card.id"/> 
            <!-- 內容卡片 -->
            <TextCard v-for="textCard in textCardStore.cardTextArray" :key="textCard.id" :textCardId="textCard.id"/>
            <ImageCard v-for="imageCard in iamgeCardStore.cardImageArray" :key="imageCard.id" :imageCardId="imageCard.id"/>
            <div class="showBarTwo" @click="showBottomSheet">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z" fill="#FFF8F8"/>
              </svg>
            </div>
         </div>
         <!-- 這是當縮小時跳出彈跳視窗的容器 -->
         <div class='sidebar-two-content'>
             <SideBarTwoContent  :isVisible="isBottomSheetVisible" @update:isVisible="isBottomSheetVisible = $event"
          /> 
          </div>
      </div>
      <div class="blockStyle" v-else-if="currentView === 'style'">
        <div class="mobilSizeTopContainer"  >
              <div class="mobiLogo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 30" fill="none">
                  <path d="M36.4671 5.82045C35.0658 5.82045 33.9304 6.94832 33.9304 8.34025V21.8408C33.9304 21.8408 33.9304 21.8484 33.9304 21.8559V21.8634C33.9304 23.5722 32.5329 24.9566 30.8127 24.9566C29.0924 24.9566 27.7063 23.5798 27.6949 21.8785V8.07242C27.657 3.60996 24.0038 0 19.5038 0C17.2937 0 15.2886 0.871369 13.8152 2.28593C12.3456 0.909091 10.3709 0.0678989 8.19494 0.0678989C3.69114 0.0678989 0.0379747 3.67409 0 8.14032V21.6597C0 23.0517 1.13544 24.1796 2.53671 24.1796C3.23924 24.1796 3.87342 23.8966 4.33291 23.4402C4.79241 22.9838 5.07722 22.3538 5.07722 21.656V8.17427C5.0962 6.48057 6.48228 5.11128 8.19114 5.11128C9.9 5.11128 11.2899 6.48057 11.3089 8.17427V21.8785C11.3203 26.3636 14.9848 30 19.5 30C21.6949 30 23.6848 29.1437 25.1544 27.7518C26.6241 29.1437 28.6177 30 30.8089 30C35.3127 30 38.9658 26.3938 39 21.9276V8.34025C39 6.94832 37.8646 5.82045 36.4633 5.82045H36.4671ZM22.6215 21.8785C22.6101 23.5798 21.2203 24.9566 19.5038 24.9566C17.7873 24.9566 16.3975 23.5798 16.3861 21.8785V8.14032C16.3861 8.14032 16.3861 8.11769 16.3861 8.10637C16.4051 6.41267 17.7911 5.04338 19.5 5.04338C21.2089 5.04338 22.5987 6.41267 22.6177 8.10637V21.8785H22.6215Z" fill="#3A3131"/>
                  </svg>
              </div>
              <InputBar  @save-html=" saveHtmlWithCss"  /> 
              <PreviewButton />
        </div>
        <div class="subStyleBlock" >
              <PageOne/>
        </div>
      </div>
      <div class="blockFour"  ref="blockThreeRef" >
         <ShowContentBlock  :onSaveHtml="saveHtmlWithCss" />
      </div>
      <div class="blockFive" v-if="store.showMainPart" >
         <ShowContentBlock  :onSaveHtml="saveHtmlWithCss" />
      </div>
      <div  class="footer">
        <SideBarOne />
      </div>
    </div>
  </template>
  

<style scoped>
* {
  box-sizing: border-box;
  position: relative;
  margin: 0; 
  padding: 0;
}
html, body {
  width: 100%;
  height: 100%;
} 
.Maincontainer {
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  height:100vh; 
}
/* 低於 1200px 時上面的橫桿 */
.mobilSizeTopContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top:15px; 
  padding-left:15px; 
  padding-right:15px; 
  background: #F8F2F2;
  /* background-color: #f9f3d0; */
}
.showBarTwo{
   display:none;
   width: 80px;
   height: 80px;
   position: absolute;
   right: 24px;
   bottom: 32px;
   cursor: pointer;
}
.blockFive{
  display:none;
  height:100%;
}
.subStyleBlock{
  width:93.25%;
  /* background-color: darkkhaki; */
  background:  #FEF8F7;
  height:100%;
  overflow-y: auto;
  scrollbar-width:none;
  max-height:100%;
  margin:0 auto;
}

/* 1200px 以上的佈局 */
@media (min-width: 1200px) {
  .blockOne {
    width: 6.6%;
    min-height:700px;
  }
  .blockTwo {
    width: 18.33%;
    min-height:700px;
  }
  .blockThree {
    width: 45%;
    display: flex;
    flex-direction: column;
    min-height:700px;
    background:  #F8F2F2;
    padding-top: 24px; 
    border:1px solid #bdc2c3;
    border-radius: 10px;;
  }
  .blockStyle{
     width:59.33%;
     background:  #F8F2F2;
     border:1px solid #bdc2c3;
     border-radius: 10px;
     box-sizing: border-box;
     padding-top:1.5rem;
     padding-bottom:1.5rem;
  }
  .mobilSizeTopContainer {
     display: none;
  }
  .subBlockThree{
    width:100%;
    height:95%;
    padding-top: 24px;
    padding-bottom:24px; 
    border-radius: 24px;
    background:  #FEF8F7; 
    position: relative;
    overflow-y: auto;
    scrollbar-width:none;
    border:1px solid #bdc2c3;
  }
  .sidebar-two-content {
    display: none;
  }

  .blockFour {
    width: 33.33%;
    min-height:700px;
    background:  #FEF8F7; 
    border:1px solid #bdc2c3;
    border-radius: 10px;;
  }
  .mobiLogo{
     display:none;
  }
  .footer{
     display:none;
  }
}

/* 768px - 1200px 之間的佈局 */
@media (max-width: 1200px) {
  .blockFour {
      display:none;
  }
  .blockFive{
    display: block;
    z-index:10;
    position: absolute;
    top:50%;
    left: 50%;
    width:55%;
    transform: translate(-50%, -50%);
  }
  .blockThree {
    width: 69.67%; 
    min-height:100%;
    background:  #F8F2F2;
    border:1px solid #bdc2c3;

  }
  .subBlockThree{
    width:100%;
    padding-top:24px;
    height:95%;
    max-height:980px; 
    border-radius: 20px;
    position: relative;
    top:3%;
    overflow-y: auto;
    scrollbar-width:none;
    height:100%;
    background:  #FEF8F7; 
    border:1px solid #bdc2c3;
  }
   .sidebar-two-content {
    display: none;
  }
  .blockStyle{
      width:83.33%;
      background:  #F8F2F2;
      border:1px solid #bdc2c3;
      border-radius: 10px;;
      box-sizing: border-box;
      padding-top:1.5rem;
      padding-bottom:1.5rem;
  }
  .subStyleBlock{
    position: relative;
    top:1.5rem;
    max-height:86%;
    border-radius: 10px;;
}
  .blockOne {
    width: 10.54%;
    min-height:100%;
  }
  .blockTwo {
      width: 19.81%;
      min-height:100%;
  }
  .mobilSizeTopContainer{
     justify-content: space-between;
  }
  .mobiLogo{
     display:none;
  }
  .footer{
      display:none;
  }
}

/* 768px 以下的佈局 */
@media (max-width: 768px) {
  .Maincontainer{
    display:block;
  }
  .blockFour {
    display: none;
  }
  .blockFive{
    display: block;
    z-index:10;
    position: absolute;
    top:50%;
    left: 50%;
    width:70%;
    transform: translate(-50%, -50%);
  }
  .blockThree {
    width: 100%;
    height:100vh;
    box-sizing: border-box;
    padding-bottom:9rem; 
    background:  #FEF8F7;  
  }
  .subBlockThree{
      width:90%;
      margin:0 auto;
      height:90%;
      max-height: 1000px; 
      overflow-y: auto;
      scrollbar-width:none;
      position: relative; 
      padding-top: 24px; 
      background:  #FEF8F7; 
      border:1px solid #bdc2c3;  
  }
  .blockStyle{
      width:100%;
      background:  #F8F2F2;
      border:1px solid #bdc2c3;
      border-radius: 10px;
      box-sizing: border-box;
      padding-bottom:3rem;  
  }
  .subStyleBlock{
    max-height:86%;
    border-radius: 10px;;
  }
  .showBarTwo{
     display:flex;
     border-radius: 16px;
     justify-content: center;
     align-items: center;
     background: #5E5353;
     box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30);
  }
  .sidebar-two-content {
    display: block;
  }
    .blockOne {
       display:none;
    }
    .blockTwo {
      display: none;
    }
    .footer {
      display:block;
      width: 100%;
    }
    .mobiLogo{
      display:block;
      width:39px;
      height:39px;
      margin-right:1rem;
    }
}
@media(max-width:576px){
  .blockFive{
    display: block;
    z-index:10;
    position: absolute;
    width:80%;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}


</style>
