import { ShoppingCartSimple, User } from "phosphor-react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import { CartWrapper, HeaderButtonsContainer, HeaderContainer, LoginDialog, LoginWrapper, PagesNavigators } from "./styles"


export function Header(){
  const { cartQuantity } = useContext(CartContext)

  return(
    <HeaderContainer>
      <NavLink to="/">
        <h1>Tails of Joy</h1>
      </NavLink>
        
      <PagesNavigators>
        <NavLink to="/home">
         <p>Home</p> 
        </NavLink>
        <NavLink to="/about">
          <p>About</p>
        </NavLink>
        <NavLink to="/products">
          <p>Products</p>
        </NavLink>
        <NavLink to="/services">
          <p>Services</p>
        </NavLink>
      </PagesNavigators>

      <HeaderButtonsContainer>
          <LoginWrapper>
            <User size={32} weight="bold" />
              <p>Login</p>
          </LoginWrapper>
          <LoginDialog className="dialog active"> 
            <NavLink to="/login" >
              <button>
                Login
              </button>
            </NavLink>
            <p>New Here? <NavLink to="/register">Create an account</NavLink></p>
          </LoginDialog>
        <CartWrapper>
          {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          <NavLink to="/complete-order">
            <ShoppingCartSimple size={32} weight="bold" />
          </NavLink>
        </CartWrapper>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}