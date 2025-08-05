# Email Setup Instructions

## Overview
The contact form now sends emails to `avidtechusa@gmail.com` when users submit the form. The system uses Nodemailer with Gmail SMTP.

## Setup Steps

### 1. Gmail App Password Setup
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable if not already enabled)
3. Go to "Security" → "App passwords"
4. Generate a new app password for "Mail"
5. Copy the generated 16-character password

### 2. Environment Variables
Edit the `.env.local` file in your project root and replace the placeholder values:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important:** 
- Use your actual Gmail address
- Use the 16-character app password (not your regular Gmail password)
- Never commit `.env.local` to version control

### 3. Testing
1. Start your development server: `npm run dev`
2. Visit: `http://localhost:3000/api/test-email` to test the email system
3. Fill out the contact form on your website
4. Submit the form
5. Check if the email is received at `avidtechusa@gmail.com`

## Email Format
The email will include:
- Contact information (name, email, phone, service interest)
- The user's message
- Submission timestamp
- Plain text format for compatibility

## Troubleshooting
- If emails aren't sending, check your Gmail app password
- Ensure 2-Step Verification is enabled on your Google account
- Check the browser console for any error messages
- Verify the `.env.local` file is in the project root

## Security Notes
- The `.env.local` file is automatically ignored by Git
- App passwords are more secure than regular passwords
- The email service uses Gmail's SMTP with TLS encryption 