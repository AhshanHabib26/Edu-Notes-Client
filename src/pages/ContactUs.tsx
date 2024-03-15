import ContactUsInfo from "../components/ui/ContactUs/ContactUsInfo";
import ContactUsInput from "../components/ui/ContactUs/ContactUsInput";
import Container from "../utils/Container";

const ContactUs = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl lg:mx-auto mx-5 my-12 gap-5">
          <ContactUsInfo />
          <ContactUsInput />
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
