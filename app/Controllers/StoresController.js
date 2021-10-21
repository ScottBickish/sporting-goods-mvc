
import { ProxyState } from "../AppState.js"
import { storesService } from "../Services/StoresService.js"


function _draw(){
    const stores = ProxyState.stores
    let template = ''
    stores.forEach(s => template += s.Template)
    document.getElementById('listings').innerHTML = template
}



export class StoresController{
    constructor(){
        
        _draw()
        ProxyState.on('stores', _draw)
    }
    
buy(id){
    
  storesService.buy(id) 
}

}