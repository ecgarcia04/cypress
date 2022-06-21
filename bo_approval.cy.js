describe('Testing Approval', () => {
  it('Bo logs in to review and approve requests', () => {
    cy.visit('https://apex.oracle.com/pls/apex/r/egarcia/sampleapprovals123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100/home')
    //Verify the correct application was rendered
    cy.contains('Sample Approvals')
    //cy.get('#R28150311755517846793_heading').should("contain", "Sample Cards")
    cy.get('#R14180646276384366438_heading').should("contain", "Sample Approvals")
    //Login with the username setup in environment variables
    var userName = Cypress.env("salUserName")
    cy.get('#P9999_USERNAME').type(userName)
    //cy.get('#P9999_USERNAME').type("bo")
    //cy.get('#P101_USERNAME').type(userName)
    //Use an environment variable defined in cypress.json so password is not exposed
    //The false log ensures the password is not printed on the cypress test runner
    var passWord = Cypress.env("salPassWord")
    cy.get('#P9999_PASSWORD').type(passWord, {log: false})
    //cy.get('#P9999_PASSWORD').type("Demo2022", {log: false})
    //Test Invalid login credentials
    //cy.get('#P101_PASSWORD').type("test")
    //Click the Sign In button
    cy.get('button').should('contain.text', 'Sign In')
    cy.wait(200)
    //cy.get('#B28150314578786846801').click();
    cy.get('#B14180648377555366454').click()
    //cy.get('button').click()       
    cy.wait(200)
    //Verify authentication worked and the home page is displayed
    cy.get('.t-HeroRegion-title').should("contain", "Sample Approvals")
    cy.get('#R15427996399105931258_heading').should("contain", "About This App")
    cy.wait(200)
    cy.get('#t_Button_navControl').click()
    cy.wait(200)
    cy.get('#t_TreeNav_3 > .a-TreeView-content > .a-TreeView-label').click()
    cy.get(".t-Breadcrumb-label").should("contain", "My Approvals")
    cy.get('#R14103772756390466081').click()
    cy.get('[data-rownum="1"] > .a-CardView > .a-CardView-actions > .a-CardView-actionsSecondary > .approve > .a-CardView-buttonIcon').click()
    cy.get(".t-Alert-title").should("contain", "Task approved")
  })
})