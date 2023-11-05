describe("Test suite", () => {

    beforeEach(() => {
      cy.visit("https://www.amazon.com/")
    })


    it.only("Valid you can see the Amazon logo", () => {
        cy.get('#nav-logo-sprites').should("be.visible")

    })

    it("Valid you can change the language", () => {
        cy.get('#icp-nav-flyout').click()
        cy.get(':nth-child(6) > .a-radio > label > .a-icon').click()
        cy.get('#icp-save-button > .a-button-inner > .a-button-input').click()

    })

    it("Valid you can search", () => {
        
        cy.get('#twotabsearchtextbox').click()
        cy.get('#twotabsearchtextbox').type("Mouse")
        cy.get('#nav-search-submit-button').click()
        
    })

    it("Valid you can add something to the cart", () => {
        cy.get('#twotabsearchtextbox').click()
        cy.get('#twotabsearchtextbox').type("Mouse")
        cy.get('#nav-search-submit-button').click()
        cy.get('[data-asin="B094PS5RZQ"] > .sg-col-inner > .s-widget-container > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-top-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()
        cy.get('#add-to-cart-button').click()

    
    })

    it("Valid the copyright is visible", () => {
        cy.get('.navFooterCopyright > :nth-child(2)').should("be.visible")

        
    })




})