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

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}

function Header() {
    return (
        <div>
            Header
        </div>
    )
}

function Timeline() {
    return (
        <div>
            Timeline
        </div>
    )
}