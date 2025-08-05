import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
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

    // Format the email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service Interest: ${formData.service || 'Not specified'}
      
      Message:
      ${formData.message}
      
      Submitted: ${new Date().toLocaleString()}
    `;

    // Send mail to Seven Lines (avidtechusa@gmail.com)
    const info = await transporter.sendMail({
      from: `"Seven Lines Trucking" <${process.env.EMAIL_USER}>`,
      to: 'avidtechusa@gmail.com',
      subject: `New Contact Form Submission - ${formData.name}`,
      text: emailContent,
    });

    // Send confirmation copy to the sender
    const confirmationContent = `
      Thank you for contacting Seven Lines Trucking!
      
      We have received your message and will get back to you soon.
      
      Here's a copy of your submission:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service Interest: ${formData.service || 'Not specified'}
      
      Message:
      ${formData.message}
      
      Submitted: ${new Date().toLocaleString()}
      
      ---
      Seven Lines Trucking
      Specialized RGN Superload Transportation
      Phone: (937) 206-3308
      Email: the7linesinc@gmail.com
      Website: www.sevenlinestrucking.com
    `;

    await transporter.sendMail({
      from: `"Seven Lines Trucking" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: `Thank you for contacting Seven Lines Trucking - ${formData.name}`,
      text: confirmationContent,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully',
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 