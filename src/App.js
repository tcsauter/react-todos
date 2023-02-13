import './App.css';
import TodoRowItem from "./components/TodoRowItem";

function App() {
  return (
    <div className='mt-5 container'>
        <div className='card'>
            <div className='card-header'>
                Your Todos
            </div>
            <div className='card-body'>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Descriptiosn</th>
                        <th scope='col'>Assigned</th>
                    </tr>
                    </thead>
                    <tbody>
                    <TodoRowItem />
                    <tr>
                        <th scope='row'>2</th>
                        <td>Get Haircut</td>
                        <td>Eric</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default App;
