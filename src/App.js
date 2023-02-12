import './App.css';

function App() {
  return (
    <div>
        <div>
            <div>
                Your Todos
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Descriptiosn</th>
                        <th scope='col'>Assigned</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Feed dog</td>
                        <td>Eric</td>
                    </tr>
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
