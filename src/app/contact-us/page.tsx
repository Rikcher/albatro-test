import React from 'react';
import ContactUsForm from '@/components/ContactUsForm';

const ContactUsPage = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl font-bold mb-8 text-start">Contact Us</h1>
      <ContactUsForm />
    </div>
  );
};
export default ContactUsPage;
