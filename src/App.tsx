import { useState } from 'react';

const url = 'https://api.icndb.com/jokes/random?escape=javascript';

function App() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const fetching = await fetch(url);
      const data = await fetching.json();
      setJoke(data.value.joke);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(true);
      setError(true);
    }
  };

  return (
    <div className='w-[90vw] max-w-4xl mx-auto mt-40 flex flex-col text-center items-center'>
      <img
        src='https://ajax-basic-projects-random-jokes.netlify.app/chuck.png'
        alt='chuck norris'
        className='mb-4'
      />
      <button
        className='uppercase font-semibold tracking-widest text-white rounded-xl border-4 border-[#49a6e9] bg-[#49a6e9] py-[0.375rem] px-3 text-sm shadow-xl transition duration-500 hover:bg-[#063251] hover:text-[#49a6e9]'
        onClick={fetchData}>
        make me laugh chuck!
      </button>
      {error && (
        <p className='mt-8 text-[#617d98] text-2xl'>
          Something went wrong. Please try again later.
        </p>
      )}

      {isLoading && !error && (
        <p className='mt-8 text-[#617d98] text-2xl'>Loading...</p>
      )}
      {!isLoading && <p className='mt-8 text-[#617d98] text-2xl'>{joke}</p>}
    </div>
  );
}

export default App;
