import { useContext } from "react";
import { TitleText } from "../../../../components/tipography";
import { CartContext } from "../../../../contexts/CartContext";
import { ProductCartCard } from "../ProductCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useContext(CartContext)

  return (
    <SelectedCoffeesContainer>
      <TitleText size="m">
      Selected products
      </TitleText>

      <DetailsContainer>
        <div>
          {cartItems.map(cartItem => {
            return <ProductCartCard 
              key={cartItem.id}
              product={cartItem}
            />
          })}
        </div>

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}