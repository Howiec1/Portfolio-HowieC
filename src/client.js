import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
console.log(process.env.REACT_APP_SANITY_PROJKECT_ID);
export const client = sanityClient({
  
  projectId:"gvciomr8",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:"sk8dLAnrIssH7eqGuefdAxWYbdVP77KvYpukymutmIF0Cu0x7fNaELYXIvRxzDb7KJP1fntFKGII5K3cFs3b5cAdNCgKN5d0GfCmvon9pMN02XT20iJ1JLdHhJ40tAS6Ydbf7KPYxrDCBCMiLs3KXIZXE6ZsouxgeQbU9qFexyIDOSFUq2WP",
});
  console.log(process.env.REACT_APP_SANITY_PROJKECT_ID);
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

