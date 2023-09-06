import { Component, Input } from '@angular/core';
import { Drug } from "../../models/data.model";

@Component({
  selector: 'app-drug-card',
  templateUrl: './drug-card.component.html',
  styleUrls: ['./drug-card.component.scss',  '../../../assets/styles/mixins.scss']
})
export class DrugCardComponent {
  @Input() drug!: Drug;
}
