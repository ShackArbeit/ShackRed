<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const inputRef=ref(null)
const router=useRouter()
function goToProfileSettings(){
     if(inputRef.value===null){
       window.alert('請輸入一個使用者名稱 !')
       return 
     }
     else{
         router.push('/setting/profile')
     }
}
</script>

<template>
 <div class="tablet-1200">
        <div class="content">
          <div class="div">
            <div class="div2">開始創建你的專屬主頁！</div>
          </div>
          <div class="div3">
            <div class="div4">選擇你的使用者名稱，隨時可以修改。</div>
            <div class="text-field">   
                      <input 
                      type="text" 
                      v-model="inputRef"
                      placeholder="ShackWeb / 使用者名稱"
                      class="text-field2">   
            </div>
          </div>
          <div class="div5">
                <button class="button" @click="goToProfileSettings">下一步</button>       
          </div>
        </div>
      </div>


</template>


<style scoped>
.tablet-1200,
.tablet-1200 * {
  box-sizing: border-box;
}
.tablet-1200 {
  background: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 900px; 
  position: relative;
}
.content {
  padding: 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  flex: 1;
  max-width: 1280px;
  width:100%;
  max-height: 960px;
  position: relative;
}
.div2 {
  color: #000000;
  text-align: center;
  font-family:NotoSansTc-Bold;
  font-size:  57px;
  font-weight: 700;
  position: relative;
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
  font-size: 16px;
  width:100%;
  line-height:24px;
  letter-spacing: 0.15px;
  font-weight: 500;
  position: relative;
}
.text-field {
  border-radius: 4px 4px 0px 0px;
  display: flex;
  align-items: center;
  justify-content:center;
  width: 100%;
  height: 60px;
  max-width: 470px;
  position: relative;
}
.text-field2 {
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
.text-field2:hover{
    border:2px solid #6c86f5;
}
.text-field2:focus{
    border:2px solid #fa3c76;
}
.div5 {
  width: 100%;
  text-align:center;
}
.button {
  max-width: 470px;
  background:#3a3131;
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
 
}
@media (max-width: 414px) {
    .div2{
        font-size:20px;
    }
}



</style>