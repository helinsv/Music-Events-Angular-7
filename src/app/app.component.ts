import { Component } from '@angular/core';
import { MusicEvent} from './MusicEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  events: MusicEvent[] = [{
    name: 'Lowlands',
    date: new Date('04/26/2019'),
    price: 22,
    description: 'Legendary Artists from all over worlds',
    imageSrc: 'https://image.freepik.com/vrije-psd/moderne-banner-van-verfborstel-op-roze-achtergrond_24972-212.jpg'
  }, {
    name: 'Lolapalooza',
    date: new Date('11/31/2019'),
    price: 120,
    description: 'Lolapalooza is the best festival in the world',
    imageSrc: 'https://image.freepik.com/vrije-psd/decoratieve-gelukkige-de-groatachtergrond-van-het-holifestival_1017-17518.jpg'
  }, {
    name: 'Lowlands2',
  date: new Date('04/26/2019'),
  price: 86,
  description: 'Legendary Artists from all over worlds',
  imageSrc: 'https://image.freepik.com/vrije-psd/moderne-banner-van-verfborstel-op-roze-achtergrond_24972-212.jpg'
}, {
  name: 'Lolapalooza2',
  date: new Date('11/31/2019'),
  price: 55,
  description: 'Lolapalooza is the best festival in the world',
  imageSrc: 'https://image.freepik.com/vrije-psd/decoratieve-gelukkige-de-groatachtergrond-van-het-holifestival_1017-17518.jpg'
}];

logName(value: string){
  console.log(value);
}

}
