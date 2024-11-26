<script setup>
import {ref,watch} from "vue"
const previewImage=ref(null)
const fileInput=ref(null)
watch(previewImage,(newImage)=>{
    if(newImage){
       console.log('圖片已經更新了')
    }
})
const onDrageOver=(event)=>{
      console.log('開始拖放')
      event.preventDefault()
}
const onDrop=(event)=>{
     event.preventDefault()
     const file=event.dataTransfer.files[0]
     if(file){
         const reader=new FileReader()
         reader.onload=(event)=>{
             previewImage.value=event.target.result
             console.log("已經拖放檔案了")
         }
         reader.readAsDataURL(file)
     }
}
const onFileChange=(event)=>{
     const file=event.target.files[0]
     if(file){
         const reader=new FileReader()
         reader.onload=(event)=>{
            previewImage.value=event.target.result
            console.log("已經上傳檔案了")
         }
         reader.readAsDataURL(file)
     }
}
const triggerFileInput=()=>{
     fileInput.value.click()
}
</script>


<template>
   <div class="frame-52">
        <div class="tablet-1200">
          <div class="content">
            <div class="div">
              <div class="div2">設定你的個人簡介</div>
            </div>
            <div class="div3">
              <div class="div4">選擇頭像</div>
              <div class="frame-4">
                 <div class="upload-container"
                      @dragover.prevent="onDrageOver"
                      @drop="onDrop"
                      @click="triggerFileInput"
                 >
                      <input
                         type="file"
                         hidden
                         ref="fileInput"
                         @change="onFileChange"
                         accept="image/*"
                      />
                      <div v-if="previewImage" class="preview">
                           <img :src="previewImage" alt="上傳的大頭照"/>
                      </div>
                      <div v-else>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <mask id="mask0_59397_25883" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                              <rect width="40" height="40" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_59397_25883)">
                              <path d="M8.33333 35C7.41667 35 6.63194 34.6736 5.97917 34.0208C5.32639 33.3681 5 32.5833 5 31.6667V8.33333C5 7.41667 5.32639 6.63194 5.97917 5.97917C6.63194 5.32639 7.41667 5 8.33333 5H21.6667V8.33333H8.33333V31.6667H31.6667V18.3333H35V31.6667C35 32.5833 34.6736 33.3681 34.0208 34.0208C33.3681 34.6736 32.5833 35 31.6667 35H8.33333ZM10 28.3333H30L23.75 20L18.75 26.6667L15 21.6667L10 28.3333ZM28.3333 15V11.6667H25V8.33333H28.3333V5H31.6667V8.33333H35V11.6667H31.6667V15H28.3333Z" fill="#D1C3C3"/>
                            </g>
                          </svg>
                   <p id="upload-text">點擊或拖放圖片至此</p>
                      </div>
                 </div>
              </div>
            </div>
            <div class="div5">
              <div class="div4">新增名稱與自我介紹</div>
              <div class="text-field">
                    <input type="text" placeholder="輸入名稱"
                    class="text-field2"  id="name">       
                    <span class="warning" id="nameWarning">必填</span> <!-- 修正這裡的 id -->
              </div>
              <div class="text-field">
                <div class="input-container" id="intro_container">
                    <textarea placeholder="輸入自我介紹" class="text-area" id="intro" ></textarea>
                    <div class="character-count">0/100</div>    
                </div>   
                <span class="warning" id="introWarning">必填</span>      
                
                </div>
            </div>
            <div class="div6">
                <button class="button"  id="submitBtn" >下一步</button> 
            </div>
          </div>
        </div>
      </div>



</template>


<style scoped>

.frame-52,
.frame-52 * {
  box-sizing: border-box;
}
.frame-52 {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}
.tablet-1200 {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  height: 900px;
  position: relative;
  overflow: hidden;
}
.content {
  padding: 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  max-width: 1280px;
  max-height: 960px;
  position: relative;
}
.div {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.div2 {
  color: #000000;
  text-align: center;
  font-family: NotoSansTc-Bold;
  font-size: 57px;
  line-height: 64px;
  letter-spacing:  -0.25px;
  font-weight: 700;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.div3 {
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.div4 {
  color: #000000;
  text-align: center;
  font-family:NotoSansTc-Medium;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: 0.15px;
  font-weight: 500;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}
.frame-4 {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  border:2px solid red;
}
.upload-container {
            width: 70%;
            /* max-width: 500px; */
            height:200px; 
            border: 2px dashed #ccc;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f4f4f4;
            flex-direction: column;
            cursor: pointer;
            text-align: center;
            position: relative;
     }
.upload-container:hover {
         background-color: #e9e9e9;
}
.preview img {
        width:100%;
        height: 100%;     
        border-radius: 10px;
        object-fit: fill;
 } 
.user2 {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  position: relative;
  overflow: visible;
}
.user3 {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  position: relative;
  overflow: visible;
}
.plus {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  position: relative;
  overflow: visible;
}
.div5 {
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.text-field {
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height:66px;
  max-width: 470px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
/* 填寫自我介紹部分的容器 */
.input-container {
    width: 100%;
    position: relative;
    border: 1px solid #7f7474;
    border-radius: 10px;
    padding: 10px;
    margin-top:-2rem;
}
/* 以下為填寫框框內的 Placeholder  */
.text-area {
    width:100%; 
    height: 80px; 
    border: none; 
    resize: none; 
    font-size: 20px;
    font-family: Inter-Regular;
    outline: none;
    padding-left: 1rem;
}
.character-count {
    font-size:20px;
    color: #7f7474;
    position:absolute;
    top:1rem;
    right:1rem;
    align-self: flex-end; 
}
/* 新增名稱的輸入框 */
.text-field2 {
    padding-left:1.5rem;
    cursor:pointer;
    width:100%;
    height:100%;
    border-radius: 1000px;
    border:1px solid #7f7474;
    font-size: 20px;
    letter-spacing:-0.02em; 
    font-weight: 400;
    color: #4e4545;
    text-align: left;
    outline: none;
    font-family: Inter-Regular;
}
/* 確定的按鈕預設是灰色 */
.button {
    max-width: 470px;
    /* background:#3a3131; */
    background-color: gray;
    border-radius: 100px;
    font-size: 14px;
    cursor:pointer;
    line-height: 20px;
    letter-spacing: 0.1px;
    font-weight: 500;
    gap: 8px;
    color:#ffffff;
    height: 48px;
    width:100%;
    position: relative;
    overflow: hidden;
}
/* 有輸入內容按鈕才會顯示可點擊的狀態 */
.button.enabled {
    background-color: #3a3131;
    cursor: pointer;
}
  
.button:disabled {
    background-color:gray;
}
/* 若輸入空白後會顯示的隱藏 Class */
.warning {
    color: red;
    font-size: 14px;
    margin-top:.5rem;
    font-weight:600;
    visibility: hidden; 
}
.text-field2:hover{
    border:2px solid #6c86f5;
}
.text-field2:focus{
    border:2px solid #fa3c76;
} 

.text-field3 {
    padding-left:1rem;
    cursor:pointer;
    width:100%;
    height:100%;
    border-radius: 1000px;
    border:1px solid #7f7474;
    font-size: 20px;
    letter-spacing:-0.02em; 
    font-weight: 400;
    color: #4e4545;
    text-align: left;
    outline: none;
    font-family: Inter-Regular;
}




.div6 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
@media (max-width: 768px) {
    .div2{
        font-size:32px;
    }
    .text-field2{
        font-size:15px;
        height:80%;
    }
    .div4{
        font-size:12px;
    }
    .text-area{
        font-size:12px;
    }
    .character-count{
        font-size:12px;
    }

 
}
@media (max-width: 414px) {
    .div2{
        font-size:20px;
    }
}


</style>