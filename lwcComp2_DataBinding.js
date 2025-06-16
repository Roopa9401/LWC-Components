import { LightningElement } from 'lwc';

export default class LwcComp2_DataBinding extends LightningElement {

    name=''
    age=''
    city=''
    isSubmitted=false

    handleNameChange(event){
        this.name=event.target.value
    }
    handleAgeChange(event){
        this.age=event.target.value
    }
    handleCityChange(event){
        this.city=event.target.value
    }

    handleSubmit(){
        this.isSubmitted=!this.isSubmitted
    }

}