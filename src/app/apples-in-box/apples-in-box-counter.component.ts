import { Component, OnInit } from '@angular/core';
import { Apple } from '../models/apple';

@Component({
  templateUrl: './apples-in-box-counter.html',
})

export class ApplesInBoxCounter implements OnInit {
  title = "Eat more fruits!";
  infoAboutApples: string;
  timeSpendOnCounting: string;

  ngOnInit(): void {

    const box: Apple[] =
      [
        { color: "red", taste: 'juicy', weight: 105 },
        { color: "green", taste: 'sour', weight: 102 },
        { color: "yellow", taste: 'sweet', weight: 100 }
      ];
    const t0 = performance.now();
    const ammountOfApples = this.countApples(box)
    const t1 = performance.now()
    this.timeSpendOnCounting = (t1-t0).toFixed(6);
    this.infoAboutApples = "Dėžėje yra " + ammountOfApples + " obuoliai. Suskaičiuoti jiems prireikė " + this.timeSpendOnCounting + " milisekundžių.";
  }
  countApples(box: Apple[]) {
    return box.length
  }
}
