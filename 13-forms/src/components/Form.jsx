import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    topic: 'React',
    rating: 0, 
    feedback: ''
  })
  const [feedbacks, setFeedbacks] = useState([])


  const onChangeHandler = (e) => {
    console.log(e.target.name, e.target.value)
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (formData.rating == 0) {
      alert('Please choose a rating.')
      return
    }

    if (formData.feedback.trim().length < 5){
      alert('Feedback must be atleast 5 characters')
      return
    }
    setFeedbacks([...feedbacks, {...formData, id: Date.now() }])
    console.log(feedbacks)

  }
  return (
    <div className='mx-auto max-w-xl'>
      <form onSubmit={submitHandler} className='rounded-xl bg-white p-6 shadow-xl'>
        <h1 className='font-bold text-2xl mb-4 text-orange-600'>Feedback form</h1>

        <label className='mb-1 block text-sm font-medium'>Student Name</label>
        <input 
          type="text" 
          name="studentName" 
          required 
          value={formData.studentName}
          onChange={onChangeHandler}
          className='mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-orange-500'
        />

        <label className='mb-1 block text-sm font-medium'>Student Email</label>
        <input 
          type="email" 
          name="studentEmail" 
          required 
          value={formData.studentEmail}
          onChange={onChangeHandler}
          className='mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-orange-500'
        />
        
        <label className='mb-1 block text-sm font-medium'>Topic</label>
        <select 
          name="topic"
          value={formData.topic}
          onChange={onChangeHandler}
          className='mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-orange-500'
        >
          <option value="React">React</option>
          <option value="Javascript">Javascript</option>
          <option value="HTMLCSS">HTMLCSS</option>
        </select>

        <label className='mb-1 block text-sm font-medium'>Ratings</label>
        <div className='mb-4 flex gap-2'>
          {
            [1, 2, 3, 4, 5].map(num => (
              <button
              key={num}
              onClick={() => setFormData({...formData, rating: num})}
              type='button'
              className={`h-10 w-10 rounded-lg border font-medium transition ${num <= formData.rating ? 'border-orange-500 bg-orange-500 text-white' : 'border-gray-300 text-gray-700 hover:border-orange-500' }`}
              >
                {num}
              </button>
            ))
          }
        </div>

        <label className='mb-1 block text-sm font-medium'>Feedback</label>
        <textarea 
          name="feedback" 
          required
          value={formData.feedback}
          onChange={onChangeHandler}
          rows={4}
          className='mb-2 w-full border rounded-lg border-gray-300 px-3 py-2 outline-none focus:border-orange-500'
        >

        </textarea>


        <button className='mt-2 w-full border bg-orange-500 py-2 rounded-lg font-medium text-white transition hover:bg-orange-600'>
          Submit
        </button>


      </form>


      <div>
        {/* {feedbacks.map} 
          reference for feedbacks in here : https://excalidraw.com/#json=R7buWCnmG_daXRTuNpJQk,xyMS6K7pVwGT_hInqYtd_w
        */}
      </div>


    </div>
  )
}

export default Form