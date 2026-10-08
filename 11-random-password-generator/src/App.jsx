import { useState, useEffect } from 'react'

const App = () => {
  const [password, setPassword] = useState('randompasskjsadbksj')
  const [passwordLength, setPasswordLength] = useState(8)
  const [uppercaseAllowed, setUppercaseAllowed] = useState(false)
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [symbolsAllowed, setSymbolsAllowed] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyPassword = () => {
    navigator.clipboard.writeText(password)

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }

  useEffect(() => {
    // whenever any of the values inside the dependency array changes, the password will be regenerated
    let passPool = ''
    if (lowercaseAllowed) passPool += 'abcdefghijklmnopqrstuvwxyz'
    if (uppercaseAllowed) passPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbersAllowed) passPool += '0123456789'
    if (symbolsAllowed) passPool += "!@#$%^&*()_+-=[]{}/?<>.|:;`~'"

    if (passPool == '') {
      setPassword('')
      return
    }

    let tempPass = ''
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passPool.length)
      tempPass += passPool[randomIndex]
    }
    setPassword(tempPass)

  }, [passwordLength, uppercaseAllowed, lowercaseAllowed, numbersAllowed, symbolsAllowed])

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-slate-900 text-white gap-6'>
      <h1 className='font-bold text-5xl mb-6'>Random Password Generator</h1>
      <div className='flex flex-row border-2 border-slate-600 bg-slate-800 rounded-xl p-4 gap-8'>
        <input type="text" 
          className='text-3xl rounded p-2 outline-0'
          readOnly value={password} />
        <button 
          onClick={copyPassword}
          className='transition bg-orange-500 hover:bg-orange-600 w-30 font-bold px-6 rounded-lg cursor-pointer '
        >{copied ? 'Copied!' : 'Copy'}</button>
      </div>

      {/* all the password settings div */}
      <div className='flex flex-col font-bold gap-6 text-xl'>

        {/* password length div */}
        <div className='flex gap-4'>
          <label htmlFor="pass-len" >Passsword length {passwordLength} </label>
          <input 
            type="range"
            min={4}
            max={50}
            value={passwordLength}
            onChange={event => setPasswordLength(event.target.value)}
            className='w-100 accent-orange-400'
            id='pass-len'
           />
        </div>

        {/* password config div */}
        <div className='flex flex-wrap gap-8 items-center justify-center'>
          <div className='flex items-center gap-2'>
            <input checked={uppercaseAllowed} onChange={() => setUppercaseAllowed(prev => !prev)} type="checkbox" id='upper-case' className='size-6 cursor-pointer accent-orange-500'/>
            <label htmlFor="upper-case">Uppercase</label>
          </div>
          <div className='flex items-center gap-2'>
            <input checked={lowercaseAllowed} onChange={() => setLowercaseAllowed(prev => !prev)} type="checkbox" id='lower-case' className='size-6 cursor-pointer accent-orange-500'/>
            <label htmlFor="lower-case">Lowercase</label>
          </div>
          <div className='flex items-center gap-2'>
            <input checked={numbersAllowed} onChange={() => setNumbersAllowed(prev => !prev)} type="checkbox" id='numbers' className='size-6 cursor-pointer accent-orange-500'/>
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-2'>
            <input checked={symbolsAllowed} onChange={() => setSymbolsAllowed(prev => !prev)} type="checkbox" id='symbols' className='size-6 cursor-pointer accent-orange-500'/>
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App