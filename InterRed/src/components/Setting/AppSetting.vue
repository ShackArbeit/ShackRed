<script setup>
import { ref,watch } from 'vue';
const socialAccount=ref([
  {Name: 'Instagram',Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkw4t_QTzNd6OWYS9OPOxKYU_dwYmk7w-QhA&s',Value:''},
  {Name:'X',Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1Tb8teKM8VPmbsjyUg86TexpO8rZxoT17fD52fg3dwpo-R8LN3sIZH6aCE0RlllaY20&usqp=CAU',Value:''},
  {Name:'TikTok',Image:'https://tfc-taiwan.org.tw/sites/default/files/imce/images/1_TikTok.png',Value:''},
  {Name:'Facebook',Image:'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg',Value:''},
  {Name:'YouTube',Image:'https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj',Value:''},
  {Name:'個人連結',Image:'https://static-00.iconduck.com/assets.00/create-link-icon-1024x1024-magrbcee.png',Value:''}
])
watch(
  socialAccount,
  (newVal,oldVal)=>{
    console.log('Value 正在改變中')
     console.log(newVal)
     console.log(oldVal)
  },
  {deep:true}
)

</script>


<template>

<div class="desktop-1200">
        <div class="frame-42">
          <div class="frame-41">
            <div> 
              <div class="div2">連結你的社群帳號</div>
            </div> 
            <div class="div3" v-for="(account,index) in socialAccount">
              <div class="frame-9" :key="index">
                <div class="frame-26">
                  <div class="skill-icons-instagram">
                    <img class="group" :src="account.Image" />
                  </div>
               </div>  
                <div class="text-field">
                          <input 
                          class="text-field2"
                          :placeholder="`請輸入 ${account.Name} 使用者名稱`"
                          v-model="account.Value"
                          type="text">
                </div>
              </div>       
            </div>  
            <div class="buttonContainer">
                <button class="button2"> 
                                略過
                </button>
                <button class="button">下一步</button> 
            </div>    
        </div>        
    </div>
</div>

</template>

<style scoped>
.desktop-1200,
.desktop-1200 * {
  box-sizing: border-box;
}
.desktop-1200 {
  background: #ffffff;
  display: flex;
  flex-direction:row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.frame-42 {
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  max-width: 1280px;
  width:100%;
  max-height: 960px;
  position: relative;
  box-sizing: border-box;
}
 .frame-41 {
  padding: 53px 0px 53px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  height: 900px;
  position: relative;
} 
.div2 {
  color: #000000;
  text-align: center;
  font-family: NotoSansTc-Bold;
  font-size: 57px;
  line-height: 64px;
  letter-spacing: -0.25px;
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
  gap: 24px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.frame-9 {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.frame-26 {
  background: #d9d9d9;
  border-radius: 24px;
  padding: 12px;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  position: relative;
}
.skill-icons-instagram {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 12px;
  top: 12px;
  overflow: hidden;
}
.group {
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 0%;
  top: 0%;
  overflow: visible;
}
.text-field {
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  height: 56px;
  max-width: 410px;
  position: relative;
}
.text-field2{
    cursor:pointer;
    border-radius: 1000px;
    border-style: solid;
    padding-left:1rem;
    font-size:18px;
    border-color:#7f7474;
    border-width: 1px;
    gap: 10px;  
    align-self: stretch; 
    flex: 1; 
    position: relative;
    left:.5rem;
}
.text-field2:hover{
     border:2px solid #1faceb
}
.text-field2:focus{
    border:2px solid #fa3c76;
}
.x {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 12px;
  top: 12px;
  overflow: visible;
}
.tictok {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 12px;
  top: 12px;
  overflow: visible;
}
.facebook {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 12px;
  top: 12px;
  overflow: visible;
}
.you-tube {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 12px;
  top: 12px;
  overflow: hidden;
}
.group-6 {
  width: 100%;
  height: 70.55%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 16.95%;
  top: 12.5%;
  overflow: visible;
}
.link {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 12px;
  top: 12px;
  overflow: visible;
}
.buttonContainer{
    display:flex; 
    flex-direction: column;
    width:100%;
    position:relative;
    justify-content: center;
    align-items: center;
}
.button {
    max-width: 470px; 
    height: 48px;
    cursor:pointer;
    color: #ffffff;
    font-size: 20px;
    background: #3a3131;
    border-radius: 100px;
    width:100%;   
}
.button2 {
    font-size:20px;
    cursor:pointer;
    background: #eee4e4;
    color: #4e4949;
    border-radius: 100px;
    width: 100%;
    height: 48px;
    margin-bottom:1.5rem;
    max-width: 470px;
}
@media (max-width:992px) {
    .button{
        width: 100%;    
        font-size:14px;  
    }
    .buttonContainer{
        flex-direction:column;
    }
    .text-field2{
        font-size:14px;
        left:0;
    }
    .div2{
        font-size:40px;
    }
}
@media (max-width:480px){
    .frame-42{
         padding:50px;
    }
}




</style>