import { LightningElement } from 'lwc';

export default class LwcComp6_DataTable2 extends LightningElement {
    selected;
    isSubmitted=false;
    columns=[
        {label:'Course Name',fieldName:'Name'},
        {label:'Course Fee',fieldName:'Fee'},
        {label:'Course Duration',fieldName:'Duration'}
    ]

    Courses=[
        {
            Name:'Salesforce',
            Fee:'$400',
            Duration:'6 Months'
        },
        {
            Name:'AWS',
            Fee:'$250',
            Duration:'3 Months'},
            {
                Name:'AI & ML',
                Fee:'$100',
                Duration:'2 Months'
            }
    ]

    handleClick(event){
        this.selected=this.template.querySelector('lightning-datatable').getSelectedRows();
        this.isSubmitted=true;
    }

    get selectedCourses(){
        return this.selected ? this.selected.map(row=>`${row.Name}, ${row.Fee}, ${row.Duration}`).join('\n') : '';
    }

}