// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received contact form data:', formData); // Keep for server-side logging

    // Create a Nodemailer transporter using your Gmail SMTP details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      // IMPORTANT: Replace 'your_recipient_email@gmail.com' with the actual email address
      // where you want to receive the contact form messages.
      to: 'masangcaykyle11@gmail.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Form data received and email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form data or sending email:', error);
    return NextResponse.json({ message: 'Failed to process form data or send email.' }, { status: 500 });
  }
}
