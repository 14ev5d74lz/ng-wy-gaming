import { Component, OnInit } from '@angular/core';
import { AppConstant, Faq } from 'src/app/interfaces/app.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public faqGroups: Faq[][] | undefined;
  public faqs: Faq[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.faqs = AppConstant.FAQS.sort((a, b) => a.sequence - b.sequence);

    let chunk: Faq[] = [];

    for (let i = 0; i < this.faqs.length; i++) {
      let faq = this.faqs[i];
      faq.index = i + 1;
      chunk.push(faq);

      if (chunk.length == 2 || i == this.faqs.length - 1) {
        if (!this.faqGroups)
          this.faqGroups = [];

        this.faqGroups.push(chunk);
        chunk = [];
      }
    }
  }

}
