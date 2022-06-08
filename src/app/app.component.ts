import { Component } from '@angular/core';
// app-root selector'üne bağlı çalışan html dosyasının css'leri düzenlemek için
// app.component.css kullanılır
@Component({
  selector: 'app-root', /* app-root tag'i kullanıldığında alttaki url çalışır */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})

// AppComponent'imin içerisinde yapmak istediğim işlemler
// için bir classım var ve onu dışarıda kullanabilmem için
// export keyword'ü kullanıyorum.
export class AppComponent {
  // title isminde bir nesne oluşturup app componentte bu nesneyi
  // çağırıp yazdırıyorum
  title = 'Test Title';

  // Tanımladığım nesneme özellikler ekliyorum
  // Bu özellikleri de yine app.comp.html'de p etiketi içerisinde yazdırıyorum.
  todoItem = {
    description:"GİRİŞ",
    action:true
  }

  // Yukarıda kullandığımız title'ı bu şekilde de yazdırabiliriz
  getTitle(){
    return this.title;
  }
}
