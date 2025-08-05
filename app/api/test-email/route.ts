import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email credentials not configured. Please check your .env.local file.' },
        { status: 500 }
      );
    }

    // Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Format the test email content
    const emailContent = `
      Test Email - Contact Form Setup:
      
      This is a test email to verify that the Seven Lines Trucking contact form email system is working properly.
      
      Test sent: ${new Date().toLocaleString()}
    `;

    // Send test email
    const info = await transporter.sendMail({
      from: `"Seven Lines Trucking" <${process.env.EMAIL_USER}>`,
      to: 'avidtechusa@gmail.com',
      subject: 'Test Email - Seven Lines Contact Form',
      text: emailContent,
    });

    console.log('Test message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true,
      message: 'Test email sent successfully! Check avidtechusa@gmail.com',
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      { error: 'Failed to send test email. Check your credentials and try again.' },
      { status: 500 }
    );
  }
} 