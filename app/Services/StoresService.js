import { ProxyState } from "../AppState.js"





class StoresService{
    
    buy(id){
        ProxyState.stores = ProxyState.stores.filter(s => s.id != id)
    }

}






export const storesService = new StoresService()