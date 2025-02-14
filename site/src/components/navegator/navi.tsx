import { router } from "expo-router"


export function directPage(){
    router.navigate('/camera')
  }
  
export function tabelRouter(){
    router.navigate('/tabel')
  }

export function backHome(){
    router.navigate('/')
  }

export function cameraPersmision(){
  router.navigate('/camera2')
}