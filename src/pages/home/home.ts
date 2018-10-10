import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider} from '../../providers/translation/translation'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userInput:string;
  private result:string;

  constructor(public navCtrl: NavController,private translationProvider: TranslationProvider) {

  }

  public BtnTranslateClicked(userinput:string):void{
    console.log(userinput);
    this.userInput = userinput;
    this.translationProvider.getTranslationResult(userinput).subscribe((response) => {
      this.result = response.responseData.translatedText;

    });
  }
}
