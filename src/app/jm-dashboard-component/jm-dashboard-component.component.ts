import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-jm-dashboard-component",
  templateUrl: "./jm-dashboard-component.component.html",
  styleUrls: ["./jm-dashboard-component.component.scss"],
  encapsulation: ViewEncapsulation.Native
})
export class JmDashboardComponentComponent implements OnInit {
  @Input() user: string;
  @Input() image: string;
  @Output() info = new EventEmitter();

  /**
   *
   */
  constructor() {}

  ngOnInit() {}
}
