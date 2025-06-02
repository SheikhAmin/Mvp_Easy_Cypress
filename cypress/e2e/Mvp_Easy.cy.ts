import { Common } from "../../common/Common";
import { DealerRegistration } from "../../pom/DealerRegistration";


describe("Check Login Page Without Redirect Loop", () => {
  const obj1 = new Common();
  let UserID: string;
  let UserName: string = obj1.generateRandomStringWithNumber();
  let password: string = obj1.generateRandomStringWithNumber();

  it.only("Dealer Registration", () => {
    cy.visit("/");
    const obj = new DealerRegistration();
    obj.clickNewDealerReg("New Dealer Registration");
    // addr,company,first,last,city,email,phone,zipcode
    obj.formFillUp(
      UserName,
      password,
      "Tejgaon",
      "Ael_napco",
      "Sheikh",
      "Amin",
      "Dhaka",
      "samin@ael-bd.com",
      "0152125565",
      "1215"
    ).then((accountNum)=>{
      UserID = accountNum as string;
      cy.wait(5000);
      cy.log(`Id:${UserID}, Username:${UserName}, Pass:${password}`);
    });
   
  });


  it("Login",()=>{
    cy.visit("/");
    cy.get("input#Account").type("500502");
    cy.get("input#Username").type("CustomerDealer123");
    cy.get("input#passwordField").type("Cic!23456789");
    cy.get("button[type='submit'].btn.btn-primary.w-100").click();
  })


});
