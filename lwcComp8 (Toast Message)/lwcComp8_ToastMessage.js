import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LwcComp8_ToastMessage extends LightningElement {
 warningtoast(){
    const evt = new ShowToastEvent({
        title: 'This is a warning toast',
        variant: 'warning',
        message: 'Dangerous operation!',
        mode: 'sticky'
    });
    this.dispatchEvent(evt);
}

successtoast(){
    const evt = new ShowToastEvent({
        title: 'This is a success toast',
        variant: 'success',
        message: 'Operation successful!',
        mode: 'sticky'
    });
    this.dispatchEvent(evt);
}
}
