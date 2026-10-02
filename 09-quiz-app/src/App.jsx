import { useState } from 'react'
import Start from './components/Start'
import Question from './components/Question'
import Result from './components/Result'

const App = () => {

  // 'start' | 'running' | 'end'
  // const status = 'running'
  const [status, setStatus] = useState('start')
  const [score, setScore] = useState(0)

  const startQuiz = () => setStatus('running')

  const finishQuiz = (finalScore) => {
    setScore(finalScore)
    setStatus('end')
  }

  const restartQuiz = () => {
    setStatus('start')
    setScore(0)
  }

  return (
    <div className='flex min-h-screen items-center justify-center p-4 text-white bg-linear-135 from-slate-950 to-slate-800'>
      <div className='w-full max-w-lg'>
        <div className='rounded-xl bg-slate-900 p-8 shadow-2xl shadow-black/40'>

          <h1 className='text-center text-3xl font-semibold '>Quizz</h1>
          
          {/* start, question and result */}
          { status === 'start' && <Start startQuiz={startQuiz} />}
          { status === 'running' && <Question finishQuiz={finishQuiz}/>}
          { status === 'end' && <Result score={score} restartQuiz={restartQuiz}/>}
        </div>

      </div>
    </div>
  )
}

export default App