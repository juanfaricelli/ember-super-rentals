import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]/*, hash*/) {
  return communityPropertyTypes.includes(propertyType) ? 'Community' : 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
