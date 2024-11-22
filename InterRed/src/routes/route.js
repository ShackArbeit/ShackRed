import  { createRouter,createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import ProfileSetting from '../components/Setting/ProfileSetting.vue'
import StartSetting from '../components/Setting/StartSetting.vue'
import AppSetting from '../components/Setting/AppSetting.vue'
import TopicStyleSetting from '../components/Setting/TopicStyleSetting.vue'
import FinishSetting from '../components/Setting/FinishSetting.vue'

export const router=createRouter({
     history:createWebHistory(),
     routes:[
         {path:'/',component:Home,name:'Home'},
         {path:'/setting',component:StartSetting},
         {path:'/setting/profile',component:ProfileSetting},
         {path:'/setting/app',component:AppSetting},
         {path:'/setting/topic',component:TopicStyleSetting},
         {path:'/setting/end',component:FinishSetting},
     ]
})

