<script setup>


</script>


<template>
 <div class="desktop-1200">
        <div class="div6">你的主頁創建完成了!</div>
        <div class="content">
                <div class="div4">
                    分享你的專屬連結到網路上吧
                    <br />
                    mobiweb.x/xxxxxxx 
                </div>
                <div class="frame-45"> 
                    <img src="https://storage.googleapis.com/hhg-images/news/16/1698128331.jpg">
                </div> 
                <div class="buttonContainer" >
                    <button class="button">分享你的專屬連結</button>
                    <button class="button2">繼續編輯</button> 
                </div> 
        </div>  
    </div>

</template>

<style scoped>
.desktop-1200 {
  box-sizing: border-box;
  background: #ffffff; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow:hidden;
  min-height:100vh;
}
.frame-45 {
  max-width: 414px;
  height: 736px;  
  width:100%;
} 

.frame-45 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px; 
}
.content {
  display: flex;
  flex-direction:column;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  max-width: 1280px;
  max-height: 960px; 
  position: relative;
}
.div6{
    font-size:57px;
    font-weight:800;
}
.div4 {
  padding-top:1rem;
  margin-bottom:2rem;
  text-align:center;
  position: relative;
  font-size:20px;
  font-weight: 700;
}
.buttonContainer{
    /* visibility: hidden; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width:100%;
    position: fixed; 
    bottom: 100px; 
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
    margin-bottom:2rem;
}
.button2 {
    font-size:20px;
    cursor:pointer;
    background: #eee4e4;
    color: #4e4949;
    border-radius: 100px;
    max-width: 470px; 
    height: 48px;
    width:100%;
}
@media (max-width:992px){
    .buttonContainer{
        flex-direction:column;
    }
    .button2{
        font-size:15px;
        width:100%;
        max-width:470px;
        position:relative;
        margin:0 auto;
        top:1.5rem;
        right:0;
    }
    .button{
        width: 100%;    
        font-size:15px;  
    }
    .div6{
        font-size:32px;
    }
    .div4{
        font-size:15px;
    }
}
</style>