// import style files
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// import react
import { Provider } from "react-redux";
import { useState } from "react";

// import components
import AppRoute from "./routes/Route";
import store from "./store/store";
import themeContext from "./context/themeContext";
import languageContext from "./context/languageContext";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
        <>
            <Provider store={store}>
                <themeContext.Provider value={{ darkMode, setDarkMode }}>
                    <languageContext.Provider value={{ language, setLanguage }}>
                        <AppRoute />
                    </languageContext.Provider>
                </themeContext.Provider>
            </Provider>
        </>
    );
}

export default App;
