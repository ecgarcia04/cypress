describe('Testing Salary Changes', () => {
  it('Submits request to change employee salary', () => {
    cy.visit('https://apex.oracle.com/pls/apex/r/egarcia/sampleapprovals123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100/home')
    //Verify the correct application was rendered
    cy.contains('Sample Approvals')
    //cy.get('#R28150311755517846793_heading').should("contain", "Sample Cards")
    cy.get('#R14180646276384366438_heading').should("contain", "Sample Approvals")
    //Login with the username setup in environment variables
    cy.wait(200)
    var userName = Cypress.env("demoUserName")
    cy.get('#P9999_USERNAME').type(userName)
    cy.wait(200)
    //Use an environment variable defined in cypress.json so password is not exposed
    //The false log ensures the password is not printed on the cypress test runner
    var passWord = Cypress.env("demoPassWord")
    cy.get('#P9999_PASSWORD').type(passWord, {log: false})
    cy.wait(200)
    //Test Invalid login credentials
    //cy.get('#P9999_PASSWORD').type("test")
    //Click the Sign In button
    cy.get('button').should('contain.text', 'Sign In')
    cy.wait(200)
    cy.get('#B14180648377555366454').click()     
    cy.wait(200)
    //Verify authentication worked and the home page is displayed
    cy.get('.t-HeroRegion-title').should("contain", "Sample Approvals")
    cy.get('#R15427996399105931258_heading').should("contain", "About This App")
    //Click on Hamburger menu
    cy.get('#t_Button_navControl').click({force: true})
    cy.wait(200)
    //Click on My Employees link
    cy.get('#t_TreeNav_2 > .a-TreeView-content > .a-TreeView-label').click({force: true})
    cy.get('[data-id="2"] > .a-CardView > .a-CardView-header > .a-CardView-headerBody > .a-CardView-title').should("contain", "BLAKE")
    //Click on the Salary Change button
    cy.get('[data-id="2"] > .a-CardView > .a-CardView-actions > .a-CardView-actionsPrimary > :nth-child(1)').click()
    //Verify Salary Change form is displayed
    cy.get('.ui-dialog-titlebar').should("contain", "Request Salary Change")
    cy.wait(200)
    cy.handleModal();
    //Enter 200 in the proposed salary field
    cy.selectIframe().find("#P4_PROPOSED_SALARY").type("200")
    cy.selectIframe().find('#B14184004972934004582').click()
    cy.wait(200)
    //Verify the Salary change was submitted and branched back to correct page
    cy.get('#t_TreeNav_4 > .a-TreeView-content > .a-TreeView-label').click({force: true})
    cy.wait(200)
    cy.get(".t-Breadcrumb-label").should("contain", "My Requests")
  })
})
