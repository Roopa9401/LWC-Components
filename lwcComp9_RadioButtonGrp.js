import { LightningElement } from 'lwc';

export default class LwcComp9_RadioButtonGrp extends LightningElement {
    selectedoption='';

    option=[
        {label:'Option1',value:'High'},
        {label:'Option2',value:'Medium'},
        {label:'Option3',value:'Low'},
    ];

    handleChange(event){
        this.selectedoption=event.detail.value;
    }
}