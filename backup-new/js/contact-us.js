const { createApp, ref } = Vue;

createApp({
  setup() {
    //Staging
    // const WEB3FORMS_ACCESS_KEY = "701fb8ad-3d0d-4883-8acc-ae80760c7d79"; 
    //Production
    const WEB3FORMS_ACCESS_KEY = "1f4dd894-b680-4e95-8048-cbff80a9bfb3"; 

    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const subject = ref("");
    const message = ref("");

    const errors = ref({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });

    const submitted = ref(false);

    const validate = () => {
      errors.value = {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      };

      if (!firstName.value) {
        errors.value.firstName = "First name is required.";
      }
      if (!lastName.value) {
        errors.value.lastName = "Last name is required.";
      }
      if (!email.value) {
        errors.value.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors.value.email = "Email is not valid.";
      }
      if (!subject.value) {
        errors.value.subject = "Subject is required.";
      }
      if (!message.value) {
        errors.value.message = "Message is required.";
      }

      return (
        !errors.value.firstName &&
        !errors.value.lastName &&
        !errors.value.email &&
        !errors.value.subject &&
        !errors.value.message
      );
    };

    const handleSubmit = async () => {
      if (validate()) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: `${firstName.value} ${lastName.value}`,
            email: email.value,
            subject: subject.value,
            message: message.value
          }),
        });

        const result = await response.json();

        if (result.success) {
          submitted.value = true;
          console.log(result);
          // Clear the form
          firstName.value = "";
          lastName.value = "";
          email.value = "";
          subject.value = "";
          message.value = "";
          // Redirect after submission
          window.location.href = "https://www.namazie-law.com/thank-you.html";
        } else {
          alert("Failed to send message.");
        }
      }
    };

    return {
      firstName,
      lastName,
      email,
      subject,
      errors,
      handleSubmit,
      submitted,
      message
    };
  }
}).mount('#app');
