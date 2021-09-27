import '../styles/App.scss'
import CardContextProvider from  '../context/CardContext' ;

function MyApp({ Component, pageProps }) {
    
      return (
        <CardContextProvider>
          <Component {...pageProps} />
        </CardContextProvider>
      ) 
    
      
}

export default MyApp
