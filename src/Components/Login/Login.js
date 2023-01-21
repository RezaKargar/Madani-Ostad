import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import { useContext } from "react";
import ModalContext from "../../store/modal-context";
import classes from "./Login.module.css";
import classnames from "classnames";
import Form from "../UI/Form/Form";

const Login = () => {
  const modalCtx = useContext(ModalContext);
  const closeLogin = () => {
    modalCtx.closeModal();
  };
  return (
    <Modal onClose={closeLogin}>
      <p className={classnames(classes["login-title"])}>ورود به سایت</p>
      <p className={classnames(classes["login-description"])}>
        با ورود به سایت میتونی به اساتید نمره بدی و کامنت بذاری
      </p>
      <Form
        buttonText="ورود"
        className={classnames(classes["login-form"])}
        long={true}
      >
        <Input
          id="email"
          labelText="پست الکترونیکی"
          type="email"
          className={classnames(classes["login-input"])}
        />
        <Input
          id="password"
          labelText="کلمه عبور"
          type="password"
          className={classnames(classes["login-input"])}
        />
      </Form>
      <p className={classnames(classes["login-signup"])}>ثبت نام</p>
    </Modal>
  );
};

export default Login;
