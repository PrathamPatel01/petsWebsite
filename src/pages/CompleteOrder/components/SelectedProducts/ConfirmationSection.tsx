import { useContext } from "react";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/tipography";
import { CartContext } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 12.99

export function ConfirmationSection() {
  const { cartQuantity, cartItemsTotal } = useContext(CartContext);
  
  const formattedTotalItemsPrice = formatMoney(cartItemsTotal)
  const formattedTotalPrice = formatMoney(cartItemsTotal + DELIVERY_PRICE)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return(
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="l">total items</RegularText>
        <RegularText>$ {formattedTotalItemsPrice}</RegularText>      
      </div>
      <div>
        <RegularText size="l">Delivery</RegularText>
        <RegularText>$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" size="xl">Total</RegularText>
        <RegularText weight="700" size="xl">R$ {formattedTotalPrice}</RegularText>
      </div>

      <Button 
        btnValue="Confirm Order" 
        type="submit"
        disabled={cartQuantity <= 0}
        size="order"
        />
    </ConfirmationSectionContainer>
  )
}