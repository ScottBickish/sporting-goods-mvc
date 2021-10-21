import { Store } from "./Models/Store.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
/** @type {import('./Models/Store').Store[]} */
  stores = [
    new Store({itemName: 'tennis racket', description: 'this thing is old yea', category: 'sports', price: 2, imgUrl: 'https://image.shutterstock.com/image-photo/tennis-racket-broken-half-260nw-1561167190.jpg' }),
    new Store({itemName: 'nice shirt', description: 'its a tanktop what else do you need to know???', category: 'clothes', price: 11, imgUrl: 'https://img.freepik.com/free-photo/people-age-well-being-health-concept-attractive-stylish-mature-female-wearing-white-tank-top-showing-her-muscled-arms-clenching-fists-smiling-broadly-having-happy-energetic-look_343059-4468.jpg?size=626&ext=jpg' }),
    new Store({itemName: 'running shoe', description: 'these things are super comfy', category: 'shoes', price: 100, imgUrl: 'https://3.imimg.com/data3/SJ/EU/MY-9235476/free-runs-500x500.jpg'})

  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
