function MyApp({Component, pageProps}){
  return (
    <>
   <style>{`
   
   *{
    font-family: sans-serif ;
    font-weight: bold;
  }
   `} </style>
    
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
