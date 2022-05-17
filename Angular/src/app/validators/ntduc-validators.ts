import { FormControl, ValidationErrors } from "@angular/forms";

export class NtducValidators {

  //whitespace validation

  static notOnlyWhitespace(control: FormControl): (ValidationErrors) {

    //check if string only contain whitesopace
    if((control.value != null) && (control.value.trim().length === 0)) {

      //invalid return error object
      return {'notOnlyWhiteSpace' : true};
    }
    else {
      return null as any;
    }
  }
}
