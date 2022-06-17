import { Component, OnInit } from '@angular/core';
import { AppConstant, Fragment, FragmentSection } from 'src/app/interfaces/app.interface';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public beInCtrlGroups: Fragment[][] | undefined;
  public howToStartFragments: Fragment[] | undefined;

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    let beInCtrlFrags = AppConstant.FRAGMENTS
      .filter((fragment) => fragment.section == FragmentSection.BE_IN_CONTROL)
      .sort((a, b) => a.sequence - b.sequence);

    this.beInCtrlGroups = this.baseService.generateGroups(beInCtrlFrags, 2);

    this.howToStartFragments = AppConstant.FRAGMENTS
      .filter((fragment) => fragment.section == FragmentSection.HOW_TO_START)
      .sort((a, b) => a.sequence - b.sequence);
  }
}
