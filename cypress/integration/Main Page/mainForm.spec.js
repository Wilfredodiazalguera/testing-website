import { MAIN_PAGE, FORM_MESSAGES } from '../../selectors/mainPage'

const { INPUT_NAME, INPUT_EMAIL, INPUT_PHONE, INPUT_DATE, INPUT_SPECIAL_REQUEST, SUBMIT_BUTTON } = MAIN_PAGE
const { CORRECT_FORM_MESSAGE_TITLE, OTPUT_NAME, OTPUT_EMAIL, OTPUT_PHONE, OTPUT_DATE, OTPUT_TIME, OTPUT_PARTY_SIZE, OTPUT_SPECIAL_REQUEST } = FORM_MESSAGES
const INPUTS = [INPUT_NAME, INPUT_NAME, INPUT_EMAIL, INPUT_PHONE, INPUT_DATE, INPUT_SPECIAL_REQUEST]
const OUTPUTS = [OTPUT_NAME, OTPUT_EMAIL, OTPUT_PHONE, OTPUT_DATE, OTPUT_SPECIAL_REQUEST]
const DATA = [ "j", "uam", "juandiaz@gmail.com", 60604578, "October 1, 2020", "Sauces" ] 

describe('Verify the main form', () => {
    it('Check corrects inputs', () => {
        cy.goToSite()
        cy.scrollTo(0, 700)
        INPUTS.forEach((element, index) => {
            cy.get(element).type(DATA[index])
        });
        cy.get(SUBMIT_BUTTON).click()
        cy.get(CORRECT_FORM_MESSAGE_TITLE).should('contain', 'Message Sent (go back)')
        OUTPUTS.forEach((element, index) => {
            cy.get(element).contains(DATA[index+1])
        })
    });
});