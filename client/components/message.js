
import Link from 'next/link';


const Message = ({ msg }) => {
  return (
    <div className='flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img className='mx-auto h-10 w-auto' src='/logo.png' alt='Workflow' />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            {msg}
          </h2>
                 <div className='rounded-md shadow mt-10'>
                    <Link href='/product/new'>
                      <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>
                        Mint Your Product 
                      </a>
                    </Link>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
