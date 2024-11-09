import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { senderName, senderEmail, subject, message } = await req.json();

        // Create a transporter object using SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587, // Port for TLS
            secure: false, // Use TLS
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // App password
            },
        });

        // Email message options
        const mailOptions = {
            from: `"${senderName}" <${senderEmail}>`, // Sender's name and email
            to: 'your-email@gmail.com', // The email where you want to receive contact messages
            subject: subject, // Email subject
            text: message, // Email body content
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
