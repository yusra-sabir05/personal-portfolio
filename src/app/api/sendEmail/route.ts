import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { senderName, senderEmail, subject, message } = req.body;

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

        try {
            // Send the email using Nodemailer
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
