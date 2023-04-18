import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormerTitle, RegularText } from "../../components/tipography";
import { RegisterContainer, FormContainer, RegisterForm, InfosContainer } from "./styles";
import { useState } from "react";
import LoginPic from "../../assets/Login-ilustration.svg"
import { Eye, EyeSlash } from "phosphor-react";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { post } from "../../axios/requsicoes";

// import React, { useState } from 'react';
import axios from 'axios';

interface IRegister {
  email: string;
  password: string;
}
interface RegisterFormProps {
  onSuccess: (token: string) => void;
}

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<IRegister>()
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
  async function Register(data: IRegister) {
    if (!email || !password) {
			toast.error('Email and password are required.', toastProps);
			return;
		}

    try {
    //   const response = await post("Register", data);
    //   const responseData = await response.json();
      const response = await axios.post('http://localhost:8080/register', { email, password });
      const token = response.data.token;

      if (!response) {
				toast.error(token, toastProps);
				return;
			}

      return toast.success(`Welcome, ${token.name}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickShowPassword = () => {
		setShowPassword((prevValue) => !prevValue);
	};

  return(
    <>
    <RegisterContainer className="container">
      <ToastContainer />
        <div>
          <FormerTitle size="l">Access your account</FormerTitle> 
          <FormContainer>
            <RegisterForm onSubmit={handleSubmit(Register)}>
              <div>
                <label htmlFor="email">E-mail</label>
                <Input 
                  id="email" 
                  placeholder="Type your e-mail" 
                  value={email} onChange={(e) => setEmail(e.target.value)} required
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
                  value={password} onChange={(e) => setPassword(e.target.value)} required
                  />
                {
                  showPassword ? 
                  <EyeSlash size={22} onClick={handleClickShowPassword} color={colors["base-label"]}/> :
                  <Eye size={22} onClick={handleClickShowPassword} color={colors["base-label"]}/>
                }

              </div>
              <Button btnValue="Register" size="order" type="submit" />
            </RegisterForm>

            <div>
              <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
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
    </RegisterContainer>
    </>
  )
}