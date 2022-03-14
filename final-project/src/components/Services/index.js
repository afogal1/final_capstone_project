import React from 'react';
import Icon1 from '../../images/moon.svg';
import Icon2 from '../../images/quiz.svg';
import Icon3 from '../../images/undraw.svg';
import { 
    ServicesContainer,
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP
} from './ServicesElements';

const Services = () => {
return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Stark Capabilities</ServicesH2>
                <ServicesP>
                Stark Excavating is structured to provide a one source solution to meet project needs.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Materials</ServicesH2>
                <ServicesP>
                Stark Materials Company, Inc. operates three ReadyMix concrete batch plants and three sand and gravel quarries in McLean and Champaign counties.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Safety at Stark</ServicesH2>
                <ServicesP>At Stark, we are committed to providing the safest workplace for our employees, our clients and the general public. Our belief that employees are the greatest and most valuable asset is the foundation of our unwavering commitment to safety.   
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        
    </ServicesContainer>
)
}

export default Services