import{useState,useEffect} from "react"
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (page === 1) {
        setData([1, 2, 3, 4, 5]);
      } else if (page === 2) {
        setData([6, 7, 8, 9, 10]);
      } else if (page === 3) {
        setData([11, 12, 13, 14, 15]);
      } else {
        setData(null);
      }
    }, 3000);
  }
useEffect(loadData, [page]);
function handleNext() {
    setPage((currentPage) => currentPage + 1);
  }
  return (
    <>
      {loading && <p>Loading...</p>}
      <pre>{JSON.stringify(data, null, ' ')}</pre>
      <span>Current Page: {page}</span>
      <button onClick={handleNext}>Next</button>
    
    </>
  );
}
export default App;