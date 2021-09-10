# demo-restaurant-nuxt-contentful

 An example which uses content managed in Contentful to generate an archetypal restaurant site using Nuxt.

 👉 https://demo-restaurant-contentful-nuxt.netlify.app/
 

## Usage for Development and Deployment



### add the Contentful creds to your project as environment variable

You can use the Netlify CLI for this

```

# Create or link your project with Netlify
netlify create
# or
netlify link

# Add the Contentful Space ID
netlify env:set CONTENTFUL_SPACE_ID XXX

# Add the Contentful Content Delivery API access token
netlify env:set CONTENTFUL_CONTENT_API_TOKEN XXX

# Run Netlify Build to prime your build with the data 
# This will use your centrally managed env vars
netlify build

# You now have data to build against
netlify dev
```

