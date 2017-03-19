import { Component } from '@angular/core';
import { SampleService } from 'angular2-library-example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  // Inject sample serivce
  constructor(private sampleService: SampleService) {

  }
}
