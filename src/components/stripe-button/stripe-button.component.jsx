import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ThCqAdqveKRziePvLO4xWRwO';

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return (
        <StripeCheckout
          label='Pay Now'
          name= 'Clothing App'
          billingAddress
          shippingAddress
          image='https://i.ibb.co/ypkgK0X/blue-beanie.png'
          description={`Your total is ${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        >
        </StripeCheckout>
    )

}

export default StripeCheckoutButton;
