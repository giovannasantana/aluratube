import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const estiloDaHomePage = { backgroundColor: "red" };

    //console.log(config.playlists);

    return (
        <div style={estiloDaHomePage}>
            <Menu></Menu>
            <Header></Header>
            <Timeline playlists={config.playlists}></Timeline>
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
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/*<img src="banner" /> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);
    //Statement
    //Retorno por expressão
    return (
        <div>
            {playlistNames.map((playlistNames) => {
                return playlistNames;
            })}
        </div>
    )
}