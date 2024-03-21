import AppointmentButtonPage from "../../pageObjects/appointmentButton.page";
import AppointmentPage from "../../pageObjects/appointmentForm.page";
import ConfirmationPage from "../../pageObjects/confiormation.page";
import LoginForm from "../../pageObjects/login.page";

describe("Scenario block name", () => {
    beforeEach(() => {
        AppointmentButtonPage.visit();
    });
  
    it("Make An Appointment", () => { 
        // Actions
        AppointmentButtonPage.appointmentButton.click();
        LoginForm.username.type("John Doe");
        LoginForm.password.type("ThisIsNotAPassword");
        LoginForm.loginButton.click();
        AppointmentPage.facility.select("Seoul CURA Healthcare Center");
        AppointmentPage.readmissionBox.check();
        AppointmentPage.medicaid.click();
        AppointmentPage.calendar.click();
        AppointmentPage.date.contains("30").click();
        AppointmentPage.comment.type("CURA Healthcare Service");
        AppointmentPage.bookButton.click();

        // Validation
        ConfirmationPage.confirmedFacility.should('have.text', 'Seoul CURA Healthcare Center');
        ConfirmationPage.confirmedReadmission.should("have.text", "Yes");
        ConfirmationPage.confirmationProgram.should("have.text", "Medicaid");
        ConfirmationPage.confirmedDate.should("contain", "30");
        ConfirmationPage.confirmedComment.should("have.text", "CURA Healthcare Service");
    });

    it("Appointment History Empty", () => { 
        // Actions
        AppointmentButtonPage.appointmentButton.click();
        LoginForm.username.type("John Doe");
        LoginForm.password.type("ThisIsNotAPassword");
        LoginForm.loginButton.click();
        AppointmentPage.sidebarButton.click();
        
        // Validation
        AppointmentPage.sidebar.should("have.class", "active");

        // Action
        AppointmentPage.historyButton.click();

        // Validation
        AppointmentPage.history.should("contain", "No appointment.");

    });

  });
  