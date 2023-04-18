import DogCat from '../../../../assets/dog-cat-puppy-kitten.png';
import { Benefits, BenefitsSubtitle, BenefitsTitle, ButtonContainer, IntroContainer, Paragraph, Stat, Stats, StatTitle } from './styles';
import { WhatsappLogo } from 'phosphor-react';
import { RegularText } from '../../../../components/tipography';


export function Intro() {
  return(
    <IntroContainer className="container">
      <Benefits>
        <BenefitsTitle size="l">Tails Of Joy</BenefitsTitle>
        <BenefitsSubtitle color="green-primary">Complete care for your pet</BenefitsSubtitle>
        <Paragraph size="l">
        Tails Of Joy has a complete structure to take care of your pet, from a veterinary office, bathing and grooming area, in addition to accessories and feed of the highest quality! We are open from Monday to Saturday, from 8 am to 6 pm
        </Paragraph>

        <a target="_blank" rel="noreferrer" href="https://wa.me/+918693043038" >
          <ButtonContainer>
            <WhatsappLogo size={32}/>
            <p>Schedule your grooming now</p>
          </ButtonContainer>
        </a>
      </Benefits>

      <img className="home-img" src={DogCat} alt="two cats and two dogs side by side" />
            
      <Stats>
        <Stat>
          <StatTitle color="bg-dark" size="l">Clinic</StatTitle>
          <RegularText>
          We have veterinarians available from Monday to Saturday, from 9 am to 5 pm, with the equipment and complete structure to better serve you.
          </RegularText>
        </Stat>

        <Stat>
          <StatTitle color="bg-dark" size="l">Bath!</StatTitle>
          <RegularText>
            Various bathing and grooming options for dogs and cats, such as hygienic grooming, complete grooming, baby grooming, as well as nail trimming and ear cleaning.
          </RegularText>
        </Stat>

        <Stat>
          <StatTitle color="bg-dark" size="l">Taxi Pet</StatTitle>
          <RegularText>
          We pick up and take your pet to your home for a small fee (variable depending on location).
          </RegularText>
        </Stat>
      </Stats>
    </IntroContainer>
  )
}