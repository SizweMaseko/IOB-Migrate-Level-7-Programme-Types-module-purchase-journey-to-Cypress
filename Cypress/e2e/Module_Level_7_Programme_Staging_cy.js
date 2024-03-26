// Level 7 Programme enrolment - Cypress Test

describe('Level 7 Programme Enrolment', () => {
    it('Enrols in Financial Advice (QFA) program', () => {
      // Open the website
      cy.visit('https://learningneverends.iob.ie');
  
      // Set window size
      cy.viewport(1334, 740);
  
      // Click on "View courses"
      cy.contains('View courses').click();
  
      // Click on the Financial Advice (QFA) program
      cy.get('.swiper-slide-active > .programmes-card__financial-planning h3').click();
  
      // Click on "Enrol now"
      cy.contains('Enrol now').click();
  
      // Hover over the logo
      cy.get('.logo').trigger('mouseover');
  
      // Input student ID
      cy.get('input:nth-child(3)').click().type('S2100');
  
      // Input password
      cy.get('#password').click().type('Pass1234');
  
      // Click on "Next"
      cy.get('#next').click();
  
      // Scroll to the top of the page
      cy.window().scrollTo(0, 0);
  
      // Scroll to the top of the page again (duplicate command)
      cy.window().scrollTo(0, 0);
  
      // Click on "Commit"
      cy.get('name=commit').click();
  
      // Fill in mobile number
      cy.get('#mobile_number_fake').click();
      cy.get('#mobile_number_fake').click().type('+27731223537');
  
      // Click on "Commit"
      cy.get('name=commit').click();
  
      // Click on the employer button
      cy.get('.employer .button').click();
  
      // Scroll to the top of the page
      cy.window().scrollTo(0, 0);
  
      // Click on form action button
      cy.get('.form__actions:nth-child(7) > .button').click();
  
      // Click on form action button again
      cy.get('.form__actions:nth-child(5) > .button').click();
  
      // Click on a module step
      cy.get('.modules_module_step').click();
  
      // Select a checkbox
      cy.get('.checkbox:nth-child(4)').click();
  
      // Click on a disabled element
      cy.get('.disabled').click();
  
      // Hover over a disabled element
      cy.get('.disabled').trigger('mouseover');
  
      // Move the mouse out from a disabled element
      cy.get('.disabled').trigger('mouseout');
  
      // Click on a back button
      cy.get('.modules .back-button').click();
  
      // Scroll to the top of the page
      cy.window().scrollTo(0, 0);
  
      // Click on a toggle button
      cy.get('.direct_debit_toggle_1 > .boolean:nth-child(3)').click();
  
      // Click on another toggle button
      cy.get('.direct_debit_toggle_2 > .boolean:nth-child(3)').click();
  
      // Click on yet another toggle button
      cy.get('.direct_debit_toggle_3 > .boolean:nth-child(3)').click();
  
      // Input direct debit name
      cy.get('#direct_debit_name').click().type('dsfsssd');
  
      // Click on a label
      cy.get('.has-message:nth-child(1) > label').click();
  
      // Input direct debit name again
      cy.get('#direct_debit_name').click().type('dsfsssd');
  
      // Click on another label
      cy.get('.has-message > label').click();
  
      // Input direct debit address line 1
      cy.get('#direct_debit_address_line_1').click().type('dssdsdssd');
  
      // Input direct debit address line 2
      cy.get('#direct_debit_address_line_2').click().type('fsdfddsfddfs');
  
      // Click on a grid container
      cy.get('.padding-y-nav-height > .grid-container').click();
  
      // Input direct debit BIC
      cy.get('#direct_debit_bic').click();
  
      // Toggle a toggle button
      cy.get('.direct_debit_toggle_1 > .boolean:nth-child(3)').click();
  
      // Click on a form action button
      cy.get('.form__actions:nth-child(5) > .button').click();
  
      // Click on a checkbox
      cy.get('.checkbox:nth-child(2)').click();
  
      // Click on yet another checkbox
      cy.get('.checkbox:nth-child(4)').click();
    });
  });