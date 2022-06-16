import { Component, OnInit } from '@angular/core';
import { AppConstant, NavItem, PaymentMethod } from 'src/app/interfaces/app.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public navItems: NavItem[] | undefined;
  public companyName = environment.companyName;
  public companyEmail = environment.companyEmail;
  public companyPhone = environment.companyPhone;
  public companyWorkingHour = environment.companyWorkingHour;

  public paymentMethods: PaymentMethod[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.navItems = AppConstant.NAV_ITEMS.filter((item) => item.showInFooter);
    this.paymentMethods = AppConstant.PAYMENT_METHODS;
  }

  clickNavItem(selected: NavItem) {
    this.navItems?.forEach((item) => {
      item.selected = item.code == selected.code;
    })
  }

}
