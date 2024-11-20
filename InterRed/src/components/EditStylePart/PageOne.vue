<script setup>
import { ref } from 'vue';
const fontColor = ref("#333333");
const fontColor2 = ref("#333333");
</script>

<template>
<h1 style="position:relative;left:30px;">
    主題樣式
</h1>
<!-- 卡片部分 -->
<div class="CardContainer">
  <div class="card">先賣不賠</div>
  <div class="card">盆栽花香</div>
  <div class="card">一周咖啡</div>
  <div class="card">森林光影</div>
  <div class="card">漸層夏日</div>
  <div class="card">水果香氣</div>
</div>
<!-- 背景部分 -->
<h1 style="position:relative;left:30px;">背景樣式設定</h1>
<div class="backgroundContainer">
   <div class="backContainer">
       <section>
          <div class="Backcard">先賣不賠</div>
          <p style="text-align: center;">純色</p>
      </section>
      <section>
          <div class="Backcard">漸層夏日</div>
          <p style="text-align: center;">自訂背景</p>
      </section>
    </div>
<h3 style="position:relative;left:30px;">背景顏色</h3>
    <div class="color-picker">
      <input type="color" id="font-color" v-model="fontColor" class="ColorChoice">
      <!-- 顯示當前選擇的顏色 -->
      <div class="color-display">
        <!-- <div
          class="color-box"
          :style="{ backgroundColor: fontColor }"
        ></div> -->
        <div class="Showcolor">
            <label >Color</label>
            <p class="color-code">{{ fontColor }}</p>
        </div>
      </div>
    </div>
</div>
<!-- 字體部分 -->
<h1 style="position:relative;left:30px;">字體樣式</h1>
<div class="wordgroundContainer">
   
    <div class="wordContainer">
        <h3 style="position:relative;left:30px;">字體顏色</h3>
        <div class="color-picker">
      <input type="color" id="font-color" v-model="fontColor" class="ColorChoice">
      <!-- 顯示當前選擇的顏色 -->
      <div class="color-display">
        <!-- <div
          class="color-box"
          :style="{ backgroundColor: fontColor }"
        ></div> -->
        <div class="Showcolor">
            <label >Color</label>
            <p class="color-code">{{ fontColor2 }}</p>
        </div>
      </div>
    </div>
    </div>
</div>
<!-- -按鈕樣式靜態 -->
<h1 style="position:relative;left:30px;">按鈕樣式</h1>
<div class="StaticButtonContainer">
<!-- 填滿部分 -->
<h3 style="position:relative;left:30px;">填滿</h3>
    <div class="buttonFillContainer">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="butttonOutContainer">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</template>


<style scoped>
/* 卡片部分 */
.CardContainer {
  display: grid;
  gap: 16px; 
  padding: 16px; 
  max-width:664px;
  margin:0 auto;
  grid-template-areas: "center";
  justify-items: center;
  align-items: center;
  border:2px solid red;
}
.card {
  width:140px;
  background: #ccc; 
  height:259px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
}
/* 背景部分 */
.backgroundContainer{
     width:100%;
     min-height:auto;
}
.backContainer{
     border:2px solid orange;
     display:flex;
     margin:0 auto;
     max-width:664px;
     justify-content: space-evenly;
     align-items: center;
}
.Backcard{
    width:140px;
    background: #ccc; 
    height:259px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
}
/* 字體部分 */
.wordgroundContainer{
    width:100%;
    min-height:auto;
}
.wordContainer{
     border:2px solid red;
}
/* 靜態按鈕部分 */
.StaticButtonContainer{
    width:100%;
    min-height:auto;
    border:2px solid blue;
}
.buttonFillContainer{
     border:2px solid red;
     display:flex;
     justify-content: center;
}
.buttonFillContainer div:nth-child(1){
     width:120px;
     height:48px;
     background-color: black;
     margin-right:24px;
}
.buttonFillContainer div:nth-child(2){
     width:120px;
     height:48px;
     background-color:black;
     border-radius: 16px;
     margin-right:24px;
}
.buttonFillContainer div:nth-child(3){
     width:120px;
     height:48px;
     border-radius: 100px;
     background-color:black;
}
.butttonOutContainer{
    width:100%;
    min-height:auto;
    border:2px solid blue;
}
.butttonOutContainer div:nth-child(1){
     width:120px;
     height:48px;
     border: 1px  green;
     margin-right: 24px;
}
.butttonOutContainer div:nth-child(2){
     width:120px;
     height:48px;
     border: 1px  #7F7474;
     border-radius: 16px;
}
.butttonOutContainer div:nth-child(3){
     width:120px;
     height:48px;
     border: 1px  #7F7474;
     border-radius: 100px;
}

/* 共用部分 */
.color-picker {
  display: flex;
  gap: 8px;
  box-sizing: border-box;
  padding-left:30px; 
}
.ColorChoice {
  height: 56px;
  width: 56px;
  border: none;
  padding: 0;
  margin: 0;
  background-color: #FEF8F7; 
  appearance: none; 
  /* -webkit-appearance: none;  */
  cursor: pointer;
}
.ColorChoice::-webkit-color-swatch-wrapper {
  padding: 0;
  border-radius: 10px; 
}
.ColorChoice::-webkit-color-swatch {
  border: none; 
  border-radius: 10px;
}
.color-display {
  display: flex;
  align-items: center;
  gap: 8px;
}
.color-box {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.Showcolor {
  width: 200px;
  height:56px;
  box-sizing: border-box;
  padding-top:8px;
  padding-left:8px;
  background-color: #eaeaea; 
  border-radius: 6px; 
  border-bottom:1px solid black;
}
.Showcolor label {
  font-size: 16px;
  font-weight: bold;
  color: #333; 
}
.color-code {
  font-size: 16px; 
  font-family: monospace; 
  color: #333333; 
  margin: 0; 
}

@media (min-width: 1200px) {
  .CardContainer{
    grid-template-columns: repeat(3, 1fr);
  }
  .card{
    max-width:140px;
  }
}

/* 768px ~ 1199px：一行兩張 */
@media (max-width: 1199px) and (min-width: 768px) {
  .CardContainer {
    grid-template-columns: repeat(2, 1fr);
    max-width:639px;
  }
}

/* 576px ~ 767px：一行兩張 */
@media (max-width: 767px) and (min-width: 576px) {
  .CardContainer {
    grid-template-columns: repeat(2, 1fr);
    max-width:366px;
  }
  .backContainer{
    max-width:366px;
  }
}

/* 576px 以下：一行一張 */
@media (max-width: 575px) {
  .CardContainer {
    grid-template-columns: 1fr;
    max-width:366px;
  }
  .backContainer{
    max-width:366px;
  }
  .Backcard{
     margin-left:.6rem;
     margin-bottom:.6rem;
  }
}



</style>