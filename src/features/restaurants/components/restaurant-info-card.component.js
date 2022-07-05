import React from 'react';
import { Text } from '../../../components/typography/text.component';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import {Icon, RestaurantCard, RestaurantCardCover, Info, Section, SectionEnd, Rating, Address, Open} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = 'Some Restaurant', 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
        photos = ['https://media.timeout.com/images/105894460/750/422/image.jpg'],
        address = '100 random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

const ratingArray = Array.from (new Array(Math.floor(rating)));
console.log(ratingArray)

    return (
<RestaurantCard elevation={5}>
    <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
    {/* <Card.Title title={name}  /> */}
    <Info>
    <Text variant="label">{name}</Text>
    <Section>
    <Rating>
    {ratingArray.map (()=>{
    return <SvgXml xml={star} width={20} height={20}/>

    })}
    </Rating>
    <SectionEnd>
        {isClosedTemporarily && (
            <Text variant='error'>
                Closed Temporarily
            </Text>
        )}
        <Spacer position="left" size="large">
        {isOpenNow && <Open xml={open} width={20} height={20}/>}
        </Spacer>
        <Spacer position="left" size="large">
        <Icon source={{uri:icon}}/>
        </Spacer>
    </SectionEnd>
    </Section>
    <Address>{address}</Address>
    </Info>
</RestaurantCard>    
)
}