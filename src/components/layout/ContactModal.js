import React, {useState} from "react";
import emailjs from '@emailjs/browser';



const ContactModal = ({  }) => {
  
  const [toSend, setToSend] = useState({
    from_name: '',
    mobile: '',
    message: '',
    reply_to: '',
  });

 

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_rob7hlp',
      'template_7ozrkyq',
      toSend,
      'vsWtSuQGus7fgmimP'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    
            <div>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  value={toSend.mobile}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="message"
                  placeholder="Query"
                  value={toSend.message}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="reply_to"
                  placeholder="Your email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
                <button type="submit">Submit </button>
              </form>
            </div>
           
  );
};

export default ContactModal;
