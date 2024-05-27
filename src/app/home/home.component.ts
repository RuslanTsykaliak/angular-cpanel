import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NewComponent
  ],
  //   template: `
  //   <section>
  //     <form>
  //       <input type="text" placeholder="Filter by city">
  //       <button class="primary" type="button">Search</button>
  //     </form>
  //   </section>
  // `,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
