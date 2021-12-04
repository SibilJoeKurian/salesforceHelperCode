import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    handleEvent(){
        const myCustomEvent=new CustomEvent('simple',{detail:'5'})
        this.dispatchEvent(myCustomEvent)
    }
}