import { tableItem } from './table-comp/table-item';

// Tıpkı style.css'de olduğu gibi projemin tamamında istediğim yerlerde kullanmak üzere
// model.ts isminde bir model oluşturdum.
// İstediğim componentime dahil edebilirim.

export class Model {
  name: string;
  List: tableItem[];
  baseList: tableItem[];

  constructor() {
    this.List = [
      { carName: 'VW GOLF', status: true },
      { carName: 'VW POLO', status: true },
      { carName: 'BMW 320i', status: false },
      { carName: 'Mercedes C200', status: true },
      { carName: 'FORD FOCUS', status: true },
      { carName: 'BMW 120i', status: true },
      { carName: 'VW PASSAT', status: true },
      { carName: 'Peugeot 508', status: true },
    ];

    this.baseList = [...this.List];
  }
}
