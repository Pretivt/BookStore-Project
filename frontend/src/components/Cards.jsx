import React from 'react';

function Cards({ item }) {
  if (!item) {
    return <div></div>;
  }

  return (
    <>
      <div className='mt-4 p-3'>
        <div className="card w-92  mx-4 my-4  hidden  lg:block  bg-slate-100 lg-mx-15 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <div className="card-body">
            <figure>
              {/* Use the absolute URL directly */}
              <img src={item.image} alt={item.name} />
            </figure>
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white  duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
