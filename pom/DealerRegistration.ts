
export class DealerRegistration{
  readonly newDealerRegBtn = '.text-muted > a';
  readonly newDealerTxt = 'h2.text-center';
  readonly userName = 'input#UserName';
  readonly address1 = 'input#Address1';
  readonly password = 'input#passwordField';
  readonly city = 'input#City';
  readonly retypePass = 'input#confirmPasswordField';
  readonly firstName = 'input#FirstName';
  readonly lastName = 'input#LastName';
  readonly companyName = 'input#CompanyName';
  readonly zipcode = 'input#Zip';
  readonly email = 'input#Email';
  readonly phone = 'input#HostedManagerDirectPhoneNumber';
  readonly submitBtn = 'button#submitButton';
  readonly promptModal = '#modalOkButton';
  readonly accountNumBtn = 'input#Account';

  clickNewDealerReg(expectedText: string) {
    cy.get(this.newDealerRegBtn).click();
    cy.get(this.newDealerTxt).should('have.text', expectedText);
  }

  formFillUp(
    id: string,
    pass: string,
    addr: string,
    company: string,
    first: string,
    last: string,
    city: string,
    email: string,
    phone: string,
    zipcode: string
  ) {
    cy.get(this.userName).clear().type(id);
    cy.get(this.password).clear().type(pass);
    cy.get(this.retypePass).clear().type(pass);
    cy.get(this.address1).clear().type(addr);
    cy.get(this.companyName).clear().type(company);
    cy.get(this.firstName).clear().type(first);
    cy.get(this.lastName).clear().type(last);
    cy.get(this.city).clear().type(city);
    cy.get(this.zipcode).clear().type(zipcode);
    cy.get(this.email).clear().type(email);
    cy.get(this.phone).clear().type(phone);
    cy.get(this.submitBtn).click();
    cy.wait(8000);
    cy.get(this.promptModal).click();
    return cy.get(this.accountNumBtn).invoke('val');
  }
      

}