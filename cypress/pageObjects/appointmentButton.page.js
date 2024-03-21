class AppointmentButtonPage {
    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/";
    }
    
    static visit() {
        cy.visit(this.url);
    }

    static get appointmentButton() {
        return cy.get("#btn-make-appointment");
    }

}

export default AppointmentButtonPage;
