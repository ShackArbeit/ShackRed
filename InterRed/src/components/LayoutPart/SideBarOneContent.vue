<script setup>
import {inject} from 'vue'
inject('currentView','home')
const updateView = inject('updateView');

if (!updateView) {
  console.error('updateView is not provided');
}
</script>


<template>
<div class="pageIconPart">
        <div class="pageIconStyle"  @click="updateView('home')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_59206_7163" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_59206_7163)">
                <path d="M4 19V10C4 9.68333 4.07083 9.38333 4.2125 9.1C4.35417 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C11.15 3.63333 11.55 3.5 12 3.5C12.45 3.5 12.85 3.63333 13.2 3.9L19.2 8.4C19.45 8.58333 19.6458 8.81667 19.7875 9.1C19.9292 9.38333 20 9.68333 20 10V19C20 19.55 19.8042 20.0208 19.4125 20.4125C19.0208 20.8042 18.55 21 18 21H15C14.7167 21 14.4792 20.9042 14.2875 20.7125C14.0958 20.5208 14 20.2833 14 20V15C14 14.7167 13.9042 14.4792 13.7125 14.2875C13.5208 14.0958 13.2833 14 13 14H11C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15V20C10 20.2833 9.90417 20.5208 9.7125 20.7125C9.52083 20.9042 9.28333 21 9 21H6C5.45 21 4.97917 20.8042 4.5875 20.4125C4.19583 20.0208 4 19.55 4 19Z" fill="#4E4545"/>
                </g>
            </svg>
            <p>主頁</p>
        </div>
        <div class="pageIconStyle" @click="updateView('style')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_59206_7177" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_59206_7177)">
                <path d="M11 11.8V15C11 15.2833 11.0958 15.5208 11.2875 15.7125C11.4792 15.9042 11.7167 16 12 16C12.2833 16 12.5208 15.9042 12.7125 15.7125C12.9042 15.5208 13 15.2833 13 15V11.8L13.9 12.7C14.0833 12.8833 14.3167 12.975 14.6 12.975C14.8833 12.975 15.1167 12.8833 15.3 12.7C15.4833 12.5167 15.575 12.2833 15.575 12C15.575 11.7167 15.4833 11.4833 15.3 11.3L12.7 8.7C12.5 8.5 12.2667 8.4 12 8.4C11.7333 8.4 11.5 8.5 11.3 8.7L8.7 11.3C8.51667 11.4833 8.425 11.7167 8.425 12C8.425 12.2833 8.51667 12.5167 8.7 12.7C8.88333 12.8833 9.11667 12.975 9.4 12.975C9.68333 12.975 9.91667 12.8833 10.1 12.7L11 11.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#4E4545"/>
                </g>
                </svg>
            <p>樣式</p>
        </div>
    </div>

</template>

<style scoped>
.pageIconPart{
    display: flex;
    width: 80px;
    padding-bottom: 24px;
    height:70%;
    justify-content: center;
    flex-direction: column; 
    align-items: center;
}
.pageIconStyle{
    cursor: pointer;
    display: flex;
    padding: 4px 16px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
@media (max-width: 768px){
    .pageIconPart{
         flex-direction: row;
         width:100%;
         justify-content: center;
         align-items: center;
         padding-bottom:0;
         padding-top:12px;
         box-sizing: border-box;
    }
    .pageIconStyle{
         width:25%;
         padding: 4px 16px;
         display:flex;
         justify-content: center;
         align-items: center;
    }
}




</style>