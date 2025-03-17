import React from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
    return (
        <div>
            <Header />
            <main className="container">
                <PostList />
                <Sidebar />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default App;
