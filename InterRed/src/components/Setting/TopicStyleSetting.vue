<script setup>


</script>

<template>
 <div class="desktop-1200">
        <div class="div4">選擇你的主題樣式</div>
        <div class="div">
          <div class="rectangle-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDePJChOzXYw_nwJ8K64nl6o_YFnowAMHLA&s">
          </div>
          <div class="rectangle-3">
             <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/444e59a7-24f2-483d-97a0-73f5461b122b/width=450/00419-4076654538-1girl,grass,flowers,Red%20trench,best%20quality,%20masterpiece,%20Rich%20in%20detail,brown%20hair,%20intricate,%20elegant,%20highly%20detailed,%20majest.jpeg">
          </div>
          <div class="rectangle-5">
             <img src="https://i.imgur.com/uMPfUSF.jpg">
          </div>
          <div class="rectangle-2">
              <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/08/15/0/30271786.png&x=0&y=0&sw=0&sh=0&exp=3600">
          </div>
          <div class="rectangle-4">
               <img src="https://cdn-origin.cool-style.com.tw/cool/2024/02/425718745_1067016917906137_7009948231764879997_n.jpg">
          </div>
          <div class="rectangle-6">
               <img src="https://cc.tvbs.com.tw/img/upload/2024/10/11/20241011110922-f31a7949.jpeg">
          </div>
        
        </div> 
        <div class="content"  id="showButton" >
                <button class="button">下一步</button>   
                <button class="button2">略過</button>   
        </div>       
      </div>

</template>


<style scoped>
.desktop-1200 {
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  flex-direction: column; 
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow:hidden;
  min-height:100vh;
  padding-top:3rem;
}
.div {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  flex-shrink: 0;
  /* max-width: 886px;  */
  max-width:1200px;
  width:100%;
  position:relative; 
  overflow: hidden; 
}
.rectangle-1 {
  background: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
  /* width: 210px;
  height: 372px; */
  width:300px;
  height:531px;
  position: relative;
}
.rectangle-1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px; 
}
.rectangle-3 {
  background: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
  /* width: 210px;
  height: 376px; */
  width:300px;
  height:531px;
  position: relative;
}
.rectangle-3 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px; 
}
.rectangle-5 {
  background: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
  /* width: 210px;
  height: 376px; */
  width:300px;
  height:531px;
  position: relative;
}
.rectangle-5 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px; 
}
.rectangle-2 {
  background: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
  /* width: 210px;
  height: 376px; */
  width:300px;
  height:531px;
  position: relative;
}
.rectangle-2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px; 
}
.rectangle-4 {
  background: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
  /* width: 210px;
  height: 376px; */
  width:300px;
  height:531px;
  position: relative;
}
.rectangle-4 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px; 
}
.rectangle-6 {
  background: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
  /* width: 210px;
  height: 376px; */
  width:300px;
  height:531px;
  position: relative;
}
.rectangle-6 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px; 
}
.content {
  display: flex;
  z-index: 100;
  flex-direction: column;
  width:100%;
  max-width: 1800px;
  justify-content: center;
  align-items: center;
  position: fixed; 
  bottom: 100px; 
}
.div4 {
  color: #000000;
  text-align: center;
  font-family: NotoSansTc-Bold;
  font-size: 57px;
  line-height:  64px;
  letter-spacing: -0.25px;
  font-weight:  700;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:2rem; 
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
    .div4{
       font-size:32px;
    }
    .content{
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
}
@media (max-width: 576px) {
  .div {
    flex-direction: column;
  }

  .rectangle-1, .rectangle-2, .rectangle-3, .rectangle-4, .rectangle-5, 
  .rectangle-6{
    width: 100%;
    max-width: 210px;
    height:372px;
  }
}

</style>