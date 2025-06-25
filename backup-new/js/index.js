const { createApp, ref } = Vue;

createApp({
  setup() {
    const WEB3FORMS_ACCESS_KEY = "1f4dd894-b680-4e95-8048-cbff80a9bfb3";

    const email = ref("");
    const error = ref("");

    const submitEmail = async () => {
      error.value = "";

      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        error.value = "Please enter a valid email address.";
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          email: email.value,
          subject: "New Email Subscriber",
        }),
      });

      const result = await response.json();
      if (result.success) {
        window.location.href = "https://www.namazie-law.com/thank-you-mailing.html";
      } else {
        error.value = "Failed to send. Please try again.";
      }
    };

    return {
      email,
      error,
      submitEmail
    };
  }
}).mount("#email-form");