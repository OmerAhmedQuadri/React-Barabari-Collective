import React from 'react'

const DogCard = ({ dog, isLoading, getRandomDog }) => {
  return (
    <div className='flex w-full max-w-md flex-col gap-4 rounded-2xl p-5 bg-white shadow-xl'>
        
        {
            dog && (

                <>

                    <img 
                        src={dog.image.url} 
                        alt={dog.name} 
                        className='h-60 w-full rounded-xl object-cover '
                    />

                    <h1 className='text-center text-3xl font-bold text-gray-900'>{dog.name}</h1>

                    <ul className='flex flex-col gap-2.5'>
                        <li>
                            
                        </li>
                    </ul>
                </>


            )
        }


        <button
            className='w-full rounded-lg bg-orange-500 font-semibold text-white transition hover:bg-orange-600 py-3'
            onClick={getRandomDog}
            disabled={isLoading}
        >  
            {isLoading ? 'fetching...' : 'Get Random Dog'}
        </button>

    </div>
  )
}

export default DogCard