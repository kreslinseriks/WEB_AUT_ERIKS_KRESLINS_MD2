import AppointmentButtonPage from "./appointmentButton.page";

class ConfirmationPage extends AppointmentButtonPage {
    static get url() {
        return "/appointment.php#summary";
    }

    static get confirmedFacility() {
        return cy.get("#facility");
    }

    static get confirmedReadmission() {
        return cy.get("#hospital_readmission");
    }

    static get confirmationProgram() {
        return cy.get("#program");
    }

    static get confirmedDate() {
        return cy.get("#visit_date");
    }

    static get confirmedComment() {
        return cy.get("#comment");
    }
}

export default ConfirmationPage;