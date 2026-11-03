import React, { useState } from 'react'

const emptyForm = { 
  name : '',
  role : '',
  email : '',
  location : '',
  skills : '',
  about : '',

}

const inputClasses = 'mb-4 w-full rounded-md border border-gray-400 px-3 py-2 outline-none focus:border-blue-700'
const labelClasses = 'mb-1 block text-sm font-medium text-gray-700'

const ProfileForm = ({ addProfile }) => {
  const [formData, setFormData] = useState(emptyForm)

  const submitHandler = (e) => {
    e.preventDefault()
    addProfile(formData)
    setFormData(emptyForm)
    console.log('form submitted')
    // console.log(formData)
  }

  const onChangeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    // console.log(formData)
  }



  return (
    <form onSubmit={submitHandler} className='border rounded-lg border-gray-200 bg-white p-6'>
      <h2 className='mb-4 text-xl font-bold text-gray-900 '>Create a profile</h2>

      <label className={labelClasses}>Name</label>
      <input className={inputClasses} name='name' value={formData.name} onChange={onChangeHandler} placeholder='Your name' type="text" required  />
      
      <label className={labelClasses}>Role</label>
      <input className={inputClasses} name='role' value={formData.role} onChange={onChangeHandler} placeholder='Frontend Developer' type="text" required  />

      <label className={labelClasses}>Email</label>
      <input className={inputClasses} name='email' value={formData.email} onChange={onChangeHandler} placeholder='you@example.com' type="email" required  />

      <label className={labelClasses}>Location</label>
      <input className={inputClasses} name='location' value={formData.location} onChange={onChangeHandler} placeholder='Hyderabad, Telangana' type="text" required  />
      
      <label className={labelClasses}>Skills</label>
      <input className={inputClasses} name='skills' value={formData.skills} onChange={onChangeHandler} placeholder='React, Express, Mongo' type="text" required  />

      <label className={labelClasses}>About</label>
      <textarea className={inputClasses} name='about' value={formData.about} onChange={onChangeHandler} />

      <button type='submit' className='rounded-lg bg-blue-700 text-white px-6 py-2 hover:bg-blue-800'>
        Save Profile
      </button>

{/* name, placeholder, id, htmlFor, submit btn */}
    </form>
  )
}

export default ProfileForm