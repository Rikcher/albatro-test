'use client';

import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/ui/InputField';
import { Form } from '@/components/ui/form';
import SubmitButton from '@/components/ui/SubmitButton';
import { fetchData } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactUsForm = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      await fetchData();
      console.log('Form Submitted', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full px-4 sm:w-[30rem]"
      >
        <InputField
          name="name"
          control={form.control}
          label="Name"
          placeholder="Your Name"
        />
        <InputField
          name="email"
          control={form.control}
          label="Email"
          placeholder="Your Email"
        />
        <InputField
          name="subject"
          control={form.control}
          label="Subject"
          placeholder="Subject"
        />
        <InputField
          name="message"
          control={form.control}
          label="Messgae"
          placeholder="Your Message"
          isTextArea
        />
        <SubmitButton>Contact</SubmitButton>
      </form>
    </Form>
  );
};
export default ContactUsForm;
