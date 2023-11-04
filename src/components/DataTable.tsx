import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props{
    title:string;
}

const DataTable = (props:Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Anderson', email: 'bob@example.com' },
    { id: 5, name: 'Ella Brown', email: 'ella@example.com' },
    { id: 6, name: 'EJanella Brown', email: 'ella@example.com' },
    { id: 7, name: 'Jane Brown', email: 'ella@example.com' },
    { id: 8, name: 'JaneElla Brown', email: 'ella@example.com' },
    { id: 9, name: 'EJaneasdlla Brown', email: 'ella@example.com' },
    { id: 10, name: 'aJanesdla Brown', email: 'Janeella@example.com' },
    { id: 11, name: 'afzxclla Brown', email: 'ella@example.com' },
    { id: 12, name: 'Ezxvlla Brown', email: 'eJanella@example.com' },
    { id: 13, name: 'ella Brown', email: 'ellaJane@example.com' },
    { id: 14, name: 'Edafla Brown', email: 'elJanela@example.com' },
    { id: 15, name: 'John Doe', email: 'john@exJaneample.com' },
    { id: 16, name: 'Jane Smith', email: 'janJanee@example.com' },
    { id: 17, name: 'Alice Johnson', email: 'aJanelice@example.com' },
    { id: 18, name: 'Bob Anderson', email: 'sdbob@example.com' },
    { id: 19, name: 'Ella Brown', email: 'jhella@example.com' },
    { id: 20, name: 'Easlla Brown', email: 'sdella@example.com' },
    { id: 21, name: 'hgElla Brown', email: 'hgella@example.com' },
    { id: 22, name: 'jjElla jhrown', email: 'fgella@example.com' },
    { id: 23, name: 'Ella town', email: 'dsaella@example.com' },
    { id: 24, name: 'jla jown', email: 'ggella@example.com' },
    { id: 25, name: 'Ejla Brown', email: 'asella@example.com' },
    { id: 26, name: 'yla Broj', email: 'ella@example.com' },
    { id: 27, name: 'rla Brom', email: 'ella@example.com' },
    { id: 28, name: 'ja grov', email: 'ella@example.com' },
    { id: 29, name: 'dlla hown', email: 'ella@example.com' },
    { id: 30, name: 'sa Bnnown', email: 'gfsella@example.com' },
    { id: 30, name: 'f lab rown', email: 'jetella@example.com' },
    { id: 32, name: ' alla j wn', email: ',mella@example.com' },
    { id: 33, name: 'd llasd wn', email: 'bcvbella@example.com' },
    { id: 34, name: 'Ella Brown', email: 'mnvella@example.com' },
    { id: 35, name: 'John Doe', email: 'john@example.com' },
    { id: 36, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 37, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 38, name: 'Bob Anderson', email: 'bob@example.com' },
    { id: 39, name: 'Ella Brown', email: 'ella@example.com' },
    { id: 40, name: 'EJanella Brown', email: 'ella@example.com' },
    { id: 41, name: 'Jane Brown', email: 'ella@example.com' },
    { id: 42, name: 'JaneElla Brown', email: 'ella@example.com' },
    { id: 43, name: 'EJaneasdlla Brown', email: 'ella@example.com' },
   
    
    
  ];
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOptionClick = (userId: number) => {
    toast.info(`Options clicked for User ID ${userId}`);
  };

  return (
    <div className="block p-4 mt-10 gap-1 pb-2 text-slate-600 text-sm font-semibold font-['Inter']">
      <div className="text-xl">{props.title}</div>
      <table className="w-full rounded-lg">
        <thead>
          <tr className="h-11 border bg-gray-50 rounded-xl gap-2 text-slate-600 text-xs font-semibold font-['Inter'] tracking-wide">
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr className="h-11 gap-2 text-slate-600 text-xs font-semibold font-['Inter'] tracking-wide " key={user.id}>
              <td className="pl-4">{user.id}</td>
              <td className="flex items-center">
                <img
                  className="w-[40px] h-[40px] rounded-[15px] p-1"
                  src={`https://picsum.photos/id/`+user.id+`/200/300`}
                  alt="new"
                />
                <div className="">{user.name}</div>
              </td>
              <td className="">{user.email}</td>
              <td className="">
                <button
                  className="w-6 h-6 relative h-1/2"
                  onClick={() => handleOptionClick(user.id)}
                >
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex  mt-10">
      <button
          onClick={() => paginate(currentPage - 2)}
          disabled={currentPage === 1}
          className="btn  mr-2"
        >
       {"<<"}
        </button>

        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn  mr-2"
        >
       {"<"}
        </button>
        {Array.from({ length: Math.ceil(userData.length / usersPerPage)>2?3:2 }).map(
          (page, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`btn mx-3 ${
                currentPage === index + 1 ? 'btn-primary' : 'btn'
              }`}
            >
              {index + 1}
            </button>
          )
        )}

        <div className='text-center flex items-center '>. . . .</div>
        {Array.from({ length: Math.ceil(userData.length / usersPerPage)>3?Math.ceil(userData.length / usersPerPage)-3:0 }).map(
          (page, index) => (
            <button
              key={index}
              onClick={() => paginate(index + Math.ceil(userData.length / usersPerPage)-1)}
              className={`btn mx-3 ${
                currentPage === index + Math.ceil(userData.length / usersPerPage)-1? 'btn-primary' : 'btn'
              }`}
            >
              {index + Math.ceil(userData.length / usersPerPage)-1}
            </button>
          )
        )}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(userData.length / usersPerPage)}
          className="btn  ml-2"
        >
          {">"}
        </button>
        <button
          onClick={() => paginate(currentPage + 2)}
          disabled={currentPage === Math.ceil(userData.length / usersPerPage)}
          className="btn  ml-2"
        >
          {">>"}
        </button>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default DataTable;
