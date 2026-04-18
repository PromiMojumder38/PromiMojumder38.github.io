export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

// Get your free Formspree endpoint at https://formspree.io
// Replace the ID below after creating a form at formspree.io/new
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message. Please try again or email me directly.');
  }

  return {
    success: true,
    message: 'Thank you for reaching out! Your message has been sent successfully.',
  };
}
