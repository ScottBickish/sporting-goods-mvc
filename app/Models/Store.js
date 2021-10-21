import { generateId } from "../Utils/generateId.js";

export class Store{
    constructor(data){
        this.id = generateId()
        this.itemName = data.itemName
        this.description = data.description
        this.category = data.category
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

get Template(){
    return `
    <div class="col-md-3">
          <div>
            <img width="100%" class="mt-2 rounded-top img-fluid " src="${this.imgUrl}" alt="">
            <div class="bg-secondary ps-2">
              <div>
                <p>${this.itemName}</p>
                <p>${this.description}</p>
                <p>${this.category}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p>$${this.price}</p><button onclick="app.storesController.buy('${this.id}')">PURCHASE</button>
              </div>

            </div>
            
          </div>
        </div>`
}

}


