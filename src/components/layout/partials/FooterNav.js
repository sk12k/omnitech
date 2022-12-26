import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Form, Modal, Input } from "antd";
import emailjs from "@emailjs/browser";

const { TextArea } = Input;

const initialToSend = { from_name: "",
mobile: "",
message: "",
reply_to: "",}

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    onSubmit(e);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [toSend, setToSend] = useState(initialToSend);

  const handleChange = (e) => {
    e.preventDefault();

    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_rob7hlp", "template_35t3u2s", toSend, "vsWtSuQGus7fgmimP")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend(initialToSend)
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div>
      <Modal
        title="Contact Us"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="mt-32">
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input
                type="text"
                name="from_name"
                placeholder="Your name"
                value={toSend.from_name}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Mobile">
              <Input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={toSend.mobile}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                type="text"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Query">
              <TextArea
                rows={4}
                maxLength={300}
                type="text"
                name="message"
                placeholder="Query"
                value={toSend.message}
                onChange={handleChange}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <nav {...props} className={classes}>
        <ul className="list-reset">
          <li>
            <Link to="#0" onClick={showModal}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="#0">About us</Link>
          </li>
          <li>
            <Link to="#0">FAQ's</Link>
          </li>
          <li>
            <Link to="#0">Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
