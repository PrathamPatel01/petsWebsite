import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormerTitle, RegularText } from "../../components/tipography";
import { LoginContainer, FormContainer, LoginForm, InfosContainer } from "./styles";
import { useState } from "react";
import LoginPic from "../../assets/login-ilustration.svg"
import { Eye, EyeSlash } from "phosphor-react";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { post } from "../../axios/requsicoes";
// import { useHistory } from "react-router-dom";
// import React, { useState } from 'react';
import axios from 'axios';

interface ILogin {
  email: string;
  password: string;
}
interface LoginFormProps {
  onSuccess: (token: string) => void;
}

export function LoginPage() {
  // const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<ILogin>()
  const { colors } = useTheme()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const toastProps = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
    };
  console.log({email, password})
  async function login(data: ILogin) {
    if (!email) {
			toast.error('Email is required.', toastProps);
			return;
		}
    if (!password) {
			toast.error('Password is required.', toastProps);
			return;
		}

    try {
    //   const response = await post("login", data);
    //   const responseData = await response.json();
      const response = await axios.post('http://localhost:8080/login', { email, password });
      const token = response.data.token;

      if (!response) {
				// toast.error(token, toastProps);

				return toast.error('Please Try Again With Correct Credentials');
			}
      sessionStorage.setItem('userData', token);
      toast.success('Welcome')
      // history.push("/");
    } catch (error) {
      console.log(error)
			return toast.error('Please Try Again With Correct Credentials');

    }
  }

  const handleClickShowPassword = () => {
		setShowPassword((prevValue) => !prevValue);
	};

  return(
    <>
    <LoginContainer className="container">
      <ToastContainer />
        <div>
          <FormerTitle size="l">Access your account</FormerTitle> 
          <FormContainer>
            <LoginForm onSubmit={handleSubmit(login)}>
              <div>
                <label htmlFor="email">E-mail</label>
                <Input 
                  id="email" 
                  placeholder="Type your e-mail" 
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                  />
              </div>
              <div>
                <label htmlFor="password">
                  password
                  <NavLink to="/forgot-password">I forgot the password</NavLink>
                </label>
                <Input 
                  id="password" 
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"} 
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                  />
                {
                  showPassword ? 
                  <EyeSlash size={22} onClick={handleClickShowPassword} color={colors["base-label"]}/> :
                  <Eye size={22} onClick={handleClickShowPassword} color={colors["base-label"]}/>
                }

              </div>
              <Button btnValue="Login" size="order" type="submit" />
            </LoginForm>

            <div>
              <p>Don't have an account? <NavLink to="/register">Create your account</NavLink></p>
            </div>
          </FormContainer>
        </div>
          
          <InfosContainer>
            <FormerTitle color="green-primary" size="l">
            It's fast and free!
            </FormerTitle>
            <RegularText>
            By logging into your account you have access to exclusive offers, discounts, you can track your orders and much more! It has never been so easy to guarantee the best for your pet!</RegularText>
            <img src={LoginPic} />
          </InfosContainer>
    </LoginContainer>
    </>
  )
}