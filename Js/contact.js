function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Form submitted:', data);
    
    alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
    
    event.target.reset();
    
    return false;
  }