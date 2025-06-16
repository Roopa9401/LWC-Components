import { LightningElement } from 'lwc';

export default class LwcD1_helloworld extends LightningElement {
    isDisplayed=false //Initalyy the element is not displayed

    get buttonName(){
        return this.isDisplayed ? 'Hide me' : 'Show Me'
    }

    handleClick(){
        this.isDisplayed=!this.isDisplayed//when the button is clicked the element is displayed
    }
    }