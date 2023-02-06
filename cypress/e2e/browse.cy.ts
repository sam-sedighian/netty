describe('Browse Page', () => {
  it('passes', () => {
    cy.visit('/');
    cy.findByRole('heading').contains(`Who's watching?`);
  });
});
