import ShopFront from '../../assets/old-shop-front.jpg';
import Quote from '../../assets/quote-marks.svg';
import { AboutContainer, AboutContent, Card, Cards, HistoryText, Testimonials } from './styles';
import { FormerSubtitle, FormerTitle } from '../../components/tipography';


export function About(){
  return(
    <AboutContainer className="container">
      <AboutContent>
        <div>
          <FormerTitle color="green-primary">ABOUT US</FormerTitle>
          <FormerSubtitle size="s">Our story</FormerSubtitle>
          <HistoryText size="l">
          Our story begins in 2022, with just a small room and a shearing space. Despite the initial difficulties, little by little our store took shape, we hired more and more employees, expanded the space, built the veterinary office and renovated the grooming space. Today we have 3 veterinarians, 3 bathing and grooming professionals, in addition to a space almost 3 times larger than the initial one. We also increased the variety of products sold, from accessories, hygiene products, medicines, feed, snacks, beds and much more. But we don't stop there, we are always working to bring the greatest comfort to our customers and we intend to increase our brand even more!
          </HistoryText>
        </div>
        
        <img src={ShopFront} alt='The Pet store'/>
      </ AboutContent>
      
        <Testimonials>
          <FormerTitle color="green-primary" as="h4">Depositions</FormerTitle>
          <FormerSubtitle size="l" as="h2">Opinions from our customers</FormerSubtitle>

          <Cards>
            <Card>
              <img src={Quote} alt='quotation marks'/>
              <p><i>The space is cozy, airy, good service and a wide variety of products. I also recommend bathing and grooming your pet.</i></p>
              <cite>
                <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Photo of a person on their social network profile" />
                John Doe
              </cite>
            </Card>

            <Card>
              <img src={Quote} alt='quotation marks'/>
              <p><i>I really like this store, everyone works with commitment and dedication. The price is great and the bath and grooming is perfect, the pet returns home playful and happy. I highly recommend!</i></p>
              <cite>
                <img src="https://randomuser.me/api/portraits/women/16.jpg" alt="Foto de um uma pessoa em seu perfil de rede social" />
                John 
              </cite>
            </Card>
            
            <Card>
              <img src={Quote} alt='quotation marks'/>
              <p><i>I loved the place, everyone is very polite, the space is comfortable. It really has a wide variety of options, the grooming is very good and my cat is always very well taken care of by the vets!!</i></p>
              <cite>
                <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="Photo of a person on their social network profile" />
                lily
              </cite>
            </Card>
          </Cards>
        </Testimonials>
      </AboutContainer>
  )
}