import PracticePageVariable from "../page-objects/practicepage_variables";

export default new class PracticePage extends PracticePageVariable {
    
    constructor(){
        super();
    }

    loadApplication(webUrl){
        cy.visit(webUrl)
    }

    selectRadioButtons(){
        cy.get(this.radioButton).check('radio3').should('be.checked')
        cy.get(this.radioButton).check('radio2').should('be.checked')

        if(cy.get(this.radioButton).check('radio2').should('be.checked') == true){

           expect(radio3).not.to.be.checked
        }

    }

    captureSuggession(south,republic){
        cy.get(this.suggessionClassEx).type(south).type('{downarrow}').type('{enter}')
        cy.get(this.suggessionClassEx).clear()
        cy.get(this.suggessionClassEx).type(republic).type('{downarrow}').type('{enter}')
    }

    checkCheckboxes(){
        cy.get(this.checkboxes).check(['option1', 'option2', 'option3'])
        cy.get(this.checkboxes).uncheck('option1').should('not.be.checked')
    
    }

    showAndHide(){
        if(cy.get(this.hideButton).click()){
            cy.get(this.displayedField).should('not.be.visible')
        }
        
        if( cy.get(this.showButton).click()){
            cy.get(this.displayedField).should('be.visible')
        }

    }

    confirmwebTableFixedHeader(){
        cy.xpath(this.joePostmanAmount).should('contain',46)
        cy.contains(this.totalAmountCollected).should('contain',296)
        cy.get(this.amountColumn).then(($cells) =>{
            const total = $cells.toArray().map((el) => el.innerText).map(parseFloat)
            const sum = Cypress._.sum(total)
            cy.log('Total is ${sum}')
        })

    }

    confirmiFrame(){
        cy.get(this.iFrame).should('be.visible')
        cy.get(this.allAccessPlaneLink).click()
    }

}