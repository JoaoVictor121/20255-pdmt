function App () {
  return( 
  <div
  style="{{margin: 'auto', width: 768, backgroundColor: '#EEE' , padding: 12, borderRadius: 8}}">
    <label
    htmlFor="nome"
    style={{display: 'block', marginBottom: 4}}>
      Nome:
    </label>
    <input
    type="text"
    id="nome"
    style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline:'none'}} />
    <button
    style= {{marginTop: 12, padddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none'  }}>

    </button>
    
  </div>
  )
}

export default App