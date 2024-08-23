import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [NgClass],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent {
  lightState: string = 'red';

  changeLightState() {
    if (this.lightState === 'red') {
      this.lightState = 'yellow';
    } else if (this.lightState === 'yellow') {
      this.lightState = 'green';
    } else if (this.lightState === 'green') {
      this.lightState = 'red';
    }
  }
}
