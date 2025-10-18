import './App.css'
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <HeaderCv>
                <nav>
                    <img src="" alt="" title=""/>
                    <ul>
                        <li>About me</li>
                        <li>1</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </HeaderCv>

            <SectionCv></SectionCv>

            <MainCv></MainCv>

            <SectionCv></SectionCv>

            <SectionCv></SectionCv>

            <SectionCv></SectionCv>

            <FooterCv></FooterCv>
        </div>

    )
}

export default App


const HeaderCv = styled.header`
    width: auto;
    height: 100px;
    background-color: darkcyan;
        nav{
            height: 50px;
            border: 1px solid darkcyan;
        }
`

const MainCv = styled.main`
    height: 200px;
    border: 1px solid black;
    `

const SectionCv = styled.section`
    height: 200px;
    border: 1px solid red;
    `

const FooterCv = styled.footer`
    height: 200px;
   border: 1px solid blue;
    `

;