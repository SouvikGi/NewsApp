import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleServ: NewsServiceService) { }

  ngOnInit(): void {

    this.titleServ.setTitle('ABOUT')

  }

}
