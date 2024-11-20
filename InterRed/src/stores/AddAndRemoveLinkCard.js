import { defineStore } from 'pinia';
import { ref,watchEffect} from 'vue';

let linkArray = ref([]);
let cardTextArray=ref([])
let cardImageArray=ref([])
export const allCount = ref(linkArray.value.length + cardTextArray.value.length+cardImageArray.value.length);



watchEffect(() => {
    allCount.value = linkArray.value.length + cardTextArray.value.length+cardImageArray.value.length;
    console.log('總數量:', allCount.value);
});

// 連結卡片
export const useLinkCardStore = defineStore('linkCard', () => {
  
  let nextId = ref(1)
  
  function addLinkCard() {
    if (allCount.value < 15) {  
      let newId = nextId.value;
      let usedIds = new Set(linkArray.value.map(card => card.id));
      // console.log("目前已用的連結卡片 ID:", [...usedIds]);
      // 尋找未使用的 ID
      for (let i = 1; i <= nextId.value; i++) {
        if (!usedIds.has(i)) {
          newId = i;
          break;
        }
      }
      // 添加卡片
      linkArray.value.push({ id: newId, webSiteTitle: '', webSiteUrl: '',inputValue:true }); 
      nextId.value = Math.max(...linkArray.value.map(card => card.id)) + 1;
      // console.log('目前有如下的卡片張數:',countBlock)
      // console.log('所有的卡片:',linkArray.value)
      // console.log('查看目前已存在的卡片的數量:',linkArray.value.length)
    } else {
      window.alert('已達到最大可新增卡片的數量 15，無法再新增連結卡片了')
      console.log('已達到最大可新增卡片的數量 15，無法再新增連結卡片了');
    }
  }

  function deleteLinkCard(cardId) {
    linkArray.value = linkArray.value.filter(card => card.id !== cardId );
    // console.log(`已刪除 id 為 ${cardId } 的卡片元件`);
    // nextId.value-=1;
    nextId.value = Math.max(...linkArray.value.map(card => card.id)) + 1;
    // console.log('nextId:',nextId)
  }
  function updateLinkCard(cardId,title,url){
        const card=linkArray.value.find(card=>card.id===cardId);
        if(card){
           card.webSiteTitle=title;
           card.webSiteUrl=url.startsWith('http') ? url : 'https://' + url;
          //  console.log('目前編輯的Id是:',card.id)
        }
  }
  function toggleInput(cardId) {
    const card = linkArray.value.find(card => card.id === cardId);
    if (card) {
      card.inputValue = !card.inputValue;
    }
  }
  //   console.log('目前的顯示值是:', card?.inputValue);
  // }
  return { linkArray, addLinkCard, deleteLinkCard,updateLinkCard,toggleInput };
});

// 文字卡片
export const useTextCardStore=defineStore('textcard',()=>{   
       let nextTextId=ref(1)
      //  新增文字卡片
      function addTextCard() {
        if (allCount.value < 15) {
            let newTextId = nextTextId.value;
            let usedTextId = new Set(cardTextArray.value.map(card => card.id));
            // console.log("目前已用的文字卡片 ID:", [...usedTextId]);
    
            for (let i = 1; i <= nextTextId.value; i++) {
                if (!usedTextId.has(i)) {
                    newTextId = i;
                    break;
                }
            }
            cardTextArray.value.push({ id: newTextId, textTitle: '', textContent: '', inputTextValue: true });
            nextTextId.value = Math.max(...cardTextArray.value.map(card => card.id)) + 1;         
        } else {
            window.alert('已達到最大可新增卡片的數量 15，無法再新增文字卡片了')
            console.log('已達到最大可新增卡片的數量 15，無法再新增文字卡片了');
        }
    }
      // 刪除文字卡片
      function deleteTextCard(textCardId){
            cardTextArray.value=cardTextArray.value.filter(card=>card.id!==textCardId)
            console.log(`已刪除 id 為 ${textCardId } 的文字卡片元件`);
            nextTextId.value=Math.max(...cardTextArray.value.map(card=>card.id))+1
      }
      // 更新文字卡片
      function updateTextCard(textCardId,title,content){
          const textCard=cardTextArray.value.find(card=>card.id===textCardId)
          if(textCard){
                textCard.textTitle=title
                textCard.textContent=content
                // console.log('目前編輯的Id是:',textCard.id)
          }
      }
      // 顯示或隱藏文字卡片
      function toggleTextInput(textCardId){
           const textCard=cardTextArray.value.find(card=>card.id===textCardId)
           if(textCard){
                        textCard.inputTextValue = !textCard.inputTextValue;
           }
           console.log('目前的顯示值是:', textCard?.inputTextValue);
      }
      return {cardTextArray,addTextCard,deleteTextCard,updateTextCard,toggleTextInput}
})
// 圖片卡片
export const usetImageCardStore=defineStore('imageCard',()=>{
       let nextImageId=ref(1) 
       // 新增圖片卡片
       function addImageCard(){
            if(allCount.value<15){         
                    let newImageId=nextImageId.value;
                    let usedImageId=new Set(cardImageArray.value.map(card=>card.id))
                    console.log("目前已用的圖片卡片 ID:", [...usedImageId]);
                    for (let i=1;i<cardImageArray.length;i++){
                        if(!usedImageId.has(i)){
                             newImageId =i;
                              break
                        }
                    }
                cardImageArray.value.push({id:newImageId,imageUrl:'',inputImageValue:true})
                nextImageId.value=Math.max(...cardImageArray.value.map(card=>card.id))+1
                console.log('陣列是:',cardImageArray.value)
                // console.log('所有的圖片卡片:', nextImageId.value);
                // console.log('查看目前已存在的圖片卡片的數量:', cardImageArray.value.length);
            }
            else{
                window.alert('已達到最大可新增卡片的數量 15，無卡在新增圖片卡片了')
                console.log('已達到最大可新增卡片的數量 15，無卡在新增圖片卡片了');
            }
       }
       // 刪除圖片卡片
       function deleteImageCard(imageCardId){
           cardImageArray.value=cardImageArray.value.filter(card=>card.id!==imageCardId)
           console.log(`已刪除 id 為 ${ imageCardId } 的文字卡片元件`);
           nextImageId.value=Math.max(...cardImageArray.value.map(card=>card.id))+1
           console.log('圖片編號:',nextImageId)
       }
       // 更新圖片卡片
       function updateImageCard(imageCardId,newUrl){
           const imageCard=cardImageArray.value.find(card=>card.id===imageCardId)
           if(imageCard){
                imageCard.imageUrl=newUrl;
                console.log('目前編輯的Id是:', imageCard.id, '新圖片網址是:', newUrl);
           }else {
            console.warn(`未找到 ID 為 ${imageCardId} 的圖片卡片`);
        }
       }
       // 顯示或隱藏圖片卡片
       function toggleImageInput(imageCardId){
             const imageCard=cardImageArray.value.find(card=>card.id===imageCardId)
             if(imageCard){
                  imageCard.inputImageValue=!imageCard.inputImageValue
                  console.log('目前的顯示值是:', imageCard?.inputImageValue);
             }
       }
       return {cardImageArray,addImageCard,deleteImageCard,updateImageCard,toggleImageInput}
})






