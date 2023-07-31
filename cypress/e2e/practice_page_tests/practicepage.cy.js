import practice_page from "../../page-methods/practice_page"

let testingdata = null
describe('Practice page tests', () =>{
    before(() => {
        cy.fixture('testdata').then((data) =>{
            testingdata = data
        })
    })

    beforeEach(() =>{
        practice_page.loadApplication(testingdata.webUrl)
    })

    it('Validate if radio button 2 & 3 are checked individually', () =>{
        practice_page.selectRadioButtons()
    })

    it('Validate if suggession input can be autofilled with South Africa option', () =>{
        practice_page.captureSuggession(testingdata.suggessionInput1, testingdata.suggessionInput2)
    })

    it('Validate if all checkboxes can be checked and uncheck 1', () =>{
        practice_page.checkCheckboxes()
    })

    it('Validate the show and hide buttons', () =>{
        practice_page.showAndHide()
    })

    it('Validate amount data in the fix header table', () =>{
        practice_page.confirmwebTableFixedHeader()
    })

    it('Validate if the iFrame is visble and can interact with elements', () =>{
        practice_page.confirmwebTableFixedHeader()
    })

})