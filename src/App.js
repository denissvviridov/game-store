import {HomePage} from "./pages/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";

const  App = () => {
    return (
        <div className="App">
            <>
                <Header />
            </>
            <Routes>
                <Route path='/' element={<HomePage />}/>

            </Routes>
        </div>
    );
}

export default App;
