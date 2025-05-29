import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { MainComponent } from "../../components/main/main.component";
import { SkillsComponent } from "../../components/skills/skills.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, MainComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
