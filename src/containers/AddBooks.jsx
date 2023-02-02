import React, { useState } from "react";

const AddBooks = () => {
  const initialState = { title: "", author: "" };
  const [newData, setNewData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main role="main">
      <div className="bg-slate-200">
        <div className="container text-center mx-auto py-12">
          <h1 className="text-2xl">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form className="flex justify-center mt-8" onSubmit={handleSubmit}>
            <div className="mr-2">
              <input
                value={newData.title}
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Titre"
                required
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div className="mr-2">
              <input
                value={newData.author}
                type="text"
                id="author"
                placeholder="Auteur/Auteure"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Ajouter le livre!!
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center">
          <ul className="w-full text-md font-medium text-gray-900 bg-white">
            <li className="w-full px-4 py-2 border border-gray-200 rounded-md my-3">
              Profile
            </li>
            <li className="w-full px-4 py-2 border border-gray-200 rounded-md my-3">
              Settings
            </li>
            <li className="w-full px-4 py-2 border border-gray-200 rounded-md my-3">
              Messages
            </li>
          </ul>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Effacer tout les livres
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddBooks;
