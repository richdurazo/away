export const options = {
additionalSignUpFields: [{
      name: 'address',                              // required
      placeholder: 'enter your address',            // required
      icon: 'https://example.com/address_icon.png', // optional
      validator: function(value) {                  // optional
        // only accept addresses with more than 10 characters
        return value.length > 10;
      }
    },
{
    type: 'select',
    name: 'location',
    placeholder: 'choose your location',
    options: [
      {value: 'us', label: 'United States'},
      {value: 'fr', label: 'France'},
      {value: 'ar', label: 'Argentina'}
    ],
    // The following properties are optional
    icon: 'https://example.com/assests/location_icon.png',
    prefill: 'us'
  }
    ]
}