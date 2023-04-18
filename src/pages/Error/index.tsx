import { Button } from "../../components/Button";
import { ErrorPageContainer } from "./styles";

export function Error(){

  return(
      <ErrorPageContainer className="container">
        <h1>404</h1>
        <h4>Page not found</h4>
        <p>OOPS! It looks like this page doesn't exist... 
        </p>
        <Button 
          size="backToHome" 
          btnValue="Back to home page" 
          />
      </ErrorPageContainer>
  )

}