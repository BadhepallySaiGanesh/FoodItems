// import React, { useState, useEffect } from "react";

// const URL = "https://www.themealdb.com/browse.php?b=p";

// const Fooditems = () => {
//   const [MealData, setMealData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isError, setIsError] = useState({ status: false, msg: "" });

//   const fetchMeal = async (apiURL) => {
//     setLoading(true);
//     setIsError({ status: false, msg: "" });
//     try {
//       const response = await fetch(apiURL);
//       const data = await response.json();
//       const meals = data.meals; // Update to "data.meals" instead of "data.Meal"
//       setMealData(meals);
//       setLoading(false);
//       setIsError({ status: false, msg: "" });
//       if (!meals) {
//         throw new Error("Data Not Found Because U searched Worng");
//       }
//     } catch (error) {
//       setLoading(false);
//       setIsError({
//         status: true,
//         msg: error.message || "something went wrong...",
//       });
//     }
//   };

//   useEffect(() => {
//     const correctURL = `${URL}${searchTerm}`;
//     fetchMeal(correctURL);
//   }, [searchTerm]);

//   return (
//     <div>
//       <div>
//         <h1 className="compname">SoftDrink</h1>
//       </div>
//       <form className="searchbar">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="search Drinks"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </form>
//       <hr className="hr" />
//       <hr className="hr" />
//       {loading && !isError?.status && <h3>Loading...</h3>}
//       {isError?.status && (
//         <h2 style={{ color: "red", textAlign: "center" }}>{isError.msg}</h2>
//       )}
//       {!loading && !isError?.status && (
//         <ul className="cocktaildata">
//           {MealData.map((eachMeal) => {
//             const { idMeal, strMeal, strMealThumb, strYoutube, strArea } = eachMeal;
//             return (
//               <li key={idMeal}>
//                 <div>
//                   <img src={strMealThumb} alt={strMeal} />
//                 </div>
//                 <div className="text">
//                   <h3>MealName: {strMeal}</h3>
//                   <a href={strYoutube} target="_blank" rel="noopener noreferrer">
//                     Youtube
//                   </a>
//                   <span>{strArea}</span>
//                 </div>
//                 <hr />
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Fooditems;











import React, { useState, useEffect } from "react";

const URL = "https://www.themealdb.com/browse.php?b=p";

const Fooditems = () => {
  const [MealData, setMealData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  useEffect(() => {
    const fetchMeal = async (apiURL) => {
      setLoading(true);
      setIsError({ status: false, msg: "" });
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data); // Log the API response for debugging
        const meals = data?.meals || []; // Use optional chaining (?.) to handle possible missing data.meals
        setMealData(meals);
        console.log(meals);
        setLoading(false);
        setIsError({ status: false, msg: "" });
        if (!meals.length) {
          throw new Error("Data Not Found Because U searched Worng");
        }
      } catch (error) {
        setLoading(false);
        setIsError({
          status: true,
          msg: error.message || "something went wrong...",
        });
      }
    };

    const correctURL = `${URL}${searchTerm}`;
    fetchMeal(correctURL);
  }, [searchTerm]);

  return (
    <div>
      <div>
        <h1 className="compname">SoftDrink</h1>
      </div>
      <form className="searchbar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search Drinks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <hr className="hr" />
      <hr className="hr" />
      {loading && !isError?.status && <h3>Loading...</h3>}
      {isError?.status && (
        <h2 style={{ color: "red", textAlign: "center" }}>{isError.msg}</h2>
      )}
      {!loading && !isError?.status && (
        <ul className="cocktaildata">
          {MealData.map((eachMeal) => {
            const { idMeal, strMeal, strMealThumb, strYoutube, strArea } = eachMeal;
            return (
              <li key={idMeal}>
                <div>
                  <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className="text">
                  <h3>MealName: {strMeal}</h3>
                  <a href={strYoutube} target="_blank" rel="noopener noreferrer">
                    Youtube
                  </a>
                  <span>{strArea}</span>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Fooditems;









