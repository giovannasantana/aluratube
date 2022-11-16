import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estiloDaHomePage = {
        //backgroundColor: "red" 
    };

    //console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header></Header>
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    );
}

export default HomePage

// Componentes em um mesmo arqueivo (podem ser feitos em arquivos diferentes)
//function Menu() {
//    return (
//        <div>
//            Menu
//        </div>
//    )
//};


const StyledHeader = styled.div`
    .img-profile {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 30px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .banner{
        margin-top: 50px;
        padding: 0px 32px;
        gap: 16px;
        display: flex;
        width:100%;
        height:200px !important;
        object-fit: cover;
    }

`;

function Header() {
    return (
        <StyledHeader>
            <section>
                <img className="banner" src={config.banner} />
            </section>
            <section className="user-info">
                <img className="img-profile" src={`https://github.com/${config.github}.png`} />
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
    // console.log("Dentro do componente", props.playlists);

    const playlistNames = Object.keys(props.playlists);
    //Statement
    //Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                // Pra cada playlist os vídeos relacionados
                const videos = props.playlists[playlistName];
                console.log(videos);
                console.log(playlistNames);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                );
                            })};
                        </div>
                    </section>
                )
            })};
        </StyledTimeline>
    )
}