import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsServiceService } from '../service/news-service.service';

@Component({
  selector: 'app-canada-news',
  templateUrl: './canada-news.component.html',
  styleUrls: ['./canada-news.component.css']
})
export class CanadaNewsComponent implements OnInit {

  isactive = true;


  constructor(private _http: HttpClient, private titleServ: NewsServiceService) { }

  //NEWS API
  newsApiUrlB = `https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=2549c6ef10134692b34a17eeaa66d763`;
  newsApiUrlE = `https://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=2549c6ef10134692b34a17eeaa66d763`;
  newsApiUrlH = `https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=2549c6ef10134692b34a17eeaa66d763`;
  newsApiUrlSC = `https://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=2549c6ef10134692b34a17eeaa66d763`;
  newsApiUrlSP = `https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=2549c6ef10134692b34a17eeaa66d763`;
  newsApiUrlT = `https://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=2549c6ef10134692b34a17eeaa66d763`;

  //business  entertainment  health  science  sports  technology
  //newsHeading
  newsHeadingB(): Observable<any> {
    this.titleServ.setTitle('CANADA')

    return this._http.get(this.newsApiUrlB);
  }
  newsHeadingE(): Observable<any> {
    return this._http.get(this.newsApiUrlE);
  }
  newsHeadingH(): Observable<any> {
    return this._http.get(this.newsApiUrlH);
  }
  newsHeadingSC(): Observable<any> {
    return this._http.get(this.newsApiUrlSC);
  }
  newsHeadingSP(): Observable<any> {
    return this._http.get(this.newsApiUrlSP);
  }
  newsHeadingT(): Observable<any> {
    return this._http.get(this.newsApiUrlT);
  }
  newsDisplayB: any = []
  newsDisplayE: any = []
  newsDisplayH: any = []
  newsDisplaySC: any = []
  newsDisplaySP: any = []
  newsDisplayT: any = []

  ngOnInit(): void {
    this.newsHeadingB().subscribe((r) => {
      console.log(r.articles);
      this.newsDisplayB = r.articles;
    })
    this.newsHeadingE().subscribe((r) => {
      console.log(r.articles);
      this.newsDisplayE = r.articles;
    })
    this.newsHeadingH().subscribe((r) => {
      console.log(r.articles);
      this.newsDisplayH = r.articles;
    })
    this.newsHeadingSC().subscribe((r) => {
      console.log(r.articles);
      this.newsDisplaySC = r.articles;
    })
    this.newsHeadingSP().subscribe((r) => {
      console.log(r.articles);
      this.newsDisplaySP = r.articles;
    })
    this.newsHeadingT().subscribe((r) => {
      console.log(r.articles);
      this.newsDisplayT = r.articles;
    })
  }


}
