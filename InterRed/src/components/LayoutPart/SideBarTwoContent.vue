<script setup>
import { ref } from 'vue';
// 這裡定義 Emit ，將改變 isVisible 的值送到 App.vue 中的 <div class='sidebar-two-content'> 裡面
// 的  <SideBarTwoContent  :isVisible="isBottomSheetVisible" @update:isVisible="isBottomSheetVisible = $event"/>
const props = defineProps({
   isVisible: Boolean
});
const emit = defineEmits(['update:isVisible']);
const hideBottomSheet = () => {
  emit('update:isVisible', false);
};
// 使用 Pinia Store 部分
import { useLinkCardStore } from '@/stores/AddAndRemoveLinkCard';
import { useTextCardStore } from '@/stores/AddAndRemoveLinkCard';
import { usetImageCardStore } from '@/stores/AddAndRemoveLinkCard';
import { allCount } from '../../stores/AddAndRemoveLinkCard';
const linkCardStore = useLinkCardStore();
const textCardStore=useTextCardStore()
const iamgeCardStore=usetImageCardStore()
function addLinkCard() {
  linkCardStore.addLinkCard();
  console.log('確認已經新增連接卡片了!')
}
function addLinkCard2() {
  linkCardStore.addLinkCard();
  console.log('小尺寸下確認已經新增卡片了!')
}
function addTextCard(){
   textCardStore.addTextCard()
   console.log('確認已經新增文字卡片了!')
}
function addTextCard2(){
   textCardStore.addTextCard()
   console.log('小尺寸下確認已經新增文字卡片了!')
}
function addImageCard(){
   iamgeCardStore.addImageCard()
   console.log('確認已經新增圖片卡片了!')
}   

function addImageCard2(){
  iamgeCardStore.addImageCard()
  console.log('在小尺寸確認已新增圖片卡片了!')
}

// 定義 class="bottom-sheet-overlay" 的滑動消失效果
let countScreenMove = ref(0);
let moveDistance = ref(0);

function TouchStart(event) {
  countScreenMove.value = event.touches[0].clientY;
  console.log('現在開始滑動');
}
function TouchDown(event) {
    moveDistance.value = event.touches[0].clientY - countScreenMove.value;
}
function TouchEnd() {
  if (moveDistance.value > 50) { 
    hideBottomSheet();
    console.log('區塊已經消失了!');
  }
  moveDistance.value = 0; 
}

</script>

<template>
<div class="blockIconPart">
             <div class="Icons" @click="addTextCard">
                <div class="IconsDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_59209_7054" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect x="9.15527e-05" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_59209_7054)">
                        <path d="M10.5001 7H6.50009C6.08342 7 5.72926 6.85417 5.43759 6.5625C5.14592 6.27083 5.00009 5.91667 5.00009 5.5C5.00009 5.08333 5.14592 4.72917 5.43759 4.4375C5.72926 4.14583 6.08342 4 6.50009 4H17.5001C17.9168 4 18.2709 4.14583 18.5626 4.4375C18.8543 4.72917 19.0001 5.08333 19.0001 5.5C19.0001 5.91667 18.8543 6.27083 18.5626 6.5625C18.2709 6.85417 17.9168 7 17.5001 7H13.5001V18.5C13.5001 18.9167 13.3543 19.2708 13.0626 19.5625C12.7709 19.8542 12.4168 20 12.0001 20C11.5834 20 11.2293 19.8542 10.9376 19.5625C10.6459 19.2708 10.5001 18.9167 10.5001 18.5V7Z" fill="#4E4545"/>
                        </g>
                    </svg>
                </div>
                <p class="iconDec">文字</p>
             </div>
             <div class="Icons" @click="addLinkCard">
                <div class="IconsDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_59209_7068" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect x="9.15527e-05" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_59209_7068)">
                        <path d="M7.00009 17C5.61676 17 4.43759 16.5125 3.46259 15.5375C2.48759 14.5625 2.00009 13.3833 2.00009 12C2.00009 10.6167 2.48759 9.4375 3.46259 8.4625C4.43759 7.4875 5.61676 7 7.00009 7H10.0001C10.2834 7 10.5209 7.09583 10.7126 7.2875C10.9043 7.47917 11.0001 7.71667 11.0001 8C11.0001 8.28333 10.9043 8.52083 10.7126 8.7125C10.5209 8.90417 10.2834 9 10.0001 9H7.00009C6.16676 9 5.45842 9.29167 4.87509 9.875C4.29176 10.4583 4.00009 11.1667 4.00009 12C4.00009 12.8333 4.29176 13.5417 4.87509 14.125C5.45842 14.7083 6.16676 15 7.00009 15H10.0001C10.2834 15 10.5209 15.0958 10.7126 15.2875C10.9043 15.4792 11.0001 15.7167 11.0001 16C11.0001 16.2833 10.9043 16.5208 10.7126 16.7125C10.5209 16.9042 10.2834 17 10.0001 17H7.00009ZM9.00009 13C8.71676 13 8.47926 12.9042 8.28759 12.7125C8.09592 12.5208 8.00009 12.2833 8.00009 12C8.00009 11.7167 8.09592 11.4792 8.28759 11.2875C8.47926 11.0958 8.71676 11 9.00009 11H15.0001C15.2834 11 15.5209 11.0958 15.7126 11.2875C15.9043 11.4792 16.0001 11.7167 16.0001 12C16.0001 12.2833 15.9043 12.5208 15.7126 12.7125C15.5209 12.9042 15.2834 13 15.0001 13H9.00009ZM14.0001 17C13.7168 17 13.4793 16.9042 13.2876 16.7125C13.0959 16.5208 13.0001 16.2833 13.0001 16C13.0001 15.7167 13.0959 15.4792 13.2876 15.2875C13.4793 15.0958 13.7168 15 14.0001 15H17.0001C17.8334 15 18.5418 14.7083 19.1251 14.125C19.7084 13.5417 20.0001 12.8333 20.0001 12C20.0001 11.1667 19.7084 10.4583 19.1251 9.875C18.5418 9.29167 17.8334 9 17.0001 9H14.0001C13.7168 9 13.4793 8.90417 13.2876 8.7125C13.0959 8.52083 13.0001 8.28333 13.0001 8C13.0001 7.71667 13.0959 7.47917 13.2876 7.2875C13.4793 7.09583 13.7168 7 14.0001 7H17.0001C18.3834 7 19.5626 7.4875 20.5376 8.4625C21.5126 9.4375 22.0001 10.6167 22.0001 12C22.0001 13.3833 21.5126 14.5625 20.5376 15.5375C19.5626 16.5125 18.3834 17 17.0001 17H14.0001Z" fill="#4E4545"/>
                        </g>
                    </svg>
                </div>
                 <p class="iconDec">連結</p>
             </div>
             <div class="Icons" @click="addImageCard">
                <div class="IconsDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_59209_7075" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect x="9.15527e-05" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_59209_7075)">
                        <path d="M5.00009 21C4.45009 21 3.97926 20.8042 3.58759 20.4125C3.19592 20.0208 3.00009 19.55 3.00009 19V5C3.00009 4.45 3.19592 3.97917 3.58759 3.5875C3.97926 3.19583 4.45009 3 5.00009 3H19.0001C19.5501 3 20.0209 3.19583 20.4126 3.5875C20.8043 3.97917 21.0001 4.45 21.0001 5V19C21.0001 19.55 20.8043 20.0208 20.4126 20.4125C20.0209 20.8042 19.5501 21 19.0001 21H5.00009ZM5.00009 19H19.0001V5H5.00009V19ZM7.00009 17H17.0001C17.2001 17 17.3501 16.9083 17.4501 16.725C17.5501 16.5417 17.5334 16.3667 17.4001 16.2L14.6501 12.525C14.5501 12.3917 14.4168 12.325 14.2501 12.325C14.0834 12.325 13.9501 12.3917 13.8501 12.525L11.2501 16L9.40009 13.525C9.30009 13.3917 9.16676 13.325 9.00009 13.325C8.83342 13.325 8.70009 13.3917 8.60009 13.525L6.60009 16.2C6.46676 16.3667 6.45009 16.5417 6.55009 16.725C6.65009 16.9083 6.80009 17 7.00009 17Z" fill="#4E4545"/>
                        </g>
                    </svg>
                </div>
                 <p class="iconDec">圖片</p>
             </div>
</div>

<!-- 小於 768 px 時向上滑動的部分 -->
<div class="bottom-sheet-overlay" v-if="isVisible" @click="hideBottomSheet" > 
      <div class="bottom-sheet" >
        <div class="bottom-sheet-header">
          <div class="handle" 
          @click.stop
          @touchstart="TouchStart"
          @touchmove="TouchDown"
          @touchend="TouchEnd"
          ></div>
        </div>
        <div class="bottom-sheet-content">
            <div style="display:flex;align-items: center;">
                    <div >
                        <span class="material-symbols-outlined" style="font-size:35px;cursor:pointer" @click="hideBottomSheet">
                          close
                        </span>
                    </div>
                    <div class="blockPart">
                    <span style="
                                font-size: 16px;
                                font-weight: 500;
                                letter-spacing: 2px;
                                margin-right:1rem;">已新增的區塊</span>
                    <span style="display: flex;flex-direction: column;justify-content: center;align-items: center;gap: 8px;align-self: stretch;">
                     {{allCount }} /15
                    </span>
                    </div>
            </div>
          <div class="blockIconPart2">
                <div class="Icons2" @click="addTextCard2">
                        <div class="IconsDiv2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                <mask id="mask0_59209_7054" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect x="9.15527e-05" width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_59209_7054)">
                                <path d="M10.5001 7H6.50009C6.08342 7 5.72926 6.85417 5.43759 6.5625C5.14592 6.27083 5.00009 5.91667 5.00009 5.5C5.00009 5.08333 5.14592 4.72917 5.43759 4.4375C5.72926 4.14583 6.08342 4 6.50009 4H17.5001C17.9168 4 18.2709 4.14583 18.5626 4.4375C18.8543 4.72917 19.0001 5.08333 19.0001 5.5C19.0001 5.91667 18.8543 6.27083 18.5626 6.5625C18.2709 6.85417 17.9168 7 17.5001 7H13.5001V18.5C13.5001 18.9167 13.3543 19.2708 13.0626 19.5625C12.7709 19.8542 12.4168 20 12.0001 20C11.5834 20 11.2293 19.8542 10.9376 19.5625C10.6459 19.2708 10.5001 18.9167 10.5001 18.5V7Z" fill="black"/>
                                </g>
                            </svg>
                        </div>
                        <p class="iconDec">文字</p>
                </div>
                <div class="Icons2" @click="addLinkCard2"  >
                    <div class="IconsDiv2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <mask id="mask0_59209_7068" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect x="9.15527e-05" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_59209_7068)">
                            <path d="M7.00009 17C5.61676 17 4.43759 16.5125 3.46259 15.5375C2.48759 14.5625 2.00009 13.3833 2.00009 12C2.00009 10.6167 2.48759 9.4375 3.46259 8.4625C4.43759 7.4875 5.61676 7 7.00009 7H10.0001C10.2834 7 10.5209 7.09583 10.7126 7.2875C10.9043 7.47917 11.0001 7.71667 11.0001 8C11.0001 8.28333 10.9043 8.52083 10.7126 8.7125C10.5209 8.90417 10.2834 9 10.0001 9H7.00009C6.16676 9 5.45842 9.29167 4.87509 9.875C4.29176 10.4583 4.00009 11.1667 4.00009 12C4.00009 12.8333 4.29176 13.5417 4.87509 14.125C5.45842 14.7083 6.16676 15 7.00009 15H10.0001C10.2834 15 10.5209 15.0958 10.7126 15.2875C10.9043 15.4792 11.0001 15.7167 11.0001 16C11.0001 16.2833 10.9043 16.5208 10.7126 16.7125C10.5209 16.9042 10.2834 17 10.0001 17H7.00009ZM9.00009 13C8.71676 13 8.47926 12.9042 8.28759 12.7125C8.09592 12.5208 8.00009 12.2833 8.00009 12C8.00009 11.7167 8.09592 11.4792 8.28759 11.2875C8.47926 11.0958 8.71676 11 9.00009 11H15.0001C15.2834 11 15.5209 11.0958 15.7126 11.2875C15.9043 11.4792 16.0001 11.7167 16.0001 12C16.0001 12.2833 15.9043 12.5208 15.7126 12.7125C15.5209 12.9042 15.2834 13 15.0001 13H9.00009ZM14.0001 17C13.7168 17 13.4793 16.9042 13.2876 16.7125C13.0959 16.5208 13.0001 16.2833 13.0001 16C13.0001 15.7167 13.0959 15.4792 13.2876 15.2875C13.4793 15.0958 13.7168 15 14.0001 15H17.0001C17.8334 15 18.5418 14.7083 19.1251 14.125C19.7084 13.5417 20.0001 12.8333 20.0001 12C20.0001 11.1667 19.7084 10.4583 19.1251 9.875C18.5418 9.29167 17.8334 9 17.0001 9H14.0001C13.7168 9 13.4793 8.90417 13.2876 8.7125C13.0959 8.52083 13.0001 8.28333 13.0001 8C13.0001 7.71667 13.0959 7.47917 13.2876 7.2875C13.4793 7.09583 13.7168 7 14.0001 7H17.0001C18.3834 7 19.5626 7.4875 20.5376 8.4625C21.5126 9.4375 22.0001 10.6167 22.0001 12C22.0001 13.3833 21.5126 14.5625 20.5376 15.5375C19.5626 16.5125 18.3834 17 17.0001 17H14.0001Z" fill="black"/>
                            </g>
                        </svg>
                    </div>
                    <p class="iconDec">連結</p>
                   </div>
                <div class="Icons2" @click="addImageCard">
                    <div class="IconsDiv2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <mask id="mask0_59209_7075" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect x="9.15527e-05" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_59209_7075)">
                            <path d="M5.00009 21C4.45009 21 3.97926 20.8042 3.58759 20.4125C3.19592 20.0208 3.00009 19.55 3.00009 19V5C3.00009 4.45 3.19592 3.97917 3.58759 3.5875C3.97926 3.19583 4.45009 3 5.00009 3H19.0001C19.5501 3 20.0209 3.19583 20.4126 3.5875C20.8043 3.97917 21.0001 4.45 21.0001 5V19C21.0001 19.55 20.8043 20.0208 20.4126 20.4125C20.0209 20.8042 19.5501 21 19.0001 21H5.00009ZM5.00009 19H19.0001V5H5.00009V19ZM7.00009 17H17.0001C17.2001 17 17.3501 16.9083 17.4501 16.725C17.5501 16.5417 17.5334 16.3667 17.4001 16.2L14.6501 12.525C14.5501 12.3917 14.4168 12.325 14.2501 12.325C14.0834 12.325 13.9501 12.3917 13.8501 12.525L11.2501 16L9.40009 13.525C9.30009 13.3917 9.16676 13.325 9.00009 13.325C8.83342 13.325 8.70009 13.3917 8.60009 13.525L6.60009 16.2C6.46676 16.3667 6.45009 16.5417 6.55009 16.725C6.65009 16.9083 6.80009 17 7.00009 17Z" fill="black"/>
                            </g>
                        </svg>
                    </div>
                    <p class="iconDec">圖片</p>
                </div>
           </div>
        </div>
      </div>
     </div> 

</template>

<style scoped>
.blockIconPart{
    display: flex;
    height: 970px;
    padding: 0px 24px 24px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
}
.blockIconPart2{
     display:flex;
     flex-direction: column;
}
.Icons{
    display: flex;
    height: 56px;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    align-self: stretch;
    cursor: pointer;
    margin:0 auto;
}
.Icons2{
   text-align: left;
   margin-top:.5em;
   display:flex;
   margin-bottom:.5rem;
   align-items: center;
}
.iconDec{
   font-size:21px;
   margin-left:1.5rem;
}

@media(max-width:1200px){
    .Icons{
        flex-direction: column;
        margin-top:1rem;
        margin-bottom:1rem;
        cursor: pointer;
    }
    .IconsDiv{
       margin-bottom:-1.5rem; 

    }  
}

@media(max-width:768px){
    .blockIconPart{
         display:none;
    }
}

/* 向上滑動樣式的部分 */
.blockPart{
    display: flex;
    font-size:18px;
    align-items: center;
    align-self: stretch;
    margin: 0 auto;
}
.bottom-sheet-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: flex-end;
    z-index: 10;
    background: rgba(0, 0, 0, 0.7);

} 
  .bottom-sheet {
    width: 100%;
    background:  #F8F2F2;
    height:60%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    animation: slideUp 0.3s ease-out;
    color: #4E4545;
    cursor:pointer;
  }
  .bottom-sheet-header {
    padding: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .handle {
    width: 80px;
    height: 20px;
    background: #ccc;
    border-radius: 5px;
  }
  .bottom-sheet-content {
    padding: 20px;
  }
  .options button {
    margin: 5px;
    padding: 10px;
    background: #f5f5f5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

</style>