/*
    Kodlarımız arasındaki olası erişim belirleyici hataların önüne geçmek
    Eksik veya yanlış veri aktarımının olmaması ve kontrollü çalışmak adına
    Model kullanımı yapıyorum  
*/


// Class'ımı ve içerisindeki yapıcı method olan constructor'u tanımladım.


// export class tableItem{
//     constructor(public carList: string , public status:boolean){
//         this.carList = carList
//         this.status = status
//     }
// }

export interface tableItem{
    carName:string;
    status:boolean;
}



















