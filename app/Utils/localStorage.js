import { ProxyState } from "../AppState.js";
import { Store } from "../Models/Store.js";

export function saveState(){
    localStorage.setItem('sajSportingGoods', JSON.stringify({
        stores: ProxyState.stores
    }))
}



export function loadState(){
    let data = JSON.parse(localStorage.getItem('sajSportingGoods'))
    if(data != null){
        ProxyState.stores = data.stores.map(s => new Store(s))
    }
}
