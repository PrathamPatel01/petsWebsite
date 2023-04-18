import { InfinityCarousel } from "../../../../components/InfinityCarrousel";
import { FormerTitle } from "../../../../components/tipography";
import { photosData } from "../../../../data/photosData";
import { productsTypeData } from "../../../../data/products/productsTypeData";
import { PhotosAndProductsContainer, ProductsDisplay, ProductsDisplayItem } from "./styles";

export function PhotoSection(){
  return(
    <PhotosAndProductsContainer className="container">
      <FormerTitle size="l">Favourite</FormerTitle>
      <ProductsDisplay>
        {productsTypeData.map(item => {
          return(
            <ProductsDisplayItem key={item.id}>
              <div>
                <img src={item.image}/>
              </div>
              <p>{item.name}</p>
            </ProductsDisplayItem>
          )
        })}
      </ProductsDisplay>

      <div>
        <FormerTitle size="l">Our pet customers</FormerTitle>
        <InfinityCarousel data={photosData}/>
      </div>
    </PhotosAndProductsContainer>
  )
}