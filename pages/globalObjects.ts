import { expect, type Page, type Locator, selectors} from "@playwright/test";
// import { textValues } from "../tests/testData/testData.json";

export class PageObjects {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly continueButton: Locator;
  readonly firstName_inputField: Locator;
  readonly middleName_inputField: Locator;
  readonly lastName_inputField: Locator;
  readonly suffixSelector: Locator;
  readonly socialSecurityNumberInput: Locator;
  readonly birthDateInput: Locator;
  readonly maleGenderRadioBtn: Locator;
  readonly phoneInput: Locator;
  readonly attorneyYesRadio: Locator;
  readonly spouseRelationshipRadio: Locator;
  readonly addressLineFirstInput: Locator;
  readonly addressLineSecondInput: Locator;
  readonly cityInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator(`h2`);
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.firstName_inputField = page.locator(`input[name="annuitant.qa.name_FIRST"]`);
    this.middleName_inputField = page.locator(`input[name="annuitant.qa.name_MIDDLE"]`);
    this.lastName_inputField = page.locator(`input[name="annuitant.qa.name_LAST"]`);
    this.suffixSelector = page.getByLabel('Select an option(optional)');
    this.socialSecurityNumberInput = page.locator(`input[name="annuitant.ssn"]`);
    this.birthDateInput = page.locator(`input[name="annuitant.qa.birthday"]`);
    this.maleGenderRadioBtn = page.locator('input[name="annuitant.gender"]').first();
    this.phoneInput = page.locator('input[name="annuitant.phone"]').first();
    this.attorneyYesRadio = page.locator('input[name="annuitant.qa.attorney.in.fact"]').first();
    this.spouseRelationshipRadio = page.locator('input[name="annuitant.qa.relationship.to.owner"]').first();
    this.addressLineFirstInput = page.locator('input[name="annuitant.qa.residence.address_PART1"]');
    this.addressLineSecondInput = page.locator('input[name="annuitant.qa.residence.address_PART2"]');
    this.cityInput = page.locator('input[name="annuitant.qa.residence.address_CITY"]');

  }

  async open() {
    await this.page.goto('');
  }

  async checkPageHeading (value: string) {
    const headingText = await this.pageHeading.textContent();
    expect(headingText).toBe(value);
  }

  async clickContinueBtn() {
    await this.continueButton.click();
  }

  async fillFirstName(value: string) {
    await this.firstName_inputField.fill(value);
  }

  async fillMiddleName(value: string) {
    await this.middleName_inputField.fill(value);
  }

  async fillLastName(value: string) {
    await this.lastName_inputField.fill(value);
  }

  async fillSSN(value: string) {
    await this.socialSecurityNumberInput.fill(value);
  }

  async fillDOB(value: string) {
    await this.birthDateInput.fill(value);
  }

  async selectMaleGender() {
    await this.maleGenderRadioBtn.click();
  }

  async fillPhone(value: string) {
    await this.phoneInput.fill(value);
  }

  async yesAttorneyClick() {
    await this.attorneyYesRadio.click();
  }

  async spouseRelationshipClick() {
    await this.spouseRelationshipRadio.click();
  }

  async fillFirstAddress(value: string) {
    await this.addressLineFirstInput.fill(value);
  }

  async fillSecondAddress(value: string) {
    await this.addressLineSecondInput.fill(value);
  }

  async fillCity(value: string) {
    await this.cityInput.fill(value);
  }
}
