import { FormerSubtitle, FormerTitle } from "../../components/tipography";
import { OurProductsContainer, ProductsAndFilters, ProductsContainer } from "./styles";
import { ProductCard } from "./components/ProductCard";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { FilterOptionsContainer } from "./components/Filter";
import { CartContext } from "../../contexts/CartContext";

export function OurProducts(){
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState("0");
  const { checked, filterProductsPerCategory, products, orderProducts } = useContext(CartContext)
  const itemsPerPage =  window.innerWidth < 550 ? 10 
  : window.innerWidth < 900 ? 12 
  : window.innerWidth < 1244 ? 9 : 15;
  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;

    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products]);


  useEffect(() => {
    filterProductsPerCategory(checked)
  }, [checked])

  useEffect(() => {
    orderProducts(selected)
  }, [selected])

  return(
    <OurProductsContainer className="container">
      <FormerTitle size="l">
      Selection of the best products
      </FormerTitle>
      <ProductsAndFilters>
        <div>
          <span>SORT BY</span>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value="0">Most Relevant</option>
            <option value="1">Lowest price</option>
            <option value="2">Biggest price</option>
            <option value="3">A-Z name</option>
            <option value="4">Z-A name</option>
          </select>
        </div>

        <FilterOptionsContainer />

        <ProductsContainer>
          <div className="products-grid">
            {currentTableData.map(product => {
              return(
                <ProductCard key={product.id} product={product} />
              )
            })}        
          </div>
          <Pagination
            currentPage={currentPage}
            totalItems={products.length}
            itemsPerPage={itemsPerPage}
            onPageChange={page => setCurrentPage(page)}
          />
        </ProductsContainer>
      </ProductsAndFilters>
    </OurProductsContainer>
  )
}