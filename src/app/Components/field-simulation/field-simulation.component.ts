import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Fields } from '../../Model/fields';
import { FieldSimulationService } from '../../field-simulation.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../loading.service';
@Component({
  selector: 'app-field-simulation',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './field-simulation.component.html',
  styleUrl: './field-simulation.component.css'
})
export class FieldSimulationComponent {

  tempAccount : Fields ={
    troReference : '',
    debitAccount: '',
    glCurrency: '',
    settlementAmount :'',
    totalChargeAmount :'',
    feeAccountName : '',
    currency : 'KWD',
    mnemonicCode: '',
    debitCurrency : '',
    debitAmount :'',
    feeAccount :'',
    debitBIC: '',
    profitCenterCode: '',
    debitorName : '',
    chargesCurrency : '',
    feeAccountCurrency :'',
    fXDealerId :'',
    fxRate :'',
  };
  modalRef?: NgbModalRef;
  searchOptions: Fields[] = [];
  showSearch : boolean = false;
  disabledFields : boolean = false;
  constructor(private fieldService: FieldSimulationService , private modalService: NgbModal , private loadingService: LoadingService) { }


  opensearchPopup(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' , size: 'xl'}).result.then(
      (result) => {
      },
      (reason) => {},
    );
  }

  onFieldChange(fieldName: string, fieldValue: string) {
    if(fieldValue.length > 0){
      this.loadingService.show();
      this.fieldService.fetchData(fieldName,fieldValue).subscribe(data => {
        this.loadingService.hide();
        console.log(data);
        if (data.length === 1) {
          this.populateFields(data[0]);
        } else if (data.length > 1) {
          this.showSearch = true;
          this.searchOptions = data;
          // Show search button logic here
        } else {
          // Handle no results
        }
      });
    }else{
      this.resetFields();
    }

  }
  populateFields(data: any) {
    // Populate other fields based on the fetched data
    console.log('Fetched data:', data);
    this.tempAccount  ={
      troReference : '',
      debitAccount: data.debitAccount,
      glCurrency: data.glCurrency,
      settlementAmount :'',
      totalChargeAmount :'',
      feeAccountName : '',
      currency : 'KWD',
      mnemonicCode: data.mnemonicCode,
      debitCurrency : data.glCurrency,
      debitAmount :'',
      feeAccount :'',
      debitBIC: data.debitBIC,
      profitCenterCode: data.profitCenterCode,
      debitorName : data.debitorName,
      chargesCurrency : '',
      feeAccountCurrency :'',
      fXDealerId :'',
      fxRate :'',
    };
    this.showSearch = false;
    this.disabledFields =true;
  }
  resetFields(){
    this.tempAccount  ={
      troReference : '',
      debitAccount: '',
      glCurrency: '',
      settlementAmount :'',
      totalChargeAmount :'',
      feeAccountName : '',
      currency : 'KWD',
      mnemonicCode: '',
      debitCurrency : '',
      debitAmount :'',
      feeAccount :'',
      debitBIC: '',
      profitCenterCode: '',
      debitorName : '',
      chargesCurrency : '',
      feeAccountCurrency :'',
      fXDealerId :'',
      fxRate :'',
    };
    this.showSearch = false;
    this.disabledFields =false;
  }
  onRowDoubleClick(a: Fields, index: number , modal: NgbModalRef){
    this.tempAccount = {...a , debitCurrency : a.glCurrency};
    modal.close(); // This closes the modal
  }
}
