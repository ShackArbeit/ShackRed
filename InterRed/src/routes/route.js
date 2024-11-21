import  { createRouter,createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import ProfileSetting from '../components/Setting/ProfileSetting.vue'
import StartSetting from '../components/Setting/StartSetting.vue'

export const router=createRouter({
     history:createWebHistory(),
     routes:[
         {path:'/',component:Home,name:'Home'},
         {path:'/setting',component:StartSetting},
         {path:'/setting/profile',component:ProfileSetting}
     ]
})

