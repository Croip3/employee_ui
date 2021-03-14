/*  ======
    HEADER
    ====== */

const NavBtn = ({ text, active }) => {
    let cssclass = "navbtn";

    if (active === "true") {
        cssclass = cssclass + " navbtn_active";
    }

    return (
        <div className={cssclass}>
            <p className="navbtn-text">{text}</p>
            <div className="navbtn-border"></div>
        </div>
    );
};

const Header = () => {
    return (
        <header>
            <div id="wrapper-profile-pic">
                <img
                    id="profile-pic"
                    src="./pictures/profile pictures/girl-1848454_640.jpg"
                ></img>
            </div>
            <p id="employee-name">Julia Bergmann</p>
            <div className="navbtn-border"></div>

            <NavBtn text="Dashboard" active="true" />
            <NavBtn text="Kontakte" />
            <NavBtn text="Urlaub" />
            <NavBtn text="Krankheit" />
            <NavBtn text="Einstellungen" />
        </header>
    );
};

/*  =======
    CONTENT
    ======= */

const Title = ({ title }) => {
    return (
        <div id="content-title">
            <p>{title}</p>
        </div>
    );
};

const Card = ({ bg, title, text }) => {
    let cssclass = "card";
    cssclass = cssclass + " " + bg;

    return (
        <div className={cssclass}>
            <div className="card-header">
                <div className="card-header-space"></div>
                <p className="card-header-title">{title}</p>
            </div>
            <p>{text}</p>
        </div>
    );
};

const CardSpace = () => {
    return <div className="card-space"></div>;
};

const Ticket = ({ title }) => {
    return (
        <div className="ticket">
            <p className="ticket-title">{title}</p>
            <div className="ticket-progress"></div>
        </div>
    );
};

const Status = ({ title }) => {
    return (
        <div className="status">
            <p className="staus-header">{title}</p>
            <Ticket />
        </div>
    );
};

const Content = () => {
    return (
        <div id="content">
            <Title title="Dashboard" />
            <div className="content-dashboard">
                <div className="row">
                    <Card title="Anouncements" text="" bg="card_red" />
                    <CardSpace />
                    <Card title="Events" text="" bg="card_blue" />
                    <CardSpace />
                    <Card title="Upcoming" text="" bg="card_blue" />
                </div>
                <div className="card card_white ticket-status">
                    <div className="card-header">
                        <div className="card-header-space"></div>
                        <p className="card-header-title">Ticket Status</p>
                    </div>
                    <div id="all-tickets">
                        <div className="status">
                            <p className="status-header">New Tickets</p>
                            <Ticket />
                            <Ticket />
                            <Ticket />
                        </div>

                        <div className="status">
                            <p className="status-header">Open Tickets</p>
                            <Ticket />
                        </div>

                        <div className="status">
                            <p className="status-header">Closed Tickets</p>
                            <Ticket />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* base construct */
const Template = () => {
    return (
        <div id="template">
            <Header />
            <Content />
        </div>
    );
};

class App extends React.Component {
    render() {
        return <Template />;
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
