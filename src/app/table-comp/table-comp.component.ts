import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { tableItem } from './table-item';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css'],
})
export class TableCompComponent implements OnInit {
  
  constructor() {}

  model = new Model(); // model.ts içindeki Model classından nesne oluşturdum.


  // List: tableItem[] = [
  //   { carList: 'VW GOLF', status: true },
  //   { carList: 'VW POLO', status: true },
  //   { carList: 'VW BMW 320i', status: false },
  //   { carList: 'VW BMW Z4', status: true },
  // ];

  //   List:tableItem[] = [
  //   new tableItem("VW GOLF",true),
  //   new tableItem("VW POLO", true),
  //   new tableItem("BMW 320i",false),
  //   new tableItem("BMW Z4",true)
  // ];
  ngOnInit(): void {}

  addItem(txtItem: string) {
    if (txtItem) { 
    this.model.List.push({carName: txtItem, status:true});
    this.model.List = this.model.baseList;
  }
    else{
      alert("Lütfen bir araç ismi girin !")
    }
}

  deleteItem(txtItem: number) {
    const deletedItem = this.model.List.splice(txtItem, 1)[0];
    this.model.baseList = this.model.baseList.filter(i => i != deletedItem);
  }

  changeStatus(txtItem: number) {
    this.model.List[txtItem].status = false;
  }

  filterItem(filterItem: string){
    if(!filterItem){
      this.model.List = [...this.model.baseList];
    }else{
      this.model.List = this.model.baseList.filter(i => i.carName.toLocaleLowerCase().includes(filterItem.toLocaleLowerCase()));
    }
    console.log(this.model);
  }


  
  displayAll:boolean = true;

  
  /* getItems(){
    console.log("Hello");
    if(this.displayAll){
      return this.model.List
    }
      return this.model.List.filter(item=>item.status==true);
    } */
}
