import "./assets/css/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header title="My Blog" baseline="An awesome baseline" />
        <Nav link="Link" />
        <main>
          <div className="content">
            <Main
              className="col-1"
              title="TITLE HEADING"
              description="Title description"
              imgSrc="./assets/img/test.jpg"
              imgAlt="image alt"
              content="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
            />
            <Main
              className="col-1"
              title="TITLE HEADING 2"
              description="Title description"
              imgSrc="./assets/img/test2.jpg"
              imgAlt="image 2 alt"
              content="Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula."
            />
            <About
              className="col-2"
              title="ABOUT ME"
              imgSrc="./assets/img/test3.jpg"
              imgAlt="image 3 alt"
              content="Cras interdum pharetra felis eu faucibus."
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
