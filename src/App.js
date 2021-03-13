import logo from './logo.svg';
import './App.css';
import GithubImage from './github-mark.png';

function App() {
    return ( 
        < div className = "container text-center" >
            < h1 className = "py-5 text-uppercase"> GitHub Profile</h1>
            <form>
                <div className="form-group">
                    <label>Github user</label>
                    <div className="input-group">
                        <input type="text" 
                        className="form-control"
                        required
                        />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-success">
                                Search
                            </button>
                        </span>
                    </div>
                </div>
            </form>
            <div className="py-5">
                <img src={GithubImage} 
                className="responsive rounded-circle"
                alt="Logo do Git-Hub" 
                height="100px"
                />
                <h1 className="pt-5">
                    <a href="https://github.com/MessiasRFreitas" target= "_new">
                        Messias Freitas
                    </a>
                </h1>
                <h3>Belo Horizonte</h3>
                <p>
                    <a href="https://messiasfreitas.com" target="_new" className="text-info">
                        https://messiasfreitas
                    </a>

                </p>
            </div>
        </div >
    );
}

export default App;