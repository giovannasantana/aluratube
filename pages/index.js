import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const estiloDaHomePage = { backgroundColor: "red" };
    return (
        <div style={estiloDaHomePage}>
            <Menu></Menu>
            <Header></Header>
            <Timeline></Timeline>
        </div>
    );
}

export default HomePage

// Componentes em um mesmo arqueivo (podem ser feitos em arquivos diferentes)
function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/*<img src="banner" /> */}
            <img src={`https://github.com/${config.github}.png`} />
            {config.name}
            {config.job}
        </StyledHeader>
    )
}

function Timeline() {
    return (
        <div>
            Timeline
        </div>
    )
}