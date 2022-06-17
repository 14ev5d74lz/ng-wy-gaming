import { Component, OnInit } from '@angular/core';
import { AppConstant, Faq } from 'src/app/interfaces/app.interface';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public faqGroups: Faq[][] | undefined;

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    let faqs = AppConstant.FAQS.sort((a, b) => a.sequence - b.sequence);
    this.faqGroups = this.baseService.generateGroups(faqs, 2);
  }

}
