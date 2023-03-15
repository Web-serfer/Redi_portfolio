import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import emailjs from "emailjs-com";


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_t957u3m",
      "template_c4oy5vo",
      form.current,
      "y9GZ3k27k1eagg46E"
    );
    e.target.reset();
  };

  const sendNotify = () => {
    toast.info("Письмо отправлено", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section id="contact">
      <h3>Клиентам</h3>
      <h2>Обратная связь</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            {/* <FaMobileAlt className="contact__option-icon" /> */}
            <i class="bi bi-phone-vibrate"></i>
            <h4>Mobile</h4>
            <a href="tel:+79222538375" target="_blank">
              Позвонить Redi
            </a>
          </article>
          <article className="contact__option">
            {/* <FaViber className="contact__option-icon" /> */}
            <h4>Viber</h4>
            <a href="viber://add?number=79222538375" target="_blank">
              Позвонить Redi
            </a>
          </article>
          <article className="contact__option">
            {/* <BsWhatsapp className="contact__option-icon" /> */}
            <h4>WhatsApp</h4>
            <a href="https://wa.me/79222538375" target="_blank">
              Позвонить Redi
            </a>
          </article>
        </div>

        {/* ==== Form ==== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Введите Имя" required />
          <input
            type="email"
            name="email"
            placeholder="Введите email"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Введите сообщение"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={sendNotify}
          >
            Отправить сообщение
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
