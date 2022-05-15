import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NtducFormService } from 'src/app/services/ntduc-form.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  creditCardYears : number[] = [];
  creditCardMonths : number[] = []

  constructor(private formBuilder: FormBuilder,
              private ntducFormService : NtducFormService) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],

      }),
      shippingAddress: this.formBuilder.group({
        street : [''],
        city : [''],
        state : [''],
        country : [''],
        zipCode : [''],

      }),
      // billing
      billingAddress: this.formBuilder.group({
        street : [''],
        city : [''],
        state : [''],
        country : [''],
        zipCode : [''],

      }),
      creditCard: this.formBuilder.group({
        cartType : [''],
        nameOnCard : [''],
        cardNumber : [''],
        securityCode : [''],
        expirationMonth : [''],
        expirationYear : [''],

      }),

    });


    //popular services card month
    const startMonth : number = new Date().getMonth() + 1;
    console.log("StartMonth"+ startMonth);

    this.ntducFormService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("data" + JSON.stringify(data))
        this.creditCardMonths = data;
      }
    )

     //popular services card year
     this.ntducFormService.getCreditCardYear().subscribe(
       data=> {
        console.log("dataCreditYear" + JSON.stringify(data))
        this.creditCardYears = data;
       }
     )

  }
  copyShippingAddressToBillingAddress(event:any) {
    if(event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress']
            .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
    }
    else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
    }

  }

  onSubmit(){
    console.log("Handling the submit button")
    console.log(this.checkoutFormGroup.get('customer')?.value)
    console.log("the Email address:"+this.checkoutFormGroup.get('customer')?.value.email)

  }

  handleMonthsAndYears(){

    const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');

    const currentYear : number = new Date().getFullYear();
    const selectedYear:number = Number(creditCardFormGroup.value.expirationYear)

    //if the current year equals the selected year , then start with the current  month

    let startMonth : number ;

    if(currentYear === selectedYear) {
      startMonth =new Date().getMonth() + 1;

    }else {
      startMonth = 1;
    }
    this.ntducFormService.getCreditCardMonths(startMonth).subscribe(
      data => {
        this.creditCardMonths = data;
      }
    );
  }
}
