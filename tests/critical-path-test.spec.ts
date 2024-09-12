import { test, expect } from "@playwright/test";
import { testData } from "./testData/testData.json";
import { textValues } from "./testData/testData.json";
import { suffixValues } from "./testData/testData.json";
import { PageObjects } from "../pages/globalObjects";

let pageObjects: PageObjects;

test.beforeEach(async ({ page }) => {
  pageObjects = new PageObjects(page);
  await pageObjects.open();
});

test("QA Form critical path test", async ({ page }) => {

  await expect(page.getByText(textValues[0].homePageHeading)).toBeVisible();
  await expect(page.getByText(textValues[0].homePageSubHeading)).toBeVisible();
  await pageObjects.clickContinueBtn();
  
  await pageObjects.checkPageHeading(textValues[0].annuitantFormHeading);
  await pageObjects.fillFirstName(testData[0].firstName01);
  await pageObjects.fillMiddleName(testData[0].middleName01);
  await pageObjects.fillLastName(testData[0].lastName01);
  await pageObjects.suffixSelector.selectOption(suffixValues[0].seniour);
  await pageObjects.fillSSN(testData[0].socialSecNum);
  await pageObjects.fillDOB(testData[0].birthdate01);
  await pageObjects.selectMaleGender();
  await pageObjects.fillPhone(testData[0].phoneValue);
  await pageObjects.yesAttorneyClick();
  await pageObjects.spouseRelationshipClick();
  await pageObjects.clickContinueBtn();

  await pageObjects.checkPageHeading(textValues[0].annuitantFormHeading);
  await pageObjects.fillFirstAddress(testData[0].firstAddress01);
  await pageObjects.fillSecondAddress(testData[0].firstAddress01);
  await pageObjects.fillCity(testData[0].testCity01);

  await page.getByLabel('State').selectOption('AL');
  await page.getByPlaceholder('Zip').click();
  await page.getByPlaceholder('Zip').fill('66400');
  await page.locator('div').filter({ hasText: /^Yes$/ }).nth(1).click();

  await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('Annuitant\'s Email').click();
  // await page.getByPlaceholder('Annuitant\'s Email').fill('123@qwe.con');
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('First Name').click();
  // await page.getByPlaceholder('First Name').fill('Test 01 firstname');
  // await page.getByPlaceholder('Middle Name').click();
  // await page.getByPlaceholder('Middle Name').fill('Test 01');
  // await page.getByPlaceholder('Last Name').click();
  // await page.getByPlaceholder('Last Name').fill('Test last name');
  // await page.getByPlaceholder('Last Name').click();
  // await page.getByPlaceholder('Last Name').fill('Test last name 02');
  // await page.getByLabel('Select an option(optional)').selectOption('SR.');
  // await page.getByPlaceholder('Trust Name').click();
  // await page.getByPlaceholder('Trust Name').fill('test trust name');
  // await page.getByPlaceholder('00 0000').click();
  // await page.getByPlaceholder('00 0000').fill('328 23 84728');
  // await page.getByPlaceholder('MM/DD/YYYY').click();
  // await page.getByPlaceholder('MM/DD/YYYY').fill('11/11/1997');
  // await page.locator('div').filter({ hasText: /^M$/ }).nth(1).click();
  // await page.getByRole('radio').nth(2).check();
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('Address Line 1').click();
  // await page.getByPlaceholder('Address Line 1').fill('test residense address');
  // await page.getByPlaceholder('Address Line 2').click();
  // await page.getByPlaceholder('Address Line 2').fill('test residence address 2');
  // await page.getByPlaceholder('City').click();
  // await page.getByPlaceholder('City').fill('another test city');
  // await page.getByLabel('State').selectOption('AL');
  // await page.getByPlaceholder('Zip').click();
  // await page.getByPlaceholder('Zip').fill('66401');
  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('(000) 000-').click();
  // await page.getByPlaceholder('(000) 000-').fill('(345) 345-34533');
  // await page.getByRole('radio').nth(1).check();
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('Passport Number').fill('345345345');
  // await page.getByPlaceholder('(Passport) Country of Issue').click();
  // await page.getByPlaceholder('(Passport) Country of Issue').fill('erwerwr');
  // await page.getByPlaceholder('Email').click();
  // await page.getByPlaceholder('Email').fill('qwe@qwe.com');
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await page.locator('.form-check > div').first().click();
  // await pageObjects.clickContinueBtn();

  // await page.getByLabel('Primary Beneficiaries').locator('div').nth(1).click();
  // await page.getByPlaceholder('First Name').fill('Test beneficiar 01');
  // await page.getByPlaceholder('Middle Name').click();
  // await page.getByPlaceholder('Middle Name').fill('Test benef middle name 01');
  // await page.getByPlaceholder('Last Name').click();
  // await page.getByPlaceholder('Last Name').fill('Test benef last name 01');
  // await page.getByLabel('Select an option(optional)').selectOption('SR.');
  // await page.getByPlaceholder('Percentage').click();
  // await page.getByPlaceholder('Percentage').fill('100');
  // await page.getByPlaceholder('Relationship').click();
  // await page.getByPlaceholder('Relationship').fill('relative');
  // await page.getByPlaceholder('00 0000').click();
  // await page.getByPlaceholder('00 0000').fill('234 23 42344');
  // await page.getByRole('radio').first().check();
  // await page.getByRole('button', { name: 'Save' }).click();
  // await expect(page.getByLabel('Primary Beneficiaries').getByText('100%')).toBeVisible();
  // await expect(page.getByTitle('Remove Element').getByRole('img')).toBeVisible();
  // await expect(page.getByText('Contingent Beneficiaries (optional)0%')).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('Decedent Name').fill('decedent name test');
  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByLabel('Date of Birth').fill('12/12/1980');
  // await page.getByLabel('Date of Death').focus();
  // await page.getByLabel('Date of Death').fill('06/07/2011');
  // await page.getByPlaceholder('YYYY', { exact: true }).click();
  // await page.getByPlaceholder('YYYY', { exact: true }).fill('1998');
  // await page.getByPlaceholder('$').click();
  // await page.getByPlaceholder('$').fill('$300');
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByText('Source of Funds')).toBeVisible();
  // await expect(page.getByRole('heading', { name: 'Premium and Tax Qualification' })).toBeVisible();
  // await expect(page.getByLabel('Source of Funds').locator('image')).toBeVisible();
  // await page.getByLabel('Source of Funds').locator('image').click();
  // await page.getByPlaceholder('Surrendering Company Name').click();
  // await page.getByPlaceholder('Surrendering Company Name').fill('test company name');
  // await page.getByLabel('Surrendering Company Account').click();
  // await page.getByLabel('Surrendering Company Account').fill('test answer field');
  // await page.locator('input[name="premium\\.and\\.tax\\.qualification\\.status\\.qa\\.source\\.of\\.funds\\.0\\.0\\.fullOrPartial"]').first().check();
  // await page.getByPlaceholder('$').click();
  // await page.getByPlaceholder('$').fill('$300');
  // await page.locator('input[name="premium\\.and\\.tax\\.qualification\\.status\\.qa\\.source\\.of\\.funds\\.0\\.0\\.isPenaltyFree"]').first().check();
  // await page.locator('input[name="premium.and.tax.qualification.status.qa.source.of.funds.0.0.transferStartWhen"]').first().check();
  // await page.getByLabel('Surrendering Plan Type(Non-').click();
  // await page.getByLabel('Surrendering Plan Type(Non-').fill('test answer 01');
  // await page.getByLabel('Surrendering Product Type (').click();
  // await page.getByLabel('Surrendering Product Type (').fill('test answer 02');
  // await page.locator('input[name="premium\\.and\\.tax\\.qualification\\.status\\.qa\\.source\\.of\\.funds\\.0\\.0\\.ownedByType"]').first().check();
  // await page.getByRole('group', { name: 'Owner Name', exact: true }).getByPlaceholder('First Name').click();
  // await page.getByRole('group', { name: 'Owner Name', exact: true }).getByPlaceholder('First Name').fill('Test name 01');
  // await page.getByRole('group', { name: 'Owner Name', exact: true }).getByPlaceholder('Middle Name').click();
  // await page.getByRole('group', { name: 'Owner Name', exact: true }).getByPlaceholder('Middle Name').fill('Test name 02');
  // await page.getByRole('group', { name: 'Owner Name', exact: true }).getByPlaceholder('Last Name').click();
  // await page.getByRole('group', { name: 'Owner Name', exact: true }).getByPlaceholder('Last Name').fill('Test name 03');
  // await page.getByRole('group', { name: 'Owner Name', exact: true }).getByLabel('Select an option(optional)').selectOption('SR.');
  // await page.getByRole('group', { name: 'Joint Owner Name (optional)' }).getByPlaceholder('First Name').click();
  // await page.getByRole('group', { name: 'Joint Owner Name (optional)' }).getByPlaceholder('First Name').fill('Test name 01');
  // await page.getByRole('group', { name: 'Joint Owner Name (optional)' }).getByPlaceholder('Middle Name').click();
  // await page.getByRole('group', { name: 'Joint Owner Name (optional)' }).getByPlaceholder('Middle Name').fill('Test name 02');
  // await page.getByRole('group', { name: 'Joint Owner Name (optional)' }).getByPlaceholder('Last Name').click();
  // await page.getByRole('group', { name: 'Joint Owner Name (optional)' }).getByPlaceholder('Last Name').fill('Test name 03');
  // await page.getByRole('group', { name: 'Joint Owner Name (optional)' }).getByLabel('Select an option(optional)').selectOption('SR.');
  // await page.getByRole('group', { name: 'Insured / Annuitant Name (' }).getByPlaceholder('First Name').click();
  // await page.getByRole('group', { name: 'Insured / Annuitant Name (' }).getByPlaceholder('First Name').fill('Test name 01');
  // await page.getByRole('group', { name: 'Insured / Annuitant Name (' }).getByPlaceholder('Middle Name').click();
  // await page.getByRole('group', { name: 'Insured / Annuitant Name (' }).getByPlaceholder('Middle Name').fill('Test name 02');
  // await page.getByRole('group', { name: 'Insured / Annuitant Name (' }).getByPlaceholder('Last Name').click();
  // await page.getByRole('group', { name: 'Insured / Annuitant Name (' }).getByPlaceholder('Last Name').fill('Test name 03');
  // await page.getByRole('group', { name: 'Insured / Annuitant Name (' }).getByLabel('Select an option(optional)').selectOption('SR.');
  // await page.getByRole('button', { name: 'Save' }).click();
  // await expect(page.getByRole('heading', { name: 'Premium and Tax Qualification' })).toBeVisible();
  // await expect(page.locator('div').filter({ hasText: /^1$/ })).toBeVisible();
  // await expect(page.getByText('test answer field')).toBeVisible();
  // await expect(page.getByTitle('Edit Element')).toBeVisible();
  // await expect(page.getByTitle('Remove Element')).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Premium and Tax Qualification' })).toBeVisible();
  // await expect(page.getByText('Funds Summary: The total')).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Premium and Tax Qualification' })).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Premium and Tax Qualification' })).toBeVisible();
  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Premium and Tax Qualification' })).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByText('Do you want to authorize')).toBeVisible();
  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Premium and Tax Qualification' })).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('Name of Financial Institution').fill('test fin institution');
  // await page.getByPlaceholder('Type of Account').click();
  // await page.getByPlaceholder('Type of Account').fill('test type of account');
  // await page.getByPlaceholder('Name(s) on Bank Account').click();
  // await page.getByPlaceholder('Name(s) on Bank Account').fill('test text');
  // await page.getByPlaceholder('Routing Number').click();
  // await page.getByPlaceholder('Routing Number').fill('3454353455');
  // await page.getByPlaceholder('Account Number').click();
  // await page.getByPlaceholder('Account Number').fill('435345345');
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('Routing Number').click();
  // await page.getByPlaceholder('Routing Number').press('ControlOrMeta+a');
  // await page.getByPlaceholder('Routing Number').fill('021000021');
  // await page.getByPlaceholder('Account Number').click();
  // await page.getByPlaceholder('Account Number').press('ControlOrMeta+a');
  // await page.getByPlaceholder('Account Number').fill('00123456789');
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Premium and Tax Qualification' })).toBeVisible();
  // await expect(page.getByText('I/we agree to the following:')).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').nth(1).check();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').nth(1).check();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Annuity Disclosure' })).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await expect(page.locator('.col-12')).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'Download the Buyer\'s Guide to' }).click();
  // const page1 = await page1Promise;
  // await expect(page.getByRole('heading', { name: 'Buyers Guide' })).toBeVisible();
  // await page.getByRole('main').locator('div').filter({ hasText: 'Buyers Guide Download the' }).nth(1).click();
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('First Name').click();
  // await page.getByPlaceholder('First Name').fill('Test');
  // await page.getByPlaceholder('Middle Name').click();
  // await page.getByPlaceholder('Middle Name').fill('Test');
  // await page.getByPlaceholder('Last Name').click();
  // await page.getByPlaceholder('Last Name').fill('Test');
  // await page.getByRole('group', { name: 'Attorney-in-Fact\'s Full Legal' }).click();
  // await page.getByLabel('Select an option(optional)').selectOption('SR.');
  // await page.getByPlaceholder('MM/DD/YYYY').click();
  // await page.getByPlaceholder('MM/DD/YYYY').fill('10/01/2020');
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Powers of Attorney' })).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await page.locator('div').filter({ hasText: /^Yes$/ }).first().click();
  // await page.getByRole('radio').nth(2).check();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Powers of Attorney' })).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Suitability Questionnaire' })).toBeVisible();
  // await page.getByPlaceholder('Owner Tax Bracket').click();
  // await page.getByPlaceholder('Owner Tax Bracket').fill('10');
  // await page.getByPlaceholder('Owner Source of Income').click();
  // await page.getByPlaceholder('Owner Source of Income').fill('300');
  // await page.getByLabel('Owner Annual Income').click();
  // await page.getByLabel('Owner Annual Income').fill('$300');
  // await page.getByLabel('Estimated Gross Monthly').click();
  // await page.getByLabel('Estimated Gross Monthly').fill('$30');
  // await page.getByLabel('Employment (optional)').click();
  // await page.getByLabel('Employment (optional)').fill('$300');
  // await page.getByLabel('Retirement (optional)').click();
  // await page.getByLabel('Retirement (optional)').fill('$300');
  // await page.getByLabel('Social Security (optional)').dblclick();
  // await page.getByLabel('Social Security (optional)').fill('$300');
  // await page.getByLabel('Pension (optional)').click();
  // await page.getByLabel('Pension (optional)').fill('$300');
  // await page.getByLabel('Investments (optional)').click();
  // await page.getByLabel('Investments (optional)').fill('$300');
  // await page.getByLabel('Other (optional)').click();
  // await page.getByLabel('Other (optional)').fill('$300');
  // await page.getByLabel('Estimated Monthly Household').click();
  // await page.getByLabel('Estimated Monthly Household').fill('$300');
  // await page.getByLabel('Monthly Disposable Income').click();
  // await page.getByLabel('Monthly Disposable Income').fill('$300');
  // await page.getByLabel('Existing Assets: (such as').click();
  // await page.getByLabel('Existing Assets: (such as').fill('$300');
  // await page.getByLabel('Existing Liquid Net Worth').click();
  // await page.getByLabel('Existing Liquid Net Worth').fill('$300');
  // await page.getByLabel('Do you currently own any').click();
  // await page.getByLabel('Do you currently own any').fill('test text');
  // await page.getByLabel('Do you currently own life').click();
  // await page.getByLabel('Do you currently own life').fill('test text');
  // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.does\\.your\\.income\\.cover\\.all\\.your\\.living\\.expenses\\.including\\.medical"]').first().check();
  // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.do\\.you\\.expect\\.changes\\.to\\.your\\.living\\.expenses"]').first().check();
  // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.do\\.you\\.anticipate\\.changes\\.in\\.your\\.out\\.of\\.pocket\\.medical\\.expenses"]').first().check();
  // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.can\\.survive\\.on\\.income\\.in\\.surrender\\.period"]').first().check();
  // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.do\\.you\\.have\\.an\\.emergency\\.fund\\.for\\.unexpected\\.expenses"]').first().check();
  // await page.locator('#a450df20-c34c-43f0-b5e7-044b468690d5-answers > div:nth-child(2) > div > .w-100 > div > div > .form-check').first().click();
  // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.what\\.is\\.your\\.current\\.living\\.arrangement"]').first().check();
  // await page.getByLabel('Monthly Cost of living').click();
  // await page.getByLabel('Monthly Cost of living').fill('$300');
  // await page.getByLabel('Why are you purchasing this').click();
  // await page.getByLabel('Why are you purchasing this').fill('test text');
  // await page.locator('.form-check > div').first().click();
  // // await page.locator('.select-border > .form-check > div').first().click();
  // await page.locator('.select-border > .form-check > div').first().click();
  // await page.locator('[id="\\35 5af7880-5fa8-43d2-bc09-3f8899c8a1b0-answers"] > div:nth-child(2) > .w-100 > .d-flex > div > .form-check > div').first().click();
  // await page.locator('[id="\\35 5af7880-5fa8-43d2-bc09-3f8899c8a1b0-answers"] > div:nth-child(2) > .w-100 > .d-flex > div:nth-child(2) > .form-check > div').click();
  // await pageObjects.clickContinueBtn();

  // await page.getByPlaceholder('Investment Experience').click();
  // await page.getByPlaceholder('Investment Experience').fill('test text');
  // await page.getByPlaceholder('Source of Funds for Purchase').click();
  // await page.getByPlaceholder('Source of Funds for Purchase').fill('test text');
  // await page.getByPlaceholder('Enter your answer here').click();
  // await page.getByText('How many years from today will you need access to your funds without a penalty?').focus();
  // await expect(page.getByText('How many years from today will you need access to your funds without a penalty?')).toBeVisible();
  // await page.locator('input[name="suitability.questionnaire.qa.how.many.years.from.today.will.you.need.access.to.your.funds.without.a.penalty"]').fill('7');
  // await page.getByText('Yes').click();
  // await pageObjects.clickContinueBtn();

  // await page.getByLabel('How many years has the life').click();
  // await page.getByLabel('How many years has the life').fill('3');
  // await page.locator('div').filter({ hasText: /^Yes$/ }).nth(1).click();
  // await page.getByPlaceholder('$').click();
  // await page.getByPlaceholder('$').fill('$300');
  // await page.getByLabel('Describe any benefits or').focus();
  // await page.getByLabel('Describe any benefits or').fill('test answer');
  // await page.getByPlaceholder('Additional Information').focus();
  // await page.getByPlaceholder('Additional Information').fill('test additional info');
  // await pageObjects.clickContinueBtn();

  // await expect(page.locator('.col-12')).toBeVisible();
  // await expect(page.getByText('I am buying an annuity recommended by my agent')).toBeVisible();
  // await expect(page.getByText('I am buying an annuity but my')).toBeVisible();
  // // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.is\\.product\\.recommended"]').first().check();
  // await page.locator('input[name="suitability.questionnaire.qa.is.product.recommended"]').first().check();
  // await expect(page.getByText('Please select one of the')).toBeVisible();
  // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.please\\.select\\.one\\.of\\.the\\.following\\.to\\.allow\\.the\\.insurance\\.company\\.to\\.better\\.understand\\.the\\.information\\.you\\.have\\.provided\\.select\\.one"]').first().check();
  // await page.locator('input[name="suitability\\.questionnaire\\.qa\\.during\\.the\\.solicitation\\.of\\.this\\.product\\.did\\.you\\.use\\.any\\.sales\\.materials\\.other\\.than\\.the\\.pre\\.printed\\.product\\.brochures\\.and\\.other\\.material\\.provided\\.by\\.the\\.company"]').first().check();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByRole('heading', { name: 'Suitability Questionnaire' })).toBeVisible();
  // await pageObjects.clickContinueBtn();

  // await page.getByRole('radio').first().check();
  // await pageObjects.clickContinueBtn();

  // await expect(page.getByText('The agent assertion around')).toBeVisible();
  // await page.getByRole('button', { name: 'Exit' }).click();
  // await page.getByText('Click here to restore your').focus();
  // await expect(page.getByText('Click here to restore your')).toBeVisible();
});