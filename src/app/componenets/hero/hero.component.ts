import { Component, OnInit } from '@angular/core';
import { MarketService } from "../../services/market.service";
import { Item } from "../../interfaces/item";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public latestItem: Item | undefined;

  constructor(private market: MarketService) { }

  ngOnInit(): void {
    this.showLatestItem()
  }

  async showLatestItem() {
    this.latestItem =  await this.market.getLatestItem()
  }

}