import AppointmentButtonPage from "./appointmentButton.page";

class AppointmentPage extends AppointmentButtonPage {
    static get url() {
        return "/#appointment";
    }

    static get facility() {
        return cy.get("#combo_facility");
    }

    static get readmissionBox() {
        return cy.get("#chk_hospotal_readmission");
    }

    static get medicaid() {
        return cy.get("#radio_program_medicaid");
    }

    static get calendar() {
        return cy.get(".input-group");
    }

    static get date() {
        return cy.get(".datepicker-dropdown");
    }

    static get comment() {
        return cy.get("#txt_comment");
    }

    static get bookButton() {
        return cy.get("#btn-book-appointment");
    }

    static get sidebarButton() {
        return cy.get("#menu-toggle");
    }

    static get sidebar() {
        return cy.get("#sidebar-wrapper");
    }

    static get historyButton() {
        return cy.get('a[href="history.php#history"]');
    }

    static get history() {
        return cy.get("[id='history']");
    }

}

export default AppointmentPage;