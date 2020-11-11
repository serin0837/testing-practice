//first test case practice
describe("social link work",()=>{
    it("check all of social link work",()=>{
        cy.visit("http://serin-jeon.herokuapp.com/")
        cy.get("a[aria-label='Serin Twitter']").click()
        cy.url().should('eq', 'https://twitter.com/SerinJeon') // => true
    })
})