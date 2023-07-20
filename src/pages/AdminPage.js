import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
        <div>
            <form>
                <h2 className=" text-2xl mt-4">Title</h2>
                <input type="text" placeholder="Title: Event Title" />
                <h2 className=" text-2xl mt-4">Address</h2>
                <input type="text" placeholder="address to the event"/>
                <h2 className=" text-2xl mt-4">Images</h2>
                <p className=" text-gray-600 text-sm">Add event images</p>
                <div className=" flex gap-2">
                <input type="text" placeholder={'Upload using a link ...jpg'} />
                <button className=" bg-gray-200 px-4 rounded-2xl">Add&nbsp;Photo</button>
                </div>
                <div className=" mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-col-6">
                    <button className=" flex border bg-transparent rounded-2xl p-8 lg:text-2xl text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" h-6 w-6 lg:w-8 lg:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                            Upload
                    </button>
                </div>
                <h2 className=" text-2xl mt-4">Description</h2>
                <p className=" text-gray-600 text-sm">Description of the event</p>
                <textarea/>
                <h2 className=" text-2xl mt-4">Event date and time</h2>
                <p className=" text-gray-600 text-sm">Select the date the event will hold and time</p>
                <div className=" grid grid-cols-2 gap-2"> 
                    <div>
                        <h3 className=" mt-2 mb-1"> Select date</h3>
                        <input type="text" placeholder="12-05-2023"/>
                    </div>
                    <div>
                        <h3 className=" mt-2 mb-1"> Select Time</h3>
                        <input type="text" placeholder="12:00"/>
                    </div>
                </div>
                
            </form>
        </div>

      <div className=" text-center mt-3">
        <Link
          to={"/"}
          className=" inline-flex gap-2 bg-primary text-black py-2 px-6 rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add Ticket
        </Link>
      </div>  

    </div>
  );
};

export default AdminPage;
