// src/lib/api.ts
export const submitContactForm = async (formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }) => {
    // In a production environment, you would send this to your backend
    // For now, we'll simulate an API call with a delay
    console.log('Form data to be submitted:', formData);
    
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demonstration
        const isSuccess = Math.random() > 0.2; // 80% success rate
        
        if (isSuccess) {
          resolve({ success: true, message: 'Message sent successfully!' });
        } else {
          reject(new Error('Failed to send message. Please try again.'));
        }
      }, 1500);
    });
  };