module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
      './public/index.html'
  ],
  theme: {
    //You can edit any part of the bootstrap replacer package here.
    /*bootstrapReplacement : theme => ({
      default : {
        typography : {
          display : {
            1 : {
              fontSize : '20rem',
            }
          }
        }
      }
    }),*/
    
  },
  variants: {},
  plugins: [
    require('tailwindcss-bootstrap-replacement')
  ],
}
